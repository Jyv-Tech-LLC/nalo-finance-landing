import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingDown, Shield, ArrowRight } from "lucide-react";

export function TaxHighlight() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Visual */}
          <div className="space-y-6">
            {/* Main Card - Tax Savings Calculator */}
            <div className="bg-card border-4 border-primary p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-primary" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase">2026 Tax Calculator</h3>
                  <p className="text-xs font-bold text-muted-foreground uppercase">PIT · CIT · Crypto · WHT</p>
                </div>
              </div>

              {/* Tax Calculation Example */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-muted-foreground">Annual Income</span>
                  <span className="font-black">₦5,000,000</span>
                </div>

                <div className="p-3 bg-success/10 border-l-4 border-success">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    <span className="text-xs font-bold text-success uppercase">Tax-Free Benefit</span>
                  </div>
                  <p className="font-black text-2xl text-success">First ₦800,000 = ₦0 Tax</p>
                </div>

                <div className="border-t-2 border-border pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-muted-foreground uppercase">Your Tax</span>
                    <span className="text-2xl font-black text-primary">₦602,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-muted-foreground uppercase">Effective Rate</span>
                    <span className="font-black">12.0%</span>
                  </div>
                </div>

                <div className="p-3 bg-primary/5 border-2 border-primary/30">
                  <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Potential Savings</p>
                  <p className="text-xl font-black text-primary">Save up to ₦150,000/year</p>
                  <p className="text-xs font-bold text-muted-foreground mt-1">With rent relief & deductions</p>
                </div>
              </div>
            </div>

            {/* Quick Benefits */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-muted/50 border-2 border-border text-center">
                <p className="text-2xl font-black text-primary">0%</p>
                <p className="text-xs font-bold text-muted-foreground uppercase mt-1">First ₦800k</p>
              </div>
              <div className="p-4 bg-muted/50 border-2 border-border text-center">
                <p className="text-2xl font-black text-primary">₦500k</p>
                <p className="text-xs font-bold text-muted-foreground uppercase mt-1">Max Rent Relief</p>
              </div>
              <div className="p-4 bg-muted/50 border-2 border-border text-center">
                <p className="text-2xl font-black text-primary">4</p>
                <p className="text-xs font-bold text-muted-foreground uppercase mt-1">Calculators</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20 mb-6">
                <TrendingDown className="h-4 w-4 text-primary" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide">
                  Nigeria's 2026 Tax Reform
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
                Calculate Your Taxes in Seconds
              </h2>
              <p className="text-lg md:text-xl font-bold text-muted-foreground">
                Navigate the 2026 tax reform with confidence. Know exactly what you owe and how to pay less, legally.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {[
                {
                  title: "4 Tax Calculators",
                  description: "PIT, CIT, Cryptocurrency, and Withholding Tax - all in one place",
                },
                {
                  title: "2026 Reform Ready",
                  description: "Updated with latest rates, reliefs, and exemptions",
                },
                {
                  title: "Tax Optimization",
                  description: "AI-powered recommendations to legally reduce your tax burden",
                },
                {
                  title: "Export Reports",
                  description: "Generate professional tax reports for filing",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-primary/10 border-2 border-primary/20 flex items-center justify-center shrink-0">
                    <span className="font-black text-primary">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-black uppercase text-sm mb-1">{benefit.title}</h3>
                    <p className="text-sm font-bold text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/features/tax-center">
              <Button size="lg" className="font-black text-base px-8 group">
                EXPLORE TAX CENTER
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
