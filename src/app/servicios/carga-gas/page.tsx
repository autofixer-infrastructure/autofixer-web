'use client'

import Link from 'next/link'
import { 
  Wind, 
  CheckCircle, 
  Clock, 
  Phone,
  Droplets,
  Gauge,
  ChevronRight,
  ChevronDown,
  AlertTriangle,
  Car,
  Truck,
  ArrowRight
} from 'lucide-react'
import { FAQSchema } from '@/components/layout/SchemaMarkup'

// FAQ Schema
const faqs = [
  {
    question: '¿Cuál es la diferencia entre carga simple y carga doble de gas?',
    answer: 'La carga simple (vacío simple) incluye la extracción del gas residual, vacío del sistema durante 15-20 minutos y carga del nuevo gas refrigerante. La carga doble (vacío y carga fraccionada) realiza dos ciclos de vacío y carga, eliminando completamente la humedad y gases no condensables del sistema. Recomendamos carga doble para sistemas que han tenido fugas reparadas o cuando hay sospecha de contaminación.'
  },
  {
    question: '¿Cómo sé qué tipo de gas usa mi vehículo: R134a o R1234yf?',
    answer: 'La forma más fácil es revisar la etiqueta de información del sistema de aire acondicionado bajo el capó, que indica el tipo y cantidad de gas. Generalmente, los vehículos fabricados antes de 2017 usan R134a, mientras que los modelos desde 2017 en adelante usan R1234yf. Si no encuentras la etiqueta, nuestros técnicos pueden identificarlo durante la visita sin costo adicional.'
  },
  {
    question: '¿Cada cuánto tiempo debo cargar el gas del aire acondicionado?',
    answer: 'El gas refrigerante no se "consume" con el uso normal. Si tu sistema necesita carga de gas más de una vez al año, indica que existe una fuga en el sistema. Una carga correcta con buen estado del sistema debería durar varios años. Recomendamos verificar el sistema anualmente y cargar solo si las presiones están bajas, previa búsqueda de la fuga.'
  },
  {
    question: '¿Qué incluye el servicio de carga de gas?',
    answer: 'El servicio incluye: revisión de presiones antes y después de la carga, extracción del gas residual (en sistemas que lo permitan), vacío del sistema por el tiempo necesario según el tipo de carga, carga de gas refrigerante según las especificaciones del fabricante, verificación de funcionamiento del embrague del compresor, y prueba de enfriamiento en las salidas de aire.'
  },
  {
    question: '¿Por qué la carga de gas R1234yf es más cara que R134a?',
    answer: 'El gas R1234yf es significativamente más costoso que el R134a debido a su tecnología más reciente y su menor impacto ambiental (potencial de calentamiento global 99.9% menor). Además, requiere equipamiento especializado y certificaciones para su manipulación. El precio del gas R1234yf puede ser hasta 10 veces superior al R134a por kilogramo.'
  },
  {
    question: '¿Puedo cargar gas yo mismo o en cualquier taller?',
    answer: 'No recomendamos la carga de gas sin diagnóstico previo. Sin el equipamiento adecuado (manómetros, estación de carga, detectores de fuga), puedes cometer errores que dañen el compresor o contaminen el sistema. Además, cargar gas sin identificar una fuga es temporal porque el gas se escapará. Nuestros técnicos siempre verifican que no haya fugas antes de cargar.'
  }
]

// Pricing tables
const r134aPricing = [
  { vehicleType: 'Sedán / Hatchback', simple: 35000, double: 70000 },
  { vehicleType: 'SUV / Crossover', simple: 45000, double: 85000 },
  { vehicleType: 'Camioneta / Vehículo comercial', simple: 55000, double: 100000 },
]

const r1234yfPricing = [
  { vehicleType: 'Sedán / Hatchback', price: 90000 },
  { vehicleType: 'SUV / Crossover', price: 110000 },
  { vehicleType: 'Camioneta / Vehículo comercial', price: 130000 },
]

// Zone pricing
const zonePricing = [
  { zone: 'Zona 1', areas: 'Recoleta, Independencia, Santiago Centro', price: 0 },
  { zone: 'Zona 2', areas: 'Providencia, Ñuñoa, Las Condes, Vitacura, La Reina, Macul', price: 5000 },
  { zone: 'Zona 3', areas: 'La Florida, Peñalolén, Puente Alto, San Bernardo', price: 10000 },
  { zone: 'Zona 4', areas: 'Pudahuel, Quilicura, Lampa, Batuco', price: 15000 },
  { zone: 'Zona 5', areas: 'Colina, Chicureo, Pirque, San José de Maipo', price: 25000 },
]

// Benefits
const benefits = [
  'Gas refrigerante de alta pureza certificado',
  'Equipamiento calibrado y verificado',
  'Técnicos certificados en manejo de refrigerantes',
  'Verificación de presiones antes y después',
  'Prueba de funcionamiento garantizada',
  'Garantía de 90 días en la carga'
]

export const metadata = {
  title: 'Carga de Gas Refrigerante para Autos R134a y R1234yf a Domicilio | Autofixer',
  description: 'Servicio de carga de gas refrigerante a domicilio en Santiago. R134a desde $35.000 y R1234yf desde $90.000. Carga simple y doble para sedan, SUV y camionetas.',
}

export default function CargaGasPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      
      {/* Breadcrumbs */}
      <nav className="bg-gray-50 border-b py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-primary">Inicio</Link>
            </li>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <li>
              <Link href="/servicios" className="text-gray-500 hover:text-primary">Servicios</Link>
            </li>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <li>
              <span className="text-primary font-medium">Carga de Gas</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Wind className="w-6 h-6" />
              <span className="text-secondary font-medium">Servicio Profesional</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Carga de Gas Refrigerante para Autos — R134a y R1234yf a Domicilio
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Servicio de carga de gas refrigerante para el sistema de aire acondicionado de tu vehículo. 
              Trabajamos con gas R134a para vehículos anteriores a 2017 y R1234yf para modelos más nuevos. 
              Carga simple y doble disponible según las necesidades de tu sistema.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/cotizar?service=carga-gas" className="btn bg-secondary hover:bg-secondary-600 text-white btn-lg">
                Solicitar Carga de Gas
              </Link>
              <a href="tel:+56912345678" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary btn-lg">
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Pricing Bar */}
      <section className="bg-gray-50 border-b py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">Desde $35.000</div>
              <div className="text-sm text-gray-600">Carga R134a</div>
            </div>
            <div className="w-px bg-gray-300 hidden md:block"></div>
            <div>
              <div className="text-2xl font-bold text-primary">Desde $90.000</div>
              <div className="text-sm text-gray-600">Carga R1234yf</div>
            </div>
            <div className="w-px bg-gray-300 hidden md:block"></div>
            <div>
              <div className="text-2xl font-bold text-secondary">60-90 min</div>
              <div className="text-sm text-gray-600">Duración del servicio</div>
            </div>
            <div className="w-px bg-gray-300 hidden md:block"></div>
            <div>
              <div className="text-2xl font-bold text-secondary">90 días</div>
              <div className="text-sm text-gray-600">Garantía</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  ¿Qué es la Carga de Gas Refrigerante?
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  La carga de gas refrigerante es el proceso de añadir o reponer el gas que refrigera 
                  el aire acondicionado de tu vehículo. Este gas es el fluido que absorbe el calor del 
                  interior del vehículo y lo libera al exterior a través del condensador. Sin la cantidad 
                  correcta de gas, el sistema no puede funcionar eficientemente.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  En Autofixer, utilizamos únicamente gas refrigerante de alta pureza certificado, 
                  manejado por técnicos capacitados con equipamiento profesional calibrado. El proceso 
                  incluye siempre una verificación completa del sistema antes y después de la carga 
                  para garantizar que todo funcione correctamente.
                </p>
              </div>

              {/* Types of Gas */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Tipos de Gas Refrigerante para Automóviles
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="card p-6 border-2 border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <Car className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Gas R134a</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      El gas R134a ha sido el estándar de la industria automotriz durante más de 20 años. 
                      Es compatible con la mayoría de los vehículos fabricados hasta 2016.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Vehículos anteriores a 2017
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Mayor disponibilidad en el mercado
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Costo más accesible
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">Desde</span>
                      <span className="text-2xl font-bold text-primary ml-2">$35.000</span>
                    </div>
                  </div>
                  
                  <div className="card p-6 border-2 border-secondary/30">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Wind className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Gas R1234yf</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      El R1234yf es el nuevo estándar global de refrigerantes, requerido para vehículos 
                      desde 2017. Es mucho más amigable con el medio ambiente.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Vehículos desde 2017
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        99.9% menor impacto ambiental
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Tecnología de última generación
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">Desde</span>
                      <span className="text-2xl font-bold text-primary ml-2">$90.000</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800">
                      <strong>Importante:</strong> Si tu vehículo necesita carga de gas más de una vez 
                      por año, es probable que tenga una fuga. No ignoramos este síntoma: siempre 
                      verificamos que no existan fugas antes de proceder con la carga.
                    </p>
                  </div>
                </div>
              </div>

              {/* Types of Charge */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Carga Simple vs Carga Doble: ¿Cuál Necesitas?
                </h2>
                
                <div className="space-y-6">
                  <div className="card p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Gauge className="w-6 h-6 text-primary" />
                      Carga Simple (Vacío Simple)
                    </h3>
                    <p className="text-gray-600 mb-4">
                      La carga simple es el proceso estándar de extracción del gas residual, 
                      aplicación de vacío al sistema y carga del nuevo refrigerante. Es adecuada 
                      para mantenimientos regulares o cuando el sistema ha sido abierto brevemente.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="font-bold text-gray-900">45-60 min</div>
                        <div className="text-sm text-gray-500">Duración</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <Droplets className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="font-bold text-gray-900">15-20 min</div>
                        <div className="text-sm text-gray-500">Vacío</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <CheckCircle className="w-6 h-6 text-secondary mx-auto mb-2" />
                        <div className="font-bold text-gray-900">Ideal para</div>
                        <div className="text-sm text-gray-500">Mantenimiento</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card p-6 border-2 border-secondary/30">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Wind className="w-6 h-6 text-secondary" />
                      Carga Doble (Vacío Fraccionado)
                    </h3>
                    <p className="text-gray-600 mb-4">
                      La carga doble realiza dos ciclos completos de vacío y carga. Este método 
                      es superior para eliminar completamente la humedad residual, gases no 
                      condensables y garantizar un sistema completamente limpio.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-secondary/10 rounded-lg p-4 text-center">
                        <Clock className="w-6 h-6 text-secondary mx-auto mb-2" />
                        <div className="font-bold text-gray-900">60-90 min</div>
                        <div className="text-sm text-gray-500">Duración</div>
                      </div>
                      <div className="bg-secondary/10 rounded-lg p-4 text-center">
                        <Droplets className="w-6 h-6 text-secondary mx-auto mb-2" />
                        <div className="font-bold text-gray-900">40-50 min</div>
                        <div className="text-sm text-gray-500">Vacío total</div>
                      </div>
                      <div className="bg-secondary/10 rounded-lg p-4 text-center">
                        <CheckCircle className="w-6 h-6 text-secondary mx-auto mb-2" />
                        <div className="font-bold text-gray-900">Recomendada para</div>
                        <div className="text-sm text-gray-500">Fugas reparadas</div>
                      </div>
                    </div>
                    <div className="mt-4 bg-secondary/5 rounded-lg p-3">
                      <p className="text-sm text-secondary font-medium">
                        Recomendamos carga doble cuando: se ha reparado una fuga, el sistema 
                        estuvo abierto por largo tiempo, o hay síntomas de contaminación por humedad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Tables */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Precios de Carga de Gas por Tipo de Vehículo
                </h2>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">Carga de Gas R134a</h3>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left p-4 font-bold text-gray-900">Tipo de Vehículo</th>
                        <th className="text-center p-4 font-bold text-gray-900">Carga Simple</th>
                        <th className="text-center p-4 font-bold text-gray-900">Carga Doble</th>
                      </tr>
                    </thead>
                    <tbody>
                      {r134aPricing.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="p-4 text-gray-700 flex items-center gap-2">
                            {item.vehicleType.includes('Camioneta') ? <Truck className="w-5 h-5" /> : <Car className="w-5 h-5" />}
                            {item.vehicleType}
                          </td>
                          <td className="p-4 text-center font-bold text-primary">${item.simple.toLocaleString('es-CL')}</td>
                          <td className="p-4 text-center font-bold text-secondary">${item.double.toLocaleString('es-CL')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">Carga de Gas R1234yf</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left p-4 font-bold text-gray-900">Tipo de Vehículo</th>
                        <th className="text-center p-4 font-bold text-gray-900">Precio</th>
                      </tr>
                    </thead>
                    <tbody>
                      {r1234yfPricing.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="p-4 text-gray-700 flex items-center gap-2">
                            {item.vehicleType.includes('Camioneta') ? <Truck className="w-5 h-5" /> : <Car className="w-5 h-5" />}
                            {item.vehicleType}
                          </td>
                          <td className="p-4 text-center font-bold text-primary">${item.price.toLocaleString('es-CL')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <p className="text-sm text-gray-500 mt-4">
                  * Precios base sin incluir desplazamiento. Ver costos de desplazamiento por zona más abajo.
                </p>
              </div>

              {/* FAQ Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Preguntas Frecuentes sobre Carga de Gas
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group card p-0">
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <span className="font-bold text-gray-900">{faq.question}</span>
                        <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="px-6 pb-6 pt-0 text-gray-600 border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              
              {/* Zone Pricing Card */}
              <div className="card p-6 mb-6 sticky top-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Costo de Desplazamiento</h3>
                
                <div className="space-y-3 mb-6">
                  {zonePricing.map((zone, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <div>
                        <span className="font-medium text-gray-900">{zone.zone}</span>
                        <p className="text-xs text-gray-500">{zone.areas}</p>
                      </div>
                      <span className="font-bold text-primary">
                        {zone.price === 0 ? 'Gratis' : `+$${zone.price.toLocaleString('es-CL')}`}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Link href="/cotizar?service=carga-gas" className="btn btn-secondary w-full btn-lg">
                  Solicitar Carga de Gas
                </Link>
              </div>

              {/* Benefits Card */}
              <div className="card p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gas Type Selector */}
              <div className="card p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">¿No sabes qué gas usa tu auto?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Busca la etiqueta bajo el capó de tu vehículo. Si no la encuentras, nuestro 
                  técnico puede identificarlo durante la visita sin costo adicional.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Car className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">R134a: Vehículos pre-2017</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Wind className="w-4 h-4 text-secondary" />
                    <span className="text-gray-700">R1234yf: Vehículos 2017+</span>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-primary to-primary-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-4">¿Necesitas asesoría?</h3>
                <p className="text-white/80 mb-4 text-sm">
                  Contáctanos y te ayudamos a determinar qué tipo de carga necesita tu vehículo.
                </p>
                <a href="tel:+56912345678" className="btn bg-white text-primary hover:bg-gray-100 w-full mb-3">
                  <Phone className="w-5 h-5" />
                  +56 9 1234 5678
                </a>
                <Link href="/cobertura" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary w-full">
                  <MapPin className="w-4 h-4" />
                  Ver Zonas de Cobertura
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Tu Aire Acondicionado Necesita Carga de Gas?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Solicita tu servicio de carga de gas a domicilio. Nuestros técnicos llegan 
            con todo el equipamiento para dejar tu sistema funcionando perfectamente.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cotizar?service=carga-gas" className="btn btn-secondary btn-lg">
              Solicitar Carga de Gas
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/servicios/diagnostico" className="btn btn-outline btn-lg">
              Primero necesito un diagnóstico
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
