# Martinez & Williams Personal Injury Attorneys - Landing Page

A high-converting, production-ready landing page for a personal injury law firm's Google Ads campaign. Built with Next.js 14, TypeScript, and Tailwind CSS, implementing all best practices for conversion optimization, performance, and SEO.

## 🚀 Features

- **Mobile-First Responsive Design** - Optimized for all devices (320px - 1920px+)
- **High Performance** - Core Web Vitals optimized (LCP <2.5s, FID <100ms, CLS <0.1)
- **A/B Testing Ready** - Comprehensive variant system for testing headlines, CTAs, forms, and colors
- **Analytics & Tracking** - Google Analytics 4, Facebook Pixel, conversion tracking
- **SEO Optimized** - Schema markup, meta tags, semantic HTML
- **Accessibility Compliant** - WCAG AA standards, keyboard navigation, screen reader support
- **Lead Capture Form** - React Hook Form with Zod validation, UTM parameter tracking
- **Trust Signals** - Testimonials, badges, results showcase, attorney profiles
- **Multiple CTAs** - Strategic placement throughout the page with click-to-call functionality

## 📋 Prerequisites

- Node.js 18+ and npm
- Basic knowledge of React and Next.js
- (Optional) Vercel account for deployment

## 🛠️ Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd "Law Firms"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your actual values:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Your Google Analytics 4 Measurement ID
   - `NEXT_PUBLIC_FACEBOOK_PIXEL_ID` - Your Facebook Pixel ID

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📁 Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout with metadata and analytics
│   ├── page.tsx             # Main landing page
│   ├── globals.css          # Global styles and Tailwind directives
│   └── privacy-policy/      # Privacy policy page
├── components/
│   ├── HeroWithForm.tsx     # Hero section with headline and form
│   ├── LeadForm.tsx         # Lead capture form with validation
│   ├── TrustSignals.tsx     # Trust badges, testimonials, results
│   ├── BenefitsSection.tsx  # Benefit-focused copy section
│   ├── MeetAttorneys.tsx    # Attorney profiles
│   ├── ProcessSection.tsx   # 4-step process
│   ├── FAQSection.tsx       # Accordion FAQ section
│   ├── AreasServed.tsx      # Service areas
│   ├── CTASection.tsx       # CTA section component
│   ├── PhoneCTA.tsx         # Phone call-to-action button
│   ├── MobileStickyHeader.tsx # Mobile sticky header
│   ├── FloatingMobileCTA.tsx  # Floating mobile CTA
│   ├── Footer.tsx           # Footer with contact info
│   ├── GoogleAnalytics.tsx   # GA4 tracking
│   ├── FacebookPixel.tsx    # Facebook Pixel tracking
│   ├── ScrollTracking.tsx   # Scroll depth tracking
│   ├── ErrorTracking.tsx    # Error tracking
│   └── WebVitals.tsx        # Core Web Vitals tracking
├── lib/
│   ├── analytics.ts         # Analytics utility functions
│   ├── variants.ts          # A/B testing variant configuration
│   ├── responsive.ts        # Responsive utilities
│   └── utils.ts             # General utilities
├── public/
│   └── images/              # Image assets
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Customization Guide

### Updating Firm Information

**Firm Name:**
- Update in `app/layout.tsx` (metadata)
- Update in `components/Footer.tsx`
- Update in `lib/variants.ts` (schema markup)

**Contact Information:**
- Phone: Update in `components/PhoneCTA.tsx`, `components/MobileStickyHeader.tsx`, `components/Footer.tsx`
- Address: Update in `components/Footer.tsx` and `app/layout.tsx` (schema)
- Email: Update in `components/Footer.tsx`

**Office Hours:**
- Update in `components/Footer.tsx`

### Changing Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#1e40af",  // Change this for primary blue
    // ...
  },
  accent: {
    DEFAULT: "#f97316",  // Change this for CTA orange
    // ...
  },
}
```

### Modifying Copy

**Headlines:**
- Hero headline: `lib/variants.ts` (headlineVariants)
- Section headlines: Individual component files

**Testimonials:**
- Edit in `components/TrustSignals.tsx`

**Benefits:**
- Edit in `components/BenefitsSection.tsx`

**FAQ:**
- Edit in `components/FAQSection.tsx`

### Adding/Removing Sections

1. **Add a new section:**
   - Create component in `/components`
   - Import and add to `app/page.tsx`

2. **Remove a section:**
   - Remove import and component from `app/page.tsx`

### Swapping Images

**Hero Image:**
- Update URL in `components/HeroWithForm.tsx`
- Update preload link in `app/layout.tsx`

**Attorney Photos:**
- Update URLs in `components/MeetAttorneys.tsx`

## 🚢 Deployment

### Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables:
     - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
     - `NEXT_PUBLIC_FACEBOOK_PIXEL_ID`
   - Deploy

### Other Platforms

**Netlify:**
- Connect GitHub repository
- Build command: `npm run build`
- Publish directory: `.next`
- Add environment variables

**Custom Server:**
- Build: `npm run build`
- Start: `npm start`
- Ensure Node.js 18+ is installed

## 🔧 Environment Variables

Create `.env.local` file:

```env
# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Facebook Pixel
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=1234567890

# Google Ads Conversion (optional)
# NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXXX/XXXXX
```

## 📊 Analytics Setup

1. **Google Analytics 4:**
   - Create GA4 property
   - Get Measurement ID
   - Add to `.env.local`

2. **Facebook Pixel:**
   - Create Pixel in Facebook Business Manager
   - Get Pixel ID
   - Add to `.env.local`

3. **Google Ads:**
   - Set up conversion tracking
   - Update conversion ID in `lib/analytics.ts`

## 🧪 A/B Testing

See `AB_TESTING.md` for complete A/B testing documentation.

**Quick Testing:**
- Add URL parameters: `?headline=B&cta=C&form=3-field&color=green`
- Or integrate with Google Optimize, Optimizely, or VWO

## 📱 Testing

### Mobile Testing
- Test on actual devices (iPhone, Android)
- Test on multiple viewport sizes (320px, 375px, 414px, 768px)
- Verify tap targets (48px minimum)
- Test form on mobile keyboard

### Cross-Browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### Performance Testing
- Run Lighthouse audit
- Target: 90+ Performance score
- Check Core Web Vitals (LCP, FID, CLS)

## 🐛 Troubleshooting

**Build Errors:**
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

**Image Loading Issues:**
- Verify Unsplash URLs are accessible
- Check `next.config.js` remotePatterns

**Analytics Not Working:**
- Verify environment variables are set
- Check browser console for errors
- Ensure GA4 and Pixel IDs are correct

## 📚 Additional Documentation

- `AB_TESTING.md` - A/B testing guide
- `PERFORMANCE_BUDGET.md` - Performance targets and optimization
- `PERFORMANCE_TESTING.md` - Performance testing checklist

## 🛡️ Security

- Environment variables for sensitive data
- No API keys in code
- HTTPS required for production
- Security headers configured in `next.config.js`

## 📄 License

This is a demo project. Update with your actual license information.

## 👥 Support

For questions or issues, refer to:
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS Documentation: https://tailwindcss.com/docs
- React Hook Form: https://react-hook-form.com

## ✅ Pre-Deployment Checklist

- [ ] Update all firm information
- [ ] Add real analytics IDs
- [ ] Update phone numbers and contact info
- [ ] Replace placeholder images with real photos
- [ ] Review and update all copy
- [ ] Test form submission endpoint
- [ ] Verify all links work
- [ ] Test on multiple devices
- [ ] Run Lighthouse audit
- [ ] Check accessibility
- [ ] Review privacy policy
- [ ] Set up domain and SSL
- [ ] Configure environment variables
- [ ] Test analytics tracking

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**
