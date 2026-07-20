'use client'

import Link from 'next/link'
import { 
  Sparkles, 
  CheckCircle, 
  Clock, 
  Phone,
  ChevronRight,
  ChevronDown,
  AlertTriangle,
  Heart,
  Shield,
  Wind,
  Car,
  Truck,
  Droplets,
  ArrowRight
} from 'lucide-react'
import { FAQSchema } from '@/components/layout/SchemaMarkup'

// FAQ Schema
const faqs = [
  {
    question: '¿Qué es la sanitización del sistema de climatización automotriz?',
    answer: 'La sanitización es un proceso de limpieza profunda que elimina hongos, bacterias, ácaros y otros microorganismos que se acumulan en el evaporador, los conductos de ventilación y el habitáculo del sistema de aire acondicionado. Este proceso es fundamental para mantener la calidad del aire que respiras dentro del vehículo y eliminar los malos olores causados por la humedad y el moho.'
  },
  {
    question: '¿Cuánto dura el servicio de sanitización?',
    answer: 'El servicio de sanitización tiene una duración aproximada de 45 a 60 minutos. El tiempo puede variar según el tamaño del vehículo y el nivel de contaminación del sistema. En casos severos de hongos o olores persistentes, puede requerirse un segundo tratamiento que se realiza sin costo adicional dentro de los 7 días.'
  },
  {
    question: '¿La sanitización elimina todos los olores del aire acondicionado?',
    answer: 'La sanitización profesional elimina el 99.9% de bacterias, hongos y ácaros del sistema, siendo muy efectiva para olores por humedad o moho. En casos muy severos o cuando el origen del olor es diferente (residuos en conductos, filtro saturado, líquidos derramados), puede requerirse un diagnóstico adicional o tratamientos complementarios. Ofrecemos garantía de satisfacción: si el olor persiste después del tratamiento, volvemos a tratar sin costo.'
  },
  {
    question: '¿Con qué productos se realiza la sanitización?',
    answer: 'Utilizamos productos sanitizantes de grado profesional específicamente diseñados para sistemas de climatización automotriz. Estos productos son bactericidas, fungicidas y virucidas de alta eficacia, seguros para los componentes del sistema y para los ocupantes del vehículo. Cumplen con las normativas de seguridad y no dejan residuos tóxicos.'
  },
  {
    question: '¿Cuál es la diferencia entre sanitización y carga de gas?',
    answer: 'Son servicios completamente diferentes. La carga de gas repone el refrigerante del sistema de enfriamiento cuando está bajo. La sanitización limpia y desinfecta los componentes internos del sistema de ventilación para eliminar olores y mejorar la calidad del aire. Un vehículo puede necesitar ambos servicios independientemente: puede tener gas correcto pero mal olor (necesita sanitización), o puede oler bien pero no enfriar (necesita carga de gas).'
  },
  {
    question: '¿Cada cuánto tiempo debo sanitizar el aire acondicionado?',
    answer: 'Recomendamos realizar la sanitización al menos una vez al año, idealmente al comenzar la temporada de calor (septiembre-octubre en Chile). También es recomendable después de períodos prolongados sin usar el vehículo, si notas malos olores al encender el aire, si has derramado líquidos en el sistema de drenaje, o si tienes mascotas que viajan frecuentemente en el auto.'
  }
]

// Pricing
const pricing = [
  { vehicleType: 'Sedán / Hatchback', icon: Car, price: 45000 },
  { vehicleType: 'SUV / Crossover', icon: Truck, price: 55000 },
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
const healthBenefits = [
  {
    title: 'Eliminación de Bacterias',
    description: 'Eliminamos hasta el 99.9% de bacterias dañinas como E. coli, Salmonella y Staphylococcus que se acumulan en el evaporador.',
    icon: Shield
  },
  {
    title: 'Eliminación de Hongos y Moho',
    description: 'Destruimos las colonias de hongos y moho que causan el característico olor a humedad y pueden provocar alergias.',
    icon: Droplets
  },
  {
    title: 'Eliminación de Ácaros',
    description: 'Eliminamos ácaros del polvo y otros微小 organismos que afectan la respiración, especialmente importantes para niños y personas con alergias.',
    icon: Heart
  },
  {
    title: 'Aire Más Limpio',
    description: 'Disfruta de aire limpio y fresco en cada viaje. Reduce estornudos, irritaciones y síntomas alérgicos.',
    icon: Wind
  }
]

// Process steps
const processSteps = [
  {
    step: 1,
    title: 'Inspección Inicial',
    description: 'Revisamos el estado del sistema de ventilación, identificamos las zonas afectadas y determinamos el nivel de contaminación.'
  },
  {
    step: 2,
    title: 'Aplicación de Sanitizante',
    description: 'Aplicamos el producto sanitizante de grado profesional directamente en el evaporador y los conductos de ventilación mediante nebulización.'
  },
  {
    step: 3,
    title: 'Tiempo de Acción',
    description: 'El producto actúa durante varios minutos, eliminando bacterias, hongos y ácaros en todas las superficies internas del sistema.'
  },
  {
    step: 4,
    title: 'Neutralización y Ventilación',
    description: 'Neutralizamos cualquier residuo y ventilamos el sistema para dejar los conductos completamente limpios y sin olores.'
  }
]

export const metadata = {
  title: 'Sanitización del Sistema de Climatización Automotriz a Domicilio | Autofixer',
  description: 'Servicio de sanitización profesional del aire acondicionado automotriz. Elimina hongos, bacterias y malos olores. Desde $45.000 para sedan y $55.000 para SUV.',
}

export default function SanitizacionPage() {
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
              <span className="text-primary font-medium">Sanitización</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6" />
              <span className="text-secondary font-medium">Salud y Bienestar</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sanitización del Sistema de Climatización Automotriz a Domicilio
            </h1>
            <p className="text-xl text-white/80 mb-8">
              ¿Malos olores al encender el aire acondicionado? ¿Estornudos o irritación? 
              Eliminamos hongos, bacterias y ácaros de tu sistema de ventilación. 
              Aire limpio y seguro para ti y tu familia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/cotizar?service=sanitizacion" className="btn bg-secondary hover:bg-secondary-600 text-white btn-lg">
                Solicitar Sanitización
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
              <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
              <div className="text-sm text-gray-600">Eliminación de bacterias</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">45-60 min</div>
              <div className="text-sm text-gray-600">Duración del servicio</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-1">100%</div>
              <div className="text-sm text-gray-600">Productos seguros</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-1">7 días</div>
              <div className="text-sm text-gray-600">Garantía de satisfacción</div>
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
                  ¿Por qué es Importante Sanitizar tu Aire Acondicionado?
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  El sistema de aire acondicionado de tu vehículo crea un ambiente ideal para el 
                  crecimiento de microorganismos: oscuridad, humedad y temperaturas moderadas. 
                  Cada vez que enciendes el aire, estos contaminantes son dispersados hacia el 
                  interior del vehículo, afectando la calidad del aire que respiras.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Estudios han demostrado que el evaporador del aire acondicionado puede acumular 
                  hasta 100 veces más bacterias que una superficie de baño típica. Esto no solo 
                  causa malos olores, sino que puede provocar estornudos, irritación de ojos, 
                  garganta y vías respiratorias, especialmente en personas con alergias o asma.
                </p>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-red-900 mb-2">¿Sabías que...</h3>
                      <p className="text-red-800">
                        El aire que sale del sistema de ventilación de tu auto puede contener más 
                        partículas dañinas que el aire de una calle transitante, especialmente 
                        si no se ha realizado mantenimiento preventivo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Health Benefits */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Beneficios de la Sanitización para tu Salud
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  La sanitización profesional no solo elimina los malos olores, sino que 
                  proporciona beneficios tangibles para la salud de todos los ocupantes del vehículo:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {healthBenefits.map((benefit, index) => (
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

              {/* Process */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Proceso de Sanitización Profesional
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Nuestro proceso de sanitización sigue una metodología profesional que garantiza 
                  resultados efectivos y duraderos:
                </p>
                
                <div className="space-y-6">
                  {processSteps.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xl">
                          {step.step}
                        </div>
                      </div>
                      <div className="pb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sanitization vs Gas Charge */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Sanitización vs Carga de Gas: ¿Cuál Necesitas?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Es común confundir estos dos servicios, pero cumplen funciones completamente 
                  diferentes. Aquí te ayudamos a identificar cuál necesita tu vehículo:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card p-6 border-2 border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Wind className="w-8 h-8 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-900">Carga de Gas</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Repone el gas refrigerante cuando está bajo. Necesitas este servicio si:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>El aire no enfría o enfría poco</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>El enfriamiento es insuficiente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Las presiones están bajas</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link href="/servicios/carga-gas" className="text-secondary font-medium hover:underline flex items-center gap-1">
                        Ver servicio de carga de gas <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="card p-6 border-2 border-secondary/30">
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles className="w-8 h-8 text-secondary" />
                      <h3 className="text-xl font-bold text-gray-900">Sanitización</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Elimina hongos, bacterias y olores. Necesitas este servicio si:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Hay mal olor al encender el AC</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Olor a humedad o moho</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Estornudos o irritación al usar el AC</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-secondary font-medium">Estás en el servicio correcto</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800">
                      <strong>Importante:</strong> Tu vehículo puede necesitar ambos servicios al mismo tiempo. 
                      Si el aire no enfría Y huele mal, te recomendamos solicitar ambos servicios para 
                      dejar el sistema completamente funcional y limpio.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Preguntas Frecuentes sobre Sanitización
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">Precios de Sanitización</h3>
                
                <div className="space-y-4 mb-6">
                  {pricing.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <item.icon className="w-6 h-6 text-secondary" />
                        <span className="font-medium text-gray-900">{item.vehicleType}</span>
                      </div>
                      <span className="text-xl font-bold text-primary">${item.price.toLocaleString('es-CL')}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-100 pt-4 mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Incluye:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      Sanitización completa del evaporador
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      Tratamiento de conductos de ventilación
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      Eliminación de hongos y bacterias
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      Garantía de 7 días
                    </li>
                  </ul>
                </div>
                
                <Link href="/cotizar?service=sanitizacion" className="btn btn-secondary w-full btn-lg">
                  Solicitar Sanitización
                </Link>
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

              {/* Benefits Card */}
              <div className="card p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">¿Por qué sanitizar?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Protege la salud de tu familia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Elimina el 99.9% de patógenos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Wind className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Aire limpio y sin olores</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Productos seguros y certificados</span>
                  </li>
                </ul>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-primary to-primary-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-4">¿Necesitas ambos servicios?</h3>
                <p className="text-white/80 mb-4 text-sm">
                  Si además de olores tu aire no enfría bien, te recomendamos solicitar 
                  sanitización y carga de gas juntos.
                </p>
                <Link href="/cotizar" className="btn bg-white text-primary hover:bg-gray-100 w-full mb-3">
                  Cotizar Servicios Combinados
                </Link>
                <a href="tel:+56912345678" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary w-full">
                  <Phone className="w-5 h-5" />
                  Llamar para Asesorarse
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Aire Limpio y Seguro para tu Familia
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            No dejes que los hongos y bacterias afecten tu salud y la de tu familia. 
            Solicita la sanitización profesional de tu aire acondicionado hoy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cotizar?service=sanitizacion" className="btn btn-secondary btn-lg">
              Solicitar Sanitización
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
