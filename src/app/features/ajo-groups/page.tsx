"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FeatureCta } from "@/components/landing/cta-section";
import {
  Users,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Target,
  Bell,
  FileText,
  Lock,
  Clock,
  Calculator,
  Star,
  Sparkles,
  XCircle,
  MessageSquare,
  Receipt,
  Calendar,
  HelpCircle,
  UserPlus,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Crown,
  Quote,
  X,
  Brain,
} from "lucide-react";

const faqs = [
  {
    question: "What is an Ajo and how does it work?",
    answer: "Ajo (also called Esusu, Adashe, or contributory savings) is a traditional Nigerian rotating savings system. A group of people contribute a fixed amount regularly (weekly, monthly), and each member takes turns collecting the full pot. For example: 10 friends contribute ₦50,000 monthly = ₦500,000 pot. Member 1 collects month 1, Member 2 collects month 2, and so on. After 10 months, everyone has collected once, and the cycle can restart.",
  },
  {
    question: "How do Trust Scores work?",
    answer: "Trust Scores (0-100) quantify each member's reliability based on: (1) Payment punctuality—on-time payments increase score, late payments decrease it. (2) Payment consistency—never missing a payment is crucial. (3) Group participation—active members score higher. (4) History length—longer good behavior = higher score. 90+ is excellent, 70-89 is good, 50-69 needs improvement, below 50 is high risk.",
  },
  {
    question: "What happens if someone doesn't pay?",
    answer: "Nalo has multiple safeguards: (1) Automatic reminders before and after due date. (2) Late payment penalties set by the group. (3) Trust score reduction of 5-30 points depending on severity. (4) Collection delay for late members. (5) Group vote to remove persistent defaulters. AI also flags at-risk members before they default.",
  },
  {
    question: "Can I join multiple Ajo Groups?",
    answer: "Yes! You can be part of multiple groups with different contribution amounts, frequencies, and members. Free plan allows 2 active groups; Premium supports unlimited groups. Nalo's dashboard shows all your groups, upcoming payments, and collection dates in one place.",
  },
  {
    question: "How do I start an Ajo Group?",
    answer: "Starting takes 5 minutes: (1) Create Group with a name. (2) Set contribution amount, frequency, member count, and rules. (3) Invite members via WhatsApp, SMS, or email. (4) Connect bank account for contributions. (5) Launch when all members join. You become admin with group management powers.",
  },
  {
    question: "Is my money safe?",
    answer: "Yes! Members contribute to a dedicated group account (not to admin personally). All transactions are recorded and visible. Automated disbursement sends funds directly to the scheduled recipient. Premium groups get escrow protection at partner banks. 256-bit encryption protects all data.",
  },
  {
    question: "What's Free vs Premium?",
    answer: "FREE: 2 groups, 10 members max, basic trust scores, manual payment confirmation. PREMIUM (₦10,000/month): Unlimited groups and members, advanced analytics, automatic payment verification, AI risk assessment, escrow protection, legal document generation, priority support.",
  },
  {
    question: "Can diaspora Nigerians join?",
    answer: "Absolutely! Nalo works internationally. Diaspora members can pay via international transfers or domiciliary accounts. Collections can be sent to Nigerian or foreign accounts. Trust scores + digital payments make distance irrelevant—your cousin in Lagos and sister in London can be in the same Ajo!",
  },
];

const mockMembers = [
  { name: "Chidi O.", score: 98, status: "paid", amount: 50000, avatar: "C", isCollector: false },
  { name: "Blessing A.", score: 94, status: "paid", amount: 50000, avatar: "B", isCollector: true },
  { name: "Tunde M.", score: 87, status: "pending", amount: 50000, avatar: "T", isCollector: false },
  { name: "Ngozi E.", score: 72, status: "late", amount: 50000, avatar: "N", isCollector: false },
];

export default function AjoGroupsPage() {
  const [selectedMember, setSelectedMember] = useState(0);
  const totalPot = mockMembers.reduce((sum, m) => sum + m.amount, 0);
  const paidCount = mockMembers.filter(m => m.status === "paid").length;

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
                <Star className="h-4 w-4 text-primary fill-current" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide">
                  #1 Feature • Most Loved by Users
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
                Your Ajo Group
                <br />
                <span className="text-primary">Deserves Better</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl font-bold text-muted-foreground mb-8 max-w-2xl">
                Say goodbye to WhatsApp chaos. Bring your traditional Ajo into the digital age with trust scores, transparent payments, and zero drama.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="https://app.nalofinance.com/auth/register">
                  <Button size="lg" className="w-full sm:w-auto font-black text-base px-8 border-2">
                    START YOUR AJO FREE
                    <ArrowRight className="ml-2 h-5 w-5" strokeWidth={3} />
                  </Button>
                </Link>
                <a href="#how-it-works">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto font-black text-base px-8 border-2"
                  >
                    SEE HOW IT WORKS
                  </Button>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-background border-2 border-border">
                  <p className="text-2xl sm:text-3xl font-black text-primary">500+</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Active Groups</p>
                </div>
                <div className="p-4 bg-background border-2 border-border">
                  <p className="text-2xl sm:text-3xl font-black text-primary">98%</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">On-Time Rate</p>
                </div>
                <div className="p-4 bg-background border-2 border-border">
                  <p className="text-2xl sm:text-3xl font-black text-primary">₦2B+</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Contributed</p>
                </div>
                <div className="p-4 bg-background border-2 border-border">
                  <p className="text-2xl sm:text-3xl font-black text-primary">0</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Defaults</p>
                </div>
              </div>
            </div>

            {/* Right - Interactive Dashboard Preview */}
            <div className="hidden lg:block">
              <div className="bg-card border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs font-black uppercase text-muted-foreground">Office Friends Ajo</p>
                    <p className="text-2xl font-black">Cycle 3 of 4</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-black uppercase text-muted-foreground">This Month's Pot</p>
                    <p className="text-2xl font-black text-primary">₦{totalPot.toLocaleString()}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black uppercase text-muted-foreground">Collection Progress</span>
                    <span className="text-sm font-black">{paidCount}/{mockMembers.length} Paid</span>
                  </div>
                  <div className="h-3 bg-muted">
                    <div
                      className="h-full bg-success transition-all duration-500"
                      style={{ width: `${(paidCount / mockMembers.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Members List */}
                <div className="space-y-2 mb-6">
                  {mockMembers.map((member, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedMember(index)}
                      className={`w-full text-left p-3 border-2 transition-all ${
                        selectedMember === index
                          ? "border-primary bg-primary/5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 flex items-center justify-center font-black text-sm ${
                            member.score >= 90 ? "bg-success text-success-foreground" :
                            member.score >= 70 ? "bg-primary text-primary-foreground" :
                            "bg-orange-500 text-white"
                          }`}>
                            {member.avatar}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-black">{member.name}</span>
                              {member.isCollector && (
                                <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs font-black uppercase">
                                  Collector
                                </span>
                              )}
                            </div>
                            <span className="text-xs font-bold text-muted-foreground">Trust Score: {member.score}</span>
                          </div>
                        </div>
                        <div className={`px-3 py-1 text-xs font-black uppercase ${
                          member.status === "paid" ? "bg-success/10 text-success" :
                          member.status === "pending" ? "bg-primary/10 text-primary" :
                          "bg-destructive/10 text-destructive"
                        }`}>
                          {member.status}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Selected Member Details */}
                <div className="p-4 bg-muted/30 border-2 border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-black">{mockMembers[selectedMember].name}</span>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" strokeWidth={3} />
                      <span className="text-lg font-black">{mockMembers[selectedMember].score}</span>
                      <span className="text-xs font-bold text-muted-foreground">/100</span>
                    </div>
                  </div>
                  <div className="h-2 bg-muted">
                    <div
                      className={`h-full ${
                        mockMembers[selectedMember].score >= 90 ? "bg-success" :
                        mockMembers[selectedMember].score >= 70 ? "bg-primary" :
                        mockMembers[selectedMember].score >= 50 ? "bg-orange-500" :
                        "bg-destructive"
                      }`}
                      style={{ width: `${mockMembers[selectedMember].score}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems with Traditional Ajo */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 border-2 border-destructive/20 mb-6">
              <AlertTriangle className="h-4 w-4 text-destructive" strokeWidth={3} />
              <span className="text-xs font-black uppercase tracking-wide text-destructive">
                The Problem
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              Traditional Ajo Is Broken
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              WhatsApp groups, notebook tracking, and "trust me bro" systems cause endless headaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: MessageSquare,
                title: "WhatsApp Chaos",
                description: "Important payment info buried under memes. No way to track who said what.",
              },
              {
                icon: XCircle,
                title: "No Accountability",
                description: "Members disappear after collecting. Late payments with endless excuses.",
              },
              {
                icon: FileText,
                title: "Manual Tracking",
                description: "Treasurer tracks in notebooks. Easy to lose. Constant 'I paid' disputes.",
              },
              {
                icon: AlertTriangle,
                title: "Trust on Rumors",
                description: "'Someone knows someone.' No objective way to assess reliability.",
              },
            ].map((problem, index) => {
              const Icon = problem.icon;
              return (
                <Card key={index} className="border-2 border-destructive/30 bg-destructive/5">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-destructive/10 border-2 border-destructive/20 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-destructive" strokeWidth={3} />
                    </div>
                    <h3 className="text-base font-black uppercase mb-2">{problem.title}</h3>
                    <p className="text-sm font-bold text-muted-foreground">{problem.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Score Explainer */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border-2 border-primary-foreground/20 mb-6">
                <Shield className="h-4 w-4 text-primary-foreground" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide">
                  The Game Changer
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6">
                Trust Scores
                <br />
                Replace Guesswork
              </h2>
              <p className="text-lg md:text-xl font-bold mb-8 opacity-90">
                Every member gets a quantifiable reliability score (0-100) based on their payment history.
                No more "someone knows someone" gambles.
              </p>

              <div className="space-y-4">
                {[
                  { label: "Payment Punctuality", description: "On-time payments increase score" },
                  { label: "Consistency", description: "Never missing payments is crucial" },
                  { label: "History Length", description: "Longer good behavior = higher trust" },
                  { label: "Group Participation", description: "Active members score higher" },
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
                {/* 90-100 */}
                <div className="flex items-center gap-4 p-3 border-2 border-success/30 bg-success/5">
                  <div className="w-20 shrink-0">
                    <p className="text-xl font-black text-success">90-100</p>
                  </div>
                  <div className="px-4 py-2 bg-success text-success-foreground text-sm font-black uppercase shrink-0">
                    EXCELLENT
                  </div>
                  <p className="text-sm font-bold text-muted-foreground flex-1">Perfect record. Can start new groups.</p>
                </div>

                {/* 70-89 */}
                <div className="flex items-center gap-4 p-3 border-2 border-primary/30 bg-primary/5">
                  <div className="w-20 shrink-0">
                    <p className="text-xl font-black text-primary">70-89</p>
                  </div>
                  <div className="px-4 py-2 bg-primary text-primary-foreground text-sm font-black uppercase shrink-0">
                    GOOD
                  </div>
                  <p className="text-sm font-bold text-muted-foreground flex-1">Consistent. Can join most groups.</p>
                </div>

                {/* 50-69 */}
                <div className="flex items-center gap-4 p-3 border-2 border-orange-500/30 bg-orange-500/5">
                  <div className="w-20 shrink-0">
                    <p className="text-xl font-black text-orange-500">50-69</p>
                  </div>
                  <div className="px-4 py-2 bg-orange-500 text-white text-sm font-black uppercase shrink-0">
                    FAIR
                  </div>
                  <p className="text-sm font-bold text-muted-foreground flex-1">Irregular history. Higher deposits.</p>
                </div>

                {/* 0-49 */}
                <div className="flex items-center gap-4 p-3 border-2 border-destructive/30 bg-destructive/5">
                  <div className="w-20 shrink-0">
                    <p className="text-xl font-black text-destructive">0-49</p>
                  </div>
                  <div className="px-4 py-2 bg-destructive text-destructive-foreground text-sm font-black uppercase shrink-0">
                    RISKY
                  </div>
                  <p className="text-sm font-bold text-muted-foreground flex-1">Limited options. May be declined.</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 border-2 border-primary/30">
                <p className="text-sm font-bold">
                  <span className="font-black text-primary">PRO TIP: </span>
                  New members start at 70. Build your score by paying on time consistently!
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 border-2 border-success/20 mb-6">
              <Sparkles className="h-4 w-4 text-success" strokeWidth={3} />
              <span className="text-xs font-black uppercase tracking-wide text-success">
                The Solution
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              How Nalo Fixes Everything
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              4 powerful features that transform your Ajo from chaos to clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Trust Scores (0-100)",
                description: "Quantifiable reliability replaces rumors. See exactly who's trustworthy before they join.",
                details: ["Automatic calculation after each cycle", "Visible to all group members", "Higher scores get priority collection slots"],
              },
              {
                icon: Receipt,
                title: "Transparent Tracking",
                description: "See who paid, who's late, and when collections happen. Upload receipts as proof.",
                details: ["Real-time payment status dashboard", "Automatic status updates", "Downloadable transaction reports"],
              },
              {
                icon: Bell,
                title: "Smart Reminders",
                description: "Automated notifications before and after due dates. No more chasing members.",
                details: ["3 days, 1 day, and due date alerts", "Escalating overdue reminders", "SMS, email & push notifications"],
              },
              {
                icon: Brain,
                title: "AI Risk Assessment",
                description: "Machine learning predicts risks and recommends actions to keep your Ajo healthy.",
                details: ["Weekly group health score", "Early warning for at-risk members", "Optimal group size recommendations"],
              },
            ].map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="border-2 border-success/30 bg-background">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-success/10 border-2 border-success/20 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-success" strokeWidth={3} />
                    </div>
                    <h3 className="text-lg font-black uppercase mb-2">{solution.title}</h3>
                    <p className="text-sm font-bold text-muted-foreground mb-4">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" strokeWidth={3} />
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
      <section id="how-it-works" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              How Digital Ajo Works
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground">
              Set up in 5 minutes, run effortlessly forever.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: UserPlus,
                title: "Create or Join",
                description: "Start a new Ajo or join existing groups with invite codes. Set contribution amount and frequency.",
              },
              {
                step: "02",
                icon: FileText,
                title: "Set Group Rules",
                description: "Define payment deadlines, late penalties, minimum trust scores, and collection rotation order.",
              },
              {
                step: "03",
                icon: Wallet,
                title: "Track Contributions",
                description: "Members pay on schedule and upload receipts. System updates status and calculates trust scores.",
              },
              {
                step: "04",
                icon: Target,
                title: "Collect Your Turn",
                description: "When it's your turn, receive the full pot automatically. Download transaction summary.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative">
                  <div className="p-6 border-2 border-border bg-muted/30 h-full hover:border-success transition-colors">
                    <div className="text-5xl font-black text-success/20 mb-4">{item.step}</div>
                    <div className="w-12 h-12 bg-success/10 border-2 border-success/20 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-success" strokeWidth={3} />
                    </div>
                    <h3 className="text-lg font-black uppercase mb-3">{item.title}</h3>
                    <p className="text-sm font-bold text-muted-foreground">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-success" strokeWidth={3} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              Ajo For Every Situation
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              From friends to business partners, Nalo handles all types of Ajo groups.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Friends & Family",
                members: "8 members",
                contribution: "₦50,000/month",
                pot: "₦400,000",
                cycle: "Every 8 months",
                uses: "Weddings, rent, business capital",
                trustNote: "High trust, but Nalo still tracks for accountability",
              },
              {
                title: "Office Colleagues",
                members: "12 members",
                contribution: "₦30,000/month",
                pot: "₦360,000",
                cycle: "Once per year",
                uses: "School fees, home improvements, vacations",
                trustNote: "Medium trust, scores crucial for new colleagues",
              },
              {
                title: "Community Group",
                members: "20 members",
                contribution: "₦20,000/month",
                pot: "₦400,000",
                cycle: "Every 20 months",
                uses: "Business expansion, medical expenses",
                trustNote: "Low prior trust, scores ESSENTIAL for vetting",
              },
              {
                title: "Business Ajo",
                members: "6 members",
                contribution: "₦500,000/month",
                pot: "₦3,000,000",
                cycle: "Every 6 months",
                uses: "Equipment, inventory, property",
                trustNote: "Critical—only 90+ scores accepted",
              },
            ].map((useCase, index) => (
              <Card key={index} className="border-2 border-border bg-background overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4 bg-primary text-primary-foreground">
                    <h3 className="text-lg font-black uppercase">{useCase.title}</h3>
                    <p className="text-sm font-bold opacity-80">{useCase.members} • {useCase.contribution}</p>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-success/10 border-l-4 border-success">
                        <p className="text-xs font-bold text-muted-foreground uppercase">Pot Size</p>
                        <p className="text-lg font-black text-success">{useCase.pot}</p>
                      </div>
                      <div className="p-3 bg-primary/10 border-l-4 border-primary">
                        <p className="text-xs font-bold text-muted-foreground uppercase">Collection</p>
                        <p className="text-lg font-black">{useCase.cycle}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Common Uses</p>
                      <p className="text-sm font-bold">{useCase.uses}</p>
                    </div>
                    <div className="p-3 bg-muted/50 border-l-4 border-muted-foreground/30">
                      <p className="text-xs font-bold text-muted-foreground">
                        <span className="font-black">Trust Strategy: </span>{useCase.trustNote}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 border-2 border-success/20 mb-6">
              <Star className="h-4 w-4 text-success fill-success" strokeWidth={3} />
              <span className="text-xs font-black uppercase tracking-wide">
                Success Stories
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              Real Groups, Real Results
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Lagos Tech Workers",
                members: 10,
                collected: "₦5,000,000",
                cycles: 4,
                quote: "Zero defaults in 4 cycles. Trust scores made all the difference when vetting new members.",
              },
              {
                name: "Church Women's Group",
                members: 15,
                collected: "₦3,600,000",
                cycles: 2,
                quote: "No more WhatsApp arguments about who paid. Everything is transparent and automatic now.",
              },
              {
                name: "Diaspora Family Ajo",
                members: 8,
                collected: "₦4,800,000",
                cycles: 3,
                quote: "Members in Lagos, London, and Houston. Nalo made distance irrelevant. Best decision ever!",
              },
            ].map((story, index) => (
              <Card key={index} className="border-2 border-border bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-success text-success-foreground flex items-center justify-center font-black text-lg">
                      <Users className="h-6 w-6" strokeWidth={3} />
                    </div>
                    <div>
                      <p className="font-black">{story.name}</p>
                      <p className="text-sm font-bold text-muted-foreground">{story.members} members</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-muted/30">
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase">Total Collected</p>
                      <p className="text-lg font-black text-success">{story.collected}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase">Cycles</p>
                      <p className="text-lg font-black">{story.cycles} completed</p>
                    </div>
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" strokeWidth={2} />
                    <p className="text-sm font-bold text-muted-foreground pl-6 italic">
                      "{story.quote}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              Traditional vs <span className="text-primary">Digital Ajo</span>
            </h2>
          </div>

          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full border-2 border-border">
              <thead>
                <tr className="bg-muted/50 border-b-2 border-border">
                  <th className="p-4 text-left">
                    <p className="text-sm font-black uppercase">Category</p>
                  </th>
                  <th className="p-4 text-center border-l-2 border-border">
                    <p className="text-sm font-black uppercase text-destructive">Traditional</p>
                  </th>
                  <th className="p-4 text-center border-l-2 border-border bg-success/5">
                    <p className="text-sm font-black uppercase text-success">Nalo Digital</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { category: "Payment Tracking", traditional: "Manual notebooks", nalo: "Digital records, auto-backup" },
                  { category: "Member Reliability", traditional: "Rumors and hearsay", nalo: "Trust scores (0-100)" },
                  { category: "Reminders", traditional: "Admin chases everyone", nalo: "Automated notifications" },
                  { category: "Disputes", traditional: "'I paid' arguments", nalo: "Receipt uploads, timestamps" },
                  { category: "New Members", traditional: "'Someone knows them'", nalo: "Trust score verification" },
                  { category: "Late Payments", traditional: "WhatsApp complaints", nalo: "Auto penalties + score drop" },
                  { category: "Risk Monitoring", traditional: "React after defaults", nalo: "AI predicts risks early" },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="p-4">
                      <p className="text-sm font-bold">{row.category}</p>
                    </td>
                    <td className="p-4 text-center border-l-2 border-border">
                      <div className="flex items-center justify-center gap-2">
                        <X className="h-4 w-4 text-destructive shrink-0" strokeWidth={3} />
                        <p className="text-sm font-bold text-muted-foreground">{row.traditional}</p>
                      </div>
                    </td>
                    <td className="p-4 text-center border-l-2 border-border bg-success/5">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success shrink-0" strokeWidth={3} />
                        <p className="text-sm font-bold">{row.nalo}</p>
                      </div>
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
              Ajo Groups FAQ
            </h2>
            <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about digital Ajo
            </p>
          </div>

          <FaqAccordion faqs={faqs} showContactCta={true} />
        </div>
      </section>

      {/* Final CTA */}
      <FeatureCta
        icon={Users}
        title="Start Your Digital Ajo Today"
        description="No more WhatsApp chaos. No more notebook tracking. No more 'trust me bro.' Just transparent, automated Ajo that actually works."
        primaryCta={{
          text: "CREATE YOUR AJO FREE",
          href: "https://app.nalofinance.com/auth/register",
        }}
        secondaryCta={{
          text: "VIEW PRICING",
          href: "/pricing",
        }}
        footnote="Free: 2 groups, 10 members each. Premium: Unlimited groups & advanced features."
      />
    </>
  );
}
