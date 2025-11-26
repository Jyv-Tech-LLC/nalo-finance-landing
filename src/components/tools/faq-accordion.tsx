"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title?: string;
  faqs: FAQItem[];
  accentColor?: string;
}

export function FAQAccordion({
  title = "Frequently Asked Questions",
  faqs,
  accentColor = "primary"
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-6">
      <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">
        {title}
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-2 border-border bg-background overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
            >
              <span className="font-bold text-sm md:text-base pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 flex-shrink-0 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                strokeWidth={3}
              />
            </button>

            <div
              className={`transition-all duration-200 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className={`p-4 pt-0 border-t-2 border-border bg-muted/20`}>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
