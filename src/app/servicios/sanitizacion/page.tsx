import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceViewTracker from '@/components/tracking/ServiceViewTracker'
import { ShieldCheck, CheckCircle, Phone, ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sanitizacion A/C Auto a Domicilio Santiago | desde $25.000',
  description: 'Sanitizacion y desinfeccion del aire acondicionado automotriz a domicilio en Santiago. Elimina hongos, bacterias y olores. Garantia 90 dias. WhatsApp +56 9 3507 5600.',
  keywords: ['sanitización aire acondicionado auto', 'desinfección A/C automotriz', 'olor aire acondicionado auto Santiago'],
  alternates: { canonical: 'https://autofixer.cl/servicios/sanitizacion/' },
  openGraph: {
    url: 'https://autofixer.cl/servicios/sanitizacion/',
    title: 'Sanitización Aire Acondicionado Auto a Domicilio | Autofixer Santiago',
    description: 'Sanitización profesional del sistema de aire acondicionado automotriz. Eliminamos bacterias, hongos y malos olores. Servicio a domicilio en Santiago.',
    images: [{ url: 'https://autofixer.cl/og-image.png', width: 1200, height: 630, alt: 'sanitizacion' }],
  },
}

const faqs = [
  { question: 'Por que mi A/C huele mal?', answer: 'El mal olor puede ser por hongos y bacterias que se acumulan en el evaporador y conductos, humedad estancada en el drenaje, moho en el filtro de habitaculo o residuos organicos en el sistema de ventilacion.' },
  { question: 'La sanitizacion elimina todos los olores?', answer: 'La sanitizacion profesional elimina hongos, bacterias y moho que causan la mayoria de los olores. Olores por residuos organicos heavies pueden requerir tratamiento adicional. Te informamos que esperar antes de cobrarte.' },
  { question: 'Cada cuanto debo sanitizar?', answer: 'Recomendamos sanitizacion cada 1-2 anos dependiendo del uso del vehiculo y el ambiente. Si notas malos olores frecuentes o sintomas de alergia al encender el A/C, es hora de sanitizar.' },
  { question: 'Es seguro para mi salud?', answer: 'Si, usamos productos certificados para uso automotriz que son seguros para ocupantes y no dejan residuos toxicos. El proceso es no toxico una vez seco y puedes usar el vehiculo inmediatamente despues.' },
  { question: 'Cuanto tiempo toma?', answer: 'La sanitizacion completa toma entre 60 y 90 minutos. El vehiculo debe estar apagado y puedes esperar mientras trabajamos o dejarlo y retirarlo despues.' },
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
  "name": "Como sanitizar el sistema de aire acondicionado automotriz en 5 pasos",
  "description": "Procedimiento profesional de 5 pasos para sanitizar el sistema A/C automotriz: inspeccion, acceso al evaporador, espuma sanitizante, limpieza mecanica y verificacion.",
  "totalTime": "PT70M",
  "estimatedCost": {"@type": "MonetaryAmount", "currency": "CLP", "value": "20000-30000"},
  "tool": [
    {"@type": "HowToTool", "name": "Espuma sanitizante para evaporadores A/C"},
    {"@type": "HowToTool", "name": "Cepillo de detalle de cerdas suaves"},
    {"@type": "HowToTool", "name": "Aspiradora humeda/seca"},
    {"@type": "HowToTool", "name": "Lampara de inspeccion"}
  ],
  "step": [
    {"@type": "HowToStep", "position": 1, "name": "Inspeccion visual y prueba de olores", "text": "Encender A/C y oler el aire de las rejillas. Olor a humedad, vinagre o rancio indica hongos o bacterias en el evaporador. Inspeccionar filtro de habitaculo y ductos accesibles con lampara para detectar manchas u obstrucciones.", "url": "https://autofixer.cl/servicios/sanitizacion#paso-1", "tool": [{"@type": "HowToTool", "name": "Lampara de inspeccion"}]},
    {"@type": "HowToStep", "position": 2, "name": "Acceso al evaporador", "text": "Retirar el filtro de habitaculo y, segun el vehiculo, desmontar parcialmente el ducto del ventilador para acceder a la caja del evaporador. Identificar la ubicacion de los inyectores de espuma.", "url": "https://autofixer.cl/servicios/sanitizacion#paso-2", "tool": [{"@type": "HowToTool", "name": "Lampara de inspeccion"}]},
    {"@type": "HowToStep", "position": 3, "name": "Aplicacion de espuma sanitizante", "text": "Inyectar espuma sanitizante biodegradable en el evaporador y ductos. Dejar actuar 10-15 minutos para que penetre y elimine hongos, bacterias y biofilm. La espuma escurre arrastrando contaminantes por el drenaje del sistema.", "url": "https://autofixer.cl/servicios/sanitizacion#paso-3", "tool": [{"@type": "HowToTool", "name": "Espuma sanitizante para evaporadores A/C"}]},
    {"@type": "HowToStep", "position": 4, "name": "Limpieza mecanica de componentes", "text": "Cepillar suavemente las aletas del evaporador con cepillo de cerdas suaves para no doblarlas. Aspirar residuos sueltos con aspiradora humeda/seca. Limpiar caja del evaporador y reemplazar filtro de habitaculo si esta saturado.", "url": "https://autofixer.cl/servicios/sanitizacion#paso-4", "tool": [{"@type": "HowToTool", "name": "Cepillo de detalle de cerdas suaves"}, {"@type": "HowToTool", "name": "Aspiradora humeda/seca"}]},
    {"@type": "HowToStep", "position": 5, "name": "Ensamblaje y prueba final", "text": "Reensamblar ductos, montar filtro nuevo y encender A/C en maximo por 10 minutos para secar y verificar. El aire debe salir sin olores. Confirmar temperatura de salida 5-10 grados C y cierre del servicio.", "url": "https://autofixer.cl/servicios/sanitizacion#paso-5"}
  ]
};

export default function SanitizacionPage() {
  return (
    <>
      <ServiceViewTracker slug="sanitizacion" serviceName="Sanitizacion del Sistema" />
            <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://autofixer.cl/' },
            { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://autofixer.cl/servicios' },
            { '@type': 'ListItem', position: 3, name: 'Sanitización' }
          ]
        }) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Sanitizacion Antibacterial del Aire Acondicionado Automotriz", "serviceType": "Sanitizacion de A/C automotriz", "description": "Sanitizacion antibacterial completa del sistema de aire acondicionado automotriz. Eliminacion de hongos, bacterias y olores. Servicio a domicilio en Santiago con garantia.", "provider": {"@type": "Organization", "name": "Autofixer", "@id": "https://autofixer.cl/#organization"}, "areaServed": {"@type": "GeoCircle", "geoMidpoint": {"@type": "GeoCoordinates", "latitude": -33.4372, "longitude": -70.6506}, "geoRadius": "25000"}, "url": "https://autofixer.cl/servicios/sanitizacion/", "image": "https://autofixer.cl/og-servicio-sanitizacion.jpg", "offers": {"@type": "Offer", "priceCurrency": "CLP", "price": "35000", "priceSpecification": {"@type": "PriceSpecification", "priceCurrency": "CLP", "minPrice": "35000", "maxPrice": "60000", "eligibleQuantity": {"@type": "QuantitativeValue", "unitText": "servicio"}}}, "category": "Automotive", "inLanguage": "es-CL"}) }}
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
            <li><span className="text-blue-900 font-medium">Sanitizacion</span></li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-green-800 to-teal-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-6 h-6 text-green-300" />
              <span className="text-green-300 font-medium">Aire Limpio y Seguro</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sanitizacion del Sistema de A/C</h1>
            <p className="text-xl text-green-100 mb-8">
              Eliminamos hongos, bacterias y malos olores de tu sistema de aire acondicionado.
              Aire limpio y seguro para ti y tu familia. Proceso certificado y seguro.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/56935075600?text=Hola%2C%20mi%20A%2FC%20huele%20mal" className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                <Phone className="w-5 h-5" />
                Solicitar Sanitizacion
              </a>
              <a href="tel:+56935075600" className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-green-900 px-6 py-3 rounded-lg font-medium transition-colors">
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
            <div><div className="text-2xl font-bold text-green-800">Desde $35.000</div><div className="text-sm text-gray-600">Sanitizacion</div></div>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Que Incluye la Sanitizacion</h2>
                <div className="bg-white rounded-xl p-6">
                  <div className="space-y-4">
                    {[
                      'Inspeccion visual del evaporador y conductos',
                      'Aplicacion de producto sanitizante profesional',
                      'Tratamiento anti Hongos y bacteriano',
                      'Limpieza del filtro de habitaculo',
                      'Verificacion del sistema de drenaje',
                      'Prueba de funcionamiento',
                      'Recomendaciones de mantenimiento',
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
                <p className="text-gray-600 mb-8">5 pasos profesionales para sanitizar el sistema A/C automotriz. Tiempo total estimado: 70 minutos. Si lo prefieres, agenda nuestro servicio a domicilio con tecnico certificado e informe escrito.</p>
                <ol className="space-y-5">
                  <li id="paso-1" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">01</span>
                      <h3 className="text-xl font-semibold text-gray-900">Inspeccion visual y prueba de olores</h3>
                      <span className="ml-auto text-sm text-gray-500">10 min</span>
                    </div>
                    <p className="text-gray-700">Encender A/C y oler el aire de las rejillas. Olor a humedad, vinagre o rancio indica hongos o bacterias en el evaporador. Inspeccionar filtro de habitaculo y ductos accesibles con lampara para detectar manchas u obstrucciones.</p>
                  </li>
                  <li id="paso-2" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">02</span>
                      <h3 className="text-xl font-semibold text-gray-900">Acceso al evaporador</h3>
                      <span className="ml-auto text-sm text-gray-500">15 min</span>
                    </div>
                    <p className="text-gray-700">Retirar el filtro de habitaculo y, segun el vehiculo, desmontar parcialmente el ducto del ventilador para acceder a la caja del evaporador. Identificar la ubicacion de los inyectores de espuma.</p>
                  </li>
                  <li id="paso-3" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">03</span>
                      <h3 className="text-xl font-semibold text-gray-900">Aplicacion de espuma sanitizante</h3>
                      <span className="ml-auto text-sm text-gray-500">20 min</span>
                    </div>
                    <p className="text-gray-700">Inyectar espuma sanitizante biodegradable en el evaporador y ductos. Dejar actuar 10-15 minutos para que penetre y elimine hongos, bacterias y biofilm. La espuma escurre arrastrando contaminantes por el drenaje del sistema.</p>
                  </li>
                  <li id="paso-4" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">04</span>
                      <h3 className="text-xl font-semibold text-gray-900">Limpieza mecanica de componentes</h3>
                      <span className="ml-auto text-sm text-gray-500">15 min</span>
                    </div>
                    <p className="text-gray-700">Cepillar suavemente las aletas del evaporador con cepillo de cerdas suaves para no doblarlas. Aspirar residuos sueltos con aspiradora humeda/seca. Limpiar caja del evaporador y reemplazar filtro de habitaculo si esta saturado.</p>
                  </li>
                  <li id="paso-5" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">05</span>
                      <h3 className="text-xl font-semibold text-gray-900">Ensamblaje y prueba final</h3>
                      <span className="ml-auto text-sm text-gray-500">10 min</span>
                    </div>
                    <p className="text-gray-700">Reensamblar ductos, montar filtro nuevo y encender A/C en maximo por 10 minutos para secar y verificar. El aire debe salir sin olores. Confirmar temperatura de salida 5-10 grados C y cierre del servicio.</p>
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
                      <span className="font-bold text-green-800">{zone.price === 0 ? 'Gratis' : '+' + zone.price.toLocaleString('es-CL') + ' CLP'}</span>
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/56935075600?text=Hola%2C%20mi%20A%2FC%20huele%20mal%20y%20necesito%20sanitizacion" className="block w-full text-center bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium mb-3 transition-colors">
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

      <section className="py-16 bg-gradient-to-br from-green-800 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Aire Limpio para tu Familia</h2>
          <p className="text-xl text-green-100 mb-8">Sanitizacion profesional que elimina el 99% de hongos y bacterias. Siente la diferencia desde la primera vez que enciendas el A/C.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/56935075600?text=Hola%2C%20quiero%20sanitizar%20mi%20A%2FC" className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
              <Phone className="w-5 h-5" />
              Solicitar Sanitizacion
            </a>
            <Link href="/cotizar" className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-medium text-lg transition-colors">
              Solicitar Cotizacion
            </Link>
          </div>
        </div>
      </section>
      <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Servicios relacionados que podrian interesarte</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/servicios/mantenimiento-preventivo" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="font-semibold text-blue-600 mb-1">Mantenimiento Preventivo</h3>
            <p className="text-sm text-gray-600">Sanitizacion como parte del mantenimiento anual del sistema.</p>
          </a>
          <a href="/servicios/carga-gas" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="font-semibold text-blue-600 mb-1">Carga de Gas Refrigerante</h3>
            <p className="text-sm text-gray-600">Despues de sanitizar, verificamos la presion y nivel de gas.</p>
          </a>
          <a href="/servicios/deteccion-reparacion-fugas" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="font-semibold text-blue-600 mb-1">Deteccion y Reparacion de Fugas</h3>
            <p className="text-sm text-gray-600">Malos olores pueden indicar fugas de refrigerante.</p>
          </a>        </div>
      </div>
    </div>
    </>
  )
}
