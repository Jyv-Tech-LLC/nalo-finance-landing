import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Free & Premium Plans for Every Nigerian",
  description:
    "Choose your Nalo Finance plan. Free forever with 5 bank accounts, 2 Ajo groups, and all tax calculators. Premium at ₦10,000/month for unlimited everything, AI optimization, and priority support.",
  keywords: [
    "Nalo Finance pricing",
    "personal finance app price Nigeria",
    "free finance app Nigeria",
    "premium finance features",
    "Ajo app pricing",
    "budget app cost Nigeria",
    "₦10000 finance app",
    "free tax calculator Nigeria",
  ],
  openGraph: {
    title: "Pricing - Nalo Finance",
    description:
      "Free forever or Premium at ₦10,000/month. Ajo groups, tax calculators, budgeting, Oracle AI - all included.",
    url: "https://nalofinance.com/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - Nalo Finance",
    description:
      "Free forever or Premium at ₦10,000/month. Everything you need for financial freedom.",
  },
  alternates: {
    canonical: "https://nalofinance.com/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
