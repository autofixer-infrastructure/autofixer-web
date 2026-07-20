'use client'

import Link from 'next/link'
import { 
  Shield, 
  CheckCircle, 
  Clock, 
  Phone,
  ChevronRight,
  ChevronDown,
  AlertTriangle,
  Calendar,
  DollarSign,
  Wrench,
  Sparkles,
  Wind,
  Car,
  ArrowRight
} from 'lucide-react'
import { FAQSchema } from '@/components/layout/SchemaMarkup'

// FAQ Schema
const faqs = [
  {
    question: '¿Qué incluye el plan de mantenimiento preventivo del aire acondicionado?',
    answer: 'El plan de mantenimiento preventivo incluye: revisión completa de presiones del sistema, verificación del estado del compresor y embrague, limpieza o reemplazo del filtro de habitáculo, inspección visual de mangueras y conexiones, lubricación de componentes móviles, verificación del sistema de drenaje de condensado, prueba de rendimiento de enfriamiento, y sanitización básica del evaporador. Es una revisión exhaustiva que previene fallas futuras.'
  },
  {
    question: '¿Con qué frecuencia debo hacer mantenimiento preventivo del aire acondicionado?',
    answer: 'Recomendamos realizar mantenimiento preventivo al menos una vez al año, idealmente antes del verano (septiembre-octubre en Chile) para asegurar que el sistema esté en óptimas condiciones durante la temporada de mayor uso. Para vehículos con más de 5 años o que han tenido problemas previos, es recomendable hacer mantenimiento cada 6 meses. El mantenimiento regular puede extender significativamente la vida útil del sistema.'
  },
  {
    question: '¿Cuál es la diferencia entre mantenimiento preventivo y reparación?',
    answer: 'El mantenimiento preventivo se realiza cuando el sistema funciona correctamente, con el objetivo de mantenerlo así y detectar problemas menores antes de que se conviertan en fallas costosas. La reparación se realiza cuando ya existe una falla que debe corregirse. El mantenimiento preventivo es como el service de un vehículo: inviertes en el cuidado para evitar problemas mayores. Es significativamente más económico que las reparaciones.'
  },
  {
    question: '¿Cuánto puedo ahorrar con el mantenimiento preventivo?',
    answer: 'El mantenimiento preventivo puede ahorrarte entre $150.000 y $500.000 o más en reparaciones. Por ejemplo, detectar una fuga pequeña a tiempo evita que el compresor se dañe por falta de gas (un reemplazo de compresor puede costar $200.000-$600.000). También previene el daño al evaporador por falta de drenaje, que puede costar $150.000-$300.000 reparar. Además, un sistema bien mantenido consume menos combustible.'
  },
  {
    question: '¿El mantenimiento preventivo incluye carga de gas?',
    answer: 'El plan básico de mantenimiento incluye la verificación de presiones y carga de gas solo si las presiones están por debajo de lo normal. Si se detecta una fuga o bajo nivel de gas, te informamos antes de proceder con cualquier carga adicional. También ofrecemos planes de mantenimiento premium que incluyen carga de gas preventiva garantizada.'
  },
  {
    question: '¿Qué incluye el plan anual de mantenimiento?',
    answer: 'El plan anual de mantenimiento incluye 2 visitas de mantenimiento preventivo al año (idealmente cada 6 meses), prioritarios en la agenda, descuentos especiales en reparaciones, diagnóstico sin costo adicional si requiere intervención, y seguimiento del estado de tu sistema entre visitas. Es la opción más completa para quienes buscan mantener su vehículo en óptimas condiciones.'
  }
]

// Checklist items
const checklistItems = {
  refrigerant: [
    { item: 'Medición de presión de alta y baja', checked: true },
    { item: 'Verificación de nivel de gas refrigerante', checked: true },
    { item: 'Detección de fugas (si se sospecha)', checked: true },
    { item: 'Revisión de conexiones y soldaduras', checked: true },
  ],
  mechanical: [
    { item: 'Inspección del compresor y embrague', checked: true },
    { item: 'Verificación de ruidos anormales', checked: true },
    { item: 'Revisión de poleas y correas', checked: true },
    { item: 'Lubricación de componentes móviles', checked: true },
  ],
  electrical: [
    { item: 'Verificación de relay del embrague', checked: true },
    { item: 'Revisión de sensores de temperatura', checked: true },
    { item: 'Verificación de ventiladores', checked: true },
    { item: 'Revisión del panel de control', checked: true },
  ],
  ventilation: [
    { item: 'Reemplazo o limpieza de filtro de habitáculo', checked: true },
    { item: 'Verificación de flujo de aire en salidas', checked: true },
    { item: 'Inspección de conductos de ventilación', checked: true },
    { item: 'Limpieza de evaporador (sanitización básica)', checked: true },
  ],
  cooling: [
    { item: 'Inspección del condensador', checked: true },
    { item: 'Limpieza de radiator del condensador', checked: true },
    { item: 'Verificación de ventiladores de enfriamiento', checked: true },
    { item: 'Revisión del sistema de drenaje de condensado', checked: true },
  ]
}

// Pricing plans
const plans = [
  {
    name: 'Mantenimiento Básico',
    price: 25000,
    description: 'Ideal para vehículos menores a 3 años sin historial de problemas',
    features: [
      'Revisión de presiones del sistema',
      'Inspección visual completa',
      'Limpieza de filtro de habitáculo',
      'Verificación de embrague y compresor',
      'Prueba de rendimiento',
      'Informe escrito del estado'
    ]
  },
  {
    name: 'Mantenimiento Completo',
    price: 45000,
    description: 'Recomendado para vehículos de 3-8 años o con uso intensivo',
    features: [
      'Todo lo del plan básico',
      'Sanitización básica del evaporador',
      'Revisión completa del sistema eléctrico',
      'Lubricación de componentes',
      'Verificación de ventiladores',
      'Revisión de drenaje de condensado'
    ],
    recommended: true
  },
  {
    name: 'Plan Anual',
    price: 80000,
    description: '2 mantenimientos al año + beneficios exclusivos',
    features: [
      '2 mantenimientos completos al año',
      'Prioridad en agenda',
      '20% descuento en reparaciones',
      'Diagnóstico sin costo adicional',
      'Seguimiento personalizado',
      'Recordatorio de vencimiento'
    ]
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

// Benefits
const benefits = [
  {
    title: 'Previene Fallas Costosas',
    description: 'La mayoría de las fallas del aire acondicionado comienzan como problemas menores. El mantenimiento los detecta a tiempo.',
    icon: Shield
  },
  {
    title: 'Mayor Eficiencia Energética',
    description: 'Un sistema bien mantenido enfría más rápido y consume menos combustible, ahorrándote dinero a largo plazo.',
    icon: DollarSign
  },
  {
    title: 'Mejor Calidad de Aire',
    description: 'Filtros limpios y evaporador sanitizado significan aire más limpio y saludable dentro del vehículo.',
    icon: Wind
  },
  {
    title: 'Mayor Vida Útil',
    description: 'El cuidado preventivo puede extender la vida útil del sistema por años, retrasando reemplazos costosos.',
    icon: Calendar
  }
]

export const metadata = {
  title: 'Plan de Mantenimiento Preventivo del Aire Acondicionado Automotriz | Autofixer',
  description: 'Plan de mantenimiento preventivo para el aire acondicionado de tu auto. Checklist completo, visitas programadas y descuentos. Desde $25.000 por mantenimiento.',
}

export default function MantenimientoPreventivoPage() {
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
              <span className="text-primary font-medium">Mantenimiento Preventivo</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6" />
              <span className="text-secondary font-medium">Cuidado de tu Vehículo</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plan de Mantenimiento Preventivo del Aire Acondicionado Automotriz
            </h1>
            <p className="text-xl text-white/80 mb-8">
              La mejor forma de cuidar tu sistema de aire acondicionado es prevenir las fallas 
              antes de que ocurran. Nuestros planes de mantenimiento incluyen revisión completa, 
              limpieza y sanitización para que tu AC funcione perfecto todo el año.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/cotizar?service=mantenimiento-preventivo" className="btn bg-secondary hover:bg-secondary-600 text-white btn-lg">
                Solicitar Mantenimiento
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
              <div className="text-3xl font-bold text-primary mb-1">+300</div>
              <div className="text-sm text-gray-600">Clientes en plan anual</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">60 min</div>
              <div className="text-sm text-gray-600">Duración promedio</div>
            </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-1">70%</div>
                <div className="text-sm text-gray-600">Menos probabilidad de fallas</div>
              </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-1">20%</div>
              <div className="text-sm text-gray-600">Descuento en reparaciones</div>
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
                  ¿Por qué el Mantenimiento Preventivo es Essential?
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  El sistema de aire acondicionado de tu vehículo es complejo y requiere atención 
                  regular para funcionar correctamente. A diferencia de otras partes del vehículo, 
                  el AC a menudo se ignora hasta que deja de funcionar, momento en que las reparaciones 
                  pueden ser costosas y complicadas.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  El mantenimiento preventivo es como ir al médico para chequeos regulares: detectas 
                  problemas pequeños antes de que se conviertan en emergencias. Invertir en mantenimiento 
                  puede ahorrarte entre $150.000 y $500.000 en reparaciones potenciales, además de 
                  garantizar que siempre tengas aire fresco y frío cuando lo necesites.
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex gap-4">
                    <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-green-900 mb-2">Dato Importante</h3>
                      <p className="text-green-800">
                        Según estudios de la industria, el 80% de las fallas del aire acondicionado 
                        automotriz podrían prevenirse con un mantenimiento regular adecuado. 
                        La mayoría de los problemas comienzan como detalles menores.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Beneficios del Mantenimiento Preventivo
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="card p-6">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                        <benefit.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Checklist */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Checklist Completo de Mantenimiento
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Nuestro mantenimiento preventivo sigue un protocolo exhaustivo que cubre 
                  todos los aspectos del sistema de climatización:
                </p>
                
                <div className="space-y-6">
                  <div className="card p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Wind className="w-5 h-5 text-blue-600" />
                      Sistema de Refrigerante
                    </h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {checklistItems.refrigerant.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">{item.item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="card p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-blue-600" />
                      Componentes Mecánicos
                    </h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {checklistItems.mechanical.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">{item.item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="card p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-600" />
                      Sistema Eléctrico
                    </h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {checklistItems.electrical.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">{item.item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="card p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-blue-600" />
                      Sistema de Ventilación
                    </h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {checklistItems.ventilation.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">{item.item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="card p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Car className="w-5 h-5 text-blue-600" />
                      Sistema de Enfriamiento
                    </h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {checklistItems.cooling.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">{item.item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Frequency */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  ¿Con Qué Frecuencia Debo Hacer Mantenimiento?
                </h2>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="card p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Vehículos Nuevos (0-3 años)</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Una vez al año, idealmente antes del verano
                    </p>
                    <span className="text-secondary font-medium text-sm">$25.000 - $45.000/visita</span>
                  </div>
                  
                  <div className="card p-6 text-center border-2 border-secondary/30">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Vehículos Medianos (3-8 años)</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Cada 6 meses o al menos una vez al año
                    </p>
                    <span className="text-secondary font-medium text-sm">$45.000 - $80.000/visita</span>
                  </div>
                  
                  <div className="card p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                      <AlertTriangle className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Vehículos Antiguos (8+ años)</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Cada 6 meses con atención a componentes críticos
                    </p>
                    <span className="text-amber-600 font-medium text-sm">$45.000 - $80.000/visita</span>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Preguntas Frecuentes sobre Mantenimiento Preventivo
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
              
              {/* Pricing Plans */}
              <div className="space-y-6 mb-6 sticky top-6">
                {plans.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`card p-6 ${plan.recommended ? 'border-2 border-secondary shadow-lg' : ''}`}
                  >
                    {plan.recommended && (
                      <span className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                        Recomendado
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                    <div className="text-3xl font-bold text-primary mb-4">
                      ${plan.price.toLocaleString('es-CL')}
                      <span className="text-sm font-normal text-gray-500"> /visita</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={`/cotizar?service=mantenimiento-preventivo&plan=${encodeURIComponent(plan.name)}`} 
                      className={plan.recommended ? 'btn btn-secondary w-full' : 'btn btn-outline w-full'}
                    >
                      Seleccionar Plan
                    </Link>
                  </div>
                ))}
              </div>

              {/* Zone Pricing */}
              <div className="card p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Costo de Desplazamiento</h3>
                <div className="space-y-2">
                  {zonePricing.map((zone, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">{zone.zone}: {zone.areas}</span>
                      <span className="font-medium text-primary">
                        {zone.price === 0 ? 'Gratis' : `+$${zone.price.toLocaleString('es-CL')}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-primary to-primary-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-4">¿No sabes qué plan elegir?</h3>
                <p className="text-white/80 mb-4 text-sm">
                  Contáctanos y te ayudamos a seleccionar el plan de mantenimiento 
                  ideal para tu vehículo y presupuesto.
                </p>
                <a href="tel:+56912345678" className="btn bg-white text-primary hover:bg-gray-100 w-full mb-3">
                  <Phone className="w-5 h-5" />
                  +56 9 1234 5678
                </a>
                <Link href="/cotizar?service=mantenimiento-preventivo" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary w-full">
                  Cotizar Online
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
            Protege tu Inversión con Mantenimiento Preventivo
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            No esperes a que tu aire acondicionado falle. Un mantenimiento a tiempo 
            puede ahorrarte cientos de miles de pesos en reparaciones.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cotizar?service=mantenimiento-preventivo" className="btn btn-secondary btn-lg">
              Solicitar Mantenimiento
              <ArrowRight className="w-5 h-5" />
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
