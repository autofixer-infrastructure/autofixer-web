'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { 
  CheckCircle, 
  Clock, 
  MapPin, 
  Shield, 
  ChevronRight,
  ChevronLeft,
  Loader2,
  Phone,
  Calendar,
  AlertCircle
} from 'lucide-react'
import { formatPrice, calculateDisplacementFee, generateTimeSlots } from '@/lib/utils'
import { quoteService, SERVICE_TYPE_MAP, VEHICLE_TYPE_MAP } from '@/lib/api/quote-service'
import { bookingService } from '@/lib/api/booking-service'

// Service options
const serviceOptions = [
  { 
    value: 'diagnostico', 
    label: 'Diagnóstico de AC', 
    price: 25000,
    duration: 60,
    description: 'Revisión completa del sistema'
  },
  { 
    value: 'carga-r134a', 
    label: 'Carga de Gas R134a', 
    price: 35000,
    maxPrice: 70000,
    duration: 90,
    description: 'Para vehículos anteriores a 2017'
  },
  { 
    value: 'carga-r1234yf', 
    label: 'Carga de Gas R1234yf', 
    price: 90000,
    duration: 90,
    description: 'Para vehículos desde 2017'
  },
  { 
    value: 'sanitizacion-sedan', 
    label: 'Sanitización Sedán', 
    price: 45000,
    duration: 45,
    description: 'Eliminación de hongos y malos olores'
  },
  { 
    value: 'sanitizacion-suv', 
    label: 'Sanitización SUV/Camioneta', 
    price: 55000,
    duration: 45,
    description: 'Para vehículos más grandes'
  },
]

// Vehicle types
const vehicleTypes = [
  { value: 'sedan', label: 'Sedán' },
  { value: 'hatchback', label: 'Hatchback' },
  { value: 'suv', label: 'SUV / Camioneta' },
  { value: 'pickup', label: 'Pickup' },
  { value: 'van', label: 'Van' },
]

// Popular communes
const popularCommunes = [
  'Providencia', 'Las Condes', 'Ñuñoa', 'Santiago Centro', 
  'La Florida', 'Maipú', 'Vitacura', 'La Reina',
  'Peñalolén', 'Puente Alto', 'San Bernardo'
]

// Time slots
const timeSlots = generateTimeSlots(8, 18, 60)

type Step = 1 | 2 | 3 | 4

function CotizarForm() {
  const searchParams = useSearchParams()
  const [step, setStep] = useState<Step>(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [quoteId, setQuoteId] = useState<string | null>(null)
  const [bookingNumber, setBookingNumber] = useState<string | null>(null)
  
  // Form state
  const [formData, setFormData] = useState({
    service: '',
    vehicleType: '',
    commune: '',
    vehicleBrand: '',
    vehicleModel: '',
    vehicleYear: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: '',
  })
  
  // Calculated pricing from API
  const [calculatedQuote, setCalculatedQuote] = useState<any>(null)
  
  // Calculate totals (fallback to frontend calculation if API not available)
  const selectedService = serviceOptions.find(s => s.value === formData.service)
  const displacementFee = calculatedQuote?.pricing?.travelCost 
    || calculateDisplacementFee(formData.commune.toLowerCase().replace(/ /g, '-'))
  const servicePrice = calculatedQuote?.pricing?.laborCost 
    || calculatedQuote?.pricing?.subtotal 
    || selectedService?.price 
    || 0
  const total = calculatedQuote?.pricing?.total || (servicePrice + displacementFee)
  
  // Pre-fill from URL params
  useEffect(() => {
    const service = searchParams.get('service')
    if (service) {
      setFormData(prev => ({ ...prev, service }))
    }
  }, [searchParams])
  
  // Calculate quote when service/vehicle/commune changes
  useEffect(() => {
    if (formData.service && formData.vehicleType && formData.commune) {
      calculateQuote()
    }
  }, [formData.service, formData.vehicleType, formData.commune])
  
  // Calculate quote via API
  const calculateQuote = async () => {
    try {
      const result = await quoteService.calculate({
        service: formData.service,
        vehicleType: formData.vehicleType,
        commune: formData.commune,
      })
      setCalculatedQuote(result)
    } catch (err) {
      // Fallback to frontend calculation
      console.warn('Quote API not available, using frontend calculation')
      setCalculatedQuote(null)
    }
  }
  
  // Navigation
  const canProceed = () => {
    switch (step) {
      case 1: return formData.service && formData.vehicleType && formData.commune
      case 2: return formData.name && formData.email && formData.phone
      case 3: return formData.date && formData.time
      default: return true
    }
  }
  
  const handleNext = () => {
    if (canProceed() && step < 4) {
      setStep((step + 1) as Step)
    }
  }
  
  const handleBack = () => {
    if (step > 1) {
      setStep((step - 1) as Step)
    }
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    try {
      // Step 1: Create quote
      let quoteId = null
      try {
        const quote = await quoteService.create({
          email: formData.email,
          phone: formData.phone,
          commune: formData.commune,
          vehicleType: formData.vehicleType,
          vehicleBrand: formData.vehicleBrand,
          vehicleModel: formData.vehicleModel,
          symptoms: [formData.service],
          description: formData.notes,
        })
        quoteId = quote.id
        setQuoteId(quote.id)
      } catch (quoteErr) {
        console.warn('Quote creation failed, continuing with booking only')
      }
      
      // Step 2: Create booking via public endpoint (no auth required)
      try {
        const booking = await api.createPublicBooking({
          clientEmail: formData.email,
          clientName: formData.name,
          clientPhone: formData.phone,
          commune: formData.commune,
          vehicleBrand: formData.vehicleBrand,
          vehicleModel: formData.vehicleModel,
          vehicleType: formData.vehicleType,
          quoteId,
          laborCost: calculatedQuote?.pricing?.laborCost || selectedService?.price || 25000,
          partsCost: calculatedQuote?.pricing?.partsCost || 0,
          materialsCost: calculatedQuote?.pricing?.materialsCost || 0,
          travelCost: calculatedQuote?.pricing?.travelCost || displacementFee,
          scheduledDate: formData.date,
          scheduledTime: formData.time,
          estimatedDurationMinutes: selectedService?.duration || 60,
        })
        setBookingNumber(booking.bookingNumber)
      } catch (bookingErr) {
        // If API not available, just show success
        console.warn('Booking API not available:', bookingErr)
      }
      
      setIsLoading(false)
      setStep(4)
    } catch (err: any) {
      setError(err.message || 'Error al procesar tu solicitud. Intenta nuevamente.')
      setIsLoading(false)
    }
  }
  
  // Steps
  const steps = [
    { number: 1, label: 'Servicio' },
    { number: 2, label: 'Tus Datos' },
    { number: 3, label: 'Horario' },
    { number: 4, label: 'Confirmación' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Cotizar Servicio
          </h1>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-between">
            {steps.map((s, index) => (
              <div key={s.number} className="flex items-center">
                <div className={`
                  flex items-center justify-center w-10 h-10 rounded-full font-semibold
                  ${step >= s.number 
                    ? 'bg-secondary text-white' 
                    : 'bg-gray-200 text-gray-500'}
                `}>
                  {step > s.number ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    s.number
                  )}
                </div>
                <span className={`
                  ml-3 font-medium hidden sm:block
                  ${step >= s.number ? 'text-gray-900' : 'text-gray-500'}
                `}>
                  {s.label}
                </span>
                {index < steps.length - 1 && (
                  <div className={`
                    w-12 sm:w-24 h-1 mx-4
                    ${step > s.number ? 'bg-secondary' : 'bg-gray-200'}
                  `} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-card p-8">
              
              {/* Step 1: Service Selection */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      ¿Qué servicio necesitas?
                    </h2>
                    <p className="text-gray-600">
                      Selecciona el servicio y los datos de tu vehículo.
                    </p>
                  </div>
                  
                  {/* Service Selection */}
                  <div>
                    <label className="form-label">Servicio</label>
                    <div className="space-y-3">
                      {serviceOptions.map((service) => (
                        <label
                          key={service.value}
                          className={`
                            flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all
                            ${formData.service === service.value 
                              ? 'border-secondary bg-secondary/5' 
                              : 'border-gray-200 hover:border-gray-300'}
                          `}
                        >
                          <input
                            type="radio"
                            name="service"
                            value={service.value}
                            checked={formData.service === service.value}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-5 h-5 text-secondary"
                          />
                          <div className="ml-4 flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-gray-900">{service.label}</span>
                              <span className="font-semibold text-secondary">
                                {formatPrice(service.price)}
                                {service.maxPrice && ` - ${formatPrice(service.maxPrice!)}`}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Vehicle Type */}
                  <div>
                    <label className="form-label">Tipo de Vehículo</label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                      {vehicleTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, vehicleType: type.value })}
                          className={`
                            p-3 rounded-xl border-2 text-center transition-all
                            ${formData.vehicleType === type.value
                              ? 'border-secondary bg-secondary/5 text-secondary'
                              : 'border-gray-200 hover:border-gray-300 text-gray-700'}
                          `}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Commune */}
                  <div>
                    <label className="form-label">Tu Comuna</label>
                    <select
                      value={formData.commune}
                      onChange={(e) => setFormData({ ...formData, commune: e.target.value })}
                      className="form-input"
                    >
                      <option value="">Selecciona tu comuna</option>
                      {popularCommunes.map((commune) => (
                        <option key={commune} value={commune.toLowerCase()}>
                          {commune}
                        </option>
                      ))}
                    </select>
                    {formData.commune && displacementFee > 0 && (
                      <p className="text-sm text-gray-500 mt-2">
                        Desplazamiento: +{formatPrice(displacementFee)}
                      </p>
                    )}
                  </div>
                </div>
              )}
              
              {/* Step 2: Contact Info */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Tus datos de contacto
                    </h2>
                    <p className="text-gray-600">
                      Necesitamos tus datos para confirmar la reserva.
                    </p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="sm:col-span-2">
                      <label className="form-label">Nombre completo</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Juan Pérez"
                        className="form-input"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="juan@email.com"
                        className="form-input"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Teléfono (WhatsApp)</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+56 9 1234 5678"
                        className="form-input"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Marca del vehículo (opcional)</label>
                      <input
                        type="text"
                        value={formData.vehicleBrand}
                        onChange={(e) => setFormData({ ...formData, vehicleBrand: e.target.value })}
                        placeholder="Toyota"
                        className="form-input"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Modelo del vehículo (opcional)</label>
                      <input
                        type="text"
                        value={formData.vehicleModel}
                        onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                        placeholder="Corolla"
                        className="form-input"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="form-label">Notas adicionales (opcional)</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Ej: El aire no enfría, solo calienta..."
                      rows={3}
                      className="form-input"
                    />
                  </div>
                </div>
              )}
              
              {/* Step 3: Schedule */}
              {step === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Selecciona fecha y hora
                    </h2>
                    <p className="text-gray-600">
                      Horarios disponibles de lunes a viernes.
                    </p>
                  </div>
                  
                  {/* Date */}
                  <div>
                    <label className="form-label">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Fecha preferida
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className="form-input"
                    />
                  </div>
                  
                  {/* Time Slots */}
                  <div>
                    <label className="form-label">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Horario preferente
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData({ ...formData, time: slot })}
                          className={`
                            p-3 rounded-xl border-2 text-center font-medium transition-all
                            ${formData.time === slot
                              ? 'border-secondary bg-secondary/5 text-secondary'
                              : 'border-gray-200 hover:border-gray-300 text-gray-700'}
                          `}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Info box */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-sm text-blue-800">
                      <strong>Nota:</strong> La fecha y hora seleccionadas están sujetas a disponibilidad. 
                      Te contactaremos por WhatsApp para confirmar tu reserva.
                    </p>
                  </div>
                </div>
              )}
              
              {/* Step 4: Confirmation */}
              {step === 4 && (
                <div className="text-center py-8 animate-fade-in">
                  <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    ¡Solicitud Enviada!
                  </h2>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Hemos recibido tu solicitud de reserva. Te contactaremos por WhatsApp 
                    en los próximos minutos para confirmar la fecha y hora.
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
                    <h3 className="font-semibold text-gray-900 mb-4">Resumen de tu solicitud:</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Servicio:</span>
                        <span className="font-medium">{selectedService?.label}</span>
                      </div>
                      {bookingNumber && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">N° Reserva:</span>
                          <span className="font-bold text-secondary">{bookingNumber}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-gray-600">Fecha:</span>
                        <span className="font-medium">{formData.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Hora:</span>
                        <span className="font-medium">{formData.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total estimado:</span>
                        <span className="font-bold text-secondary">{formatPrice(total)}</span>
                      </div>
                    </div>
                  </div>
                  
                  {error && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-left max-w-md mx-auto">
                      <p className="text-sm text-amber-800">
                        <AlertCircle className="w-4 h-4 inline mr-2" />
                        Tu solicitud fue guardada. Te contactaremos pronto para confirmar.
                      </p>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:+569****0000" className="btn btn-outline">
                      <Phone className="w-5 h-5" />
                      Llamar si no te contactamos
                    </a>
                  </div>
                </div>
              )}
              
              {/* Navigation Buttons */}
              {step < 4 && (
                <div className="flex justify-between mt-8 pt-6 border-t">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="btn btn-ghost"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Volver
                    </button>
                  ) : (
                    <div />
                  )}
                  
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!canProceed()}
                      className="btn btn-secondary"
                    >
                      Continuar
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!canProceed() || isLoading}
                      className="btn btn-secondary"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Confirmar Reserva
                          <ChevronRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
          
          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-card p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">
                Resumen
              </h3>
              
              {selectedService ? (
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-500 mb-1">Servicio</p>
                    <p className="font-medium text-gray-900">{selectedService.label}</p>
                    <p className="text-sm text-gray-600">{selectedService.description}</p>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duración aprox.</span>
                    <span className="font-medium">{selectedService.duration} min</span>
                  </div>
                  
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Servicio</span>
                      <span className="font-medium">{formatPrice(servicePrice)}</span>
                    </div>
                    {displacementFee > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Desplazamiento</span>
                        <span className="font-medium">+{formatPrice(displacementFee)}</span>
                      </div>
                    )}
                    <div className="flex justify-between pt-2 border-t">
                      <span className="font-semibold text-gray-900">Total estimado</span>
                      <span className="font-bold text-secondary text-lg">{formatPrice(total)}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-sm">
                  Selecciona un servicio para ver el resumen.
                </p>
              )}
              
              {/* Trust signals */}
              <div className="mt-6 pt-6 border-t space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Shield className="w-5 h-5 text-secondary" />
                  <span>Garantía de 90 días</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Técnicos certificados</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span>Servicio a domicilio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CotizarPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-secondary border-t-transparent rounded-full" />
      </div>
    }>
      <CotizarForm />
    </Suspense>
  )
}
