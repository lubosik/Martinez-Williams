# Deployment Checklist

## Pre-Deployment

### Content Updates
- [ ] Update firm name throughout site
- [ ] Update phone number (all locations)
- [ ] Update physical address
- [ ] Update email address
- [ ] Update office hours
- [ ] Replace placeholder images with real photos
- [ ] Update attorney names and bios
- [ ] Review and update all copy
- [ ] Update testimonials (if using real ones)
- [ ] Update service areas if needed
- [ ] Update social media links

### Configuration
- [ ] Set up Google Analytics 4 property
- [ ] Get GA4 Measurement ID
- [ ] Set up Facebook Pixel
- [ ] Get Facebook Pixel ID
- [ ] Set up Google Ads conversion tracking (if using)
- [ ] Update conversion IDs in `lib/analytics.ts`
- [ ] Create `.env.local` with all IDs
- [ ] Test analytics in development

### Legal & Compliance
- [ ] Review privacy policy content
- [ ] Update privacy policy contact information
- [ ] Verify disclaimer text is accurate
- [ ] Ensure all disclaimers are present
- [ ] Review terms of service (if applicable)
- [ ] Verify accessibility statement

### Technical
- [ ] Run `npm run build` successfully
- [ ] Fix all linting errors
- [ ] Test form submission endpoint
- [ ] Verify all images load correctly
- [ ] Test on multiple browsers
- [ ] Test on multiple devices
- [ ] Verify mobile responsiveness
- [ ] Check all links work
- [ ] Verify phone click-to-call works
- [ ] Test form validation
- [ ] Verify analytics tracking

## Domain & Hosting

### Domain Setup
- [ ] Purchase/configure domain name
- [ ] Set up DNS records
- [ ] Configure SSL certificate (automatic with Vercel)
- [ ] Verify domain ownership
- [ ] Test domain accessibility

### Hosting (Vercel)
- [ ] Create Vercel account
- [ ] Connect GitHub repository
- [ ] Configure build settings
- [ ] Add environment variables:
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
  - `NEXT_PUBLIC_FACEBOOK_PIXEL_ID`
  - `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID` (if using)
- [ ] Deploy to production
- [ ] Verify deployment success
- [ ] Test production URL

## Post-Deployment

### Verification
- [ ] Visit production URL
- [ ] Test form submission
- [ ] Verify phone clicks work
- [ ] Check analytics in real-time
- [ ] Verify images load
- [ ] Test on mobile device
- [ ] Check page speed (Lighthouse)
- [ ] Verify SEO meta tags
- [ ] Test schema markup (Google Rich Results Test)

### Analytics Setup
- [ ] Verify GA4 is tracking
- [ ] Set up conversion goals in GA4
- [ ] Verify Facebook Pixel is firing
- [ ] Set up Facebook conversion events
- [ ] Test UTM parameter tracking
- [ ] Verify scroll tracking
- [ ] Check error tracking

### SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify Google Analytics connection
- [ ] Test structured data (Schema.org)
- [ ] Check mobile-friendliness
- [ ] Verify page speed scores

### Monitoring
- [ ] Set up uptime monitoring
- [ ] Configure error alerts
- [ ] Set up performance monitoring
- [ ] Create analytics dashboard
- [ ] Schedule regular performance audits

## Production Environment Variables

Create these in your hosting platform:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=1234567890
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXXX/XXXXX
```

## Vercel Deployment Steps

1. **Install Vercel CLI (optional):**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Or use Vercel Dashboard:**
   - Go to vercel.com
   - Click "New Project"
   - Import GitHub repository
   - Add environment variables
   - Deploy

## Post-Launch Tasks

### Week 1
- [ ] Monitor analytics daily
- [ ] Check for errors
- [ ] Review form submissions
- [ ] Monitor page speed
- [ ] Check conversion rates

### Week 2-4
- [ ] Analyze user behavior
- [ ] Review A/B test results (if running)
- [ ] Optimize based on data
- [ ] Update content if needed

### Ongoing
- [ ] Monthly performance audits
- [ ] Quarterly content reviews
- [ ] Regular security updates
- [ ] Monitor Core Web Vitals
- [ ] Update dependencies

## Rollback Plan

If issues occur:

1. **Revert deployment in Vercel:**
   - Go to Deployments
   - Find previous working version
   - Click "Promote to Production"

2. **Or rollback code:**
   ```bash
   git revert HEAD
   git push
   ```

## Support Contacts

- **Hosting:** Vercel Support
- **Domain:** Your domain registrar
- **Analytics:** Google Analytics Support
- **Facebook:** Facebook Business Support

## Emergency Contacts

Document who to contact for:
- Hosting issues
- Domain issues
- Analytics issues
- Content updates
- Technical problems

---

**Last Updated:** [Current Date]
**Deployed By:** [Your Name]
**Deployment Date:** [Date]

