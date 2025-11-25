"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle, ChevronRight } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
  showContactCta?: boolean;
  contactEmail?: string;
  className?: string;
}

export function FaqAccordion({
  faqs,
  title = "Frequently Asked Questions",
  subtitle,
  showContactCta = true,
  contactEmail = "hello@nalofinance.com",
  className = "",
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={className}>
      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-card border-2 transition-all duration-200 ${
              openIndex === index
                ? "border-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                : "border-border hover:border-primary/50"
            }`}
          >
            {/* Question Button */}
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex items-start justify-between gap-4 p-5 md:p-6 text-left group"
            >
              <div className="flex items-start gap-4 flex-1">
                {/* Question Number */}
                <div className={`w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm transition-colors ${
                  openIndex === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                }`}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <span className="text-sm md:text-base font-black uppercase flex-1 leading-tight">
                  {faq.question}
                </span>
              </div>
              <div className={`w-8 h-8 flex items-center justify-center shrink-0 transition-all duration-200 ${
                openIndex === index
                  ? "bg-primary border-2 border-primary rotate-0"
                  : "bg-transparent border-2 border-border group-hover:border-primary"
              }`}>
                {openIndex === index ? (
                  <Minus className="h-4 w-4 text-primary-foreground" strokeWidth={3} />
                ) : (
                  <Plus className="h-4 w-4 text-primary" strokeWidth={3} />
                )}
              </div>
            </button>

            {/* Answer */}
            <div className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
            }`}>
              <div className="px-5 md:px-6 pb-5 md:pb-6">
                <div className="ml-12 pl-4 border-l-4 border-primary/30">
                  <p className="text-sm font-bold text-muted-foreground leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Still Have Questions CTA */}
      {showContactCta && (
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="p-6 md:p-8 bg-muted/30 border-2 border-border relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 -translate-y-12 translate-x-12" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 border-2 border-primary/20 flex items-center justify-center shrink-0">
                  <HelpCircle className="h-6 w-6 text-primary" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-lg font-black uppercase">Still have questions?</p>
                  <p className="text-sm font-bold text-muted-foreground">
                    We're here to help! Get in touch with our support team.
                  </p>
                </div>
              </div>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase text-sm transition-colors border-2 border-primary hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shrink-0"
              >
                Contact Support
                <ChevronRight className="ml-2 h-4 w-4" strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
