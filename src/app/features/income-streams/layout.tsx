import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Income Streams - Track All Your Money Sources",
  description:
    "Track salary, freelance, side hustles, investments, and passive income in one place. AI Performance Scores rate each stream. Optimize your income portfolio with Nalo Finance.",
  keywords: [
    "income tracker Nigeria",
    "side hustle tracker",
    "multiple income streams",
    "freelance income tracker",
    "passive income Nigeria",
    "salary tracker",
    "income portfolio",
    "money sources tracker",
    "Nigerian income management",
    "diversified income",
  ],
  openGraph: {
    title: "Income Streams - Track All Your Money | Nalo Finance",
    description:
      "Track salary, freelance, side hustles, investments in one dashboard. AI scores each stream. Optimize your income portfolio.",
    url: "https://nalofinance.com/features/income-streams",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Income Streams Tracker - Nalo Finance",
    description:
      "Track all your income sources. AI Performance Scores. Optimize your money portfolio.",
  },
  alternates: {
    canonical: "https://nalofinance.com/features/income-streams",
  },
};

export default function IncomeStreamsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
