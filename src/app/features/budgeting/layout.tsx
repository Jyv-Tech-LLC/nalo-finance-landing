import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Budgeting - Zero-Sum Budget Tools for Nigerians",
  description:
    "Master your money with Nalo's zero-sum budgeting. Every Naira gets a job. Track expenses, set category limits, get AI insights, and stop wondering where your money went.",
  keywords: [
    "budget app Nigeria",
    "zero-sum budgeting",
    "expense tracker Nigeria",
    "Naira budget planner",
    "money management Nigeria",
    "spending tracker",
    "Nigerian budget app",
    "personal budget tool",
    "50/30/20 budget Nigeria",
    "envelope budgeting app",
  ],
  openGraph: {
    title: "Budgeting Tools - Nalo Finance",
    description:
      "Zero-sum budgeting where every Naira gets a job. Track expenses, set limits, get AI insights. Stop money from disappearing.",
    url: "https://nalofinance.com/features/budgeting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Budget Like a Pro - Nalo Finance",
    description:
      "Zero-sum budgeting for Nigerians. Every Naira gets a job. AI-powered insights included.",
  },
  alternates: {
    canonical: "https://nalofinance.com/features/budgeting",
  },
};

export default function BudgetingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
