"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FeatureCta } from "@/components/landing/cta-section";
import {
  Brain,
  MessageSquare,
  TrendingUp,
  Shield,
  Sparkles,
  AlertCircle,
  HelpCircle,
  Clock,
  Target,
  DollarSign,
  PiggyBank,
  ChevronRight,
  CheckCircle,
  X,
  Zap,
  BarChart3,
  Lightbulb,
  Calculator,
  Users,
  Wallet,
  Building,
  Bitcoin,
  Send,
  Star,
  Quote,
  FileText,
  BarChart,
  RefreshCw,
  Lock,
  EyeOff,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

// Interactive Chat Demo Component
function ChatDemo() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showResponse, setShowResponse] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const conversations = [
    {
      question: "How much tax will I pay on ₦3.5M income?",
      response: "Under the 2026 tax reforms:\n• First ₦800k = ₦0 (tax-free)\n• ₦800k-₦2.4M = 15% = ₦240,000\n• ₦2.4M-₦3.5M = 18% = ₦198,000\n\n💡 Total tax: ₦438,000 (12.5% effective rate)\n\nTip: Maximize pension contributions to reduce this further!",
    },
    {
      question: "Should I join this Ajo group? The admin has 78 trust score",
      response: "Trust Score 78 is GOOD ✓\n\n📊 Score breakdown:\n• Payment history: Excellent\n• Default rate: 0%\n• Group tenure: 8 months\n\n✅ Recommendation: Safe to join!\n\nThis admin has never missed a collection and maintains consistent group activity.",
    },
    {
      question: "Where should I invest ₦500,000 for 12 months?",
      response: "Based on your risk profile (Moderate):\n\n📈 Suggested allocation:\n• ₦200k → Treasury Bills (13% p.a.)\n• ₦150k → Money Market Fund (11% p.a.)\n• ₦100k → High-yield savings (10% p.a.)\n• ₦50k → Keep liquid for emergencies\n\n💰 Projected return: ₦57,500 (11.5% avg)",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setShowResponse(true);
      }, 1500);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentMessage]);

  useEffect(() => {
    if (showResponse) {
      const nextTimer = setTimeout(() => {
        setShowResponse(false);
        setCurrentMessage((prev) => (prev + 1) % conversations.length);
      }, 5000);
      return () => clearTimeout(nextTimer);
    }
  }, [showResponse, conversations.length]);

  const current = conversations[currentMessage];

  return (
    <div className="bg-background border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md mx-auto">
      {/* Chat Header */}
      <div className="bg-black text-white p-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary flex items-center justify-center">
          <Brain className="h-6 w-6 text-black" strokeWidth={3} />
        </div>
        <div>
          <p className="font-black text-sm">Oracle AI</p>
          <p className="text-xs text-primary">Online • Ready to help</p>
        </div>
        <div className="ml-auto flex gap-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="p-4 min-h-[320px] bg-muted/20 space-y-4">
        {/* User Message */}
        <div className="flex justify-end">
          <div className="bg-primary text-black p-3 max-w-[85%]">
            <p className="text-sm font-bold">{current.question}</p>
          </div>
        </div>

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-muted border-2 border-border p-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

        {/* Oracle Response */}
        {showResponse && (
          <div className="flex justify-start">
            <div className="bg-background border-2 border-primary p-3 max-w-[90%]">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="h-4 w-4 text-primary" strokeWidth={3} />
                <span className="text-xs font-black text-primary">ORACLE AI</span>
              </div>
              <p className="text-sm font-bold whitespace-pre-line">{current.response}</p>
            </div>
          </div>
        )}
      </div>

      {/* Chat Input */}
      <div className="p-3 border-t-2 border-border bg-background">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask Oracle anything..."
            className="flex-1 px-3 py-2 border-2 border-border bg-muted/30 text-sm font-bold focus:outline-none focus:border-primary"
            disabled
          />
          <button className="w-10 h-10 bg-primary flex items-center justify-center">
            <Send className="h-5 w-5 text-black" strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
}

const oracleFaqs = [
  {
    question: "How is Oracle AI different from ChatGPT or Google?",
    answer:
      "Oracle AI is trained specifically on Nigerian financial realities—Naira, Nigerian banks, 2026 tax reforms, local investment options, and Nigerian economic context. ChatGPT and Google give generic, often American-centric advice that doesn't apply here. Oracle also has direct access to YOUR Nalo account data (income, expenses, goals) for personalized recommendations, not just general information.",
  },
  {
    question: "Can Oracle AI access my bank accounts or move my money?",
    answer:
      "NO. Oracle AI is read-only. It can see your Nalo data (income, expenses, budgets, goals) to give personalized advice, but it CANNOT access your actual bank accounts, make transactions, or move money. It's purely an advisory tool—you maintain 100% control over all financial actions.",
  },
  {
    question: "What types of questions can I ask Oracle AI?",
    answer:
      "Anything financial! Tax calculations ('How much tax on ₦5M income?'), budgeting ('Where should I cut expenses?'), saving ('Should I save or invest?'), investing ('Best place for ₦500k?'), debt ('Should I pay off loans or save?'), Ajo groups ('Is this trust score risky?'), income optimization ('Which hustle should I focus on?'), and more. If it's about money, Oracle can help.",
  },
  {
    question: "Is Oracle AI available on the Free plan?",
    answer:
      "YES! Free users get 10 Oracle AI questions per month. This is perfect for occasional guidance. Premium users (₦10,000/month) get UNLIMITED questions—ask as many as you want, whenever you want. No limits, no extra fees.",
  },
  {
    question: "How accurate is the advice? Can I trust it?",
    answer:
      "Oracle AI is trained on official sources (CBN data, FIRS tax laws, verified investment information) and continuously updated. However, Oracle is a GUIDE, not a replacement for professional financial advisors or tax accountants. For complex situations (large investments, legal tax issues, estate planning), consult a certified professional. For everyday money questions, Oracle is highly reliable and accurate.",
  },
  {
    question: "Does Oracle AI sell my information or push products?",
    answer:
      "NEVER. Oracle AI has zero conflicts of interest. It doesn't get commissions from recommending specific banks, investments, or products. It doesn't sell your data to third parties. Its only goal is to help you make better financial decisions based on YOUR best interests, not corporate partnerships.",
  },
];

const topics = [
  { icon: Calculator, name: "Tax Planning", description: "2026 reforms, deductions, optimization" },
  { icon: Users, name: "Ajo Groups", description: "Trust scores, risk assessment, group advice" },
  { icon: Wallet, name: "Budgeting", description: "Expense analysis, category suggestions" },
  { icon: TrendingUp, name: "Investing", description: "T-Bills, mutual funds, stocks, crypto" },
  { icon: PiggyBank, name: "Savings", description: "Emergency funds, high-yield options" },
  { icon: Target, name: "Financial Goals", description: "Strategies, timelines, tracking" },
  { icon: Building, name: "Business Finance", description: "SME taxes, cash flow, growth" },
  { icon: Bitcoin, name: "Crypto Taxes", description: "Capital gains, reporting, compliance" },
];

const testimonials = [
  {
    name: "Chioma A.",
    role: "Freelance Designer",
    avatar: "CA",
    quote: "Oracle helped me realize I was overpaying taxes by ₦180,000! The advice paid for my Premium subscription 18x over.",
    rating: 5,
  },
  {
    name: "Emmanuel O.",
    role: "Software Developer",
    avatar: "EO",
    quote: "I asked about investing at 2am because I couldn't sleep. Got a perfect breakdown in seconds. No advisor does that.",
    rating: 5,
  },
  {
    name: "Funke B.",
    role: "Small Business Owner",
    avatar: "FB",
    quote: "The Ajo trust score analysis saved my group from a potential defaulter. Oracle flagged risk I would have missed.",
    rating: 5,
  },
];

export default function FinancialGuidePage() {
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
                <Brain className="h-4 w-4 text-primary" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide">
                  AI-Powered • 24/7 Available • Nigerian Context
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
                Meet Oracle
                <br />
                <span className="text-primary">Your AI Money Guide</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl font-bold text-muted-foreground mb-8 max-w-2xl">
                Get instant financial advice trained on Nigerian realities. Taxes, investments, Ajo groups, budgeting—ask anything, anytime.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="https://app.nalofinance.com/register">
                  <Button size="lg" className="w-full sm:w-auto font-black text-base px-8 border-2 bg-black text-white hover:bg-black/90">
                    TRY ORACLE FREE
                    <ChevronRight className="ml-2 h-5 w-5" strokeWidth={3} />
                  </Button>
                </Link>
                <Link href="#demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto font-black text-base px-8 border-2"
                  >
                    SEE IT IN ACTION
                  </Button>
                </Link>
              </div>

              {/* Trust Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-success/10 border-2 border-success/20 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-success" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-lg font-black">&lt;30s</p>
                    <p className="text-xs font-bold text-muted-foreground">Response Time</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-primary" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-lg font-black">50k+</p>
                    <p className="text-xs font-bold text-muted-foreground">Questions Answered</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-success/10 border-2 border-success/20 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-success" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-lg font-black">100%</p>
                    <p className="text-xs font-bold text-muted-foreground">Nigerian Context</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Interactive Chat Demo */}
            <div className="hidden lg:block" id="demo">
              <ChatDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Topics Oracle Covers */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              Ask Oracle About
              <span className="text-primary"> Anything</span>
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              From taxes to Ajo groups, Oracle AI covers every aspect of Nigerian personal finance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <div
                  key={index}
                  className="p-4 bg-background border-2 border-border hover:border-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" strokeWidth={3} />
                  </div>
                  <h3 className="text-sm font-black uppercase mb-1">{topic.name}</h3>
                  <p className="text-xs font-bold text-muted-foreground">{topic.description}</p>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              Getting Financial Advice
              <br />
              <span className="text-destructive">Shouldn&apos;t Be This Hard</span>
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground">
              Most Nigerians have money questions but nowhere to turn for reliable, affordable advice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: DollarSign,
                title: "Advisors Cost ₦50k+ Per Session",
                description:
                  "Traditional financial advisors charge rates most people can't afford for a simple question.",
              },
              {
                icon: Clock,
                title: "Not Available When You Need Them",
                description:
                  "You have a question at 11pm on Sunday. Banks are closed. Advisors are offline. You need an answer NOW.",
              },
              {
                icon: HelpCircle,
                title: "Google Gives American Advice",
                description:
                  "Search results are full of USD-based advice that doesn't apply to Naira, Nigerian taxes, or local banks.",
              },
              {
                icon: AlertCircle,
                title: "Friends Mean Well But...",
                description:
                  "Their advice is based on their situation, not yours. What worked for them might not work for you.",
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

      {/* Oracle Features */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 text-black">
              Why Oracle AI Is Different
            </h2>
            <p className="text-lg md:text-xl font-bold text-black/70 max-w-2xl mx-auto">
              Built specifically for Nigerian financial realities. Not a generic chatbot.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "Nigerian-Trained AI",
                description: "Understands Naira, Nigerian banks, 2026 tax reforms, local investment options, and our economic context.",
              },
              {
                icon: Zap,
                title: "Instant Responses",
                description: "Get answers in under 30 seconds, 24/7. No appointments, no waiting for office hours.",
              },
              {
                icon: Target,
                title: "Personalized to YOU",
                description: "Analyzes your Nalo data (income, expenses, goals) to give advice tailored to your situation.",
              },
              {
                icon: Shield,
                title: "No Hidden Agenda",
                description: "Zero commissions, zero product pushing. Only unbiased advice in YOUR best interest.",
              },
              {
                icon: MessageSquare,
                title: "Plain Language",
                description: "Ask in English or Pidgin. No financial jargon required. Get simple, clear explanations.",
              },
              {
                icon: Lightbulb,
                title: "Always Learning",
                description: "Continuously updated with new regulations, market changes, and user feedback.",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="p-6 bg-black text-white">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-black" strokeWidth={3} />
                  </div>
                  <h3 className="text-lg font-black uppercase mb-2">{feature.title}</h3>
                  <p className="text-sm font-bold text-white/70">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transaction Parsing Feature */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 border-2 border-success/20 mb-6">
                <FileText className="h-4 w-4 text-success" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide">
                  Smart Transaction Parsing
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6">
                Type It Like You
                <br />
                <span className="text-primary">Talk It</span>
              </h2>
              <p className="text-lg md:text-xl font-bold text-muted-foreground mb-8">
                Add transactions in plain language. Oracle AI understands Nigerian slang, merchants, and payment methods.
              </p>

              <div className="space-y-4">
                {[
                  { input: "\"Bought suya at Obalende for 2k\"", parsed: "₦2,000 → Dining → Expense" },
                  { input: "\"Sent 50k to my guy for business\"", parsed: "₦50,000 → Transfer → Expense" },
                  { input: "\"Freelance payment from Tobi 150k\"", parsed: "₦150,000 → Freelance → Income" },
                  { input: "\"DSTV sub renewed 29,500\"", parsed: "₦29,500 → Subscriptions → Expense" },
                ].map((example, index) => (
                  <div key={index} className="p-4 bg-muted/30 border-2 border-border">
                    <p className="text-sm font-bold text-muted-foreground mb-2">You type:</p>
                    <p className="text-sm font-black mb-3">{example.input}</p>
                    <p className="text-sm font-bold text-muted-foreground mb-1">Oracle parses:</p>
                    <p className="text-sm font-black text-success">{example.parsed}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-xs font-black uppercase text-muted-foreground mb-6">Nigerian Merchants Auto-Detected</p>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-black uppercase mb-3 text-primary">Groceries</p>
                  <div className="flex flex-wrap gap-2">
                    {["Shoprite", "Spar", "Ebeano", "Justrite"].map((merchant) => (
                      <span key={merchant} className="px-3 py-1 bg-primary/10 border-2 border-primary/20 text-xs font-black">
                        {merchant}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-black uppercase mb-3 text-primary">Transport</p>
                  <div className="flex flex-wrap gap-2">
                    {["Bolt", "Uber", "Keke", "Okada", "Danfo"].map((merchant) => (
                      <span key={merchant} className="px-3 py-1 bg-primary/10 border-2 border-primary/20 text-xs font-black">
                        {merchant}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-black uppercase mb-3 text-primary">Utilities</p>
                  <div className="flex flex-wrap gap-2">
                    {["PHCN", "IKEDC", "MTN", "Airtel", "Glo", "9mobile"].map((merchant) => (
                      <span key={merchant} className="px-3 py-1 bg-primary/10 border-2 border-primary/20 text-xs font-black">
                        {merchant}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-black uppercase mb-3 text-primary">Entertainment</p>
                  <div className="flex flex-wrap gap-2">
                    {["DSTV", "Netflix", "Startimes", "Showmax"].map((merchant) => (
                      <span key={merchant} className="px-3 py-1 bg-primary/10 border-2 border-primary/20 text-xs font-black">
                        {merchant}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-success/10 border-l-4 border-success">
                  <p className="text-sm font-bold">
                    <span className="font-black text-success">SLANG SUPPORT: </span>
                    "Sharp sharp", "I send am", "e don land", "bros pay me" — we understand!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Tiers */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20 mb-6">
              <BarChart className="h-4 w-4 text-primary" strokeWidth={3} />
              <span className="text-xs font-black uppercase tracking-wide">
                Usage Tiers
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              Choose Your <span className="text-primary">Oracle Power</span>
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              Every plan includes Oracle AI. Higher tiers get more questions per month.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                tier: "FREE",
                queries: "10",
                description: "Perfect for occasional guidance",
                price: "₦0",
                highlight: false,
              },
              {
                tier: "BASIC",
                queries: "100",
                description: "Great for weekly check-ins",
                price: "₦2,500/mo",
                highlight: false,
              },
              {
                tier: "PREMIUM",
                queries: "1,000",
                description: "Daily financial conversations",
                price: "₦10,000/mo",
                highlight: true,
              },
              {
                tier: "UNLIMITED",
                queries: "∞",
                description: "No limits, ever",
                price: "₦25,000/mo",
                highlight: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`p-6 border-2 ${
                  plan.highlight
                    ? "border-primary bg-primary/5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    : "border-border bg-background"
                }`}
              >
                {plan.highlight && (
                  <div className="inline-block px-2 py-0.5 bg-primary text-primary-foreground text-xs font-black uppercase mb-4">
                    Popular
                  </div>
                )}
                <p className="text-sm font-black uppercase text-muted-foreground">{plan.tier}</p>
                <p className="text-4xl font-black my-2">{plan.queries}</p>
                <p className="text-xs font-bold text-muted-foreground uppercase mb-4">Questions/Month</p>
                <p className="text-sm font-bold mb-4">{plan.description}</p>
                <p className="text-lg font-black text-primary">{plan.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-primary/5 border-l-4 border-primary max-w-5xl mx-auto">
            <div className="flex items-center gap-4">
              <RefreshCw className="h-8 w-8 text-primary shrink-0" strokeWidth={3} />
              <div>
                <p className="font-black uppercase text-sm">Monthly Reset</p>
                <p className="text-sm font-bold text-muted-foreground">
                  Your question count resets automatically on the 1st of each month. Unused questions don&apos;t roll over.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 border-2 border-success/20 mb-6">
              <Lock className="h-4 w-4 text-success" strokeWidth={3} />
              <span className="text-xs font-black uppercase tracking-wide">
                Security & Safety
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              Your Data Is <span className="text-success">Protected</span>
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground">
              Oracle AI is read-only and follows strict security protocols.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: EyeOff,
                title: "Read-Only Access",
                description: "Oracle can SEE your data to give advice, but can NEVER move money or make transactions.",
              },
              {
                icon: Shield,
                title: "No Data Selling",
                description: "Your conversations and financial data are never sold to third parties. Zero exceptions.",
              },
              {
                icon: Clock,
                title: "10-Second Timeout",
                description: "API requests timeout after 10 seconds. No hanging connections or delayed responses.",
              },
              {
                icon: AlertTriangle,
                title: "Input Sanitization",
                description: "All inputs are cleaned to prevent prompt injection attacks. Max 2,000 characters per message.",
              },
              {
                icon: RefreshCw,
                title: "Dual AI Failover",
                description: "Primary AI backed by fallback. If one fails, the other takes over seamlessly.",
              },
              {
                icon: CheckCircle2,
                title: "Rate Limiting",
                description: "3 requests/second max. Protects against abuse while ensuring fair access for everyone.",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="p-6 border-2 border-success/30 bg-success/5">
                  <div className="w-12 h-12 bg-success/10 border-2 border-success/20 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-success" strokeWidth={3} />
                  </div>
                  <h3 className="text-lg font-black uppercase mb-2">{feature.title}</h3>
                  <p className="text-sm font-bold text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              Loved by <span className="text-primary">Nigerians</span>
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground">
              Real stories from real Oracle AI users.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-border">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" strokeWidth={3} />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/20 mb-3" strokeWidth={3} />
                  <p className="text-sm font-bold mb-6">{testimonial.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center">
                      <span className="text-sm font-black text-black">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="text-sm font-black">{testimonial.name}</p>
                      <p className="text-xs font-bold text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real Examples */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              Real Questions,
              <br />
              <span className="text-primary">Real Answers</span>
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground">
              See how Oracle AI helps Nigerians make smarter money decisions.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl">
            {[
              {
                question: "I earn ₦2.5M/year. How much tax do I owe under the 2026 reforms?",
                answer:
                  "Under the 2026 reforms, here's your breakdown:",
                recommendations: [
                  "First ₦800,000 = ₦0 (tax-free threshold)",
                  "₦800k - ₦2.5M at 15% = ₦255,000",
                  "Pension deduction (8%) saves you ₦200,000",
                  "Rent relief (20% of rent) saves another ₦120,000",
                ],
                result: "Your actual tax: ₦0 because deductions exceed liability!",
              },
              {
                question: "Where should I invest ₦1M for the best returns?",
                answer:
                  "Based on your moderate risk profile, I recommend:",
                recommendations: [
                  "₦400k → Treasury Bills (13% p.a., very safe)",
                  "₦300k → Mutual Funds (12-15% p.a., moderate)",
                  "₦200k → High-yield savings (10% p.a., liquid)",
                  "₦100k → Keep accessible for emergencies",
                ],
                result: "Projected return: ₦115,000 - ₦130,000 in 12 months",
              },
              {
                question: "My Ajo member has 62 trust score. Is that risky?",
                answer:
                  "Trust score 62 is 'Fair' (50-74 range). Analysis:",
                recommendations: [
                  "This member missed 1-2 payments in 6 months",
                  "They eventually pay, but 3-7 days late",
                  "Risk level: MEDIUM - not dangerous but watch closely",
                  "Recommendation: Keep them, but don't increase their position",
                ],
                result: "Monitor for 2 more cycles. If score drops below 50, consider replacement.",
              },
            ].map((example, index) => (
              <Card key={index} className="border-2 border-border bg-background">
                <CardContent className="p-6">
                  {/* User Question */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-muted border-2 border-border flex items-center justify-center shrink-0">
                      <MessageSquare className="h-5 w-5" strokeWidth={3} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase text-muted-foreground mb-1">You asked:</p>
                      <p className="text-base font-bold">{example.question}</p>
                    </div>
                  </div>

                  {/* Oracle Response */}
                  <div className="p-4 bg-primary/5 border-l-4 border-primary ml-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Brain className="h-5 w-5 text-primary" strokeWidth={3} />
                      <span className="text-xs font-black text-primary">ORACLE AI</span>
                    </div>
                    <p className="text-sm font-bold text-muted-foreground mb-3">{example.answer}</p>
                    <ul className="space-y-2 mb-4">
                      {example.recommendations.map((rec, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-5 h-5 bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-black text-primary">{idx + 1}</span>
                          </div>
                          <span className="text-sm font-bold">{rec}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="p-3 bg-success/10 border-l-2 border-success">
                      <p className="text-sm font-black text-success">{example.result}</p>
                    </div>
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
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              Oracle AI vs
              <span className="text-primary"> Others</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-4 border-black">
              <thead>
                <tr className="bg-black text-white">
                  <th className="p-4 text-left">
                    <p className="text-sm font-black uppercase">Feature</p>
                  </th>
                  <th className="p-4 text-center border-l-2 border-white/20">
                    <p className="text-sm font-black uppercase">Traditional Advisor</p>
                  </th>
                  <th className="p-4 text-center border-l-2 border-white/20">
                    <p className="text-sm font-black uppercase">ChatGPT/Google</p>
                  </th>
                  <th className="p-4 text-center border-l-2 border-white/20 bg-primary text-black">
                    <p className="text-sm font-black uppercase">Oracle AI</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Cost", advisor: "₦50k+/session", chatgpt: "Free", oracle: "Free / ₦10k unlimited" },
                  { feature: "Availability", advisor: "9-5 weekdays", chatgpt: "24/7", oracle: "24/7" },
                  { feature: "Response Time", advisor: "Days/weeks", chatgpt: "Instant", oracle: "< 30 seconds" },
                  { feature: "Nigerian Context", advisor: "Maybe", chatgpt: "Generic/American", oracle: "100% Nigerian" },
                  { feature: "Your Financial Data", advisor: "Manual sharing", chatgpt: "None", oracle: "Auto-analyzed" },
                  { feature: "2026 Tax Reforms", advisor: "Varies", chatgpt: "Outdated", oracle: "Fully updated" },
                  { feature: "Ajo/Esusu Knowledge", advisor: "Limited", chatgpt: "None", oracle: "Expert level" },
                  { feature: "Personalization", advisor: "Good", chatgpt: "None", oracle: "Excellent" },
                ].map((row, index) => (
                  <tr key={index} className="border-b-2 border-border">
                    <td className="p-4 font-bold text-sm">{row.feature}</td>
                    <td className="p-4 text-center border-l-2 border-border">
                      <span className="text-sm font-bold text-muted-foreground">{row.advisor}</span>
                    </td>
                    <td className="p-4 text-center border-l-2 border-border">
                      <span className="text-sm font-bold text-muted-foreground">{row.chatgpt}</span>
                    </td>
                    <td className="p-4 text-center border-l-2 border-border bg-primary/10">
                      <span className="text-sm font-black">{row.oracle}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          </div>

          <FaqAccordion faqs={oracleFaqs} showContactCta={true} />
        </div>
      </section>

      {/* Final CTA */}
      <FeatureCta
        icon={Brain}
        title="Start Getting Smarter Financial Answers Today"
        description="Join thousands of Nigerians who use Oracle AI to make better money decisions. 10 free questions per month. No credit card required."
        primaryCta={{
          text: "TRY ORACLE FREE",
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
