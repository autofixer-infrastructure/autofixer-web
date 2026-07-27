"use client"
import Link from 'next/link'
import { Search, CheckCircle, Phone, ChevronDown } from 'lucide-react'

const faqs = [
  { question: 'Que incluye el diagnostico completo de aire acondicionado?', answer: 'El diagnostico incluye revision visual de todos los componentes, medicion de presiones de alta y baja con manometros profesionales, prueba de rendimiento del sistema, revision del filtro de habitaculo, verificacion de comandos electricos y embrague del compresor.' },
  { question: 'Cuanto cuesta el diagnostico?', answer: 'El diagnostico tiene un costo de $15.000 a $25.000 dependiendo del vehiculo. Este valor se descuenta del presupuesto si contratas la reparacion con nosotros. Si no se detecta ninguna falla, solo pagas el diagnostico.' },
  { question: 'Cuanto tiempo toma?', answer: 'El diagnostico completo toma entre 45 minutos y 2 horas dependiendo de la complejidad del sistema y si se requieren pruebas adicionales como medicion de temperaturas.' },
  { question: 'Puedo pedir solo diagnostico sin reparar?', answer: 'Si, puedes pedir solo el diagnostico. Te entregamos un informe detallado por escrito con el estado de cada componente y las reparaciones recomendadas.' },
  { question: 'Que pasa si el diagnostico no revela ninguna falla?', answer: 'Si el sistema esta funcionando correctamente y no detectamos ninguna falla, solo pagas el valor del diagnostico. Te informamos el estado real de tu A/C sin costos ocultos.' },
]

const zonePricing = [
  { zone: 'Zona 1', areas: 'Recoleta, Independencia, Santiago Centro', price: 0 },
  { zone: 'Zona 2', areas: 'Providencia, Nunoa, Las Condes, Vitacura, La Reina, Macul', price: 5000 },
  { zone: 'Zona 3', areas: 'La Florida, Penanolan, Puente Alto, San Bernardo', price: 10000 },
  { zone: 'Zona 4', areas: 'Pudahuel, Quilicura, Lampa, Batuco', price: 15000 },
  { zone: 'Zona 5', areas: 'Colina, Chicureo, Pirque, San Jose de Maipo', price: 25000 },
]

export default function DiagnosticoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="text-gray-500 hover:text-blue-900">Inicio</Link></li>
            <ChevronDown className="w-4 h-4 text-gray-400" />
            <li><Link href="/servicios" className="text-gray-500 hover:text-blue-900">Servicios</Link></li>
            <ChevronDown className="w-4 h-4 text-gray-400" />
            <li><span className="text-blue-900 font-medium">Diagnostico</span></li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Search className="w-6 h-6 text-blue-300" />
              <span className="text-blue-300 font-medium">Escaneo Electronico</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Diagnostico Profesional de A/C</h1>
            <p className="text-xl text-blue-100 mb-8">
              Analisis completo del sistema de aire acondicionado con equipamiento profesional.
              Diagnostico gratuito si contratas el servicio. Informe detallado por escrito.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/56935075600?text=Hola%2C%20necesito%20diagnostico%20de%20A%2FC" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                <Phone className="w-5 h-5" />
                Solicitar Diagnostico
              </a>
              <a href="tel:+56935075600" className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-medium transition-colors">
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div><div className="text-2xl font-bold text-blue-900">Desde $15.000</div><div className="text-sm text-gray-600">Diagnostico</div></div>
            <div className="w-px bg-gray-300 hidden md:block"></div>
            <div><div className="text-2xl font-bold text-amber-600">45-120 min</div><div className="text-sm text-gray-600">Duracion</div></div>
            <div className="w-px bg-gray-300 hidden md:block"></div>
            <div><div className="text-2xl font-bold text-amber-600">Gratuito</div><div className="text-sm text-gray-600">Si contratas servicio</div></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Que Incluye el Diagnostico</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    ['Revision visual completa', 'Todos los componentes externos'],
                    ['Medicion de presiones', 'Alta y baja con manometros'],
                    ['Prueba de rendimiento', 'Temperaturas de salida'],
                    ['Revision electrica', 'Embrague, relay, comandos'],
                    ['Filtro de habitaculo', 'Estado y obstruccion'],
                    ['Informe por escrito', 'Con recomendaciones claras'],
                  ].map(([title, desc], idx) => (
                    <div key={idx} className="bg-white rounded-xl p-5">
                      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                      <p className="text-gray-600 text-sm">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h2>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <details key={idx} className="bg-white rounded-xl group">
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

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 mb-6 sticky top-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Costo de Desplazamiento</h3>
                <div className="space-y-3 mb-6">
                  {zonePricing.map((zone, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <div>
                        <span className="font-medium text-gray-900">{zone.zone}</span>
                        <p className="text-xs text-gray-500">{zone.areas}</p>
                      </div>
                      <span className="font-bold text-blue-900">{zone.price === 0 ? 'Gratis' : '+' + zone.price.toLocaleString('es-CL') + ' CLP'}</span>
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/56935075600?text=Hola%2C%20necesito%20diagnostico%20de%20A%2FC" className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium mb-3 transition-colors">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Solicitar en WhatsApp
                </a>
                <a href="tel:+56935075600" className="block w-full text-center border-2 border-gray-300 text-gray-700 hover:border-gray-400 px-6 py-3 rounded-lg font-medium transition-colors">
                  <Phone className="w-4 h-4 inline mr-2" />
                  +56 9 3507 5600
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sabes que tiene tu A/C?</h2>
          <p className="text-xl text-blue-100 mb-8">Diagnostico profesional con equipamiento de ultima generacion. Sin sorpresas, sin costos ocultos.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/56935075600?text=Hola%2C%20quiero%20diagnosticar%20mi%20A%2FC" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
              <Phone className="w-5 h-5" />
              Solicitar Diagnostico
            </a>
            <Link href="/cotizar" className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-medium text-lg transition-colors">
              Solicitar Cotizacion
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
