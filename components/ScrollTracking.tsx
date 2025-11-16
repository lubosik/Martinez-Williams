"use client";

import { useEffect } from "react";
import { trackScrollDepth, trackTimeOnPage } from "@/lib/analytics";

export default function ScrollTracking() {
  useEffect(() => {
    let startTime = Date.now();
    const trackedDepths = new Set<number>();
    let timeOnPageInterval: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      // Track at 25%, 50%, 75%, and 100%
      [25, 50, 75, 100].forEach((depth) => {
        if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth);
          trackScrollDepth(depth);
        }
      });
    };

    // Track time on page every 30 seconds
    timeOnPageInterval = setInterval(() => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      trackTimeOnPage(timeOnPage);
    }, 30000);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeOnPageInterval) {
        clearInterval(timeOnPageInterval);
      }
    };
  }, []);

  return null;
}

