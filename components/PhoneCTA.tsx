"use client";

/**
 * PhoneCTA Component
 * 
 * Reusable phone call-to-action button with analytics tracking.
 * 
 * @param {Object} props - Component props
 * @param {"default" | "large"} props.variant - Button size variant
 * @param {string} props.location - Location identifier for analytics tracking
 * @returns {JSX.Element} Phone CTA button
 */
import { trackPhoneClick } from "@/lib/analytics";

export default function PhoneCTA({ variant = "default", location = "unknown" }: { variant?: "default" | "large"; location?: string }) {
  const isLarge = variant === "large";
  
  const handlePhoneClick = () => {
    trackPhoneClick("(619) 555-HURT", location);
  };
  
  return (
    <a
      href="tel:+16195554878"
      onClick={handlePhoneClick}
      className={`inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg tap-target ${
        isLarge
          ? "px-6 py-4 md:px-8 md:py-5 text-lg md:text-xl border-2 border-accent-dark"
          : "px-5 py-3 md:px-6 md:py-4 text-base md:text-lg border-2 border-accent-dark"
      }`}
      aria-label="Call now for free consultation at (619) 555-HURT"
    >
      <svg
        className={`${isLarge ? "w-6 h-6 md:w-7 md:h-7" : "w-5 h-5 md:w-6 md:h-6"}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      <span>
        Call Now for a Free Consult: <span className="font-bold">(619) 555-HURT</span>
      </span>
    </a>
  );
}

