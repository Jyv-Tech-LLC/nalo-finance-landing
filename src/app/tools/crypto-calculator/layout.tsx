import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nigeria Crypto Tax Calculator 2025 | Bitcoin & Cryptocurrency CGT",
  description: "Calculate capital gains tax on cryptocurrency in Nigeria. Bitcoin, Ethereum, USDT and all crypto. ₦800K annual exemption, small disposal exemption (< ₦10M). 10% CGT rate. Free calculator.",
  keywords: [
    // Primary keywords
    "Crypto tax Nigeria",
    "cryptocurrency tax Nigeria",
    "Bitcoin tax Nigeria",
    "crypto CGT Nigeria",
    "capital gains tax crypto Nigeria",
    // Specific coins
    "Bitcoin tax calculator Nigeria",
    "Ethereum tax Nigeria",
    "USDT tax Nigeria",
    "BTC tax Nigeria",
    "ETH tax Nigeria",
    // Long-tail keywords
    "how to calculate crypto tax Nigeria",
    "how to calculate Bitcoin tax Nigeria",
    "crypto capital gains Nigeria 2025",
    "cryptocurrency tax rate Nigeria",
    "10% CGT crypto Nigeria",
    // Exemptions
    "crypto tax exemption Nigeria",
    "₦800000 crypto exemption",
    "small disposal exemption crypto Nigeria",
    "₦10 million disposal exemption",
    // Questions
    "is crypto taxed in Nigeria",
    "do I pay tax on Bitcoin Nigeria",
    "how much tax on crypto gains Nigeria",
    "crypto tax free threshold Nigeria",
    "is Bitcoin legal in Nigeria",
    // Trading related
    "crypto trading tax Nigeria",
    "Binance tax Nigeria",
    "crypto to Naira tax",
    "peer to peer crypto tax Nigeria",
    // Location
    "Lagos crypto tax",
    "Nigerian crypto tax calculator online",
  ],
  alternates: {
    canonical: "https://nalofinance.com/tools/crypto-calculator",
  },
  openGraph: {
    title: "Nigeria Crypto Tax Calculator 2025 | Bitcoin CGT Calculator",
    description: "Calculate capital gains tax on Bitcoin & crypto in Nigeria. ₦800K exemption, 10% CGT rate. Check if you qualify for exemptions. Free.",
    url: "https://nalofinance.com/tools/crypto-calculator",
    siteName: "Nalo Finance",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "https://nalofinance.com/og/crypto-calculator.png",
        width: 1200,
        height: 630,
        alt: "Nigeria Crypto Tax Calculator - Calculate Bitcoin & Cryptocurrency CGT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nigeria Crypto Tax Calculator 2025 | Bitcoin CGT",
    description: "Calculate crypto capital gains tax in Nigeria. ₦800K exemption, 10% rate. Bitcoin, Ethereum & all crypto. Free calculator.",
    images: ["https://nalofinance.com/og/crypto-calculator.png"],
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

export default function CryptoCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
