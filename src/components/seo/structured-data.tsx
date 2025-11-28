// JSON-LD Structured Data Components for SEO and AI/LLM Visibility

// Helper to safely stringify JSON-LD
function safeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

// Organization Schema - Company information
export function OrganizationSchema() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://nalofinance.com/#organization",
    name: "Nalo Finance",
    alternateName: "NaloFinance",
    url: "https://nalofinance.com",
    logo: {
      "@type": "ImageObject",
      url: "https://nalofinance.com/icon-512.png",
      width: 512,
      height: 512,
    },
    image: "https://nalofinance.com/opengraph-image",
    description:
      "Nigeria's all-in-one personal finance platform. Manage Ajo groups, calculate taxes, track income streams, budget smarter, and achieve your financial goals with AI-powered insights.",
    foundingDate: "2024",
    founders: [
      {
        "@type": "Person",
        name: "Nalo Finance Team",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@nalofinance.com",
        availableLanguage: ["English"],
        areaServed: "NG",
      },
    ],
    sameAs: [
      "https://twitter.com/nalofinance",
      "https://www.linkedin.com/company/nalofinance",
      "https://www.instagram.com/nalofinance",
      "https://www.facebook.com/nalofinance",
    ],
    slogan: "Your Personal Finance Operating System",
    knowsAbout: [
      "Personal Finance",
      "Ajo Groups",
      "Nigerian Tax Calculator",
      "Budgeting",
      "Income Tracking",
      "Financial Goals",
      "AI Financial Advisor",
    ],
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationData) }}
    />
  );
}

// WebSite Schema - Site-level information
export function WebSiteSchema() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://nalofinance.com/#website",
    url: "https://nalofinance.com",
    name: "Nalo Finance",
    description:
      "Nigeria's all-in-one personal finance platform for Ajo groups, tax calculation, budgeting, and financial planning.",
    publisher: {
      "@id": "https://nalofinance.com/#organization",
    },
    inLanguage: "en-NG",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://nalofinance.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteData) }}
    />
  );
}

// WebApplication Schema - SaaS Product
export function WebApplicationSchema() {
  const appData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": "https://nalofinance.com/#application",
    name: "Nalo Finance",
    url: "https://app.nalofinance.com",
    description:
      "All-in-one personal finance platform for Nigerians. Features include Ajo group management, tax calculators (PIT, CIT, Crypto, WHT), budgeting tools, income stream tracking, smart financial goals, and Oracle AI assistant.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    softwareVersion: "1.0",
    author: {
      "@id": "https://nalofinance.com/#organization",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Free Plan",
        price: "0",
        priceCurrency: "NGN",
        description:
          "5 bank accounts, basic budgeting, 2 Ajo groups, all tax calculators, 3 income streams",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Premium Plan",
        price: "10000",
        priceCurrency: "NGN",
        priceValidUntil: "2025-12-31",
        description:
          "Unlimited everything, AI tax optimization, unlimited Oracle AI, priority support, receipt OCR",
        availability: "https://schema.org/InStock",
        billingIncrement: "P1M",
      },
    ],
    featureList: [
      "Ajo Group Management with Trust Scores",
      "Nigerian Tax Calculator (PIT, CIT, Crypto, WHT)",
      "Zero-Sum Budgeting Tools",
      "Income Stream Tracking & Optimization",
      "SMART Financial Goals",
      "Oracle AI Financial Advisor",
      "Bank Account Integration",
      "Receipt OCR Scanning",
      "Financial Reports & Analytics",
    ],
    screenshot: "https://nalofinance.com/screenshots/dashboard.png",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "10000",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(appData) }}
    />
  );
}

// BreadcrumbList Schema - For navigation
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbData) }}
    />
  );
}

// FAQPage Schema - For FAQ sections
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(faqData) }}
    />
  );
}

// SoftwareApplication Schema - For specific features
interface FeatureSchemaProps {
  name: string;
  description: string;
  url: string;
  category: string;
  features: string[];
}

export function FeatureApplicationSchema({
  name,
  description,
  url,
  category,
  features,
}: FeatureSchemaProps) {
  const featureData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `Nalo Finance - ${name}`,
    description,
    url,
    applicationCategory: category,
    operatingSystem: "Web Browser",
    author: {
      "@id": "https://nalofinance.com/#organization",
    },
    featureList: features,
    isPartOf: {
      "@id": "https://nalofinance.com/#application",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(featureData) }}
    />
  );
}

// WebPage Schema - For individual pages
interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  dateModified?: string;
}

export function WebPageSchema({
  title,
  description,
  url,
  dateModified,
}: WebPageSchemaProps) {
  const pageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: {
      "@id": "https://nalofinance.com/#website",
    },
    about: {
      "@id": "https://nalofinance.com/#organization",
    },
    dateModified: dateModified || new Date().toISOString(),
    inLanguage: "en-NG",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(pageData) }}
    />
  );
}

// Service Schema - For describing services
export function FinancialServiceSchema() {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": "https://nalofinance.com/#service",
    name: "Nalo Finance",
    description:
      "Personal finance management platform offering Ajo group management, tax calculation, budgeting, income tracking, and AI-powered financial advice for Nigerians.",
    url: "https://nalofinance.com",
    provider: {
      "@id": "https://nalofinance.com/#organization",
    },
    serviceType: "Personal Finance Management",
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Nalo Finance Plans",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Free Plan",
            description: "Basic personal finance features",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Premium Plan",
            description: "Advanced features with AI optimization",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceData) }}
    />
  );
}

// Combined Schema for Homepage
export function HomePageStructuredData() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <WebApplicationSchema />
      <FinancialServiceSchema />
    </>
  );
}
