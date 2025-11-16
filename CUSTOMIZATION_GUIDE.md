# Customization Guide

## Quick Reference for Customizing the Landing Page

### 1. Firm Information

#### Firm Name
**Files to update:**
- `app/layout.tsx` - Line 19 (metadata title)
- `app/layout.tsx` - Line 73 (schema markup)
- `components/Footer.tsx` - Line 12 (footer heading)

#### Phone Number
**Files to update:**
- `components/PhoneCTA.tsx` - Line 14 (href)
- `components/MobileStickyHeader.tsx` - Line 13 (href)
- `components/FloatingMobileCTA.tsx` - Line 45 (href)
- `components/Footer.tsx` - Line 50 (display and href)
- `lib/analytics.ts` - Line 73 (schema)
- `app/layout.tsx` - Line 77 (schema)

**Format:** Use `tel:+1XXXXXXXXXX` format

#### Address
**Files to update:**
- `components/Footer.tsx` - Lines 47-49
- `app/layout.tsx` - Lines 80-85 (schema markup)

#### Email
**Files to update:**
- `components/Footer.tsx` - Line 56
- `app/privacy-policy/page.tsx` - Update contact email

### 2. Color Scheme

**File:** `tailwind.config.ts`

```typescript
colors: {
  primary: {
    DEFAULT: "#1e40af",  // Main blue - change this
    dark: "#1e3a8a",
    light: "#3b82f6",
  },
  accent: {
    DEFAULT: "#f97316",  // CTA orange - change this
    dark: "#ea580c",
    light: "#fb923c",
  },
  // ... other colors
}
```

**Usage:**
- Primary: Headers, trust elements, links
- Accent: All CTA buttons
- Success: Trust badges, ratings
- Neutral: Text hierarchy

### 3. Typography

**Fonts are configured in:**
- `app/layout.tsx` - Font imports (Inter, Poppins)
- `tailwind.config.ts` - Font family variables

**To change fonts:**
1. Update font imports in `app/layout.tsx`
2. Update font variables in `tailwind.config.ts`
3. Update font families in `app/globals.css` if needed

### 4. Headlines

**Hero Headline Variants:**
- File: `lib/variants.ts`
- Edit `headlineVariants` object

**Section Headlines:**
- `components/HeroWithForm.tsx` - Sub-headline
- `components/TrustSignals.tsx` - Section headlines
- `components/BenefitsSection.tsx` - Section headline
- `components/ProcessSection.tsx` - Section headline
- `components/FAQSection.tsx` - Section headline

### 5. Testimonials

**File:** `components/TrustSignals.tsx`

**To add/edit testimonials:**
- Find the testimonials array (around line 100)
- Update name, testimonial text, case details
- Update avatar initials if needed

**Format:**
```typescript
{
  name: "Client Name",
  testimonial: "Testimonial text...",
  caseType: "Case type",
  settlement: "$XXX,XXX settlement"
}
```

### 6. Benefits

**File:** `components/BenefitsSection.tsx`

**To edit benefits:**
- Find the `benefits` array (around line 2)
- Update title, description, icon, colors

### 7. Attorney Profiles

**File:** `components/MeetAttorneys.tsx`

**To update:**
- Attorney names (line 6, 13)
- Titles (line 7, 14)
- Bios (line 8, 15)
- Image URLs (line 9, 16)

### 8. Process Steps

**File:** `components/ProcessSection.tsx`

**To edit process:**
- Find `steps` array (around line 2)
- Update number, title, description, icon

### 9. FAQ Questions

**File:** `components/FAQSection.tsx`

**To add/edit FAQs:**
- Find `faqs` array (around line 7)
- Add/update question and answer objects

### 10. Service Areas

**File:** `components/AreasServed.tsx`

**To update areas:**
- Edit `areas` array (around line 3)
- Add/remove area names

### 11. Form Fields

**File:** `components/LeadForm.tsx`

**To modify form:**
- Edit form variant in `lib/variants.ts`
- Or modify field rendering in `LeadForm.tsx`
- Update validation schema if needed

### 12. CTA Button Text

**File:** `lib/variants.ts`

**To change CTA text:**
- Edit `ctaVariants` object
- Or change default in `activeVariants`

### 13. Stats/Results

**File:** `components/TrustSignals.tsx`

**To update stats:**
- Find "Results Showcase" section (around line 40)
- Update dollar amounts, case counts, percentages

### 14. Trust Badges

**File:** `components/TrustSignals.tsx`

**To update badges:**
- Find "Trust Badges Section" (around line 7)
- Update badge titles and descriptions
- Replace SVG icons if needed

### 15. Images

**Hero Image:**
- `components/HeroWithForm.tsx` - Line 17 (Image src)
- `app/layout.tsx` - Line 75 (Preload link)

**Attorney Photos:**
- `components/MeetAttorneys.tsx` - Lines 9, 16 (imageUrl)

**To use your own images:**
1. Add images to `/public/images/`
2. Update Image src to `/images/your-image.jpg`
3. Remove Unsplash URLs

### 16. Social Media Links

**File:** `components/Footer.tsx`

**To update:**
- Find social media links (around line 100)
- Update href URLs with your actual profiles

### 17. Schema Markup

**File:** `app/layout.tsx`

**To update business information:**
- Lines 71-113 contain JSON-LD schema
- Update name, address, phone, hours, etc.

### 18. Meta Tags

**File:** `app/layout.tsx`

**To update SEO:**
- Line 19: Page title
- Line 20: Meta description
- Line 21: Keywords
- Lines 23-29: Open Graph tags
- Lines 31-35: Twitter Card tags

### 19. Analytics IDs

**File:** `.env.local` (create this file)

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=1234567890
```

### 20. A/B Testing Variants

**File:** `lib/variants.ts`

**To change default variants:**
- Edit `activeVariants` object (around line 80)
- Or test via URL parameters

## Quick Customization Checklist

- [ ] Update firm name (3 locations)
- [ ] Update phone number (6 locations)
- [ ] Update address (2 locations)
- [ ] Update email (2 locations)
- [ ] Update office hours
- [ ] Replace hero image
- [ ] Replace attorney photos
- [ ] Update testimonials
- [ ] Update stats/results
- [ ] Update service areas
- [ ] Update social media links
- [ ] Update schema markup
- [ ] Update meta tags
- [ ] Add analytics IDs
- [ ] Test all changes

## Color Customization Examples

**Professional Blue Theme:**
```typescript
primary: { DEFAULT: "#1e40af" }  // Keep current
accent: { DEFAULT: "#2563eb" }   // Blue CTA
```

**Trust Green Theme:**
```typescript
primary: { DEFAULT: "#059669" }  // Green primary
accent: { DEFAULT: "#10b981" }   // Green CTA
```

**Bold Red Theme:**
```typescript
primary: { DEFAULT: "#dc2626" }  // Red primary
accent: { DEFAULT: "#ef4444" }   // Red CTA
```

## Testing Your Changes

After making changes:

1. **Run development server:**
   ```bash
   npm run dev
   ```

2. **Test on multiple viewports:**
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1920px)

3. **Check for errors:**
   ```bash
   npm run build
   ```

4. **Verify functionality:**
   - Form submission
   - Phone clicks
   - All links
   - Images load

## Need Help?

Refer to:
- Component files for specific implementations
- `README.md` for setup instructions
- `AB_TESTING.md` for variant testing
- Next.js documentation for framework questions

