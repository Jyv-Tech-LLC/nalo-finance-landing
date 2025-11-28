import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Smartphone,
  Key,
  Monitor,
  Lock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export function BankSecuritySection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Visual */}
          <div className="space-y-6">
            {/* Security Shield Visual */}
            <div className="relative">
              <div className="bg-card border-4 border-black p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                <div className="flex items-center justify-center mb-8">
                  <div className="relative">
                    <div className="w-32 h-32 bg-primary/10 border-4 border-primary flex items-center justify-center">
                      <Shield className="h-16 w-16 text-primary" strokeWidth={2} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-success border-2 border-black flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" strokeWidth={3} />
                    </div>
                  </div>
                </div>

                {/* Security Features Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Smartphone, label: "2FA Authentication", status: "Enabled" },
                    { icon: Key, label: "Backup Codes", status: "10 Generated" },
                    { icon: Monitor, label: "Active Sessions", status: "2 Devices" },
                    { icon: Lock, label: "IP Whitelist", status: "3 IPs Trusted" },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="p-3 bg-muted/30 border-2 border-border">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="h-4 w-4 text-primary" strokeWidth={3} />
                          <span className="text-xs font-black uppercase">{item.label}</span>
                        </div>
                        <span className="text-xs font-bold text-success">{item.status}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {["256-bit SSL", "SOC 2 Compliant", "NDPR Ready"].map((badge, index) => (
                <div key={index} className="px-4 py-2 bg-primary/5 border-2 border-primary/30">
                  <span className="text-xs font-black uppercase">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20 mb-6">
                <Shield className="h-4 w-4 text-primary" strokeWidth={3} />
                <span className="text-xs font-black uppercase tracking-wide">
                  Bank-Level Security
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
                Your Financial Data Is Sacred
              </h2>
              <p className="text-lg md:text-xl font-bold text-muted-foreground">
                We protect your data like a vault. Multiple layers of security ensure your
                financial information stays private and secure.
              </p>
            </div>

            {/* Security Features List */}
            <div className="space-y-4">
              {[
                {
                  icon: Smartphone,
                  title: "Two-Factor Authentication (2FA)",
                  description: "Use authenticator apps like Google Authenticator or Authy. Plus 10 backup codes for emergencies.",
                },
                {
                  icon: Key,
                  title: "Google & Apple Sign-In",
                  description: "Secure OAuth login with your existing Google or Apple account. No new passwords to remember.",
                },
                {
                  icon: Monitor,
                  title: "Session Management",
                  description: "See all devices logged into your account. Revoke access instantly from any device you don't recognize.",
                },
                {
                  icon: Lock,
                  title: "IP Whitelist",
                  description: "Restrict access to trusted IP addresses only. Perfect for business accounts and extra paranoid users.",
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
                START SECURE
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
