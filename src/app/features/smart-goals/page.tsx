"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FeatureCta } from "@/components/landing/cta-section";
import {
  Target,
  Sparkles,
  TrendingUp,
  Calendar,
  PiggyBank,
  Home,
  GraduationCap,
  Car,
  Plane,
  Gift,
  Shield,
  Brain,
  ChevronRight,
  CheckCircle,
  X,
  Clock,
  AlertCircle,
  BarChart3,
  Zap,
  Bell,
  Trophy,
  Star,
  ArrowUpRight,
  HelpCircle,
} from "lucide-react";

const smartGoalsFaqs = [
  {
    question: "How do Smart Goals work?",
    answer:
      "Smart Goals uses the SMART framework (Specific, Measurable, Achievable, Relevant, Time-bound) to help you set effective financial goals. You define your target amount, deadline, and priority. Nalo then calculates how much you need to save daily/weekly/monthly and tracks your progress automatically from linked accounts.",
  },
  {
    question: "Can I set multiple goals at once?",
    answer:
      "YES! Free users can track up to 3 active goals. Premium users get UNLIMITED goals. You can prioritize goals (High/Medium/Low), and Nalo will help you allocate savings accordingly. For example, if you're saving for a car AND emergency fund, Nalo might suggest 60% to emergency (high priority) and 40% to car (medium priority).",
  },
  {
    question: "How does AI help me achieve goals faster?",
    answer:
      "Oracle AI analyzes your income, spending patterns, and goal timeline to provide personalized recommendations. It might suggest: 'Cut your transportation spending by ₦15,000/month to hit your goal 2 months earlier' or 'Your freelance income is growing—consider allocating 50% of new earnings to your house fund.'",
  },
  {
    question: "What happens if I miss a savings target?",
    answer:
      "Nalo automatically recalculates. If you miss a weekly target, it adjusts future targets to keep you on track. You'll get notifications suggesting how to catch up—maybe by reducing discretionary spending or allocating a bonus. No judgment, just practical solutions to stay on course.",
  },
  {
    question: "Can I link goals to specific accounts?",
    answer:
      "Yes! You can designate specific bank accounts or savings pockets for each goal. Nalo tracks deposits to these accounts and updates your goal progress automatically. This is perfect if you use separate accounts for different savings objectives.",
  },
  {
    question: "How do milestone celebrations work?",
    answer:
      "Every goal has automatic milestones at 25%, 50%, 75%, and 100%. When you hit a milestone, you get a celebration notification and achievement badge. Premium users can set custom milestones and rewards (like 'At 50%, I can buy that watch I've been eyeing').",
  },
  {
    question: "Can I share goals with family or partners?",
    answer:
      "Premium feature! You can create shared goals where multiple people contribute. Perfect for couples saving for a wedding, families saving for vacation, or roommates saving for shared expenses. Everyone sees progress and gets notifications.",
  },
  {
    question: "What goal templates are available?",
    answer:
      "We have pre-built templates for: Emergency Fund (3-6 months expenses), House Down Payment, Car Purchase, Wedding Fund, Vacation, Education, Retirement, Debt Payoff, and more. Templates include suggested timelines, savings rates, and tips specific to Nigerian financial realities.",
  },
];

const goalTemplates = [
  { icon: Shield, name: "Emergency Fund", description: "3-6 months expenses", color: "bg-green-500", popular: true },
  { icon: Home, name: "House Fund", description: "Down payment savings", color: "bg-blue-500", popular: true },
  { icon: Car, name: "Car Purchase", description: "New or used vehicle", color: "bg-purple-500", popular: false },
  { icon: GraduationCap, name: "Education", description: "School fees & courses", color: "bg-orange-500", popular: true },
  { icon: Plane, name: "Vacation", description: "Travel & experiences", color: "bg-pink-500", popular: false },
  { icon: Gift, name: "Wedding", description: "Ceremony & honeymoon", color: "bg-red-500", popular: false },
];

const mockGoals = [
  { name: "Emergency Fund", target: 1500000, current: 875000, deadline: "Dec 2025", priority: "High", color: "bg-green-500" },
  { name: "New Laptop", target: 450000, current: 320000, deadline: "Mar 2025", priority: "Medium", color: "bg-blue-500" },
  { name: "Dubai Trip", target: 800000, current: 180000, deadline: "Aug 2025", priority: "Low", color: "bg-pink-500" },
];

export default function SmartGoalsPage() {
  const [activeGoal, setActiveGoal] = useState(0);

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
                <Target className="h-4 w-4 text-primary" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide">
                  AI-Powered Goal Tracking
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
                Set Goals,
                <br />
                <span className="text-primary">Crush Them</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl font-bold text-muted-foreground mb-8 max-w-2xl">
                Turn your financial dreams into reality. Set SMART goals, track progress automatically,
                and get AI-powered insights to achieve them faster.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="https://app.nalofinance.com/register">
                  <Button size="lg" className="w-full sm:w-auto font-black text-base px-8 border-2">
                    START YOUR FIRST GOAL
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
                  <p className="text-2xl sm:text-3xl font-black text-primary">89%</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Goal Success Rate</p>
                </div>
                <div className="p-4 bg-background border-2 border-border">
                  <p className="text-2xl sm:text-3xl font-black text-primary">₦2.1B</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Goals Achieved</p>
                </div>
                <div className="p-4 bg-background border-2 border-border">
                  <p className="text-2xl sm:text-3xl font-black text-primary">AI</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Smart Insights</p>
                </div>
                <div className="p-4 bg-background border-2 border-border">
                  <p className="text-2xl sm:text-3xl font-black text-primary">2x</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Faster Savings</p>
                </div>
              </div>
            </div>

            {/* Right - Interactive Goals Preview */}
            <div className="hidden lg:block">
              <div className="bg-card border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs font-black uppercase text-muted-foreground">Your Goals</p>
                    <p className="text-2xl font-black">3 Active Goals</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-success/10 border-2 border-success/20">
                    <Trophy className="h-4 w-4 text-success" strokeWidth={3} />
                    <span className="text-sm font-black text-success">On Track</span>
                  </div>
                </div>

                {/* Goals List */}
                <div className="space-y-3 mb-6">
                  {mockGoals.map((goal, index) => {
                    const progress = (goal.current / goal.target) * 100;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveGoal(index)}
                        className={`w-full text-left p-4 border-2 transition-all ${
                          activeGoal === index
                            ? "border-primary bg-primary/5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 ${goal.color}`} />
                            <span className="text-sm font-black">{goal.name}</span>
                          </div>
                          <span className={`px-2 py-0.5 text-xs font-black uppercase ${
                            goal.priority === "High"
                              ? "bg-destructive/10 text-destructive"
                              : goal.priority === "Medium"
                              ? "bg-primary/10 text-primary"
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {goal.priority}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-bold text-muted-foreground mb-2">
                          <span>₦{goal.current.toLocaleString()} / ₦{goal.target.toLocaleString()}</span>
                          <span>{goal.deadline}</span>
                        </div>
                        <div className="h-2 bg-muted">
                          <div
                            className={`h-full ${goal.color} transition-all duration-500`}
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <p className="text-xs font-black text-right mt-1">{progress.toFixed(0)}%</p>
                      </button>
                    );
                  })}
                </div>

                {/* AI Insight */}
                <div className="p-4 bg-primary/10 border-2 border-primary/30">
                  <div className="flex items-start gap-3">
                    <Brain className="h-5 w-5 text-primary shrink-0" strokeWidth={3} />
                    <div>
                      <p className="text-xs font-black uppercase text-primary mb-1">AI Insight</p>
                      <p className="text-sm font-bold text-muted-foreground">
                        Save ₦12,500/week to hit your Emergency Fund goal by December!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goal Templates */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              Popular Goal Templates
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              Start with a template or create your own custom goal.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {goalTemplates.map((template, index) => {
              const Icon = template.icon;
              return (
                <div
                  key={index}
                  className="relative p-4 bg-background border-2 border-border hover:border-primary transition-colors text-center group cursor-pointer"
                >
                  {template.popular && (
                    <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-primary text-primary-foreground text-xs font-black uppercase">
                      Popular
                    </div>
                  )}
                  <div className={`w-12 h-12 ${template.color} flex items-center justify-center mx-auto mb-3 group-hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-shadow`}>
                    <Icon className="h-6 w-6 text-white" strokeWidth={3} />
                  </div>
                  <h3 className="text-sm font-black uppercase mb-1">{template.name}</h3>
                  <p className="text-xs font-bold text-muted-foreground">{template.description}</p>
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
              Why Most Financial Goals
              <br />
              <span className="text-destructive">Fail</span>
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground">
              92% of people abandon their financial goals within 3 months. Here's why:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: "Vague, Unmeasurable Goals",
                description:
                  "'I want to save more money' isn't a goal—it's a wish. Without specific targets, deadlines, and milestones, you're setting yourself up for failure.",
              },
              {
                icon: Clock,
                title: "No Progress Tracking",
                description:
                  "If you're not tracking progress, you don't know if you're on track or falling behind. By the time you realize, it's too late to course-correct.",
              },
              {
                icon: AlertCircle,
                title: "Unrealistic Timelines",
                description:
                  "Setting a goal to save ₦5M in 6 months on a ₦300k salary? That's mathematically impossible. Unrealistic goals lead to frustration and quitting.",
              },
              {
                icon: Bell,
                title: "No Accountability System",
                description:
                  "Without reminders, notifications, and check-ins, your goal becomes 'out of sight, out of mind.' Life happens, and savings get forgotten.",
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

      {/* SMART Framework */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              The SMART Framework
            </h2>
            <p className="text-lg md:text-xl font-bold opacity-90 max-w-2xl mx-auto">
              Every goal you create follows the proven SMART methodology.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { letter: "S", word: "Specific", description: "Clear target amount" },
              { letter: "M", word: "Measurable", description: "Track every naira" },
              { letter: "A", word: "Achievable", description: "AI validates feasibility" },
              { letter: "R", word: "Relevant", description: "Aligned to your life" },
              { letter: "T", word: "Time-bound", description: "Deadline with milestones" },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-primary-foreground/10 border-2 border-primary-foreground/20">
                <div className="w-16 h-16 bg-primary-foreground text-primary flex items-center justify-center mx-auto mb-4 text-3xl font-black">
                  {item.letter}
                </div>
                <p className="text-lg font-black uppercase mb-1">{item.word}</p>
                <p className="text-sm font-bold opacity-80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20 mb-6">
              <Zap className="h-4 w-4 text-primary" strokeWidth={3} />
              <span className="text-xs font-black uppercase tracking-wide">
                Powerful Features
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              Everything You Need to
              <br />
              <span className="text-primary">Achieve Your Goals</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Unlimited Goals",
                description: "Create as many goals as you want. House, car, vacation, emergency fund—track them all in one place.",
                premium: true,
              },
              {
                icon: Brain,
                title: "AI-Powered Insights",
                description: "Get personalized recommendations on how to reach goals faster based on your income and spending.",
                premium: true,
              },
              {
                icon: BarChart3,
                title: "Visual Progress",
                description: "Beautiful charts show your progress over time. See daily, weekly, and monthly savings trends.",
                premium: false,
              },
              {
                icon: Bell,
                title: "Smart Reminders",
                description: "Get nudges when you're falling behind and celebrations when you hit milestones.",
                premium: false,
              },
              {
                icon: Calendar,
                title: "Auto-Calculate",
                description: "Enter your target and deadline. Nalo calculates exactly how much to save daily/weekly/monthly.",
                premium: false,
              },
              {
                icon: Trophy,
                title: "Milestone Rewards",
                description: "Set custom rewards at 25%, 50%, 75%. Celebrate progress and stay motivated.",
                premium: true,
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 border-border bg-background relative">
                  {feature.premium && (
                    <div className="absolute top-4 right-4 px-2 py-0.5 bg-primary/10 border border-primary/20 text-xs font-black uppercase text-primary">
                      Premium
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" strokeWidth={3} />
                    </div>
                    <h3 className="text-lg font-black uppercase mb-2">{feature.title}</h3>
                    <p className="text-sm font-bold text-muted-foreground">{feature.description}</p>
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
              How Smart Goals Works
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground">
              From dream to reality in 4 simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Set Your Goal",
                description: "Choose a template or create custom. Enter target amount and deadline.",
              },
              {
                step: "02",
                title: "AI Validates",
                description: "Oracle AI checks if your goal is achievable based on your income and expenses.",
              },
              {
                step: "03",
                title: "Track Progress",
                description: "Nalo automatically tracks deposits to your goal. See progress in real-time.",
              },
              {
                step: "04",
                title: "Celebrate Wins",
                description: "Hit milestones, earn badges, and get AI tips to reach your goal faster.",
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
              Goals Achieved
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Adaeze",
                goal: "Emergency Fund",
                amount: "₦1,200,000",
                time: "8 months",
                quote: "The AI told me exactly how much to save weekly. Hit my target 2 weeks early!",
              },
              {
                name: "Emeka",
                goal: "House Down Payment",
                amount: "₦5,000,000",
                time: "18 months",
                quote: "Milestone celebrations kept me motivated. Every 25% felt like a win.",
              },
              {
                name: "Folake",
                goal: "MBA Tuition",
                amount: "₦3,500,000",
                time: "14 months",
                quote: "I didn't think it was possible until the AI showed me the math. Now I'm enrolled!",
              },
            ].map((story, index) => (
              <Card key={index} className="border-2 border-border bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-black text-lg">
                      {story.name[0]}
                    </div>
                    <div>
                      <p className="font-black">{story.name}</p>
                      <p className="text-sm font-bold text-muted-foreground">{story.goal}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-muted/30">
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase">Saved</p>
                      <p className="text-lg font-black text-success">{story.amount}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase">Time</p>
                      <p className="text-lg font-black">{story.time}</p>
                    </div>
                  </div>

                  <p className="text-sm font-bold text-muted-foreground italic">
                    "{story.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about Smart Goals
            </p>
          </div>

          <FaqAccordion faqs={smartGoalsFaqs} showContactCta={true} />
        </div>
      </section>

      {/* Final CTA */}
      <FeatureCta
        icon={Target}
        title="Ready to Crush Your Financial Goals?"
        description="Join thousands of Nigerians who are turning dreams into reality. Start your first goal free. No credit card required."
        primaryCta={{
          text: "START YOUR FIRST GOAL",
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
