"use client";

import { useEffect } from "react";

export function reportWebVitals(metric: any) {
  // Send to Google Analytics
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", metric.name, {
      event_category: "Web Vitals",
      value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Log to console in development only
  if (process.env.NODE_ENV === "development") {
    console.log("Web Vital:", metric);
  }
}

export default function WebVitals() {
  useEffect(() => {
    // Import web-vitals dynamically to avoid blocking
    import("web-vitals").then(({ onCLS, onFID, onLCP, onFCP, onTTFB }) => {
      onCLS(reportWebVitals);
      onFID(reportWebVitals);
      onLCP(reportWebVitals);
      onFCP(reportWebVitals);
      onTTFB(reportWebVitals);
    });
  }, []);

  return null;
}

