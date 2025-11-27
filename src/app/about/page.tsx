import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Users,
  Zap,
  Heart,
  TrendingUp,
  Shield,
  Globe,
  Lightbulb,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Our Mission to Transform Nigerian Finance",
  description:
    "Learn about Nalo Finance's mission to democratize personal finance for Nigerians. Built for Nigerians, by Nigerians. 10,000+ users, ₦1B+ tracked, 500+ Ajo groups.",
  keywords: [
    "about Nalo Finance",
    "Nigerian fintech company",
    "personal finance Nigeria",
    "financial technology Lagos",
    "Nalo Finance team",
    "Nigerian startup",
    "fintech Nigeria",
    "Tanta Innovative",
  ],
  openGraph: {
    title: "About Nalo Finance - Nigeria's Financial OS",
    description:
      "We're building Nigeria's financial operating system. 10,000+ users trust us to manage Ajo groups, track income, budget smarter, and achieve financial freedom.",
    url: "https://nalofinance.com/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Nalo Finance - Nigeria's Financial OS",
    description:
      "We're building Nigeria's financial operating system. 10,000+ users trust us to manage their money.",
  },
  alternates: {
    canonical: "https://nalofinance.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-32 pb-16 md:pt-40 md:pb-24 border-b-4 border-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20 mb-6">
                <Heart className="h-4 w-4 text-primary" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide">
                  Built for Nigerians, by Nigerians
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
                We're Building
                <br />
                <span className="text-primary">Nigeria's Financial OS</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl font-bold text-muted-foreground mb-8">
                Nalo Finance is on a mission to give every Nigerian the tools they need to take control
                of their money, build wealth, and achieve financial freedom.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="https://app.nalofinance.com/register">
                  <Button size="lg" className="w-full sm:w-auto font-black text-base px-8 border-2">
                    START FREE TODAY
                    <ChevronRight className="ml-2 h-5 w-5" strokeWidth={3} />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto font-black text-base px-8 border-2"
                  >
                    GET IN TOUCH
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-background border-2 border-border">
                  <p className="text-2xl sm:text-3xl font-black text-primary">10k+</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Active Users</p>
                </div>
                <div className="p-4 bg-background border-2 border-border">
                  <p className="text-2xl sm:text-3xl font-black text-primary">₦1B+</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Tracked</p>
                </div>
                <div className="p-4 bg-background border-2 border-border">
                  <p className="text-2xl sm:text-3xl font-black text-primary">500+</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Ajo Groups</p>
                </div>
                <div className="p-4 bg-background border-2 border-border">
                  <p className="text-2xl sm:text-3xl font-black text-primary">98%</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right - Abstract Illustration */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Main large square */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-primary border-4 border-black" />
                {/* Overlapping square */}
                <div className="absolute top-16 right-16 w-56 h-56 bg-background border-4 border-black" />
                {/* Small accent squares */}
                <div className="absolute top-8 right-80 w-20 h-20 bg-black" />
                <div className="absolute top-72 right-8 w-16 h-16 bg-primary/30 border-4 border-primary" />
                <div className="absolute top-48 right-72 w-24 h-24 border-4 border-black" />
                {/* Decorative lines */}
                <div className="absolute top-32 right-64 w-32 h-1 bg-black" />
                <div className="absolute top-40 right-56 w-24 h-1 bg-primary" />
                {/* Circle accent */}
                <div className="absolute bottom-8 right-48 w-12 h-12 rounded-full border-4 border-black" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-8">
              Our Story
            </h2>

            <div className="space-y-6 text-base md:text-lg font-bold text-muted-foreground">
              <p className="leading-relaxed">
                Nalo Finance was born from a simple observation: <span className="text-foreground">most Nigerians are working hard but
                struggling to track where their money goes.</span> Salary comes in, expenses happen, and by month-end, you're left
                wondering "Where did it all go?"
              </p>

              <p className="leading-relaxed">
                We watched friends juggle multiple bank accounts, manage Ajo groups via chaotic WhatsApp chats, stress
                about taxes with outdated information, and try to optimize side hustles without any data. <span className="text-foreground">The tools
                that existed were either too complicated, too expensive, or built for Americans—not Nigerians.</span>
              </p>

              <p className="leading-relaxed">
                So we built Nalo Finance. <span className="text-foreground font-black text-primary">A personal finance platform designed specifically for Nigerian
                financial realities.</span> Naira-native. Tax-aware. Ajo-integrated. Hustle-optimized. Built for how Nigerians
                actually manage money.
              </p>

              <p className="leading-relaxed">
                Today, over 10,000 Nigerians use Nalo to track their finances, manage Ajo groups, optimize taxes, and
                grow their wealth. <span className="text-foreground">We're just getting started.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-4 border-primary bg-primary/5">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-6">
                    <Target className="h-6 w-6 text-primary" strokeWidth={3} />
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-4">Our Mission</h3>
                  <p className="text-base font-bold text-muted-foreground leading-relaxed">
                    To empower every Nigerian with the tools, insights, and confidence to take control of their
                    finances and build lasting wealth—regardless of income level or financial literacy.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-4 border-border bg-background">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-muted border-2 border-border flex items-center justify-center mb-6">
                    <Lightbulb className="h-6 w-6 text-foreground" strokeWidth={3} />
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-4">Our Vision</h3>
                  <p className="text-base font-bold text-muted-foreground leading-relaxed">
                    A Nigeria where every person has access to world-class financial tools that help them earn more,
                    save smarter, and achieve their financial goals faster.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              What We Stand For
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground">
              The values that guide everything we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "Nigerian-First",
                description:
                  "Every feature, every calculation, every recommendation is built for Nigerian financial realities. Naira. Nigerian banks. Nigerian taxes. Nigerian culture.",
              },
              {
                icon: Zap,
                title: "Brutally Simple",
                description:
                  "Personal finance is already stressful. We strip away complexity and give you exactly what you need—nothing more, nothing less. No jargon. No fluff.",
              },
              {
                icon: Shield,
                title: "Trust & Privacy",
                description:
                  "Your financial data is sacred. Bank-level encryption, zero data selling, transparent policies. Your money, your data, your control.",
              },
              {
                icon: TrendingUp,
                title: "Obsessed with Impact",
                description:
                  "We're not here to build another pretty app. We measure success by one metric: How much are we improving users' financial lives?",
              },
              {
                icon: Globe,
                title: "Accessible to All",
                description:
                  "Financial tools shouldn't be a luxury. Our Free tier is genuinely useful. Our Premium tier is affordable. Everyone deserves access.",
              },
              {
                icon: Heart,
                title: "Community-Driven",
                description:
                  "We listen obsessively to our users. Feature requests, bug reports, feedback—you shape what we build. This is YOUR platform.",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-2 border-border bg-background">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" strokeWidth={3} />
                    </div>
                    <h3 className="text-lg font-black uppercase mb-2">{value.title}</h3>
                    <p className="text-sm font-bold text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Nigeria Needs This */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-8">
              Why Nigeria Needs Nalo
            </h2>

            <div className="space-y-6">
              {[
                {
                  stat: "67%",
                  fact: "of Nigerians are financially excluded from traditional banking services",
                  impact: "Nalo works with any bank and even supports cash tracking for the unbanked.",
                },
                {
                  stat: "85%",
                  fact: "of Nigerians don't have a monthly budget or financial plan",
                  impact: "Nalo makes budgeting effortless with automated tracking and AI recommendations.",
                },
                {
                  stat: "2.7",
                  fact: "is the average number of income streams per Nigerian (salary + side hustles)",
                  impact: "Nalo's Hustle Optimizer helps you track and maximize multiple income sources.",
                },
                {
                  stat: "₦500k",
                  fact: "average amount Nigerians leave on the table annually due to missed tax deductions",
                  impact: "Nalo's 2026 Tax Center ensures you claim every deduction you're entitled to.",
                },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-muted/30 border-l-4 border-primary">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="shrink-0">
                      <p className="text-5xl font-black text-primary">{item.stat}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-base font-bold">{item.fact}</p>
                      <p className="text-sm font-bold text-success">
                        <span className="font-black">NALO'S IMPACT: </span>
                        {item.impact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Team (Optional - can be expanded) */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6">
              Built by a Team That Gets It
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're Nigerians who've lived the financial struggles firsthand. We've juggled multiple bank accounts,
              stressed about taxes, managed Ajo groups, and hustled on the side. <span className="text-foreground">We're building the
              tool we wish we had 5 years ago.</span>
            </p>

            <p className="text-base font-bold text-muted-foreground">
              Based in Lagos, Nigeria 🇳🇬
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6">
              Join the Financial Revolution
            </h2>
            <p className="text-lg md:text-xl font-bold mb-8 opacity-90">
              Over 10,000 Nigerians are already taking control of their finances with Nalo.
              Start free today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://app.nalofinance.com/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto font-black text-base px-8 border-2 bg-white text-primary hover:bg-white/90"
                >
                  GET STARTED FREE
                  <ChevronRight className="ml-2 h-5 w-5" strokeWidth={3} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto font-black text-base px-8 border-2 border-white text-white hover:bg-white/10"
                >
                  <MessageSquare className="mr-2 h-5 w-5" strokeWidth={3} />
                  CONTACT US
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
