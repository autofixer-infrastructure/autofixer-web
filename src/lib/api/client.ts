/**
 * Autofixer API Client - Type-safe API layer
 * Base URL: NEXT_PUBLIC_API_URL (from env)
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://autofixer.cl/api';
const TOKEN_KEY = 'autofixer_access_token';
const REFRESH_KEY = 'autofixer_refresh_token';

// =============================================================================
// TYPES
// =============================================================================

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: 'CLIENT' | 'TECHNICIAN' | 'ADMIN';
  createdAt: string;
}

export type ApiResponse<T = any> = T

export interface ApiError {
  message: string;
  statusCode: number;
  error?: string;
}

export interface QuoteCalculateRequest {
  vehicleType: string;
  commune?: string;
  symptoms?: string[];
  refrigerantType?: string;
  services?: { serviceType: string }[];
}

export interface QuoteResult {
  total: number;
  breakdown: { service: string; price: number }[];
  travelFee: number;
  currency: string;
}

export interface Slot {
  time: string;
  available: boolean;
}

export interface BookingRequest {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  vehicleBrand: string;
  vehicleModel: string;
  vehicleYear: number;
  commune: string;
  address: string;
  symptoms: string[];
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  privacyConsent: boolean;
  termsConsent: boolean;
}

export interface Booking {
  id: string;
  bookingNumber?: string;
  status: string;
  customerName: string;
  commune: string;
  address: string;
  preferredDate: string;
  preferredTime: string;
  symptoms: string[];
  createdAt: string;
}

// =============================================================================
// HTTP CLIENT
// =============================================================================

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private getToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(TOKEN_KEY);
  }

  private async request<T>(
    path: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${path}`;
    
    const headers = new Headers(options.headers as HeadersInit);
    headers.set('Content-Type', 'application/json');
    
    const token = this.getToken();
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    
    const response = await fetch(url, {
      ...options,
      headers,
      credentials: 'include',
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const error: ApiError = {
        message: errorData.message || `HTTP ${response.status}`,
        statusCode: response.status,
        error: errorData.error,
      };
      throw error;
    }

    const text = await response.text();
    if (!text) return {} as T;
    return JSON.parse(text) as T;
  }

  // ========== AUTH ==========

  async register(payload: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone?: string;
  }): Promise<AuthTokens> {
    return this.request<AuthTokens>('/v1/auth/register', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async login(payload: {
    email: string;
    password: string;
  }): Promise<AuthTokens> {
    return this.request<AuthTokens>('/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async logout(): Promise<{ message: string }> {
    return this.request<{ message: string }>('/v1/auth/logout', {
      method: 'POST',
    });
  }

  async getCurrentUser(): Promise<User> {
    return this.request<User>('/v1/auth/me');
  }

  // ========== QUOTES ==========

  async calculateQuote(payload: QuoteCalculateRequest): Promise<QuoteResult> {
    return this.request<QuoteResult>('/v1/quotes/calculate', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async createQuote(payload: {
    vehicleType: string;
    commune: string;
    symptoms?: string[];
    refrigerantType?: string;
    notes?: string;
  }): Promise<{ id: string; total: number }> {
    return this.request<{ id: string; total: number }>('/v1/quotes/public', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async createPublicBooking(payload: {
    clientEmail: string;
    clientName?: string;
    clientPhone?: string;
    commune: string;
    street?: string;
    number?: string;
    department?: string;
    lat?: number;
    lng?: number;
    reference?: string;
    vehicleId?: string;
    vehicleBrand?: string;
    vehicleModel?: string;
    vehicleType?: string;
    vehicleYear?: number;
    refrigerantType?: string;
    symptoms?: string[];
    description?: string;
    quoteId?: string;
    laborCost: number;
    partsCost: number;
    materialsCost: number;
    travelCost: number;
    discount?: number;
    scheduledDate: string;   // ISO 8601: 2026-07-30T00:00:00.000Z
    scheduledTime: string;   // HH:mm
    estimatedDurationMinutes?: number;
    services?: { serviceId: string; quantity?: number; unitPrice: number; totalPrice: number; notes?: string }[];
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    turnstileToken?: string;
  }): Promise<{ id: string; bookingNumber: string; status: string }> {
    return this.request<{ id: string; bookingNumber: string; status: string }>('/bookings', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async getQuote(id: string): Promise<any> {
    return this.request<any>(`/quotes/${id}`);
  }

  async getQuotes(params?: {
    page?: number;
    limit?: number;
    clientId?: string;
    isConverted?: boolean;
    fromDate?: string;
    toDate?: string;
  }): Promise<{ data: any[]; meta: any }> {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.set('page', String(params.page));
    if (params?.limit) searchParams.set('limit', String(params.limit));
    if (params?.clientId) searchParams.set('clientId', params.clientId);
    if (params?.isConverted !== undefined) searchParams.set('isConverted', String(params.isConverted));
    if (params?.fromDate) searchParams.set('fromDate', params.fromDate);
    if (params?.toDate) searchParams.set('toDate', params.toDate);
    const qs = searchParams.toString();
    return this.request<{ data: any[]; meta: any }>(`/quotes${qs ? `?${qs}` : ''}`);
  }

  // ========== BOOKINGS ==========

  async getAvailableSlots(
    date: string,
    commune: string
  ): Promise<Slot[]> {
    const params = new URLSearchParams({ date, commune });
    return this.request<Slot[]>(`/bookings/slots?${params}`);
  }

  async createBooking(payload: BookingRequest): Promise<Booking> {
    return this.request<Booking>('/bookings', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async getBooking(id: string): Promise<Booking> {
    return this.request<Booking>(`/bookings/${id}`);
  }

  async getBookingByNumber(bookingNumber: string): Promise<Booking> {
    return this.request<Booking>(`/bookings/number/${bookingNumber}`);
  }

  async getBookings(params?: {
    page?: number;
    limit?: number;
    status?: string;
    date?: string;
    technicianId?: string;
  }): Promise<{ data: Booking[]; meta: any }> {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.set('page', String(params.page));
    if (params?.limit) searchParams.set('limit', String(params.limit));
    if (params?.status) searchParams.set('status', params.status);
    if (params?.date) searchParams.set('date', params.date);
    if (params?.technicianId) searchParams.set('technicianId', params.technicianId);
    const qs = searchParams.toString();
    return this.request<{ data: Booking[]; meta: any }>(`/bookings${qs ? `?${qs}` : ''}`);
  }

  async getMyBookings(): Promise<Booking[]> {
    return this.request<Booking[]>('/bookings/customer/my');
  }

  async updateBooking(id: string, data: Partial<BookingRequest>): Promise<Booking> {
    return this.request<Booking>(`/bookings/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  async cancelBooking(id: string, reason?: string): Promise<Booking> {
    return this.request<Booking>(`/bookings/${id}/cancel`, {
      method: 'POST',
      body: JSON.stringify({ reason }),
    });
  }
}

// =============================================================================
// SINGLETON EXPORT
// =============================================================================

export const api = new ApiClient(API_BASE);

// =============================================================================
// TOKEN STORAGE HELPERS
// =============================================================================

export const tokenStorage = {
  getAccessToken: (): string | null => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(TOKEN_KEY);
  },

  setTokens: (tokens: AuthTokens): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(TOKEN_KEY, tokens.accessToken);
    localStorage.setItem(REFRESH_KEY, tokens.refreshToken);
  },

  clearTokens: (): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_KEY);
  },
};
