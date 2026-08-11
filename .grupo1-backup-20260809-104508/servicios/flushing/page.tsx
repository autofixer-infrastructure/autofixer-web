"use client"
import Link from 'next/link'
import ServiceViewTracker from '@/components/tracking/ServiceViewTracker'
import { Droplets, CheckCircle, Phone, ChevronDown } from 'lucide-react'

const faqs = [
  { question: 'Cuando es necesario hacer flushing?', answer: 'El flushing es necesario cuando el sistema tiene contaminantes como humedad residual, aceite degradado, particulas de metal o residuos de refrigerante viejo. Tambien se hace antes de instalar un compresor nuevo para garantizar un sistema limpio.' },
  { question: 'El flushing daña el sistema?', answer: 'No, el flushing es un procedimiento estandar cuando se hace correctamente. Usamos productos especificos para cada tipo de contaminante y lavamos con el gas o liquido adecuado segun el componente.' },
  { question: 'Cuanto cuesta el flushing?', answer: 'El flushing de todo el sistema cuesta desde $50.000 a $80.000 dependiendo de los componentes que requieran limpieza. El flushing de componentes individuales tiene precios menores.' },
  { question: 'Cuanto tiempo toma?', answer: 'El flushing completo del sistema toma entre 2 y 4 horas dependiendo de cuan contaminado este el sistema y los componentes que requieran limpieza.' },
  { question: 'Diferencia entre flushing y sanitizacion?', answer: 'El flushing limpia contaminantes fisicos y quimicos del sistema (humedad, aceite, particulas). La sanitizacion elimina organismos biologicos (hongos, bacterias). Son procedimientos complementarios.' },
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
  "name": "Como hacer flushing del sistema A/C automotriz en 5 pasos",
  "description": "Procedimiento profesional de 5 pasos para hacer flushing del sistema A/C automotriz: recuperacion, desconexion de componentes, inyeccion de solvente, secado con nitrogeno y reensamblaje con vacio y carga.",
  "totalTime": "PT110M",
  "estimatedCost": {"@type": "MonetaryAmount", "currency": "CLP", "value": "80000-150000"},
  "tool": [
    {"@type": "HowToTool", "name": "Maquina de recuperacion de refrigerante"},
    {"@type": "HowToTool", "name": "Kit de flushing con solvente A/C"},
    {"@type": "HowToTool", "name": "Nitrogeno seco o aire comprimido con filtro de particulas"},
    {"@type": "HowToTool", "name": "Bomba de vacio de doble etapa"}
  ],
  "step": [
    {"@type": "HowToStep", "position": 1, "name": "Recuperacion completa del refrigerante", "text": "Conectar la maquina de recuperacion y extraer el 100 por ciento del gas del sistema. Confirmar que los manometros marquen vacio total. Este gas se almacena para reciclaje, no se libera.", "url": "https://autofixer.cl/servicios/flushing#paso-1", "tool": [{"@type": "HowToTool", "name": "Maquina de recuperacion de refrigerante"}]},
    {"@type": "HowToStep", "position": 2, "name": "Desconexion de componentes del circuito", "text": "Desmontar el compresor, condensador, filtro secador y mangueras del circuito. Marcar cada conexion y componente. Inspeccionar visualmente cada pieza: el condensador y el evaporador pueden contener restos metalicos o goma del compresor fallado.", "url": "https://autofixer.cl/servicios/flushing#paso-2"},
    {"@type": "HowToStep", "position": 3, "name": "Inyeccion de solvente de flushing", "text": "Inyectar solvente especifico A/C en cada linea y componente con el kit de flushing. Hacer circular el solvente en ambas direcciones hasta que salga limpio. Esto arrastra particulas metalicas, goma y residuos que contaminan el sistema nuevo.", "url": "https://autofixer.cl/servicios/flushing#paso-3", "tool": [{"@type": "HowToTool", "name": "Kit de flushing con solvente A/C"}]},
    {"@type": "HowToStep", "position": 4, "name": "Secado con nitrogeno o aire filtrado", "text": "Por cada componente y linea, aplicar flujo de nitrogeno seco (o aire comprimido con filtro de particulas) hasta que salga completamente limpio y seco. El nitrogeno evita oxidacion y desplaza la humedad residual del solvente.", "url": "https://autofixer.cl/servicios/flushing#paso-4", "tool": [{"@type": "HowToTool", "name": "Nitrogeno seco o aire comprimido con filtro de particulas"}]},
    {"@type": "HowToStep", "position": 5, "name": "Reensamblaje, vacio y carga completa", "text": "Reinstalar filtro secador nuevo (obligatorio tras flushing), reensamblar componentes con juntas nuevas. Hacer vacio profundo 30 min, verificar hermeticidad y cargar R134a por peso. Probar A/C 15 min para confirmar presiones y temperatura correctas.", "url": "https://autofixer.cl/servicios/flushing#paso-5", "tool": [{"@type": "HowToTool", "name": "Bomba de vacio de doble etapa"}]}
  ]
};

export default function FlushingPage() {
  return (
    <>
      <ServiceViewTracker slug="flushing" serviceName="Flushing del Sistema" />
            <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://autofixer.cl/' },
            { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://autofixer.cl/servicios' },
            { '@type': 'ListItem', position: 3, name: 'Flushing' }
          ]
        }) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Flushing del Sistema de Aire Acondicionado Automotriz", "serviceType": "Limpieza profunda del sistema de A/C automotriz", "description": "Flushing profesional del sistema de aire acondicionado automotriz. Limpieza profunda de lineas, evaporador y condensador para eliminar contaminantes. Servicio a domicilio en Santiago.", "provider": {"@type": "Organization", "name": "Autofixer", "@id": "https://autofixer.cl/#organization"}, "areaServed": {"@type": "GeoCircle", "geoMidpoint": {"@type": "GeoCoordinates", "latitude": -33.4372, "longitude": -70.6506}, "geoRadius": "25000"}, "url": "https://autofixer.cl/servicios/flushing/", "image": "https://autofixer.cl/og-servicio-flushing.jpg", "offers": {"@type": "Offer", "priceCurrency": "CLP", "price": "50000", "priceSpecification": {"@type": "PriceSpecification", "priceCurrency": "CLP", "minPrice": "50000", "maxPrice": "80000", "eligibleQuantity": {"@type": "QuantitativeValue", "unitText": "servicio"}}}, "category": "Automotive", "inLanguage": "es-CL"}) }}
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
            <li><span className="text-blue-900 font-medium">Flushing</span></li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="w-6 h-6 text-blue-300" />
              <span className="text-blue-300 font-medium">Limpieza Profunda</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Flushing y Limpieza del Sistema A/C</h1>
            <p className="text-xl text-blue-100 mb-8">
              Limpieza profunda que remueve contaminantes, humedad y residuos del sistema.
              Necesario antes de instalar compresor nuevo o despues de una reparacion mayor.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/56935075600?text=Hola%2C%20necesito%20flushing%20de%20mi%20A%2FC" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                <Phone className="w-5 h-5" />
                Solicitar Flushing
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
            <div><div className="text-2xl font-bold text-blue-900">Desde $50.000</div><div className="text-sm text-gray-600">Flushing completo</div></div>
            <div className="w-px bg-gray-300 hidden md:block"></div>
            <div><div className="text-2xl font-bold text-amber-600">2-4 horas</div><div className="text-sm text-gray-600">Duracion</div></div>
            <div className="w-px bg-gray-300 hidden md:block"></div>
            <div><div className="text-2xl font-bold text-amber-600">Sistema limpio</div><div className="text-sm text-gray-600">Resultado garantizado</div></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Que Incluye el Flushing</h2>
                <div className="bg-white rounded-xl p-6">
                  <div className="space-y-4">
                    {[
                      'Flushing de linea de alta y baja presion',
                      'Limpieza de condensador con solvente especifico',
                      'Limpieza de evaporador',
                      'Limpieza de desacumulador y filtro',
                      'Remocion de humedad residual',
                      'Vacío profundo del sistema',
                      'Inspeccion de componentes',
                      'Carga de gas refrigerante nuevo',
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
                <p className="text-gray-600 mb-8">5 pasos profesionales para hacer flushing del sistema A/C automotriz. Tiempo total estimado: 110 minutos. Si lo prefieres, agenda nuestro servicio a domicilio con tecnico certificado e informe escrito.</p>
                <ol className="space-y-5">
                  <li id="paso-1" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">01</span>
                      <h3 className="text-xl font-semibold text-gray-900">Recuperacion completa del refrigerante</h3>
                      <span className="ml-auto text-sm text-gray-500">10 min</span>
                    </div>
                    <p className="text-gray-700">Conectar la maquina de recuperacion y extraer el 100 por ciento del gas del sistema. Confirmar que los manometros marquen vacio total. Este gas se almacena para reciclaje, no se libera.</p>
                  </li>
                  <li id="paso-2" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">02</span>
                      <h3 className="text-xl font-semibold text-gray-900">Desconexion de componentes del circuito</h3>
                      <span className="ml-auto text-sm text-gray-500">15 min</span>
                    </div>
                    <p className="text-gray-700">Desmontar el compresor, condensador, filtro secador y mangueras del circuito. Marcar cada conexion y componente. Inspeccionar visualmente cada pieza: el condensador y el evaporador pueden contener restos metalicos o goma del compresor fallado.</p>
                  </li>
                  <li id="paso-3" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">03</span>
                      <h3 className="text-xl font-semibold text-gray-900">Inyeccion de solvente de flushing</h3>
                      <span className="ml-auto text-sm text-gray-500">20 min</span>
                    </div>
                    <p className="text-gray-700">Inyectar solvente especifico A/C en cada linea y componente con el kit de flushing. Hacer circular el solvente en ambas direcciones hasta que salga limpio. Esto arrastra particulas metalicas, goma y residuos que contaminan el sistema nuevo.</p>
                  </li>
                  <li id="paso-4" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">04</span>
                      <h3 className="text-xl font-semibold text-gray-900">Secado con nitrogeno o aire filtrado</h3>
                      <span className="ml-auto text-sm text-gray-500">15 min</span>
                    </div>
                    <p className="text-gray-700">Por cada componente y linea, aplicar flujo de nitrogeno seco (o aire comprimido con filtro de particulas) hasta que salga completamente limpio y seco. El nitrogeno evita oxidacion y desplaza la humedad residual del solvente.</p>
                  </li>
                  <li id="paso-5" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">05</span>
                      <h3 className="text-xl font-semibold text-gray-900">Reensamblaje, vacio y carga completa</h3>
                      <span className="ml-auto text-sm text-gray-500">50 min</span>
                    </div>
                    <p className="text-gray-700">Reinstalar filtro secador nuevo (obligatorio tras flushing), reensamblar componentes con juntas nuevas. Hacer vacio profundo 30 min, verificar hermeticidad y cargar R134a por peso. Probar A/C 15 min para confirmar presiones y temperatura correctas.</p>
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
                <a href="https://wa.me/56935075600?text=Hola%2C%20necesito%20flushing%20del%20sistema%20A%2FC" className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium mb-3 transition-colors">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sistema Limpio, Rendimiento Optimo</h2>
          <p className="text-xl text-blue-100 mb-8">El flushing elimina contaminantes que dañan tu compresor y reducen la eficiencia. Ideal antes del verano o despues de una reparacion mayor.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/56935075600?text=Hola%2C%20quiero%20hacer%20flushing%20a%20mi%20A%2FC" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
              <Phone className="w-5 h-5" />
              Solicitar Flushing
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
            <p className="text-sm text-gray-600">Despues del flushing, el sistema necesita recarga completa de gas.</p>
          </a>
          <a href="/servicios/mantenimiento-preventivo" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h4 className="font-semibold text-blue-600 mb-1">Mantenimiento Preventivo</h4>
            <p className="text-sm text-gray-600">Flushing como parte del mantenimiento preventivo del sistema.</p>
          </a>
          <a href="/servicios/deteccion-reparacion-fugas" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h4 className="font-semibold text-blue-600 mb-1">Deteccion y Reparacion de Fugas</h4>
            <p className="text-sm text-gray-600">Flushing puede revelar fugas internas en el sistema.</p>
          </a>        </div>
      </div>
    </div>
    </>
  )
}
