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

export interface BookingServiceItem {
  serviceId: string
  service: { id: string; name: string; type: string }
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
  street?: string
  number?: string
  department?: string
  commune: string
  lat?: number
  lng?: number
  reference?: string
  laborCost: number
  partsCost: number
  materialsCost: number
  travelCost: number
  discount: number
  subtotal: number
  tax: number
  total: number
  scheduledDate: string
  scheduledTime: string
  estimatedDurationMinutes: number
  serviceStartTime?: string
  serviceEndTime?: string
  status: BookingStatus
  statusHistory?: Array<{ status: string; timestamp: string; userId?: string; note?: string }>
  vehicle?: Vehicle
  client?: Client
  technician?: Technician
  services?: BookingServiceItem[]
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
  services?: { serviceId: string; quantity?: number; unitPrice: number; totalPrice: number; notes?: string }[]
}

export interface PaginatedResponse<T> {
  data: T[]
  meta: { total: number; page: number; limit: number; totalPages: number }
}

export interface PublicBookingData {
  vehicleType: string
  commune: string
  vehicleBrand: string
  vehicleModel: string
  vehicleYear: string
  name: string
  clientEmail: string
  clientPhone: string
  date: string
  time: string
  notes: string
  address: string
  refrigerantType: string
  symptoms: string[]
}

export class BookingService {
  async createPublic(data: PublicBookingData): Promise<any> { return api.createPublicBooking(data as any) }
  async create(data: any): Promise<any> { return api.createBooking(data) }
  async getById(id: string): Promise<any> { return api.getBooking(id) }
  async getByNumber(bookingNumber: string): Promise<any> { return api.getBookingByNumber(bookingNumber) }
  async getAll(params?: { page?: number; limit?: number; status?: BookingStatus; fromDate?: string; toDate?: string }): Promise<any> { return api.getBookings(params) }
  async getMyBookings(params?: { page?: number; limit?: number; status?: BookingStatus }): Promise<any> { return api.getBookings(params) }
  async update(id: string, data: any): Promise<any> { return api.updateBooking(id, data) }
  async cancel(id: string, reason?: string): Promise<any> { return api.cancelBooking(id, reason) }
  async getAvailableSlots(date: string, commune: string): Promise<any[]> {
    return api.getAvailableSlots(date, commune)
  }
}

export const bookingService = new BookingService()
