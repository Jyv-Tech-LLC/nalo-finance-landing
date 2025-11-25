import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Shield, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

export function AjoSpotlight() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 border-2 border-success/20">
              <Users className="h-4 w-4 text-success" strokeWidth={3} />
              <span className="text-xs font-black uppercase tracking-wide text-success">
                Top Feature
              </span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
                Your Ajo Group Deserves Better Than WhatsApp
              </h2>
              <p className="text-lg md:text-xl font-bold text-muted-foreground">
                Bring the traditional Ajo into the digital age with trust scores, transparent tracking,
                and zero drama.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                {
                  icon: Shield,
                  title: "Trust Scores (0-100)",
                  description: "Every member gets a reliability score based on payment history",
                },
                {
                  icon: CheckCircle,
                  title: "Transparent Tracking",
                  description: "See who paid, who's late, and when collections happen",
                },
                {
                  icon: TrendingUp,
                  title: "Risk Assessment",
                  description: "AI-powered group health monitoring and recommendations",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4 items-start p-4 bg-background border-l-4 border-success">
                    <div className="w-10 h-10 bg-success/10 border-2 border-success/20 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-success" strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="font-black uppercase text-sm mb-1">{feature.title}</h3>
                      <p className="text-sm font-bold text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <Link href="/features/ajo-groups">
              <Button size="lg" variant="outline" className="font-black text-base px-8 border-2 group">
                LEARN MORE ABOUT AJO GROUPS
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
              </Button>
            </Link>
          </div>

          {/* Right Column - Visual Comparison */}
          <div className="space-y-6">
            {/* Before Card - Traditional Ajo */}
            <div className="p-6 bg-destructive/5 border-2 border-destructive/30">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-destructive" />
                <p className="text-sm font-black uppercase text-destructive">Traditional Ajo</p>
              </div>
              <ul className="space-y-3">
                {[
                  "WhatsApp group confusion",
                  "Manual tracking in notebooks",
                  "Trust based on rumors",
                  "Disputes with no records",
                  "Late payments, no accountability",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-destructive font-black">✗</span>
                    <span className="text-sm font-bold text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After Card - Digital Ajo */}
            <div className="p-6 bg-success/5 border-2 border-success">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-success" />
                <p className="text-sm font-black uppercase text-success">Nalo Ajo Groups</p>
              </div>
              <ul className="space-y-3">
                {[
                  "Organized dashboard for everyone",
                  "Automatic payment tracking",
                  "Quantifiable trust scores (0-100)",
                  "Receipt uploads & proof",
                  "On-time payment notifications",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-success font-black">✓</span>
                    <span className="text-sm font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="p-6 bg-primary/5 border-l-4 border-primary">
              <p className="text-sm font-bold text-muted-foreground uppercase mb-3">Success Metrics</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-black text-primary">98%</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">On-time Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-primary">500+</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Active Groups</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
