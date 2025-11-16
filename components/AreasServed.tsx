export default function AreasServed() {
  const areas = [
    "Downtown San Diego",
    "La Jolla",
    "Pacific Beach",
    "Mission Valley",
    "Chula Vista",
    "El Cajon",
    "Carlsbad",
    "Oceanside",
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-darkest mb-4">
            Areas We Serve
          </h2>
          <p className="text-lg md:text-xl text-neutral-medium max-w-3xl mx-auto">
            Serving car accident victims throughout San Diego County and surrounding areas
          </p>
        </div>

        {/* Areas Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {areas.map((area, index) => (
              <div
                key={index}
                className="bg-neutral-lightest rounded-lg p-4 md:p-6 text-center hover:bg-primary/5 hover:shadow-md transition-all duration-200"
              >
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-neutral-darkest font-semibold text-sm md:text-base">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto">
          <p className="text-neutral-medium text-base md:text-lg">
            Don&apos;t see your area listed? We serve clients throughout California. 
            Call us to see if we can help with your car accident case.
          </p>
        </div>
      </div>
    </section>
  );
}

