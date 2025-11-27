import { UserPlus, Settings, TrendingUp, Target } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Sign Up Free",
    description: "Create your account in 60 seconds. No credit card required, start managing your finances immediately.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Connect Your Finances",
    description: "Add accounts, set up budgets, create Ajo groups, or calculate taxes. Customize for your needs.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Track & Optimize",
    description: "Get AI-powered insights on your spending, saving, and earning. See what's working and what's not.",
  },
  {
    number: "04",
    icon: Target,
    title: "Achieve Your Goals",
    description: "Hit your financial targets faster with personalized recommendations and automated tracking.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes, achieve financial clarity for life
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-1 bg-primary/20 -translate-x-1/2" />
                )}

                <div className="relative bg-background border-2 border-border p-6 space-y-4 hover:border-primary transition-colors h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary border-4 border-background flex items-center justify-center">
                    <span className="text-lg font-black text-primary-foreground">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary" strokeWidth={3} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight mb-2">{step.title}</h3>
                    <p className="text-sm font-bold text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-sm font-bold text-muted-foreground uppercase mb-4">
            Join 10,000+ Nigerians taking control of their finances
          </p>
          <a
            href="https://app.nalofinance.com/register"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase text-base transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </section>
  );
}
