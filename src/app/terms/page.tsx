import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Scale, AlertTriangle, CheckCircle, ChevronRight, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - User Agreement & Platform Rules",
  description:
    "Read Nalo Finance's terms of service. Understand your rights and responsibilities when using Nigeria's leading personal finance platform. Fair, transparent, user-friendly terms.",
  keywords: [
    "Nalo Finance terms",
    "terms of service",
    "user agreement Nigeria",
    "fintech terms",
    "platform rules",
    "service agreement",
  ],
  openGraph: {
    title: "Terms of Service - Nalo Finance",
    description:
      "Fair, transparent, user-friendly terms. Understand your rights when using Nalo Finance.",
    url: "https://nalofinance.com/terms",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service - Nalo Finance",
    description: "Fair, transparent, user-friendly terms for Nigeria's finance platform.",
  },
  alternates: {
    canonical: "https://nalofinance.com/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-32 pb-16 md:pt-40 md:pb-24 border-b-4 border-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20 mb-6">
              <FileText className="h-4 w-4 text-primary" strokeWidth={3} />
              <span className="text-xs font-black uppercase tracking-wide">
                Last Updated: January 2025
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
              Terms of Service
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-bold text-muted-foreground mb-8 max-w-2xl">
              The legal agreement between you and Nalo Finance. Read this carefully—it governs your use of our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-8">
              The Plain English Version
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: CheckCircle,
                  title: "You Can:",
                  items: [
                    "Use Nalo for personal finance management",
                    "Track unlimited transactions (Free: 3 streams, Premium: unlimited)",
                    "Cancel your Premium subscription anytime",
                    "Export your data whenever you want",
                  ],
                },
                {
                  icon: AlertTriangle,
                  title: "You Can't:",
                  items: [
                    "Use Nalo for illegal activities",
                    "Share your account with others",
                    "Reverse-engineer or copy our software",
                    "Abuse our systems or violate security",
                  ],
                },
              ].map((section, index) => {
                const Icon = section.icon;
                return (
                  <div key={index} className="p-6 bg-background border-2 border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 border-2 border-primary/20 flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-primary" strokeWidth={3} />
                      </div>
                      <h3 className="text-lg font-black uppercase">{section.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="text-sm font-bold text-muted-foreground flex items-start gap-2">
                          <span className="text-primary font-black mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Full Terms */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                1. Agreement to Terms
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <p>
                  By accessing or using Nalo Finance ("Nalo," "we," "us," "our"), you agree to be bound by these Terms
                  of Service and our Privacy Policy. If you disagree with any part of these terms, you may not use our service.
                </p>
                <p>
                  These terms apply to all users, whether you use the Free or Premium plan.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                2. Eligibility
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <p>To use Nalo, you must:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Be at least 18 years old</li>
                  <li>Provide accurate, complete registration information</li>
                  <li>Be a resident of Nigeria (or authorized to use the service from your location)</li>
                  <li>Not be prohibited from using the service under Nigerian law</li>
                </ul>
                <p className="mt-4">
                  By creating an account, you represent and warrant that you meet these requirements.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                3. Account Responsibilities
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <p className="text-foreground font-black">You are responsible for:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Maintaining the security of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized access</li>
                  <li>Keeping your account information accurate and up-to-date</li>
                </ul>

                <div className="p-4 bg-destructive/10 border-l-4 border-destructive mt-6">
                  <p className="text-sm font-black text-destructive">
                    DO NOT share your password. DO NOT use the same password across multiple sites. We are NOT liable for losses due to compromised credentials.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                4. Acceptable Use
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <p className="text-foreground font-black">You agree NOT to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Use Nalo for illegal purposes or to violate any laws</li>
                  <li>Upload malware, viruses, or malicious code</li>
                  <li>Attempt to hack, reverse-engineer, or exploit our systems</li>
                  <li>Scrape, crawl, or data-mine our platform</li>
                  <li>Impersonate others or misrepresent your identity</li>
                  <li>Share your account with multiple users</li>
                  <li>Abuse our support team or other users</li>
                  <li>Use bots, scripts, or automated tools without permission</li>
                </ul>

                <p className="mt-4">
                  <span className="text-foreground">Violations may result in account suspension or termination without refund.</span>
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                5. Subscription & Payment
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <div>
                  <h3 className="text-lg font-black text-foreground mb-2">Free Plan</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Free forever, no credit card required</li>
                    <li>Limited features (5 accounts, 3 income streams, 2 Ajo groups)</li>
                    <li>We may modify Free plan features with 30 days' notice</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-black text-foreground mb-2">Premium Plan (₦10,000/month)</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Billed monthly via Paystack (PCI DSS compliant)</li>
                    <li>Auto-renews unless you cancel (cancel anytime, no penalties)</li>
                    <li>Cancellation takes effect at end of current billing period</li>
                    <li>No refunds for partial months (you retain access until period ends)</li>
                    <li>Price changes apply to future billing cycles (30 days' notice)</li>
                  </ul>
                </div>

                <div className="p-4 bg-primary/10 border-l-4 border-primary mt-6">
                  <p className="text-sm font-black">
                    To cancel Premium: Go to Settings → Billing → Cancel Subscription. You'll retain Premium access until your current period ends.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                6. Intellectual Property
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <p>
                  Nalo Finance owns all rights to our software, design, algorithms, branding, and content. You receive a
                  limited, non-exclusive, non-transferable license to use Nalo for personal finance management.
                </p>

                <p className="text-foreground">
                  Your financial data remains yours. You grant us a license to process your data to provide our services.
                  You can export or delete your data anytime.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                7. Disclaimers & Limitations
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <div className="p-6 bg-warning/10 border-2 border-warning">
                  <h3 className="text-lg font-black text-foreground mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-warning" strokeWidth={3} />
                    IMPORTANT DISCLAIMERS
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <span className="text-foreground font-black">Not Financial Advice:</span> Nalo provides tools and insights, NOT professional
                      financial, tax, or investment advice. Consult a licensed advisor for personalized guidance.
                    </li>
                    <li>
                      <span className="text-foreground font-black">No Guarantees:</span> We don't guarantee tax savings, investment returns, or specific
                      financial outcomes. Results depend on your individual situation and decisions.
                    </li>
                    <li>
                      <span className="text-foreground font-black">Tax Information:</span> Our 2026 tax calculations are based on publicly available laws and
                      regulations. Always verify with FIRS or a tax professional before filing.
                    </li>
                    <li>
                      <span className="text-foreground font-black">AI Limitations:</span> Oracle AI provides suggestions based on patterns and data. It may
                      make errors. Use your judgment.
                    </li>
                    <li>
                      <span className="text-foreground font-black">Service Availability:</span> We strive for 99.9% uptime but don't guarantee uninterrupted
                      access. We're not liable for downtime or data loss (though we backup daily).
                    </li>
                  </ul>
                </div>

                <p className="mt-6 uppercase text-foreground font-black">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, NALO IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                8. Limitation of Liability
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <p>
                  <span className="text-foreground font-black">Nalo, its founders, employees, and partners are NOT liable for:</span>
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Financial losses resulting from your use of Nalo</li>
                  <li>Tax penalties, audit fees, or incorrect filings</li>
                  <li>Ajo group disputes or member defaults</li>
                  <li>Data breaches caused by your compromised credentials</li>
                  <li>Third-party service failures (payment processors, cloud providers)</li>
                  <li>Indirect, incidental, or consequential damages</li>
                </ul>

                <p className="mt-4">
                  <span className="text-foreground">Our total liability is limited to the amount you paid us in the past 12 months (max ₦60,000 for Premium users).</span>
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                9. Termination
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <div>
                  <h3 className="text-lg font-black text-foreground mb-2">By You</h3>
                  <p>
                    You can delete your account anytime (Settings → Account → Delete Account). All data will be permanently
                    deleted within 30 days. Premium subscriptions must be cancelled separately to stop future charges.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-black text-foreground mb-2">By Us</h3>
                  <p>
                    We may suspend or terminate your account if you violate these terms, engage in fraud, or abuse our systems.
                    Premium users will receive pro-rated refunds for unused months (except in cases of fraud or abuse).
                  </p>
                </div>
              </div>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                10. Changes to Terms
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <p>
                  We may update these terms as Nalo evolves. Material changes will be communicated via email and in-app
                  notification 30 days before taking effect. Continued use after 30 days means you accept the new terms.
                </p>
                <p>
                  If you disagree with changes, you may delete your account before they take effect.
                </p>
              </div>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                11. Governing Law & Disputes
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <p>
                  These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes will be resolved
                  through arbitration in Lagos, Nigeria, under the Arbitration and Conciliation Act.
                </p>
                <p>
                  Before arbitration, we encourage you to contact us at <a href="mailto:legal@nalofinance.com" className="text-primary hover:underline">legal@nalofinance.com</a> to resolve issues informally.
                </p>
              </div>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                12. Contact Us
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <p>Questions about these terms? Contact us:</p>
                <div className="p-6 bg-muted/30 border-2 border-border mt-4">
                  <p className="flex items-center gap-2 mb-2">
                    <Mail className="h-5 w-5 text-primary" strokeWidth={3} />
                    <span className="text-foreground">Legal Team:</span>
                    <a href="mailto:legal@nalofinance.com" className="text-primary hover:underline">legal@nalofinance.com</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" strokeWidth={3} />
                    <span className="text-foreground">General Inquiries:</span>
                    <a href="mailto:hello@nalofinance.com" className="text-primary hover:underline">hello@nalofinance.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Scale className="h-12 w-12 mx-auto mb-6" strokeWidth={3} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl font-bold mb-8 opacity-90">
              Now that you understand the terms, join 10,000+ Nigerians taking control of their finances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://app.nalofinance.com/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto font-black text-base px-8 border-2 bg-white text-primary hover:bg-white/90"
                >
                  GET STARTED FREE
                  <ChevronRight className="ml-2 h-5 w-5" strokeWidth={3} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto font-black text-base px-8 border-2 border-white text-white hover:bg-white/10"
                >
                  CONTACT US
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
