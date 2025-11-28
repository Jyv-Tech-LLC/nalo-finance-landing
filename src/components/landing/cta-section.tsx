import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, LucideIcon, Rocket, Zap } from "lucide-react";

interface CtaSectionProps {
  variant?: "primary" | "secondary";
  title: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  badge?: string;
}

export function CtaSection({
  variant = "primary",
  title,
  description,
  primaryCta,
  secondaryCta,
  badge,
}: CtaSectionProps) {
  const isPrimary = variant === "primary";

  return (
    <section className={`py-16 md:py-24 ${isPrimary ? "bg-primary" : "bg-muted/30"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl mx-auto text-center space-y-8 ${isPrimary ? "text-primary-foreground" : ""}`}>
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 border-2 border-background/20">
              <Sparkles className={`h-4 w-4 ${isPrimary ? "text-primary-foreground" : "text-primary"}`} strokeWidth={3} />
              <span className={`text-xs font-black uppercase tracking-wide ${isPrimary ? "text-primary-foreground" : "text-primary"}`}>
                {badge}
              </span>
            </div>
          )}

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className={`text-lg md:text-xl font-bold max-w-2xl mx-auto ${
            isPrimary ? "text-primary-foreground/90" : "text-muted-foreground"
          }`}>
            {description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href={primaryCta.href}>
              <Button
                size="lg"
                variant={isPrimary ? "outline" : "default"}
                className={`font-black text-base px-8 group ${
                  isPrimary
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0"
                    : ""
                }`}
              >
                {primaryCta.text}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
              </Button>
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <Button
                  size="lg"
                  variant="ghost"
                  className={`font-black text-base px-8 ${
                    isPrimary
                      ? "text-primary-foreground hover:bg-primary-foreground/10"
                      : "hover:bg-primary/10"
                  }`}
                >
                  {secondaryCta.text}
                </Button>
              </Link>
            )}
          </div>

          {/* Trust Badge */}
          {isPrimary && (
            <p className="text-sm font-bold text-primary-foreground/80 pt-4">
              Join 10,000+ Nigerians already using Nalo Finance
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

// Feature Page CTA Component - Reusable across all feature pages
interface FeatureCtaProps {
  icon: LucideIcon;
  title: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  footnote?: string;
}

export function FeatureCta({
  icon: Icon,
  title,
  description,
  primaryCta,
  secondaryCta,
  footnote,
}: FeatureCtaProps) {
  return (
    <section className="relative py-20 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left geometric shape */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-black/10 rotate-12" />
        <div className="absolute -top-10 -left-10 w-48 h-48 border-4 border-black/20 rotate-12" />

        {/* Top right geometric shape */}
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-black/10 -rotate-12" />
        <div className="absolute top-8 right-8 w-32 h-32 border-4 border-black/15" />

        {/* Bottom left */}
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-black/10 rotate-45" />
        <div className="absolute bottom-20 left-20 w-24 h-24 border-4 border-black/15 rotate-12" />

        {/* Bottom right geometric shape */}
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-black/10 -rotate-6" />
        <div className="absolute bottom-10 right-32 w-20 h-20 border-4 border-black/20 rotate-45" />

        {/* Center decorative dots */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-black/20" />
        <div className="absolute top-1/3 left-20 w-3 h-3 bg-black/15" />
        <div className="absolute bottom-1/4 right-10 w-4 h-4 bg-black/20" />
        <div className="absolute bottom-1/3 right-24 w-3 h-3 bg-black/15" />

        {/* Horizontal lines */}
        <div className="absolute top-20 left-0 right-0 h-1 bg-black/5" />
        <div className="absolute bottom-20 left-0 right-0 h-1 bg-black/5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Icon */}
          <div className="w-20 h-20 bg-black text-primary flex items-center justify-center mx-auto mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]">
            <Icon className="h-10 w-10" strokeWidth={3} />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black uppercase tracking-tight mb-6">
            {title}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl font-bold mb-10 opacity-90 max-w-2xl mx-auto">
            {description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href={primaryCta.href}>
              <Button
                className="w-full sm:w-auto font-black text-lg px-10 py-7 h-auto bg-black text-white hover:bg-black/90 border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.4)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.4)] hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                {primaryCta.text}
                <ArrowRight className="ml-3 h-6 w-6" strokeWidth={3} />
              </Button>
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto font-black text-lg px-10 py-7 h-auto border-4 border-black text-black bg-transparent hover:bg-black/10"
                >
                  {secondaryCta.text}
                </Button>
              </Link>
            )}
          </div>

          {/* Footnote */}
          {footnote && (
            <p className="text-sm md:text-base font-bold mt-8 opacity-80">
              {footnote}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

// Pre-configured CTA sections
export function FinalCta() {
  return (
    <FeatureCta
      icon={Rocket}
      title="Ready to Take Control of Your Finances?"
      description="Join 10,000+ Nigerians managing their money smarter. No credit card required, cancel anytime."
      primaryCta={{
        text: "GET STARTED NOW",
        href: "https://app.nalofinance.com/register",
      }}
      secondaryCta={{
        text: "SEE PRICING",
        href: "/pricing",
      }}
      footnote="Free plan available. No credit card required."
    />
  );
}

export function MidPageCta() {
  return (
    <FeatureCta
      icon={Zap}
      title="Stop Guessing. Start Knowing."
      description="Get real-time insights into your finances with AI-powered recommendations and automated tracking."
      primaryCta={{
        text: "GET STARTED",
        href: "https://app.nalofinance.com/register",
      }}
      secondaryCta={{
        text: "HOW IT WORKS",
        href: "#how-it-works",
      }}
      footnote="Join 10,000+ Nigerians already using Nalo Finance."
    />
  );
}
