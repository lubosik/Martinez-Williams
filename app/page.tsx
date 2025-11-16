import dynamic from "next/dynamic";
import MobileStickyHeader from "@/components/MobileStickyHeader";
import HeroWithForm from "@/components/HeroWithForm";
import TrustSignals from "@/components/TrustSignals";

// Lazy load below-fold components for better performance
const BenefitsSection = dynamic(() => import("@/components/BenefitsSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const MeetAttorneys = dynamic(() => import("@/components/MeetAttorneys"), {
  loading: () => <div className="min-h-[400px]" />,
});
const ProcessSection = dynamic(() => import("@/components/ProcessSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const AreasServed = dynamic(() => import("@/components/AreasServed"), {
  loading: () => <div className="min-h-[300px]" />,
});
const CTASection = dynamic(() => import("@/components/CTASection"), {
  loading: () => <div className="min-h-[300px]" />,
});
const FloatingMobileCTA = dynamic(() => import("@/components/FloatingMobileCTA"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <main className="min-h-screen pb-20 md:pb-0">
        <MobileStickyHeader />
        <HeroWithForm />
        <TrustSignals />
        <BenefitsSection />
        <MeetAttorneys />
        <ProcessSection />
        <FAQSection />
        <AreasServed />
        <CTASection 
          title="Ready to Get Started?"
          subtitle="Get your free consultation today and let us fight for the compensation you deserve."
        />
        <FloatingMobileCTA />
      </main>
      <Footer />
    </>
  );
}

