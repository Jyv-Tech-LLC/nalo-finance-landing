// Personal Income Tax (PIT) Calculator - 2026 Nigerian Tax Reform

export interface PITInput {
  grossIncome: number;
  pension: number;
  nhis: number;
  nhf: number;
  rent: number;
  lifeInsurance: number;
  mortgage: number;
}

export interface TaxBandBreakdown {
  min: number;
  max: number;
  rate: number;
  amount: number;
  tax: number;
}

export interface PITResult {
  grossIncome: number;
  totalDeductions: number;
  rentRelief: number;
  taxableIncome: number;
  annualTax: number;
  monthlyTax: number;
  effectiveRate: number;
  breakdown: TaxBandBreakdown[];
}

// 2026 Progressive Tax Bands
const TAX_BANDS = [
  { min: 0, max: 800000, rate: 0 },
  { min: 800001, max: 3000000, rate: 0.15 },
  { min: 3000001, max: 12000000, rate: 0.18 },
  { min: 12000001, max: 25000000, rate: 0.21 },
  { min: 25000001, max: 50000000, rate: 0.23 },
  { min: 50000001, max: Infinity, rate: 0.25 },
];

// Maximum rent relief: 20% of rent, capped at ₦500,000
const MAX_RENT_RELIEF = 500000;
const RENT_RELIEF_RATE = 0.2;

export function calculatePIT(input: PITInput): PITResult {
  const { grossIncome, pension, nhis, nhf, rent, lifeInsurance, mortgage } = input;

  // Step 1: Calculate total statutory deductions
  const totalDeductions = pension + nhis + nhf + lifeInsurance + mortgage;

  // Step 2: Calculate rent relief (20% of rent, capped at ₦500K)
  const rentRelief = Math.min(rent * RENT_RELIEF_RATE, MAX_RENT_RELIEF);

  // Step 3: Calculate taxable income
  const taxableIncome = Math.max(0, grossIncome - totalDeductions - rentRelief);

  // Step 4: Apply progressive tax bands
  let annualTax = 0;
  let remaining = taxableIncome;
  const breakdown: TaxBandBreakdown[] = [];

  for (const band of TAX_BANDS) {
    if (remaining <= 0) break;

    const bandWidth = band.max === Infinity ? remaining : band.max - band.min + 1;
    const taxableInBand = Math.min(remaining, bandWidth);
    const taxInBand = taxableInBand * band.rate;

    annualTax += taxInBand;
    breakdown.push({
      min: band.min,
      max: band.max,
      rate: band.rate,
      amount: taxableInBand,
      tax: taxInBand,
    });

    remaining -= taxableInBand;
  }

  // Step 5: Calculate derived values
  const monthlyTax = annualTax / 12;
  const effectiveRate = taxableIncome > 0 ? (annualTax / taxableIncome) * 100 : 0;

  return {
    grossIncome,
    totalDeductions,
    rentRelief,
    taxableIncome,
    annualTax,
    monthlyTax,
    effectiveRate,
    breakdown,
  };
}

// Helper function to calculate standard deductions
export function calculateStandardDeductions(grossIncome: number) {
  return {
    pension: grossIncome * 0.08,    // 8% pension contribution
    nhis: grossIncome * 0.05,       // 5% NHIS contribution
    nhf: grossIncome * 0.025,       // 2.5% NHF contribution
  };
}

// Format currency for display
export function formatNaira(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Format tax band range for display
export function formatBandRange(min: number, max: number): string {
  if (max === Infinity) {
    return `Above ${formatNaira(min - 1)}`;
  }
  if (min === 0) {
    return `First ${formatNaira(max)}`;
  }
  return `${formatNaira(min)} - ${formatNaira(max)}`;
}
