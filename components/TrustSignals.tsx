import PhoneCTA from "./PhoneCTA";

export default function TrustSignals() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-neutral-lightest">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-neutral-darkest mb-8">
            Trusted by San Diego Accident Victims
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Super Lawyers Badge */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-20 h-20 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg text-neutral-darkest mb-2 text-center">
                Super Lawyers
              </h3>
              <p className="text-sm text-neutral-medium text-center">
                Recognized Excellence
              </p>
            </div>

            {/* Avvo Rating Badge */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-20 h-20 mb-4 bg-success/10 rounded-full flex items-center justify-center">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <h3 className="font-heading font-semibold text-lg text-neutral-darkest mb-2 text-center">
                Avvo Rating
              </h3>
              <p className="text-sm text-neutral-medium text-center">
                5.0 Out of 5 Stars
              </p>
            </div>

            {/* State Bar Certified Badge */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-20 h-20 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg text-neutral-darkest mb-2 text-center">
                State Bar Certified
              </h3>
              <p className="text-sm text-neutral-medium text-center">
                California Licensed
              </p>
            </div>

            {/* BBB A+ Rating Badge */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-20 h-20 mb-4 bg-success/10 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <span className="text-3xl font-bold text-success">A+</span>
                </div>
              </div>
              <h3 className="font-heading font-semibold text-lg text-neutral-darkest mb-2 text-center">
                BBB Rating
              </h3>
              <p className="text-sm text-neutral-medium text-center">
                Accredited Business
              </p>
            </div>
          </div>
        </div>

        {/* Results Showcase */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                $50M+
              </div>
              <p className="text-neutral-dark font-medium text-lg">
                Recovered for Accident Victims
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                500+
              </div>
              <p className="text-neutral-dark font-medium text-lg">
                Car Accident Cases Won
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                95%
              </div>
              <p className="text-neutral-dark font-medium text-lg">
                Success Rate in 2024
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-neutral-darkest mb-10">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold text-lg">MR</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-neutral-darkest">Maria Rodriguez</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-neutral-dark leading-relaxed mb-3">
                &ldquo;After my rear-end collision, I was overwhelmed with medical bills and insurance companies. Martinez & Williams took care of everything and got me a settlement that covered all my expenses and more. They were compassionate and professional throughout the entire process.&rdquo;
              </p>
              <p className="text-sm text-neutral-medium italic">
                Rear-end collision case • $125,000 settlement
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold text-lg">JS</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-neutral-darkest">James Sullivan</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-neutral-dark leading-relaxed mb-3">
                &ldquo;I was hit by a drunk driver and didn&apos;t know where to turn. The team at Martinez & Williams fought tirelessly for my case. They kept me informed every step of the way and secured a settlement that allowed me to focus on my recovery without financial stress.&rdquo;
              </p>
              <p className="text-sm text-neutral-medium italic">
                DUI accident case • $350,000 settlement
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold text-lg">LC</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-neutral-darkest">Lisa Chen</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-neutral-dark leading-relaxed mb-3">
                &ldquo;The insurance company tried to lowball me after my T-bone accident. Martinez & Williams wouldn&apos;t accept that. They negotiated aggressively and got me the full compensation I deserved. I&apos;m so grateful for their expertise and dedication.&rdquo;
              </p>
              <p className="text-sm text-neutral-medium italic">
                T-bone collision case • $275,000 settlement
              </p>
            </div>
          </div>
        </div>

        {/* CTA After Testimonials */}
        <div className="mb-16 text-center">
          <PhoneCTA variant="default" location="testimonials_section" />
          <p className="text-sm md:text-base text-neutral-medium mt-4">
            Don&apos;t wait – California has strict filing deadlines
          </p>
        </div>

        {/* As Seen In Section */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-heading font-semibold text-center text-neutral-medium mb-6">
            As Seen In
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
            <div className="opacity-60 hover:opacity-100 transition-opacity duration-200">
              <div className="bg-white rounded px-6 py-3 shadow-sm">
                <span className="text-neutral-dark font-semibold text-lg">NBC San Diego</span>
              </div>
            </div>
            <div className="opacity-60 hover:opacity-100 transition-opacity duration-200">
              <div className="bg-white rounded px-6 py-3 shadow-sm">
                <span className="text-neutral-dark font-semibold text-lg">San Diego Union-Tribune</span>
              </div>
            </div>
            <div className="opacity-60 hover:opacity-100 transition-opacity duration-200">
              <div className="bg-white rounded px-6 py-3 shadow-sm">
                <span className="text-neutral-dark font-semibold text-lg">Legal Times</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

