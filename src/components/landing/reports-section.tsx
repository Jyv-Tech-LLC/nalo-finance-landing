import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Download,
  Calendar,
  Mail,
  ArrowRight,
  FileSpreadsheet,
  Clock,
  TrendingUp,
} from "lucide-react";

export function ReportsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Visual */}
          <div className="space-y-6">
            {/* Report Preview Card */}
            <div className="bg-card border-4 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase">Monthly Report</h3>
                    <p className="text-xs font-bold text-muted-foreground">November 2024</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-10 h-10 bg-primary/10 border-2 border-primary/20 flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                    <Download className="h-4 w-4 text-primary" strokeWidth={3} />
                  </div>
                </div>
              </div>

              {/* Report Summary */}
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-muted/30 border-2 border-border">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-muted-foreground">Total Income</span>
                    <span className="text-lg font-black text-success">₦850,000</span>
                  </div>
                  <div className="h-2 bg-success/20 border border-success/30">
                    <div className="h-full bg-success w-full" />
                  </div>
                </div>

                <div className="p-4 bg-muted/30 border-2 border-border">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-muted-foreground">Total Expenses</span>
                    <span className="text-lg font-black text-destructive">₦620,000</span>
                  </div>
                  <div className="h-2 bg-destructive/20 border border-destructive/30">
                    <div className="h-full bg-destructive w-[73%]" />
                  </div>
                </div>

                <div className="p-4 bg-success/10 border-2 border-success">
                  <div className="flex justify-between">
                    <span className="text-sm font-black text-success uppercase">Net Savings</span>
                    <span className="text-xl font-black text-success">₦230,000</span>
                  </div>
                  <p className="text-xs font-bold text-muted-foreground mt-1">27% savings rate - Great job!</p>
                </div>
              </div>

              {/* Top Categories */}
              <div>
                <p className="text-xs font-black uppercase text-muted-foreground mb-3">Top Spending Categories</p>
                <div className="space-y-2">
                  {[
                    { name: "Rent", amount: "₦200,000", percent: 32 },
                    { name: "Food & Groceries", amount: "₦95,000", percent: 15 },
                    { name: "Transportation", amount: "₦75,000", percent: 12 },
                  ].map((cat) => (
                    <div key={cat.name} className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-xs font-bold">{cat.name}</span>
                          <span className="text-xs font-black">{cat.amount}</span>
                        </div>
                        <div className="h-2 bg-muted border border-border">
                          <div className="h-full bg-primary" style={{ width: `${cat.percent}%` }} />
                        </div>
                      </div>
                      <span className="text-xs font-black w-10">{cat.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Export Options */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-background border-2 border-border flex items-center gap-3">
                <FileText className="h-5 w-5 text-destructive" strokeWidth={3} />
                <div>
                  <p className="text-sm font-black">PDF Export</p>
                  <p className="text-xs font-bold text-muted-foreground">Professional reports</p>
                </div>
              </div>
              <div className="p-4 bg-background border-2 border-border flex items-center gap-3">
                <FileSpreadsheet className="h-5 w-5 text-success" strokeWidth={3} />
                <div>
                  <p className="text-sm font-black">CSV Export</p>
                  <p className="text-xs font-bold text-muted-foreground">For spreadsheets</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20 mb-6">
                <FileText className="h-4 w-4 text-primary" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide">
                  Automated Reports
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
                Professional Financial Reports, Automatically
              </h2>
              <p className="text-lg md:text-xl font-bold text-muted-foreground">
                Get weekly and monthly summaries delivered to your inbox. Export to PDF or CSV
                for tax filing, loan applications, or your own records.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                {
                  icon: Clock,
                  title: "Weekly & Monthly Reports",
                  description: "Automatic summaries generated every week and month. No manual work required.",
                },
                {
                  icon: Download,
                  title: "PDF & CSV Export",
                  description: "Download professional PDFs for presentations or CSV files for spreadsheet analysis",
                },
                {
                  icon: Calendar,
                  title: "Custom Date Ranges",
                  description: "Generate reports for any time period. Perfect for quarterly reviews or tax seasons.",
                },
                {
                  icon: Mail,
                  title: "Email Delivery",
                  description: "Get reports delivered straight to your inbox. Never miss a financial update.",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4 items-start p-4 bg-background border-l-4 border-primary">
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

            {/* Use Cases */}
            <div className="p-4 bg-primary/5 border-l-4 border-primary">
              <p className="text-xs font-black uppercase text-muted-foreground mb-3">Perfect For</p>
              <div className="flex flex-wrap gap-2">
                {["Tax Filing", "Loan Applications", "Budget Reviews", "Accountants", "Personal Records"].map((use) => (
                  <span key={use} className="px-3 py-1 bg-background border-2 border-border text-xs font-black">
                    {use}
                  </span>
                ))}
              </div>
            </div>

            <Link href="https://app.nalofinance.com/register">
              <Button size="lg" variant="outline" className="font-black text-base px-8 border-2 group">
                GET YOUR FIRST REPORT
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
