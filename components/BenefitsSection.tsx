export default function BenefitsSection() {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "No Fee Unless We Win",
      description: "You pay nothing upfront. We only get paid when we secure your settlement. This means we're as invested in winning your case as you are – we fight harder because our success depends on yours.",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Maximum Compensation",
      description: "We fight to maximize your settlement so you can focus on healing, not bills. Our experienced negotiators know every tactic insurance companies use to lowball victims – and we won't let them get away with it.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24/7 Availability",
      description: "Legal emergencies don't wait. Call us anytime, day or night – we're here for you. Whether you need immediate advice after an accident or have questions at 2 AM, our team is always ready to help.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      title: "Bilingual Services",
      description: "Spanish-speaking attorneys available to serve San Diego's diverse community. We believe language should never be a barrier to justice. Our bilingual team ensures you understand every step of your case in the language you're most comfortable with.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Proven Track Record",
      description: "$50M+ recovered. 95% success rate. Real results for real people. These aren't just numbers – they represent thousands of families who can now afford medical care, lost wages covered, and peace of mind restored.",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "We Handle Everything",
      description: "From paperwork to negotiations, we manage your case while you recover. You don't need to stress about filing deadlines, gathering evidence, or dealing with insurance adjusters – we take care of it all so you can focus on what matters most: getting better.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-darkest mb-4">
            Why Car Accident Victims Choose Us
          </h2>
          <p className="text-lg md:text-xl text-neutral-medium max-w-3xl mx-auto">
            When you&apos;re injured and facing mounting medical bills, lost wages, and insurance company tactics, 
            you need a team that fights for you – not just another law firm.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-neutral-lightest rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`${benefit.bgColor} ${benefit.color} rounded-lg p-3 flex-shrink-0`}>
                  {benefit.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-neutral-darkest mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-dark leading-relaxed text-base md:text-lg">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emotional Closing */}
        <div className="mt-12 md:mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-primary/5 rounded-lg p-8 md:p-10 border-2 border-primary/20">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-neutral-darkest mb-4">
              You Don&apos;t Have to Face This Alone
            </h3>
            <p className="text-lg md:text-xl text-neutral-dark leading-relaxed mb-6">
              Dealing with injuries, medical bills, and insurance companies is overwhelming enough. 
              Let us handle the legal battle while you focus on recovery. We&apos;ve helped thousands 
              of San Diego families get the compensation they deserve – and we&apos;re ready to fight for you too.
            </p>
            <p className="text-base md:text-lg text-neutral-medium font-medium">
              Your recovery is our priority. Your victory is our mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

