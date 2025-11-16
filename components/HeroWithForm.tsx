"use client";

/**
 * HeroWithForm Component
 * 
 * Main hero section combining headline, sub-headline, and lead capture form.
 * Features A/B testing support for headlines and responsive two-column layout.
 * 
 * @returns {JSX.Element} Hero section with form
 */
import Image from "next/image";
import LeadForm from "./LeadForm";
import PhoneCTA from "./PhoneCTA";
import { getActiveVariant, headlineVariants } from "@/lib/variants";

export default function HeroWithForm() {
  const headlineVariant = getActiveVariant("headline");
  const headline = headlineVariants[headlineVariant];

  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center overflow-hidden pt-[60px] md:pt-0">
      {/* Background Image with Overlay - CLS Prevention: Container has explicit min-height */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1663286357473-39dacb93b5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTM5NjB8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXJzJTIwYXR0b3JuZXlzJTIwU2FuJTIwRGllZ28lMjBjb3VydGhvdXNlfGVufDB8MHx8fDE3NjMzMTg3MDR8MA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Professional attorneys representing clients"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-neutral-darkest/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
          {/* Hero Content - Left Side on Desktop */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            {/* Headline - 32px mobile, 48px desktop */}
            <h1 
              className="font-heading font-bold text-white text-[32px] md:text-[48px] leading-tight mb-4 md:mb-6 text-balance"
              data-testid="hero-headline"
              data-variant={headlineVariant}
            >
              {headline}
            </h1>

            {/* Sub-headline - 18px mobile, 24px desktop */}
            <p className="font-sans font-medium text-white text-[18px] md:text-[24px] leading-relaxed mb-4 md:mb-6 text-balance">
              Over $50 Million Recovered for Accident Victims – No Fee Unless We Win
            </p>

            {/* Micro-copy */}
            <p className="font-sans text-white/90 text-base md:text-lg mt-6 md:mt-8 mb-6">
              24/7 Free Consultations to Protect Your Rights
            </p>

            {/* Phone CTA */}
            <div className="mt-4">
              <PhoneCTA variant="large" location="hero_section" />
            </div>
          </div>

          {/* Form - Right Side on Desktop, Below Hero on Mobile */}
          <div className="w-full lg:w-[40%]">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}

