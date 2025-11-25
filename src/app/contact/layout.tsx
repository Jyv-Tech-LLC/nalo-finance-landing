import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Nalo Finance",
  description:
    "Have questions about Nalo Finance? Need support with Ajo groups, tax calculations, or budgeting? Contact our team at hello@nalofinance.com. We respond within 24 hours.",
  keywords: [
    "contact Nalo Finance",
    "Nalo Finance support",
    "fintech customer service Nigeria",
    "hello@nalofinance.com",
    "Nalo Finance help",
    "finance app support",
  ],
  openGraph: {
    title: "Contact Us - Nalo Finance",
    description:
      "Questions? Feedback? We're here to help. Reach out at hello@nalofinance.com or use our contact form.",
    url: "https://nalofinance.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Us - Nalo Finance",
    description: "Questions? Feedback? We're here to help. Response within 24 hours.",
  },
  alternates: {
    canonical: "https://nalofinance.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
