"use client";

/**
 * LeadForm Component
 * 
 * Lead capture form with validation, A/B testing support, and analytics tracking.
 * Supports 3-field, 4-field, and 5-field variants with dynamic schema generation.
 * 
 * Features:
 * - React Hook Form with Zod validation
 * - Phone number auto-formatting
 * - UTM parameter tracking
 * - A/B testing variants (form fields, CTA text, button color)
 * - Analytics event tracking
 * 
 * @returns {JSX.Element} Lead capture form
 */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect } from "react";
import PrivacyAssurance from "./PrivacyAssurance";
import { trackFormSubmission, getStoredUTMParameters, storeUTMParameters } from "@/lib/analytics";
import { getActiveVariant, ctaVariants, formVariants, buttonColorVariants } from "@/lib/variants";

// Base Zod validation schema (all possible fields)
const baseFormSchema = {
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  phone: z
    .string()
    .regex(
      /^(\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/,
      "Please enter a valid US phone number"
    ),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  caseDescription: z
    .string()
    .max(500, "Description must be less than 500 characters")
    .optional(),
  accidentDate: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Date.parse(val)), {
      message: "Please enter a valid date",
    }),
};

// Create schema based on active variant
const createFormSchema = (formVariant: "3-field" | "4-field" | "5-field") => {
  const fields = formVariants[formVariant].fields;
  const schema: Record<string, z.ZodTypeAny> = {};

  fields.forEach((field) => {
    if (baseFormSchema[field as keyof typeof baseFormSchema]) {
      schema[field] = baseFormSchema[field as keyof typeof baseFormSchema];
    }
  });

  return z.object(schema);
};

type FormData = z.infer<ReturnType<typeof createFormSchema>>;

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Get active variants
  const formVariant = getActiveVariant("form");
  const ctaVariant = getActiveVariant("cta");
  const buttonColorVariant = getActiveVariant("buttonColor");

  // Create schema based on variant
  const formSchema = createFormSchema(formVariant);
  const activeFields = formVariants[formVariant].fields as readonly string[];
  const ctaText = ctaVariants[ctaVariant];
  const buttonColor = buttonColorVariants[buttonColorVariant];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Store UTM parameters on mount
  useEffect(() => {
    storeUTMParameters();
  }, []);

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const phoneNumber = value.replace(/\D/g, "");
    
    // Format as (XXX) XXX-XXXX
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Get stored UTM parameters
      const utmParams = getStoredUTMParameters();
      
      // Track form submission
      trackFormSubmission({
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        ...utmParams,
      });

             // Simulate API call - in production, this would send to your backend
             // Include UTM parameters in the submission
             const submissionData = {
               ...data,
               ...utmParams,
               timestamp: new Date().toISOString(),
             };
             
             // In production, send to your API endpoint:
             // await fetch('/api/submit-lead', {
             //   method: 'POST',
             //   headers: { 'Content-Type': 'application/json' },
             //   body: JSON.stringify(submissionData),
             // });
             
             // Simulate network delay
             await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success
      setSubmitSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      // Track form error
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "form_error", {
          error_message: error instanceof Error ? error.message : "Unknown error",
        });
      }
      setSubmitError("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="lead-form" className="w-full lg:sticky lg:top-24 lg:self-start">
      <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
        {/* Form Header */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-darkest mb-2">
            Request Your Free Consultation
          </h2>
          <p className="text-neutral-medium text-sm md:text-base">
            We respond within 10 minutes during business hours
          </p>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg">
            <p className="text-success font-medium text-center">
              Thank you! We&apos;ll contact you shortly.
            </p>
          </div>
        )}

        {/* Error Message */}
        {submitError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 font-medium text-center">{submitError}</p>
          </div>
        )}

        {/* Form */}
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="space-y-5"
          data-testid="lead-form"
          data-variant-form={formVariant}
        >
          {/* Full Name Field */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-neutral-darkest mb-2"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              data-testid="form-field-fullname"
              {...register("fullName")}
              className={`w-full px-4 py-3 md:py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors tap-target ${
                errors.fullName
                  ? "border-red-500 focus:ring-red-500"
                  : "border-neutral-light focus:border-primary"
              }`}
              placeholder="John Smith"
              aria-invalid={errors.fullName ? "true" : "false"}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
            />
            {errors.fullName && (
              <p id="fullName-error" className="mt-1 text-sm text-red-500">
                {typeof errors.fullName === "object" && "message" in errors.fullName
                  ? String(errors.fullName.message)
                  : "This field is required"}
              </p>
            )}
          </div>

          {/* Phone Number Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-neutral-darkest mb-2"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              data-testid="form-field-phone"
              {...register("phone", {
                onChange: (e) => {
                  const formatted = formatPhoneNumber(e.target.value);
                  e.target.value = formatted;
                },
              })}
              className={`w-full px-4 py-3 md:py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors tap-target ${
                errors.phone
                  ? "border-red-500 focus:ring-red-500"
                  : "border-neutral-light focus:border-primary"
              }`}
              placeholder="(619) 555-1234"
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-sm text-red-500">
                {typeof errors.phone === "object" && "message" in errors.phone
                  ? String(errors.phone.message)
                  : "Please enter a valid phone number"}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-neutral-darkest mb-2"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              data-testid="form-field-email"
              {...register("email")}
              className={`w-full px-4 py-3 md:py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors tap-target ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-neutral-light focus:border-primary"
              }`}
              placeholder="john.smith@email.com"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-500">
                {typeof errors.email === "object" && "message" in errors.email
                  ? String(errors.email.message)
                  : "Please enter a valid email"}
              </p>
            )}
          </div>

          {/* Case Description Field - Only for 4-field and 5-field variants */}
          {activeFields.includes("caseDescription") && (
            <div>
              <label
                htmlFor="caseDescription"
                className="block text-sm font-semibold text-neutral-darkest mb-2"
              >
                Brief Case Description <span className="text-neutral-medium text-xs">(Optional)</span>
              </label>
              <textarea
                id="caseDescription"
                {...register("caseDescription")}
                rows={3}
                className={`w-full px-4 py-3 md:py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none ${
                  errors.caseDescription
                    ? "border-red-500 focus:ring-red-500"
                    : "border-neutral-light focus:border-primary"
                }`}
                placeholder="Tell us briefly what happened..."
                aria-invalid={errors.caseDescription ? "true" : "false"}
                aria-describedby={errors.caseDescription ? "caseDescription-error" : undefined}
              />
              {errors.caseDescription && (
                <p id="caseDescription-error" className="mt-1 text-sm text-red-500">
                  {typeof errors.caseDescription === "object" && "message" in errors.caseDescription
                    ? String(errors.caseDescription.message)
                    : "Description is too long"}
                </p>
              )}
            </div>
          )}

          {/* Accident Date Field - Only for 5-field variant */}
          {activeFields.includes("accidentDate") && (
            <div>
              <label
                htmlFor="accidentDate"
                className="block text-sm font-semibold text-neutral-darkest mb-2"
              >
                When did the accident occur? <span className="text-neutral-medium text-xs">(Optional)</span>
              </label>
              <input
                type="date"
                id="accidentDate"
                {...register("accidentDate")}
                className={`w-full px-4 py-3 md:py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors tap-target ${
                  errors.accidentDate
                    ? "border-red-500 focus:ring-red-500"
                    : "border-neutral-light focus:border-primary"
                }`}
                aria-invalid={errors.accidentDate ? "true" : "false"}
                aria-describedby={errors.accidentDate ? "accidentDate-error" : undefined}
              />
              {errors.accidentDate && (
                <p id="accidentDate-error" className="mt-1 text-sm text-red-500">
                  {typeof errors.accidentDate === "object" && "message" in errors.accidentDate
                    ? String(errors.accidentDate.message)
                    : "Please enter a valid date"}
                </p>
              )}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              backgroundColor: buttonColor,
            }}
            className={`w-full text-white font-semibold text-lg py-4 md:py-5 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed tap-target shadow-md hover:shadow-lg hover:opacity-90`}
            data-testid="form-submit-button"
            data-variant-cta={ctaVariant}
            data-variant-color={buttonColorVariant}
            data-variant-form={formVariant}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : (
              ctaText
            )}
          </button>

          {/* Microcopy */}
          <p className="text-xs md:text-sm text-neutral-medium text-center">
            No cost, no obligation. We only get paid if you win.
          </p>

          {/* Privacy Assurance */}
          <PrivacyAssurance />
        </form>
      </div>
    </div>
  );
}

