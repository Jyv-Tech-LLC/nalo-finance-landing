import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FeatureCta } from "@/components/landing/cta-section";
import { getPlans, type Plan } from "@/lib/pricing";
import { PricingCards } from "./pricing-cards";
import {
  Check,
  Star,
  Sparkles,
  Users,
  Zap,
  Shield,
  Crown,
  X,
  HelpCircle,
  Calculator,
  TrendingUp,
  Target,
  Brain,
} from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Unlimited Ajo Groups",
    description: "Create and manage unlimited contribution groups with any number of members",
  },
  {
    icon: Brain,
    title: "Unlimited Oracle AI",
    description: "Ask unlimited questions to your personal AI financial advisor",
  },
  {
    icon: Calculator,
    title: "AI Tax Optimization",
    description: "Get AI-powered suggestions to legally minimize your tax burden",
  },
  {
    icon: TrendingUp,
    title: "Hustle Optimizer",
    description: "AI analyzes your income streams and tells you where to focus",
  },
  {
    icon: Shield,
    title: "Escrow Protection",
    description: "Premium Ajo groups get bank-backed escrow for added security",
  },
  {
    icon: Target,
    title: "Advanced Goals",
    description: "Set milestones, get AI recommendations, and achieve goals faster",
  },
];

const comparisonFeatures = [
  {
    category: "Core Features",
    features: [
      { name: "Bank accounts", free: "5", basic: "10", premium: "Unlimited", unlimited: "Unlimited" },
      { name: "Transaction categorization", free: "Manual", basic: "AI-powered", premium: "AI-powered", unlimited: "AI-powered" },
      { name: "Budget creation", free: "Basic", basic: "Advanced", premium: "Advanced + Forecasting", unlimited: "Advanced + Forecasting" },
      { name: "Financial goals", free: "3 goals", basic: "10 goals", premium: "Unlimited + Milestones", unlimited: "Unlimited + Milestones" },
    ],
  },
  {
    category: "Ajo Groups",
    features: [
      { name: "Active Ajo groups", free: "2 groups", basic: "5 groups", premium: "Unlimited", unlimited: "Unlimited" },
      { name: "Members per group", free: "Up to 10", basic: "Up to 25", premium: "Unlimited", unlimited: "Unlimited" },
      { name: "Trust score tracking", free: "Basic", basic: "Advanced", premium: "Advanced + AI Risk", unlimited: "Advanced + AI Risk" },
      { name: "Receipt uploads", free: "Manual", basic: "Manual", premium: "OCR Scanning", unlimited: "OCR Scanning" },
      { name: "Escrow protection", free: "—", basic: "—", premium: "✓", unlimited: "✓" },
    ],
  },
  {
    category: "Tax & Income",
    features: [
      { name: "Tax calculators", free: "All 4 calculators", basic: "All 4 calculators", premium: "All 4 + AI Optimization", unlimited: "All 4 + AI Optimization" },
      { name: "Income streams", free: "3 streams", basic: "10 streams", premium: "Unlimited", unlimited: "Unlimited" },
      { name: "Hustle Optimizer", free: "—", basic: "Basic", premium: "✓ AI-powered", unlimited: "✓ AI-powered" },
      { name: "Tax reports", free: "Basic view", basic: "PDF Export", premium: "PDF/CSV Export", unlimited: "PDF/CSV + API" },
    ],
  },
  {
    category: "Oracle AI",
    features: [
      { name: "AI questions", free: "10/month", basic: "100/month", premium: "1,000/month", unlimited: "Unlimited" },
      { name: "Personalized insights", free: "Basic", basic: "Advanced", premium: "Advanced + Proactive", unlimited: "Advanced + Proactive" },
      { name: "Financial recommendations", free: "—", basic: "Basic", premium: "✓", unlimited: "✓ + Custom" },
    ],
  },
  {
    category: "Support & Extras",
    features: [
      { name: "Customer support", free: "Community", basic: "Email", premium: "Priority Email/Chat", unlimited: "Dedicated Manager" },
      { name: "Transaction history", free: "90 days", basic: "1 year", premium: "Unlimited", unlimited: "Unlimited" },
      { name: "Early feature access", free: "—", basic: "—", premium: "✓", unlimited: "✓ + Beta" },
      { name: "API access", free: "—", basic: "—", premium: "—", unlimited: "✓" },
    ],
  },
];

const faqs = [
  {
    question: "Can I start with Free and upgrade later?",
    answer: "Absolutely! Start with the Free plan to explore Nalo Finance. When you're ready for advanced features like unlimited Ajo groups, AI tax optimization, or unlimited Oracle AI, upgrade to any paid plan with one click. Your data carries over seamlessly, and you'll get immediate access to all features. No setup required.",
  },
  {
    question: "What happens if I cancel my subscription?",
    answer: "You can cancel anytime with no penalties or cancellation fees. Your paid features remain active until the end of your current billing period. After that, you'll automatically move to the Free plan. Your data is never deleted—you'll just have the Free plan limitations. You can reactivate anytime to regain full access.",
  },
  {
    question: "Is there a free plan?",
    answer: "Yes! Our Free plan is completely free forever with core features including up to 5 bank accounts, 2 Ajo groups, 3 income streams, 3 financial goals, and 10 Oracle AI questions per month. No credit card required. Upgrade to any paid plan anytime when you need more features.",
  },
  {
    question: "How does billing work?",
    answer: "All plans are billed monthly. Payment via bank transfer, card, or mobile money. We support Paystack for Nigerian users and Stripe for international payments (USD, GBP, EUR accepted).",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept: (1) Nigerian bank cards (Verve, Mastercard, Visa) via Paystack, (2) Bank transfers to our dedicated account, (3) USSD payments, (4) Mobile wallets (Opay, Kuda, PalmPay). International payments via Stripe for diaspora users (USD, GBP, EUR accepted).",
  },
  {
    question: "Do you offer discounts for students or nonprofits?",
    answer: "Yes! Students with valid Nigerian university ID get 50% off paid plans. Registered nonprofits and NGOs get 40% off. Contact hello@nalofinance.com with proof of student status or nonprofit registration.",
  },
  {
    question: "What's included in 'Priority Support'?",
    answer: "Premium and Unlimited subscribers get: (1) Email support with <12 hour response time (vs 48 hours for Free), (2) Live chat support during business hours (9am-6pm WAT, Mon-Fri), (3) Direct access to product team for feature requests, (4) Priority bug fixes and issue resolution.",
  },
  {
    question: "Is my payment information secure?",
    answer: "Yes. We use Paystack and Stripe (both certified PCI DSS Level 1 compliant) for all payment processing. We never store your full card details on our servers—payments are tokenized and encrypted. All transactions use 256-bit SSL encryption.",
  },
];

export default async function PricingPage() {
  const { plans, currencies, appUrl } = await getPlans();

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-32 pb-16 md:pt-40 md:pb-24 border-b-4 border-primary">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-primary/10 rotate-12" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-primary/5 -rotate-12" />
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-4 border-primary/10 rotate-45" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" strokeWidth={3} />
              <span className="text-xs font-black uppercase tracking-wide">
                Simple, Transparent Pricing
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none">
              Start Free,
              <br />
              <span className="text-primary">Upgrade When Ready</span>
            </h1>

            <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              No hidden fees. No credit card required. Cancel anytime.
              Choose the plan that fits your financial goals.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-success/10 border-2 border-success/20 flex items-center justify-center">
                  <Check className="h-5 w-5 text-success" strokeWidth={3} />
                </div>
                <span className="text-sm font-black">Free Forever Plan</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-success/10 border-2 border-success/20 flex items-center justify-center">
                  <Check className="h-5 w-5 text-success" strokeWidth={3} />
                </div>
                <span className="text-sm font-black">No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-success/10 border-2 border-success/20 flex items-center justify-center">
                  <Check className="h-5 w-5 text-success" strokeWidth={3} />
                </div>
                <span className="text-sm font-black">Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards - Client Component for Currency Toggle */}
      <PricingCards plans={plans} currencies={currencies} />

      {/* Premium Highlights */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20 mb-6">
              <Crown className="h-4 w-4 text-primary" strokeWidth={3} />
              <span className="text-xs font-black uppercase tracking-wide">
                Premium Benefits
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              Why Upgrade?
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              Unlock the full power of Nalo Finance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-card border-4 border-border hover:border-primary transition-colors group"
                >
                  <div className="w-14 h-14 bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary transition-colors">
                    <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={3} />
                  </div>
                  <h3 className="text-lg font-black uppercase mb-2">{highlight.title}</h3>
                  <p className="text-sm font-bold text-muted-foreground">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section id="comparison" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              Feature Comparison
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              See exactly what you get with each plan
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-2 p-4 bg-black text-white mb-4 min-w-[700px]">
              <div className="font-black uppercase text-sm">Feature</div>
              <div className="font-black uppercase text-center text-sm">Free</div>
              <div className="font-black uppercase text-center text-sm">Basic</div>
              <div className="font-black uppercase text-center text-sm text-primary">Premium</div>
              <div className="font-black uppercase text-center text-sm">Unlimited</div>
            </div>

            {/* Table Body */}
            <div className="space-y-4 min-w-[700px]">
              {comparisonFeatures.map((section, sIdx) => (
                <div key={sIdx} className="bg-card border-4 border-border overflow-hidden">
                  <div className="p-4 bg-muted/50 border-b-4 border-border">
                    <h3 className="text-base font-black uppercase">{section.category}</h3>
                  </div>
                  <div className="divide-y-2 divide-border">
                    {section.features.map((feature, fIdx) => (
                      <div key={fIdx} className="grid grid-cols-5 gap-2 p-4 items-center">
                        <div className="font-bold text-sm">{feature.name}</div>
                        {["free", "basic", "premium", "unlimited"].map((tier) => {
                          const value = feature[tier as keyof typeof feature];
                          return (
                            <div
                              key={tier}
                              className={`text-xs font-bold text-center ${
                                tier === "premium" ? "text-primary font-black" : "text-muted-foreground"
                              }`}
                            >
                              {value === "—" ? (
                                <X className="h-4 w-4 mx-auto text-muted-foreground/50" strokeWidth={3} />
                              ) : value === "✓" || value?.startsWith("✓") ? (
                                <div className="flex items-center justify-center gap-1">
                                  <Check className="h-4 w-4 text-success" strokeWidth={3} />
                                  {value !== "✓" && <span className="text-success">{value.replace("✓ ", "")}</span>}
                                </div>
                              ) : (
                                value
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20 mb-6">
              <HelpCircle className="h-4 w-4 text-primary" strokeWidth={3} />
              <span className="text-xs font-black uppercase tracking-wide">
                Pricing Questions
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about plans and billing
            </p>
          </div>

          <FaqAccordion faqs={faqs} showContactCta={true} />
        </div>
      </section>

      {/* Final CTA */}
      <FeatureCta
        icon={Zap}
        title="Ready to Take Control of Your Finances?"
        description="Join 10,000+ Nigerians managing their money smarter. Start free, upgrade when ready, cancel anytime."
        primaryCta={{
          text: "START FREE NOW",
          href: `${appUrl}/register?plan=FREE`,
        }}
        secondaryCta={{
          text: "CONTACT SALES",
          href: "mailto:hello@nalofinance.com",
        }}
        footnote="Free plan available. No credit card required."
      />
    </>
  );
}
