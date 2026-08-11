'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, ChevronDown, Loader2 } from 'lucide-react'

const serviceOptions = [
  { value: 'diagnostico', label: 'Diagnóstico de AC', price: 'Desde $15.000' },
  { value: 'carga-r134a', label: 'Carga de Gas R134a', price: 'Desde $35.000' },
  { value: 'carga-r1234yf', label: 'Carga de Gas R1234yf', price: 'Desde $90.000' },
  { value: 'sanitizacion', label: 'Sanitización', price: 'Desde $45.000' },
  { value: 'reparacion', label: 'Reparación', price: 'Cotizar' },
]

const communeOptions = [
  { value: 'providencia', label: 'Providencia' },
  { value: 'las-condes', label: 'Las Condes' },
  { value: 'nunoa', label: 'Ñuñoa' },
  { value: 'santiago', label: 'Santiago Centro' },
  { value: 'la-florida', label: 'La Florida' },
  { value: 'vitacura', label: 'Vitacura' },
  { value: 'la-reina', label: 'La Reina' },
  { value: 'maipu', label: 'Maipú' },
  { value: 'puente-alto', label: 'Puente Alto' },
  { value: 'penalolen', label: 'Peñalolén' },
]

const vehicleTypeOptions = [
  { value: 'sedan', label: 'Sedán' },
  { value: 'suv', label: 'SUV / Camioneta' },
  { value: 'hatchback', label: 'Hatchback' },
  { value: 'pickup', label: 'Pickup' },
]

export function HeroForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    service: '',
    vehicleType: '',
    commune: '',
    phone: '',
  })
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // Validation
    if (!formData.service || !formData.vehicleType || !formData.commune || !formData.phone) {
      setError('Por favor completa todos los campos')
      return
    }
    
    // Phone validation (Chilean format)
    const phoneRegex = /^\+56 9 [0-9]{8}$/
    if (!phoneRegex.test(formData.phone)) {
      setError('Ingresa un número válido (ej: +56 9 3507 5600)')
      return
    }
    
    setIsLoading(true)
    
    // Navigate to cotizador with pre-filled data
    const params = new URLSearchParams({
      service: formData.service,
      vehicleType: formData.vehicleType,
      commune: formData.commune,
    })
    
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Track: cotizador iniciado (lead capturado: telefono + servicio + comuna)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        event_category: 'engagement',
        event_label: 'hero_form_cotizar',
        form_name: 'hero_contact',
        service: formData.service || 'general',
        source: 'hero_form',
      })
    }

    router.push(`/cotizar?${params.toString()}`)
  }

  return (
    <div className="bg-white rounded-2xl shadow-elevated p-8 animate-slide-up">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Cotiza tu Servicio
        </h2>
        <p className="text-gray-600">
          Completa los datos y te mostraremos el precio estimado al instante.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Service Selection */}
        <div>
          <label className="form-label">Servicio</label>
          <div className="relative">
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="form-input appearance-none pr-10"
            >
              <option value="">Selecciona un servicio</option>
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label} - {option.price}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        {/* Vehicle Type */}
        <div>
          <label className="form-label">Tipo de Vehículo</label>
          <div className="relative">
            <select
              value={formData.vehicleType}
              onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
              className="form-input appearance-none pr-10"
            >
              <option value="">Selecciona el tipo</option>
              {vehicleTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        {/* Commune */}
        <div>
          <label className="form-label">Tu Comuna</label>
          <div className="relative">
            <select
              value={formData.commune}
              onChange={(e) => setFormData({ ...formData, commune: e.target.value })}
              className="form-input appearance-none pr-10"
            >
              <option value="">Selecciona tu comuna</option>
              {communeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        {/* Phone */}
        <div>
          <label className="form-label">Teléfono (WhatsApp)</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+56 9 3507 5600"
            className="form-input"
          />
          <p className="text-xs text-gray-500 mt-1">
            Te contactaremos por WhatsApp para confirmar la reserva.
          </p>
        </div>
        
        {/* Error Message */}
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}
        
        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="btn btn-secondary w-full btn-lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Procesando...
            </>
          ) : (
            <>
              <Search className="w-5 h-5" />
              Cotizar Ahora
            </>
          )}
        </button>
        
        {/* Trust Text */}
        <p className="text-xs text-gray-500 text-center">
          Al cotizar aceptas nuestros{' '}
          <a href="/terminos-y-condiciones" className="text-secondary hover:underline">
            términos y condiciones
          </a>
        </p>
      </form>
    </div>
  )
}
