import Link from 'next/link'
import { 
  Shield, 
  Clock, 
  MapPin, 
  Award,
  Phone,
  ArrowRight,
  CheckCircle,
  Car,
  Wind,
  Wrench,
  Star,
  ChevronRight,
  Lock,
  User as UserIcon
} from 'lucide-react'
import { HeroForm } from '@/components/forms/HeroForm'
import { ServiceSchema, FAQSchema } from '@/components/layout/SchemaMarkup'

// SEO
export const metadata = {
  title: 'Autofixer — Servicio de Aire Acondicionado Automotriz a Domicilio en Santiago',
  description: 'Técnicos certificados de aire acondicionado automotriz a domicilio en Santiago. Diagnóstico $25.000, carga de gas desde $35.000. Garantía real de 90 días.',
}

// FAQ Schema
const faqs = [
  {
    question: '¿Cuánto cuesta el diagnóstico de aire acondicionado?',
    answer: 'El diagnóstico tiene un valor de $25.000 CLP más desplazamiento según tu comuna. Incluye revisión completa del sistema de AC, medición de presiones y diagnóstico profesional.'
  },
  {
    question: '¿Cómo funciona el servicio a domicilio?',
    answer: 'Reservas online o por WhatsApp, confirmamos tu horario, nuestro técnico llega a tu ubicación con todos los equipos necesarios, realiza el servicio y te entrega garantía de 90 días.'
  },
  {
    question: '¿Qué incluye la garantía de 90 días?',
    answer: 'La garantía cubre cualquier falla relacionada con el trabajo realizado. Si el problema reaparece dentro de 90 días, volvemos sin costo adicional.'
  },
  {
    question: '¿Cuáles son las comunas de cobertura?',
    answer: 'Cubrimos toda la Región Metropolitana incluyendo Providencia, Las Condes, Ñuñoa, Santiago Centro, La Florida, y más de 50 comunas en total.'
  }
]

// Services data
const services = [
  {
    icon: Wind,
    name: 'Diagnóstico',
    price: 'Desde $25.000',
    description: 'Revisión completa del sistema de aire acondicionado con equipamiento profesional.',
    href: '/servicios/diagnostico'
  },
  {
    icon: Car,
    name: 'Carga de Gas R134a',
    price: 'Desde $35.000',
    description: 'Carga de gas refrigerante R134a para vehículos anteriores a 2017.',
    href: '/servicios/carga-r134a'
  },
  {
    icon: Car,
    name: 'Carga de Gas R1234yf',
    price: 'Desde $90.000',
    description: 'Carga de gas refrigerante R1234yf para vehículos desde 2017 en adelante.',
    href: '/servicios/carga-r1234yf'
  },
  {
    icon: Wind,
    name: 'Sanitización',
    price: 'Desde $45.000',
    description: 'Eliminación de hongos, bacterias y malos olores del sistema de ventilación.',
    href: '/servicios/sanitizacion'
  },
  {
    icon: Wrench,
    name: 'Reparación',
    price: 'Cotizar',
    description: 'Reparación de compresores, condensadores, evaporadores y más.',
    href: '/servicios/reparacion'
  }
]

// Trust signals
const trustSignals = [
  { icon: Shield, label: 'Garantía 90 Días', description: 'En todos los servicios' },
  { icon: Award, label: 'Técnicos Certificados', description: 'Especializados en AC' },
  { icon: Clock, label: 'Respuesta Rápida', description: 'Confirmación en minutos' },
  { icon: MapPin, label: 'A Domicilio', description: 'Llegamos a tu ubicación' }
]

// Testimonials
const testimonials = [
  {
    name: 'Carlos M.',
    vehicle: 'Toyota Corolla 2019',
    commune: 'Providencia',
    rating: 5,
    content: 'El aire no enfriaba hace semanas. Llegaron a la hora pactada, diagnosticaron el problema en 20 minutos y lo dejaron funcionando perfecto. Muy profesionales.',
    service: 'Carga de Gas R134a'
  },
  {
    name: 'María F.',
    vehicle: 'Honda CR-V 2021',
    commune: 'Las Condes',
    rating: 5,
    content: 'Tenía un olor horrible cada vez que prendía el AC. Hicieron la sanitización y ahora el aire está perfecto. La garantía de 90 días me dio confianza.',
    service: 'Sanitización'
  },
  {
    name: 'Roberto S.',
    vehicle: 'Mazda 3 2020',
    commune: 'Ñuñoa',
    rating: 5,
    content: 'Necesitaba la carga de gas para un viaje y me atendieron el mismo día. El técnico llegó con todo el equipamiento y dejó el sistema funcionando al 100%.',
    service: 'Carga de Gas R1234yf'
  }
]

// Zone coverage
const zones = [
  { name: 'Zona Norte', communes: 'Conchalí, Huechuraba, Recoleta, Independencia, Quinta Normal', href: '/cobertura/norte' },
  { name: 'Zona Oriente', communes: 'Providencia, Las Condes, Vitacura, La Reina, Ñuñoa', href: '/cobertura/oriente' },
  { name: 'Zona Centro', communes: 'Santiago, Estación Central, Cerrillos, Maipú', href: '/cobertura/centro' },
  { name: 'Zona Sur', communes: 'La Florida, San Bernardo, Puente Alto, Peñalolén', href: '/cobertura/sur' },
  { name: 'Zona Poniente', communes: 'Pudahuel, Cerro Navia, Renca, Quilicura', href: '/cobertura/poniente' }
]

export default function HomePage() {
  return (
    <>
      {/* SEO Schemas */}
      <ServiceSchema services={services.map(s => ({ name: s.name, price: parseInt(s.price.replace(/[^0-9]/g, '')) || 25000 }))} />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-600 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 hero-pattern opacity-30" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Disponible hoy en Santiago
              </div>
              
              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Aire Acondicionado Automotriz{' '}
                <span className="text-secondary">a Domicilio</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl text-white/80 max-w-xl">
                Técnicos certificados con equipamiento profesional. Diagnóstico, carga de gas, 
                reparación y sanitización en toda la Región Metropolitana.
              </p>
              
              {/* Price highlight */}
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold">$25.000</span>
                <span className="text-xl text-white/70">Diagnóstico + Desplazamiento*</span>
              </div>
              
              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <Link href="/cotizar" className="btn btn-secondary btn-lg">
                  Cotizar Ahora
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:+56900000000" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary btn-lg">
                  <Phone className="w-5 h-5" />
                  Llamar
                </a>
              </div>
              
              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 pt-4">
                {trustSignals.map((signal) => (
                  <div key={signal.label} className="flex items-center gap-2 text-sm text-white/80">
                    <signal.icon className="w-5 h-5 text-secondary" />
                    <span>{signal.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right: Form */}
            <div className="lg:pl-8">
              <HeroForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge badge-secondary mb-4">Nuestros Servicios</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Soluciones Completas para tu AC
            </h2>
            <p className="text-lg text-gray-600">
              Desde diagnóstico hasta reparación completa. Todos los servicios incluyen garantía de 90 días.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link 
                key={service.name} 
                href={service.href}
                className="service-card group"
              >
                <div className="service-card-icon">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="service-card-price">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <span className="text-gray-500 text-sm ml-2">CLP</span>
                </div>
                <div className="mt-4 flex items-center text-secondary font-medium group-hover:gap-2 transition-all">
                  <span>Ver detalles</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
          
          {/* View All Link */}
          <div className="text-center mt-12">
            <Link href="/servicios" className="btn btn-outline btn-lg">
              Ver Todos los Servicios
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Login CTA */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-secondary/10 to-primary/5 border border-secondary/20 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                ¿Quieres ver precios exactos con desplazamiento?
              </h3>
              <p className="text-gray-600 mb-4">
                Crea tu cuenta gratis y consulta los precios con tu comuna específica, 
                sin compromiso y sin necesidad de hablar con un vendedor.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link 
                  href="/auth/register" 
                  className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
                >
                  <UserIcon className="w-5 h-5" />
                  Crear Cuenta Gratis
                </Link>
                <Link 
                  href="/auth/login" 
                  className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Ya tengo cuenta
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={signal.label} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                  <signal.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{signal.label}</h3>
                <p className="text-gray-600">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge badge-secondary mb-4">Cómo Funciona</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              3 Pasos para tu AC Perfecto
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute top-12 left-1/2 w-full h-0.5 bg-secondary/20 hidden md:block" />
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-card">
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Reserva tu Hora</h3>
                <p className="text-gray-600">
                  Cotiza online o llámanos. Selecciona el servicio y la comuna de tu vehículo.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute top-12 left-1/2 w-full h-0.5 bg-secondary/20 hidden md:block" />
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-card">
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Llega el Técnico</h3>
                <p className="text-gray-600">
                  Un técnico certificado llega a tu ubicación con todo el equipamiento necesario.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-card">
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Servicio y Garantía</h3>
                <p className="text-gray-600">
                  Realizamos el trabajo y te entregamos garantía escrita de 90 días.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge badge-secondary mb-4">Testimonios</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-lg text-gray-600">
              Más de 150 clientes satisfechos en toda la Región Metropolitana.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.vehicle}</p>
                    <p className="text-sm text-secondary">{testimonial.commune}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t text-sm text-gray-500">
                  Servicio: {testimonial.service}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Zone */}
      <section className="section section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge bg-white/10 text-white mb-4">Cobertura</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Llegamos a Toda la Región Metropolitana
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Con cobertura en más de 50 comunas. Desde Providencia hasta Puente Alto, 
                desde Pudahuel hasta La Florida.
              </p>
              <Link href="/cobertura" className="btn btn-secondary btn-lg">
                Ver Cobertura Completa
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {zones.map((zone) => (
                <Link
                  key={zone.name}
                  href={zone.href}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-secondary transition-colors">
                        {zone.name}
                      </h3>
                      <p className="text-sm text-white/70">{zone.communes}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-secondary" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge badge-secondary mb-4">Preguntas Frecuentes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resolvemos tus Dudas
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
                <Link href="/faq" className="btn btn-outline">
              Ver Todas las Preguntas
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para un AC Perfecto?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Reserva ahora y recibe atención profesional a domicilio. 
            Diagnóstico desde $25.000 con garantía de 90 días.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cotizar" className="btn bg-white text-primary hover:bg-gray-100 btn-lg">
              Cotizar Ahora
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="https://wa.me/56900000000" className="btn btn-whatsapp btn-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Login Prompt */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-3">
              <Lock className="w-4 h-4 inline mr-1" />
              ¿Quieres ver precios exactos con desplazamiento?
            </p>
            <Link 
              href="/auth/register" 
              className="inline-flex items-center gap-2 text-white hover:text-secondary transition-colors"
            >
              <User className="w-4 h-4" />
              Crea tu cuenta gratis
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
