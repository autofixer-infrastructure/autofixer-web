'use client'

import Link from 'next/link'
import { 
  Wrench, 
  CheckCircle, 
  Clock, 
  Phone,
  ChevronRight,
  ChevronDown,
  AlertTriangle,
  Cpu,
  Zap,
  Wind,
  ArrowRight,
  DollarSign,
  Shield,
  Settings
} from 'lucide-react'
import { FAQSchema } from '@/components/layout/SchemaMarkup'

// FAQ Schema
const faqs = [
  {
    question: '¿Cuáles son los síntomas de un compresor de aire acondicionado fallando?',
    answer: 'Los síntomas más comunes de un compresor en mal estado incluyen: ruido metálico o chirrido al activar el AC, embrague que no se conecta (no se escucha el clic característico), aire que no enfria aunque el sistema esté encendido, clutch del embrague quemado o dañado visiblemente, fuga de aceite en el compresor, vibraciones anormales, y consumo excesivo de refrigerante. Si notas alguno de estos síntomas, es importante realizar un diagnóstico profesional antes de que la falla empeore.'
  },
  {
    question: '¿Es mejor reparar o reemplazar el compresor?',
    answer: 'La decisión entre reparar o reemplazar depende de varios factores: el tipo de daño (mecánico vs eléctrico), la disponibilidad de piezas de reparación, el costo relativo vs reemplazo, y la edad del compresor actual. Generalmente, si el compresor tiene más de 8-10 años o ha tenido múltiples fallas, el reemplazo es más recomendable. Nuestros técnicos evalúan cada caso y te presentan las opciones con sus pros y contras para que tomes la mejor decisión.'
  },
  {
    question: '¿Cuánto cuesta reemplazar un compresor de aire acondicionado automotriz?',
    answer: 'El costo de reemplazo de un compresor varía significativamente según el vehículo y el tipo de compresor. Los precios base para el compresor van desde $150.000 para vehículos comunes hasta $400.000 o más para vehículos de lujo o con compresores de alta tecnología. A esto se suma la mano de obra de instalación y potencialmente otros componentes que deban reemplazarse (embrague, filtro, aceite). Te entregamos un presupuesto detallado después del diagnóstico.'
  },
  {
    question: '¿Qué incluye la reparación del compresor?',
    answer: 'La reparación de compresor puede incluir: reemplazo de sellos y juntas (causas comunes de fuga), reparación o reemplazo del embrague electromagnético, lubricación de componentes internos, reemplazo de la válvula de alivio de presión, y pruebas de funcionamiento. No todos los daños son reparables; los compresores con daños internos severos (metalurgicos) deben reemplazarse completamente.'
  },
  {
    question: '¿Puedo seguir usando mi auto si el compresor está fallando?',
    answer: 'Si el compresor hace ruido pero el embrague aún se conecta, puedes usar el AC暂时的 pero con precaución, evitando encenderlo si hace mucho calor. Si el embrague no se conecta o hay fuga visible de aceite, no es recomendable usar el sistema porque puede causar daños mayores a otros componentes. Lo más seguro es solicitar un diagnóstico y no forzar el sistema hasta saber qué está pasando.'
  },
  {
    question: '¿El reemplazo del compresor incluye garantía?',
    answer: 'Sí, todos nuestros reemplazos de compresor incluyen garantía de 12 meses o 20.000 km (lo que ocurra primero). La garantía cubre defectos de fabricación del compresor nuevo y defectos en la instalación. No cubre fallas causadas por contaminantes en el sistema, falta de mantenimiento, o daños por accidents.'
  }
]

// Symptoms
const symptoms = [
  {
    icon: Zap,
    title: 'Ruido Anormal',
    description: 'Chirridos, gruñidos o ruido metálico al activar el AC',
    severity: 'high'
  },
  {
    icon: Settings,
    title: 'Embrague No Conecta',
    description: 'No se escucha el clic característico o el embrague patina',
    severity: 'high'
  },
  {
    icon: AlertTriangle,
    title: 'Aire No Enfría',
    description: 'El sistema funciona pero no produce aire frío',
    severity: 'medium'
  },
  {
    icon: Wind,
    title: 'Fuga de Aceite',
    description: 'Manchas de aceite alrededor del compresor o mangueras',
    severity: 'high'
  },
  {
    icon: Cpu,
    title: 'Clutch Dañado',
    description: 'Plato del embrague quemado, rayado o con desgaste excesivo',
    severity: 'high'
  },
  {
    icon: DollarSign,
    title: 'Consumo Excesivo',
    description: 'Necesitas cargar gas más de una vez por temporada',
    severity: 'medium'
  }
]

// Repair vs Replace comparison
const comparison = [
  {
    aspect: 'Costo',
    repair: 'Generalmente 30-50% del costo de reemplazo',
    replace: 'Costo total pero incluye compresor nuevo con garantía'
  },
  {
    aspect: 'Durabilidad',
    repair: 'Depende de la causa original; puede volver a fallar',
    replace: 'Expectativa de vida completa del compresor nuevo'
  },
  {
    aspect: 'Tiempo',
    repair: 'Generalmente más rápido',
    replace: 'Puede requerir pedido de pieza (1-3 días)'
  },
  {
    aspect: 'Riesgo',
    repair: 'Riesgo moderado de falla recurrente',
    replace: 'Riesgo bajo con garantía del fabricante'
  },
  {
    aspect: 'Mejor para',
    repair: 'Fallas menores, compresores nuevos o de alta gama',
    replace: 'Daños severos, compresores viejos o con muchas horas de uso'
  }
]

// Pricing
const pricingInfo = {
  title: 'Costos de Reparación y Reemplazo',
  description: 'Los precios varían según el vehículo. Solicita un diagnóstico para recibir un presupuesto exacto.',
  baseRanges: [
    { service: 'Reparación de embrague', priceRange: '$45.000 - $80.000' },
    { service: 'Reemplazo de sellos/juntas', priceRange: '$35.000 - $60.000' },
    { service: 'Reemplazo de compresor (sedan)', priceRange: '$180.000 - $250.000' },
    { service: 'Reemplazo de compresor (SUV)', priceRange: '$220.000 - $350.000' },
    { service: 'Reemplazo de compresor (premium)', priceRange: '$350.000 - $600.000+' },
  ]
}

// Zone pricing
const zonePricing = [
  { zone: 'Zona 1', areas: 'Recoleta, Independencia, Santiago Centro', price: 0 },
  { zone: 'Zona 2', areas: 'Providencia, Ñuñoa, Las Condes, Vitacura, La Reina, Macul', price: 5000 },
  { zone: 'Zona 3', areas: 'La Florida, Peñalolén, Puente Alto, San Bernardo', price: 10000 },
  { zone: 'Zona 4', areas: 'Pudahuel, Quilicura, Lampa, Batuco', price: 15000 },
  { zone: 'Zona 5', areas: 'Colina, Chicureo, Pirque, San José de Maipo', price: 25000 },
]

export const metadata = {
  title: 'Reparación y Reemplazo de Compresor de Aire Acondicionado Automotriz | Autofixer',
  description: 'Servicio de reparación y reemplazo de compresor de aire acondicionado automotriz a domicilio. Diagnóstico profesional y presupuestos transparentes en Santiago.',
}

export default function ReparacionCompresorPage() {
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
              <span className="text-primary font-medium">Reparación de Compresor</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-6 h-6" />
              <span className="text-secondary font-medium">Servicio Especializado</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Reparación y Reemplazo de Compresor de Aire Acondicionado Automotriz
            </h1>
            <p className="text-xl text-white/80 mb-8">
              El compresor es el corazón del sistema de aire acondicionado. Nuestros técnicos 
              especializados diagnostican, reparan o reemplazan compresores con precisión y 
              garantía. Servicio a domicilio en toda la Región Metropolitana.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/cotizar?service=reparacion-compresor" className="btn bg-secondary hover:bg-secondary-600 text-white btn-lg">
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
              <div className="text-3xl font-bold text-primary mb-1">+200</div>
              <div className="text-sm text-gray-600">Compresores reparados/reemplazados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">12 meses</div>
              <div className="text-sm text-gray-600">Garantía en reemplazos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-1">100%</div>
              <div className="text-sm text-gray-600">Diagnóstico profesional</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-1">Presupuesto</div>
              <div className="text-sm text-gray-600">Sin compromiso</div>
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
                  ¿Qué es el Compresor de Aire Acondicionado?
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  El compresor es el componente principal y más crítico del sistema de aire acondicionado 
                  automotriz. Su función es comprimir el gas refrigerante y hacerlo circular a través del 
                  sistema. Sin un compresor funcionando correctamente, el aire acondicionado no puede 
                  producir frío, sin importar cuánto gas haya en el sistema.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  El compresor está accionado por el motor del vehículo a través de una correa, similar 
                  a la del alternador. Cuando enciendes el AC, un embrague electromagnético conecta el 
                  compresor al eje de transmisión, permitiendo que funcione. Este diseño permite que 
                  el compresor se active y desactive según la demanda de climatización.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex gap-4">
                    <Cpu className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-blue-900 mb-2">Componente Crítico</h3>
                      <p className="text-blue-800">
                        Si el compresor falla completamente, el sistema de AC no funcionará. 
                        Además, un compresor defectuoso puede dañar otros componentes del sistema, 
                        por lo que es importante atender cualquier síntoma a tiempo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Symptoms Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Síntomas de un Compresor en Mal Estado
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Detectar los síntomas a tiempo puede ahorrarte dinero en reparaciones. 
                  Aquí están las señales de alerta que debes tener en cuenta:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {symptoms.map((symptom, index) => (
                    <div 
                      key={index} 
                      className={`card p-5 border-l-4 ${
                        symptom.severity === 'high' 
                          ? 'border-l-red-500 bg-red-50/50' 
                          : 'border-l-amber-500 bg-amber-50/50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <symptom.icon className={`w-6 h-6 ${
                          symptom.severity === 'high' ? 'text-red-600' : 'text-amber-600'
                        } flex-shrink-0 mt-1`} />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">{symptom.title}</h3>
                          <p className="text-gray-600 text-sm">{symptom.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-800">
                      <strong>Precaución:</strong> Si experimentas ruido anormal o el embrague 
                      no conecta, evita usar el aire acondicionado y solicita un diagnóstico 
                      lo antes posible. Continuar usando un compresor dañado puede causar 
                      daños mayores a todo el sistema.
                    </p>
                  </div>
                </div>
              </div>

              {/* Repair vs Replace */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  ¿Reparar o Reemplazar el Compresor?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Esta es una de las preguntas más frecuentes que recibimos. La respuesta depende 
                  del tipo de daño, la condición del compresor y consideraciones económicas. 
                  Nuestros técnicos evalúan cada caso para recomendarte la mejor opción:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left p-4 font-bold text-gray-900">Aspecto</th>
                        <th className="text-left p-4 font-bold text-blue-900">Reparación</th>
                        <th className="text-left p-4 font-bold text-secondary">Reemplazo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="p-4 font-medium text-gray-900">{row.aspect}</td>
                          <td className="p-4 text-gray-600 text-sm">{row.repair}</td>
                          <td className="p-4 text-gray-600 text-sm">{row.replace}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-bold text-blue-900 mb-2">Cuándo Reparar</h3>
                    <ul className="space-y-1 text-sm text-blue-800">
                      <li>• Embrague dañado (frecuentemente reparable)</li>
                      <li>• Fuga de aceite por sellos (reparable)</li>
                      <li>• Compresor con poca antigüedad</li>
                      <li>• Compresor de alto valor (vehículos premium)</li>
                    </ul>
                  </div>
                  <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4">
                    <h3 className="font-bold text-secondary mb-2">Cuándo Reemplazar</h3>
                    <ul className="space-y-1 text-sm text-secondary">
                      <li>• Daño interno (metal contra metal)</li>
                      <li>• Compresor con más de 8-10 años</li>
                      <li>• Múltiples reparaciones previas</li>
                      <li>• Cuando la reparación tiene alto costo relativo</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nuestro Proceso de Trabajo
                </h2>
                
                <div className="space-y-6">
                  <div className="card p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Diagnóstico Profesional</h3>
                        <p className="text-gray-600">
                          Realizamos pruebas completas del sistema: medición de presiones, prueba del embrague, 
                          inspección visual del compresor y detección de fugas. Identificamos la causa raíz 
                          del problema para determinar si es reparable o requiere reemplazo.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Presupuesto Transparente</h3>
                        <p className="text-gray-600">
                          Te entregamos un presupuesto detallado con todas las opciones: reparación, 
                          reemplazo con compresor nuevo, o reemplazo con compresor reacondicionado. 
                          Sin costos ocultos, sin sorpresas. Solo procedemos con tu aprobación.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Trabajo Profesional</h3>
                        <p className="text-gray-600">
                          Cuando reemplazamos el compresor, también reemplazamos componentes relacionados: filtro secador, válvula de expansión o tubo de orificio, y aceite lubricante. Esto asegura el mejor rendimiento y vida útil del sistema.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Prueba y Garantía</h3>
                        <p className="text-gray-600">
                          Al finalizar, realizamos pruebas completas de funcionamiento, verificamos 
                          que las presiones sean correctas, y te entregamos el sistema funcionando 
                          perfectamente con garantía escrita.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Preguntas Frecuentes sobre Reparación de Compresor
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">{pricingInfo.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {pricingInfo.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {pricingInfo.baseRanges.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700 text-sm">{item.service}</span>
                      <span className="font-bold text-primary text-sm">{item.priceRange}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/cotizar?service=reparacion-compresor" className="btn btn-secondary w-full btn-lg">
                  Solicitar Diagnóstico
                </Link>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  El diagnóstico tiene costo de $25.000 + desplazamiento. Este valor se descuenta si contratas el servicio.
                </p>
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
                <h3 className="text-lg font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">12 meses de garantía en reemplazos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Técnicos especializados en AC</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Wrench className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Compresores nuevos y reacondicionados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Presupuesto sin compromiso</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Siempre cambiamos aceite y filtro</span>
                  </li>
                </ul>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-primary to-primary-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-4">¿Tu compresor hace ruido?</h3>
                <p className="text-white/80 mb-4 text-sm">
                  No ignores los síntomas. Un diagnóstico a tiempo puede salvar el compresor 
                  o evitar daños mayores al sistema.
                </p>
                <a href="tel:+56912345678" className="btn bg-white text-primary hover:bg-gray-100 w-full mb-3">
                  <Phone className="w-5 h-5" />
                  +56 9 1234 5678
                </a>
                <Link href="/cotizar?service=reparacion-compresor" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary w-full">
                  Solicitar Diagnóstico
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
            ¿Tu Compresor Necesita Atención?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Solicita un diagnóstico profesional y conoce el estado de tu sistema. 
            Te entregamos un presupuesto transparente sin compromiso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cotizar?service=reparacion-compresor" className="btn btn-secondary btn-lg">
              Solicitar Diagnóstico
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
