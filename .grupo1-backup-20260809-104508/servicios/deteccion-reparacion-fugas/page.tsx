'use client'
import Link from 'next/link'
import ServiceViewTracker from '@/components/tracking/ServiceViewTracker'
import { Search, CheckCircle, Phone, ChevronDown, AlertTriangle } from 'lucide-react'

const faqs = [
  { question: '¿Cómo detectan las fugas?', answer: 'Usamos múltiples métodos: presurización con nitrógeno para detectar fugas grandes, trazador UV con luz ultravioleta para fugas pequeñas, y verificación con manómetros para pérdidas de presión.' },
  { question: '¿Cuánto cuesta detectar una fuga?', answer: 'La detección tiene un costo base de $40.000 que se descuenta del presupuesto si contratas la reparación. Si no hay fuga visible y requerimos diagnóstico profundo, puede ser mayor.' },
  { question: '¿Cuánto cuesta reparar una fuga?', answer: 'Depende de dónde esté la fuga y su gravedad. Reparaciones simples de cañerías desde $50.000. Reemplazo de componentes como evaporador o condensador desde $150.000. Siempre entregamos presupuesto antes de reparar.' },
  { question: '¿Cuánto tiempo toma?', answer: 'La detección toma entre 1 y 3 horas dependiendo de la complejidad. La reparación puede tomar de 2 a 6 horas adicionales. En casos de reemplazo de compresor, puede ser todo el día.' },
  { question: '¿Hacen soldadura?', answer: 'Sí, hacemos soldadura TIG de alta calidad para reparar cañerías de cobre y aluminio. La soldadura es permanente y garantiza la reparación de la fuga.' },
]

const zonePricing = [
  { zone: 'Zona 1', areas: 'Recoleta, Independencia, Santiago Centro', price: 0 },
  { zone: 'Zona 2', areas: 'Providencia, Ñuñoa, Las Condes, Vitacura, La Reina, Macul', price: 5000 },
  { zone: 'Zona 3', areas: 'La Florida, Peñalolén, Puente Alto, San Bernardo', price: 10000 },
  { zone: 'Zona 4', areas: 'Pudahuel, Quilicura, Lampa, Batuco', price: 15000 },
  { zone: 'Zona 5', areas: 'Colina, Chicureo, Pirque, San José de Maipo', price: 25000 },
]


const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como detectar y reparar fugas en el aire acondicionado automotriz en 6 pasos",
  "description": "Procedimiento profesional de 6 pasos para detectar y reparar fugas en el sistema A/C automotriz. Usa tinte fluorescente UV, manometros y termometro. Localiza microfugas en mangueras, juntas, condensador y evaporador.",
  "totalTime": "PT70M",
  "estimatedCost": {"@type": "MonetaryAmount", "currency": "CLP", "value": "20000-45000"},
  "tool": [
    {"@type": "HowToTool", "name": "Lampara UV detector de fugas con gafas protectoras"},
    {"@type": "HowToTool", "name": "Tinte fluorescente para sistema A/C"},
    {"@type": "HowToTool", "name": "Manometro de A/C automotriz"},
    {"@type": "HowToTool", "name": "Termometro infrarrojo"},
    {"@type": "HowToTool", "name": "Kit de reparacion de mangueras y juntas"}
  ],
  "step": [
    {"@type": "HowToStep", "position": 1, "name": "Inspeccion visual y revision de presiones", "text": "Conectar manometros y verificar presion del sistema. Presion baja sostenida confirma perdida de refrigerante. Inspeccionar visualmente mangueras, conexiones, condensador y evaporador en busca de manchas de aceite.", "url": "https://autofixer.cl/servicios/deteccion-reparacion-fugas#paso-1", "tool": [{"@type": "HowToTool", "name": "Manometro de A/C automotriz"}]},
    {"@type": "HowToStep", "position": 2, "name": "Inyeccion de tinte fluorescente UV", "text": "Si el sistema no tiene tinte previo, inyectarlo por la valvula de servicio de baja presion. El tinte circula con el refrigerante y se acumula en cualquier punto de fuga, haciendolo visible bajo luz UV.", "url": "https://autofixer.cl/servicios/deteccion-reparacion-fugas#paso-2", "tool": [{"@type": "HowToTool", "name": "Tinte fluorescente para sistema A/C"}]},
    {"@type": "HowToStep", "position": 3, "name": "Operacion del A/C durante 15 minutos", "text": "Encender A/C en maximo por 15 minutos para que el refrigerante y el tinte circulen por todo el sistema. Esto fuerza la salida del tinte por cualquier microfuga, facilitando su localizacion posterior.", "url": "https://autofixer.cl/servicios/deteccion-reparacion-fugas#paso-3"},
    {"@type": "HowToStep", "position": 4, "name": "Inspeccion con lampara UV", "text": "Con el sistema en operacion, revisar con lampara UV todas las uniones, mangueras, valvulas de servicio, condensador frontal y drenajes. Las fugas aparecen como manchas amarillo-verdosas brillantes. Anotar cada hallazgo.", "url": "https://autofixer.cl/servicios/deteccion-reparacion-fugas#paso-4", "tool": [{"@type": "HowToTool", "name": "Lampara UV detector de fugas con gafas protectoras"}]},
    {"@type": "HowToStep", "position": 5, "name": "Identificacion del tipo y ubicacion de fuga", "text": "Clasificar cada fuga: en manguera (reemplazo), en conexion (ajuste o reempaquetado), en condensador (soldadura o cambio), en evaporador (cambio de evaporador). Priorizar por urgencia y costo.", "url": "https://autofixer.cl/servicios/deteccion-reparacion-fugas#paso-5", "tool": [{"@type": "HowToTool", "name": "Termometro infrarrojo"}]},
    {"@type": "HowToStep", "position": 6, "name": "Reparacion segun hallazgo", "text": "Ejecutar la reparacion especifica: ajuste de conexiones, cambio de juntas toricas, soldado de condensador o reemplazo del componente. Tras reparar, repetir ciclo de vacio y recarga de refrigerante. Verificar con UV que no quede ninguna fuga activa.", "url": "https://autofixer.cl/servicios/deteccion-reparacion-fugas#paso-6", "tool": [{"@type": "HowToTool", "name": "Kit de reparacion de mangueras y juntas"}]}
  ]
};

export default function DeteccionFugasPage() {
  return (
    <>
      <ServiceViewTracker slug="deteccion-reparacion-fugas" serviceName="Deteccion y Reparacion de Fugas" />
            <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://autofixer.cl/' },
            { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://autofixer.cl/servicios' },
            { '@type': 'ListItem', position: 3, name: 'Detección de Fugas' }
          ]
        }) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Deteccion y Reparacion de Fugas en Aire Acondicionado Automotriz", "serviceType": "Deteccion y reparacion de fugas de gas refrigerante", "description": "Deteccion de fugas con tinte UV y gas trazador en el sistema de aire acondicionado automotriz. Reparacion de mangueras, conexiones, evaporador y condensador. Servicio a domicilio en Santiago.", "provider": {"@type": "Organization", "name": "Autofixer", "@id": "https://autofixer.cl/#organization"}, "areaServed": {"@type": "GeoCircle", "geoMidpoint": {"@type": "GeoCoordinates", "latitude": -33.4372, "longitude": -70.6506}, "geoRadius": "25000"}, "url": "https://autofixer.cl/servicios/deteccion-reparacion-fugas/", "image": "https://autofixer.cl/og-servicio-deteccion-fugas.jpg", "offers": {"@type": "Offer", "priceCurrency": "CLP", "price": "40000", "priceSpecification": {"@type": "PriceSpecification", "priceCurrency": "CLP", "minPrice": "40000", "maxPrice": "200000", "eligibleQuantity": {"@type": "QuantitativeValue", "unitText": "servicio"}}}, "category": "Automotive", "inLanguage": "es-CL"}) }}
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
            <ChevronDown className="w-4 h-4 text-gray-400" />
            <li><Link href="/servicios" className="text-gray-500 hover:text-blue-900">Servicios</Link></li>
            <ChevronDown className="w-4 h-4 text-gray-400" />
            <li><span className="text-blue-900 font-medium">Detección de Fugas</span></li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-red-900 to-orange-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Search className="w-6 h-6 text-red-300" />
              <span className="text-red-300 font-medium">Diagnóstico Profesional</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Detección y Reparación de Fugas de A/C</h1>
            <p className="text-xl text-red-100 mb-8">
              Localizamos cualquier fuga en tu sistema de aire acondicionado con equipamiento profesional.
              Presurización con nitrógeno, trazador UV y soldadura TIG. Reparación garantizada.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/56935075600?text=Hola%2C%20creo%20que%20mi%20A%2FC%20tiene%20una%20fuga" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                <Phone className="w-5 h-5" />
                Solicitar Detección
              </a>
              <a href="tel:+56935075600" className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-red-900 px-6 py-3 rounded-lg font-medium transition-colors">
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
            <div><div className="text-2xl font-bold text-blue-900">Desde $40.000</div><div className="text-sm text-gray-600">Detección</div></div>
            <div className="w-px bg-gray-300 hidden md:block"></div>
            <div><div className="text-2xl font-bold text-amber-600">Desde $50.000</div><div className="text-sm text-gray-600">Reparación simple</div></div>
            <div className="w-px bg-gray-300 hidden md:block"></div>
            <div><div className="text-2xl font-bold text-amber-600">1-3 horas</div><div className="text-sm text-gray-600">Detección</div></div>
            <div className="w-px bg-gray-300 hidden md:block"></div>
            <div><div className="text-2xl font-bold text-amber-600">90 días</div><div className="text-sm text-gray-600">Garantía</div></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Métodos de Detección de Fugas</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { title: 'Nitrógeno', desc: 'Presurizamos el sistema con nitrógeno para detectar fugas mayores. El nitrógeno escapa donde hay fugas y medimos la pérdida de presión.' },
                    { title: 'Trazador UV', desc: 'Inyectamos aceite con tinte UV y usamos luz ultravioleta para localizar fugas pequeñas. El tinte brilla en el punto exacto de la fuga.' },
                    { title: 'Soldadura TIG', desc: 'Soldadura de precisión para reparar fugas en cañerías de cobre y aluminio. Proceso permanente, no parches temporales.' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-5">
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Qué Incluye el Servicio</h2>
                <div className="bg-white rounded-xl p-6">
                  <div className="space-y-4">
                    {[
                      'Revisión visual completa del sistema',
                      'Presurización con nitrógeno',
                      'Verificación con manómetros',
                      'Detección con trazador UV si es necesario',
                      'Identificación exacta del punto de fuga',
                      'Presupuesto antes de cualquier reparación',
                      'Soldadura TIG si corresponde',
                      'Reparación de fuga con garantía',
                      'Vacío del sistema y carga de gas',
                      'Prueba de funcionamiento',
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
                <p className="text-gray-600 mb-8">6 pasos profesionales para detectar y reparar fugas en el sistema A/C automotriz. Tiempo total estimado: 70 minutos. Si lo prefieres, agenda nuestro servicio a domicilio con tecnico certificado e informe escrito.</p>
                <ol className="space-y-5">
                  <li id="paso-1" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">01</span>
                      <h3 className="text-xl font-semibold text-gray-900">Inspeccion visual y revision de presiones</h3>
                      <span className="ml-auto text-sm text-gray-500">15 min</span>
                    </div>
                    <p className="text-gray-700">Conectar manometros y verificar presion del sistema. Presion baja sostenida confirma perdida de refrigerante. Inspeccionar visualmente mangueras, conexiones, condensador y evaporador en busca de manchas de aceite.</p>
                  </li>
                  <li id="paso-2" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">02</span>
                      <h3 className="text-xl font-semibold text-gray-900">Inyeccion de tinte fluorescente UV</h3>
                      <span className="ml-auto text-sm text-gray-500">10 min</span>
                    </div>
                    <p className="text-gray-700">Si el sistema no tiene tinte previo, inyectarlo por la valvula de servicio de baja presion. El tinte circula con el refrigerante y se acumula en cualquier punto de fuga, haciendolo visible bajo luz UV.</p>
                  </li>
                  <li id="paso-3" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">03</span>
                      <h3 className="text-xl font-semibold text-gray-900">Operacion del A/C durante 15 minutos</h3>
                      <span className="ml-auto text-sm text-gray-500">5 min</span>
                    </div>
                    <p className="text-gray-700">Encender A/C en maximo por 15 minutos para que el refrigerante y el tinte circulen por todo el sistema. Esto fuerza la salida del tinte por cualquier microfuga, facilitando su localizacion posterior.</p>
                  </li>
                  <li id="paso-4" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">04</span>
                      <h3 className="text-xl font-semibold text-gray-900">Inspeccion con lampara UV</h3>
                      <span className="ml-auto text-sm text-gray-500">15 min</span>
                    </div>
                    <p className="text-gray-700">Con el sistema en operacion, revisar con lampara UV todas las uniones, mangueras, valvulas de servicio, condensador frontal y drenajes. Las fugas aparecen como manchas amarillo-verdosas brillantes. Anotar cada hallazgo.</p>
                  </li>
                  <li id="paso-5" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">05</span>
                      <h3 className="text-xl font-semibold text-gray-900">Identificacion del tipo y ubicacion de fuga</h3>
                      <span className="ml-auto text-sm text-gray-500">10 min</span>
                    </div>
                    <p className="text-gray-700">Clasificar cada fuga: en manguera (reemplazo), en conexion (ajuste o reempaquetado), en condensador (soldadura o cambio), en evaporador (cambio de evaporador). Priorizar por urgencia y costo.</p>
                  </li>
                  <li id="paso-6" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">06</span>
                      <h3 className="text-xl font-semibold text-gray-900">Reparacion segun hallazgo</h3>
                      <span className="ml-auto text-sm text-gray-500">Variable</span>
                    </div>
                    <p className="text-gray-700">Ejecutar la reparacion especifica: ajuste de conexiones, cambio de juntas toricas, soldado de condensador o reemplazo del componente. Tras reparar, repetir ciclo de vacio y recarga de refrigerante. Verificar con UV que no quede ninguna fuga activa.</p>
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
                      <span className="font-bold text-blue-900">{zone.price === 0 ? 'Gratis' : `+$${zone.price.toLocaleString('es-CL')}`}</span>
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/56935075600?text=Hola%2C%20creo%20que%20mi%20A%2FC%20tiene%20fuga" className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium mb-3 transition-colors">
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

      <section className="py-16 bg-gradient-to-br from-red-900 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tu A/C Pierde Gas? Encontramos la Fuga</h2>
          <p className="text-xl text-red-100 mb-8">Diagnosticamos y reparamos cualquier fuga. Si no hay fuga visible, te informamos antes de cobrarte diagnóstico adicional.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/56935075600?text=Hola%2C%20mi%20A%2FC%20pierde%20gas" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
              <Phone className="w-5 h-5" />
              Solicitar Detección
            </a>
            <Link href="/cotizar" className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-lg font-medium text-lg transition-colors">
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </section>
      <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Servicios relacionados que podrian interesarte</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/servicios/carga-gas" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h4 className="font-semibold text-blue-600 mb-1">Carga de Gas Refrigerante</h4>
            <p className="text-sm text-gray-600">Una vez sellada la fuga, recargamos el gas con medicion precisa por gramo.</p>
          </a>
          <a href="/servicios/reparacion-compresor" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h4 className="font-semibold text-blue-600 mb-1">Reparacion de Compresor</h4>
            <p className="text-sm text-gray-600">Las fugas pueden danar el compresor. Diagnostico completo.</p>
          </a>
          <a href="/servicios/mantenimiento-preventivo" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h4 className="font-semibold text-blue-600 mb-1">Mantenimiento Preventivo</h4>
            <p className="text-sm text-gray-600">Evita futuras fugas con revision periodica del sistema.</p>
          </a>        </div>
      </div>
    </div>
    </>
  )
}
