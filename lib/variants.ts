/**
 * A/B Testing Variants Configuration
 * 
 * This file contains all variant configurations for A/B testing.
 * Update the active variants to test different combinations.
 */

export type HeadlineVariant = "A" | "B" | "C";
export type CTAVariant = "A" | "B" | "C" | "D";
export type FormVariant = "3-field" | "4-field" | "5-field";
export type ButtonColorVariant = "orange" | "green" | "red";

// Headline Variants
export const headlineVariants: Record<HeadlineVariant, string> = {
  A: "Injured in a Car Accident in San Diego? We Can Help.",
  B: "San Diego Car Accident? Get the Compensation You Deserve.",
  C: "Hurt in a Crash? Our San Diego Lawyers Fight for Maximum Compensation.",
};

// CTA Button Text Variants
export const ctaVariants: Record<CTAVariant, string> = {
  A: "Get My Free Case Evaluation",
  B: "Claim Your Free Consultation",
  C: "Start My Free Case Review",
  D: "Speak to an Attorney Now",
};

// Form Field Variants Configuration
export const formVariants = {
  "3-field": {
    fields: ["fullName", "phone", "email"] as const,
    description: "Minimal form with only essential fields",
  },
  "4-field": {
    fields: ["fullName", "phone", "email", "caseDescription"] as const,
    description: "Standard form with optional case description",
  },
  "5-field": {
    fields: ["fullName", "phone", "email", "caseDescription", "accidentDate"] as const,
    description: "Extended form with accident date field",
  },
} as const;

// Button Color Variants
export const buttonColorVariants: Record<ButtonColorVariant, string> = {
  orange: "#f97316", // accent (default)
  green: "#10b981", // success
  red: "#ef4444", // error/urgency
};

// Active Variants (Change these to test different combinations)
// In production, these would be determined by A/B testing tool or user segment
export const activeVariants = {
  headline: "A" as HeadlineVariant,
  cta: "A" as CTAVariant,
  form: "4-field" as FormVariant,
  buttonColor: "orange" as ButtonColorVariant,
};

/**
 * Get variant from URL parameter, cookie, or localStorage
 * This allows easy testing by adding ?variant=headline:B to URL
 */
export const getVariantFromURL = (): Partial<typeof activeVariants> => {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const variants: Partial<typeof activeVariants> = {};

  const headlineParam = params.get("headline");
  if (headlineParam && ["A", "B", "C"].includes(headlineParam)) {
    variants.headline = headlineParam as HeadlineVariant;
  }

  const ctaParam = params.get("cta");
  if (ctaParam && ["A", "B", "C", "D"].includes(ctaParam)) {
    variants.cta = ctaParam as CTAVariant;
  }

  const formParam = params.get("form");
  if (formParam && ["3-field", "4-field", "5-field"].includes(formParam)) {
    variants.form = formParam as FormVariant;
  }

  const colorParam = params.get("color");
  if (colorParam && ["orange", "green", "red"].includes(colorParam)) {
    variants.buttonColor = colorParam as ButtonColorVariant;
  }

  return variants;
};

/**
 * Get active variant (checks URL first, then falls back to default)
 */
export const getActiveVariant = <K extends keyof typeof activeVariants>(
  key: K
): typeof activeVariants[K] => {
  const urlVariants = getVariantFromURL();
  return urlVariants[key] || activeVariants[key];
};

