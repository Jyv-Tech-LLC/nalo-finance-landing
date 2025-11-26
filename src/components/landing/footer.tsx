import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { Mail, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "How It Works", href: "#how-it-works" },
  ],
  features: [
    { label: "Ajo Groups", href: "/features/ajo-groups" },
    { label: "Tax Center", href: "/features/tax-center" },
    { label: "Budgeting", href: "/features/budgeting" },
    { label: "Smart Goals", href: "/features/smart-goals" },
    { label: "Financial Guide", href: "/features/financial-guide" },
    { label: "Income Streams", href: "/features/income-streams" },
  ],
  freeTools: [
    { label: "All Free Tools", href: "/tools" },
    { label: "PIT Calculator", href: "/tools/pit-calculator" },
    { label: "CIT Calculator", href: "/tools/cit-calculator" },
    { label: "Crypto Tax Calculator", href: "/tools/crypto-calculator" },
    { label: "WHT Calculator", href: "/tools/wht-calculator" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/nalofinance", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/nalofinance", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/nalofinance", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t-4 border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center">
              <Logo size={40} />
            </Link>
            <p className="text-sm font-bold text-muted-foreground max-w-sm">
              The all-in-one personal finance platform for Nigerians. Manage Ajo groups, optimize taxes, track income streams, and achieve financial freedom.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary/10 border-2 border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-colors"
                  >
                    <Icon className="h-5 w-5 text-primary" strokeWidth={3} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wide mb-4 border-b-2 border-border pb-2">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wide mb-4 border-b-2 border-border pb-2">
              Features
            </h3>
            <ul className="space-y-3">
              {footerLinks.features.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Free Tools Links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wide mb-4 border-b-2 border-primary pb-2 text-primary">
              Free Tools
            </h3>
            <ul className="space-y-3">
              {footerLinks.freeTools.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wide mb-4 border-b-2 border-border pb-2">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-6 border-y-2 border-border mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" strokeWidth={3} />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase">Get in touch</p>
                <a
                  href="mailto:hello@nalofinance.com"
                  className="text-sm font-black hover:text-primary transition-colors"
                >
                  hello@nalofinance.com
                </a>
              </div>
            </div>
            <Link
              href="https://app.nalofinance.com/auth/register"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase text-sm transition-colors"
            >
              Get Started Free
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-muted-foreground">
          <p>© {new Date().getFullYear()} Nalo Finance. All rights reserved.</p>
          <p className="text-center sm:text-right">
            A product of{" "}
            <a
              href="https://tantainnovatives.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-black"
            >
              Tanta Innovative Limited
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
