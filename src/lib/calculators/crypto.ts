// Crypto Tax Calculator - 2026 Nigerian Tax Reform

export interface CryptoInput {
  purchasePrice: number;
  salePrice: number;
  otherAnnualIncome: number;
}

export interface CryptoResult {
  purchasePrice: number;
  salePrice: number;
  capitalGain: number;
  isLoss: boolean;
  isExempt: boolean;
  exemptionReason: string | null;
  taxableGain: number;
  taxAmount: number;
  effectiveRate: number;
  otherIncome: number;
  combinedIncome: number;
}

// Exemption thresholds
const SMALL_DISPOSAL_THRESHOLD = 10_000_000;  // ₦10M per transaction
const ANNUAL_TAX_FREE_THRESHOLD = 800_000;    // ₦800K annual tax-free

// Progressive tax bands (same as PIT)
const TAX_BANDS = [
  { min: 0, max: 800000, rate: 0 },
  { min: 800001, max: 3000000, rate: 0.15 },
  { min: 3000001, max: 12000000, rate: 0.18 },
  { min: 12000001, max: 25000000, rate: 0.21 },
  { min: 25000001, max: 50000000, rate: 0.23 },
  { min: 50000001, max: Infinity, rate: 0.25 },
];

export function calculateCryptoTax(input: CryptoInput): CryptoResult {
  const { purchasePrice, salePrice, otherAnnualIncome } = input;

  // Calculate capital gain/loss
  const capitalGain = salePrice - purchasePrice;
  const isLoss = capitalGain < 0;

  // Check for exemptions
  let isExempt = false;
  let exemptionReason: string | null = null;

  // Check 1: Small disposal exemption (transaction value < ₦10M)
  if (salePrice < SMALL_DISPOSAL_THRESHOLD) {
    isExempt = true;
    exemptionReason = `Small disposal exemption: Transaction value below ₦10M threshold`;
  }
  // Check 2: Capital loss
  else if (isLoss) {
    isExempt = true;
    exemptionReason = `Capital loss of ₦${Math.abs(capitalGain).toLocaleString()} can be carried forward to offset future gains`;
  }
  // Check 3: Gain below annual threshold
  else if (capitalGain <= ANNUAL_TAX_FREE_THRESHOLD) {
    isExempt = true;
    exemptionReason = `Capital gain within ₦800K annual tax-free threshold`;
  }

  // If exempt, return early
  if (isExempt) {
    return {
      purchasePrice,
      salePrice,
      capitalGain,
      isLoss,
      isExempt,
      exemptionReason,
      taxableGain: 0,
      taxAmount: 0,
      effectiveRate: 0,
      otherIncome: otherAnnualIncome,
      combinedIncome: otherAnnualIncome,
    };
  }

  // Calculate taxable gain (after ₦800K exemption)
  const taxableGain = capitalGain - ANNUAL_TAX_FREE_THRESHOLD;

  // Calculate combined income for tax bracket determination
  const combinedIncome = otherAnnualIncome + taxableGain;

  // Calculate tax on the taxable gain using progressive bands
  // Tax is calculated on the gain portion, considering where it falls in total income
  let taxAmount = 0;
  let remainingGain = taxableGain;
  let incomePosition = otherAnnualIncome; // Start position based on other income

  for (const band of TAX_BANDS) {
    if (remainingGain <= 0) break;
    if (incomePosition >= band.max) {
      // Already past this band with other income
      continue;
    }

    // Calculate how much of the gain falls in this band
    const bandStart = Math.max(incomePosition, band.min);
    const bandEnd = band.max;
    const availableInBand = bandEnd - bandStart;
    const gainInBand = Math.min(remainingGain, availableInBand);

    taxAmount += gainInBand * band.rate;
    remainingGain -= gainInBand;
    incomePosition += gainInBand;
  }

  // Calculate effective rate on the taxable gain
  const effectiveRate = taxableGain > 0 ? (taxAmount / taxableGain) * 100 : 0;

  return {
    purchasePrice,
    salePrice,
    capitalGain,
    isLoss,
    isExempt,
    exemptionReason,
    taxableGain,
    taxAmount,
    effectiveRate,
    otherIncome: otherAnnualIncome,
    combinedIncome,
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
