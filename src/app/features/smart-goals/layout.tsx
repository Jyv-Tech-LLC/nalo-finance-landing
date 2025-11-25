import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Goals - SMART Financial Goal Setting & Tracking",
  description:
    "Set and achieve financial goals with Nalo's SMART framework. Track progress for emergency funds, house savings, car purchases, education, and more. AI-powered recommendations.",
  keywords: [
    "financial goals Nigeria",
    "savings goals app",
    "SMART goals finance",
    "emergency fund tracker",
    "house savings Nigeria",
    "goal setting app",
    "savings tracker",
    "financial planning Nigeria",
    "money goals app",
    "wealth building Nigeria",
  ],
  openGraph: {
    title: "Smart Goals - Financial Goal Tracking | Nalo Finance",
    description:
      "Set SMART financial goals. Track progress automatically. Get AI recommendations to achieve goals faster.",
    url: "https://nalofinance.com/features/smart-goals",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Financial Goals - Nalo Finance",
    description:
      "SMART goal framework. Automatic tracking. AI recommendations. Achieve financial freedom.",
  },
  alternates: {
    canonical: "https://nalofinance.com/features/smart-goals",
  },
};

export default function SmartGoalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
