const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://api.nalofinance.com'
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.nalofinance.com'

export type SubscriptionTier = 'FREE' | 'BASIC' | 'PREMIUM' | 'UNLIMITED'

export interface PlanPricing {
  usd: { amount: number; currency: string; formatted: string }
  ngn: { amount: number; currency: string; formatted: string }
}

export interface PlanLimits {
  aiQueries: { value: number; unlimited: boolean; label: string }
  accounts: { value: number; unlimited: boolean; label: string }
  storage: { value: number; unlimited: boolean; label: string }
}

export interface Plan {
  id: string
  tier: SubscriptionTier
  name: string
  description: string
  pricing: PlanPricing
  interval: 'month' | 'year'
  features: string[]
  limits: PlanLimits
  badge: string | null
  highlighted: boolean
  ctaUrl: string
  ctaText: string
}

export interface PlansResponse {
  plans: Plan[]
  currencies: { code: string; symbol: string; name: string }[]
  defaultCurrency: string
  appUrl: string
}

/**
 * Fetch subscription plans from the backend API
 * Uses Next.js ISR with 5-minute revalidation
 */
export async function getPlans(): Promise<PlansResponse> {
  try {
    const res = await fetch(`${API_BASE}/api/v1/public/plans`, {
      next: { revalidate: 300 }, // Cache for 5 minutes
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch plans: ${res.status}`)
    }

    const data = await res.json()

    // Override ctaUrl to use the correct app URL with plan parameter
    const plans = data.plans.map((plan: Plan) => ({
      ...plan,
      ctaUrl: `${APP_URL}/register?plan=${plan.tier}`,
    }))

    return {
      ...data,
      plans,
      appUrl: APP_URL,
    }
  } catch (error) {
    console.error('Error fetching plans:', error)
    // Return fallback plans if API fails
    return getFallbackPlans()
  }
}

/**
 * Fallback plans in case API is unavailable
 * Ensures the pricing page still renders
 */
function getFallbackPlans(): PlansResponse {
  return {
    plans: [
      {
        id: 'free',
        tier: 'FREE',
        name: 'Free',
        description: 'Get started with basic features',
        pricing: {
          usd: { amount: 0, currency: 'USD', formatted: '$0' },
          ngn: { amount: 0, currency: 'NGN', formatted: '₦0' },
        },
        interval: 'month',
        features: [
          'Up to 5 bank accounts',
          '2 Ajo groups (10 members each)',
          '3 income streams',
          '3 financial goals',
          '10 Oracle AI questions/month',
          'All tax calculators',
          'Community support',
        ],
        limits: {
          aiQueries: { value: 10, unlimited: false, label: '10/month' },
          accounts: { value: 5, unlimited: false, label: '5 accounts' },
          storage: { value: 10, unlimited: false, label: '10MB' },
        },
        badge: null,
        highlighted: false,
        ctaUrl: `${APP_URL}/register?plan=FREE`,
        ctaText: 'Get Started Free',
      },
      {
        id: 'basic',
        tier: 'BASIC',
        name: 'Basic',
        description: 'For individuals serious about their finances',
        pricing: {
          usd: { amount: 4.99, currency: 'USD', formatted: '$4.99' },
          ngn: { amount: 2000, currency: 'NGN', formatted: '₦2,000' },
        },
        interval: 'month',
        features: [
          'Up to 10 bank accounts',
          '5 Ajo groups (25 members each)',
          '10 income streams',
          '10 financial goals',
          '100 Oracle AI questions/month',
          'AI tax optimization tips',
          'Email support',
        ],
        limits: {
          aiQueries: { value: 100, unlimited: false, label: '100/month' },
          accounts: { value: 10, unlimited: false, label: '10 accounts' },
          storage: { value: 100, unlimited: false, label: '100MB' },
        },
        badge: null,
        highlighted: false,
        ctaUrl: `${APP_URL}/register?plan=BASIC`,
        ctaText: 'Get Started',
      },
      {
        id: 'premium',
        tier: 'PREMIUM',
        name: 'Premium',
        description: 'For power users who want it all',
        pricing: {
          usd: { amount: 9.99, currency: 'USD', formatted: '$9.99' },
          ngn: { amount: 4000, currency: 'NGN', formatted: '₦4,000' },
        },
        interval: 'month',
        features: [
          'Unlimited bank accounts',
          'Unlimited Ajo groups',
          'Unlimited income streams',
          'Unlimited financial goals',
          '1,000 Oracle AI questions/month',
          'Advanced reports (PDF/CSV)',
          'Receipt OCR scanning',
          'Ajo escrow protection',
          'Priority support',
        ],
        limits: {
          aiQueries: { value: 1000, unlimited: false, label: '1,000/month' },
          accounts: { value: -1, unlimited: true, label: 'Unlimited' },
          storage: { value: 500, unlimited: false, label: '500MB' },
        },
        badge: 'Most Popular',
        highlighted: true,
        ctaUrl: `${APP_URL}/register?plan=PREMIUM`,
        ctaText: 'Get Started',
      },
      {
        id: 'unlimited',
        tier: 'UNLIMITED',
        name: 'Unlimited',
        description: 'For businesses and power users',
        pricing: {
          usd: { amount: 19.99, currency: 'USD', formatted: '$19.99' },
          ngn: { amount: 8000, currency: 'NGN', formatted: '₦8,000' },
        },
        interval: 'month',
        features: [
          'Everything in Premium',
          'Unlimited Oracle AI questions',
          'Unlimited storage',
          'API access',
          'Dedicated account manager',
          'Custom integrations',
          'Early feature access',
        ],
        limits: {
          aiQueries: { value: -1, unlimited: true, label: 'Unlimited' },
          accounts: { value: -1, unlimited: true, label: 'Unlimited' },
          storage: { value: -1, unlimited: true, label: 'Unlimited' },
        },
        badge: 'Best Value',
        highlighted: false,
        ctaUrl: `${APP_URL}/register?plan=UNLIMITED`,
        ctaText: 'Get Started',
      },
    ],
    currencies: [
      { code: 'USD', symbol: '$', name: 'US Dollar' },
      { code: 'NGN', symbol: '₦', name: 'Nigerian Naira' },
    ],
    defaultCurrency: 'NGN',
    appUrl: APP_URL,
  }
}

/**
 * Get a single plan by tier
 */
export async function getPlanByTier(tier: SubscriptionTier): Promise<Plan | null> {
  const { plans } = await getPlans()
  return plans.find(p => p.tier === tier) || null
}

/**
 * Format price based on currency preference
 */
export function formatPrice(plan: Plan, currency: 'USD' | 'NGN'): string {
  return plan.pricing[currency.toLowerCase() as 'usd' | 'ngn'].formatted
}

/**
 * Get the signup URL for a specific plan
 */
export function getSignupUrl(tier: SubscriptionTier): string {
  return `${APP_URL}/register?plan=${tier}`
}
