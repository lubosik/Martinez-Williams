import PhoneCTA from "./PhoneCTA";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Free Consultation",
      description: "We listen to your story, understand your situation, and evaluate your case. During this initial consultation, we'll explain your legal rights and answer any questions you have. There's no pressure, no obligation – just honest advice about your options.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Investigation",
      description: "We gather evidence and build your case. Our team conducts a thorough investigation, collecting police reports, medical records, witness statements, and any other evidence needed to prove your claim. We work with accident reconstruction experts and medical professionals to build the strongest possible case.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Negotiation",
      description: "We fight for maximum compensation. Our experienced negotiators know every tactic insurance companies use to minimize payouts. We'll handle all communication with insurance adjusters, negotiate aggressively on your behalf, and refuse to accept lowball offers. We're not afraid to take your case to trial if that's what it takes to get you the settlement you deserve.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Resolution",
      description: "You get the settlement you deserve. Once we've secured your settlement, we'll handle all the paperwork and ensure you receive your compensation as quickly as possible. We'll also help you understand any tax implications and make sure all medical liens are properly resolved. Your focus can remain on recovery while we handle the rest.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-darkest mb-4">
            Our Process
          </h2>
          <p className="text-lg md:text-xl text-neutral-medium max-w-3xl mx-auto">
            Simple, transparent, and focused on getting you the compensation you deserve
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 md:gap-8 items-start"
              >
                {/* Step Number and Icon */}
                <div className="flex-shrink-0 flex items-center gap-4">
                  <div className="relative">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/10 rounded-full flex items-center justify-center border-4 border-primary">
                      <div className="text-primary font-heading font-bold text-2xl md:text-3xl">
                        {step.number}
                      </div>
                    </div>
                    {/* Connector Line (except for last item) */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-12 md:h-16 bg-primary/30 mt-2"></div>
                    )}
                  </div>
                  <div className="bg-primary/10 text-primary rounded-lg p-3 hidden md:block">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-3 md:hidden">
                    <div className="bg-primary/10 text-primary rounded-lg p-2">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-neutral-darkest">
                      {step.title}
                    </h3>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-neutral-darkest mb-3 hidden md:block">
                    {step.title}
                  </h3>
                  <p className="text-neutral-dark leading-relaxed text-base md:text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA After Process */}
        <div className="mt-12 md:mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-neutral-darkest mb-4">
            Ready to get started?
          </h3>
          <p className="text-lg md:text-xl text-neutral-medium mb-6">
            Get your free consultation today
          </p>
          <PhoneCTA variant="large" location="process_section" />
        </div>
      </div>
    </section>
  );
}

