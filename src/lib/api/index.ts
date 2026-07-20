/**
 * API Layer Exports
 * Centralized API communication for Autofixer
 */

// Main API client
export { api } from './client'
export type { ApiResponse, ApiError } from './client'

// Quote service
export { quoteService, QuoteService } from './quote-service'
export type { ServicePrice, QuotePricing, Quote } from './quote-service'
export { SERVICE_TYPE_MAP, VEHICLE_TYPE_MAP, REFRIGERANT_TYPE_MAP } from './quote-service'

// Booking service
export { bookingService, BookingService } from './booking-service'
export type { 
  BookingStatus, 
  Vehicle, 
  Technician, 
  Client, 
  BookingService as BookingServiceItem,
  Booking,
  CreateBookingData,
  PaginatedResponse 
} from './booking-service'
