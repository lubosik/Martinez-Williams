# Performance Budget & Core Web Vitals

## Phase 14: Page Speed & Core Web Vitals Optimization

### Performance Targets

#### Core Web Vitals

**Largest Contentful Paint (LCP):**
- Target: < 2.5 seconds
- Good: < 2.5s
- Needs Improvement: 2.5s - 4.0s
- Poor: > 4.0s

**First Input Delay (FID):**
- Target: < 100 milliseconds
- Good: < 100ms
- Needs Improvement: 100ms - 300ms
- Poor: > 300ms

**Cumulative Layout Shift (CLS):**
- Target: < 0.1
- Good: < 0.1
- Needs Improvement: 0.1 - 0.25
- Poor: > 0.25

#### Additional Metrics

**First Contentful Paint (FCP):**
- Target: < 1.8 seconds

**Time to Interactive (TTI):**
- Target: < 3.8 seconds

**Total Blocking Time (TBT):**
- Target: < 200 milliseconds

**Speed Index:**
- Target: < 3.4 seconds

### Optimization Strategies Implemented

#### LCP Optimization

1. **Hero Image Optimization:**
   - Priority loading with `priority` flag
   - `fetchPriority="high"` attribute
   - Preload link in `<head>` for critical image
   - WebP/AVIF format optimization
   - Proper `sizes` attribute for responsive images

2. **Resource Hints:**
   - DNS prefetch for Unsplash images
   - Preconnect to critical origins (images, analytics, pixel)
   - Preload critical hero image

3. **Font Optimization:**
   - Next.js font optimization enabled
   - `display: swap` to prevent FOIT
   - Subset loading (Latin only)
   - Variable fonts for smaller file sizes

#### FID Optimization

1. **JavaScript Optimization:**
   - Code splitting with dynamic imports
   - Lazy loading for below-fold components
   - SWC minification enabled
   - Minimal initial JavaScript bundle

2. **Event Handler Optimization:**
   - Passive event listeners for scroll
   - Debounced scroll handlers
   - Efficient event delegation

3. **Third-Party Scripts:**
   - Analytics loaded with `afterInteractive` strategy
   - Non-blocking script loading
   - Deferred non-critical scripts

#### CLS Optimization

1. **Image Dimensions:**
   - Explicit container dimensions for hero image
   - `min-height` on sections to reserve space
   - Proper aspect ratios maintained

2. **Dynamic Content:**
   - Reserved space for form (sticky positioning)
   - Fixed heights for mobile header (60px)
   - No content insertion above existing content

3. **Font Loading:**
   - `font-display: swap` prevents layout shift
   - Font fallbacks prevent FOIT

4. **Layout Stability:**
   - Consistent spacing and padding
   - Fixed positioning for mobile elements
   - No dynamic content that shifts layout

### Resource Hints

**DNS Prefetch:**
- `images.unsplash.com` (image CDN)

**Preconnect:**
- `images.unsplash.com` (with crossorigin)
- `www.googletagmanager.com` (analytics)
- `www.google-analytics.com` (analytics)
- `connect.facebook.net` (pixel)

**Preload:**
- Hero background image (critical for LCP)

### Caching Strategy

**Static Assets:**
- Images: `Cache-Control: public, max-age=31536000, immutable`
- Next.js static files: `Cache-Control: public, max-age=31536000, immutable`
- Fonts: Handled by Next.js with proper caching

**Browser Caching:**
- HTML: Short cache (for updates)
- Static assets: Long cache (1 year)
- Images: Long cache with immutable flag

### Compression

**Automatic Compression:**
- Next.js/Vercel handles Brotli/Gzip automatically
- `compress: true` in next.config.js
- Images optimized to WebP/AVIF formats

**Minification:**
- SWC minification enabled (`swcMinify: true`)
- CSS minification (Tailwind production build)
- JavaScript minification (Next.js build)

### Render-Blocking Resources

**Optimized:**
- Fonts: Loaded with `display: swap` (non-blocking)
- CSS: Critical CSS inlined, non-critical deferred
- JavaScript: Code splitting reduces initial bundle
- Analytics: Loaded with `afterInteractive` strategy

### Performance Monitoring

**Web Vitals Tracking:**
- Component: `/components/WebVitals.tsx`
- Tracks: LCP, FID, CLS, FCP, TTFB
- Sends to: Google Analytics 4
- Logs in: Development console

**Metrics Tracked:**
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)
- FCP (First Contentful Paint)
- TTFB (Time to First Byte)

### Performance Budget

**Bundle Size:**
- Initial JS: < 150 KB (Current: ~122 KB ✅)
- Total JS: < 300 KB
- CSS: < 50 KB
- Images: Optimized per image

**Network:**
- Initial page load: < 2 MB
- Time to interactive: < 3.8s
- First contentful paint: < 1.8s

### Testing & Monitoring

**Tools:**
- Lighthouse (Chrome DevTools)
- PageSpeed Insights
- WebPageTest
- Chrome User Experience Report (CrUX)

**Regular Monitoring:**
- Weekly Lighthouse audits
- Monthly Core Web Vitals review
- Quarterly performance budget review
- Real User Monitoring (RUM) via GA4

### Optimization Checklist

- [x] Hero image preloaded
- [x] Resource hints added
- [x] Font optimization enabled
- [x] Code splitting implemented
- [x] Image optimization (WebP/AVIF)
- [x] Caching headers configured
- [x] Compression enabled
- [x] CLS prevention (explicit dimensions)
- [x] Web Vitals tracking
- [x] Performance budget defined

### Expected Performance Scores

**Lighthouse Targets:**
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

**Core Web Vitals:**
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

### Next Steps

1. Run Lighthouse audit in production
2. Monitor Core Web Vitals in GA4
3. Set up performance alerts
4. Continuously optimize based on real user data
5. A/B test performance optimizations

