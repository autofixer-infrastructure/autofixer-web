import Link from 'next/link'
import ServiceViewTracker from '@/components/tracking/ServiceViewTracker'
import { Wind, CheckCircle, Phone, ChevronDown } from 'lucide-react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cambio de Condensador A/C Auto a Domicilio | desde $150.000',
  description: 'Reemplazo profesional de condensador de A/C automotriz a domicilio en Santiago. Vacio, recarga y garantia 90 dias. WhatsApp +56 9 3507 5600.',
  alternates: { canonical: 'https://autofixer.cl/servicios/cambio-condensador' },
}

const faqs = [
  { question: '¿Qué es el condensador del aire acondicionado?', answer: 'El condensador es un componente que recibe el gas refrigerante a alta presión y alta temperatura del compresor y lo convierte en líquido al disipar el calor. Está ubicado frente al radiador.' },
  { question: '¿Cómo sé si el condensador está dañado?', answer: 'Los síntomas incluyen: fuga de refrigerante visible, A/C que no enfría correctamente, sobrecalentamiento del motor, y baja presión de alta anormal.' },
  { question: '¿Cuánto cuesta cambiar el condensador?', answer: 'Los precios varían entre $150.000 y $350.000 dependiendo del modelo del vehículo y si se requieren componentes adicionales. Siempre entregamos presupuesto antes de intervenir.' },
  { question: '¿Se puede reparar o hay que reemplazarlo?', answer: 'Los condensadores generalmente no se reparan porque son componentes sellados de alta presión. Si tiene fuga u obstrucción, debe reemplazarse por uno nuevo.' },
  { question: '¿Cuánto tiempo toma el cambio?', answer: 'El reemplazo toma entre 2 y 4 horas, incluyendo: extracción, instalación del nuevo, vacío del sistema y carga de gas refrigerante.' },
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
  "name": "Como cambiar el condensador del aire acondicionado automotriz en 7 pasos",
  "description": "Procedimiento profesional de 7 pasos para cambiar el condensador A/C automotriz: recuperacion de gas, drenado, desmontaje, limpieza, instalacion del nuevo, filtro secador y vacio y carga.",
  "totalTime": "PT135M",
  "estimatedCost": {"@type": "MonetaryAmount", "currency": "CLP", "value": "120000-220000"},
  "tool": [
    {"@type": "HowToTool", "name": "Maquina de recuperacion de refrigerante"},
    {"@type": "HowToTool", "name": "Bomba de vacio de doble etapa"},
    {"@type": "HowToTool", "name": "Manometro de A/C automotriz alta y baja presion"},
    {"@type": "HowToTool", "name": "Balanza digital para refrigerante"},
    {"@type": "HowToTool", "name": "Termometro infrarrojo"}
  ],
  "step": [
    {"@type": "HowToStep", "position": 1, "name": "Recuperacion completa del gas", "text": "Conectar la maquina de recuperacion y extraer todo el refrigerante del sistema. Confirmar vacio total en manometros. Este paso es obligatorio por normativa y para evitar perdida del gas al desmontar.", "url": "https://autofixer.cl/servicios/cambio-condensador#paso-1", "tool": [{"@type": "HowToTool", "name": "Maquina de recuperacion de refrigerante"}]},
    {"@type": "HowToStep", "position": 2, "name": "Drenado del aceite y refrigerante residual", "text": "Con el sistema en vacio, desconectar mangueras y drenar el aceite PAG en un recipiente graduado. Medir el volumen para reponer la misma cantidad tras el cambio. El aceite se mezcla con el refrigerante y debe balancearse.", "url": "https://autofixer.cl/servicios/cambio-condensador#paso-2"},
    {"@type": "HowToStep", "position": 3, "name": "Desmontaje del condensador danado", "text": "Localizar el condensador (delante del radiador, en la parte frontal del vehiculo). Retirar el paragolpes o parrilla protectora segun el modelo. Desconectar mangueras, sensor de presion y soporte. Sacar el condensador con cuidado para no danar el radiador adyacente.", "url": "https://autofixer.cl/servicios/cambio-condensador#paso-3", "tool": [{"@type": "HowToTool", "name": "Manometro de A/C automotriz alta y baja presion"}]},
    {"@type": "HowToStep", "position": 4, "name": "Limpieza de la zona de montaje", "text": "Limpiar el area donde se montaba el condensador: restos de refrigerante, aceite, hojas e insectos. Limpiar las conexiones y revisar que los soportes y abrazaderas esten en buen estado para el nuevo condensador.", "url": "https://autofixer.cl/servicios/cambio-condensador#paso-4"},
    {"@type": "HowToStep", "position": 5, "name": "Instalacion del condensador nuevo", "text": "Posicionar el condensador nuevo en su lugar, conectar mangueras con juntas toricas nuevas (nunca reusar juntas) y reapretar abrazaderas. Conectar el sensor de presion. Reapretar soportes y verificar que el condensador quede firme y alineado.", "url": "https://autofixer.cl/servicios/cambio-condensador#paso-5", "tool": [{"@type": "HowToTool", "name": "Balanza digital para refrigerante"}]},
    {"@type": "HowToStep", "position": 6, "name": "Reemplazo del filtro secador", "text": "Cambiar siempre el filtro secador tras abrir el sistema. El filtro secador absorbe humedad y se satura al estar expuesto al ambiente. Sin filtro nuevo, la humedad danara el compresor en pocas semanas.", "url": "https://autofixer.cl/servicios/cambio-condensador#paso-6"},
    {"@type": "HowToStep", "position": 7, "name": "Vacio, prueba de fugas y carga completa", "text": "Hacer vacio profundo por 30 minutos, verificar hermeticidad, inyectar aceite PAG nuevo en cantidad igual a la drenada, cargar R134a por peso. Probar A/C en maximo 15 minutos verificando presiones (baja 25-45, alta 150-250 psi) y temperatura de salida 5-10 grados C.", "url": "https://autofixer.cl/servicios/cambio-condensador#paso-7", "tool": [{"@type": "HowToTool", "name": "Bomba de vacio de doble etapa"}, {"@type": "HowToTool", "name": "Termometro infrarrojo"}]}
  ]
};

export default function CambioCondensadorPage() {
  return (
    <>
      <ServiceViewTracker slug="cambio-condensador" serviceName="Cambio de Condensador" />
            <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://autofixer.cl/' },
            { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://autofixer.cl/servicios' },
            { '@type': 'ListItem', position: 3, name: 'Cambio de Condensador' }
          ]
        }) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Cambio de Condensador de Aire Acondicionado Automotriz", "serviceType": "Reemplazo de condensador automotriz", "description": "Reemplazo de condensador de aire acondicionado automotriz. Servicio a domicilio en Santiago con presupuesto cerrado antes de intervenir.", "provider": {"@type": "Organization", "name": "Autofixer", "@id": "https://autofixer.cl/#organization"}, "areaServed": {"@type": "GeoCircle", "geoMidpoint": {"@type": "GeoCoordinates", "latitude": -33.4372, "longitude": -70.6506}, "geoRadius": "25000"}, "url": "https://autofixer.cl/servicios/cambio-condensador/", "image": "https://autofixer.cl/og-servicio-cambio-condensador.jpg", "offers": {"@type": "Offer", "priceCurrency": "CLP", "price": "150000", "priceSpecification": {"@type": "PriceSpecification", "priceCurrency": "CLP", "minPrice": "150000", "maxPrice": "350000", "eligibleQuantity": {"@type": "QuantitativeValue", "unitText": "servicio"}}}, "category": "Automotive", "inLanguage": "es-CL"}) }}
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
            <li><span className="text-blue-900 font-medium">Cambio de Condensador</span></li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-teal-900 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cambio de Condensador de A/C en Santiago</h1>
            <p className="text-xl text-teal-100 mb-8">
              Reemplazo profesional del condensador de aire acondicionado. Condensadores nuevos con garantía.
              Servicio a domicilio en toda el área metropolitana de Santiago.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/56935075600?text=Hola%2C%20necesito%20cambiar%20el%20condensador%20de%20mi%20A%2FC" className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                <Phone className="w-5 h-5" />
                Solicitar Reemplazo
              </a>
              <a href="tel:+56935075600" className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-teal-900 px-6 py-3 rounded-lg font-medium transition-colors">
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
            <div><div className="text-2xl font-bold text-blue-900">Desde $150.000</div><div className="text-sm text-gray-600">Reemplazo completo</div></div>
            <div className="w-px bg-gray-300 hidden md:block"></div>
            <div><div className="text-2xl font-bold text-amber-600">2-4 horas</div><div className="text-sm text-gray-600">Tiempo de intervención</div></div>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Qué Incluye el Cambio de Condensador</h2>
                <div className="bg-white rounded-xl p-6">
                  <div className="space-y-4">
                    {[
                      'Extracción del condensador dañado',
                      'Instalación de condensador nuevo específico del vehículo',
                      'Reemplazo de juntas y sellos',
                      'Reemplazo de receptor-secador si aplica',
                      'Vacío del sistema por 45-60 minutos',
                      'Carga de gas refrigerante según especificaciones',
                      'Prueba de funcionamiento',
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
                <p className="text-gray-600 mb-8">7 pasos profesionales para cambiar el condensador A/C automotriz. Tiempo total estimado: 135 minutos. Si lo prefieres, agenda nuestro servicio a domicilio con tecnico certificado e informe escrito.</p>
                <ol className="space-y-5">
                  <li id="paso-1" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">01</span>
                      <h3 className="text-xl font-semibold text-gray-900">Recuperacion completa del gas</h3>
                      <span className="ml-auto text-sm text-gray-500">10 min</span>
                    </div>
                    <p className="text-gray-700">Conectar la maquina de recuperacion y extraer todo el refrigerante del sistema. Confirmar vacio total en manometros. Este paso es obligatorio por normativa y para evitar perdida del gas al desmontar.</p>
                  </li>
                  <li id="paso-2" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">02</span>
                      <h3 className="text-xl font-semibold text-gray-900">Drenado del aceite y refrigerante residual</h3>
                      <span className="ml-auto text-sm text-gray-500">5 min</span>
                    </div>
                    <p className="text-gray-700">Con el sistema en vacio, desconectar mangueras y drenar el aceite PAG en un recipiente graduado. Medir el volumen para reponer la misma cantidad tras el cambio. El aceite se mezcla con el refrigerante y debe balancearse.</p>
                  </li>
                  <li id="paso-3" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">03</span>
                      <h3 className="text-xl font-semibold text-gray-900">Desmontaje del condensador danado</h3>
                      <span className="ml-auto text-sm text-gray-500">30 min</span>
                    </div>
                    <p className="text-gray-700">Localizar el condensador (delante del radiador, en la parte frontal del vehiculo). Retirar el paragolpes o parrilla protectora segun el modelo. Desconectar mangueras, sensor de presion y soporte. Sacar el condensador con cuidado para no danar el radiador adyacente.</p>
                  </li>
                  <li id="paso-4" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">04</span>
                      <h3 className="text-xl font-semibold text-gray-900">Limpieza de la zona de montaje</h3>
                      <span className="ml-auto text-sm text-gray-500">10 min</span>
                    </div>
                    <p className="text-gray-700">Limpiar el area donde se montaba el condensador: restos de refrigerante, aceite, hojas e insectos. Limpiar las conexiones y revisar que los soportes y abrazaderas esten en buen estado para el nuevo condensador.</p>
                  </li>
                  <li id="paso-5" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">05</span>
                      <h3 className="text-xl font-semibold text-gray-900">Instalacion del condensador nuevo</h3>
                      <span className="ml-auto text-sm text-gray-500">20 min</span>
                    </div>
                    <p className="text-gray-700">Posicionar el condensador nuevo en su lugar, conectar mangueras con juntas toricas nuevas (nunca reusar juntas) y reapretar abrazaderas. Conectar el sensor de presion. Reapretar soportes y verificar que el condensador quede firme y alineado.</p>
                  </li>
                  <li id="paso-6" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">06</span>
                      <h3 className="text-xl font-semibold text-gray-900">Reemplazo del filtro secador</h3>
                      <span className="ml-auto text-sm text-gray-500">10 min</span>
                    </div>
                    <p className="text-gray-700">Cambiar siempre el filtro secador tras abrir el sistema. El filtro secador absorbe humedad y se satura al estar expuesto al ambiente. Sin filtro nuevo, la humedad danara el compresor en pocas semanas.</p>
                  </li>
                  <li id="paso-7" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">07</span>
                      <h3 className="text-xl font-semibold text-gray-900">Vacio, prueba de fugas y carga completa</h3>
                      <span className="ml-auto text-sm text-gray-500">50 min</span>
                    </div>
                    <p className="text-gray-700">Hacer vacio profundo por 30 minutos, verificar hermeticidad, inyectar aceite PAG nuevo en cantidad igual a la drenada, cargar R134a por peso. Probar A/C en maximo 15 minutos verificando presiones (baja 25-45, alta 150-250 psi) y temperatura de salida 5-10 grados C.</p>
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
                <a href="https://wa.me/56935075600" className="block w-full text-center bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium mb-3 transition-colors">
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
            <h3 className="font-semibold text-blue-600 mb-1">Carga de Gas Refrigerante</h3>
            <p className="text-sm text-gray-600">Cambio de condensador requiere recarga completa del sistema.</p>
          </a>
          <a href="/servicios/deteccion-reparacion-fugas" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="font-semibold text-blue-600 mb-1">Deteccion y Reparacion de Fugas</h3>
            <p className="text-sm text-gray-600">Verificamos que no haya fugas adicionales.</p>
          </a>
          <a href="/servicios/mantenimiento-preventivo" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="font-semibold text-blue-600 mb-1">Mantenimiento Preventivo</h3>
            <p className="text-sm text-gray-600">Revision completa post-reparacion del condensador.</p>
          </a>        </div>
      </div>
    </div>
    </>
  )
}
