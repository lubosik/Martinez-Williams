export const metadata = {
  title: "Privacy Policy | Martinez & Williams Personal Injury Attorneys",
  description: "Privacy policy for Martinez & Williams Personal Injury Attorneys",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-darkest mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-neutral-dark leading-relaxed mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-neutral-darkest mb-4">
              Information We Collect
            </h2>
            <p className="text-neutral-dark leading-relaxed mb-4">
              When you contact us through our website, we may collect the following information:
            </p>
            <ul className="list-disc pl-6 text-neutral-dark leading-relaxed space-y-2 mb-4">
              <li>Name and contact information (phone, email, address)</li>
              <li>Information about your case or inquiry</li>
              <li>Any other information you voluntarily provide</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-neutral-darkest mb-4">
              How We Use Your Information
            </h2>
            <p className="text-neutral-dark leading-relaxed mb-4">
              We use the information you provide to:
            </p>
            <ul className="list-disc pl-6 text-neutral-dark leading-relaxed space-y-2 mb-4">
              <li>Respond to your inquiries and provide legal consultations</li>
              <li>Communicate with you about your case</li>
              <li>Improve our services and website</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-neutral-darkest mb-4">
              Information Security
            </h2>
            <p className="text-neutral-dark leading-relaxed">
              We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-neutral-darkest mb-4">
              Contact Us
            </h2>
            <p className="text-neutral-dark leading-relaxed">
              If you have questions about this privacy policy, please contact us at{" "}
              <a href="mailto:info@martinezwilliamslaw.com" className="text-primary hover:underline">
                info@martinezwilliamslaw.com
              </a>{" "}
              or call us at{" "}
              <a href="tel:+16195554878" className="text-primary hover:underline">
                (619) 555-HURT
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

