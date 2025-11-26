import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Tax Calculators | Nalo Finance - Nigeria 2026 Tax Tools",
  description:
    "Free Nigerian tax calculators for the 2026 tax reform. Calculate Personal Income Tax (PIT), Company Income Tax (CIT), Crypto Tax, and Withholding Tax (WHT) instantly.",
  keywords: [
    "Nigerian tax calculator",
    "PIT calculator Nigeria",
    "personal income tax calculator",
    "company income tax Nigeria",
    "CIT calculator",
    "crypto tax Nigeria",
    "withholding tax calculator",
    "WHT calculator Nigeria",
    "2026 tax reform Nigeria",
    "tax calculator free",
    "FIRS tax calculator",
  ],
  openGraph: {
    title: "Free Tax Calculators | Nalo Finance",
    description:
      "Calculate your Nigerian taxes for free. PIT, CIT, Crypto Tax, and WHT calculators updated for the 2026 tax reform.",
    type: "website",
    locale: "en_NG",
    siteName: "Nalo Finance",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Tax Calculators | Nalo Finance",
    description:
      "Calculate your Nigerian taxes for free. Updated for 2026 tax reform.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
