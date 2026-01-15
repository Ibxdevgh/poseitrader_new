# Quick Setup Guide - Fix Googlebot Excessive Crawling

## Immediate Actions Required

### 1. Deploy robots.txt ✅ (Already Created)
The `robots.txt` file has been created with:
- 30-second crawl-delay for Googlebot
- Blocked documentation folders
- Blocked aggressive crawlers

**Action**: Deploy this file to production immediately.

### 2. Configure Vercel WAF Rules (Dashboard Required)

Go to: **Vercel Dashboard** → **Your Project** → **Settings** → **Security** → **WAF**

#### Enable Managed Rulesets:
- ✅ OWASP Core Rule Set
- ✅ Vercel Bot Protection  
- ✅ Vercel Rate Limiting

#### Add Custom Rule #1: Limit Googlebot
```
Name: Limit Googlebot Crawling
Action: Challenge
Condition: 
  - User-Agent contains "Googlebot"
  - Rate limit: 100 requests per hour per IP
```

#### Add Custom Rule #2: Block Aggressive Crawlers
```
Name: Block Aggressive Crawlers
Action: Block
Condition:
  - User-Agent matches regex: (AhrefsBot|SemrushBot|DotBot|MJ12bot|Baiduspider|YandexBot)
```

#### Add Custom Rule #3: Limit Docs Access
```
Name: Rate Limit Docs Folder
Action: Challenge  
Condition:
  - Path starts with "/docs/"
  - Rate limit: 50 requests per hour per IP
```

### 3. Set Up Spend Management

Go to: **Vercel Dashboard** → **Settings** → **Billing** → **Spend Management**

1. Enable **Spend Management**
2. Set Budget Alerts:
   - $50 - Email alert
   - $100 - Email alert  
   - $200 - Email alert
3. Set **Hard Limit**: $500
4. Enable **"Pause Production"** when limit reached

### 4. Update Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property
3. Go to **Settings** → **Crawl rate**
4. Set to **"Limit Google's maximum crawl rate"**
5. Save changes

### 5. Verify Changes

After deployment, verify:
- ✅ `https://yourdomain.com/robots.txt` is accessible
- ✅ WAF rules are active in Vercel Dashboard
- ✅ Spend management is enabled
- ✅ Google Search Console crawl rate is limited

## Expected Impact

- **70-90% reduction** in bandwidth usage
- **Controlled Googlebot** crawling (max 100/hour)
- **Blocked aggressive** crawlers
- **Budget protection** with automatic pause

## Files Created

1. ✅ `robots.txt` - Crawler restrictions
2. ✅ `vercel.json` - Updated configuration  
3. ✅ `vercel-waf-config.json` - WAF rules reference
4. ✅ `WAF_SETUP.md` - Detailed setup guide
5. ✅ `QUICK_SETUP.md` - This file

## Next Steps

1. **Deploy** all changes to production
2. **Configure** WAF rules in Vercel Dashboard (see Step 2 above)
3. **Enable** Spend Management (see Step 3 above)
4. **Update** Google Search Console (see Step 4 above)
5. **Monitor** bandwidth usage over next 24-48 hours

## Support

- Vercel WAF Docs: https://vercel.com/docs/security/waf
- Spend Management: https://vercel.com/docs/billing/spend-management
- Google Search Console: https://search.google.com/search-console

