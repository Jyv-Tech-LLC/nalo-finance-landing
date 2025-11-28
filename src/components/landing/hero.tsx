import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Shield, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-16 md:pt-28 md:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20">
              <div className="w-2 h-2 bg-primary animate-pulse" />
              <span className="text-xs font-black uppercase tracking-wide">
                #1 Personal Finance App for Nigerians
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none">
              Your Ajo,
              <br />
              <span className="text-primary">Digitized</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-muted-foreground max-w-xl">
              Manage Ajo groups with trust scores. Master your taxes. Optimize your hustles.
              All in one powerful platform.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-success/10 border-2 border-success/20 flex items-center justify-center">
                  <Users className="h-4 w-4 text-success" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-lg font-black">10,000+</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Users</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                  <Shield className="h-4 w-4 text-primary" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-lg font-black">500+</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Ajo Groups</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-success/10 border-2 border-success/20 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-success" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-lg font-black">₦2M+</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Tax Saved</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="https://app.nalofinance.com/register" className="flex-1 sm:flex-initial">
                <Button size="lg" className="w-full sm:w-auto font-black text-base px-8 group">
                  GET STARTED
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                </Button>
              </Link>

              <Link href="#how-it-works" className="flex-1 sm:flex-initial">
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-black text-base px-8 border-2">
                  HOW IT WORKS
                </Button>
              </Link>
            </div>

            {/* Below CTA Text */}
            <p className="text-sm font-bold text-muted-foreground">
              Free forever. No credit card required. Start in 60 seconds.
            </p>
          </div>

          {/* Right Column - Hero Image/Demo */}
          <div className="relative lg:block">
            {/* Placeholder for hero image/screenshot */}
            <div className="relative scale-95 md:scale-100 origin-top">
              {/* Main Card - Ajo Group Demo */}
              <div className="bg-card border-4 border-border p-6 shadow-2xl">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-black uppercase">Family Savings</h3>
                    <p className="text-xs font-bold text-muted-foreground uppercase mt-1">
                      8 Members · ₦50,000/month
                    </p>
                  </div>
                  <div className="px-3 py-1 bg-success/10 border-2 border-success/20">
                    <p className="text-xs font-black uppercase text-success">Active</p>
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-muted-foreground uppercase">Cycle Progress</span>
                    <span className="font-black">Cycle 5 of 8</span>
                  </div>
                  <div className="h-3 bg-muted border-2 border-border">
                    <div className="h-full bg-primary w-[62.5%]" />
                  </div>
                </div>

                {/* Trust Score */}
                <div className="p-4 bg-success/5 border-l-4 border-success">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase">Avg Trust Score</p>
                      <p className="text-3xl font-black text-success mt-1">8.9/10</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-success uppercase mb-1">Excellent</p>
                      <p className="text-xs font-bold text-muted-foreground">100% On-Time</p>
                    </div>
                  </div>
                </div>

                {/* Next Collection */}
                <div className="mt-6 p-4 border-2 border-primary/30 bg-primary/5">
                  <p className="text-xs font-bold text-muted-foreground uppercase mb-2">Next Collection</p>
                  <div className="flex items-center justify-between">
                    <p className="font-black">Chiamaka O.</p>
                    <p className="text-lg font-black text-primary">₦400,000</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-primary border-4 border-background shadow-xl">
                <p className="text-sm font-black uppercase whitespace-nowrap text-primary-foreground">100% Transparent</p>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-success border-4 border-background shadow-xl">
                <p className="text-sm font-black uppercase text-success-foreground whitespace-nowrap">Trust Scores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
