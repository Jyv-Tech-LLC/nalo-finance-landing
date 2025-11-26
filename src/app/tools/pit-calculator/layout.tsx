import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nigeria PAYE Tax Calculator 2025/2026 | Free Personal Income Tax Calculator",
  description: "Calculate your Nigerian personal income tax instantly. Updated for 2026 tax reform with ₦800K tax-free threshold, progressive rates (0-25%), pension, NHIS, NHF & rent relief deductions. 100% free, no signup required.",
  keywords: [
    // Primary keywords
    "Nigeria tax calculator",
    "Nigeria tax calculator 2025",
    "Nigeria tax calculator 2026",
    "PAYE calculator Nigeria",
    "personal income tax calculator Nigeria",
    "salary after tax Nigeria",
    "income tax calculator Nigeria",
    // Long-tail keywords
    "how to calculate PAYE in Nigeria",
    "how to calculate personal income tax Nigeria",
    "Nigeria income tax rates 2025",
    "Nigeria income tax rates 2026",
    "₦800000 tax free Nigeria",
    "800000 naira tax free threshold",
    "Nigeria tax reform calculator",
    "PAYE tax bands Nigeria",
    "progressive tax rates Nigeria",
    // Relief & deductions
    "pension tax relief Nigeria",
    "NHIS tax deduction Nigeria",
    "NHF tax relief Nigeria",
    "rent relief Nigeria tax",
    "consolidated relief allowance Nigeria",
    // Questions people ask
    "what is the tax free threshold in Nigeria",
    "how much tax do I pay on my salary Nigeria",
    "salary calculator Nigeria after tax",
    "net salary calculator Nigeria",
    "take home pay calculator Nigeria",
    // Location variations
    "Lagos tax calculator",
    "Nigerian tax calculator online",
    "FIRS tax calculator",
  ],
  alternates: {
    canonical: "https://nalofinance.com/tools/pit-calculator",
  },
  openGraph: {
    title: "Nigeria PAYE Tax Calculator 2025/2026 | Free & Instant",
    description: "Calculate your Nigerian personal income tax instantly. ₦800K tax-free threshold, progressive rates 0-25%. Free calculator, no signup.",
    url: "https://nalofinance.com/tools/pit-calculator",
    siteName: "Nalo Finance",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "https://nalofinance.com/og/pit-calculator.png",
        width: 1200,
        height: 630,
        alt: "Nigeria PAYE Tax Calculator - Calculate Your Tax Free",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nigeria PAYE Tax Calculator 2025/2026 | Free",
    description: "Calculate Nigerian personal income tax instantly. ₦800K tax-free, progressive rates 0-25%. Updated for 2026 tax reform.",
    images: ["https://nalofinance.com/og/pit-calculator.png"],
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
  other: {
    "google-site-verification": "your-verification-code",
  },
};

export default function PITCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
