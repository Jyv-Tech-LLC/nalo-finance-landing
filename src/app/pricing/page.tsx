import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FeatureCta } from "@/components/landing/cta-section";
import {
  Check,
  Star,
  ArrowRight,
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
  PieChart,
  Wallet,
} from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₦0",
    period: "forever",
    description: "Perfect for getting started with personal finance management",
    popular: false,
    cta: "Get Started Free",
    href: "https://app.nalofinance.com/auth/register",
    icon: Wallet,
    color: "bg-muted",
    features: [
      { text: "5 bank accounts", included: true },
      { text: "Basic budgeting tools", included: true },
      { text: "2 Ajo groups (up to 10 members each)", included: true },
      { text: "All 4 tax calculators", included: true },
      { text: "3 income streams tracking", included: true },
      { text: "3 financial goals", included: true },
      { text: "10 Oracle AI questions/month", included: true },
      { text: "Basic financial reports", included: true },
      { text: "Community support", included: true },
    ],
    notIncluded: [
      "Advanced budgeting & forecasting",
      "Unlimited Ajo groups",
      "AI tax optimization",
      "Unlimited Oracle AI",
      "Priority support",
    ],
  },
  {
    name: "Premium",
    price: "₦10,000",
    period: "per month",
    description: "For serious financial enthusiasts and power users",
    popular: true,
    cta: "Start 14-Day Free Trial",
    href: "https://app.nalofinance.com/auth/register?plan=premium",
    icon: Crown,
    color: "bg-primary",
    features: [
      { text: "Unlimited bank accounts", included: true },
      { text: "Advanced budgeting & forecasting", included: true },
      { text: "Unlimited Ajo groups & members", included: true },
      { text: "All 4 tax calculators + AI optimization", included: true },
      { text: "Unlimited income streams", included: true },
      { text: "Unlimited goals with milestones", included: true },
      { text: "Unlimited Oracle AI questions", included: true },
      { text: "Advanced reports (PDF/CSV)", included: true },
      { text: "Priority email & chat support", included: true },
      { text: "Receipt OCR scanning", included: true },
      { text: "Ajo escrow protection", included: true },
      { text: "AI-powered insights", included: true },
      { text: "Early feature access", included: true },
    ],
    notIncluded: [],
  },
];

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
      { name: "Bank accounts", free: "5", premium: "Unlimited" },
      { name: "Transaction categorization", free: "Manual", premium: "AI-powered" },
      { name: "Budget creation", free: "Basic", premium: "Advanced + Forecasting" },
      { name: "Financial goals", free: "3 goals", premium: "Unlimited + Milestones" },
    ],
  },
  {
    category: "Ajo Groups",
    features: [
      { name: "Active Ajo groups", free: "2 groups", premium: "Unlimited" },
      { name: "Members per group", free: "Up to 10", premium: "Unlimited" },
      { name: "Trust score tracking", free: "Basic", premium: "Advanced + AI Risk" },
      { name: "Receipt uploads", free: "Manual", premium: "OCR Scanning" },
      { name: "Escrow protection", free: "—", premium: "✓" },
    ],
  },
  {
    category: "Tax & Income",
    features: [
      { name: "Tax calculators", free: "All 4 calculators", premium: "All 4 + AI Optimization" },
      { name: "Income streams", free: "3 streams", premium: "Unlimited" },
      { name: "Hustle Optimizer", free: "—", premium: "✓ AI-powered" },
      { name: "Tax reports", free: "Basic view", premium: "PDF/CSV Export" },
    ],
  },
  {
    category: "Oracle AI",
    features: [
      { name: "AI questions", free: "10/month", premium: "Unlimited" },
      { name: "Personalized insights", free: "Basic", premium: "Advanced + Proactive" },
      { name: "Financial recommendations", free: "—", premium: "✓" },
    ],
  },
  {
    category: "Support & Extras",
    features: [
      { name: "Customer support", free: "Community", premium: "Priority Email/Chat" },
      { name: "Transaction history", free: "90 days", premium: "Unlimited" },
      { name: "Early feature access", free: "—", premium: "✓" },
      { name: "Custom categories", free: "—", premium: "✓" },
    ],
  },
];

const faqs = [
  {
    question: "Can I start with Free and upgrade to Premium later?",
    answer: "Absolutely! Start with the Free plan to explore Nalo Finance. When you're ready for advanced features like unlimited Ajo groups, AI tax optimization, or unlimited Oracle AI, upgrade to Premium with one click. Your data carries over seamlessly, and you'll get immediate access to all Premium features. No setup required.",
  },
  {
    question: "What happens if I cancel my Premium subscription?",
    answer: "You can cancel anytime with no penalties or cancellation fees. Your Premium features remain active until the end of your current billing period. After that, you'll automatically move to the Free plan. Your data is never deleted—you'll just have the Free plan limitations. You can reactivate Premium anytime to regain full access.",
  },
  {
    question: "Is there a free trial for Premium?",
    answer: "Yes! New Premium subscribers get a 14-day free trial with full access to all Premium features. No credit card required to start the trial. After 14 days, you'll be charged ₦10,000/month. Cancel anytime during the trial at no cost.",
  },
  {
    question: "How does billing work? Can I pay annually?",
    answer: "Premium is billed monthly at ₦10,000/month. Payment via bank transfer, card, or mobile money. Annual billing (with 2 months free—₦100,000/year instead of ₦120,000) is coming soon. Existing monthly subscribers will be able to switch to annual billing and save 17%.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept: (1) Nigerian bank cards (Verve, Mastercard, Visa) via Paystack, (2) Bank transfers to our dedicated account, (3) USSD payments, (4) Mobile wallets (Opay, Kuda, PalmPay). International payments via Paystack for diaspora users (USD, GBP, EUR accepted and converted to Naira).",
  },
  {
    question: "Do you offer discounts for students or nonprofits?",
    answer: "Yes! Students with valid Nigerian university ID get 50% off Premium (₦5,000/month). Registered nonprofits and NGOs get 40% off (₦6,000/month). Contact hello@nalofinance.com with proof of student status or nonprofit registration.",
  },
  {
    question: "What's included in 'Priority Support'?",
    answer: "Premium subscribers get: (1) Email support with <12 hour response time (vs 48 hours for Free), (2) Live chat support during business hours (9am-6pm WAT, Mon-Fri), (3) Direct access to product team for feature requests, (4) Priority bug fixes and issue resolution.",
  },
  {
    question: "Is my payment information secure?",
    answer: "Yes. We use Paystack (certified PCI DSS Level 1 compliant) for all payment processing. We never store your full card details on our servers—Paystack tokenizes and encrypts everything. All transactions use 256-bit SSL encryption.",
  },
];

export default function PricingPage() {
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
                <span className="text-sm font-black">14-Day Free Trial</span>
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

      {/* Pricing Cards */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-card border-4 ${
                    plan.popular ? "border-primary shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" : "border-border"
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-primary-foreground fill-current" strokeWidth={3} />
                        <span className="text-sm font-black uppercase text-primary-foreground">Most Popular</span>
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className={`p-6 ${plan.popular ? "bg-primary/5" : "bg-muted/30"} border-b-4 ${plan.popular ? "border-primary" : "border-border"}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 ${plan.popular ? "bg-primary" : "bg-muted"} flex items-center justify-center`}>
                        <Icon className={`h-7 w-7 ${plan.popular ? "text-primary-foreground" : "text-foreground"}`} strokeWidth={3} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black uppercase tracking-tight">{plan.name}</h3>
                        <p className="text-sm font-bold text-muted-foreground">{plan.description}</p>
                      </div>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl md:text-6xl font-black">{plan.price}</span>
                      <span className="text-sm font-bold text-muted-foreground uppercase">/{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-6">
                    <p className="text-xs font-black uppercase text-muted-foreground mb-4">What's included:</p>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-success/10 border-2 border-success/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-success" strokeWidth={3} />
                          </div>
                          <span className="text-sm font-bold">{feature.text}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.notIncluded.length > 0 && (
                      <>
                        <p className="text-xs font-black uppercase text-muted-foreground mb-4">Not included:</p>
                        <ul className="space-y-2 mb-6">
                          {plan.notIncluded.map((item, nIdx) => (
                            <li key={nIdx} className="flex items-start gap-3">
                              <div className="w-5 h-5 bg-muted border-2 border-border flex items-center justify-center shrink-0 mt-0.5">
                                <X className="h-3 w-3 text-muted-foreground" strokeWidth={3} />
                              </div>
                              <span className="text-sm font-bold text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {/* CTA */}
                    <Link href={plan.href} className="block">
                      <Button
                        className={`w-full font-black text-base py-6 h-auto ${
                          plan.popular
                            ? "bg-black text-white hover:bg-black/90 border-4 border-black shadow-[4px_4px_0px_0px_hsl(var(--primary))] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                            : "border-4 border-border bg-transparent hover:bg-muted"
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        {plan.cta}
                        {plan.popular && <ArrowRight className="ml-2 h-5 w-5" strokeWidth={3} />}
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enterprise Note */}
          <div className="text-center mt-12 max-w-2xl mx-auto p-6 bg-background border-4 border-border">
            <p className="text-lg font-black uppercase mb-2">Need Custom Features?</p>
            <p className="text-sm font-bold text-muted-foreground mb-4">
              Team and Enterprise plans coming soon with multiple seats, role-based permissions, and dedicated support.
            </p>
            <a href="mailto:hello@nalofinance.com" className="text-primary font-black text-sm hover:underline">
              Contact us for Enterprise pricing →
            </a>
          </div>
        </div>
      </section>

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
              Why Upgrade to Premium?
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              Unlock the full power of Nalo Finance for just ₦10,000/month
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

          <div className="max-w-5xl mx-auto">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-black text-white mb-4">
              <div className="font-black uppercase">Feature</div>
              <div className="font-black uppercase text-center">Free</div>
              <div className="font-black uppercase text-center text-primary">Premium</div>
            </div>

            {/* Table Body */}
            <div className="space-y-4">
              {comparisonFeatures.map((section, sIdx) => (
                <div key={sIdx} className="bg-card border-4 border-border overflow-hidden">
                  <div className="p-4 bg-muted/50 border-b-4 border-border">
                    <h3 className="text-base font-black uppercase">{section.category}</h3>
                  </div>
                  <div className="divide-y-2 divide-border">
                    {section.features.map((feature, fIdx) => (
                      <div key={fIdx} className="grid grid-cols-3 gap-4 p-4 items-center">
                        <div className="font-bold text-sm">{feature.name}</div>
                        <div className="text-sm font-bold text-center text-muted-foreground">
                          {feature.free === "—" ? (
                            <X className="h-4 w-4 mx-auto text-muted-foreground/50" strokeWidth={3} />
                          ) : (
                            feature.free
                          )}
                        </div>
                        <div className="text-sm font-black text-center text-primary">
                          {feature.premium === "✓" ? (
                            <Check className="h-4 w-4 mx-auto text-success" strokeWidth={3} />
                          ) : (
                            feature.premium
                          )}
                        </div>
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
          href: "https://app.nalofinance.com/auth/register",
        }}
        secondaryCta={{
          text: "CONTACT SALES",
          href: "mailto:hello@nalofinance.com",
        }}
        footnote="14-day free trial for Premium. No credit card required."
      />
    </>
  );
}
