"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Nalo Finance and who is it for?",
    answer: "Nalo Finance is an all-in-one personal finance platform built specifically for Nigerians. Whether you're managing Ajo groups, calculating taxes under the 2026 reform, tracking multiple income streams, or budgeting your expenses - Nalo helps you take control of your financial life. Perfect for freelancers, small business owners, salary earners, and anyone looking to build wealth.",
  },
  {
    question: "How does the Ajo Groups feature work?",
    answer: "Our Ajo Groups feature digitizes the traditional contribution system. Create or join groups, track contributions automatically, assign trust scores (0-100) to members based on payment history, upload receipts as proof, and eliminate disputes with transparent records. No more WhatsApp confusion or manual notebooks. Everything is organized in one dashboard.",
  },
  {
    question: "Is the Tax Center updated for Nigeria's 2026 tax reform?",
    answer: "Yes! Our Tax Center is fully updated with the latest 2026 tax rates, reliefs, and exemptions. Calculate Personal Income Tax (PIT), Corporate Income Tax (CIT), Cryptocurrency Tax, and Withholding Tax (WHT). The platform automatically accounts for the ₦800,000 tax-free threshold, rent relief up to ₦500,000, and other deductions to help you pay the minimum legally required.",
  },
  {
    question: "What's the difference between Free and Premium plans?",
    answer: "The Free plan includes 5 accounts, basic budgeting, 2 Ajo groups, all 4 tax calculators, and 3 income streams - perfect for getting started. Premium (₦10,000/month) unlocks unlimited accounts, unlimited Ajo groups, AI-powered tax optimization, advanced reports (PDF/CSV), receipt OCR scanning, priority support, and unlimited income streams. Both plans include bank-level security.",
  },
  {
    question: "How does the Hustle Optimizer work?",
    answer: "The Hustle Optimizer analyzes all your income streams and gives each one a performance score (0-100). Based on factors like consistency, growth rate, time investment, and profitability, it recommends which hustles to FOCUS on, which to GROW, which to OPTIMIZE, and which to REVIEW. This AI-powered feature helps you maximize your earning potential by focusing energy where it matters most.",
  },
  {
    question: "Is my financial data secure?",
    answer: "Absolutely. We use bank-level 256-bit encryption for all data transmission and storage. Your information is encrypted at rest and in transit. We never sell your data to third parties. All payment processing is handled through secure, PCI-compliant payment gateways. You can also enable two-factor authentication for extra security. Your trust is our priority.",
  },
  {
    question: "Can I export my financial reports?",
    answer: "Yes! Premium users can export detailed financial reports in PDF and CSV formats. This includes tax reports for filing, budget summaries, income stream analysis, Ajo group transaction histories, and more. Perfect for sharing with accountants, tax consultants, or keeping for your records.",
  },
  {
    question: "Do you have mobile apps?",
    answer: "Mobile apps for iOS and Android are coming soon! We're currently in beta testing. In the meantime, our web app is fully responsive and works great on mobile browsers. You can add it to your home screen for an app-like experience. Sign up to be notified when the apps launch.",
  },
  {
    question: "How do I get started?",
    answer: "Getting started is simple: 1) Sign up free (no credit card required), 2) Connect your finances by adding accounts, creating budgets, or starting an Ajo group, 3) Track your progress with AI-powered insights. You can upgrade to Premium anytime if you need advanced features. Most users are up and running in under 5 minutes.",
  },
  {
    question: "Can I cancel my Premium subscription anytime?",
    answer: "Yes, you can cancel your Premium subscription at any time with no penalties or cancellation fees. Your Premium features will remain active until the end of your current billing period. After that, you'll automatically move to the Free plan and retain access to all free features. You can upgrade again whenever you're ready.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
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
            Everything you need to know about Nalo Finance
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-card border-2 transition-colors ${
                openIndex === index ? "border-primary" : "border-border"
              }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-start justify-between gap-4 p-6 text-left hover:bg-muted/30 transition-colors"
              >
                <span className="text-base md:text-lg font-black uppercase flex-1">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 bg-primary/10 border-2 border-primary/20 flex items-center justify-center shrink-0 transition-colors ${
                  openIndex === index ? "bg-primary border-primary" : ""
                }`}>
                  {openIndex === index ? (
                    <Minus className={`h-4 w-4 ${openIndex === index ? "text-primary-foreground" : "text-primary"}`} strokeWidth={3} />
                  ) : (
                    <Plus className="h-4 w-4 text-primary" strokeWidth={3} />
                  )}
                </div>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t-2 border-border pt-4">
                    <p className="text-sm md:text-base font-bold text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-8 bg-muted/30 border-2 border-border">
          <p className="text-lg font-black uppercase mb-2">Still have questions?</p>
          <p className="text-sm font-bold text-muted-foreground mb-4">
            We're here to help! Get in touch with our support team.
          </p>
          <a
            href="mailto:hello@nalofinance.com"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase text-sm transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
