// Vercel Edge Middleware for Rate Limiting and Bot Protection
// Place this file in the root directory as middleware.js

import { NextResponse } from 'next/server';

// Rate limiting storage (in production, use Redis or Vercel Edge Config)
const rateLimitMap = new Map();

function getRateLimitKey(request) {
  const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             'unknown';
  const userAgent = request.headers.get('user-agent') || '';
  return `${ip}-${userAgent}`;
}

function checkRateLimit(key, maxRequests = 100, windowMs = 3600000) {
  const now = Date.now();
  const record = rateLimitMap.get(key);
  
  if (!record) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
}

function isGooglebot(userAgent) {
  return /Googlebot/i.test(userAgent);
}

function isAggressiveCrawler(userAgent) {
  const aggressiveBots = [
    /AhrefsBot/i,
    /SemrushBot/i,
    /DotBot/i,
    /MJ12bot/i,
    /Baiduspider/i,
    /YandexBot/i
  ];
  return aggressiveBots.some(pattern => pattern.test(userAgent));
}

function isSuspiciousBot(userAgent) {
  // Block suspicious bots but allow legitimate Googlebot
  if (isGooglebot(userAgent)) return false;
  
  const suspiciousPatterns = [
    /curl/i,
    /wget/i,
    /python/i,
    /scrapy/i,
    /bot.*crawler/i,
    /spider/i,
    /scraper/i
  ];
  return suspiciousPatterns.some(pattern => pattern.test(userAgent));
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get('user-agent') || '';
  
  // Block aggressive crawlers
  if (isAggressiveCrawler(userAgent)) {
    return new NextResponse('Access Denied', { status: 403 });
  }
  
  // Block suspicious bots
  if (isSuspiciousBot(userAgent)) {
    return new NextResponse('Access Denied', { status: 403 });
  }
  
  // Rate limit Googlebot more strictly
  if (isGooglebot(userAgent)) {
    const key = getRateLimitKey(request);
    if (!checkRateLimit(key, 100, 3600000)) { // 100 requests per hour
      return new NextResponse('Rate limit exceeded. Please slow down.', { 
        status: 429,
        headers: {
          'Retry-After': '3600'
        }
      });
    }
  }
  
  // Rate limit docs folder access
  if (pathname.startsWith('/docs/')) {
    const key = getRateLimitKey(request);
    if (!checkRateLimit(key, 50, 3600000)) { // 50 requests per hour for docs
      return new NextResponse('Rate limit exceeded for documentation.', { 
        status: 429,
        headers: {
          'Retry-After': '3600'
        }
      });
    }
  }
  
  // General rate limiting
  const key = getRateLimitKey(request);
  if (!checkRateLimit(key, 200, 3600000)) { // 200 requests per hour
    return new NextResponse('Rate limit exceeded', { 
      status: 429,
      headers: {
        'Retry-After': '3600'
      }
    });
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

