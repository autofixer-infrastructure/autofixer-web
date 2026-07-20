'use client'

import Link from 'next/link'
import { 
  Search, 
  CheckCircle, 
  Clock, 
  MapPin, 
  Phone,
  Wrench,
  Thermometer,
  Gauge,
  Wind,
  ChevronDown,
  ChevronRight,
  AlertTriangle,
  Calculator,
  Lock,
  User,
  ChevronUp
} from 'lucide-react'
import { FAQSchema } from '@/components/layout/SchemaMarkup'
import { useState } from 'react'

// FAQ Schema
const faqs = [
  {
    question: '¿Qué incluye el diagnóstico completo de aire acondicionado?',
    answer: 'El diagnóstico incluye revisión visual de todos los componentes del sistema (compresor, condensador, evaporador, tuberías, mangueras), medición de presiones de alta y baja con manómetros profesionales, prueba de rendimiento del sistema de climatización, revisión del estado del filtro de habitáculo, verificación decommandos eléctricos y de embrague del compresor. Te entregamos un informe detallado por escrito con el estado de cada componente.'
  },
  {
    question: '¿Cuánto tiempo dura el diagnóstico de aire acondicionado?',
    answer: 'El diagnóstico completo tiene una duración aproximada de 45 a 60 minutos. Durante este tiempo, nuestro técnico realizará todas las pruebas necesarias para identificar cualquier anomalía en el sistema. En casos complejos donde se requiere desmontaje de paneles o revisión eléctrica detallada, el tiempo puede extenderse hasta 90 minutos.'
  },
  {
    question: '¿El diagnóstico tiene algún costo adicional?',
    answer: 'El diagnóstico tiene un costo base de $25.000 que incluye la revisión completa del sistema. Este valor puede verse incrementado únicamente por el costo de desplazamiento según tu comuna de residencia. Si durante el diagnóstico se identifica que necesitas una reparación y contratas el servicio con nosotros, el costo del diagnóstico se descuenta del total del servicio.'
  },
  {
    question: '¿Pueden diagnosticar problemas de mal olor en el aire acondicionado?',
    answer: 'Sí, el diagnóstico incluye la evaluación del sistema de ventilación para identificar las causas de malos olores. Las causas más comunes son acumulación de humedad en el evaporador (generando moho y hongos), residuos de hojas o insectos en los conductos de ventilación, y problemas con el drenaje de condensado. Identificamos el origen exacto para aplicar el tratamiento correcto.'
  },
  {
    question: '¿Qué hago si el diagnóstico revela que mi compresor está fallando?',
    answer: 'Si el diagnóstico indica problemas en el compresor, nuestro técnico te explicará detalladamente la situación y te presentará las opciones disponibles: reparación del compresor (cuando es técnicamente posible y económicamente conveniente) o reemplazo completo por un compresor nuevo o reacondicionado con garantía. Te entregamos un presupuesto detallado para que puedas tomar la mejor decisión para tu vehículo.'
  },
  {
    question: '¿El diagnóstico funciona para cualquier tipo de vehículo?',
    answer: 'Sí, nuestros técnicos están capacitados para diagnosticar sistemas de aire acondicionado de todos los tipos de vehículos: automóviles sedan, SUV, camionetas, vehículos comerciales y vehículos híbridos/eléctricos. Tenemos el equipamiento necesario tanto para sistemas con gas R134a (vehículos anteriores a 2017) como para sistemas con gas R1234yf (vehículos desde 2017).'
  }
]

// Zone pricing
const zonePricing = [
  { zone: 'Zona 1', areas: 'Recoleta, Independencia, Santiago Centro', price: 0 },
  { zone: 'Zona 2', areas: 'Providencia, Ñuñoa, Las Condes, Vitacura, La Reina, Macul', price: 5000 },
  { zone: 'Zona 3', areas: 'La Florida, Peñalolén, Puente Alto, San Bernardo', price: 10000 },
  { zone: 'Zona 4', areas: 'Pudahuel, Quilicura, Lampa, Batuco', price: 15000 },
  { zone: 'Zona 5', areas: 'Colina, Chicureo, Pirque, San José de Maipo', price: 25000 },
]

// Process steps
const processSteps = [
  {
    icon: Gauge,
    title: 'Inspección Visual',
    description: 'Revisión exhaustiva de todos los componentes externos del sistema: mangueras, conexiones, condensador, evaporador y filtros.'
  },
  {
    icon: Thermometer,
    title: 'Medición de Presiones',
    description: 'Uso de manómetros profesionales para medir presiones de alta y baja del sistema de refrigeración.'
  },
  {
    icon: Wind,
    title: 'Prueba de Rendimiento',
    description: 'Verificación de la capacidad de enfriamiento del sistema midiendo la temperatura del aire en las salidas de ventilación.'
  },
  {
    icon: Wrench,
    title: 'Diagnóstico y Reporte',
    description: 'Análisis de resultados y entrega de informe detallado con el estado del sistema y recomendaciones.'
  }
]

export const metadata = {
  title: 'Diagnóstico de Aire Acondicionado Automotriz a Domicilio en Santiago | Autofixer',
  description: 'Servicio profesional de diagnóstico de aire acondicionado automotriz a domicilio en Santiago. Revisión completa con equipamiento profesional. Desde $25.000 + desplazamiento.',
}

export default function DiagnosticoPage() {
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
              <span className="text-primary font-medium">Diagnóstico</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Search className="w-6 h-6" />
              <span className="text-secondary font-medium">Servicio Profesional</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Diagnóstico de Aire Acondicionado Automotriz a Domicilio en Santiago
            </h1>
            <p className="text-xl text-white/80 mb-8">
              ¿Tu aire acondicionado no enfría como antes? Nuestros técnicos certificados realizan 
              una revisión completa del sistema con equipamiento profesional de última generación. 
              Diagnóstico preciso + informe detallado + presupuesto transparente.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/cotizar?service=diagnostico" className="btn bg-secondary hover:bg-secondary-600 text-white btn-lg">
                Solicitar Diagnóstico
              </Link>
              <a href="tel:+56912345678" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary btn-lg">
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-50 border-b py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">+500</div>
              <div className="text-sm text-gray-600">Diagnósticos realizados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">45-60 min</div>
              <div className="text-sm text-gray-600">Duración promedio</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">90 días</div>
              <div className="text-sm text-gray-600">Garantía en trabajos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-gray-600">Informe detallado</div>
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
              
              {/* What is a diagnosis section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  ¿Qué es el Diagnóstico de Aire Acondicionado Automotriz?
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  El diagnóstico de aire acondicionado automotriz es un proceso de revisión completa 
                  que permite identificar con precisión el estado de todos los componentes del sistema 
                  de climatización de tu vehículo. A diferencia de una simple revisión visual, el 
                  diagnóstico profesional utiliza equipamiento especializado para medir presiones, 
                  verificar temperaturas y detectar fugas de gas refrigerante.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  En Autofixer, nuestro diagnóstico incluye una evaluación exhaustiva que cubre desde 
                  el compresor hasta los conductos de ventilación interior. El objetivo es identificar 
                  cualquier anomalía antes de que se convierta en una falla costosa, brindándote toda 
                  la información necesaria para tomar decisiones informadas sobre el mantenimiento de tu vehículo.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-blue-900 mb-2">¿Por qué es importante el diagnóstico?</h3>
                      <p className="text-blue-800">
                        Muchas veces, un aire acondicionado que no enfría bien puede tener causas simples 
                        como bajo nivel de gas o un filtro obstruido. Otras veces, puede indicar problemas 
                        graves en el compresor que, si se ignoran, pueden resultar en reparaciones de 
                        alto costo. El diagnóstico profesional te ahorra dinero a largo plazo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Proceso de Diagnóstico Paso a Paso
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Nuestro proceso de diagnóstico sigue una metodología estandarizada que garantiza 
                  no dejar ningún componente sin revisar. Cada paso es realizado por técnicos 
                  certificados utilizando equipamiento calibrado.
                </p>
                
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                        {index < processSteps.length - 1 && (
                          <div className="w-0.5 h-full min-h-[60px] bg-primary/20 ml-6 mt-2" />
                        )}
                      </div>
                      <div className="pb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What does it include */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  ¿Qué Incluye el Diagnóstico?
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="card p-6">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                      Revisión de Componentes
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Compresor y embrague electromagnético</li>
                      <li>• Condensador y ventiladores de enfriamiento</li>
                      <li>• Evaporador y resistencia de calefacción</li>
                      <li>• Tuberías y mangueras de refrigerante</li>
                      <li>• Válvula de expansión o tubo de orificio</li>
                      <li>• Depósito de desecante (acumulador)</li>
                    </ul>
                  </div>
                  <div className="card p-6">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                      Pruebas y Mediciones
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Medición de presión de alta y baja</li>
                      <li>• Prueba de temperatura de salida de aire</li>
                      <li>• Verificación de nivel de gas refrigerante</li>
                      <li>• Detección de fugas con trazador UV</li>
                      <li>• Revisión de conexiones eléctricas</li>
                      <li>• Estado del filtro de habitáculo</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* When to do it */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  ¿Cuándo Debes Realizar un Diagnóstico?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Es recomendable realizar un diagnóstico preventivo al menos una vez al año, 
                  idealmente antes del verano. Sin embargo, hay situaciones específicas donde el 
                  diagnóstico se vuelve urgente:
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-red-900">Aire no enfria o enfria poco</h3>
                      <p className="text-red-700">Cuando el sistema está encendido pero la temperatura no baja de 15-18°C</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-orange-900">Ruido anormal del compresor</h3>
                      <p className="text-orange-700">Ruidos metálicos, vibraciones o chirridos al activar el AC</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-yellow-900">Mal olor al encender el aire</h3>
                      <p className="text-yellow-700">Olores a humedad, moho o humedad persistente</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-blue-900">Consumo excesivo de refrigerante</h3>
                      <p className="text-blue-700">Si necesitas recargar gas más de una vez por temporada</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Preguntas Frecuentes sobre Diagnóstico de AC
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
              
              {/* Pricing Card */}
              <div className="card p-6 mb-6 sticky top-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Precios por Zona</h3>
                
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
                
                <div className="bg-primary/5 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Diagnóstico base:</span>
                    <span className="font-bold text-primary text-lg">$25.000</span>
                  </div>
                </div>
                
                <Link href="/cotizar?service=diagnostico" className="btn btn-secondary w-full btn-lg">
                  Solicitar Diagnóstico
                </Link>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  El diagnóstico tiene garantía de satisfacción. Si no hay reparación, solo pagas el diagnóstico.
                </p>
              </div>

              {/* Login Prompt - Show Prices */}
              <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 border-2 border-secondary/20 rounded-xl p-5 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Lock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Precios Exactos</h4>
                    <p className="text-xs text-gray-600">con tu comuna específica</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Regístrate gratis para ver el precio total con desplazamiento según tu ubicación.
                </p>
                <div className="space-y-2">
                  <Link 
                    href="/auth/register" 
                    className="flex items-center justify-center gap-2 w-full bg-secondary text-white py-2.5 px-4 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
                  >
                    <User className="w-4 h-4" />
                    Crear Cuenta Gratis
                  </Link>
                  <Link 
                    href="/auth/login" 
                    className="flex items-center justify-center gap-2 w-full border border-secondary/30 text-secondary py-2 px-4 rounded-lg font-medium hover:bg-secondary/5 transition-colors"
                  >
                    Ya tengo cuenta
                  </Link>
                </div>
              </div>

              {/* Benefits Card */}
              <div className="card p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Técnicos certificados con más de 10 años de experiencia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Equipamiento profesional de última generación</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Informe escrito detallado del estado de tu sistema</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Sin costos ocultos - precio cerrado antes de empezar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Garantía de 90 días en todos los trabajos</span>
                  </li>
                </ul>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-primary to-primary-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-4">¿Prefieres hablar con un asesor?</h3>
                <p className="text-white/80 mb-4 text-sm">
                  Contáctanos directamente y te orientamos sobre el diagnóstico que necesitas.
                </p>
                <a href="tel:+56912345678" className="btn bg-white text-primary hover:bg-gray-100 w-full mb-3">
                  <Phone className="w-5 h-5" />
                  +56 9 1234 5678
                </a>
                <Link href="/contacto" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary w-full">
                  Escribir por WhatsApp
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
            ¿Tu Aire Acondicionado Necesita Atención?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            No dejes que un problema pequeño se transforme en una reparación costosa. 
            Solicita tu diagnóstico hoy y conoce el estado real de tu sistema de climatización.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cotizar?service=diagnostico" className="btn btn-secondary btn-lg">
              Solicitar Diagnóstico
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link href="/servicios" className="btn btn-outline btn-lg">
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
