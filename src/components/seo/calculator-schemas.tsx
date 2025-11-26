// JSON-LD Structured Data Schemas for Tax Calculators
// These schemas help Google understand the content and enable rich results

type CalculatorType = "pit" | "cit" | "crypto" | "wht";

interface CalculatorSchemaProps {
  calculator: CalculatorType;
}

const calculatorData = {
  pit: {
    name: "Nigeria PAYE Tax Calculator 2025/2026",
    description: "Free personal income tax calculator for Nigeria. Calculate your PAYE with the 2026 tax reform rates, ₦800K tax-free threshold, and all deductions.",
    url: "https://nalofinance.com/tools/pit-calculator",
    applicationCategory: "FinanceApplication",
    keywords: "Nigeria tax calculator, PAYE calculator Nigeria, personal income tax Nigeria, salary after tax Nigeria",
  },
  cit: {
    name: "Nigeria Company Income Tax Calculator 2025",
    description: "Free CIT calculator for Nigerian businesses. Check Small Company Exemption eligibility and calculate corporate tax with latest rates.",
    url: "https://nalofinance.com/tools/cit-calculator",
    applicationCategory: "BusinessApplication",
    keywords: "Company income tax Nigeria, CIT calculator Nigeria, corporate tax Nigeria, SME exemption",
  },
  crypto: {
    name: "Nigeria Crypto Tax Calculator 2025",
    description: "Calculate capital gains tax on cryptocurrency in Nigeria. Bitcoin, Ethereum and all crypto assets with ₦800K exemption.",
    url: "https://nalofinance.com/tools/crypto-calculator",
    applicationCategory: "FinanceApplication",
    keywords: "Crypto tax Nigeria, Bitcoin tax Nigeria, cryptocurrency CGT Nigeria, capital gains tax",
  },
  wht: {
    name: "Nigeria Withholding Tax Calculator 2025",
    description: "Calculate withholding tax on payments in Nigeria. 12 transaction types with resident/non-resident rates and SME exemptions.",
    url: "https://nalofinance.com/tools/wht-calculator",
    applicationCategory: "BusinessApplication",
    keywords: "Withholding tax Nigeria, WHT calculator Nigeria, WHT rates Nigeria",
  },
};

// SoftwareApplication Schema - for rich results
export function CalculatorApplicationSchema({ calculator }: CalculatorSchemaProps) {
  const data = calculatorData[calculator];

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": data.name,
    "description": data.description,
    "url": data.url,
    "applicationCategory": data.applicationCategory,
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requires JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "NGN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "2847",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "Nalo Finance",
      "url": "https://nalofinance.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tanta Innovative Limited",
      "url": "https://tantainnovatives.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// HowTo Schema for PIT Calculator
export function PITHowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Calculate Personal Income Tax (PAYE) in Nigeria",
    "description": "Step-by-step guide to calculate your Nigerian personal income tax using the 2026 tax reform rates",
    "totalTime": "PT2M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "NGN",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Enter Your Gross Annual Income",
        "text": "Input your total annual income in Naira. This includes salary, bonuses, allowances, and other employment income."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Add Pension Contribution",
        "text": "Enter your pension contribution (typically 8% of basic salary). This is tax-deductible under Nigerian law."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Add NHIS Contribution",
        "text": "Enter National Health Insurance Scheme contribution (typically 5% of basic). This is also tax-deductible."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Add NHF Contribution",
        "text": "Enter National Housing Fund contribution (2.5% of basic salary). This qualifies as a tax relief."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Enter Rent Paid (Optional)",
        "text": "If applicable, enter annual rent paid. You can claim rent relief based on this amount."
      },
      {
        "@type": "HowToStep",
        "position": 6,
        "name": "Calculate Your Tax",
        "text": "Click the Calculate button to see your tax breakdown using the 2026 progressive tax bands: 0% on first ₦800K, 15% on ₦800K-₦3M, 18% on ₦3M-₦12M, 21% on ₦12M-₦25M, 23% on ₦25M-₦50M, and 25% above ₦50M."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// HowTo Schema for CIT Calculator
export function CITHowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Calculate Company Income Tax (CIT) in Nigeria",
    "description": "Step-by-step guide to calculate Nigerian corporate tax and check Small Company Exemption eligibility",
    "totalTime": "PT2M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Enter Annual Turnover",
        "text": "Input your company's total annual turnover/revenue in Naira."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Enter Taxable Profit",
        "text": "Input your company's taxable profit after allowable deductions."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Check Company Classification",
        "text": "The calculator automatically determines if you qualify as a Small Company (turnover < ₦25M, 0% tax), Medium Company (₦25M-₦100M, 20% tax), or Large Company (> ₦100M, 30% tax)."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Calculate Your Tax",
        "text": "Click Calculate to see your company's tax liability, effective tax rate, and exemption status."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// HowTo Schema for Crypto Calculator
export function CryptoHowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Calculate Cryptocurrency Tax in Nigeria",
    "description": "Calculate capital gains tax on Bitcoin, Ethereum and other crypto assets in Nigeria",
    "totalTime": "PT2M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Enter Purchase Price",
        "text": "Input the total amount you paid to acquire the cryptocurrency (cost basis) in Naira."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Enter Sale Price",
        "text": "Input the total amount you received when selling the cryptocurrency in Naira."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Check Exemptions",
        "text": "The calculator checks if you qualify for exemptions: small disposal exemption (disposals < ₦10M), or annual CGT exemption (gains < ₦800K)."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Calculate CGT",
        "text": "Click Calculate to see your capital gain/loss, applicable exemptions, and tax payable at 10% CGT rate."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// HowTo Schema for WHT Calculator
export function WHTHowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Calculate Withholding Tax in Nigeria",
    "description": "Calculate withholding tax on various payments in Nigeria with correct rates",
    "totalTime": "PT2M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Select Transaction Type",
        "text": "Choose from 12 transaction types: Dividends, Interest, Royalties, Rent, Commission, Consultancy, Technical Services, Management Fees, Directors Fees, Contract, Construction, and Other Services."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Enter Payment Amount",
        "text": "Input the gross payment amount in Naira before any deductions."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Select Recipient Status",
        "text": "Choose whether the recipient is a Nigerian Resident or Non-Resident. Non-resident rates are typically higher."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Check TIN Status",
        "text": "Indicate if the recipient has a Tax Identification Number (TIN). Without TIN, WHT increases by 5%."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Calculate WHT",
        "text": "Click Calculate to see WHT amount, applicable rate, net payment, and any exemptions."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema for PIT Calculator
export function PITFAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the tax-free threshold in Nigeria 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under the 2026 Nigerian tax reform, the first ₦800,000 of annual income is completely tax-free. This means if you earn ₦800,000 or less per year (about ₦66,667 per month), you pay zero income tax."
        }
      },
      {
        "@type": "Question",
        "name": "What are the PAYE tax rates in Nigeria 2025/2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nigeria's 2026 tax reform introduced new progressive tax bands: 0% on first ₦800,000, 15% on ₦800,001 to ₦3,000,000, 18% on ₦3,000,001 to ₦12,000,000, 21% on ₦12,000,001 to ₦25,000,000, 23% on ₦25,000,001 to ₦50,000,000, and 25% on income above ₦50,000,000."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate PAYE in Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To calculate PAYE: 1) Start with gross annual income, 2) Subtract tax-deductible contributions (pension 8%, NHIS 5%, NHF 2.5%), 3) Apply the Consolidated Relief Allowance (₦200,000 + 20% of gross), 4) Apply progressive tax bands to taxable income. Our free calculator does this automatically."
        }
      },
      {
        "@type": "Question",
        "name": "What deductions reduce my taxable income in Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tax-deductible items include: Pension contributions (8% of basic), National Health Insurance (5% of basic), National Housing Fund (2.5% of basic), Life insurance premiums, and Consolidated Relief Allowance (₦200,000 or 1% of gross income, plus 20% of gross income)."
        }
      },
      {
        "@type": "Question",
        "name": "Is PAYE the same as personal income tax in Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PAYE (Pay As You Earn) is the method by which employers deduct personal income tax from employee salaries monthly and remit to FIRS. Personal Income Tax is the broader category that includes PAYE for employed individuals and direct assessment for self-employed individuals."
        }
      },
      {
        "@type": "Question",
        "name": "When is Nigerian income tax due?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For PAYE, employers must remit deducted tax by the 10th of the following month. Self-employed individuals must file annual returns by March 31st. Companies must file within 6 months of their accounting year end."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema for CIT Calculator
export function CITFAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Company Income Tax rate in Nigeria 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nigeria has tiered CIT rates based on company size: Small Companies (turnover < ₦25 million) pay 0% tax, Medium Companies (₦25-100 million turnover) pay 20%, and Large Companies (> ₦100 million turnover) pay 30% on taxable profits."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Small Company Exemption in Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Small Company Exemption allows Nigerian companies with annual turnover below ₦25 million to pay 0% company income tax. This is designed to support small businesses and startups. The exemption is automatic based on turnover."
        }
      },
      {
        "@type": "Question",
        "name": "How is CIT calculated in Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CIT is calculated as: Taxable Profit × Applicable Rate. First determine company size by turnover, then apply the rate (0%, 20%, or 30%) to taxable profit. Minimum tax of 0.5% of turnover may apply if higher than computed tax."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum tax for companies in Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Companies with turnover above ₦25 million are subject to minimum tax of 0.5% of gross turnover. This applies if the calculated CIT is lower than the minimum tax amount, ensuring all medium and large companies contribute."
        }
      },
      {
        "@type": "Question",
        "name": "When must Nigerian companies file CIT returns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nigerian companies must file CIT returns within 6 months after their accounting year end. New companies have 18 months from incorporation for their first return. Late filing attracts penalties of ₦25,000 for the first month and ₦5,000 for each subsequent month."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema for Crypto Calculator
export function CryptoFAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is cryptocurrency taxed in Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, cryptocurrency gains are subject to Capital Gains Tax (CGT) in Nigeria at 10%. When you sell, exchange, or dispose of crypto assets for more than you paid, the profit is taxable. However, there are exemptions for small disposals and annual gains under ₦800,000."
        }
      },
      {
        "@type": "Question",
        "name": "What is the crypto tax rate in Nigeria 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cryptocurrency gains in Nigeria are taxed at 10% Capital Gains Tax rate. This applies to profits from selling Bitcoin, Ethereum, and other digital assets. The first ₦800,000 of annual capital gains is exempt."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a tax exemption for crypto in Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, two main exemptions exist: 1) Small Disposal Exemption - if your total crypto disposals in a year are less than ₦10 million, no CGT applies. 2) Annual Exemption - the first ₦800,000 of capital gains annually is tax-free."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate crypto tax in Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Calculate your gain as: Sale Price - Purchase Price (cost basis). If gain exceeds ₦800,000 and disposals exceed ₦10M, multiply taxable gain by 10% CGT rate. Include all crypto-to-crypto trades, not just crypto-to-Naira."
        }
      },
      {
        "@type": "Question",
        "name": "Do I pay tax on crypto losses in Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, you don't pay tax on losses. However, capital losses can be carried forward to offset future capital gains, reducing your tax liability when you eventually make profits."
        }
      },
      {
        "@type": "Question",
        "name": "Is Bitcoin legal in Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, owning and trading Bitcoin and cryptocurrencies is legal in Nigeria. While the CBN restricted banks from facilitating crypto transactions in 2021, peer-to-peer trading remains legal, and gains are taxable under capital gains tax laws."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema for WHT Calculator
export function WHTFAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Withholding Tax (WHT) in Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Withholding Tax is an advance payment of income tax deducted at source when certain payments are made. The payer deducts WHT from the gross payment and remits to FIRS. It serves as advance tax credit for the recipient against their final tax liability."
        }
      },
      {
        "@type": "Question",
        "name": "What are the WHT rates in Nigeria 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WHT rates vary by payment type: Dividends (10%), Interest (10%), Royalties (10%), Rent (10%), Commission/Consultancy (10%), Technical/Management Fees (10%), Directors Fees (10%), Construction (5%), and Contracts (5%). Non-residents typically pay higher rates."
        }
      },
      {
        "@type": "Question",
        "name": "Who is exempt from WHT in Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Exemptions include: Government agencies, organizations with tax exemption certificates, small companies under the SME exemption, payments below certain thresholds, and certain transactions covered by double taxation treaties."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if recipient has no TIN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If the payment recipient doesn't have a Tax Identification Number (TIN), an additional 5% WHT applies on top of the standard rate. This incentivizes tax registration and compliance."
        }
      },
      {
        "@type": "Question",
        "name": "When must WHT be remitted in Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WHT must be remitted to FIRS within 21 days from the date of deduction for companies, or by the 10th of the following month for individuals. Late remittance attracts penalties and interest charges."
        }
      },
      {
        "@type": "Question",
        "name": "Can WHT be recovered in Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, WHT is a credit against final tax liability. Recipients can use WHT credit notes to offset their annual income tax. If WHT exceeds actual tax due, the excess can be refunded or carried forward."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Organization Schema (for all pages)
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nalo Finance",
    "url": "https://nalofinance.com",
    "logo": "https://nalofinance.com/logo.png",
    "description": "The all-in-one personal finance platform for Nigerians. Manage Ajo groups, optimize taxes, track income streams, and achieve financial freedom.",
    "foundingDate": "2024",
    "founder": {
      "@type": "Organization",
      "name": "Tanta Innovative Limited",
      "url": "https://tantainnovatives.com"
    },
    "sameAs": [
      "https://twitter.com/nalofinance",
      "https://linkedin.com/company/nalofinance",
      "https://instagram.com/nalofinance"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@nalofinance.com",
      "contactType": "customer service"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Combined schemas for each calculator page
export function PITCalculatorSchemas() {
  return (
    <>
      <CalculatorApplicationSchema calculator="pit" />
      <PITHowToSchema />
      <PITFAQSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nalofinance.com" },
        { name: "Free Tools", url: "https://nalofinance.com/tools" },
        { name: "PIT Calculator", url: "https://nalofinance.com/tools/pit-calculator" }
      ]} />
    </>
  );
}

export function CITCalculatorSchemas() {
  return (
    <>
      <CalculatorApplicationSchema calculator="cit" />
      <CITHowToSchema />
      <CITFAQSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nalofinance.com" },
        { name: "Free Tools", url: "https://nalofinance.com/tools" },
        { name: "CIT Calculator", url: "https://nalofinance.com/tools/cit-calculator" }
      ]} />
    </>
  );
}

export function CryptoCalculatorSchemas() {
  return (
    <>
      <CalculatorApplicationSchema calculator="crypto" />
      <CryptoHowToSchema />
      <CryptoFAQSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nalofinance.com" },
        { name: "Free Tools", url: "https://nalofinance.com/tools" },
        { name: "Crypto Tax Calculator", url: "https://nalofinance.com/tools/crypto-calculator" }
      ]} />
    </>
  );
}

export function WHTCalculatorSchemas() {
  return (
    <>
      <CalculatorApplicationSchema calculator="wht" />
      <WHTHowToSchema />
      <WHTFAQSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nalofinance.com" },
        { name: "Free Tools", url: "https://nalofinance.com/tools" },
        { name: "WHT Calculator", url: "https://nalofinance.com/tools/wht-calculator" }
      ]} />
    </>
  );
}
