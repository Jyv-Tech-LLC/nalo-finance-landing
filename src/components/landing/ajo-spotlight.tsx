import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Users,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Search,
  Link2,
  Gavel,
  Bell,
  Send,
  Globe,
  X,
  Check,
  Sparkles,
} from "lucide-react";

export function AjoSpotlight() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-success/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-success/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success text-success-foreground">
              <Sparkles className="h-4 w-4" strokeWidth={3} />
              <span className="text-xs font-black uppercase tracking-wide">
                Most Popular Feature
              </span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
                Your Ajo Group Deserves
                <span className="text-success"> Better</span>
              </h2>
              <p className="text-lg md:text-xl font-bold text-muted-foreground">
                Bring the traditional Ajo into the digital age with trust scores, transparent tracking,
                dispute resolution, and zero drama.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {[
                {
                  icon: Shield,
                  title: "Trust Scores (0-100)",
                  description: "Every member gets a reliability score based on payment history",
                },
                {
                  icon: Search,
                  title: "Public Group Discovery",
                  description: "Find and join public Ajo groups in your area or interest category",
                },
                {
                  icon: Gavel,
                  title: "Dispute Resolution",
                  description: "Built-in system with evidence uploads and coordinator mediation",
                },
                {
                  icon: Bell,
                  title: "Multi-Channel Notifications",
                  description: "Get alerts via Email, Telegram, WhatsApp, and in-app",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4 items-start p-4 bg-card border-2 border-border hover:border-success transition-colors group">
                    <div className="w-12 h-12 bg-success/10 border-2 border-success flex items-center justify-center shrink-0 group-hover:bg-success group-hover:text-success-foreground transition-colors">
                      <Icon className="h-6 w-6 text-success group-hover:text-success-foreground" strokeWidth={2.5} />
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
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/features/ajo-groups">
                <Button size="lg" className="font-black text-base px-8 group bg-success hover:bg-success/90 text-success-foreground">
                  EXPLORE AJO GROUPS
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                </Button>
              </Link>
              <Link href="https://app.nalofinance.com/register">
                <Button size="lg" variant="outline" className="font-black text-base px-8 border-2">
                  START YOUR GROUP
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Visual Comparison */}
          <div className="space-y-4">
            {/* Before/After Comparison */}
            <div className="grid grid-cols-1 gap-4">
              {/* Before Card - Traditional Ajo */}
              <div className="p-6 bg-card border-2 border-destructive/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-destructive/10 rounded-bl-full" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-destructive/10 border-2 border-destructive/30 flex items-center justify-center">
                    <X className="h-5 w-5 text-destructive" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase text-destructive">Traditional Ajo</p>
                    <p className="text-xs font-bold text-muted-foreground">The old way</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {[
                    "WhatsApp group confusion",
                    "Manual tracking in notebooks",
                    "Trust based on rumors",
                    "Disputes with no records",
                    "No way to find new groups",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 p-2 bg-destructive/5 border-l-2 border-destructive/30">
                      <X className="h-4 w-4 text-destructive shrink-0" strokeWidth={3} />
                      <span className="text-sm font-bold text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After Card - Digital Ajo */}
              <div className="p-6 bg-card border-2 border-success relative overflow-hidden shadow-lg shadow-success/10">
                <div className="absolute top-0 right-0 w-20 h-20 bg-success/10 rounded-bl-full" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-success flex items-center justify-center">
                    <Check className="h-5 w-5 text-success-foreground" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase text-success">Nalo Ajo Groups</p>
                    <p className="text-xs font-bold text-muted-foreground">The smart way</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {[
                    "Organized dashboard for everyone",
                    "Automatic payment tracking & reminders",
                    "Quantifiable trust scores (0-100)",
                    "Dispute resolution with evidence",
                    "Discover & join public groups",
                    "Shareable invite links",
                    "Telegram & WhatsApp alerts",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 p-2 bg-success/5 border-l-2 border-success">
                      <Check className="h-4 w-4 text-success shrink-0" strokeWidth={3} />
                      <span className="text-sm font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "98%", label: "On-Time Rate", color: "text-success" },
                { value: "500+", label: "Active Groups", color: "text-primary" },
                { value: "₦0", label: "Lost to Defaults", color: "text-success" },
              ].map((stat, index) => (
                <div key={index} className="p-4 bg-card border-2 border-border text-center hover:border-primary transition-colors">
                  <p className={`text-2xl md:text-3xl font-black ${stat.color}`}>{stat.value}</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Advanced Features Grid */}
        <div className="border-t-2 border-border pt-12">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-black uppercase mb-2">Power Features</h3>
            <p className="text-sm font-bold text-muted-foreground">Everything you need to run professional Ajo groups</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Link2,
                title: "Shareable Links",
                description: "Generate secure 8-character invite codes with expiration dates",
              },
              {
                icon: Globe,
                title: "Public Discovery",
                description: "Search groups by amount, frequency, and available slots",
              },
              {
                icon: Send,
                title: "Telegram Bot",
                description: "Instant notifications for payments, collections, and disputes",
              },
              {
                icon: TrendingUp,
                title: "Analytics Dashboard",
                description: "Track compliance rates, group health, and member performance",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="p-4 bg-background border-2 border-border hover:border-success transition-colors">
                  <div className="w-10 h-10 bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-3">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={3} />
                  </div>
                  <h4 className="font-black uppercase text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs font-bold text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Notification Channels */}
          <div className="mt-8 p-4 bg-primary/5 border-l-4 border-primary">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="font-black uppercase text-sm mb-1">11 Notification Types Across 4 Channels</p>
                <p className="text-xs font-bold text-muted-foreground">
                  Payment reminders, collection alerts, dispute updates, weekly summaries, and more
                </p>
              </div>
              <div className="flex gap-2">
                {["Email", "Telegram", "WhatsApp", "In-App"].map((channel) => (
                  <span key={channel} className="px-3 py-1 bg-background border-2 border-border text-xs font-black">
                    {channel}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
