// Company Income Tax (CIT) Calculator - 2026 Nigerian Tax Reform

export interface CITInput {
  assessableProfit: number;
  annualTurnover: number;
  totalAssets: number;
  isProfessionalService: boolean;
}

export interface CITResult {
  qualifiesForExemption: boolean;
  exemptionReason: string | null;
  disqualificationReasons: string[];
  assessableProfit: number;
  citRate: number;
  citAmount: number;
}

// Small Company Exemption thresholds
const TURNOVER_THRESHOLD = 100_000_000; // ₦100M
const ASSETS_THRESHOLD = 250_000_000;   // ₦250M
const STANDARD_CIT_RATE = 0.30;         // 30%

export function calculateCIT(input: CITInput): CITResult {
  const { assessableProfit, annualTurnover, totalAssets, isProfessionalService } = input;

  // Check each exemption criterion
  const disqualificationReasons: string[] = [];

  if (annualTurnover > TURNOVER_THRESHOLD) {
    disqualificationReasons.push(`Turnover exceeds ₦100M threshold (₦${(annualTurnover / 1_000_000).toFixed(1)}M)`);
  }

  if (totalAssets > ASSETS_THRESHOLD) {
    disqualificationReasons.push(`Fixed assets exceed ₦250M threshold (₦${(totalAssets / 1_000_000).toFixed(1)}M)`);
  }

  if (isProfessionalService) {
    disqualificationReasons.push('Professional service companies are excluded from exemption');
  }

  // Determine if company qualifies for exemption
  const qualifiesForExemption = disqualificationReasons.length === 0;

  // Set exemption reason if applicable
  let exemptionReason: string | null = null;
  if (qualifiesForExemption) {
    exemptionReason = 'Company qualifies for Small Company Exemption under 2026 tax reform';
  }

  // Calculate CIT
  const citRate = qualifiesForExemption ? 0 : STANDARD_CIT_RATE;
  const citAmount = assessableProfit * citRate;

  return {
    qualifiesForExemption,
    exemptionReason,
    disqualificationReasons,
    assessableProfit,
    citRate: citRate * 100, // Return as percentage
    citAmount,
  };
}

// Professional service categories that are excluded
export const PROFESSIONAL_SERVICES = [
  'Legal Services',
  'Accounting & Auditing',
  'Medical Services',
  'Engineering Consultancy',
  'Architectural Services',
  'Management Consultancy',
  'IT Consultancy',
  'Financial Advisory',
];

// Format currency for display
export function formatNaira(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
