# A/B Testing Documentation

## Phase 13: A/B Testing Preparation & Variants

### Overview

This landing page is configured with a comprehensive A/B testing infrastructure that allows easy testing of key conversion elements. All variants can be controlled via URL parameters for quick testing, or integrated with A/B testing tools like Google Optimize, Optimizely, or VWO.

### Variant System

The variant system is located in `/lib/variants.ts` and supports:

1. **Headline Variants** (3 options)
2. **CTA Text Variants** (4 options)
3. **Form Field Variants** (3 options)
4. **Button Color Variants** (3 options)

### Headline Variants

**Variant A (Default):**
- Text: "Injured in a Car Accident in San Diego? We Can Help."
- Focus: Question-based, empathetic
- Keywords: "San Diego car accident"

**Variant B:**
- Text: "San Diego Car Accident? Get the Compensation You Deserve."
- Focus: Direct, benefit-oriented
- Keywords: "San Diego car accident", "compensation"

**Variant C:**
- Text: "Hurt in a Crash? Our San Diego Lawyers Fight for Maximum Compensation."
- Focus: Action-oriented, emphasizes firm's role
- Keywords: "San Diego", "lawyers", "maximum compensation"

**Testing Hypothesis:**
- Variant A: More empathetic, may resonate with emotional state
- Variant B: More direct, may appeal to goal-oriented visitors
- Variant C: Emphasizes firm action, may build more trust

**How to Test:**
Add `?headline=B` or `?headline=C` to the URL

### CTA Button Text Variants

**Variant A (Default):**
- Text: "Get My Free Case Evaluation"
- Focus: Personal, evaluation-focused

**Variant B:**
- Text: "Claim Your Free Consultation"
- Focus: Action verb "Claim", consultation-focused

**Variant C:**
- Text: "Start My Free Case Review"
- Focus: Process-oriented, "Start" implies beginning

**Variant D:**
- Text: "Speak to an Attorney Now"
- Focus: Immediate action, human connection

**Testing Hypothesis:**
- Variant A: Standard, safe option
- Variant B: "Claim" may create urgency
- Variant C: "Start" may reduce friction
- Variant D: Direct human connection may increase trust

**How to Test:**
Add `?cta=B`, `?cta=C`, or `?cta=D` to the URL

### Form Field Variants

**3-Field Variant:**
- Fields: Full Name, Phone, Email
- Description: Minimal form with only essential fields
- Hypothesis: Lower friction may increase conversion rate

**4-Field Variant (Default):**
- Fields: Full Name, Phone, Email, Case Description (optional)
- Description: Standard form with optional case description
- Hypothesis: Balanced between information gathering and conversion

**5-Field Variant:**
- Fields: Full Name, Phone, Email, Case Description (optional), Accident Date (optional)
- Description: Extended form with accident date field
- Hypothesis: More information may qualify leads better but reduce conversion

**Testing Hypothesis:**
- 3-field: Highest conversion, but may have lower lead quality
- 4-field: Balance between conversion and lead quality
- 5-field: Lower conversion, but higher lead quality

**How to Test:**
Add `?form=3-field` or `?form=5-field` to the URL

### Button Color Variants

**Orange (Default):**
- Color: #f97316
- Rationale: High contrast, attention-grabbing, standard CTA color

**Green:**
- Color: #10b981
- Rationale: Associated with success, positive action, trust

**Red:**
- Color: #ef4444
- Rationale: Creates urgency, high visibility, action-oriented

**Testing Hypothesis:**
- Orange: Standard, proven performer
- Green: May suggest success/positive outcome
- Red: May create urgency but could be perceived as aggressive

**How to Test:**
Add `?color=green` or `?color=red` to the URL

### URL Parameter Testing

You can test any combination of variants using URL parameters:

**Examples:**
- `?headline=B&cta=C&form=3-field&color=green`
- `?headline=C&cta=D&color=red`
- `?form=5-field`

**Parameter Names:**
- `headline`: A, B, or C
- `cta`: A, B, C, or D
- `form`: 3-field, 4-field, or 5-field
- `color`: orange, green, or red

### Data Test IDs

All key elements have `data-testid` attributes for easy testing tool integration:

**Form Elements:**
- `data-testid="lead-form"` - Main form container
- `data-testid="form-submit-button"` - Submit button
- `data-testid="form-field-fullname"` - Full name input
- `data-testid="form-field-phone"` - Phone input
- `data-testid="form-field-email"` - Email input

**Headline:**
- `data-testid="hero-headline"` - Main headline
- `data-variant="A|B|C"` - Current headline variant

**Button:**
- `data-variant-cta="A|B|C|D"` - Current CTA variant
- `data-variant-color="orange|green|red"` - Current color variant
- `data-variant-form="3-field|4-field|5-field"` - Current form variant

### Integration with A/B Testing Tools

**Google Optimize:**
1. Use data-testid attributes to target elements
2. Use data-variant attributes to track which variant is shown
3. Create experiments targeting specific testids

**Optimizely:**
1. Use data-testid for element targeting
2. Use URL parameters or data-variant attributes for variant assignment
3. Track conversions using form submission events

**VWO:**
1. Target elements using data-testid
2. Use variant attributes for segmentation
3. Track form submissions as conversion events

### Testing Hypotheses

#### Primary Hypothesis: Headline Impact
**Question:** Which headline drives more form submissions?
**Metrics:** Form submission rate, time on page
**Expected Impact:** 10-20% variation in conversion rate

#### Secondary Hypothesis: CTA Text Impact
**Question:** Which CTA text creates more urgency and action?
**Metrics:** Click-through rate, form submission rate
**Expected Impact:** 5-15% variation in conversion rate

#### Tertiary Hypothesis: Form Length Impact
**Question:** Does shorter form length increase conversion?
**Metrics:** Form abandonment rate, submission rate, lead quality
**Expected Impact:** 15-30% variation in conversion rate (3-field vs 5-field)

#### Quaternary Hypothesis: Button Color Impact
**Question:** Which button color drives more clicks?
**Metrics:** Button click rate, form submission rate
**Expected Impact:** 5-10% variation in conversion rate

### Measurement Strategy

**Primary Conversion:**
- Form submission (tracked in GA4 and Facebook Pixel)

**Secondary Conversions:**
- Phone clicks (tracked with location context)
- Scroll depth (engagement metric)
- Time on page (engagement metric)

**Key Metrics to Track:**
1. Conversion rate by variant
2. Form abandonment rate by variant
3. Lead quality by variant (if tracking in CRM)
4. Cost per lead by variant
5. Time to conversion by variant

### Implementation Notes

**Current Setup:**
- Variants are determined by URL parameters (for testing)
- Default variants are set in `lib/variants.ts`
- All variants are tracked with `data-variant` attributes

**Production Integration:**
1. Replace URL parameter logic with A/B testing tool integration
2. Use testing tool's variant assignment
3. Track variant exposure in analytics
4. Measure conversion by variant

**Variant Swapping:**
- Headlines: Easy swap via variant system
- CTA text: Easy swap via variant system
- Form fields: Conditional rendering based on variant
- Button colors: Dynamic style application

### Testing Best Practices

1. **Test One Element at a Time:** Start with headlines, then CTAs, then form length
2. **Statistical Significance:** Ensure adequate sample size (typically 1000+ conversions per variant)
3. **Test Duration:** Run tests for at least 2 weeks to account for day-of-week variations
4. **Segment Analysis:** Analyze results by traffic source, device, and time of day
5. **Document Results:** Track which variants perform best for future reference

### Expected Results

Based on industry benchmarks:
- **Headline variants:** 10-20% conversion rate variation
- **CTA variants:** 5-15% conversion rate variation
- **Form length:** 15-30% conversion rate variation (shorter = higher)
- **Button color:** 5-10% conversion rate variation

### Next Steps

1. Set up A/B testing tool (Google Optimize, Optimizely, etc.)
2. Configure variant assignment logic
3. Set up conversion tracking by variant
4. Run initial test on headline variants
5. Analyze results and implement winning variant
6. Continue testing other elements

### Variant Configuration File

All variants are configured in `/lib/variants.ts`. To change default variants, update the `activeVariants` object:

```typescript
export const activeVariants = {
  headline: "A" as HeadlineVariant,
  cta: "A" as CTAVariant,
  form: "4-field" as FormVariant,
  buttonColor: "orange" as ButtonColorVariant,
};
```

### Quick Testing Guide

**Test Headline B:**
```
https://yoursite.com/?headline=B
```

**Test CTA C with Green Button:**
```
https://yoursite.com/?cta=C&color=green
```

**Test 3-Field Form with Headline C:**
```
https://yoursite.com/?headline=C&form=3-field
```

**Test All Variants:**
```
https://yoursite.com/?headline=C&cta=D&form=3-field&color=red
```

