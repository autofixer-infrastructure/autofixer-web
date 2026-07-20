/**
 * Quote Service - Cotizador
 * Handles quote calculation and creation
 */

import { api } from './client'

export interface ServicePrice {
  serviceId: string
  serviceName: string
  basePrice: number
  vehicleMultiplier: number
  finalPrice: number
}

export interface QuotePricing {
  laborCost: number
  partsCost: number
  materialsCost: number
  travelCost: number
  subtotal: number
  discount: number
  tax: number
  total: number
}

export interface Quote {
  id: string
  clientEmail: string
  clientPhone: string
  commune: string
  address?: string
  vehicleType: string
  vehicleBrand?: string
  vehicleModel?: string
  refrigerantType?: string
  symptoms?: string[]
  selectedServices: ServicePrice[]
  pricing: QuotePricing
  estimatedDuration: number
  validUntil: string
  isConverted: boolean
  createdAt: string
}

// Service type mapping (frontend value → API enum)
export const SERVICE_TYPE_MAP: Record<string, string> = {
  'diagnostico': 'DIAGNOSTIC',
  'carga-r134a': 'R134A_REFILL',
  'carga-r1234yf': 'R1234YF_REFILL',
  'sanitizacion-sedan': 'SANITIZATION',
  'sanitizacion-suv': 'SANITIZATION',
  'compresor': 'COMPRESSOR_REPAIR',
  'evaporador': 'EVAPORATOR_CLEANING',
  'condensador': 'CONDENSER_REPAIR',
  'fugas': 'LEAK_REPAIR',
  'reparacion': 'OTHER',
}

// Vehicle type mapping
export const VEHICLE_TYPE_MAP: Record<string, string> = {
  'sedan': 'SEDAN',
  'hatchback': 'SEDAN',
  'suv': 'SUV',
  'pickup': 'PICKUP',
  'van': 'VAN',
  'truck': 'TRUCK',
  'moto': 'MOTORCYCLE',
}

// Refrigerant type mapping
export const REFRIGERANT_TYPE_MAP: Record<string, string> = {
  'r134a': 'R134A_REFILL',
  'r1234yf': 'R1234YF_REFILL',
}

export class QuoteService {
  /**
   * Calculate a quote without saving to database
   */
  async calculate(data: {
    service: string
    vehicleType: string
    commune: string
    refrigerantType?: string
    symptoms?: string[]
  }): Promise<{
    services: ServicePrice[]
    pricing: QuotePricing
    estimatedDuration: number
    validUntil: string
  }> {
    const apiData = {
      vehicleType: VEHICLE_TYPE_MAP[data.vehicleType] || data.vehicleType.toUpperCase(),
      commune: data.commune,
      symptoms: data.symptoms,
      refrigerantType: data.refrigerantType 
        ? REFRIGERANT_TYPE_MAP[data.refrigerantType] 
        : undefined,
      services: data.service && !data.symptoms?.length
        ? [{ serviceType: SERVICE_TYPE_MAP[data.service] || data.service }]
        : undefined,
    }

    return api.calculateQuote(apiData)
  }

  /**
   * Create a persistent quote in the database
   */
  async create(data: {
    email: string
    phone: string
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
  }): Promise<Quote> {
    const apiData = {
      clientEmail: data.email,
      clientPhone: data.phone,
      commune: data.commune,
      address: data.address,
      vehicleType: VEHICLE_TYPE_MAP[data.vehicleType] || data.vehicleType.toUpperCase(),
      vehicleBrand: data.vehicleBrand,
      vehicleModel: data.vehicleModel,
      refrigerantType: data.refrigerantType 
        ? REFRIGERANT_TYPE_MAP[data.refrigerantType] 
        : undefined,
      symptoms: data.symptoms,
      description: data.description,
      utmSource: data.utmSource,
      utmMedium: data.utmMedium,
      utmCampaign: data.utmCampaign,
    }

    return api.createQuote(apiData)
  }

  /**
   * Get quote by ID
   */
  async getById(id: string): Promise<Quote> {
    return api.getQuote(id)
  }

  /**
   * Get all quotes (for admin/technician)
   */
  async getAll(params?: { page?: number; limit?: number; isConverted?: boolean }) {
    return api.getQuotes(params)
  }
}

export const quoteService = new QuoteService()
