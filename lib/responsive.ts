/**
 * Responsive breakpoint utilities
 * 
 * Mobile: 320px - 767px (default, no prefix)
 * Tablet: 768px - 1023px (md: prefix)
 * Desktop: 1024px+ (lg:, xl:, 2xl: prefixes)
 */

export const breakpoints = {
  mobile: {
    min: 320,
    max: 767,
  },
  tablet: {
    min: 768,
    max: 1023,
  },
  desktop: {
    min: 1024,
  },
} as const;

/**
 * Minimum tap target size for mobile accessibility
 * WCAG 2.1 Level AAA requires 44x44px minimum
 * We use 48x48px for better usability
 */
export const TAP_TARGET_MIN_SIZE = 48;

/**
 * Minimum spacing between interactive elements
 * Ensures users can easily tap targets without accidental taps
 */
export const MIN_ELEMENT_SPACING = 16;

