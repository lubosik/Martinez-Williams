import PhoneCTA from "./PhoneCTA";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  showUrgency?: boolean;
  variant?: "default" | "large";
}

export default function CTASection({
  title = "Ready to Get Started?",
  subtitle,
  showUrgency = true,
  variant = "default",
}: CTASectionProps) {
  return (
    <div className="bg-primary text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {title && (
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-lg md:text-xl mb-6 text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        
        <div className="flex flex-col items-center gap-4 mb-6">
          <PhoneCTA variant={variant} location="cta_section" />
          
          {showUrgency && (
            <div className="space-y-2 mt-2">
              <p className="text-sm md:text-base text-white/90 font-medium">
                Don&apos;t wait – California has strict filing deadlines
              </p>
              <p className="text-xs md:text-sm text-white/80">
                Appointments booking fast for this week
              </p>
            </div>
          )}
        </div>

        <p className="text-sm md:text-base text-white/80">
          No cost, no obligation. We only get paid if you win.
        </p>
      </div>
    </div>
  );
}

