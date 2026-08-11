import Link from 'next/link'
import ServiceViewTracker from '@/components/tracking/ServiceViewTracker'
import { Search, CheckCircle, Phone, ChevronDown } from 'lucide-react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diagnostico A/C Auto a Domicilio Santiago | desde $15.000',
  description: 'Diagnostico profesional de aire acondicionado automotriz a domicilio en Santiago. Identificamos la falla en 30 minutos. Sin costo si reparas con nosotros. WhatsApp +56 9 3507 5600.',
  alternates: { canonical: 'https://autofixer.cl/servicios/diagnostico' },
}

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
    <>
      <ServiceViewTracker slug="diagnostico" serviceName="Diagnostico Aire Acondicionado" />
            <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://autofixer.cl/' },
            { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://autofixer.cl/servicios' },
            { '@type': 'ListItem', position: 3, name: 'Diagnóstico' }
          ]
        }) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Diagnostico Profesional de Aire Acondicionado Automotriz", "serviceType": "Diagnostico de A/C automotriz con escaner", "description": "Diagnostico profesional del aire acondicionado de tu auto con escaner y manometros. Detectamos la falla exacta en 20 minutos. Servicio a domicilio en Santiago. Cotizacion cerrada.", "provider": {"@type": "Organization", "name": "Autofixer", "@id": "https://autofixer.cl/#organization"}, "areaServed": {"@type": "GeoCircle", "geoMidpoint": {"@type": "GeoCoordinates", "latitude": -33.4372, "longitude": -70.6506}, "geoRadius": "25000"}, "url": "https://autofixer.cl/servicios/diagnostico/", "image": "https://autofixer.cl/og-servicio-diagnostico.jpg", "offers": {"@type": "Offer", "priceCurrency": "CLP", "price": "15000", "priceSpecification": {"@type": "PriceSpecification", "priceCurrency": "CLP", "minPrice": "15000", "maxPrice": "25000", "eligibleQuantity": {"@type": "QuantitativeValue", "unitText": "servicio"}}}, "category": "Automotive", "inLanguage": "es-CL"}) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Cómo diagnosticar el aire acondicionado de tu auto en 8 pasos profesionales",
          "description": "Procedimiento profesional de 8 pasos para diagnosticar el sistema de aire acondicionado automotriz, identificar fugas, problemas de compresor, fallas eléctricas y de rendimiento.",
          "totalTime": "PT65M",
          "estimatedCost": {"@type": "MonetaryAmount", "currency": "CLP", "minValue": "15000", "maxValue": "35000", "value": "20000"},
          "tool": [
            {"@type": "HowToTool", "name": "Manómetro de A/C automotriz (alta y baja presión)"},
            {"@type": "HowToTool", "name": "Termómetro infrarrojo"},
            {"@type": "HowToTool", "name": "Lámpara UV detector de fugas"},
            {"@type": "HowToTool", "name": "Tinte fluorescente para sistema A/C"},
            {"@type": "HowToTool", "name": "Multímetro digital"},
            {"@type": "HowToTool", "name": "Estetoscopio mecánico"}
          ],
          "step": [
            {"@type": "HowToStep", "position": 1, "name": "Medición de presión del sistema", "text": "Conectar manómetros a los puertos de servicio de alta y baja presión. Encender el A/C en máximo y dejar estabilizar 5 minutos. Lectura esperada: baja ~25-45 psi, alta ~150-250 psi con motor a 1500 RPM y temperatura exterior de 25-30°C. Presión baja indica falta de refrigerante; presión alta excesiva indica condensador sucio o ventilación deficiente.", "url": "https://autofixer.cl/servicios/diagnostico#paso-1-presion"},
            {"@type": "HowToStep", "position": 2, "name": "Verificación de temperatura de salida", "text": "Ubicar termómetro infrarrojo en la rejilla central con el A/C en máximo, recirculación activada y puertas cerradas. Temperatura esperada: 5-10°C en ducto central tras 5-10 minutos. Temperatura mayor a 12°C indica rendimiento deficiente del sistema.", "url": "https://autofixer.cl/servicios/diagnostico#paso-2-temperatura"},
            {"@type": "HowToStep", "position": 3, "name": "Búsqueda de fugas visibles y UV", "text": "Inspección visual de mangueras, conexiones, condensador frontal y evaporador. Inyectar tinte fluorescente al sistema (si no se ha hecho antes) y revisar con lámpara UV todas las juntas, válvulas de servicio y uniones. Las fugas aparecen como manchas amarillo-verdosas brillantes bajo luz UV.", "url": "https://autofixer.cl/servicios/diagnostico#paso-3-fugas"},
            {"@type": "HowToStep", "position": 4, "name": "Test del compresor y embrague", "text": "Con el A/C encendido, escuchar el compresor con estetoscopio mecánico. Sonido normal: zumbido constante y suave. Ruidos metálicos, golpes o chirridos indican desgaste de rodamientos o embrague defectuoso. Verificar que el embrague magnético se acople firmemente al giro del motor.", "url": "https://autofixer.cl/servicios/diagnostico#paso-4-compresor"},
            {"@type": "HowToStep", "position": 5, "name": "Revisión del filtro de habitáculo", "text": "Localizar el filtro (detrás de la guantera o bajo el capó según el vehículo). Retirarlo y revisar su estado: si está negro, saturado de polvo o con hojas, debe cambiarse. Un filtro obstruido reduce el flujo de aire hasta un 50% y hace que el A/C parezca no enfriar.", "url": "https://autofixer.cl/servicios/diagnostico#paso-5-filtro"},
            {"@type": "HowToStep", "position": 6, "name": "Verificación eléctrica del circuito", "text": "Con multímetro digital, medir voltaje en el conector del compresor con el A/C encendido: debe ser 12-14V. Revisar fusibles del circuito A/C (caja de fusibles bajo capó y habitáculo) y el relay del compresor. Verificar continuidad del termostato y del sensor de presión.", "url": "https://autofixer.cl/servicios/diagnostico#paso-6-electrico"},
            {"@type": "HowToStep", "position": 7, "name": "Medición de flujo de aire en rejillas", "text": "Encender el ventilador en máxima velocidad y verificar con la mano o anemómetro que el flujo de aire en las rejillas centrales es fuerte y constante. Flujo débil indica ventilador del evaporador defectuoso, resistencia quemada o ductos obstruidos. Comparar entre las distintas velocidades del ventilador.", "url": "https://autofixer.cl/servicios/diagnostico#paso-7-flujo"},
            {"@type": "HowToStep", "position": 8, "name": "Informe y recomendaciones", "text": "Consolidar todos los hallazgos en un informe escrito con: presiones medidas, temperatura de salida, fugas detectadas, estado del compresor y filtro, voltajes del circuito, y flujo de aire. Priorizar reparaciones según urgencia y seguridad. Entregar estimación de costo detallada y cerrar el diagnóstico.", "url": "https://autofixer.cl/servicios/diagnostico#paso-8-informe"}
          ]
        }) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {"@type": "Answer", "text": f.answer}
          }))
        }) }}
      />
      <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="text-gray-500 hover:text-blue-900">Inicio</Link></li>
            <ChevronDown className="w-4 h-4 text-gray-500" />
            <li><Link href="/servicios" className="text-gray-500 hover:text-blue-900">Servicios</Link></li>
            <ChevronDown className="w-4 h-4 text-gray-500" />
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
              <a href="https://wa.me/56935075600?text=Hola%2C%20necesito%20diagnostico%20de%20A%2FC" className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
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
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Proceso de Diagnóstico Paso a Paso</h2>
                <p className="text-gray-600 mb-8">8 pasos profesionales que seguimos para diagnosticar el aire acondicionado de tu auto. Tiempo total estimado: 65 minutos. Si lo prefieres, agenda nuestro servicio a domicilio y lo hace un técnico certificado con informe escrito.</p>
                <ol className="space-y-5">
                  <li id="paso-1-presion" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">01</span>
                      <h3 className="text-xl font-semibold text-gray-900">Medición de presión del sistema</h3>
                      <span className="ml-auto text-sm text-gray-500">⏱️ 10 min</span>
                    </div>
                    <p className="text-gray-700">Conectar manómetros a los puertos de servicio de alta y baja presión. Lectura esperada en reposo: <strong>baja ~25-45 psi, alta ~150-250 psi</strong>. Una presión anormal indica pérdida de refrigerante o problema en el compresor.</p>
                    <p className="text-sm text-gray-500 mt-2">🔧 Manómetro de A/C automotriz (alta y baja presión)</p>
                  </li>
                  <li id="paso-2-temperatura" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">02</span>
                      <h3 className="text-xl font-semibold text-gray-900">Verificación de temperatura de salida</h3>
                      <span className="ml-auto text-sm text-gray-500">⏱️ 5 min</span>
                    </div>
                    <p className="text-gray-700">Termómetro infrarrojo en la rejilla central con el A/C en máximo. <strong>Esperado: 5-10°C en ducto central</strong>. Por encima de 12°C indica rendimiento deficiente.</p>
                    <p className="text-sm text-gray-500 mt-2">🔧 Termómetro infrarrojo</p>
                  </li>
                  <li id="paso-3-fugas" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">03</span>
                      <h3 className="text-xl font-semibold text-gray-900">Búsqueda de fugas visibles y UV</h3>
                      <span className="ml-auto text-sm text-gray-500">⏱️ 10 min</span>
                    </div>
                    <p className="text-gray-700">Inspección visual de mangueras, juntas, condensador y evaporador. Lámpara UV con tinte fluorescente para localizar microfugas en conexiones y válvulas de servicio.</p>
                    <p className="text-sm text-gray-500 mt-2">🔧 Lámpara UV detector de fugas · Tinte fluorescente para A/C</p>
                  </li>
                  <li id="paso-4-compresor" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">04</span>
                      <h3 className="text-xl font-semibold text-gray-900">Test del compresor y embrague</h3>
                      <span className="ml-auto text-sm text-gray-500">⏱️ 10 min</span>
                    </div>
                    <p className="text-gray-700">Encender A/C al máximo y escuchar el compresor. <strong>Sonido normal: zumbido constante</strong>. Ruidos metálicos, golpes o chirridos indican desgaste de rodamientos o embrague defectuoso.</p>
                    <p className="text-sm text-gray-500 mt-2">🔧 Estetoscopio mecánico</p>
                  </li>
                  <li id="paso-5-filtro" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">05</span>
                      <h3 className="text-xl font-semibold text-gray-900">Revisión del filtro de habitáculo</h3>
                      <span className="ml-auto text-sm text-gray-500">⏱️ 5 min</span>
                    </div>
                    <p className="text-gray-700">Localizar el filtro (detrás de la guantera o bajo el capó según el vehículo). Si está negro, saturado o con hojas, debe cambiarse. Un filtro obstruido reduce el flujo de aire hasta un 50%.</p>
                  </li>
                  <li id="paso-6-electrico" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">06</span>
                      <h3 className="text-xl font-semibold text-gray-900">Verificación eléctrica del circuito</h3>
                      <span className="ml-auto text-sm text-gray-500">⏱️ 10 min</span>
                    </div>
                    <p className="text-gray-700">Medir voltaje del compresor con A/C encendido: <strong>debe ser 12-14V</strong>. Revisar fusibles, relay del compresor, termostato y sensor de presión.</p>
                    <p className="text-sm text-gray-500 mt-2">🔧 Multímetro digital</p>
                  </li>
                  <li id="paso-7-flujo" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">07</span>
                      <h3 className="text-xl font-semibold text-gray-900">Medición de flujo de aire en rejillas</h3>
                      <span className="ml-auto text-sm text-gray-500">⏱️ 5 min</span>
                    </div>
                    <p className="text-gray-700">Verificar con la mano o anemómetro que el flujo de aire es fuerte y constante en todas las velocidades. Flujo débil indica ventilador del evaporador defectuoso o resistencia quemada.</p>
                    <p className="text-sm text-gray-500 mt-2">🔧 Anemómetro (opcional)</p>
                  </li>
                  <li id="paso-8-informe" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">08</span>
                      <h3 className="text-xl font-semibold text-gray-900">Informe y recomendaciones</h3>
                      <span className="ml-auto text-sm text-gray-500">⏱️ 10 min</span>
                    </div>
                    <p className="text-gray-700">Consolidar todos los hallazgos: presiones, temperatura, fugas, estado del compresor y filtro, voltajes y flujo de aire. Entregar estimación de costo detallada y cerrar el diagnóstico.</p>
                    <p className="text-sm text-gray-500 mt-2">🔧 Planilla de diagnóstico</p>
                  </li>
                </ol>
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
                <a href="https://wa.me/56935075600?text=Hola%2C%20necesito%20diagnostico%20de%20A%2FC" className="block w-full text-center bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium mb-3 transition-colors">
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
            <a href="https://wa.me/56935075600?text=Hola%2C%20quiero%20diagnosticar%20mi%20A%2FC" className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
              <Phone className="w-5 h-5" />
              Solicitar Diagnostico
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
            <p className="text-sm text-gray-600">Si el diagnostico indica baja presion, requeriras recarga de gas.</p>
          </a>
          <a href="/servicios/deteccion-reparacion-fugas" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="font-semibold text-blue-600 mb-1">Deteccion y Reparacion de Fugas</h3>
            <p className="text-sm text-gray-600">Diagnostico puede revelar fugas.</p>
          </a>
          <a href="/servicios/mantenimiento-preventivo" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="font-semibold text-blue-600 mb-1">Mantenimiento Preventivo</h3>
            <p className="text-sm text-gray-600">Diagnostico incluido en todo paquete de mantenimiento.</p>
          </a>        </div>
      </div>
    </div>
    </>
  )
}
