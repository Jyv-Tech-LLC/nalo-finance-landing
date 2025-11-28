import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, Database, Users, Mail, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - How We Protect Your Financial Data",
  description:
    "Your privacy is sacred at Nalo Finance. Learn how we protect your financial data with bank-level encryption (AES-256, TLS 1.3), zero data selling policy, and full user control.",
  keywords: [
    "Nalo Finance privacy",
    "financial data protection",
    "bank-level security",
    "data encryption Nigeria",
    "privacy policy fintech",
    "NDPR compliance",
    "data protection Nigeria",
  ],
  openGraph: {
    title: "Privacy Policy - Nalo Finance",
    description:
      "Bank-level security. Zero data selling. Full user control. Learn how Nalo Finance protects your financial data.",
    url: "https://nalofinance.com/privacy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - Nalo Finance",
    description: "Bank-level security. Zero data selling. Full user control.",
  },
  alternates: {
    canonical: "https://nalofinance.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-32 pb-16 md:pt-40 md:pb-24 border-b-4 border-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20 mb-6">
              <Shield className="h-4 w-4 text-primary" strokeWidth={3} />
              <span className="text-xs font-black uppercase tracking-wide">
                Last Updated: January 2025
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
              Privacy Policy
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-bold text-muted-foreground mb-8 max-w-2xl">
              Your privacy is sacred. This policy explains how we collect, use, protect, and respect
              your personal and financial data.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-8">
              The TL;DR
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Lock,
                  title: "Bank-Level Security",
                  description: "All data encrypted in transit (TLS 1.3) and at rest (AES-256). Zero plaintext storage of sensitive info.",
                },
                {
                  icon: Eye,
                  title: "Zero Data Selling",
                  description: "We will NEVER sell your data to third parties. Your financial info is yours alone.",
                },
                {
                  icon: Database,
                  title: "Minimal Data Collection",
                  description: "We only collect what's necessary to provide our service. No tracking, no profiling, no creepiness.",
                },
                {
                  icon: Users,
                  title: "You're in Control",
                  description: "Export your data anytime. Delete your account anytime. Full transparency, full control.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="p-6 bg-background border-2 border-border">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 border-2 border-primary/20 flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-primary" strokeWidth={3} />
                      </div>
                      <div>
                        <h3 className="text-base font-black uppercase mb-2">{item.title}</h3>
                        <p className="text-sm font-bold text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Full Policy */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                1. Information We Collect
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <div>
                  <h3 className="text-lg font-black text-foreground mb-2">Account Information</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Name, email address, phone number (for account creation)</li>
                    <li>Password (hashed with bcrypt, never stored in plaintext)</li>
                    <li>Profile photo (optional, stored securely)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-black text-foreground mb-2">Financial Information</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Bank account names and balances (you enter manually, we don't store credentials)</li>
                    <li>Transaction data (income, expenses, categories)</li>
                    <li>Budget allocations and goals</li>
                    <li>Ajo group details (names, members, payment history)</li>
                    <li>Income stream data and performance metrics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-black text-foreground mb-2">Usage Data</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Pages visited, features used (to improve product)</li>
                    <li>Device type, browser, operating system (for compatibility)</li>
                    <li>IP address (for security and fraud prevention)</li>
                  </ul>
                </div>

                <div className="p-4 bg-success/10 border-l-4 border-success mt-6">
                  <p className="text-sm font-black text-success">
                    IMPORTANT: We do NOT store your bank login credentials. We do NOT automatically connect to your bank accounts. You manually enter transactions.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                2. How We Use Your Information
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <p>We use your data ONLY to provide and improve Nalo Finance services:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><span className="text-foreground">Provide core features:</span> Budgeting, tracking, Ajo groups, tax calculations, income analysis</li>
                  <li><span className="text-foreground">AI recommendations:</span> Personalized financial insights (processed locally or via encrypted APIs)</li>
                  <li><span className="text-foreground">Customer support:</span> Respond to inquiries, troubleshoot issues</li>
                  <li><span className="text-foreground">Security:</span> Detect fraud, prevent unauthorized access</li>
                  <li><span className="text-foreground">Product improvements:</span> Analyze usage patterns (anonymized) to build better features</li>
                  <li><span className="text-foreground">Communications:</span> Send important updates, security alerts, feature announcements (you can opt out)</li>
                </ul>

                <div className="p-4 bg-destructive/10 border-l-4 border-destructive mt-6">
                  <p className="text-sm font-black text-destructive">
                    WE WILL NEVER: Sell your data to third parties • Use your data for advertising • Share financial details without consent • Track you across other websites
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                3. Data Security
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <p>We take security extremely seriously. Here's how we protect your data:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><span className="text-foreground">Encryption in transit:</span> All data transmitted via TLS 1.3 (bank-grade encryption)</li>
                  <li><span className="text-foreground">Encryption at rest:</span> Database encrypted with AES-256</li>
                  <li><span className="text-foreground">Password security:</span> Hashed with bcrypt (industry standard), salted, never reversible</li>
                  <li><span className="text-foreground">Access controls:</span> Role-based permissions, principle of least privilege</li>
                  <li><span className="text-foreground">Regular audits:</span> Quarterly security reviews and penetration testing</li>
                  <li><span className="text-foreground">Backups:</span> Daily encrypted backups, stored in separate locations</li>
                  <li><span className="text-foreground">Monitoring:</span> 24/7 intrusion detection and alerting</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                4. Data Sharing & Third Parties
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <p>We share your data in ONLY these limited circumstances:</p>

                <div>
                  <h3 className="text-lg font-black text-foreground mb-2">Service Providers</h3>
                  <p className="mb-2">We work with trusted third parties to operate Nalo:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><span className="text-foreground">Cloud hosting:</span> AWS Nigeria (data stored in Nigerian data centers when possible)</li>
                    <li><span className="text-foreground">Email service:</span> For transactional emails (account verification, password resets)</li>
                    <li><span className="text-foreground">Payment processor:</span> For Premium subscriptions (Paystack - PCI DSS compliant)</li>
                  </ul>
                  <p className="mt-2">All third parties are bound by strict data protection agreements.</p>
                </div>

                <div>
                  <h3 className="text-lg font-black text-foreground mb-2">Legal Requirements</h3>
                  <p>We may disclose data if required by Nigerian law, court order, or to protect our rights and safety. We will notify you unless prohibited by law.</p>
                </div>

                <div>
                  <h3 className="text-lg font-black text-foreground mb-2">Business Transfers</h3>
                  <p>If Nalo is acquired or merged, your data may transfer to the new entity. You'll be notified and can delete your account if you disagree.</p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                5. Your Rights & Control
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <p>You have full control over your data:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><span className="text-foreground">Access:</span> View all data we have about you (Settings → Privacy → Download Data)</li>
                  <li><span className="text-foreground">Export:</span> Download your data in CSV/JSON format anytime</li>
                  <li><span className="text-foreground">Correction:</span> Update inaccurate information in your account settings</li>
                  <li><span className="text-foreground">Deletion:</span> Delete your account and all data (Settings → Account → Delete Account)</li>
                  <li><span className="text-foreground">Opt-out:</span> Unsubscribe from marketing emails (Settings → Notifications)</li>
                  <li><span className="text-foreground">Portability:</span> Take your data to another service</li>
                </ul>

                <div className="p-4 bg-primary/10 border-l-4 border-primary mt-6">
                  <p className="text-sm font-black">
                    To exercise these rights, email <a href="mailto:privacy@nalofinance.com" className="text-primary hover:underline">privacy@nalofinance.com</a> or use in-app settings.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                6. Data Retention
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <ul className="list-disc list-inside space-y-2">
                  <li><span className="text-foreground">Active accounts:</span> Data retained as long as your account is active</li>
                  <li><span className="text-foreground">Deleted accounts:</span> Data permanently deleted within 30 days (except records required by law)</li>
                  <li><span className="text-foreground">Backups:</span> Deleted data removed from backups within 90 days</li>
                  <li><span className="text-foreground">Legal holds:</span> Data may be retained longer if required by law or for dispute resolution</li>
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                7. Cookies & Tracking
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <p>We use minimal cookies:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><span className="text-foreground">Essential cookies:</span> Keep you logged in, remember preferences (required for service)</li>
                  <li><span className="text-foreground">Analytics cookies:</span> Understand how users interact with Nalo (anonymized, can be disabled)</li>
                </ul>
                <p className="mt-2">We do NOT use advertising cookies or third-party tracking.</p>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                8. Children's Privacy
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <p>Nalo Finance is not intended for users under 18. We do not knowingly collect data from children. If you believe a child has created an account, please contact us immediately at <a href="mailto:privacy@nalofinance.com" className="text-primary hover:underline">privacy@nalofinance.com</a>.</p>
              </div>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                9. Changes to This Policy
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <p>We may update this policy as Nalo evolves. When we make material changes:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>We'll notify you via email and in-app notification</li>
                  <li>We'll update the "Last Updated" date at the top</li>
                  <li>You'll have 30 days to review changes before they take effect</li>
                  <li>Continued use after 30 days means you accept the new policy</li>
                </ul>
              </div>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 border-l-4 border-primary pl-4">
                10. Contact Us
              </h2>
              <div className="space-y-4 text-base font-bold text-muted-foreground pl-4">
                <p>Questions about privacy? We're here to help:</p>
                <div className="p-6 bg-muted/30 border-2 border-border mt-4">
                  <p className="flex items-center gap-2 mb-2">
                    <Mail className="h-5 w-5 text-primary" strokeWidth={3} />
                    <span className="text-foreground">Privacy Team:</span>
                    <a href="mailto:privacy@nalofinance.com" className="text-primary hover:underline">privacy@nalofinance.com</a>
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
            <Shield className="h-12 w-12 mx-auto mb-6" strokeWidth={3} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6">
              Your Privacy is Our Priority
            </h2>
            <p className="text-lg md:text-xl font-bold mb-8 opacity-90">
              Start using Nalo with confidence. Your financial data is secure, private, and under your control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://app.nalofinance.com/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto font-black text-base px-8 border-2 bg-white text-primary hover:bg-white/90"
                >
                  GET STARTED
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
