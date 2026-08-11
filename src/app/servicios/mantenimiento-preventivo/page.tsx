import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceViewTracker from '@/components/tracking/ServiceViewTracker'
import { Wrench, CheckCircle, Phone, ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mantenimiento A/C Auto a Domicilio Santiago | desde $25.000',
  description: 'Mantenimiento preventivo del aire acondicionado automotriz a domicilio en Santiago. Filtro, presiones y test de fugas. Garantia 90 dias. WhatsApp +56 9 3507 5600.',
  keywords: ['mantenimiento aire acondicionado auto', 'mantenimiento preventivo A/C', 'limpieza aire acondicionado auto Santiago'],
  alternates: { canonical: 'https://autofixer.cl/servicios/mantenimiento-preventivo/' },
  openGraph: {
    url: 'https://autofixer.cl/servicios/mantenimiento-preventivo/',
    title: 'Mantenimiento Preventivo Aire Acondicionado Auto a Domicilio | Autofixer',
    description: 'Mantenimiento preventivo del sistema de aire acondicionado automotriz a domicilio en Santiago. Limpieza profunda, revisión completa, prevención de fallas.',
    images: [{ url: 'https://autofixer.cl/og-image.png', width: 1200, height: 630, alt: 'mantenimiento-preventivo' }],
  },
}

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


const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como hacer mantenimiento preventivo del aire acondicionado automotriz en 6 pasos",
  "description": "Procedimiento profesional de 6 pasos para mantenimiento preventivo del sistema A/C automotriz: inspeccion visual, presiones, temperatura, filtro, componentes electricos y correas.",
  "totalTime": "PT50M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "CLP",
    "value": "15000-25000"
  },
  "tool": [
    { "@type": "HowToTool", "name": "Manometro de A/C automotriz alta y baja presion" },
    { "@type": "HowToTool", "name": "Termometro infrarrojo" },
    { "@type": "HowToTool", "name": "Multimetro digital" }
  ],
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Inspeccion visual del sistema", "text": "Inspeccionar mangueras, condensador, correas, filtro de habitaculo y bornes. Buscar manchas de aceite, corrosion o piezas sueltas.", "url": "https://autofixer.cl/servicios/mantenimiento-preventivo#paso-1" },
    { "@type": "HowToStep", "position": 2, "name": "Medicion de presion del sistema", "text": "Conectar manometros a puertos de servicio. Lectura esperada: baja 25-45 psi, alta 150-250 psi. Presion fuera de rango indica falta de gas o condensador sucio.", "url": "https://autofixer.cl/servicios/mantenimiento-preventivo#paso-2" },
    { "@type": "HowToStep", "position": 3, "name": "Verificacion de temperatura de salida", "text": "Termometro infrarrojo en rejilla central con A/C en maximo. Temperatura esperada 5-10 grados C. Mayor a 12 indica rendimiento deficiente.", "url": "https://autofixer.cl/servicios/mantenimiento-preventivo#paso-3" },
    { "@type": "HowToStep", "position": 4, "name": "Revision y cambio de filtro de habitaculo", "text": "Localizar filtro (detras de guantera o bajo capo). Si esta saturado, cambiarlo. Filtro limpio mejora flujo de aire y reduce carga del compresor.", "url": "https://autofixer.cl/servicios/mantenimiento-preventivo#paso-4" },
    { "@type": "HowToStep", "position": 5, "name": "Inspeccion electrica y de correas", "text": "Medir voltaje de bateria con motor apagado (12.4-12.7V) y en marcha (13.8-14.4V). Revisar correa del compresor: sin grietas ni ruidos.", "url": "https://autofixer.cl/servicios/mantenimiento-preventivo#paso-5" },
    { "@type": "HowToStep", "position": 6, "name": "Informe y recomendaciones", "text": "Consolidar hallazgos y entregar recomendaciones priorizadas: cambio de filtro, limpieza de condensador o seguimiento de componentes en proximos meses.", "url": "https://autofixer.cl/servicios/mantenimiento-preventivo#paso-6" }
  ]
};

export default function MantenimientoPreventivoPage() {
  return (
    <>
      <ServiceViewTracker slug="mantenimiento-preventivo" serviceName="Mantenimiento Preventivo" />
            <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://autofixer.cl/' },
            { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://autofixer.cl/servicios' },
            { '@type': 'ListItem', position: 3, name: 'Mantenimiento Preventivo' }
          ]
        }) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Mantenimiento Preventivo de Aire Acondicionado Automotriz", "serviceType": "Mantenimiento preventivo de A/C automotriz", "description": "Mantenimiento preventivo completo del sistema de aire acondicionado automotriz: limpieza de filtros, revisión de gas, test de fugas, verificación del compresor y sanitización. Servicio a domicilio en Santiago.", "provider": {"@type": "Organization", "name": "Autofixer", "@id": "https://autofixer.cl/#organization"}, "areaServed": {"@type": "GeoCircle", "geoMidpoint": {"@type": "GeoCoordinates", "latitude": -33.4372, "longitude": -70.6506}, "geoRadius": "25000"}, "url": "https://autofixer.cl/servicios/mantenimiento-preventivo/", "image": "https://autofixer.cl/og-servicio-mantenimiento-preventivo.jpg", "offers": {"@type": "Offer", "priceCurrency": "CLP", "price": "45000", "priceSpecification": {"@type": "PriceSpecification", "priceCurrency": "CLP", "minPrice": "45000", "maxPrice": "80000", "eligibleQuantity": {"@type": "QuantitativeValue", "unitText": "servicio"}}}, "category": "Automotive", "inLanguage": "es-CL"}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="text-gray-500 hover:text-blue-900">Inicio</Link></li>
            <ChevronDown className="w-4 h-4 text-gray-500" />
            <li><Link href="/servicios" className="text-gray-500 hover:text-blue-900">Servicios</Link></li>
            <ChevronDown className="w-4 h-4 text-gray-500" />
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
              <a href="https://wa.me/56935075600?text=Hola%2C%20necesito%20mantenimiento%20preventivo%20de%20A%2FC" className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
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
                              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Proceso Paso a Paso</h2>
                <p className="text-gray-600 mb-8">6 pasos profesionales para mantenimiento preventivo del sistema A/C automotriz. Tiempo total estimado: 50 minutos. Si lo prefieres, agenda nuestro servicio a domicilio con tecnico certificado e informe escrito.</p>
                <ol className="space-y-5">
                  <li id="paso-1" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">01</span>
                      <h3 className="text-xl font-semibold text-gray-900">Inspeccion visual del sistema</h3>
                      <span className="ml-auto text-sm text-gray-500">10 min</span>
                    </div>
                    <p className="text-gray-700">Inspeccionar mangueras, condensador, correas, filtro de habitaculo y bornes. Buscar manchas de aceite, corrosion o piezas sueltas.</p>
                  </li>
                  <li id="paso-2" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">02</span>
                      <h3 className="text-xl font-semibold text-gray-900">Medicion de presion del sistema</h3>
                      <span className="ml-auto text-sm text-gray-500">10 min</span>
                    </div>
                    <p className="text-gray-700">Conectar manometros a puertos de servicio. Lectura esperada: baja 25-45 psi, alta 150-250 psi. Presion fuera de rango indica falta de gas o condensador sucio.</p>
                  </li>
                  <li id="paso-3" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">03</span>
                      <h3 className="text-xl font-semibold text-gray-900">Verificacion de temperatura de salida</h3>
                      <span className="ml-auto text-sm text-gray-500">5 min</span>
                    </div>
                    <p className="text-gray-700">Termometro infrarrojo en rejilla central con A/C en maximo. Temperatura esperada 5-10 grados C. Mayor a 12 indica rendimiento deficiente.</p>
                  </li>
                  <li id="paso-4" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">04</span>
                      <h3 className="text-xl font-semibold text-gray-900">Revision y cambio de filtro de habitaculo</h3>
                      <span className="ml-auto text-sm text-gray-500">5 min</span>
                    </div>
                    <p className="text-gray-700">Localizar filtro (detras de guantera o bajo capo). Si esta saturado, cambiarlo. Filtro limpio mejora flujo de aire y reduce carga del compresor.</p>
                  </li>
                  <li id="paso-5" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">05</span>
                      <h3 className="text-xl font-semibold text-gray-900">Inspeccion electrica y de correas</h3>
                      <span className="ml-auto text-sm text-gray-500">10 min</span>
                    </div>
                    <p className="text-gray-700">Medir voltaje de bateria con motor apagado (12.4-12.7V) y en marcha (13.8-14.4V). Revisar correa del compresor: sin grietas ni ruidos.</p>
                  </li>
                  <li id="paso-6" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">06</span>
                      <h3 className="text-xl font-semibold text-gray-900">Informe y recomendaciones</h3>
                      <span className="ml-auto text-sm text-gray-500">10 min</span>
                    </div>
                    <p className="text-gray-700">Consolidar hallazgos y entregar recomendaciones priorizadas: cambio de filtro, limpieza de condensador o seguimiento de componentes en proximos meses.</p>
                  </li>
                </ol>
              </div>
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
                <a href="https://wa.me/56935075600?text=Hola%2C%20necesito%20mantenimiento%20preventivo%20A%2FC" className="block w-full text-center bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium mb-3 transition-colors">
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
            <a href="https://wa.me/56935075600?text=Hola%2C%20quiero%20mantenimiento%20preventivo%20A%2FC" className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
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
            <h3 className="font-semibold text-blue-600 mb-1">Carga de Gas Refrigerante</h3>
            <p className="text-sm text-gray-600">Revision de nivel de gas incluida en el paquete de mantencion.</p>
          </a>
          <a href="/servicios/deteccion-reparacion-fugas" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="font-semibold text-blue-600 mb-1">Deteccion y Reparacion de Fugas</h3>
            <p className="text-sm text-gray-600">Inspeccion visual y electronica de posibles fugas.</p>
          </a>
          <a href="/servicios/sanitizacion" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="font-semibold text-blue-600 mb-1">Sanitizacion del Sistema</h3>
            <p className="text-sm text-gray-600">Sanitizacion incluida como parte del paquete preventivo.</p>
          </a>        </div>
      </div>
    </div>
    </>
  )
}
