'use client'
import Link from 'next/link'
import ServiceViewTracker from '@/components/tracking/ServiceViewTracker'
import { Wind, CheckCircle, Phone, ChevronDown } from 'lucide-react'

const faqs = [
  { question: '¿Qué es el evaporador del aire acondicionado?', answer: 'El evaporador es el componente ubicado dentro del habitáculo (generalmente detrás del panel) donde el refrigerante se evapora absorbiendo calor del aire. Es donde ocurre el enfriamiento real.' },
  { question: '¿Cómo sé si el evaporador está dañado?', answer: 'Los síntomas incluyen: mal olor del sistema de ventilación, fuga de agua dentro del vehículo, A/C que no enfría suficiente, y baja presión en el lado de baja.' },
  { question: '¿Cuánto cuesta cambiar el evaporador?', answer: 'El costo varía según el vehículo entre $200.000 y $500.000, incluyendo evaporador, filtro de habitáculo, aceite, vacío y carga de gas. El reemplazo requiere desarme del tablero.' },
  { question: '¿Por qué el evaporador huele mal?', answer: 'El evaporador acumula humedad y escombros creando un ambiente ideal para hongos y bacterias. Estos microorganismos producen el mal olor característico.' },
  { question: '¿Cuánto tiempo toma cambiar el evaporador?', answer: 'El reemplazo toma entre 4 y 8 horas debido al desarme requerido del panel de instrumentos. Es uno de los reemplazos más complejos del sistema de A/C.' },
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
  "name": "Como cambiar el evaporador del aire acondicionado automotriz en 8 pasos",
  "description": "Procedimiento profesional de 8 pasos para cambiar el evaporador A/C automotriz: recuperacion, desmontaje del tablero, acceso a la caja del evaporador, extraccion, limpieza, instalacion del nuevo, vacio y carga.",
  "totalTime": "PT240M",
  "estimatedCost": {"@type": "MonetaryAmount", "currency": "CLP", "value": "180000-350000"},
  "tool": [
    {"@type": "HowToTool", "name": "Maquina de recuperacion de refrigerante"},
    {"@type": "HowToTool", "name": "Bomba de vacio de doble etapa"},
    {"@type": "HowToTool", "name": "Manometro de A/C automotriz alta y baja presion"},
    {"@type": "HowToTool", "name": "Balanza digital para refrigerante"},
    {"@type": "HowToTool", "name": "Kit de herramientas de desmontaje de tablero"},
    {"@type": "HowToTool", "name": "Limpia evaporador en espuma biodegradable"}
  ],
  "step": [
    {"@type": "HowToStep", "position": 1, "name": "Recuperacion completa del refrigerante", "text": "Conectar maquina de recuperacion y extraer todo el gas. Confirmar vacio total en manometros. El evaporador es parte del circuito cerrado, por lo que se debe vaciar todo el sistema antes de cualquier intervencion.", "url": "https://autofixer.cl/servicios/cambio-evaporador#paso-1", "tool": [{"@type": "HowToTool", "name": "Maquina de recuperacion de refrigerante"}]},
    {"@type": "HowToStep", "position": 2, "name": "Desmontaje parcial del tablero", "text": "Retirar guantera, panel central, salidas de aire y molduras del lado del pasajero. Desmontar parcialmente el airbag del pasajero si esta presente. Desconectar bateria por seguridad. Tiempo: 60-90 minutos segun el modelo.", "url": "https://autofixer.cl/servicios/cambio-evaporador#paso-2", "tool": [{"@type": "HowToTool", "name": "Kit de herramientas de desmontaje de tablero"}]},
    {"@type": "HowToStep", "position": 3, "name": "Acceso a la caja del evaporador", "text": "Localizar la caja del evaporador (detras del tablero, lado del pasajero). Quitar los tornillos y abrazaderas que sujetan la tapa de la caja. Desconectar las mangueras deExpansion, el conector electrico de la valvula y las salidas de ventilacion.", "url": "https://autofixer.cl/servicios/cambio-evaporador#paso-3", "tool": [{"@type": "HowToTool", "name": "Manometro de A/C automotriz alta y baja presion"}]},
    {"@type": "HowToStep", "position": 4, "name": "Extraccion del evaporador danado", "text": "Sacar el evaporador con cuidado para no contaminar el sistema con virutas o restos. Inspeccionar las tuberias deExpansion: si estan obstruidas por oxido o residuos, deben cambiarse junto con el evaporador.", "url": "https://autofixer.cl/servicios/cambio-evaporador#paso-4"},
    {"@type": "HowToStep", "position": 5, "name": "Limpieza y desinfeccion de la caja", "text": "Limpiar la caja del evaporador con espuma biodegradable para eliminar hongos, bacterias y biofilm. Esto evita que el nuevo evaporador se contamine rapidamente. Aspirar residuos y secar bien antes del montaje.", "url": "https://autofixer.cl/servicios/cambio-evaporador#paso-5", "tool": [{"@type": "HowToTool", "name": "Limpia evaporador en espuma biodegradable"}]},
    {"@type": "HowToStep", "position": 6, "name": "Instalacion del evaporador nuevo", "text": "Colocar juntas nuevas en las conexiones. Instalar el evaporador nuevo en la caja, conectar tuberias deExpansion con juntas toricas nuevas. Si se sustituyo la valvula deExpansion, conectarla electricamente. Verificar que todo este firme.", "url": "https://autofixer.cl/servicios/cambio-evaporador#paso-6"},
    {"@type": "HowToStep", "position": 7, "name": "Reensamblaje del tablero", "text": "Cerrar la caja del evaporador, montar todas las salidas de aire, paneles, guantera y molduras retiradas. Reconectar airbag y verificar que los conectores electricos del tablero esten firmes. Tiempo: 60 minutos.", "url": "https://autofixer.cl/servicios/cambio-evaporador#paso-7"},
    {"@type": "HowToStep", "position": 8, "name": "Vacio, prueba de fugas y carga completa", "text": "Hacer vacio por 45 minutos, verificar hermeticidad, reemplazar filtro secador, cargar R134a por peso. Probar A/C 20 minutos: verificar que salga aire frio (5-10 grados C), sin olores, presiones correctas. Confirmar que el drenaje del evaporador no gotee al interior.", "url": "https://autofixer.cl/servicios/cambio-evaporador#paso-8", "tool": [{"@type": "HowToTool", "name": "Bomba de vacio de doble etapa"}, {"@type": "HowToTool", "name": "Balanza digital para refrigerante"}]}
  ]
};

export default function CambioEvaporadorPage() {
  return (
    <>
      <ServiceViewTracker slug="cambio-evaporador" serviceName="Cambio de Evaporador" />
            <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://autofixer.cl/' },
            { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://autofixer.cl/servicios' },
            { '@type': 'ListItem', position: 3, name: 'Cambio de Evaporador' }
          ]
        }) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Cambio de Evaporador de Aire Acondicionado Automotriz", "serviceType": "Reemplazo de evaporador automotriz", "description": "Reemplazo completo de evaporador de aire acondicionado automotriz. Incluye evaporador, filtro de habitaculo, aceite, vacio y carga de gas. Servicio a domicilio en Santiago.", "provider": {"@type": "Organization", "name": "Autofixer", "@id": "https://autofixer.cl/#organization"}, "areaServed": {"@type": "GeoCircle", "geoMidpoint": {"@type": "GeoCoordinates", "latitude": -33.4372, "longitude": -70.6506}, "geoRadius": "25000"}, "url": "https://autofixer.cl/servicios/cambio-evaporador/", "image": "https://autofixer.cl/og-servicio-cambio-evaporador.jpg", "offers": {"@type": "Offer", "priceCurrency": "CLP", "price": "200000", "priceSpecification": {"@type": "PriceSpecification", "priceCurrency": "CLP", "minPrice": "200000", "maxPrice": "500000", "eligibleQuantity": {"@type": "QuantitativeValue", "unitText": "servicio"}}}, "category": "Automotive", "inLanguage": "es-CL"}) }}
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
            <li><span className="text-blue-900 font-medium">Cambio de Evaporador</span></li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-cyan-900 to-teal-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cambio de Evaporador de A/C en Santiago</h1>
            <p className="text-xl text-cyan-100 mb-8">
              Reemplazo profesional del evaporador de aire acondicionado. El evaporador es donde ocurre el enfriamiento real.
              Servicio a domicilio en Santiago.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/56935075600?text=Hola%2C%20necesito%20cambiar%20el%20evaporador%20de%20mi%20A%2FC" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                <Phone className="w-5 h-5" />
                Solicitar Reemplazo
              </a>
              <a href="tel:+56935075600" className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-cyan-900 px-6 py-3 rounded-lg font-medium transition-colors">
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
            <div><div className="text-2xl font-bold text-blue-900">Desde $200.000</div><div className="text-sm text-gray-600">Reemplazo completo</div></div>
            <div className="w-px bg-gray-300 hidden md:block"></div>
            <div><div className="text-2xl font-bold text-amber-600">4-8 horas</div><div className="text-sm text-gray-600">Tiempo de intervención</div></div>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Qué Incluye el Cambio de Evaporador</h2>
                <div className="bg-white rounded-xl p-6">
                  <div className="space-y-4">
                    {[
                      'Extracción del evaporador dañado',
                      'Instalación de evaporador nuevo específico del vehículo',
                      'Reemplazo de todas las juntas y sellos',
                      'Reemplazo del filtro de habitáculo antipolen',
                      'Nuevo aceite PAG específico',
                      'Reemplazo de la válvula de expansión',
                      'Vacío del sistema por 45-60 minutos',
                      'Carga de gas refrigerante',
                      'Prueba de funcionamiento',
                      'Sanitización básica del sistema de ventilación',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-12">
                              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Proceso Paso a Paso</h2>
                <p className="text-gray-600 mb-8">8 pasos profesionales para cambiar el evaporador A/C automotriz. Tiempo total estimado: 240 minutos. Si lo prefieres, agenda nuestro servicio a domicilio con tecnico certificado e informe escrito.</p>
                <ol className="space-y-5">
                  <li id="paso-1" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">01</span>
                      <h3 className="text-xl font-semibold text-gray-900">Recuperacion completa del refrigerante</h3>
                      <span className="ml-auto text-sm text-gray-500">10 min</span>
                    </div>
                    <p className="text-gray-700">Conectar maquina de recuperacion y extraer todo el gas. Confirmar vacio total en manometros. El evaporador es parte del circuito cerrado, por lo que se debe vaciar todo el sistema antes de cualquier intervencion.</p>
                  </li>
                  <li id="paso-2" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">02</span>
                      <h3 className="text-xl font-semibold text-gray-900">Desmontaje parcial del tablero</h3>
                      <span className="ml-auto text-sm text-gray-500">60 min</span>
                    </div>
                    <p className="text-gray-700">Retirar guantera, panel central, salidas de aire y molduras del lado del pasajero. Desmontar parcialmente el airbag del pasajero si esta presente. Desconectar bateria por seguridad. Tiempo: 60-90 minutos segun el modelo.</p>
                  </li>
                  <li id="paso-3" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">03</span>
                      <h3 className="text-xl font-semibold text-gray-900">Acceso a la caja del evaporador</h3>
                      <span className="ml-auto text-sm text-gray-500">20 min</span>
                    </div>
                    <p className="text-gray-700">Localizar la caja del evaporador (detras del tablero, lado del pasajero). Quitar los tornillos y abrazaderas que sujetan la tapa de la caja. Desconectar las mangueras deExpansion, el conector electrico de la valvula y las salidas de ventilacion.</p>
                  </li>
                  <li id="paso-4" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">04</span>
                      <h3 className="text-xl font-semibold text-gray-900">Extraccion del evaporador danado</h3>
                      <span className="ml-auto text-sm text-gray-500">10 min</span>
                    </div>
                    <p className="text-gray-700">Sacar el evaporador con cuidado para no contaminar el sistema con virutas o restos. Inspeccionar las tuberias deExpansion: si estan obstruidas por oxido o residuos, deben cambiarse junto con el evaporador.</p>
                  </li>
                  <li id="paso-5" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">05</span>
                      <h3 className="text-xl font-semibold text-gray-900">Limpieza y desinfeccion de la caja</h3>
                      <span className="ml-auto text-sm text-gray-500">20 min</span>
                    </div>
                    <p className="text-gray-700">Limpiar la caja del evaporador con espuma biodegradable para eliminar hongos, bacterias y biofilm. Esto evita que el nuevo evaporador se contamine rapidamente. Aspirar residuos y secar bien antes del montaje.</p>
                  </li>
                  <li id="paso-6" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">06</span>
                      <h3 className="text-xl font-semibold text-gray-900">Instalacion del evaporador nuevo</h3>
                      <span className="ml-auto text-sm text-gray-500">20 min</span>
                    </div>
                    <p className="text-gray-700">Colocar juntas nuevas en las conexiones. Instalar el evaporador nuevo en la caja, conectar tuberias deExpansion con juntas toricas nuevas. Si se sustituyo la valvula deExpansion, conectarla electricamente. Verificar que todo este firme.</p>
                  </li>
                  <li id="paso-7" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">07</span>
                      <h3 className="text-xl font-semibold text-gray-900">Reensamblaje del tablero</h3>
                      <span className="ml-auto text-sm text-gray-500">60 min</span>
                    </div>
                    <p className="text-gray-700">Cerrar la caja del evaporador, montar todas las salidas de aire, paneles, guantera y molduras retiradas. Reconectar airbag y verificar que los conectores electricos del tablero esten firmes. Tiempo: 60 minutos.</p>
                  </li>
                  <li id="paso-8" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">08</span>
                      <h3 className="text-xl font-semibold text-gray-900">Vacio, prueba de fugas y carga completa</h3>
                      <span className="ml-auto text-sm text-gray-500">40 min</span>
                    </div>
                    <p className="text-gray-700">Hacer vacio por 45 minutos, verificar hermeticidad, reemplazar filtro secador, cargar R134a por peso. Probar A/C 20 minutos: verificar que salga aire frio (5-10 grados C), sin olores, presiones correctas. Confirmar que el drenaje del evaporador no gotee al interior.</p>
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
                <a href="https://wa.me/56935075600" className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium mb-3 transition-colors">
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
      <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Servicios relacionados que podrian interesarte</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/servicios/carga-gas" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h4 className="font-semibold text-blue-600 mb-1">Carga de Gas Refrigerante</h4>
            <p className="text-sm text-gray-600">Cambio de evaporador requiere recarga completa del sistema.</p>
          </a>
          <a href="/servicios/sanitizacion" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h4 className="font-semibold text-blue-600 mb-1">Sanitizacion del Sistema</h4>
            <p className="text-sm text-gray-600">Nuevo evaporador requiere sanitizacion para eliminar bacterias.</p>
          </a>
          <a href="/servicios/mantenimiento-preventivo" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h4 className="font-semibold text-blue-600 mb-1">Mantenimiento Preventivo</h4>
            <p className="text-sm text-gray-600">Revision completa post-reparacion del evaporador.</p>
          </a>        </div>
      </div>
    </div>
    </>
  )
}
