"use client";

import { useEffect, useState } from "react";
import { trackPhoneClick, trackButtonClick } from "@/lib/analytics";

export default function FloatingMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling past 400px (past hero section)
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 400);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    trackButtonClick("Free Case Review", "floating_mobile_cta");
    const formElement = document.getElementById("lead-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePhoneClick = () => {
    trackPhoneClick("(619) 555-HURT", "floating_mobile_cta");
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ease-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white shadow-2xl border-t-2 border-accent">
        <div className="grid grid-cols-2 gap-0">
          {/* Call Now Button */}
          <a
            href="tel:+16195554878"
            onClick={handlePhoneClick}
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-4 tap-target transition-colors duration-200"
            aria-label="Call now for free consultation"
          >
            <svg
              className="w-5 h-5"
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
            <span className="text-sm md:text-base">Call Now</span>
          </a>

          {/* Free Case Review Button */}
          <button
            onClick={scrollToForm}
            className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-4 tap-target transition-colors duration-200"
            aria-label="Scroll to free case review form"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-sm md:text-base">Free Case Review</span>
          </button>
        </div>
      </div>
    </div>
  );
}

