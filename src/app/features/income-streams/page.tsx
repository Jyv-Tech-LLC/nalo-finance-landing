"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FeatureCta } from "@/components/landing/cta-section";
import {
  TrendingUp,
  Sparkles,
  Target,
  BarChart3,
  DollarSign,
  Zap,
  Clock,
  AlertCircle,
  HelpCircle,
  Brain,
  ChevronRight,
  CheckCircle,
  X,
  PieChart,
  Activity,
  Lightbulb,
  TrendingDown,
  Briefcase,
  Laptop,
  Store,
  Bitcoin,
  Home,
  Car,
  Users,
  Palette,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Star,
  Quote,
} from "lucide-react";

const incomeStreamsFaqs = [
  {
    question: "How does Nalo automatically track income streams?",
    answer:
      "When you connect your bank accounts and payment platforms (like Paystack, Flutterwave), Nalo reads transaction descriptions to identify income sources. For example, 'Freelance payment from XYZ Corp' gets tagged as 'Freelance' income. You can also manually tag cash income or crypto earnings. Over time, Nalo learns your patterns and auto-categorizes new transactions.",
  },
  {
    question: "What is an AI Performance Score and how is it calculated?",
    answer:
      "Each income stream gets a score from 0-100 based on: (1) Revenue amount, (2) Month-over-month growth rate, (3) Consistency (stable vs. volatile), and optionally (4) Time investment (if you track hours). A score of 90-100 = excellent performer, 75-89 = solid, 50-74 = average, below 50 = needs review. Higher scores mean better ROI and growth potential.",
  },
  {
    question: "What do FOCUS, MAINTAIN, and REVIEW recommendations mean?",
    answer:
      "FOCUS = Your best-performing stream. High score, growing, good ROI. Double down here—spend more time, take on more work in this area. MAINTAIN = Solid performer. Keep current effort level. REVIEW = Underperforming. Low score, declining, or poor ROI. Optimize it, pivot strategy, or consider cutting it to free up time for better opportunities.",
  },
  {
    question: "Can I track income streams if I get paid in cash or crypto?",
    answer:
      "YES. For cash income (like market sales, tutoring), manually log transactions in Nalo and tag them to the appropriate stream. For crypto, you can either manually enter transactions or connect supported crypto platforms. Nalo converts everything to Naira equivalents for consistent tracking and comparisons.",
  },
  {
    question: "How do I track time investment to calculate ROI per hour?",
    answer:
      "This is optional but powerful. For each income stream, you can log hours worked per week/month. Nalo then calculates ₦/hour (income divided by time). This reveals hidden time-wasters—a stream earning ₦100k/month might look good until you realize it takes 80 hours (₦1,250/hour) vs. another earning ₦80k in 10 hours (₦8,000/hour).",
  },
  {
    question: "Does this work for irregular or seasonal income (like real estate commissions)?",
    answer:
      "ABSOLUTELY. The AI is trained to detect seasonal patterns and irregular income spikes. It won't penalize you for having variable income—instead, it calculates averages, flags volatility risk, and helps you budget for lean months. For example, if you earn ₦0 for 2 months then ₦1.2M in month 3 (real estate sale), Nalo averages it as ₦400k/month and warns you to save during big months.",
  },
  {
    question: "What if I have only 1 income stream (just salary)?",
    answer:
      "The Hustle Optimizer is most powerful for people with 2+ streams, but it still works for single-income users. It tracks salary growth, bonuses, and side income opportunities. Plus, it helps you identify potential new streams—Oracle AI can recommend side hustles based on your skills and spending patterns. Start with 1, grow to 2+.",
  },
  {
    question: "Is this feature available on the Free plan?",
    answer:
      "YES! Free users can track up to 3 income streams with basic analytics and manual categorization. Premium users (₦10,000/month) get UNLIMITED streams, AI performance scoring, FOCUS/MAINTAIN/REVIEW recommendations, time tracking, and advanced analytics. If you have 2-3 streams, Free is fine. If you have 4+ or want AI insights, upgrade to Premium.",
  },
];

const incomeStreamTypes = [
  { icon: Briefcase, name: "Salary", description: "Full-time & part-time jobs" },
  { icon: Laptop, name: "Freelance", description: "Contract & gig work" },
  { icon: Store, name: "Business", description: "Side business income" },
  { icon: Bitcoin, name: "Crypto", description: "Trading & staking rewards" },
  { icon: Home, name: "Rent", description: "Property rental income" },
  { icon: TrendingUp, name: "Investments", description: "Dividends & returns" },
  { icon: Car, name: "Transportation", description: "Uber, Bolt, logistics" },
  { icon: Palette, name: "Creative", description: "Content, design, music" },
];

const mockStreams = [
  { name: "Full-Time Salary", amount: 450000, score: 72, trend: "stable", recommendation: "MAINTAIN", color: "bg-blue-500" },
  { name: "Freelance Design", amount: 280000, score: 94, trend: "up", recommendation: "FOCUS", color: "bg-primary" },
  { name: "Crypto Trading", amount: 85000, score: 41, trend: "down", recommendation: "REVIEW", color: "bg-orange-500" },
  { name: "Online Store", amount: 120000, score: 67, trend: "up", recommendation: "MAINTAIN", color: "bg-purple-500" },
];

export default function IncomeStreamsPage() {
  const [activeStream, setActiveStream] = useState(1);
  const totalIncome = mockStreams.reduce((sum, s) => sum + s.amount, 0);

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
                <TrendingUp className="h-4 w-4 text-primary" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide">
                  AI-Powered Income Optimization
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
                Track Every Hustle,
                <br />
                <span className="text-primary">Maximize Your Earnings</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl font-bold text-muted-foreground mb-8 max-w-2xl">
                The average Nigerian has 2.7 income streams. Stop guessing which ones are worth your time.
                Get AI-powered insights that tell you exactly where to focus.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="https://app.nalofinance.com/register">
                  <Button size="lg" className="w-full sm:w-auto font-black text-base px-8 border-2">
                    START TRACKING FREE
                    <ChevronRight className="ml-2 h-5 w-5" strokeWidth={3} />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto font-black text-base px-8 border-2"
                  >
                    SEE PREMIUM FEATURES
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-background border-2 border-border">
                  <p className="text-2xl sm:text-3xl font-black text-primary">2.7</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Avg Streams/User</p>
                </div>
                <div className="p-4 bg-background border-2 border-border">
                  <p className="text-2xl sm:text-3xl font-black text-primary">+31%</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Income Growth</p>
                </div>
                <div className="p-4 bg-background border-2 border-border">
                  <p className="text-2xl sm:text-3xl font-black text-primary">5min</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Monthly Review</p>
                </div>
                <div className="p-4 bg-background border-2 border-border">
                  <p className="text-2xl sm:text-3xl font-black text-primary">AI</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Scoring Engine</p>
                </div>
              </div>
            </div>

            {/* Right - Interactive Dashboard Preview */}
            <div className="hidden lg:block">
              <div className="bg-card border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs font-black uppercase text-muted-foreground">Total Monthly Income</p>
                    <p className="text-3xl font-black">₦{totalIncome.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-success/10 border-2 border-success/20">
                    <ArrowUpRight className="h-4 w-4 text-success" strokeWidth={3} />
                    <span className="text-sm font-black text-success">+12.5%</span>
                  </div>
                </div>

                {/* Stream Bars */}
                <div className="space-y-3 mb-6">
                  {mockStreams.map((stream, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStream(index)}
                      className={`w-full text-left p-3 border-2 transition-all ${
                        activeStream === index
                          ? "border-primary bg-primary/5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-black">{stream.name}</span>
                        <div className="flex items-center gap-2">
                          {stream.trend === "up" && <ArrowUpRight className="h-3 w-3 text-success" strokeWidth={3} />}
                          {stream.trend === "down" && <ArrowDownRight className="h-3 w-3 text-destructive" strokeWidth={3} />}
                          {stream.trend === "stable" && <Minus className="h-3 w-3 text-muted-foreground" strokeWidth={3} />}
                          <span className="text-sm font-black">₦{stream.amount.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-muted">
                          <div
                            className={`h-full ${stream.color}`}
                            style={{ width: `${(stream.amount / totalIncome) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-muted-foreground">
                          {((stream.amount / totalIncome) * 100).toFixed(0)}%
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Selected Stream Details */}
                <div className="p-4 bg-muted/30 border-2 border-border">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-black">{mockStreams[activeStream].name}</span>
                    <span className={`px-3 py-1 text-xs font-black uppercase ${
                      mockStreams[activeStream].recommendation === "FOCUS"
                        ? "bg-primary text-primary-foreground"
                        : mockStreams[activeStream].recommendation === "REVIEW"
                        ? "bg-destructive text-destructive-foreground"
                        : "bg-muted text-foreground border-2 border-border"
                    }`}>
                      {mockStreams[activeStream].recommendation}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-xs font-bold text-muted-foreground">Performance Score</p>
                      <p className="text-2xl font-black">{mockStreams[activeStream].score}<span className="text-sm text-muted-foreground">/100</span></p>
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-muted">
                        <div
                          className={`h-full ${
                            mockStreams[activeStream].score >= 80
                              ? "bg-success"
                              : mockStreams[activeStream].score >= 60
                              ? "bg-primary"
                              : mockStreams[activeStream].score >= 40
                              ? "bg-orange-500"
                              : "bg-destructive"
                          }`}
                          style={{ width: `${mockStreams[activeStream].score}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Income Stream Types */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              Track Any Income Source
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              From salary to side hustles, crypto to rental income—Nalo handles it all.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {incomeStreamTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className="p-4 bg-background border-2 border-border hover:border-primary transition-colors text-center group"
                >
                  <div className="w-12 h-12 bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:border-primary transition-colors">
                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={3} />
                  </div>
                  <h3 className="text-sm font-black uppercase mb-1">{type.name}</h3>
                  <p className="text-xs font-bold text-muted-foreground">{type.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 border-2 border-destructive/20 mb-6">
              <AlertCircle className="h-4 w-4 text-destructive" strokeWidth={3} />
              <span className="text-xs font-black uppercase tracking-wide">
                The Problem
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              You&apos;re Working Hard,
              <br />
              <span className="text-destructive">But Are You Working Smart?</span>
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground">
              Juggling multiple hustles without data is like driving blindfolded. You&apos;re busy, but are you profitable?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Clock,
                title: "You Can't Track Multiple Income Sources",
                description:
                  "You have salary + freelance gigs + side business + crypto trading. By month-end, you don't know which made you the most money relative to time invested.",
              },
              {
                icon: AlertCircle,
                title: "No Idea Where to Focus Your Energy",
                description:
                  "Should you take on more freelance clients or grow your side business? You're guessing based on feelings, not data. Wrong choices waste months.",
              },
              {
                icon: TrendingDown,
                title: "Hidden Time-Wasters Drain Your Potential",
                description:
                  "That side hustle you love? It might be earning ₦20,000/month while taking 40 hours of work. You're literally working for ₦500/hour without realizing it.",
              },
              {
                icon: PieChart,
                title: "Can't See the Big Picture",
                description:
                  "You know your total income, but not the breakdown. Which stream is growing? Which is dying? Which is seasonal? Zero visibility means zero optimization.",
              },
            ].map((problem, index) => {
              const Icon = problem.icon;
              return (
                <Card key={index} className="border-2 border-destructive/30 bg-destructive/5">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-destructive/10 border-2 border-destructive/20 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-destructive" strokeWidth={3} />
                    </div>
                    <h3 className="text-lg font-black uppercase mb-2">{problem.title}</h3>
                    <p className="text-sm font-bold text-muted-foreground">{problem.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Performance Score Explainer */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border-2 border-primary-foreground/20 mb-6">
                <Brain className="h-4 w-4 text-primary-foreground" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide">
                  AI-Powered Analysis
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6">
                Every Stream Gets a
                <br />
                Performance Score
              </h2>
              <p className="text-lg md:text-xl font-bold mb-8 opacity-90">
                Our AI analyzes each income stream and gives it a score from 0-100.
                Higher score = better return on your time and effort.
              </p>

              <div className="space-y-4">
                {[
                  { label: "Revenue Amount", description: "How much money does it bring in?" },
                  { label: "Growth Trend", description: "Is it growing, stable, or declining?" },
                  { label: "Consistency", description: "Is income reliable or volatile?" },
                  { label: "Time ROI", description: "How much do you earn per hour worked?" },
                ].map((factor, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary-foreground/10 border-2 border-primary-foreground/20 flex items-center justify-center shrink-0">
                      <span className="text-sm font-black">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-black">{factor.label}</p>
                      <p className="text-sm opacity-80">{factor.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background text-foreground p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
              <p className="text-xs font-black uppercase text-muted-foreground mb-6">Score Breakdown</p>

              <div className="space-y-4">
                {/* FOCUS - 90-100 */}
                <div className="flex items-center gap-4 p-3 border-2 border-success/30 bg-success/5">
                  <div className="w-20 shrink-0">
                    <p className="text-xl font-black text-success">90-100</p>
                  </div>
                  <div className="px-4 py-2 bg-success text-success-foreground text-sm font-black uppercase shrink-0">
                    FOCUS
                  </div>
                  <p className="text-sm font-bold text-muted-foreground flex-1">Top performer. Double down here!</p>
                </div>

                {/* MAINTAIN - 70-89 */}
                <div className="flex items-center gap-4 p-3 border-2 border-primary/30 bg-primary/5">
                  <div className="w-20 shrink-0">
                    <p className="text-xl font-black text-primary">70-89</p>
                  </div>
                  <div className="px-4 py-2 bg-primary text-primary-foreground text-sm font-black uppercase shrink-0">
                    MAINTAIN
                  </div>
                  <p className="text-sm font-bold text-muted-foreground flex-1">Solid stream. Keep current effort.</p>
                </div>

                {/* OPTIMIZE - 50-69 */}
                <div className="flex items-center gap-4 p-3 border-2 border-orange-500/30 bg-orange-500/5">
                  <div className="w-20 shrink-0">
                    <p className="text-xl font-black text-orange-500">50-69</p>
                  </div>
                  <div className="px-4 py-2 bg-orange-500 text-white text-sm font-black uppercase shrink-0">
                    OPTIMIZE
                  </div>
                  <p className="text-sm font-bold text-muted-foreground flex-1">Room for improvement. Analyze further.</p>
                </div>

                {/* REVIEW - 0-49 */}
                <div className="flex items-center gap-4 p-3 border-2 border-destructive/30 bg-destructive/5">
                  <div className="w-20 shrink-0">
                    <p className="text-xl font-black text-destructive">0-49</p>
                  </div>
                  <div className="px-4 py-2 bg-destructive text-destructive-foreground text-sm font-black uppercase shrink-0">
                    REVIEW
                  </div>
                  <p className="text-sm font-bold text-muted-foreground flex-1">Underperforming. Consider cutting.</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 border-2 border-primary/30">
                <p className="text-sm font-bold">
                  <span className="font-black text-primary">PRO TIP: </span>
                  Scores update monthly. Watch for trends—a declining score means action needed!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20 mb-6">
              <Zap className="h-4 w-4 text-primary" strokeWidth={3} />
              <span className="text-xs font-black uppercase tracking-wide">
                The Solution
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              The Hustle Optimizer
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              Track every income stream automatically. Get AI-powered recommendations on where to double down and what to cut.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Activity,
                title: "Automatic Income Tracking",
                description:
                  "Link your bank accounts and payment platforms. Nalo automatically categorizes income by source.",
                details: [
                  "Auto-categorization from transaction descriptions",
                  "Manual tagging for cash/crypto income",
                  "Historical data import from past 12 months",
                  "Real-time updates as money comes in",
                ],
              },
              {
                icon: Brain,
                title: "AI Performance Scoring",
                description:
                  "Each income stream gets a performance score based on revenue, growth rate, consistency, and effort required.",
                details: [
                  "Considers revenue amount + growth trends",
                  "Factors in time investment (if you track it)",
                  "Compares to similar income types",
                  "Updates monthly as new data comes in",
                ],
              },
              {
                icon: Lightbulb,
                title: "Smart Recommendations",
                description:
                  "AI tells you exactly what to do with each stream. FOCUS on high-performers, MAINTAIN stable ones, REVIEW underperformers.",
                details: [
                  "FOCUS: Your best stream—double down here",
                  "MAINTAIN: Solid performer—keep current effort",
                  "REVIEW: Underperforming—optimize or cut it",
                  "Explanations for every recommendation",
                ],
              },
              {
                icon: BarChart3,
                title: "Visual Analytics",
                description:
                  "See exactly how each stream contributes to your total income. Spot trends before they become problems.",
                details: [
                  "% breakdown of total income by stream",
                  "Month-over-month growth charts",
                  "Seasonal pattern detection",
                  "Income concentration risk warnings",
                ],
              },
            ].map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="border-2 border-primary/30 bg-background">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" strokeWidth={3} />
                    </div>
                    <h3 className="text-lg font-black uppercase mb-2">{solution.title}</h3>
                    <p className="text-sm font-bold text-muted-foreground mb-4">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" strokeWidth={3} />
                          <span className="text-xs font-bold">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              How It Works
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground">
              Set it up once, get insights forever.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Connect Accounts",
                description:
                  "Link bank accounts, payment platforms (Paystack, Flutterwave), and manually tag cash income.",
              },
              {
                step: "02",
                title: "Auto-Categorize",
                description:
                  "Nalo reads transaction descriptions and automatically sorts income by stream.",
              },
              {
                step: "03",
                title: "AI Analysis",
                description:
                  "Every month, AI calculates performance scores (0-100) and growth trends for each stream.",
              },
              {
                step: "04",
                title: "Take Action",
                description:
                  'Get clear recommendations: "FOCUS on Stream A" or "REVIEW Stream B (declining)."',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="p-6 border-2 border-border bg-muted/30 h-full hover:border-primary transition-colors">
                  <div className="text-5xl font-black text-primary/20 mb-4">{item.step}</div>
                  <h3 className="text-lg font-black uppercase mb-3">{item.title}</h3>
                  <p className="text-sm font-bold text-muted-foreground">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ChevronRight className="h-6 w-6 text-primary" strokeWidth={3} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 border-2 border-success/20 mb-6">
              <Star className="h-4 w-4 text-success fill-success" strokeWidth={3} />
              <span className="text-xs font-black uppercase tracking-wide">
                Success Stories
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              Real Users,
              <span className="text-primary"> Real Results</span>
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              See how Nigerians are optimizing their income with data-driven decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Chidi O.",
                role: "Software Engineer + Freelancer",
                avatar: "C",
                quote: "I discovered my freelance work was earning ₦9,000/hour vs. my salary at ₦2,500/hour. Shifted focus and increased my income by 33%!",
                result: "+₦190,000/month",
                resultLabel: "Income increase",
              },
              {
                name: "Blessing A.",
                role: "Content Creator",
                avatar: "B",
                quote: "The AI showed me my online store was a time sink. Closed it, went all-in on content. Best decision ever.",
                result: "+73%",
                resultLabel: "Income growth",
              },
              {
                name: "Tunde M.",
                role: "Accountant + Real Estate",
                avatar: "T",
                quote: "Finally understood my income volatility. Built proper savings during good months. No more budget chaos.",
                result: "Predictable",
                resultLabel: "Cash flow",
              },
              {
                name: "Ngozi E.",
                role: "Graphic Designer",
                avatar: "N",
                quote: "Dropped low-paying clients, focused on corporates. Same hours, nearly double the income. Data doesn't lie!",
                result: "+86%",
                resultLabel: "Revenue increase",
              },
            ].map((story, index) => (
              <Card key={index} className="border-2 border-border bg-background">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-black text-lg shrink-0">
                      {story.avatar}
                    </div>
                    <div>
                      <p className="font-black">{story.name}</p>
                      <p className="text-sm font-bold text-muted-foreground">{story.role}</p>
                    </div>
                  </div>

                  <div className="relative mb-4">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" strokeWidth={2} />
                    <p className="text-sm font-bold text-muted-foreground pl-6 italic">
                      "{story.quote}"
                    </p>
                  </div>

                  <div className="p-3 bg-success/10 border-l-4 border-success">
                    <p className="text-2xl font-black text-success">{story.result}</p>
                    <p className="text-xs font-bold text-muted-foreground uppercase">{story.resultLabel}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              Manual Tracking vs
              <span className="text-primary"> Hustle Optimizer</span>
            </h2>
          </div>

          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full border-2 border-border">
              <thead>
                <tr className="bg-muted/50 border-b-2 border-border">
                  <th className="p-4 text-left">
                    <p className="text-sm font-black uppercase">Feature</p>
                  </th>
                  <th className="p-4 text-center border-l-2 border-border">
                    <p className="text-sm font-black uppercase text-destructive">Manual Tracking</p>
                  </th>
                  <th className="p-4 text-center border-l-2 border-border bg-primary/5">
                    <p className="text-sm font-black uppercase text-primary">Hustle Optimizer</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Income tracking", manual: "Manual entry, often forgotten", optimizer: "Automatic from bank accounts" },
                  { feature: "Performance scoring", manual: "None—pure guesswork", optimizer: "AI scores 0-100" },
                  { feature: "Recommendations", manual: "None—gut decisions", optimizer: "FOCUS/MAINTAIN/REVIEW" },
                  { feature: "Time ROI tracking", manual: "Too tedious manually", optimizer: "Optional time logging" },
                  { feature: "Visual analytics", manual: "Basic if you build it", optimizer: "Professional charts & trends" },
                  { feature: "Time required", manual: "2-4 hours/month", optimizer: "5 minutes/month" },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="p-4">
                      <p className="text-sm font-bold">{row.feature}</p>
                    </td>
                    <td className="p-4 text-center border-l-2 border-border">
                      <div className="flex items-center justify-center gap-2">
                        <X className="h-4 w-4 text-destructive shrink-0" strokeWidth={3} />
                        <p className="text-sm font-bold text-muted-foreground">{row.manual}</p>
                      </div>
                    </td>
                    <td className="p-4 text-center border-l-2 border-border bg-primary/5">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" strokeWidth={3} />
                        <p className="text-sm font-bold">{row.optimizer}</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-success/10 border-l-4 border-success max-w-5xl mx-auto">
            <p className="text-sm font-bold">
              <span className="font-black text-success">BOTTOM LINE: </span>
              Hustle Optimizer users increase their income by an average of 31% within 6 months by cutting
              low-ROI streams and doubling down on high-performers.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about the Hustle Optimizer
            </p>
          </div>

          <FaqAccordion faqs={incomeStreamsFaqs} showContactCta={true} />
        </div>
      </section>

      {/* Final CTA */}
      <FeatureCta
        icon={TrendingUp}
        title="Stop Guessing. Start Optimizing."
        description="Join thousands of multi-income Nigerians who use data to maximize their earnings. Track up to 3 streams free. No credit card required."
        primaryCta={{
          text: "START TRACKING FREE",
          href: "https://app.nalofinance.com/register",
        }}
        secondaryCta={{
          text: "VIEW PRICING",
          href: "/pricing",
        }}
      />
    </>
  );
}
