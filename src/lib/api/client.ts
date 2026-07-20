/**
 * Autofixer API Client
 * Centralized API communication layer for connecting frontend to NestJS backend
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'

interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

interface ApiError {
  message: string
  statusCode: number
  error?: string
}

class ApiClient {
  private baseUrl: string
  private token: string | null = null

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    // Load token from localStorage on client
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('autofixer_token')
    }
  }

  setToken(token: string | null) {
    this.token = token
    if (typeof window !== 'undefined') {
      if (token) {
        localStorage.setItem('autofixer_token', token)
      } else {
        localStorage.removeItem('autofixer_token')
      }
    }
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    }
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`
    }
    return headers
  }

  private async handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
    if (!response.ok) {
      const error: ApiError = await response.json().catch(() => ({
        message: 'Unknown error',
        statusCode: response.status,
      }))
      throw new Error(error.message || `HTTP ${response.status}`)
    }
    return response.json()
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`
    
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...this.getHeaders(),
          ...options.headers,
        },
      })
      
      const result = await this.handleResponse<T>(response)
      
      if (!result.success) {
        throw new Error(result.error || 'Request failed')
      }
      
      return result.data as T
    } catch (error) {
      if (error instanceof Error) {
        throw error
      }
      throw new Error('Network error')
    }
  }

  // ============ AUTH ============
  async register(data: {
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string
  }) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async login(email: string, password: string) {
    return this.request<{ accessToken: string; user: any }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
  }

  async googleAuth(idToken: string) {
    return this.request<{ accessToken: string; user: any }>('/auth/google', {
      method: 'POST',
      body: JSON.stringify({ idToken }),
    })
  }

  async getProfile() {
    return this.request('/auth/profile')
  }

  async refreshToken(refreshToken: string) {
    return this.request<{ accessToken: string }>('/auth/refresh', {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
    })
  }

  // ============ QUOTES ============
  async calculateQuote(data: {
    vehicleType: string
    commune?: string
    symptoms?: string[]
    services?: { serviceType: string }[]
    refrigerantType?: string
  }) {
    return this.request('/quotes/calculate', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async createQuote(data: {
    clientEmail: string
    clientPhone: string
    commune: string
    address?: string
    vehicleType: string
    vehicleBrand?: string
    vehicleModel?: string
    refrigerantType?: string
    symptoms?: string[]
    description?: string
    utmSource?: string
    utmMedium?: string
    utmCampaign?: string
  }) {
    return this.request('/quotes', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async getQuote(id: string) {
    return this.request(`/quotes/${id}`)
  }

  async getQuotes(params?: { page?: number; limit?: number; isConverted?: boolean }) {
    const query = new URLSearchParams()
    if (params?.page) query.set('page', params.page.toString())
    if (params?.limit) query.set('limit', params.limit.toString())
    if (params?.isConverted !== undefined) query.set('isConverted', params.isConverted.toString())
    
    const queryString = query.toString()
    return this.request(`/quotes?${queryString}`)
  }

  // ============ BOOKINGS ============
  /**
   * Create a public booking from cotizador (no auth required)
   */
  async createPublicBooking(data: {
    clientEmail: string
    clientName?: string
    clientPhone?: string
    commune: string
    street?: string
    number?: string
    department?: string
    lat?: number
    lng?: number
    reference?: string
    vehicleId?: string
    vehicleBrand?: string
    vehicleModel?: string
    vehicleType?: string
    quoteId?: string
    laborCost: number
    partsCost: number
    materialsCost: number
    travelCost: number
    discount?: number
    scheduledDate: string
    scheduledTime: string
    estimatedDurationMinutes?: number
    services?: {
      serviceId: string
      quantity?: number
      unitPrice: number
      totalPrice: number
      notes?: string
    }[]
  }) {
    return this.request('/bookings/public', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async createBooking(data: {
    vehicleId?: string
    addressId?: string
    street?: string
    number?: string
    department?: string
    commune: string
    lat?: number
    lng?: number
    reference?: string
    quoteId?: string
    laborCost: number
    partsCost: number
    materialsCost: number
    travelCost: number
    discount?: number
    scheduledDate: string
    scheduledTime: string
    estimatedDurationMinutes: number
    services?: {
      serviceId: string
      quantity?: number
      unitPrice: number
      totalPrice: number
      notes?: string
    }[]
  }) {
    return this.request('/bookings', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async getBooking(id: string) {
    return this.request(`/bookings/${id}`)
  }

  async getBookingByNumber(bookingNumber: string) {
    return this.request(`/bookings/number/${bookingNumber}`)
  }

  async getBookings(params?: {
    page?: number
    limit?: number
    status?: string
    fromDate?: string
    toDate?: string
  }) {
    const query = new URLSearchParams()
    if (params?.page) query.set('page', params.page.toString())
    if (params?.limit) query.set('limit', params.limit.toString())
    if (params?.status) query.set('status', params.status)
    if (params?.fromDate) query.set('fromDate', params.fromDate)
    if (params?.toDate) query.set('toDate', params.toDate)
    
    const queryString = query.toString()
    return this.request(`/bookings?${queryString}`)
  }

  async updateBooking(id: string, data: any) {
    return this.request(`/bookings/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
  }

  async cancelBooking(id: string, reason?: string) {
    return this.request(`/bookings/${id}/cancel`, {
      method: 'POST',
      body: JSON.stringify({ reason }),
    })
  }

  // ============ PAYMENTS ============
  async createPayment(bookingId: string, method: 'FLOW' | 'WEBPAY' | 'TRANSFER' | 'CASH') {
    return this.request('/payments/create', {
      method: 'POST',
      body: JSON.stringify({ bookingId, method }),
    })
  }

  async getPaymentStatus(paymentId: string) {
    return this.request(`/payments/${paymentId}`)
  }

  async confirmPayment(paymentId: string) {
    return this.request(`/payments/${paymentId}/confirm`, {
      method: 'POST',
    })
  }

  // ============ USERS ============
  async getUsers(params?: { page?: number; limit?: number; role?: string }) {
    const query = new URLSearchParams()
    if (params?.page) query.set('page', params.page.toString())
    if (params?.limit) query.set('limit', params.limit.toString())
    if (params?.role) query.set('role', params.role)
    
    const queryString = query.toString()
    return this.request(`/users?${queryString}`)
  }

  async getUser(id: string) {
    return this.request(`/users/${id}`)
  }

  async updateUser(id: string, data: any) {
    return this.request(`/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
  }

  // ============ VEHICLES ============
  async getVehicles() {
    return this.request('/users/vehicles')
  }

  async createVehicle(data: {
    plate: string
    brand: string
    model: string
    year: number
    type: string
  }) {
    return this.request('/users/vehicles', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async updateVehicle(id: string, data: any) {
    return this.request(`/users/vehicles/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
  }

  async deleteVehicle(id: string) {
    return this.request(`/users/vehicles/${id}`, {
      method: 'DELETE',
    })
  }

  // ============ NOTIFICATIONS ============
  async getNotifications(params?: { page?: number; limit?: number; unreadOnly?: boolean }) {
    const query = new URLSearchParams()
    if (params?.page) query.set('page', params.page.toString())
    if (params?.limit) query.set('limit', params.limit.toString())
    if (params?.unreadOnly) query.set('unreadOnly', 'true')
    
    const queryString = query.toString()
    return this.request(`/notifications?${queryString}`)
  }

  async markNotificationRead(id: string) {
    return this.request(`/notifications/${id}/read`, {
      method: 'POST',
    })
  }

  async markAllNotificationsRead() {
    return this.request('/notifications/read-all', {
      method: 'POST',
    })
  }
}

// Singleton instance
export const api = new ApiClient(API_BASE_URL)

// Export types
export type { ApiResponse, ApiError }
