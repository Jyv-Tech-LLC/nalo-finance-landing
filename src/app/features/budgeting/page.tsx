import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FeatureCta } from "@/components/landing/cta-section";
import { HelpCircle } from "lucide-react";
import {
  Calculator,
  TrendingUp,
  Target,
  PieChart,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Sparkles,
  Calendar,
  Wallet,
  ShoppingCart,
  Home,
  Zap,
  Info,
} from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Money Disappears",
    description: "You get paid, then suddenly it's gone. No idea where ₦200,000 went. Food? Transport? Bills? Who knows.",
  },
  {
    icon: ShoppingCart,
    title: "Impulse Spending",
    description: "See something nice, buy it. 'I deserve this' becomes daily. Payday high followed by broke week.",
  },
  {
    icon: Calendar,
    title: "No Planning",
    description: "Bills surprise you every month. Rent sneaks up. No savings for emergencies. Living paycheck to paycheck.",
  },
  {
    icon: Target,
    title: "Goals Never Happen",
    description: "'I'll save next month' for 2 years straight. That house, car, or business remains a dream because money keeps vanishing.",
  },
];

const solutions = [
  {
    icon: Wallet,
    title: "Zero-Sum Budgeting",
    description: "Every Naira gets a job. Allocate 100% of income to needs, wants, savings, and goals. Nothing wasted.",
    details: [
      "Income - Expenses = ₦0 (all money assigned)",
      "Forces intentional spending decisions",
      "Eliminates 'where did my money go?' mystery",
      "Built-in savings through forced allocation",
    ],
  },
  {
    icon: PieChart,
    title: "50/30/20 Framework",
    description: "Classic budgeting rule: 50% needs, 30% wants, 20% savings. Nalo calculates automatically.",
    details: [
      "50% Needs: rent, food, utilities, transport, insurance",
      "30% Wants: entertainment, dining, shopping, hobbies",
      "20% Savings: emergency fund, investments, goals",
      "Adjustable percentages for your situation",
    ],
  },
  {
    icon: Calculator,
    title: "Envelope System (Digital)",
    description: "Virtual envelopes for each spending category. When envelope is empty, stop spending. Simple.",
    details: [
      "Create envelopes: Food, Transport, Entertainment, etc.",
      "Allocate budget to each envelope monthly",
      "Track spending against envelope balance",
      "Visual alerts when running low",
    ],
  },
  {
    icon: TrendingUp,
    title: "AI-Powered Insights",
    description: "Machine learning analyzes your patterns and recommends optimizations you'd never spot manually.",
    details: [
      "'You spend 40% on food vs 25% average'",
      "'Cut DSTV by ₦8,000, save ₦96,000/year'",
      "'Your rent is 45% of income—too high'",
      "Personalized recommendations based on your data",
    ],
  },
];

const budgetTypes = [
  {
    name: "Monthly Budget",
    scenario: "₦300,000 monthly salary",
    breakdown: [
      { category: "Rent", amount: "₦120,000", percent: "40%" },
      { category: "Food & Groceries", amount: "₦60,000", percent: "20%" },
      { category: "Transport", amount: "₦30,000", percent: "10%" },
      { category: "Utilities (Power, Water, Internet)", amount: "₦21,000", percent: "7%" },
      { category: "Phone & Data", amount: "₦9,000", percent: "3%" },
      { category: "Entertainment", amount: "₦18,000", percent: "6%" },
      { category: "Clothing & Personal", amount: "₦12,000", percent: "4%" },
      { category: "Emergency Savings", amount: "₦15,000", percent: "5%" },
      { category: "Goal Savings", amount: "₦15,000", percent: "5%" },
    ],
    total: "₦300,000",
  },
  {
    name: "Freelancer Budget",
    scenario: "Variable income ₦150k-₦500k monthly",
    breakdown: [
      { category: "Fixed Expenses (Rent, Utilities)", amount: "₦150,000", percent: "Base" },
      { category: "Variable Expenses (15% of income)", amount: "Scales", percent: "15%" },
      { category: "Business Reinvestment (20%)", amount: "Scales", percent: "20%" },
      { category: "Tax Reserve (15%)", amount: "Scales", percent: "15%" },
      { category: "Emergency Fund (10%)", amount: "Scales", percent: "10%" },
      { category: "Living Buffer (40%)", amount: "Scales", percent: "40%" },
    ],
    total: "Varies",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Set Your Income",
    description: "Enter all income sources: salary, side hustles, business, freelancing. Nalo calculates total available.",
    icon: Wallet,
  },
  {
    step: "02",
    title: "Choose Budget Method",
    description: "Pick Zero-Sum, 50/30/20, Envelope, or create custom. Nalo suggests optimal method based on income stability.",
    icon: PieChart,
  },
  {
    step: "03",
    title: "Allocate to Categories",
    description: "Assign money to needs, wants, savings. Set limits for each category. Nalo warns if allocation exceeds income.",
    icon: Calculator,
  },
  {
    step: "04",
    title: "Track & Adjust",
    description: "Log expenses throughout the month. Get alerts when approaching limits. Nalo recommends adjustments automatically.",
    icon: TrendingUp,
  },
];

const comparison = [
  {
    category: "Expense Tracking",
    withoutNalo: "Manual spreadsheet or notebook, easy to forget entries, no real-time view",
    withNalo: "Automatic categorization, real-time balance updates, mobile + web access",
  },
  {
    category: "Overspending Control",
    withoutNalo: "Realize you overspent after the fact, no prevention",
    withNalo: "Alerts BEFORE you overspend, envelope system prevents excess",
  },
  {
    category: "Budget Adjustments",
    withoutNalo: "Rebuild entire spreadsheet, recalculate everything manually",
    withNalo: "Drag-and-drop reallocate, AI suggests optimizations",
  },
  {
    category: "Multiple Budgets",
    withoutNalo: "Separate sheets for different goals, confusing, hard to track",
    withNalo: "Unlimited budgets, switch between them, track all simultaneously",
  },
  {
    category: "Progress Visualization",
    withoutNalo: "Numbers in rows, hard to see patterns or progress",
    withNalo: "Charts, graphs, progress bars, visual spending heatmaps",
  },
  {
    category: "Insights & Recommendations",
    withoutNalo: "You analyze yourself, miss optimization opportunities",
    withNalo: "AI analyzes patterns, suggests cuts, predicts future needs",
  },
];

const faqs = [
  {
    question: "What budgeting method does Nalo use?",
    answer: "Nalo supports multiple budgeting methods so you can choose what works best for your lifestyle:\n\n(1) Zero-Sum Budgeting: Assign every Naira a purpose. Income minus expenses equals zero. Great for people who want maximum control.\n\n(2) 50/30/20 Rule: 50% needs, 30% wants, 20% savings. Classic framework that's simple and effective for salary earners.\n\n(3) Envelope System: Allocate fixed amounts to virtual envelopes (Food, Transport, etc.). When envelope is empty, stop spending in that category.\n\n(4) Custom Budgets: Create your own categories and percentages. Perfect for unique situations like variable income, family budgets, or business expenses.\n\nYou can switch between methods anytime or run multiple budgets simultaneously (e.g., personal + business).",
  },
  {
    question: "How do I handle variable income as a freelancer?",
    answer: "Variable income requires a different budgeting approach:\n\n(1) Identify your MINIMUM monthly income from the past 12 months (e.g., lowest was ₦150k).\n\n(2) Build your budget on that minimum—cover all fixed expenses (rent, utilities, subscriptions) first.\n\n(3) Create percentage-based categories for variable income: Business reinvestment 20%, Tax reserve 15%, Emergency fund 10%, Living expenses 40%, Discretionary 15%.\n\n(4) During high-income months (₦500k+), Nalo automatically allocates excess to savings and tax reserves.\n\n(5) During low-income months (₦150k), you're covered because fixed expenses are already planned.\n\nNalo's AI tracks your income patterns and recommends your ideal 'safety buffer' amount (usually 3-6 months of expenses) to smooth out the variability.",
  },
  {
    question: "Can I create separate budgets for different purposes?",
    answer: "Yes! Nalo supports unlimited budgets (Premium plan). Common use cases:\n\n(1) Personal Budget: Your individual living expenses, savings, entertainment.\n\n(2) Household Budget: Shared expenses with spouse/partner—rent, food, utilities.\n\n(3) Business Budget: If you're a freelancer or entrepreneur, separate business income and expenses.\n\n(4) Project Budget: Saving for specific goals like wedding, vacation, car purchase.\n\n(5) Family Budget: Managing expenses for children, elderly parents, extended family.\n\nEach budget has its own categories, allocations, and tracking. Switch between them with one tap. View consolidated dashboard showing all budgets together or drill down into individual ones.",
  },
  {
    question: "What if I overspend in a category?",
    answer: "Nalo handles overspending with smart alerts and recommendations:\n\n(1) Early Warning (80% spent): 'You've used ₦24,000 of ₦30,000 Food budget with 10 days left in month.'\n\n(2) Approaching Limit (95% spent): 'Food budget almost depleted. Spend carefully or reallocate from another category.'\n\n(3) Overspent: 'You exceeded Food budget by ₦5,000. Options: Reduce next month's allocation OR cut from Entertainment this month.'\n\n(4) Reallocation Tool: Drag-and-drop move money between categories. Reduce Entertainment by ₦5,000, add to Food instantly.\n\n(5) Learning Mode: Nalo tracks your overspending patterns over 3 months and suggests: 'You consistently overspend Food by 15%. Increase Food budget from ₦30k to ₦35k, reduce Entertainment from ₦20k to ₦15k.'\n\nThe goal isn't perfection—it's awareness and continuous improvement.",
  },
  {
    question: "How does Nalo help me save more money?",
    answer: "Nalo increases savings through multiple mechanisms:\n\n(1) Forced Allocation: In Zero-Sum budgeting, savings is a mandatory category. Can't skip it.\n\n(2) Round-Up Savings: Round transactions to nearest ₦100 or ₦1,000, automatically save the difference.\n\n(3) Spending Insights: 'You spent ₦45,000 on food last month vs ₦30,000 this month. You saved ₦15,000!' See the impact of changes.\n\n(4) Goal Tracking: Set goals (₦500k for rent, ₦2M for car), Nalo calculates: 'Save ₦42k/month for 12 months to reach goal.'\n\n(5) AI Recommendations: 'Cancel DSTV (₦8k/month), use free YouTube. Save ₦96k/year.' AI finds cuts you'd never consider.\n\n(6) Savings Challenges: '30-day no dining out challenge.' Gamification makes saving fun.\n\nAverage Nalo users save 23% more within first 3 months compared to before using the platform.",
  },
  {
    question: "Can I share my budget with a partner or spouse?",
    answer: "Yes! Budget sharing works two ways:\n\n(1) View-Only Sharing: Share budget link with partner. They see your budget, categories, spending, but cannot edit. Good for transparency ('See, I'm not overspending!').\n\n(2) Collaborative Budget (Premium): Both partners have full edit access. Perfect for household budgets where both contribute. Both can log expenses, reallocate funds, and see real-time updates.\n\nTypical setup: Create 'Household Budget' for shared expenses (rent, food, utilities, kids). Each partner contributes their share (50/50 or 60/40 based on income). Both track their contributions. Separate 'Personal Budgets' remain private for individual spending.\n\nSharing is encrypted and secure. Revoke access anytime. Perfect for couples, roommates, business partners, or family budgets with adult children.",
  },
  {
    question: "What if my income or expenses change mid-month?",
    answer: "Life happens! Nalo makes adjustments easy:\n\n(1) Income Increase (bonus, side hustle payment): Log new income → Nalo asks 'Allocate ₦50,000 bonus?' → Choose: Add to savings, distribute proportionally across categories, or create new goal.\n\n(2) Income Decrease (salary cut, lost client): Reduce income → Nalo warns 'Budget exceeds income by ₦30,000' → Shows recommended cuts: 'Reduce Entertainment ₦10k, Dining ₦10k, Shopping ₦10k.'\n\n(3) Unexpected Expense (medical emergency, car repair): Log expense → Overspends category → Nalo suggests: 'Pull ₦20k from Emergency Fund' OR 'Reduce other categories for rest of month.'\n\n(4) Recurring Changes: Got promoted? Update base salary once, Nalo recalculates entire budget with new percentages automatically.\n\nThe budget is a living document, not set in stone. Adjust as often as needed. Nalo tracks all changes in Budget History so you can see evolution over time.",
  },
  {
    question: "How is budgeting different from just tracking expenses?",
    answer: "TRACKING = Rearview Mirror. Looking backward. 'I spent ₦50k on food last month.' Useful for awareness, but reactive.\n\nBUDGETING = GPS. Looking forward. 'I will spend ₦40k on food this month.' Proactive planning.\n\nKey differences:\n\n(1) Intent: Tracking records what happened. Budgeting decides what WILL happen before you spend.\n\n(2) Control: Tracking observes. Budgeting prevents overspending BEFORE it occurs.\n\n(3) Goals: Tracking shows past behavior. Budgeting aligns spending with future goals.\n\nNalo combines both: You budget at start of month (plan), then track expenses throughout (execution), then review at end of month (learn), then adjust next month's budget (improve). It's a continuous cycle that makes you better with money over time.\n\nThink of it like: Tracking = weighing yourself. Budgeting = meal planning and exercise schedule.",
  },
];

export default function BudgetingPage() {
  return (
    <>
      {/* Hero Section */}
        <section className="relative overflow-hidden bg-background pt-32 pb-16 md:pt-40 md:pb-24 border-b-4 border-primary">
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20">
                <PieChart className="h-4 w-4 text-primary" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide">
                  Smart Budgeting for Nigerians
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none">
                Know Where
                <br />
                <span className="text-primary">Every Naira Goes</span>
              </h1>

              <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
                Stop wondering where your money disappeared. Build realistic budgets, track spending effortlessly, and actually stick to your plans with AI-powered insights.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="https://app.nalofinance.com/auth/register">
                  <Button size="lg" className="font-black text-base px-8 group">
                    CREATE YOUR BUDGET FREE
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                  </Button>
                </Link>
                <a href="#how-it-works">
                  <Button size="lg" variant="outline" className="font-black text-base px-8 border-2">
                    SEE HOW IT WORKS
                  </Button>
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                <div className="p-4 bg-muted/50 border-2 border-border">
                  <p className="text-2xl md:text-3xl font-black text-primary">23%</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase mt-1">More Saved</p>
                </div>
                <div className="p-4 bg-muted/50 border-2 border-border">
                  <p className="text-2xl md:text-3xl font-black text-primary">4</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase mt-1">Budget Methods</p>
                </div>
                <div className="p-4 bg-muted/50 border-2 border-border">
                  <p className="text-2xl md:text-3xl font-black text-primary">Real-Time</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase mt-1">Updates</p>
                </div>
                <div className="p-4 bg-muted/50 border-2 border-border">
                  <p className="text-2xl md:text-3xl font-black text-primary">AI</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase mt-1">Insights</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
                Why You Can't Save
              </h2>
              <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
                Sound familiar? These are symptoms of zero budgeting discipline
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <div key={index} className="bg-background border-2 border-border p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-destructive/10 border-2 border-destructive/20 flex items-center justify-center shrink-0">
                        <Icon className="h-6 w-6 text-destructive" strokeWidth={3} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-black uppercase mb-2">{problem.title}</h3>
                        <p className="text-sm font-bold text-muted-foreground">{problem.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20 mb-6">
                <Sparkles className="h-4 w-4 text-primary" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide">
                  4 Powerful Methods
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
                How Nalo Budgeting Works
              </h2>
              <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
                Choose the method that fits your lifestyle, or mix and match
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div key={index} className="bg-card border-2 border-border p-6 md:p-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-primary/10 border-2 border-primary/20 flex items-center justify-center shrink-0">
                        <Icon className="h-7 w-7 text-primary" strokeWidth={3} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-black uppercase tracking-tight mb-2">{solution.title}</h3>
                        <p className="text-sm font-bold text-muted-foreground">{solution.description}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {solution.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" strokeWidth={3} />
                          <span className="text-sm font-bold">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
                4 Simple Steps
              </h2>
              <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
                From setup to savings in under 10 minutes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {howItWorks.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {index < howItWorks.length - 1 && (
                      <div className="hidden lg:block absolute top-20 left-full w-full h-1 bg-primary/20 -translate-x-1/2" />
                    )}

                    <div className="relative bg-background border-2 border-border p-6 space-y-4 hover:border-primary transition-colors h-full">
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary border-4 border-background flex items-center justify-center">
                        <span className="text-lg font-black text-primary-foreground">{step.step}</span>
                      </div>

                      <div className="w-14 h-14 bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                        <Icon className="h-7 w-7 text-primary" strokeWidth={3} />
                      </div>

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
          </div>
        </section>

        {/* Example Budgets */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
                Real Budget Examples
              </h2>
              <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
                See how others budget their income effectively
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {budgetTypes.map((budget, index) => (
                <div key={index} className="bg-card border-2 border-border p-6 md:p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-black uppercase mb-2">{budget.name}</h3>
                    <p className="text-sm font-bold text-muted-foreground">{budget.scenario}</p>
                  </div>

                  <div className="space-y-3">
                    {budget.breakdown.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-center justify-between p-3 bg-muted/30 border-l-4 border-primary">
                        <div className="flex-1">
                          <p className="text-sm font-black">{item.category}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-bold text-primary">{item.amount}</span>
                          <span className="text-xs font-bold text-muted-foreground w-12 text-right">{item.percent}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t-4 border-primary flex items-center justify-between">
                    <span className="text-base font-black uppercase">Total</span>
                    <span className="text-2xl font-black text-primary">{budget.total}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
                Spreadsheet vs Nalo
              </h2>
              <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
                Why manual tracking fails and digital budgeting wins
              </p>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full border-2 border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="p-4 text-left border-b-2 border-r-2 border-border">
                      <span className="text-sm font-black uppercase">Feature</span>
                    </th>
                    <th className="p-4 text-left border-b-2 border-r-2 border-border">
                      <span className="text-sm font-black uppercase text-destructive">Without Nalo</span>
                    </th>
                    <th className="p-4 text-left border-b-2 border-border">
                      <span className="text-sm font-black uppercase text-primary">With Nalo</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                      <td className="p-4 border-r-2 border-border">
                        <span className="text-sm font-black">{item.category}</span>
                      </td>
                      <td className="p-4 border-r-2 border-border">
                        <span className="text-sm font-bold text-muted-foreground">{item.withoutNalo}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm font-bold">{item.withNalo}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20 mb-6">
                <HelpCircle className="h-4 w-4 text-primary" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide">
                  Got Questions?
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
                Budgeting Questions Answered
              </h2>
              <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about smart budgeting
              </p>
            </div>

            <FaqAccordion faqs={faqs} showContactCta={true} />
          </div>
        </section>

        {/* Final CTA */}
        <FeatureCta
          icon={PieChart}
          title="Take Control of Your Money"
          description="Stop living paycheck to paycheck. Build a realistic budget, stick to it, and watch your savings grow automatically."
          primaryCta={{
            text: "CREATE FREE BUDGET NOW",
            href: "https://app.nalofinance.com/auth/register",
          }}
          secondaryCta={{
            text: "SEE EXAMPLES",
            href: "#how-it-works",
          }}
          footnote="Free plan: Unlimited budgets, all methods included. No credit card required."
        />
    </>
  );
}
