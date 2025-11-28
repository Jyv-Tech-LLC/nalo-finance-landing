import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Heart,
  TrendingUp,
  PiggyBank,
  Wallet,
  ArrowRight,
  Activity,
  BarChart3,
  Target,
} from "lucide-react";

export function FinancialHealthSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Visual */}
          <div className="space-y-6">
            {/* Health Score Card */}
            <div className="bg-card border-4 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-success/10 border-2 border-success/20 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-success" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase">Financial Health</h3>
                    <p className="text-xs font-bold text-muted-foreground uppercase">8 Components Analyzed</p>
                  </div>
                </div>
              </div>

              {/* Score Gauge */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full border-8 border-muted flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-5xl font-black text-success">78</p>
                      <p className="text-xs font-black uppercase text-muted-foreground">out of 100</p>
                    </div>
                  </div>
                  {/* Score indicator arc - simplified visual */}
                  <div className="absolute inset-0 rounded-full border-8 border-success border-r-transparent border-b-transparent rotate-[-45deg]" />
                </div>
              </div>

              {/* Health Label */}
              <div className="text-center mb-6">
                <span className="px-4 py-2 bg-success/10 border-2 border-success text-success font-black uppercase text-sm">
                  Good Health
                </span>
              </div>

              {/* Component Breakdown */}
              <div className="space-y-3">
                {[
                  { name: "Savings Rate", score: 85, color: "bg-success" },
                  { name: "Debt Ratio", score: 72, color: "bg-success" },
                  { name: "Budget Adherence", score: 68, color: "bg-warning" },
                  { name: "Emergency Fund", score: 45, color: "bg-destructive" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <span className="text-xs font-bold w-32 truncate">{item.name}</span>
                    <div className="flex-1 h-3 bg-muted border border-border">
                      <div
                        className={`h-full ${item.color}`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                    <span className="text-xs font-black w-8">{item.score}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-background border-2 border-border">
                <Activity className="h-5 w-5 text-primary mb-2" strokeWidth={3} />
                <p className="text-2xl font-black text-primary">₦2.4M</p>
                <p className="text-xs font-bold text-muted-foreground uppercase">Net Worth</p>
              </div>
              <div className="p-4 bg-background border-2 border-border">
                <TrendingUp className="h-5 w-5 text-success mb-2" strokeWidth={3} />
                <p className="text-2xl font-black text-success">+12%</p>
                <p className="text-xs font-bold text-muted-foreground uppercase">This Month</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 border-2 border-success/20 mb-6">
                <Activity className="h-4 w-4 text-success" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide text-success">
                  Know Where You Stand
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
                Your Financial Health Score (0-100)
              </h2>
              <p className="text-lg md:text-xl font-bold text-muted-foreground">
                Get a comprehensive view of your financial wellness. Our AI analyzes 8 key
                components to give you a single score that tells you exactly where you stand.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                {
                  icon: BarChart3,
                  title: "8-Component Analysis",
                  description: "Savings rate, debt ratio, budget adherence, emergency fund, income stability, and more",
                },
                {
                  icon: PiggyBank,
                  title: "Net Worth Tracking",
                  description: "Track your total assets minus liabilities. Watch your wealth grow over time.",
                },
                {
                  icon: Wallet,
                  title: "Safe to Spend Calculator",
                  description: "Know exactly how much you can spend daily without blowing your budget",
                },
                {
                  icon: Target,
                  title: "Personalized Recommendations",
                  description: "AI-powered tips to improve your weakest financial areas",
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

            <Link href="https://app.nalofinance.com/register">
              <Button size="lg" variant="outline" className="font-black text-base px-8 border-2 group">
                CHECK YOUR SCORE
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
