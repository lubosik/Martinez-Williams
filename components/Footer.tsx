import PhoneCTA from "./PhoneCTA";

export default function Footer() {
  return (
    <footer className="bg-neutral-darkest text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Firm Info */}
          <div>
            <h3 className="text-xl md:text-2xl font-heading font-bold mb-4">
              Martinez & Williams
            </h3>
            <p className="text-neutral-light mb-4 text-sm md:text-base">
              Personal Injury Attorneys
            </p>
            <p className="text-neutral-light text-sm md:text-base leading-relaxed">
              Fighting for maximum compensation for car accident victims throughout San Diego County.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg md:text-xl font-heading font-semibold mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm md:text-base">
              <div>
                <p className="text-neutral-light mb-1">Address:</p>
                <p className="text-white">
                  1234 Legal Plaza, Suite 500<br />
                  San Diego, CA 92101
                </p>
              </div>
              <div>
                <p className="text-neutral-light mb-1">Phone:</p>
                <a
                  href="tel:+16195554878"
                  className="text-white hover:text-accent transition-colors"
                >
                  (619) 555-HURT
                </a>
              </div>
              <div>
                <p className="text-neutral-light mb-1">Email:</p>
                <a
                  href="mailto:info@martinezwilliamslaw.com"
                  className="text-white hover:text-accent transition-colors"
                >
                  info@martinezwilliamslaw.com
                </a>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="text-lg md:text-xl font-heading font-semibold mb-4">
              Office Hours
            </h4>
            <div className="space-y-2 text-sm md:text-base">
              <p className="text-white">
                <span className="text-neutral-light">Monday - Friday:</span> 8:00 AM - 6:00 PM
              </p>
              <p className="text-white">
                <span className="text-neutral-light">Saturday:</span> 9:00 AM - 2:00 PM
              </p>
              <p className="text-white">
                <span className="text-neutral-light">Sunday:</span> Closed
              </p>
              <p className="text-neutral-light mt-3 text-xs md:text-sm">
                24/7 Emergency Consultations Available
              </p>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h4 className="text-lg md:text-xl font-heading font-semibold mb-4">
              Quick Links
            </h4>
            <div className="space-y-2 mb-6 text-sm md:text-base">
              <a
                href="/privacy-policy"
                className="block text-neutral-light hover:text-accent transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="block text-neutral-light hover:text-accent transition-colors"
              >
                Terms of Service
              </a>
            </div>
            <div>
              <h5 className="text-base font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-light hover:text-accent transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-light hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-light hover:text-accent transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section in Footer */}
        <div className="border-t border-neutral-medium/30 pt-8 mb-8 text-center">
          <h4 className="text-xl md:text-2xl font-heading font-bold mb-4">
            Need Help Now?
          </h4>
          <PhoneCTA variant="default" location="footer" />
        </div>

        {/* Disclaimer */}
        <div className="border-t border-neutral-medium/30 pt-6 mb-6">
          <p className="text-xs md:text-sm text-neutral-light leading-relaxed mb-2">
            <strong className="text-white">Disclaimer:</strong> The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
          </p>
          <p className="text-xs md:text-sm text-neutral-light leading-relaxed">
            <strong className="text-white">Prior Results:</strong> Prior results do not guarantee a similar outcome. Each case is unique and must be evaluated on its own facts and circumstances.
          </p>
        </div>

        {/* Accessibility Statement */}
        <div className="border-t border-neutral-medium/30 pt-6 mb-6">
          <p className="text-xs md:text-sm text-neutral-light leading-relaxed mb-2">
            <strong className="text-white">Accessibility:</strong> We are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards. If you encounter any accessibility issues, please contact us at{" "}
            <a
              href="mailto:accessibility@martinezwilliamslaw.com"
              className="text-accent hover:text-accent-light transition-colors"
            >
              accessibility@martinezwilliamslaw.com
            </a>
            .
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-medium/30 pt-6 text-center">
          <p className="text-xs md:text-sm text-neutral-light">
            &copy; {new Date().getFullYear()} Martinez & Williams Personal Injury Attorneys. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

