/**
 * Booking Service
 * Handles booking creation, updates, and queries
 */

import { api } from './client'

export type BookingStatus = 
  | 'PENDING'
  | 'CONFIRMED'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'CANCELLED'
  | 'NO_SHOW'

export interface Vehicle {
  id: string
  plate: string
  brand: string
  model: string
  year: number
  type: string
}

export interface Technician {
  id: string
  user: {
    firstName: string
    lastName: string
    phone: string
  }
}

export interface Client {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
}

export interface BookingService {
  serviceId: string
  service: {
    id: string
    name: string
    type: string
  }
  quantity: number
  unitPrice: number
  totalPrice: number
  notes?: string
}

export interface Booking {
  id: string
  bookingNumber: string
  clientId: string
  vehicleId?: string
  technicianId?: string
  addressId?: string
  
  // Address details
  street?: string
  number?: string
  department?: string
  commune: string
  lat?: number
  lng?: number
  reference?: string
  
  // Pricing
  laborCost: number
  partsCost: number
  materialsCost: number
  travelCost: number
  discount: number
  subtotal: number
  tax: number
  total: number
  
  // Scheduling
  scheduledDate: string
  scheduledTime: string
  estimatedDurationMinutes: number
  serviceStartTime?: string
  serviceEndTime?: string
  
  // Status
  status: BookingStatus
  statusHistory?: Array<{
    status: string
    timestamp: string
    userId?: string
    note?: string
  }>
  
  // Relations
  vehicle?: Vehicle
  client?: Client
  technician?: Technician
  services?: BookingService[]
  
  // Metadata
  createdAt: string
  updatedAt: string
}

export interface CreateBookingData {
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
}

export interface PaginatedResponse<T> {
  data: T[]
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}

export class BookingService {
  /**
   * Create a new booking
   */
  async create(data: CreateBookingData): Promise<Booking> {
    return api.createBooking(data)
  }

  /**
   * Get booking by ID
   */
  async getById(id: string): Promise<Booking> {
    return api.getBooking(id)
  }

  /**
   * Get booking by booking number
   */
  async getByNumber(bookingNumber: string): Promise<Booking> {
    return api.getBookingByNumber(bookingNumber)
  }

  /**
   * Get all bookings with pagination and filters
   */
  async getAll(params?: {
    page?: number
    limit?: number
    status?: BookingStatus
    fromDate?: string
    toDate?: string
  }): Promise<PaginatedResponse<Booking>> {
    return api.getBookings(params) as Promise<PaginatedResponse<Booking>>
  }

  /**
   * Get my bookings (for authenticated client)
   */
  async getMyBookings(params?: {
    page?: number
    limit?: number
    status?: BookingStatus
  }): Promise<PaginatedResponse<Booking>> {
    return api.getBookings(params) as Promise<PaginatedResponse<Booking>>
  }

  /**
   * Update booking
   */
  async update(id: string, data: Partial<CreateBookingData>): Promise<Booking> {
    return api.updateBooking(id, data) as Promise<Booking>
  }

  /**
   * Cancel booking
   */
  async cancel(id: string, reason?: string): Promise<Booking> {
    return api.cancelBooking(id, reason) as Promise<Booking>
  }

  /**
   * Get available time slots for a specific date
   */
  async getAvailableSlots(date: string, technicianId?: string): Promise<string[]> {
    // TODO: Implement when scheduling service is ready
    // For now, return mock data
    const slots: string[] = []
    for (let hour = 8; hour <= 18; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`)
    }
    return slots
  }
}

export const bookingService = new BookingService()
