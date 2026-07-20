import Link from 'next/link'
import { 
  Wind, 
  Car, 
  Wrench, 
  Shield, 
  Sparkles,
  CheckCircle,
  ArrowRight,
  Clock,
  MapPin
} from 'lucide-react'
import { ServiceSchema, FAQSchema } from '@/components/layout/SchemaMarkup'
import { formatPrice, getServiceDurationText } from '@/lib/utils'
import { services } from '@/lib/db/services'

// Icons mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'Wind': Wind,
  'Car': Car,
  'Wrench': Wrench,
  'Shield': Shield,
  'Sparkles': Sparkles,
  'Search': Wind,
}

export const metadata = {
  title: 'Servicios de Aire Acondicionado Automotriz | Autofixer',
  description: 'Diagnóstico, carga de gas, sanitización y reparación de aire acondicionado automotriz. Técnicos certificados a domicilio en toda la Región Metropolitana.',
}

// FAQ Schema
const faqs = [
  {
    question: '¿Qué incluye el diagnóstico de aire acondicionado?',
    answer: 'El diagnóstico incluye revisión visual de todos los componentes, medición de presiones del sistema, revisión de compresor, condensador, evaporador y tuberías. Te entregamos un informe completo del estado de tu sistema.'
  },
  {
    question: '¿Cuánto dura el servicio de carga de gas?',
    answer: 'La carga de gas refrigerante tiene una duración aproximada de 60-90 minutos dependiendo del vehículo y el tipo de problema. Si se requiere diagnóstico adicional, puede tomar más tiempo.'
  },
  {
    question: '¿Qué es el gas R1234yf y cuándo se usa?',
    answer: 'El R1234yf es el nuevo gas refrigerante requerido para vehículos desde 2017 en adelante. Es más amigable con el medio ambiente y requiere equipamiento especializado. El costo es mayor debido al precio del gas.'
  },
  {
    question: '¿La sanitización elimina todos los olores?',
    answer: 'La sanitización profesional elimina el 99.9% de bacterias, hongos y ácaros del sistema. Es muy efectiva para olores por humedad o moho. En casos severos puede requerir un segundo tratamiento.'
  },
  {
    question: '¿Qué incluye la garantía de 90 días?',
    answer: 'La garantía cubre cualquier falla relacionada directamente con el trabajo realizado. Si el problema original reaparece o hay una fuga derivada del servicio, volvemos sin costo adicional.'
  }
]

// Benefits
const benefits = [
  'Técnicos certificados con experiencia',
  'Equipamiento profesional de última generación',
  'Diagnóstico sin costo adicional si no hay reparación',
  'Garantía escrita de 90 días',
  'Precios transparentes sin costos ocultos',
  'Atención a domicilio en toda la RM',
]

export default function ServicesPage() {
  return (
    <>
      <ServiceSchema services={services.map(s => ({ name: s.name, price: s.basePrice }))} />
      <FAQSchema faqs={faqs} />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="badge bg-white/10 text-white mb-4">Nuestros Servicios</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Servicio Profesional de Aire Acondicionado Automotriz
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Diagnóstico, carga de gas, sanitización y reparación. 
              Todos los servicios incluyen garantía de 90 días y atención a domicilio.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon || 'Wind']
              
              return (
                <div key={service.id} className="card card-hover p-8 flex flex-col">
                  <div className="service-card-icon mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.name}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{getServiceDurationText(service.duration)}</span>
                    </div>
                    {service.refrigerantType && (
                      <div className="flex items-center gap-1">
                        <Sparkles className="w-4 h-4" />
                        <span>Gas {service.refrigerantType}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Price */}
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold text-primary">
                        {service.basePrice > 0 ? formatPrice(service.basePrice) : 'Cotizar'}
                      </span>
                      {service.maxPrice && (
                        <span className="text-gray-500">
                          - {formatPrice(service.maxPrice)}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-3">
                      <Link 
                        href={`/servicios/${service.slug}`}
                        className="btn btn-outline flex-1"
                      >
                        Ver Detalles
                      </Link>
                      <Link 
                        href={`/cotizar?service=${service.slug}`}
                        className="btn btn-secondary flex-1"
                      >
                        Cotizar
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Refrigerant Info */}
      <section className="section section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Qué Tipo de Gas Usa tu Vehículo?
            </h2>
            <p className="text-lg text-gray-600">
              La mayoría de los vehículos fabricados antes de 2017 usan gas R134a, 
              mientras que los modelos más nuevos usan R1234yf.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-8">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Car className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Gas R134a
              </h3>
              <p className="text-gray-600 mb-4">
                Vehículos anteriores a 2017. Gas más común y económico.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Costo promedio: $35.000 - $70.000
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Disponible en la mayoría de talleres
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Más de 20 años en el mercado
                </li>
              </ul>
              <Link href="/servicios/carga-gas" className="btn btn-outline w-full">
                Carga R134a - Desde $35.000
              </Link>
            </div>
            
            <div className="card p-8 border-2 border-secondary/30 bg-gradient-to-br from-white to-secondary/5">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Gas R1234yf
              </h3>
              <p className="text-gray-600 mb-4">
                Vehículos desde 2017. Gas ecológico de última generación.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Costo promedio: $90.000+
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  99.9% menor impacto ambiental
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Equipamiento especializado requerido
                </li>
              </ul>
              <Link href="/servicios/carga-gas" className="btn btn-secondary w-full">
                Carga R1234yf - Desde $90.000
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-gradient text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿No Sabes Qué Servicio Necesitas?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Llámanos o escríbenos por WhatsApp y te orientamos sin costo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cotizar" className="btn bg-white text-primary hover:bg-gray-100 btn-lg">
              Usar Cotizador Online
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+56900000000" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary btn-lg">
              <MapPin className="w-5 h-5" />
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
