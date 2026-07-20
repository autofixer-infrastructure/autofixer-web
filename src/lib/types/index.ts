// Service types and interfaces
export interface Service {
  id: string
  slug: string
  name: string
  description: string
  basePrice: number
  maxPrice?: number | null
  duration: number
  refrigerantType?: 'R134A' | 'R1234YF' | 'R290'
  icon?: string
  featured?: boolean
}

export interface ServiceFAQ {
  id: string
  question: string
  answer: string
  order?: number
}

// Vehicle types
export interface Vehicle {
  id: string
  plate: string
  brand: string
  model: string
  year: number
  color?: string
  refrigerantType: 'R134A' | 'R1234YF' | 'R290'
  vehicleType: 'SEDAN' | 'HATCHBACK' | 'SUV' | 'PICKUP' | 'VAN' | 'TRUCK'
}

// Booking types
export interface Booking {
  id: string
  scheduledDate: Date
  scheduledTime: string
  status: BookingStatus
  subtotal: number
  displacementFee: number
  total: number
  notes?: string
}

export type BookingStatus = 
  | 'PENDING_PAYMENT'
  | 'CONFIRMED'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'CANCELLED'
  | 'NO_SHOW'

// Quote types
export interface Quote {
  service: Service
  vehicleType: Vehicle['vehicleType']
  commune: Commune
  displacementFee: number
  estimatedTotal: number
  estimatedDuration: number
  availableSlots: TimeSlot[]
}

export interface TimeSlot {
  time: string
  available: boolean
}

export interface Commune {
  id: string
  name: string
  slug: string
  zone: Zone
  displacementFee: number
}

export interface Zone {
  id: string
  name: string
  slug: string
}

// User types
export interface User {
  id: string
  email: string
  name?: string
  phone?: string
  role: 'CLIENT' | 'TECHNICIAN' | 'ADMIN'
}

// Payment types
export interface Payment {
  id: string
  amount: number
  method: 'TRANSFER' | 'FLOW' | 'WEBPAY' | 'PAYPAL' | 'MERCADOPAGO' | 'CASH'
  status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED'
  externalId?: string
}

// Review types
export interface Review {
  id: string
  rating: number
  title?: string
  content: string
  photos?: string[]
  videoUrl?: string
  serviceType: string
  user: {
    name: string
  }
  vehicle: {
    brand: string
    model: string
    year: number
  }
  commune: {
    name: string
  }
}

// Blog types
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  featuredImage?: string
  category: string
  tags: string[]
  readingTime: number
  author?: string
  publishedAt?: Date
}

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}
