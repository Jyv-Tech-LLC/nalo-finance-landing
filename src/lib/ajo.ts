const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://api.nalofinance.com'
const API_URL = `${API_BASE}/api/v1`

export type AjoFrequency = 'WEEKLY' | 'BIWEEKLY' | 'MONTHLY' | 'QUARTERLY'

export interface PublicAjoGroup {
  id: string
  name: string
  description: string | null
  contributionAmount: number
  frequency: AjoFrequency
  startDate: string
  totalCycles: number
  currentCycle: number
  memberCount: number
  availableSlots: number
  creatorFirstName: string
  isFull: boolean
}

export interface PublicGroupsResponse {
  groups: PublicAjoGroup[]
  pagination: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}

export interface SearchParams {
  search?: string
  frequency?: AjoFrequency
  minContribution?: number
  maxContribution?: number
  hasAvailableSlots?: boolean
  page?: number
  limit?: number
}

export interface JoinIntentResponse {
  intentToken: string
  groupId: string
  groupName: string
  email: string
  expiresAt: string
  message: string
}

export interface GroupPreview {
  id: string
  name: string
  description: string | null
  contributionAmount: number
  frequency: AjoFrequency
  startDate: string
  totalCycles: number
  currentCycle: number
  memberCount: number
  availableSlots: number
  creatorFirstName: string
  isFull: boolean
  isAcceptingRequests: boolean
  status: string
}

export interface IntentVerification {
  valid: boolean
  email: string
  group: {
    id: string
    name: string
    description: string | null
    contributionAmount: number
    frequency: AjoFrequency
    memberCount: number
  }
  message: string | null
  expiresAt: string
}

export async function discoverPublicGroups(params?: SearchParams): Promise<PublicGroupsResponse> {
  const searchParams = new URLSearchParams()

  if (params?.search) searchParams.set('search', params.search)
  if (params?.frequency) searchParams.set('frequency', params.frequency)
  if (params?.minContribution) searchParams.set('minContribution', params.minContribution.toString())
  if (params?.maxContribution) searchParams.set('maxContribution', params.maxContribution.toString())
  if (params?.hasAvailableSlots !== undefined) searchParams.set('hasAvailableSlots', params.hasAvailableSlots.toString())
  if (params?.page) searchParams.set('page', params.page.toString())
  if (params?.limit) searchParams.set('limit', params.limit.toString())

  const response = await fetch(`${API_URL}/public/ajo-groups/discover?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.message || 'Failed to fetch groups')
  }

  return response.json()
}

export async function getGroupPreview(groupId: string): Promise<GroupPreview> {
  const response = await fetch(`${API_URL}/public/ajo-groups/${groupId}/preview`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.message || 'Failed to fetch group preview')
  }

  return response.json()
}

export async function createJoinIntent(
  groupId: string,
  email: string,
  message?: string
): Promise<JoinIntentResponse> {
  const response = await fetch(`${API_URL}/public/ajo-groups/${groupId}/join-intent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, message }),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.message || 'Failed to create join intent')
  }

  return response.json()
}

export async function verifyJoinIntent(token: string): Promise<IntentVerification> {
  const response = await fetch(`${API_URL}/public/ajo-groups/intent/${token}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.message || 'Failed to verify intent')
  }

  return response.json()
}

export function formatFrequency(frequency: AjoFrequency): string {
  const map: Record<AjoFrequency, string> = {
    WEEKLY: 'Weekly',
    BIWEEKLY: 'Bi-Weekly',
    MONTHLY: 'Monthly',
    QUARTERLY: 'Quarterly',
  }
  return map[frequency] || frequency
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}
