import Link from "next/link";
import { Check, Star, ArrowRight, Wallet, Zap, Crown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Plan } from "@/lib/pricing";

const tierIcons: Record<string, typeof Wallet> = {
  FREE: Wallet,
  BASIC: Zap,
  PREMIUM: Crown,
  UNLIMITED: Rocket,
};

interface PricingSectionProps {
  plans: Plan[];
}

export function PricingSection({ plans }: PricingSectionProps) {
  // Show only Free and Premium on homepage for simplicity
  const displayPlans = plans.filter(p => p.tier === "FREE" || p.tier === "PREMIUM");
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
          {displayPlans.map((plan, index) => {
            const Icon = tierIcons[plan.tier] || Wallet;
            const price = plan.pricing.ngn.formatted;
            const period = plan.tier === "FREE" ? "forever" : `per ${plan.interval}`;

            return (
              <div
                key={plan.id}
                className={`relative bg-card border-4 ${
                  plan.highlighted ? "border-primary shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" : "border-border"
                } p-8`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-primary border-4 border-background">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary-foreground fill-current" strokeWidth={3} />
                      <span className="text-xs font-black uppercase text-primary-foreground">{plan.badge}</span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 ${plan.highlighted ? "bg-primary" : "bg-muted"} flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`} strokeWidth={3} />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">{plan.name}</h3>
                  </div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl md:text-5xl font-black">{price}</span>
                    <span className="text-sm font-bold text-muted-foreground uppercase">/{period}</span>
                  </div>
                  <p className="text-sm font-bold text-muted-foreground">{plan.description}</p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.slice(0, 8).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-success/10 border-2 border-success/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-success" strokeWidth={3} />
                      </div>
                      <span className="text-sm font-bold">{feature}</span>
                    </li>
                  ))}
                  {plan.features.length > 8 && (
                    <li className="text-sm font-bold text-muted-foreground pl-8">
                      + {plan.features.length - 8} more features
                    </li>
                  )}
                </ul>

                {/* CTA */}
                <Link href={plan.ctaUrl} className="block">
                  <Button
                    size="lg"
                    variant={plan.highlighted ? "default" : "outline"}
                    className={`w-full font-black text-base py-6 h-auto ${
                      plan.highlighted
                        ? "bg-black text-white hover:bg-black/90 border-4 border-black shadow-[4px_4px_0px_0px_hsl(var(--primary))] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                        : "border-4 border-border hover:bg-muted"
                    }`}
                  >
                    {plan.ctaText}
                    {plan.highlighted && <ArrowRight className="ml-2 h-5 w-5" strokeWidth={3} />}
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* View All Plans Link */}
        <div className="text-center mt-10">
          <Link href="/pricing" className="inline-flex items-center gap-2 text-primary font-black text-sm hover:underline uppercase">
            View All Plans & Compare Features
            <ArrowRight className="h-4 w-4" strokeWidth={3} />
          </Link>
        </div>

        {/* Below pricing note */}
        <div className="text-center mt-8">
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
