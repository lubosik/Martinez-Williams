"use client";

import { trackPhoneClick } from "@/lib/analytics";

export default function MobileStickyHeader() {
  const handlePhoneClick = () => {
    trackPhoneClick("(619) 555-HURT", "mobile_sticky_header");
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 md:hidden bg-primary shadow-lg">
      <a
        href="tel:+16195554878"
        onClick={handlePhoneClick}
        className="flex items-center justify-center h-[60px] px-4 w-full bg-accent hover:bg-accent-dark text-white font-semibold text-base transition-colors duration-200 tap-target"
        aria-label="Call now for free consultation at (619) 555-HURT"
      >
        <svg
          className="w-5 h-5 mr-2"
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
        Call Now: (619) 555-HURT
      </a>
    </div>
  );
}

