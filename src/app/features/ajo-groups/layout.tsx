import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ajo Groups - Digital Rotating Savings with Trust Scores",
  description:
    "Manage Ajo (Esusu/Adashe) groups digitally with Nalo Finance. AI-powered Trust Scores (0-100), automated reminders, escrow protection, and default prevention. Join or create groups of any size.",
  keywords: [
    "Ajo app Nigeria",
    "Esusu app",
    "Adashe digital",
    "rotating savings Nigeria",
    "contribution tracker",
    "Ajo trust score",
    "thrift savings app",
    "contributory savings Nigeria",
    "Ajo escrow",
    "digital Ajo management",
  ],
  openGraph: {
    title: "Ajo Groups - Nalo Finance",
    description:
      "Digitize your Ajo/Esusu groups with AI Trust Scores, automated reminders, and escrow protection. Never worry about defaults again.",
    url: "https://nalofinance.com/features/ajo-groups",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajo Groups - Digital Rotating Savings",
    description:
      "AI Trust Scores, automated reminders, escrow protection. The modern way to do Ajo.",
  },
  alternates: {
    canonical: "https://nalofinance.com/features/ajo-groups",
  },
};

export default function AjoGroupsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
