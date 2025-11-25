import { Users, Calculator, PieChart, Zap, Target, Bot } from "lucide-react";
import { FeatureCard } from "./feature-card";

const features = [
  {
    icon: Users,
    title: "Ajo Groups",
    description: "Digitize your traditional Ajo with trust scores, payment tracking, and complete transparency. No more WhatsApp chaos.",
    href: "/features/ajo-groups",
    accentColor: "success" as const,
  },
  {
    icon: Calculator,
    title: "Tax Center",
    description: "Navigate Nigeria's 2026 tax reform with confidence. Calculate, optimize, and save thousands on your taxes.",
    href: "/features/tax-center",
    accentColor: "primary" as const,
  },
  {
    icon: PieChart,
    title: "Zero-Sum Budgeting",
    description: "Every naira gets a purpose. Track spending, set limits, and stay on top of your financial goals with ease.",
    href: "/features/budgeting",
    accentColor: "success" as const,
  },
  {
    icon: Zap,
    title: "Hustle Optimizer",
    description: "Track multiple income streams, calculate hourly rates, and discover which side hustles pay best.",
    href: "/features/income-streams",
    accentColor: "primary" as const,
  },
  {
    icon: Target,
    title: "Smart Goals",
    description: "Set financial goals, track progress, and get AI-powered insights to help you achieve them faster.",
    href: "/features/smart-goals",
    accentColor: "success" as const,
  },
  {
    icon: Bot,
    title: "Oracle AI Assistant",
    description: "Your personal financial guide. Get instant answers, insights, and recommendations tailored to you.",
    href: "/features/financial-guide",
    accentColor: "primary" as const,
  },
];

export function FeatureGrid() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">
              All Your Money Needs
            </h2>
            <div className="w-1 h-8 bg-primary" />
          </div>
          <p className="text-lg md:text-xl font-bold text-muted-foreground mt-4 max-w-2xl mx-auto">
            From traditional Ajo to modern tax planning, we've got you covered
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
