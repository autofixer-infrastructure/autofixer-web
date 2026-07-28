"use client"
import Link from 'next/link'
import { Wrench, CheckCircle, Phone, ChevronDown } from 'lucide-react'

const faqs = [
  { question: 'Cada cuanto debo hacer mantenimiento?', answer: 'Recomendamos mantenimiento anual, idealmente antes del verano (septiembre-noviembre) para que tu sistema este en optimas condiciones en los meses de calor. Vehiculos con mas de 5 anos sebenefician de mantenimiento cada 6 meses.' },
  { question: 'Que pasa si no hago mantenimiento?', answer: 'Sin mantenimiento, el sistema acumula suciedad, elgas se degrada y las piezas se desgastan prematuramente. Un mantenimiento regular evita reparaciones costosas y mantiene la eficiencia del A/C.' },
  { question: 'Cuanto dura el mantenimiento?', answer: 'El mantenimiento preventivo completo toma entre 60 y 90 minutos. Puedes esperar mientras trabajamos o dejar el vehiculo y retirarlo despues.' },
  { question: 'El mantenimiento incluye carga de gas?', answer: 'El mantenimiento basico no incluye carga de gas. Si detectamos que el sistema necesita gas adicional, te informamos antes de proceder y cobramos solo la carga necesaria.' },
  { question: 'Puedo pedir mantenimiento aunque mi A/C funcione?', answer: 'Si, el mantenimiento preventivo es exactamente para eso. No necesitas tener problemas para pedirlo. Es la mejor forma de evitar que se averie y prolongar la vida util del sistema.' },
]

const zonePricing = [
  { zone: 'Zona 1', areas: 'Recoleta, Independencia, Santiago Centro', price: 0 },
  { zone: 'Zona 2', areas: 'Providencia, Nunoa, Las Condes, Vitacura, La Reina, Macul', price: 5000 },
  { zone: 'Zona 3', areas: 'La Florida, Penanolan, Puente Alto, San Bernardo', price: 10000 },
  { zone: 'Zona 4', areas: 'Pudahuel, Quilicura, Lampa, Batuco', price: 15000 },
  { zone: 'Zona 5', areas: 'Colina, Chicureo, Pirque, San Jose de Maipo', price: 25000 },
]

export default function MantenimientoPreventivoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="text-gray-500 hover:text-blue-900">Inicio</Link></li>
            <ChevronDown className="w-4 h-4 text-gray-400" />
            <li><Link href="/servicios" className="text-gray-500 hover:text-blue-900">Servicios</Link></li>
            <ChevronDown className="w-4 h-4 text-gray-400" />
            <li><span className="text-blue-900 font-medium">Mantenimiento Preventivo</span></li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-6 h-6 text-blue-300" />
              <span className="text-blue-300 font-medium">Cuidado Preventivo</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mantenimiento Preventivo de A/C</h1>
            <p className="text-xl text-blue-100 mb-8">
              Revision completa para que tu sistema funcione perfectamente todo el ano.
              Evita averias costosas con un mantenimiento regular. Ideal antes del verano.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/56935075600?text=Hola%2C%20necesito%20mantenimiento%20preventivo%20de%20A%2FC" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                <Phone className="w-5 h-5" />
                Solicitar Mantenimiento
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
            <div><div className="text-2xl font-bold text-blue-900">Desde $40.000</div><div className="text-sm text-gray-600">Mantenimiento</div></div>
            <div className="w-px bg-gray-300 hidden md:block"></div>
            <div><div className="text-2xl font-bold text-amber-600">60-90 min</div><div className="text-sm text-gray-600">Duracion</div></div>
            <div className="w-px bg-gray-300 hidden md:block"></div>
            <div><div className="text-2xl font-bold text-amber-600">1-2 anos</div><div className="text-sm text-gray-600">Frecuencia recomendada</div></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Que Incluye el Mantenimiento</h2>
                <div className="bg-white rounded-xl p-6">
                  <div className="space-y-4">
                    {[
                      'Revision visual de todos los componentes',
                      'Limpieza de condensador con productos especializados',
                      'Limpieza de evaporador y drenaje',
                      'Verificacion de presiones de gas',
                      'Revision de correa del compresor',
                      'Lubricacion de componentes moviles',
                      'Revision electrica del embrague y relay',
                      'Limpieza o reemplazo del filtro de habitaculo',
                      'Prueba de funcionamiento con medicion de temperaturas',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
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
                <a href="https://wa.me/56935075600?text=Hola%2C%20necesito%20mantenimiento%20preventivo%20A%2FC" className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium mb-3 transition-colors">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Cuida tu A/C Antes que se Averie</h2>
          <p className="text-xl text-blue-100 mb-8">El mantenimiento preventivo es la forma mas economica de evitar reparaciones mayores. Compatible con todos los vehiculos.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/56935075600?text=Hola%2C%20quiero%20mantenimiento%20preventivo%20A%2FC" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
              <Phone className="w-5 h-5" />
              Solicitar Mantenimiento
            </a>
            <Link href="/cotizar" className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-medium text-lg transition-colors">
              Solicitar Cotizacion
            </Link>
          </div>
        </div>
      </section>
      <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Servicios relacionados que podrian interesarte</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/servicios/carga-gas" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h4 className="font-semibold text-blue-600 mb-1">Carga de Gas Refrigerante</h4>
            <p className="text-sm text-gray-600">Revision de nivel de gas incluida en el paquete de mantencion.</p>
          </a>
          <a href="/servicios/deteccion-reparacion-fugas" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h4 className="font-semibold text-blue-600 mb-1">Deteccion y Reparacion de Fugas</h4>
            <p className="text-sm text-gray-600">Inspeccion visual y electronica de posibles fugas.</p>
          </a>
          <a href="/servicios/sanitizacion" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h4 className="font-semibold text-blue-600 mb-1">Sanitizacion del Sistema</h4>
            <p className="text-sm text-gray-600">Sanitizacion incluida como parte del paquete preventivo.</p>
          </a>        </div>
      </div>
    </div>
  )
}
