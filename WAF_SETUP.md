# Vercel WAF and Spend Management Setup Guide

This document provides instructions for setting up WAF rules, spend management, and bot protection on Vercel to prevent excessive bandwidth usage from Googlebot and other crawlers.

## Problem Analysis

According to Vercel logs, the vast majority of requests were from Googlebot, causing significant bandwidth consumption. The site has:
- **Thousands of documentation pages** in `/docs/core-nightly/` and `/docs/core-latest/` folders
- **Unlimited crawling** allowed with "index, follow" meta tags
- **No rate limiting** for crawlers
- **No robots.txt** restrictions

## Solutions Implemented

### 1. Robots.txt Created ✅
- Added `robots.txt` with crawl-delay of 30 seconds for Googlebot
- Blocked crawling of documentation folders (`/docs/core-nightly/`, `/docs/core-latest/`)
- Blocked aggressive crawlers (AhrefsBot, SemrushBot, etc.)
- Disallowed static assets (JS, CSS, fonts)

### 2. Meta Tags Updated ✅
- Updated robots meta tags to include crawl-delay directives
- Limited image preview sizes for Googlebot

### 3. Vercel Configuration Files Created ✅
- `vercel-waf-config.json` - WAF rules configuration
- Updated `vercel.json` with headers and rate limiting

## Setup Instructions

### Step 1: Enable Vercel WAF Managed Rulesets

1. Go to your Vercel Dashboard
2. Navigate to **Settings** → **Security** → **WAF**
3. Enable the following managed rulesets:
   - **OWASP Core Rule Set** - Blocks common attacks
   - **Vercel Bot Protection** - Blocks malicious bots
   - **Vercel Rate Limiting** - Prevents abuse

### Step 2: Configure Custom WAF Rules

**Note**: Since this is a static site, WAF rules must be configured in the Vercel Dashboard. The `vercel-waf-config.json` file is a reference for the rules you need to add.

1. In Vercel Dashboard, go to **Settings** → **Security** → **WAF** → **Custom Rules**
2. Click **"Add Rule"** and add each rule from the list below:

#### Rule 1: Block Excessive Googlebot Crawling
- **Action**: Challenge (CAPTCHA)
- **Condition**: User-Agent contains "Googlebot" AND rate > 100 requests/hour
- **Rate Limit**: 100 requests per hour per IP

#### Rule 2: Block Aggressive Crawlers
- **Action**: Block
- **Condition**: User-Agent matches: `AhrefsBot|SemrushBot|DotBot|MJ12bot|Baiduspider|YandexBot`

#### Rule 3: Limit Docs Folder Access
- **Action**: Challenge
- **Condition**: Path starts with "/docs/" AND rate > 50 requests/hour
- **Rate Limit**: 50 requests per hour per IP

#### Rule 4: Block Suspicious User Agents
- **Action**: Block
- **Condition**: User-Agent matches: `curl|wget|python|scrapy|bot|crawler|spider|scraper` (excluding Googlebot)

#### Rule 5: Rate Limit by IP
- **Action**: Challenge
- **Condition**: Rate > 200 requests/hour
- **Rate Limit**: 200 requests per hour per IP

### Step 3: Set Up Spend Management

1. Go to **Settings** → **Billing** → **Spend Management**
2. Enable **Spend Management**
3. Set up budget alerts:
   - **$50** - Warning email
   - **$100** - Warning email
   - **$200** - Warning email
4. Set **Hard Limit**: **$500**
5. Enable **Pause Production** when hard limit is reached

### Step 4: Configure Pause to Production

1. In **Spend Management**, enable **"Pause Production"**
2. This will automatically halt deployments when the budget limit is reached
3. Set notification emails to receive alerts

### Step 5: Verify robots.txt

1. Deploy the updated `robots.txt` file
2. Verify it's accessible at: `https://yourdomain.com/robots.txt`
3. Test with Google Search Console to ensure Googlebot respects the crawl-delay

## Additional Recommendations

### 1. Update Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Navigate to **Settings** → **Crawl rate**
3. Set crawl rate to **"Limit Google's maximum crawl rate"**
4. This will further reduce crawling frequency

### 2. Use Vercel Edge Config for Dynamic Rules

For more advanced rate limiting, consider using Vercel Edge Config:

```javascript
// Example: edge-config.js
export default async function handler(req) {
  const ip = req.headers.get('x-forwarded-for');
  const userAgent = req.headers.get('user-agent');
  
  // Check rate limits
  if (isGooglebot(userAgent)) {
    // Apply stricter limits for Googlebot
    if (await checkRateLimit(ip, 'googlebot', 100, 3600)) {
      return new Response('Rate limit exceeded', { status: 429 });
    }
  }
  
  return NextResponse.next();
}
```

### 3. Monitor Bandwidth Usage

1. Set up Vercel Analytics
2. Monitor bandwidth in **Analytics** → **Bandwidth**
3. Set up alerts for unusual spikes

### 4. Consider CDN Caching

1. Enable **Vercel Edge Caching** for static assets
2. Set long cache headers for documentation pages
3. Use **ISR (Incremental Static Regeneration)** for docs

## Testing

After deployment, test the following:

1. **Verify robots.txt**: `curl https://yourdomain.com/robots.txt`
2. **Test rate limiting**: Make 200+ requests quickly and verify blocking
3. **Check Googlebot**: Use Google Search Console to verify crawl rate
4. **Monitor logs**: Check Vercel logs for blocked requests

## Expected Results

- **Reduced bandwidth usage** by 70-90%
- **Controlled Googlebot crawling** (max 100 requests/hour)
- **Blocked aggressive crawlers**
- **Budget alerts** before costs escalate
- **Automatic production pause** at budget limit

## Support

If you need help:
1. Check [Vercel WAF Documentation](https://vercel.com/docs/security/waf)
2. Review [Spend Management Docs](https://vercel.com/docs/billing/spend-management)
3. Contact Vercel Support for custom rule assistance

