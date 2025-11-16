# QA Checklist

## Functional Testing

### Forms
- [ ] Form validates required fields (name, phone, email)
- [ ] Form shows error messages for invalid inputs
- [ ] Phone number formatting works correctly
- [ ] Form submission shows success message
- [ ] Form submission tracks analytics event
- [ ] Form includes UTM parameters in submission
- [ ] Form resets after successful submission
- [ ] All form variants work (3-field, 4-field, 5-field)
- [ ] Form is accessible via keyboard navigation
- [ ] Form fields have proper ARIA labels

### Phone CTAs
- [ ] All phone links use `tel:` protocol
- [ ] Phone clicks tracked in analytics
- [ ] Mobile sticky header phone link works
- [ ] Floating mobile CTA phone link works
- [ ] Phone CTA in hero section works
- [ ] Phone CTA in footer works
- [ ] Phone CTA in all sections works

### Navigation & Links
- [ ] All internal links work
- [ ] All external links open in new tab with `rel="noopener noreferrer"`
- [ ] Privacy policy link works
- [ ] Terms of service link works (if applicable)
- [ ] Accessibility statement link works
- [ ] Social media links work
- [ ] Smooth scroll to form works
- [ ] No broken links

### A/B Testing
- [ ] Headline variants work via URL parameter
- [ ] CTA text variants work via URL parameter
- [ ] Form field variants work via URL parameter
- [ ] Button color variants work via URL parameter
- [ ] Default variants load correctly
- [ ] Variant data attributes are present

## Responsive Design

### Mobile (320px - 767px)
- [ ] Layout stacks vertically
- [ ] Text is readable without zooming
- [ ] Tap targets are at least 48x48px
- [ ] Mobile sticky header appears
- [ ] Floating mobile CTA appears after scroll
- [ ] Form is full width
- [ ] Images scale correctly
- [ ] No horizontal scrolling
- [ ] Navigation is accessible

### Tablet (768px - 1023px)
- [ ] Layout adapts appropriately
- [ ] Two-column layouts work
- [ ] Text remains readable
- [ ] Images display correctly
- [ ] Form positioning is correct

### Desktop (1024px+)
- [ ] Full layout displays correctly
- [ ] Hero section has two columns
- [ ] Form is sticky on desktop
- [ ] All sections display properly
- [ ] Images are optimized
- [ ] Hover effects work

## Performance

### Core Web Vitals
- [ ] LCP < 2.5s (Lighthouse)
- [ ] FID < 100ms (Lighthouse)
- [ ] CLS < 0.1 (Lighthouse)
- [ ] FCP < 1.8s (Lighthouse)
- [ ] TTI < 3.8s (Lighthouse)

### Lighthouse Scores
- [ ] Performance: 90+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

### Image Optimization
- [ ] All images use Next.js Image component
- [ ] Hero image has priority loading
- [ ] Below-fold images are lazy loaded
- [ ] Images have proper `sizes` attribute
- [ ] Images use WebP/AVIF formats
- [ ] No layout shift from images

### Code Optimization
- [ ] JavaScript bundle size is reasonable (<150KB)
- [ ] CSS is minified
- [ ] Code splitting works
- [ ] Dynamic imports work
- [ ] No console errors in production

## Accessibility

### WCAG AA Compliance
- [ ] All images have alt text
- [ ] All interactive elements have ARIA labels
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Keyboard navigation works throughout
- [ ] Focus indicators are visible
- [ ] Form errors are announced to screen readers
- [ ] Headings are in logical order
- [ ] Skip links work (if implemented)

### Screen Reader Testing
- [ ] Test with VoiceOver (macOS/iOS)
- [ ] Test with NVDA (Windows)
- [ ] Test with JAWS (Windows)
- [ ] All content is accessible
- [ ] Form labels are announced
- [ ] Error messages are announced

### Keyboard Navigation
- [ ] Tab order is logical
- [ ] All interactive elements are focusable
- [ ] Focus is visible
- [ ] Escape key closes modals (if any)
- [ ] Enter/Space activates buttons
- [ ] Arrow keys work in dropdowns (if any)

## Browser Compatibility

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Browsers
- [ ] Safari iOS (latest)
- [ ] Chrome Android (latest)
- [ ] Samsung Internet (if applicable)

### Testing Notes
- [ ] No JavaScript errors in console
- [ ] CSS renders correctly
- [ ] Images load correctly
- [ ] Forms work correctly
- [ ] Analytics track correctly

## Analytics & Tracking

### Google Analytics 4
- [ ] Page views tracked
- [ ] Form submissions tracked
- [ ] Phone clicks tracked
- [ ] Button clicks tracked
- [ ] Scroll depth tracked
- [ ] Time on page tracked
- [ ] Web Vitals tracked
- [ ] UTM parameters captured
- [ ] Conversion events fire

### Facebook Pixel
- [ ] Pixel loads correctly
- [ ] PageView event fires
- [ ] Lead event fires on form submission
- [ ] Contact event fires on phone click

### Error Tracking
- [ ] JavaScript errors tracked
- [ ] Form errors tracked
- [ ] Network errors tracked (if applicable)

## SEO

### Meta Tags
- [ ] Title tag is present and unique
- [ ] Meta description is present
- [ ] Open Graph tags are present
- [ ] Twitter Card tags are present
- [ ] Canonical URL is set
- [ ] Robots meta tag is correct

### Schema Markup
- [ ] JSON-LD schema is present
- [ ] LegalService schema is correct
- [ ] Business information is accurate
- [ ] Schema validates (Google Rich Results Test)

### Technical SEO
- [ ] Sitemap is generated (if applicable)
- [ ] robots.txt is configured (if applicable)
- [ ] 404 page works
- [ ] URLs are clean
- [ ] No duplicate content

## Content

### Copy Review
- [ ] All headlines are accurate
- [ ] All body copy is accurate
- [ ] No placeholder text remains
- [ ] No typos or grammatical errors
- [ ] Legal disclaimers are present
- [ ] Privacy policy is complete

### Images
- [ ] All images are relevant
- [ ] All images have alt text
- [ ] No broken images
- [ ] Images are optimized
- [ ] Attorney photos are correct

### Legal Compliance
- [ ] Privacy policy is accessible
- [ ] Terms of service (if applicable)
- [ ] Disclaimers are present
- [ ] Accessibility statement is present
- [ ] Contact information is accurate

## Security

### Headers
- [ ] Security headers are configured
- [ ] X-Frame-Options is set
- [ ] X-Content-Type-Options is set
- [ ] Referrer-Policy is set

### Data Protection
- [ ] No sensitive data in code
- [ ] Environment variables are used
- [ ] Form data is handled securely
- [ ] HTTPS is enforced (production)

## Cross-Device Testing

### Physical Devices
- [ ] iPhone (various models)
- [ ] Android phone (various models)
- [ ] iPad
- [ ] Android tablet
- [ ] Desktop (various screen sizes)

### Test Scenarios
- [ ] Form submission on mobile
- [ ] Phone click on mobile
- [ ] Scrolling behavior
- [ ] Touch interactions
- [ ] Orientation changes (mobile)

## Final Checks

### Pre-Launch
- [ ] All tests pass
- [ ] No console errors
- [ ] No broken links
- [ ] All images load
- [ ] Analytics configured
- [ ] Environment variables set
- [ ] Build succeeds
- [ ] Production build tested

### Post-Launch
- [ ] Monitor for errors
- [ ] Verify analytics tracking
- [ ] Check page speed
- [ ] Verify form submissions
- [ ] Test phone clicks
- [ ] Monitor Core Web Vitals

---

**Testing Date:** _______________
**Tested By:** _______________
**Status:** ☐ Pass  ☐ Fail  ☐ Needs Review

