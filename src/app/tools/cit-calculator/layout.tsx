import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nigeria Company Income Tax Calculator 2025 | CIT & SME Exemption Check",
  description: "Free CIT calculator for Nigerian businesses. Check if you qualify for 0% Small Company Exemption (turnover < ₦25M). Updated for 2025/2026 with ₦100M threshold. Calculate corporate tax instantly.",
  keywords: [
    // Primary keywords
    "Company income tax Nigeria",
    "CIT calculator Nigeria",
    "corporate tax calculator Nigeria",
    "company tax Nigeria 2025",
    "Nigeria corporate tax rate",
    // Small company exemption
    "Small Company Exemption Nigeria",
    "SME tax exemption Nigeria",
    "0% CIT Nigeria",
    "small business tax Nigeria",
    "₦25 million exemption Nigeria",
    // Long-tail keywords
    "how to calculate company tax Nigeria",
    "how to calculate CIT in Nigeria",
    "Nigeria company tax rates 2025",
    "Nigeria company tax rates 2026",
    "medium company tax rate Nigeria",
    "large company tax rate Nigeria",
    // Business related
    "startup tax Nigeria",
    "business tax calculator Nigeria",
    "Nigerian business tax 2025",
    "FIRS company tax",
    "30% corporate tax Nigeria",
    "20% company tax Nigeria",
    // Questions
    "what is company income tax rate Nigeria",
    "how much tax does a company pay in Nigeria",
    "is my company exempt from tax Nigeria",
    "small company tax exemption eligibility Nigeria",
    // Location
    "Lagos company tax calculator",
    "Nigerian business tax online",
  ],
  alternates: {
    canonical: "https://nalofinance.com/tools/cit-calculator",
  },
  openGraph: {
    title: "Nigeria Company Income Tax Calculator 2025 | Free CIT Calculator",
    description: "Check SME exemption eligibility & calculate corporate tax. 0% for small companies (< ₦25M), 20% for medium, 30% for large. Free calculator.",
    url: "https://nalofinance.com/tools/cit-calculator",
    siteName: "Nalo Finance",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "https://nalofinance.com/og/cit-calculator.png",
        width: 1200,
        height: 630,
        alt: "Nigeria Company Income Tax Calculator - Check SME Exemption Free",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nigeria CIT Calculator 2025 | SME Exemption Check",
    description: "Free corporate tax calculator. Check if your company qualifies for 0% Small Company Exemption. Updated rates for 2025.",
    images: ["https://nalofinance.com/og/cit-calculator.png"],
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

export default function CITCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
