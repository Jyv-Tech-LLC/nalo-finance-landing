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
} from "lucide-react";

export function AjoSpotlight() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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
                dispute resolution, and zero drama.
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
                  "No way to find new groups",
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
                  "Automatic payment tracking & reminders",
                  "Quantifiable trust scores (0-100)",
                  "Dispute resolution with evidence",
                  "Discover & join public groups",
                  "Shareable invite links",
                  "Telegram & WhatsApp alerts",
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
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl font-black text-primary">98%</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">On-time Rate</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-primary">500+</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Active Groups</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-primary">0</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Defaults</p>
                </div>
              </div>
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
