import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Zap,
  RefreshCw,
  CheckCircle,
  ArrowRight,
  Link2,
  Wallet,
} from "lucide-react";

export function BankConnectSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border-2 border-white/20 mb-6">
                <Zap className="h-4 w-4" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide">
                  Killer Feature
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
                Connect Your Bank, Track Automatically
              </h2>
              <p className="text-lg md:text-xl font-bold opacity-90">
                Link your Nigerian bank accounts and watch transactions sync automatically.
                No more manual entry. No more forgotten expenses.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                {
                  icon: Link2,
                  title: "One-Click Bank Linking",
                  description: "Securely connect any Nigerian bank in under 60 seconds via Mono",
                },
                {
                  icon: RefreshCw,
                  title: "Real-Time Transaction Sync",
                  description: "Transactions appear automatically as they happen. Always up to date.",
                },
                {
                  icon: Building2,
                  title: "All Major Banks Supported",
                  description: "GTBank, Access, Zenith, UBA, First Bank, and 20+ more Nigerian banks",
                },
                {
                  icon: Wallet,
                  title: "Multiple Accounts",
                  description: "Link as many bank accounts as you have. Track everything in one place.",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4 items-start p-4 bg-white/5 border-l-4 border-white">
                    <div className="w-10 h-10 bg-white/10 border-2 border-white/20 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5" strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="font-black uppercase text-sm mb-1">{feature.title}</h3>
                      <p className="text-sm font-bold opacity-80">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://app.nalofinance.com/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto font-black text-base px-8 bg-white text-primary hover:bg-white/90 border-2 border-white"
                >
                  CONNECT YOUR BANK
                  <ArrowRight className="ml-2 h-5 w-5" strokeWidth={3} />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="space-y-6">
            {/* Bank Connection Flow */}
            <div className="bg-white/10 border-2 border-white/20 p-6">
              <h3 className="text-lg font-black uppercase mb-6 flex items-center gap-2">
                <Building2 className="h-5 w-5" strokeWidth={3} />
                Connect in 3 Steps
              </h3>

              <div className="space-y-4">
                {[
                  { step: 1, title: "Select Your Bank", desc: "Choose from 20+ Nigerian banks" },
                  { step: 2, title: "Login Securely", desc: "Use your bank credentials via Mono" },
                  { step: 3, title: "Start Tracking", desc: "Transactions sync automatically" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-white text-primary flex items-center justify-center font-black shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-black uppercase text-sm">{item.title}</p>
                      <p className="text-xs font-bold opacity-80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bank Logos */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "GTBank", logo: "/bank-logos/GTbank.svg.png", size: "h-8" },
                { name: "Access Bank", logo: "/bank-logos/access-bank.jpg", size: "h-12" },
                { name: "Zenith Bank", logo: "/bank-logos/zenith-bank.png.webp", size: "h-10" },
                { name: "UBA", logo: "/bank-logos/uba.png", size: "h-12" },
                { name: "First Bank", logo: "/bank-logos/firstbank.png", size: "h-10" },
                { name: "+20 More", logo: null, size: "" },
              ].map((bank, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-3 flex items-center justify-center h-20 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  {bank.logo ? (
                    <img
                      src={bank.logo}
                      alt={bank.name}
                      className={`${bank.size} w-auto object-contain`}
                    />
                  ) : (
                    <span className="text-sm font-black uppercase text-primary">
                      {bank.name}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="p-4 bg-white/5 border-l-4 border-white">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-black">10K+</p>
                  <p className="text-xs font-bold opacity-80 uppercase">Banks Linked</p>
                </div>
                <div>
                  <p className="text-2xl font-black">₦1B+</p>
                  <p className="text-xs font-bold opacity-80 uppercase">Synced</p>
                </div>
                <div>
                  <p className="text-2xl font-black">60s</p>
                  <p className="text-xs font-bold opacity-80 uppercase">To Connect</p>
                </div>
              </div>
            </div>

            {/* Powered by Mono */}
            <div className="flex items-center justify-center gap-2 opacity-80">
              <span className="text-xs font-bold uppercase">Powered by</span>
              <span className="text-sm font-black">Mono</span>
              <CheckCircle className="h-4 w-4 text-success" strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
