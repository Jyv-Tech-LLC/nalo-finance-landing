import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Calendar,
  TrendingDown,
  Calculator,
  ArrowRight,
  Clock,
  Target,
  CheckCircle,
} from "lucide-react";

export function LoansSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20 mb-6">
                <CreditCard className="h-4 w-4 text-primary" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide">
                  Debt Freedom
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
                Track Loans & Crush Your Debt
              </h2>
              <p className="text-lg md:text-xl font-bold text-muted-foreground">
                Whether it's a car loan, mortgage, or personal loan—track every payment,
                visualize your progress, and become debt-free faster.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                {
                  icon: Calendar,
                  title: "Payment Schedule Tracking",
                  description: "Never miss a payment. See upcoming due dates and get reminders.",
                },
                {
                  icon: TrendingDown,
                  title: "Interest Calculations",
                  description: "Know exactly how much interest you're paying and how to reduce it",
                },
                {
                  icon: Target,
                  title: "Payoff Progress Visualization",
                  description: "Watch your debt shrink with satisfying progress bars and milestones",
                },
                {
                  icon: Calculator,
                  title: "Total Debt Dashboard",
                  description: "See all your loans in one place. Total owed, monthly payments, and payoff dates.",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4 items-start p-4 bg-muted/30 border-l-4 border-primary">
                    <div className="w-10 h-10 bg-primary/10 border-2 border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-primary" strokeWidth={3} />
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
              <Button size="lg" className="font-black text-base px-8 group">
                START TRACKING LOANS
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
              </Button>
            </Link>
          </div>

          {/* Right Column - Visual */}
          <div className="space-y-6">
            {/* Loan Card Example */}
            <div className="bg-card border-4 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-primary" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase">Car Loan</h3>
                    <p className="text-xs font-bold text-muted-foreground">Access Bank • 18% APR</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-muted-foreground uppercase">Remaining</p>
                  <p className="text-xl font-black text-destructive">₦1,200,000</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold text-muted-foreground">Payoff Progress</span>
                  <span className="text-xs font-black text-success">60% Paid</span>
                </div>
                <div className="h-4 bg-muted border-2 border-border">
                  <div className="h-full bg-success w-[60%]" />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-xs font-bold">₦0</span>
                  <span className="text-xs font-bold">₦3,000,000</span>
                </div>
              </div>

              {/* Payment Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 bg-muted/30 border-2 border-border">
                  <p className="text-xs font-bold text-muted-foreground uppercase">Monthly Payment</p>
                  <p className="text-lg font-black">₦85,000</p>
                </div>
                <div className="p-3 bg-muted/30 border-2 border-border">
                  <p className="text-xs font-bold text-muted-foreground uppercase">Next Due</p>
                  <p className="text-lg font-black">Dec 15</p>
                </div>
              </div>

              {/* Payoff Countdown */}
              <div className="p-4 bg-success/10 border-2 border-success">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4 text-success" strokeWidth={3} />
                  <span className="text-xs font-black uppercase text-success">Debt-Free Countdown</span>
                </div>
                <p className="text-2xl font-black text-success">14 Months Left</p>
                <p className="text-xs font-bold text-muted-foreground">Projected payoff: Jan 2027</p>
              </div>
            </div>

            {/* Total Debt Summary */}
            <div className="p-6 bg-muted/30 border-l-4 border-primary">
              <p className="text-xs font-bold text-muted-foreground uppercase mb-4">Total Debt Overview</p>
              <div className="space-y-3">
                {[
                  { name: "Car Loan", amount: "₦1,200,000", icon: CheckCircle, status: "On Track" },
                  { name: "Personal Loan", amount: "₦450,000", icon: CheckCircle, status: "On Track" },
                  { name: "Credit Card", amount: "₦85,000", icon: Clock, status: "Due Soon" },
                ].map((loan, index) => {
                  const Icon = loan.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-3 bg-background border-2 border-border">
                      <div className="flex items-center gap-2">
                        <Icon className={`h-4 w-4 ${loan.status === "On Track" ? "text-success" : "text-warning"}`} strokeWidth={3} />
                        <span className="text-sm font-black">{loan.name}</span>
                      </div>
                      <span className="text-sm font-black">{loan.amount}</span>
                    </div>
                  );
                })}
                <div className="flex items-center justify-between pt-3 border-t-2 border-border">
                  <span className="text-sm font-black uppercase">Total Debt</span>
                  <span className="text-lg font-black text-primary">₦1,735,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
