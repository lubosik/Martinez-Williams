// Error tracking utility

export const trackError = (error: Error | string, context?: string) => {
  const errorMessage = error instanceof Error ? error.message : error;
  const errorStack = error instanceof Error ? error.stack : undefined;

  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.error("Error tracked:", { errorMessage, errorStack, context });
  }

  // Track in Google Analytics
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "exception", {
      description: errorMessage,
      fatal: false,
      context: context || "unknown",
    });
  }

  // In production, you might want to send to an error tracking service
  // Example: Sentry, LogRocket, etc.
};

// Track console errors
export const setupErrorTracking = () => {
  if (typeof window === "undefined") return;

  // Track unhandled errors
  window.addEventListener("error", (event) => {
    trackError(event.error || event.message, "unhandled_error");
  });

  // Track unhandled promise rejections
  window.addEventListener("unhandledrejection", (event) => {
    trackError(
      event.reason instanceof Error ? event.reason : String(event.reason),
      "unhandled_promise_rejection"
    );
  });
};

