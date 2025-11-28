import { Hero } from "@/components/landing/hero";
import { StatsBar } from "@/components/landing/stats-bar";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { BankConnectSection } from "@/components/landing/bank-connect-section";
import { AjoSpotlight } from "@/components/landing/ajo-spotlight";
import { TaxHighlight } from "@/components/landing/tax-highlight";
import { FinancialHealthSection } from "@/components/landing/financial-health-section";
import { LoansSection } from "@/components/landing/loans-section";
import { ReportsSection } from "@/components/landing/reports-section";
import { BankSecuritySection } from "@/components/landing/bank-security-section";
import { MidPageCta } from "@/components/landing/cta-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { PricingSection } from "@/components/landing/pricing-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { MobileAppsSection } from "@/components/landing/mobile-apps-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FinalCta } from "@/components/landing/cta-section";
import { getPlans } from "@/lib/pricing";

export default async function LandingPage() {
  const { plans } = await getPlans();
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Stats Bar */}
      <StatsBar />

      {/* Features Overview */}
      <FeatureGrid />

      {/* Bank Connection - Mono Integration (Hero Feature) */}
      <BankConnectSection />

      {/* Ajo Groups Spotlight - TOP Feature */}
      <AjoSpotlight />

      {/* Tax Center Highlight */}
      <TaxHighlight />

      {/* Financial Health Score */}
      <FinancialHealthSection />

      {/* Loans & Debt Tracking */}
      <LoansSection />

      {/* Financial Reports */}
      <ReportsSection />

      {/* Bank-Level Security */}
      <BankSecuritySection />

      {/* Mid-page CTA */}
      <MidPageCta />

      {/* How It Works */}
      <HowItWorks />

      {/* Pricing */}
      <PricingSection plans={plans} />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Mobile Apps Coming Soon */}
      <MobileAppsSection />

      {/* FAQ */}
      <FaqSection />

      {/* Final CTA */}
      <FinalCta />
    </>
  );
}
