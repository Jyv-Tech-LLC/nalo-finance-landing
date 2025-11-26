"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { type Plan } from "@/lib/pricing";
import {
  Check,
  Star,
  ArrowRight,
  X,
  Wallet,
  Zap,
  Crown,
  Rocket,
} from "lucide-react";

interface PricingCardsProps {
  plans: Plan[];
  currencies: { code: string; symbol: string; name: string }[];
}

const tierIcons: Record<string, typeof Wallet> = {
  FREE: Wallet,
  BASIC: Zap,
  PREMIUM: Crown,
  UNLIMITED: Rocket,
};

const tierColors: Record<string, { bg: string; text: string; border: string }> = {
  FREE: { bg: "bg-muted", text: "text-foreground", border: "border-border" },
  BASIC: { bg: "bg-blue-500", text: "text-white", border: "border-blue-500" },
  PREMIUM: { bg: "bg-primary", text: "text-primary-foreground", border: "border-primary" },
  UNLIMITED: { bg: "bg-purple-600", text: "text-white", border: "border-purple-600" },
};

export function PricingCards({ plans, currencies }: PricingCardsProps) {
  const [currency, setCurrency] = useState<"USD" | "NGN">("NGN");

  const getPrice = (plan: Plan) => {
    if (currency === "USD") {
      return plan.pricing.usd.formatted;
    }
    return plan.pricing.ngn.formatted;
  };

  const getPeriod = (plan: Plan) => {
    if (plan.tier === "FREE") {
      return "forever";
    }
    return `per ${plan.interval}`;
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Currency Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 p-1 bg-card border-4 border-border">
            {currencies.map((curr) => (
              <button
                key={curr.code}
                onClick={() => setCurrency(curr.code as "USD" | "NGN")}
                className={`px-6 py-2 font-black uppercase text-sm transition-all ${
                  currency === curr.code
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {curr.symbol} {curr.code}
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const Icon = tierIcons[plan.tier] || Wallet;
            const colors = tierColors[plan.tier] || tierColors.FREE;

            return (
              <div
                key={plan.id}
                className={`relative bg-card border-4 ${
                  plan.highlighted
                    ? "border-primary shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] lg:-mt-4 lg:mb-4"
                    : "border-border"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-primary-foreground fill-current" strokeWidth={3} />
                      <span className="text-xs font-black uppercase text-primary-foreground">
                        {plan.badge}
                      </span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div
                  className={`p-5 ${
                    plan.highlighted ? "bg-primary/5" : "bg-muted/30"
                  } border-b-4 ${plan.highlighted ? "border-primary" : "border-border"}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-12 h-12 ${colors.bg} flex items-center justify-center`}
                    >
                      <Icon className={`h-6 w-6 ${colors.text}`} strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase tracking-tight">
                        {plan.name}
                      </h3>
                      <p className="text-xs font-bold text-muted-foreground line-clamp-1">
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-black">
                      {getPrice(plan)}
                    </span>
                    <span className="text-xs font-bold text-muted-foreground uppercase">
                      /{getPeriod(plan)}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="p-5">
                  <p className="text-xs font-black uppercase text-muted-foreground mb-3">
                    What's included:
                  </p>
                  <ul className="space-y-2 mb-5">
                    {plan.features.slice(0, 6).map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-success/10 border border-success/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-2.5 w-2.5 text-success" strokeWidth={3} />
                        </div>
                        <span className="text-xs font-bold">{feature}</span>
                      </li>
                    ))}
                    {plan.features.length > 6 && (
                      <li className="text-xs font-bold text-muted-foreground">
                        + {plan.features.length - 6} more features
                      </li>
                    )}
                  </ul>

                  {/* Limits */}
                  <div className="space-y-1 mb-5 p-3 bg-muted/50 border-2 border-border">
                    <div className="flex justify-between text-xs">
                      <span className="font-bold text-muted-foreground">AI Queries:</span>
                      <span className="font-black">{plan.limits.aiQueries.label}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="font-bold text-muted-foreground">Accounts:</span>
                      <span className="font-black">{plan.limits.accounts.label}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="font-bold text-muted-foreground">Storage:</span>
                      <span className="font-black">{plan.limits.storage.label}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href={plan.ctaUrl} className="block">
                    <Button
                      className={`w-full font-black text-sm py-5 h-auto ${
                        plan.highlighted
                          ? "bg-black text-white hover:bg-black/90 border-4 border-black shadow-[4px_4px_0px_0px_hsl(var(--primary))] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                          : "border-4 border-border bg-transparent hover:bg-muted"
                      }`}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      {plan.ctaText}
                      {plan.highlighted && (
                        <ArrowRight className="ml-2 h-4 w-4" strokeWidth={3} />
                      )}
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
            Team and Enterprise plans coming soon with multiple seats, role-based
            permissions, and dedicated support.
          </p>
          <a
            href="mailto:hello@nalofinance.com"
            className="text-primary font-black text-sm hover:underline"
          >
            Contact us for Enterprise pricing →
          </a>
        </div>
      </div>
    </section>
  );
}
