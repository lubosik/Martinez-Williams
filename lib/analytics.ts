// Analytics utility functions
// Replace with your actual tracking IDs in production

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";
export const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "1234567890";

// Google Analytics 4 Event Tracking
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventParams);
  }
};

// Facebook Pixel Event Tracking
export const trackFacebookEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", eventName, eventData);
  }
};

// Track form submission
export const trackFormSubmission = (formData: {
  name: string;
  email: string;
  phone: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}) => {
  // Google Analytics
  trackEvent("form_submission", {
    form_name: "lead_form",
    form_location: "landing_page",
    ...formData,
  });

  // Facebook Pixel
  trackFacebookEvent("Lead", {
    content_name: "Lead Form Submission",
    content_category: "Contact Form",
  });

  // Google Ads Conversion (if configured)
  trackEvent("conversion", {
    send_to: "AW-CONVERSION_ID/CONVERSION_LABEL", // Replace with actual conversion ID
  });
};

// Track phone click
export const trackPhoneClick = (phoneNumber: string, location: string) => {
  trackEvent("phone_click", {
    phone_number: phoneNumber,
    location: location,
  });

  trackFacebookEvent("Contact", {
    content_name: "Phone Click",
    content_category: "Phone Call",
  });

  // Google Ads Conversion
  trackEvent("conversion", {
    send_to: "AW-CONVERSION_ID/CONVERSION_LABEL", // Replace with actual conversion ID
  });
};

// Track button click
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent("button_click", {
    button_name: buttonName,
    location: location,
  });
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent("scroll_depth", {
    depth_percentage: depth,
  });
};

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  trackEvent("time_on_page", {
    time_seconds: seconds,
  });
};

// Get UTM parameters from URL
export const getUTMParameters = () => {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_term: params.get("utm_term") || "",
    utm_content: params.get("utm_content") || "",
  };
};

// Store UTM parameters in sessionStorage
export const storeUTMParameters = () => {
  if (typeof window === "undefined") return;

  const utmParams = getUTMParameters();
  if (Object.values(utmParams).some((val) => val)) {
    sessionStorage.setItem("utm_params", JSON.stringify(utmParams));
  }
};

// Retrieve stored UTM parameters
export const getStoredUTMParameters = () => {
  if (typeof window === "undefined") return {};

  const stored = sessionStorage.getItem("utm_params");
  return stored ? JSON.parse(stored) : {};
};

