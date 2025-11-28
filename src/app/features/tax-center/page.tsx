import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FeatureCta } from "@/components/landing/cta-section";
import {
  Calculator,
  TrendingDown,
  Shield,
  Users,
  Building,
  Bitcoin,
  Receipt,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Calendar,
  FileText,
  Lightbulb,
  Target,
  Sparkles,
  Info,
  HelpCircle,
} from "lucide-react";

const calculators = [
  {
    icon: Users,
    name: "Personal Income Tax (PIT)",
    description: "For salary earners, freelancers, remote workers, and self-employed",
    color: "primary",
    features: [
      "First ₦800,000 completely tax-free (0%)",
      "Progressive rates: 15%, 18%, 21%, 23%, 25%",
      "Rent Relief: 20% of rent paid (max ₦500k)",
      "No minimum tax requirement",
      "Worldwide income for residents",
      "Double taxation relief available",
    ],
    useCase: "Calculate your 2026 income tax with the new simplified progressive rates",
  },
  {
    icon: Building,
    name: "Corporate Income Tax (CIT)",
    description: "For businesses, companies, SMEs, and corporate entities",
    color: "success",
    features: [
      "Small companies 0% (≤₦100M turnover)",
      "Fixed assets must be ≤₦250M",
      "All others pay flat 30% rate",
      "Development Levy 4% (replaces TET)",
      "15% minimum ETR for large MNEs",
      "Startup incentives available",
    ],
    useCase: "Calculate corporate tax using the new two-tier structure (0% or 30%)",
  },
  {
    icon: Bitcoin,
    name: "Cryptocurrency Tax",
    description: "For crypto traders, miners, stakers, and DeFi participants",
    color: "warning",
    features: [
      "Progressive PIT rates (15-25%), not flat rate",
      "First ₦800k gains are tax-free",
      "Mining & staking taxed as income",
      "FIFO/LIFO cost basis methods",
      "7.5% VAT on exchange fees only",
      "Losses deductible from gains",
    ],
    useCase: "Calculate tax on crypto trading, mining, staking, and DeFi activities",
  },
  {
    icon: Receipt,
    name: "Withholding Tax (WHT)",
    description: "For contractors, vendors, freelancers, and service providers",
    color: "destructive",
    features: [
      "Dividends & Interest: 10%",
      "Royalties: 10% (corp), 5% (individual)",
      "Professional fees: 5% (resident), 10% (non-resident)",
      "Directors' fees: 15-20%",
      "Rent & Lease: 10%",
      "WHT credits offset income tax",
    ],
    useCase: "Calculate and track withholding tax on payments received or made",
  },
];

const keyChanges2026 = [
  {
    title: "Tax-Free Threshold Quadrupled",
    before: "CRA: ₦200k + 20% of income",
    after: "First ₦800,000 income is 0% tax",
    impact: "Minimum wage earners (₦840k/year) pay almost no tax",
    savings: "Up to ₦150,000/year",
  },
  {
    title: "Rent Relief Replaces CRA",
    before: "Complex CRA formula with calculations",
    after: "Simple: 20% of rent paid (max ₦500k)",
    impact: "Only rent-payers benefit; must show receipts",
    savings: "Up to ₦100,000/year",
  },
  {
    title: "Progressive Tax Simplified",
    before: "7 bands from 7% to 24%",
    after: "6 bands from 0% to 25% (higher threshold)",
    impact: "Lower effective tax rates for most earners",
    savings: "Up to ₦200,000/year",
  },
  {
    title: "Crypto Gets Official Framework",
    before: "Unclear 10% CGT, weak enforcement",
    after: "Progressive PIT (15-25%), SEC regulation",
    impact: "Legal clarity; must report all transactions",
    savings: "First ₦800k gains tax-free",
  },
  {
    title: "Small Business Exemption Expanded",
    before: "≤₦25M turnover = 0% CIT",
    after: "≤₦100M turnover + ≤₦250M assets = 0%",
    impact: "4x more SMEs qualify for full tax exemption",
    savings: "Up to ₦30M in tax savings",
  },
  {
    title: "Development Levy Consolidation",
    before: "TET 3% + 3 other levies separately",
    after: "Single 4% Development Levy",
    impact: "One levy replaces four separate taxes",
    savings: "Simpler compliance",
  },
];

const taxOptimizationTips = [
  {
    icon: Lightbulb,
    title: "Maximize Your Reliefs & Deductions",
    tips: [
      "Pay rent? Claim 20% (max ₦500k) with tenancy agreement and receipts",
      "Contribute 8% to pension (fully deductible from gross income)",
      "Register for NHIS: 5% of basic salary is tax-deductible",
      "NHF 2.5% now voluntary for private sector—decide if worth it",
      "Life insurance premiums paid previous year are deductible",
      "Keep all documentation for 6-7 years minimum",
    ],
  },
  {
    icon: Target,
    title: "Strategic Income & Timing",
    tips: [
      "Spread bonuses across months to stay in lower tax brackets",
      "Time crypto sales to harvest losses and offset gains",
      "First ₦800k is tax-free—plan income to maximize this",
      "Remote workers: track all deductible expenses (internet, equipment)",
      "Self-employed: consider incorporating if turnover > ₦100M",
      "Foreign income: claim double tax relief with proper documentation",
    ],
  },
  {
    icon: Shield,
    title: "Compliance & Filing Best Practices",
    tips: [
      "File PIT returns by March 31 annually (even if employer deducts PAYE)",
      "Register for TIN immediately—double WHT rate if you don't have one",
      "Use Nalo's TaxPro-Max integration for automated filing",
      "Set reminders: PAYE 10th, WHT 21st, VAT 21st of each month",
      "Keep WHT receipts to claim credits against income tax",
      "Crypto traders: maintain transaction logs with dates, prices, fees",
    ],
  },
  {
    icon: FileText,
    title: "Record Keeping & Documentation",
    tips: [
      "Upload all payslips monthly to track PAYE deductions",
      "Save rent receipts, tenancy agreements, bank transfers",
      "Crypto: record every trade (date, amount, price, fees, wallet addresses)",
      "Freelancers: track income by client and keep invoices",
      "Document all statutory deductions: pension, NHIS, NHF contributions",
      "Export annual tax reports from Nalo for accountant or FIRS review",
    ],
  },
];

const pitBands2026 = [
  { range: "₦0 - ₦800,000", rate: "0%", note: "Completely tax-free" },
  { range: "₦800,001 - ₦3,000,000", rate: "15%", note: "On amount above ₦800k" },
  { range: "₦3,000,001 - ₦12,000,000", rate: "18%", note: "On amount above ₦3M" },
  { range: "₦12,000,001 - ₦25,000,000", rate: "21%", note: "On amount above ₦12M" },
  { range: "₦25,000,001 - ₦50,000,000", rate: "23%", note: "On amount above ₦25M" },
  { range: "Above ₦50,000,000", rate: "25%", note: "Maximum rate" },
];

const taxFaqs = [
  {
    question: "Do I still file returns if my employer deducts PAYE?",
    answer: "YES! Even though your employer deducts Pay As You Earn (PAYE) monthly, you MUST still file annual tax returns by March 31. This is required by law and allows you to: (1) Claim additional reliefs your employer may not know about (rent relief, life insurance, etc.), (2) Report other income sources (freelancing, crypto, rentals), (3) Ensure your employer deducted correctly, and (4) Claim refunds if you overpaid. Nalo auto-generates your PIT return using all your tracked income and deductions.",
  },
  {
    question: "How does the new ₦800,000 tax-free income work?",
    answer: "Under the 2026 Nigeria Tax Act, the first ₦800,000 of your annual income is taxed at 0%—completely tax-free. This is NOT a deduction; it's the first tax bracket. Example: If you earn ₦1.2M annually, after statutory deductions (pension, NHIS, NHF) your taxable income might be ₦1.15M. The first ₦800k is taxed at 0%, and only the remaining ₦350k is taxed at 15% (₦52,500 total tax). This replaces the old Consolidated Relief Allowance (CRA) formula which was more complex.",
  },
  {
    question: "Can I claim Rent Relief if I live with family rent-free?",
    answer: "NO. Rent Relief is ONLY for people who actually pay rent and can prove it. You need: (1) A tenancy agreement showing rent amount, (2) Rent receipts or bank transfer proof, and (3) Landlord details. The relief is 20% of annual rent paid, capped at ₦500,000 maximum. If you pay ₦2.5M rent annually, 20% = ₦500k relief (the cap). If you pay ₦1M rent, 20% = ₦200k relief. Homeowners and rent-free occupants cannot claim this, but still benefit from the ₦800k tax-free threshold.",
  },
  {
    question: "How is cryptocurrency taxed under the 2026 reforms?",
    answer: "Crypto is now officially recognized as a SECURITY and taxed under progressive Personal Income Tax rates (15-25%), NOT the old flat 10% capital gains tax. Here's how: (1) Trading gains: When you sell crypto for profit, you pay progressive PIT. First ₦800k gains are tax-free. Example: Buy Bitcoin at ₦2.93M, sell at ₦5.86M = ₦2.93M gain. After ₦800k exemption, ₦2.13M taxed at 15% = ₦319,704 tax. (2) Mining & staking rewards: Taxed as ordinary income at your applicable rate. (3) Losses: Deductible from gains. (4) VAT: 7.5% on exchange fees only, not on the crypto itself. (5) Reporting: Must register with SIRS, file by March 31, keep detailed records (dates, prices, fees, wallets). Use SEC-licensed exchanges only (Quidax, Busha).",
  },
  {
    question: "What are the penalties for late filing or non-compliance?",
    answer: "Penalties are SERIOUS and automatic: (1) Late PIT filing: ₦50,000 first offense, ₦100,000 repeat offenders, plus possible prosecution and travel restrictions. (2) Late CIT filing: ₦25,000 first month + ₦5,000 each additional month. (3) Late payment: 10% penalty + interest at commercial rates. (4) VAT non-registration: ₦50,000 first month + ₦25,000 each month after. (5) No TIN: Double withholding tax rate applied. (6) Crypto non-reporting: Up to ₦1M fine or 3 years imprisonment. (7) WHT not deducted: 10% penalty + interest. Filing deadline is March 31 for individuals, 6 months after year-end for companies. Use Nalo's automated reminders to never miss deadlines.",
  },
  {
    question: "How does Nalo help with multiple income streams (freelancing, salary, crypto)?",
    answer: "Nalo is built for Nigeria's hustle economy where most people have multiple income sources. Here's what we do: (1) Track everything: Salary (PAYE), freelancing (Upwork, Fiverr), crypto trading, rental income, business profits—all in one place. (2) Apply correct tax treatment: PAYE at source, freelance income with WHT credits, crypto at progressive rates, rental income properly categorized. (3) Aggregate automatically: Calculate total taxable income, apply ₦800k exemption, compute tax across all sources. (4) Claim all deductions: Rent relief, pension, NHIS, NHF, equipment costs, internet bills. (5) Generate compliant reports: One-click PIT return covering all income with proper documentation. (6) Track WHT credits: If clients deducted WHT, we track it and offset against your final tax bill. No manual spreadsheets needed.",
  },
  {
    question: "Should I incorporate my freelance business to save on taxes?",
    answer: "It depends on your turnover. Here's the analysis: (1) Sole proprietorship: You pay progressive PIT (15-25% on income above ₦800k). No incorporation costs but higher tax rates at scale. (2) Small company (≤₦100M turnover + ≤₦250M assets): Pay 0% CIT, 0% CGT, 0% Development Levy. This is THE BEST option if you qualify. (3) Large company (>₦100M): Pay 30% CIT + 4% Development Levy = 34% total. Only worth it if you need limited liability or plan to raise investment. Break-even analysis: If earning ₦5M-₦100M annually, incorporation likely saves tax. If earning <₦5M, sole proprietorship is simpler. If earning >₦100M, compare 34% corporate rate vs 25% personal rate plus incorporation costs (₦50k-₦200k). Use Nalo's calculator to compare both scenarios with YOUR actual numbers before deciding.",
  },
  {
    question: "How do I claim back overpaid taxes from PAYE deductions?",
    answer: "If you overpaid through employer PAYE deductions, follow these steps: (1) File your annual PIT return by March 31 showing total income, all deductions (rent relief, pension, etc.), and total PAYE deducted by employer. (2) Nalo's system will calculate your actual tax liability and flag the overpayment amount. (3) Download the auto-generated refund request report from Nalo with all supporting documents. (4) Submit to your State Internal Revenue Service (SIRS) or FIRS if you're in FCT, military, police, or foreign service. (5) Follow up with the tax office—refunds typically take 90 days to 6+ months. (6) Provide bank details for direct deposit. Common overpayment causes: Employer didn't apply rent relief, calculated CRA wrong, didn't account for full pension contributions, applied wrong tax bands. File early (January-February) to get refunds faster. Nalo's reports include all documentation SIRS/FIRS needs to approve your refund quickly.",
  },
];

export default function TaxCenterPage() {
  return (
    <>
      {/* Hero Section */}
        <section className="relative overflow-hidden bg-background pt-32 pb-16 md:pt-40 md:pb-24 border-b-4 border-primary">
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20">
                <TrendingDown className="h-4 w-4 text-primary" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide">
                  Nigeria's 2026 Tax Reform • Effective January 1, 2026
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none">
                Master Nigeria's
                <br />
                <span className="text-primary">Tax Revolution</span>
              </h1>

              <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
                The most comprehensive tax reform in Nigerian history is here. Calculate accurately, optimize legally, stay compliant—all with AI-powered precision.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="https://app.nalofinance.com/register">
                  <Button size="lg" className="font-black text-base px-8 group">
                    CALCULATE YOUR 2026 TAX FREE
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                  </Button>
                </Link>
                <a href="#calculators">
                  <Button size="lg" variant="outline" className="font-black text-base px-8 border-2">
                    SEE ALL 4 CALCULATORS
                  </Button>
                </a>
              </div>

              {/* Reform Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                <div className="p-4 bg-muted/50 border-2 border-border">
                  <p className="text-2xl md:text-3xl font-black text-primary">₦800k</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase mt-1">Tax-Free (0%)</p>
                </div>
                <div className="p-4 bg-muted/50 border-2 border-border">
                  <p className="text-2xl md:text-3xl font-black text-primary">4 Acts</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase mt-1">Signed June 2025</p>
                </div>
                <div className="p-4 bg-muted/50 border-2 border-border">
                  <p className="text-2xl md:text-3xl font-black text-primary">60→8</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase mt-1">Taxes Simplified</p>
                </div>
                <div className="p-4 bg-muted/50 border-2 border-border">
                  <p className="text-2xl md:text-3xl font-black text-primary">100%</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase mt-1">Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Major Changes Overview */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
                6 Game-Changing Reforms
              </h2>
              <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
                Signed June 26, 2025 by President Tinubu. Effective January 1, 2026.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {keyChanges2026.map((change, index) => (
                <div key={index} className="bg-background border-2 border-border p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base md:text-lg font-black uppercase flex-1">{change.title}</h3>
                    <div className="px-3 py-1 bg-success/10 border-2 border-success/20 shrink-0">
                      <span className="text-xs font-black uppercase text-success">{change.savings}</span>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <div className="p-3 bg-destructive/5 border-l-4 border-destructive/30">
                      <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Before 2026</p>
                      <p className="text-sm font-black">{change.before}</p>
                    </div>
                    <div className="p-3 bg-success/5 border-l-4 border-success">
                      <p className="text-xs font-bold text-muted-foreground uppercase mb-1">From Jan 1, 2026</p>
                      <p className="text-sm font-black">{change.after}</p>
                    </div>
                  </div>

                  <p className="text-sm font-bold text-muted-foreground">{change.impact}</p>
                </div>
              ))}
            </div>

            {/* Reform Context */}
            <div className="mt-12 max-w-4xl mx-auto p-6 bg-primary/5 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 text-primary shrink-0" strokeWidth={3} />
                <div>
                  <p className="text-sm font-black uppercase mb-2">The Presidential Fiscal Reforms Committee</p>
                  <p className="text-sm font-bold text-muted-foreground">
                    Chaired by Taiwo Oyedele, the committee spent 18 months consolidating Nigeria's 60+ taxes into approximately 8. The four landmark acts (Nigeria Tax Act 2025, Tax Administration Act 2025, Revenue Service Act, and Joint Revenue Board Act) aim to increase Nigeria's tax-to-GDP ratio from 6% to 18% by 2027 while protecting low-income earners through progressive taxation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New PIT Bands */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20 mb-6">
                <Users className="h-4 w-4 text-primary" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide">
                  Personal Income Tax 2026
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
                New Progressive Tax Bands
              </h2>
              <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
                Simpler, fairer, with lower effective rates for most earners
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {pitBands2026.map((band, index) => (
                <div key={index} className="bg-card border-2 border-border p-6">
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Income Range</p>
                      <p className="text-lg font-black">{band.range}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Tax Rate</p>
                      <p className="text-3xl font-black text-primary">{band.rate}</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-muted-foreground">{band.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Worked Example */}
            <div className="mt-12 max-w-4xl mx-auto bg-muted/30 border-2 border-border p-8">
              <h3 className="text-xl font-black uppercase mb-6">Example Calculation: ₦5,000,000 Annual Income</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b-2 border-border">
                  <span className="text-sm font-bold text-muted-foreground">Gross Income</span>
                  <span className="text-base font-black">₦5,000,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b-2 border-border">
                  <span className="text-sm font-bold text-muted-foreground">Less: Statutory Deductions (Pension 8%, NHIS 5%, NHF 2.5%)</span>
                  <span className="text-base font-black">-₦200,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b-2 border-border">
                  <span className="text-sm font-bold text-muted-foreground">Less: Rent Relief (20% of ₦2M rent, max ₦500k)</span>
                  <span className="text-base font-black">-₦400,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b-2 border-border">
                  <span className="text-sm font-bold text-muted-foreground">Taxable Income</span>
                  <span className="text-lg font-black">₦4,400,000</span>
                </div>
                <div className="space-y-2 py-4 bg-background p-4 border-l-4 border-primary">
                  <p className="text-xs font-bold text-muted-foreground uppercase mb-2">Tax Calculation:</p>
                  <div className="grid gap-1 text-sm font-bold">
                    <div>First ₦800,000 @ 0% = <span className="text-primary">₦0</span></div>
                    <div>Next ₦2,200,000 @ 15% = <span className="text-primary">₦330,000</span></div>
                    <div>Next ₦1,400,000 @ 18% = <span className="text-primary">₦252,000</span></div>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t-4 border-primary">
                  <span className="text-base font-black uppercase">Total Annual Tax</span>
                  <span className="text-3xl font-black text-primary">₦582,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-muted-foreground uppercase">Effective Tax Rate</span>
                  <span className="text-xl font-black">11.64%</span>
                </div>
                <div className="p-4 bg-success/10 border-2 border-success/30 mt-4">
                  <p className="text-sm font-black text-success">
                    SAVINGS: Under old system, this same earner would pay ₦730,000+ in tax. New system saves ₦148,000/year!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All 4 Calculators */}
        <section id="calculators" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20 mb-6">
                <Calculator className="h-4 w-4 text-primary" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide">
                  Complete Tax Suite
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
                4 Powerful Calculators
              </h2>
              <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
                Calculate PIT, CIT, Crypto Tax, and WHT with 100% accuracy
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {calculators.map((calc, index) => {
                const Icon = calc.icon;
                return (
                  <div
                    key={index}
                    className="bg-background border-2 border-border p-6 md:p-8 space-y-6 hover:border-primary transition-colors"
                  >
                    {/* Calculator Header */}
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 bg-primary/10 border-2 border-primary/20 flex items-center justify-center shrink-0`}>
                        <Icon className="h-7 w-7 text-primary" strokeWidth={3} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-black uppercase tracking-tight mb-2">{calc.name}</h3>
                        <p className="text-sm font-bold text-muted-foreground">{calc.description}</p>
                      </div>
                    </div>

                    {/* Use Case */}
                    <div className="p-4 bg-muted/50 border-l-4 border-primary">
                      <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Use Case</p>
                      <p className="text-sm font-black">{calc.useCase}</p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2">
                      {calc.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" strokeWidth={3} />
                          <span className="text-sm font-bold">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link href="https://app.nalofinance.com/register">
                      <Button size="lg" variant="outline" className="w-full font-black text-sm border-2">
                        USE {calc.name.split(' ')[0].toUpperCase()} CALCULATOR
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tax Filing Workflow */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20 mb-6">
                <FileText className="h-4 w-4 text-primary" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide">
                  Seamless Filing
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
                Tax Filing Made Simple
              </h2>
              <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
                From draft to submission, we guide you through every step of the filing process
              </p>
            </div>

            {/* Filing Workflow Steps */}
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: 1, title: "Draft", desc: "Auto-generate your return from tracked income and expenses", status: "Start here" },
                  { step: 2, title: "Review", desc: "Check calculations, add deductions, verify all amounts", status: "AI-assisted" },
                  { step: 3, title: "Submit", desc: "File directly with FIRS/SIRS or export for manual submission", status: "One-click" },
                  { step: 4, title: "Accepted", desc: "Track status, download receipts, store for records", status: "Complete" },
                ].map((item) => (
                  <div key={item.step} className="relative">
                    <div className="bg-card border-2 border-border p-6 h-full">
                      <div className="w-12 h-12 bg-primary flex items-center justify-center font-black text-xl text-primary-foreground mb-4">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-black uppercase mb-2">{item.title}</h3>
                      <p className="text-sm font-bold text-muted-foreground mb-3">{item.desc}</p>
                      <span className="px-3 py-1 bg-success/10 border border-success/30 text-xs font-black text-success">
                        {item.status}
                      </span>
                    </div>
                    {item.step < 4 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                        <ArrowRight className="h-6 w-6 text-primary" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Deductions Tracking */}
            <div className="mt-16 max-w-5xl mx-auto">
              <h3 className="text-2xl font-black uppercase text-center mb-8">Track Deductions Year-Round</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Receipt, title: "Rent Receipts", desc: "Upload tenancy agreements and payment proofs for 20% rent relief (max ₦500k)" },
                  { icon: Shield, title: "Pension & NHIS", desc: "Auto-track 8% pension and 5% NHIS contributions from your payslips" },
                  { icon: FileText, title: "WHT Credits", desc: "Track all withholding tax deducted by clients to offset against final tax" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="bg-muted/30 border-2 border-border p-6">
                      <div className="w-12 h-12 bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" strokeWidth={3} />
                      </div>
                      <h4 className="text-base font-black uppercase mb-2">{item.title}</h4>
                      <p className="text-sm font-bold text-muted-foreground">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tax Reminders */}
            <div className="mt-16 max-w-4xl mx-auto p-6 bg-warning/5 border-l-4 border-warning">
              <div className="flex items-start gap-4">
                <Calendar className="h-6 w-6 text-warning shrink-0" strokeWidth={3} />
                <div>
                  <h4 className="text-lg font-black uppercase mb-3">Never Miss a Deadline</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { deadline: "March 31", desc: "Annual PIT filing deadline" },
                      { deadline: "10th Monthly", desc: "PAYE remittance" },
                      { deadline: "21st Monthly", desc: "WHT & VAT remittance" },
                      { deadline: "6 months", desc: "After year-end for CIT" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="px-2 py-1 bg-warning/20 text-xs font-black">{item.deadline}</span>
                        <span className="text-sm font-bold text-muted-foreground">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-bold text-muted-foreground mt-4">
                    Nalo sends automated reminders 7 days before, 3 days before, and on the due date. Never pay late fees again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tax Optimization Tips */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 border-2 border-success/20 mb-6">
                <Sparkles className="h-4 w-4 text-success" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide text-success">
                  Expert Strategies
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
                Pay Less Tax, Legally
              </h2>
              <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
                AI-powered recommendations to minimize your tax burden while staying 100% compliant
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {taxOptimizationTips.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div key={index} className="bg-card border-2 border-border p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-success/10 border-2 border-success/20 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-success" strokeWidth={3} />
                      </div>
                      <h3 className="text-lg font-black uppercase">{section.title}</h3>
                    </div>

                    <ul className="space-y-3">
                      {section.tips.map((tip, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-success/10 border-2 border-success/20 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-black text-success">{tIdx + 1}</span>
                          </div>
                          <span className="text-sm font-bold text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Disclaimer */}
            <div className="mt-12 max-w-4xl mx-auto p-6 bg-warning/5 border-2 border-warning/30">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-warning shrink-0" strokeWidth={3} />
                <div>
                  <p className="text-sm font-black uppercase mb-2">Professional Tax Advice Recommended</p>
                  <p className="text-sm font-bold text-muted-foreground">
                    Nalo provides accurate tax calculations and educational content based on official Nigerian tax laws. For complex situations, high-value transactions, or personalized tax planning, consult a qualified Nigerian tax professional or chartered accountant. Tax laws are subject to change and individual circumstances vary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tax FAQs */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20 mb-6">
                <HelpCircle className="h-4 w-4 text-primary" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide">
                  Got Questions?
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
                Your Tax Questions, Answered
              </h2>
              <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about the 2026 tax reforms
              </p>
            </div>

            <FaqAccordion faqs={taxFaqs} showContactCta={true} />
          </div>
        </section>

        {/* Final CTA */}
        <FeatureCta
          icon={Calculator}
          title="Master the 2026 Tax Reforms Today"
          description="Calculate accurately, optimize legally, file confidently. Nalo's AI-powered Tax Center handles PIT, CIT, Crypto, and WHT with precision."
          primaryCta={{
            text: "START CALCULATING FREE",
            href: "https://app.nalofinance.com/register",
          }}
          secondaryCta={{
            text: "EXPLORE CALCULATORS",
            href: "#calculators",
          }}
          footnote="Free plan includes all 4 tax calculators. Upgrade for AI optimization, automated filing, and export reports."
        />
    </>
  );
}
