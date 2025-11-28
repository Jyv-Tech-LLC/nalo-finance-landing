const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://api.nalofinance.com'
const API_URL = `${API_BASE}/api/v1`

export interface ContactFormData {
  name: string
  email: string
  category: string
  subject: string
  message: string
}

export interface ContactFormResponse {
  success: boolean
  message: string
  emailsSent?: {
    support: boolean
    confirmation: boolean
  }
}

export async function submitContactForm(data: ContactFormData): Promise<ContactFormResponse> {
  const response = await fetch(`${API_URL}/public/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.message || 'Failed to submit contact form')
  }

  return response.json()
}
