import Link from "next/link";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "₦0",
    period: "forever",
    description: "Perfect for getting started with personal finance management",
    features: [
      "5 accounts",
      "Basic budgeting",
      "2 Ajo groups",
      "Tax calculator (all 4)",
      "3 income streams",
      "Goal tracking",
      "Transaction tracking",
      "Mobile responsive",
    ],
    cta: "Get Started Free",
    href: "https://app.nalofinance.com/auth/register",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "₦10,000",
    period: "per month",
    description: "For serious financial enthusiasts and power users",
    features: [
      "Unlimited accounts",
      "Advanced budgeting",
      "Unlimited Ajo groups",
      "AI tax optimization",
      "Unlimited income streams",
      "Priority support",
      "Advanced reports (PDF/CSV)",
      "Receipt OCR scanning",
      "Custom categories",
      "Early access to new features",
    ],
    cta: "Start Premium Trial",
    href: "https://app.nalofinance.com/auth/register?plan=premium",
    highlighted: true,
  },
];

export function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card border-4 ${
                plan.highlighted ? "border-primary" : "border-border"
              } p-8 ${plan.highlighted ? "shadow-2xl scale-105" : ""}`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-primary border-4 border-background">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary-foreground fill-current" strokeWidth={3} />
                    <span className="text-xs font-black uppercase text-primary-foreground">Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl md:text-5xl font-black">{plan.price}</span>
                  <span className="text-sm font-bold text-muted-foreground uppercase">/{plan.period}</span>
                </div>
                <p className="text-sm font-bold text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-success/10 border-2 border-success/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-success" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link href={plan.href} className="block">
                <Button
                  size="lg"
                  variant={plan.highlighted ? "default" : "outline"}
                  className={`w-full font-black text-base ${plan.highlighted ? "" : "border-2"}`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Below pricing note */}
        <div className="text-center mt-12">
          <p className="text-sm font-bold text-muted-foreground mb-2">
            All plans include bank-level security and data encryption
          </p>
          <p className="text-xs font-bold text-muted-foreground">
            Need custom features for your business?{" "}
            <a href="mailto:hello@nalofinance.com" className="text-primary hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
