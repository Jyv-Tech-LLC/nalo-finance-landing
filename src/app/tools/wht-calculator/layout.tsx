import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nigeria Withholding Tax Calculator 2025 | WHT Rates & Exemptions",
  description: "Calculate withholding tax on payments in Nigeria. 12 transaction types, resident/non-resident rates, TIN adjustments. SME exemption included. Free WHT calculator.",
  keywords: [
    // Primary keywords
    "Withholding tax calculator Nigeria",
    "WHT calculator Nigeria",
    "withholding tax Nigeria",
    "WHT rates Nigeria 2025",
    "Nigeria withholding tax rates",
    // Transaction types
    "WHT on dividends Nigeria",
    "withholding tax on interest Nigeria",
    "WHT on royalties Nigeria",
    "withholding tax on rent Nigeria",
    "WHT on commission Nigeria",
    "withholding tax on consultancy Nigeria",
    "WHT on professional services Nigeria",
    "withholding tax on contracts Nigeria",
    "WHT on construction Nigeria",
    "withholding tax on management fees Nigeria",
    "WHT on directors fees Nigeria",
    // Long-tail keywords
    "how to calculate withholding tax Nigeria",
    "how to calculate WHT in Nigeria",
    "Nigeria WHT rates 2025",
    "10% withholding tax Nigeria",
    "5% withholding tax Nigeria",
    // Resident/Non-resident
    "non-resident WHT Nigeria",
    "resident withholding tax Nigeria",
    "foreign WHT rate Nigeria",
    // TIN related
    "WHT without TIN Nigeria",
    "TIN penalty withholding tax",
    "5% additional WHT no TIN",
    // Questions
    "what is withholding tax rate Nigeria",
    "who pays withholding tax Nigeria",
    "WHT exemption Nigeria",
    "how to remit WHT Nigeria",
    // Location
    "Lagos WHT calculator",
    "Nigerian withholding tax online",
    "FIRS WHT rates",
  ],
  alternates: {
    canonical: "https://nalofinance.com/tools/wht-calculator",
  },
  openGraph: {
    title: "Nigeria Withholding Tax Calculator 2025 | WHT Rates",
    description: "Calculate WHT on 12+ payment types in Nigeria. Dividends, interest, rent, consultancy & more. Resident/non-resident rates. Free calculator.",
    url: "https://nalofinance.com/tools/wht-calculator",
    siteName: "Nalo Finance",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "https://nalofinance.com/og/wht-calculator.png",
        width: 1200,
        height: 630,
        alt: "Nigeria Withholding Tax Calculator - WHT Rates & Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nigeria WHT Calculator 2025 | Withholding Tax Rates",
    description: "Calculate withholding tax on payments in Nigeria. 12 transaction types, all rates included. Free WHT calculator.",
    images: ["https://nalofinance.com/og/wht-calculator.png"],
    creator: "@nalofinance",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function WHTCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
