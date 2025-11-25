import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oracle AI - Your Personal Financial Advisor",
  description:
    "Meet Oracle AI, your Nigerian-context financial advisor. Ask anything about taxes, budgeting, investing, Ajo groups, and more. Trained on Nigerian financial realities, not generic American advice.",
  keywords: [
    "AI financial advisor Nigeria",
    "Oracle AI Nalo",
    "personal finance AI",
    "Nigerian financial advice",
    "AI money advisor",
    "chatbot finance Nigeria",
    "automated financial planning",
    "AI investment advice Nigeria",
    "financial assistant",
    "smart money advisor",
  ],
  openGraph: {
    title: "Oracle AI - Your Financial Guide | Nalo Finance",
    description:
      "AI trained on Nigerian financial realities. Ask about taxes, budgeting, investing, Ajo - get personalized advice based on YOUR data.",
    url: "https://nalofinance.com/features/financial-guide",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oracle AI - Nigerian Financial Advisor",
    description:
      "AI that understands Naira, Nigerian banks, and local investing. Not generic American advice.",
  },
  alternates: {
    canonical: "https://nalofinance.com/features/financial-guide",
  },
};

export default function FinancialGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
