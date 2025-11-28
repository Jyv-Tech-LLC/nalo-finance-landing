import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { HomePageStructuredData } from "@/components/seo/structured-data";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#FFC000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nalofinance.com"),
  title: {
    default: "Nalo Finance - Your Personal Finance Operating System",
    template: "%s | Nalo Finance",
  },
  description:
    "Nigeria's all-in-one personal finance platform. Manage Ajo groups with trust scores, calculate taxes (2026 reform ready), track income streams, budget smarter, and achieve financial goals with Oracle AI.",
  keywords: [
    "personal finance Nigeria",
    "Nigerian finance app",
    "Ajo groups app",
    "Ajo contribution tracker",
    "Esusu app",
    "Nigeria tax calculator 2026",
    "PIT calculator Nigeria",
    "CIT calculator",
    "crypto tax Nigeria",
    "budget app Nigeria",
    "income tracker",
    "side hustle tracker",
    "financial planning Nigeria",
    "savings goals app",
    "AI financial advisor",
    "Oracle AI",
    "Nalo Finance",
    "fintech Nigeria",
    "money management app",
    "expense tracker Nigeria",
  ],
  authors: [{ name: "Nalo Finance", url: "https://nalofinance.com" }],
  creator: "Nalo Finance",
  publisher: "Nalo Finance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://nalofinance.com",
    languages: {
      "en-NG": "https://nalofinance.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://nalofinance.com",
    siteName: "Nalo Finance",
    title: "Nalo Finance - Your Personal Finance Operating System",
    description:
      "Nigeria's all-in-one personal finance platform. Manage Ajo groups, calculate taxes, track income, budget smarter, and achieve financial goals.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Nalo Finance - Your Personal Finance Operating System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nalofinance",
    creator: "@nalofinance",
    title: "Nalo Finance - Your Personal Finance Operating System",
    description:
      "Nigeria's all-in-one personal finance platform. Manage Ajo groups, calculate taxes, track income, and achieve financial goals.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    other: {
      "msvalidate.01": "", // Bing verification
    },
  },
  category: "Finance",
  classification: "Personal Finance Software",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Nalo Finance",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#FFC000",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG" suppressHydrationWarning>
      <head>
        {/* Structured Data for SEO and AI/LLM visibility */}
        <HomePageStructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
