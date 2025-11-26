// Withholding Tax (WHT) Calculator - 2026 Nigerian Tax Reform

export type TransactionType =
  | 'dividends'
  | 'interest'
  | 'royalties'
  | 'rent'
  | 'professional_services'
  | 'supply_of_goods'
  | 'major_construction'
  | 'other_construction'
  | 'general_services'
  | 'directors_fees'
  | 'entertainment'
  | 'winnings';

export type RecipientType = 'corporate' | 'individual';

export interface WHTInput {
  transactionType: TransactionType;
  grossAmount: number;
  recipientType: RecipientType;
  isResident: boolean;
  hasTIN: boolean;
  isSmallCompany: boolean;
  monthlyTransactionValue: number;
}

export interface WHTResult {
  transactionType: TransactionType;
  transactionTypeName: string;
  grossAmount: number;
  isExempt: boolean;
  exemptionReason: string | null;
  baseRate: number;
  appliedRate: number;
  rateDoubled: boolean;
  whtAmount: number;
  netPayment: number;
  remittanceInfo: {
    federalDue: string;
    stateDue: string;
  };
}

// Transaction type display names
export const TRANSACTION_TYPE_NAMES: Record<TransactionType, string> = {
  dividends: 'Dividends',
  interest: 'Interest',
  royalties: 'Royalties',
  rent: 'Rent / Lease Payments',
  professional_services: 'Professional Services',
  supply_of_goods: 'Supply of Goods',
  major_construction: 'Major Construction (>2 years)',
  other_construction: 'Other Construction Contracts',
  general_services: 'General Services',
  directors_fees: "Directors' Fees",
  entertainment: 'Entertainment / Performers',
  winnings: 'Lottery / Gaming Winnings',
};

// Passive income types (not subject to TIN rate doubling)
const PASSIVE_INCOME_TYPES: TransactionType[] = [
  'dividends',
  'interest',
  'royalties',
];

// WHT rates by transaction type, recipient type, and residency
// Format: [corporate_resident, corporate_non_resident, individual_resident, individual_non_resident]
const WHT_RATES: Record<TransactionType, [number, number, number, number]> = {
  dividends:            [0.10, 0.10, 0.10, 0.10],
  interest:             [0.10, 0.10, 0.10, 0.10],
  royalties:            [0.10, 0.10, 0.10, 0.10],
  rent:                 [0.10, 0.10, 0.10, 0.10],
  professional_services:[0.10, 0.10, 0.05, 0.05],
  supply_of_goods:      [0.05, 0.05, 0.05, 0.05],
  major_construction:   [0.025, 0.025, 0.025, 0.025],
  other_construction:   [0.05, 0.05, 0.05, 0.05],
  general_services:     [0.10, 0.10, 0.05, 0.05],
  directors_fees:       [0.10, 0.10, 0.10, 0.10],
  entertainment:        [0.10, 0.10, 0.10, 0.10],
  winnings:             [0.10, 0.10, 0.10, 0.10],
};

// Small company exemption thresholds
const SMALL_COMPANY_TURNOVER = 25_000_000;  // <₦25M annual turnover
const MONTHLY_EXEMPTION_LIMIT = 2_000_000;  // ≤₦2M monthly transaction

function getBaseRate(
  transactionType: TransactionType,
  recipientType: RecipientType,
  isResident: boolean
): number {
  const rates = WHT_RATES[transactionType];
  const index =
    recipientType === 'corporate'
      ? isResident ? 0 : 1
      : isResident ? 2 : 3;
  return rates[index];
}

function isPassiveIncome(transactionType: TransactionType): boolean {
  return PASSIVE_INCOME_TYPES.includes(transactionType);
}

export function calculateWHT(input: WHTInput): WHTResult {
  const {
    transactionType,
    grossAmount,
    recipientType,
    isResident,
    hasTIN,
    isSmallCompany,
    monthlyTransactionValue,
  } = input;

  const transactionTypeName = TRANSACTION_TYPE_NAMES[transactionType];

  // Get base rate
  const baseRate = getBaseRate(transactionType, recipientType, isResident);

  // Check for Small Company Exemption
  let isExempt = false;
  let exemptionReason: string | null = null;

  if (isSmallCompany && monthlyTransactionValue <= MONTHLY_EXEMPTION_LIMIT) {
    isExempt = true;
    exemptionReason = `Small Company Exemption: Payer turnover <₦25M and monthly transaction ≤₦2M`;
  }

  if (isExempt) {
    return {
      transactionType,
      transactionTypeName,
      grossAmount,
      isExempt,
      exemptionReason,
      baseRate: baseRate * 100,
      appliedRate: 0,
      rateDoubled: false,
      whtAmount: 0,
      netPayment: grossAmount,
      remittanceInfo: {
        federalDue: 'N/A - Exempt',
        stateDue: 'N/A - Exempt',
      },
    };
  }

  // Check if rate should be doubled (no TIN for non-passive income)
  let appliedRate = baseRate;
  let rateDoubled = false;

  if (!hasTIN && !isPassiveIncome(transactionType)) {
    appliedRate = baseRate * 2;
    rateDoubled = true;
  }

  // Calculate WHT amount
  const whtAmount = grossAmount * appliedRate;
  const netPayment = grossAmount - whtAmount;

  // Calculate remittance dates
  const today = new Date();
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  const federalDue = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 21);
  const stateDue = new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0); // Last day

  return {
    transactionType,
    transactionTypeName,
    grossAmount,
    isExempt,
    exemptionReason,
    baseRate: baseRate * 100,
    appliedRate: appliedRate * 100,
    rateDoubled,
    whtAmount,
    netPayment,
    remittanceInfo: {
      federalDue: federalDue.toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' }),
      stateDue: stateDue.toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' }),
    },
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

// Get all transaction types for dropdown
export function getTransactionTypes(): { value: TransactionType; label: string }[] {
  return Object.entries(TRANSACTION_TYPE_NAMES).map(([value, label]) => ({
    value: value as TransactionType,
    label,
  }));
}
