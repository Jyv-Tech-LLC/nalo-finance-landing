import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Center - Nigerian Tax Calculators (2026 Reform Ready)",
  description:
    "Calculate Nigerian taxes with Nalo's Tax Center. PIT (Personal Income Tax), CIT (Corporate Tax), Crypto Tax, and WHT calculators. Updated for 2026 tax reforms with ₦800,000 tax-free threshold.",
  keywords: [
    "Nigeria tax calculator 2026",
    "PIT calculator Nigeria",
    "personal income tax Nigeria",
    "CIT calculator",
    "corporate tax Nigeria",
    "crypto tax Nigeria",
    "WHT calculator",
    "withholding tax Nigeria",
    "Nigerian tax reform 2026",
    "tax-free threshold Nigeria",
    "FIRS tax calculator",
  ],
  openGraph: {
    title: "Tax Center - Nigerian Tax Calculators | Nalo Finance",
    description:
      "PIT, CIT, Crypto, WHT calculators ready for 2026 tax reforms. First ₦800,000 tax-free. AI-powered optimization tips.",
    url: "https://nalofinance.com/features/tax-center",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nigerian Tax Calculators - 2026 Ready",
    description:
      "PIT, CIT, Crypto, WHT calculators. Updated for 2026 reforms. First ₦800,000 tax-free.",
  },
  alternates: {
    canonical: "https://nalofinance.com/features/tax-center",
  },
};

export default function TaxCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
