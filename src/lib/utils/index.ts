import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format price in CLP
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

// Calculate displacement fee based on commune zone
export function calculateDisplacementFee(communeSlug: string): number {
  const zoneFees: Record<string, number> = {
    // Norte
    'conchali': 10000,
    'huechuraba': 10000,
    'recoleta': 0,
    'independencia': 0,
    'quinta-normal': 5000,
    // Oriente
    'providencia': 5000,
    'las-condes': 10000,
    'vitacura': 15000,
    'la-reina': 5000,
    'nunoa': 5000,
    // Centro
    'santiago': 5000,
    'estacion-central': 10000,
    'cerrillos': 15000,
    'maipu': 10000,
    // Sur
    'la-florida': 15000,
    'san-bernardo': 25000,
    'puente-alto': 25000,
    'penalolen': 10000,
    // Poniente
    'pudahuel': 15000,
    'cerro-navia': 15000,
    'renca': 15000,
    'quilicura': 20000,
  }
  
  return zoneFees[communeSlug] || 15000
}

// Format date
export function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...options,
  }).format(d)
}

// Format time
export function formatTime(time: string): string {
  const [hours, minutes] = time.split(':')
  const hour = parseInt(hours)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const hour12 = hour % 12 || 12
  return `${hour12}:${minutes} ${ampm}`
}

// Generate time slots
export function generateTimeSlots(startHour = 8, endHour = 18, interval = 60): string[] {
  const slots: string[] = []
  for (let hour = startHour; hour <= endHour; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`)
  }
  return slots
}

// Slugify text
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Validate Chilean phone
export function validateChileanPhone(phone: string): boolean {
  const regex = /^(\+56 9 [0-9]{8}|09 [0-9]{8})$/
  return regex.test(phone.replace(/\s/g, ''))
}

// Get service duration text
export function getServiceDurationText(minutes: number): string {
  if (minutes < 60) return `${minutes} minutos`
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  if (mins === 0) return `${hours} hora${hours > 1 ? 's' : ''}`
  return `${hours}h ${mins}min`
}

// Get service price range
export function getServicePriceRange(service: { basePrice: number; maxPrice?: number | null }): string {
  if (service.maxPrice) {
    return `Desde ${formatPrice(service.basePrice)} Hasta ${formatPrice(service.maxPrice)}`
  }
  return formatPrice(service.basePrice)
}
