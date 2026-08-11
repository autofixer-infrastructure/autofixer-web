"use client"
import Link from 'next/link'
import ServiceViewTracker from '@/components/tracking/ServiceViewTracker'
import { Settings, CheckCircle, Phone, ChevronDown } from 'lucide-react'

const faqs = [
  { question: 'Cuando hay que reparar o cambiar el compresor?', answer: 'El compresor debe repararse o reemplazarse cuando presenta ruidos extraños, no embraga correctamente, tiene fugas internas de aceite o gas, o simplemente deja de comprimir. Un diagnostico profesional determina si es reparable o requiere reemplazo.' },
  { question: 'Reparan o solo reemplazan compresores?', answer: 'Hacemos ambas cosas. Algunos compresores se pueden reparar (reemplazo de embrague, sellos, valvulas). Si el daño es irreparable, recomendamos un compresor reconstruido o nuevo OEM segun tu presupuesto.' },
  { question: 'Cuanto cuesta cambiar el compresor?', answer: 'El reemplazo de compresor va desde $250.000 a $600.000 dependiendo del vehiculo y si usas compresor reconstruido o nuevo. Siempre entregamos presupuesto detallado antes de intervenir.' },
  { question: 'Cuanto tiempo toma?', answer: 'El reemplazo de compresor toma entre 4 y 8 horas dependiendo del vehiculo y si requiere componentes adicionales como filtro desacumulador, liquido refrigerante o componentes electricos.' },
  { question: 'Hacen garantia del compresor?', answer: 'Si, todos los compresores nuevos y reconstruidos tienen garantia del fabricante de 6 a 12 meses. La garantia cubre defectos de fabricacion, no daños por mal uso o fugas preexistentes.' },
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
  "name": "Como reparar o reemplazar el compresor del aire acondicionado automotriz en 7 pasos",
  "description": "Procedimiento profesional de 7 pasos para reparar o cambiar el compresor A/C automotriz: recuperacion, desmontaje electrico, desmontaje mecanico, flushing obligatorio, instalacion del nuevo compresor, filtro secador y vacio y carga.",
  "totalTime": "PT180M",
  "estimatedCost": {"@type": "MonetaryAmount", "currency": "CLP", "value": "250000-450000"},
  "tool": [
    {"@type": "HowToTool", "name": "Maquina de recuperacion de refrigerante"},
    {"@type": "HowToTool", "name": "Bomba de vacio de doble etapa"},
    {"@type": "HowToTool", "name": "Manometro de A/C automotriz alta y baja presion"},
    {"@type": "HowToTool", "name": "Balanza digital para refrigerante"},
    {"@type": "HowToTool", "name": "Kit de flushing con solvente A/C"},
    {"@type": "HowToTool", "name": "Multimetro automotriz"}
  ],
  "step": [
    {"@type": "HowToStep", "position": 1, "name": "Recuperacion total del refrigerante", "text": "Conectar la maquina de recuperacion y extraer el 100 por ciento del gas. Confirmar vacio total en manometros. Esto protege el medio ambiente y prepara el sistema para el trabajo mecanico.", "url": "https://autofixer.cl/servicios/reparacion-compresor#paso-1", "tool": [{"@type": "HowToTool", "name": "Maquina de recuperacion de refrigerante"}]},
    {"@type": "HowToStep", "position": 2, "name": "Desmontaje electrico del compresor", "text": "Desconectar bateria. Localizar conector electrico del embrague del compresor y desconectarlo cuidadosamente. En vehiculos con control electrico de valvula, desconectar la valvula deExpansion. Marcar y fotografiar cada conexion.", "url": "https://autofixer.cl/servicios/reparacion-compresor#paso-2", "tool": [{"@type": "HowToTool", "name": "Multimetro automotriz"}]},
    {"@type": "HowToStep", "position": 3, "name": "Desmontaje mecanico del compresor", "text": "Aflojar la correa del accesorio o cadena de distribucion segun el modelo. Quitar los pernos de fijacion del compresor al soporte. Desconectar mangueras de succion y descarga, tapar inmediatamente las lineas para evitar contaminacion. Sacar el compresor.", "url": "https://autofixer.cl/servicios/reparacion-compresor#paso-3"},
    {"@type": "HowToStep", "position": 4, "name": "Flushing obligatorio del sistema", "text": "Cualquier fallo del compresor contamina el circuito con virutas metalicas y goma. Hacer flushing del condensador, mangueras, evaporador y filtro secador antes de instalar el nuevo compresor. Sin flushing, el compresor nuevo fallara en pocas semanas.", "url": "https://autofixer.cl/servicios/reparacion-compresor#paso-4", "tool": [{"@type": "HowToTool", "name": "Kit de flushing con solvente A/C"}]},
    {"@type": "HowToStep", "position": 5, "name": "Instalacion del compresor nuevo o reparado", "text": "Montar el compresor nuevo (o reparado con kit de embrague y valvulas) en su soporte, apretar pernos al par especificado. Conectar mangueras con juntas toricas nuevas. Reconectar conector electrico del embrague. Montar la correa y verificar tension.", "url": "https://autofixer.cl/servicios/reparacion-compresor#paso-5"},
    {"@type": "HowToStep", "position": 6, "name": "Reemplazo obligatorio del filtro secador", "text": "Instalar filtro secador nuevo. Es obligatorio tras la apertura del sistema: el filtro secador captura humedad que daña el compresor nuevo. Tambien cambiar la valvula deExpansion si el modelo lo requiere.", "url": "https://autofixer.cl/servicios/reparacion-compresor#paso-6"},
    {"@type": "HowToStep", "position": 7, "name": "Vacio profundo, carga y prueba final", "text": "Hacer vacio por 45 minutos (mas largo que una carga normal por la complejidad). Verificar hermeticidad, inyectar aceite PAG nuevo segun placa, cargar R134a por peso. Probar A/C 20 minutos verificando: embrague engrana, presiones correctas (baja 25-45, alta 150-250 psi), salida 5-10 grados C.", "url": "https://autofixer.cl/servicios/reparacion-compresor#paso-7", "tool": [{"@type": "HowToTool", "name": "Bomba de vacio de doble etapa"}, {"@type": "HowToTool", "name": "Balanza digital para refrigerante"}, {"@type": "HowToTool", "name": "Manometro de A/C automotriz alta y baja presion"}]}
  ]
};

export default function ReparacionCompresorPage() {
  return (
    <>
      <ServiceViewTracker slug="reparacion-compresor" serviceName="Reparacion de Compresor" />
            <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://autofixer.cl/' },
            { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://autofixer.cl/servicios' },
            { '@type': 'ListItem', position: 3, name: 'Reparación de Compresor' }
          ]
        }) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Reparacion y Reemplazo de Compresor de Aire Acondicionado Automotriz", "serviceType": "Reparacion de compresor automotriz", "description": "Reemplazo y reparacion de compresor de aire acondicionado automotriz. Compresores reconstruidos y nuevos con garantia. Servicio a domicilio en Santiago.", "provider": {"@type": "Organization", "name": "Autofixer", "@id": "https://autofixer.cl/#organization"}, "areaServed": {"@type": "GeoCircle", "geoMidpoint": {"@type": "GeoCoordinates", "latitude": -33.4372, "longitude": -70.6506}, "geoRadius": "25000"}, "url": "https://autofixer.cl/servicios/reparacion-compresor/", "image": "https://autofixer.cl/og-servicio-reparacion-compresor.jpg", "offers": {"@type": "Offer", "priceCurrency": "CLP", "price": "250000", "priceSpecification": {"@type": "PriceSpecification", "priceCurrency": "CLP", "minPrice": "250000", "maxPrice": "600000", "eligibleQuantity": {"@type": "QuantitativeValue", "unitText": "servicio"}}}, "category": "Automotive", "inLanguage": "es-CL"}) }}
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
            <li><span className="text-blue-900 font-medium">Reparacion de Compresor</span></li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="w-6 h-6 text-blue-300" />
              <span className="text-blue-300 font-medium">Reparacion Especializadas</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Reparacion y Reemplazo de Compresor A/C</h1>
            <p className="text-xl text-blue-100 mb-8">
              Compresores nuevos y reconstruidos con garantia. Diagnostico profesional para determinar
              si se repara o reemplaza. Servicio a domicilio en toda Santiago.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/56935075600?text=Hola%2C%20creo%20que%20mi%20compresor%20esta%20fallando" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                <Phone className="w-5 h-5" />
                Solicitar Revision
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
            <div><div className="text-2xl font-bold text-blue-900">Desde $250.000</div><div className="text-sm text-gray-600">Reemplazo compresor</div></div>
            <div className="w-px bg-gray-300 hidden md:block"></div>
            <div><div className="text-2xl font-bold text-amber-600">4-8 horas</div><div className="text-sm text-gray-600">Instalacion</div></div>
            <div className="w-px bg-gray-300 hidden md:block"></div>
            <div><div className="text-2xl font-bold text-amber-600">6-12 meses</div><div className="text-sm text-gray-600">Garantia compresor</div></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Senales de Compresor Fallando</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    ['Ruido extraño al encender', 'Gorgoteo o chirrido del compresor'],
                    ['No embraga el embrague', 'El embrague no se activa o lo hace intermitentemente'],
                    ['A/C no enfria', 'El sistema enciende pero no produce frio'],
                    ['Fuga de aceite', 'Manchas de aceite alrededor del compresor'],
                    ['Sobrecalentamiento', 'El compresor se calienta excesivamente'],
                    ['Presion irregular', 'Presiones anomalas en el manometro'],
                  ].map(([title, desc], idx) => (
                    <div key={idx} className="bg-white rounded-xl p-5 border-l-4 border-blue-500">
                      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                      <p className="text-gray-600 text-sm">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Que Incluye el Servicio</h2>
                <div className="bg-white rounded-xl p-6">
                  <div className="space-y-4">
                    {[
                      'Diagnostico profesional del compresor',
                      'Revision de todo el sistema de A/C',
                      'Presupuesto antes de cualquier intervencion',
                      'Remocion del compresor dañado',
                      'Instalacion de compresor nuevo o reconstruido',
                      'Reemplazo de filtro desacumulador',
                      'Carga de gas refrigerante nuevo',
                      'Prueba de funcionamiento',
                      'Garantia del compresor instalado',
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
                <p className="text-gray-600 mb-8">7 pasos profesionales para reparar o reemplazar el compresor A/C automotriz. Tiempo total estimado: 180 minutos. Si lo prefieres, agenda nuestro servicio a domicilio con tecnico certificado e informe escrito.</p>
                <ol className="space-y-5">
                  <li id="paso-1" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">01</span>
                      <h3 className="text-xl font-semibold text-gray-900">Recuperacion total del refrigerante</h3>
                      <span className="ml-auto text-sm text-gray-500">15 min</span>
                    </div>
                    <p className="text-gray-700">Conectar la maquina de recuperacion y extraer el 100 por ciento del gas. Confirmar vacio total en manometros. Esto protege el medio ambiente y prepara el sistema para el trabajo mecanico.</p>
                  </li>
                  <li id="paso-2" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">02</span>
                      <h3 className="text-xl font-semibold text-gray-900">Desmontaje electrico del compresor</h3>
                      <span className="ml-auto text-sm text-gray-500">15 min</span>
                    </div>
                    <p className="text-gray-700">Desconectar bateria. Localizar conector electrico del embrague del compresor y desconectarlo cuidadosamente. En vehiculos con control electrico de valvula, desconectar la valvula deExpansion. Marcar y fotografiar cada conexion.</p>
                  </li>
                  <li id="paso-3" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">03</span>
                      <h3 className="text-xl font-semibold text-gray-900">Desmontaje mecanico del compresor</h3>
                      <span className="ml-auto text-sm text-gray-500">30 min</span>
                    </div>
                    <p className="text-gray-700">Aflojar la correa del accesorio o cadena de distribucion segun el modelo. Quitar los pernos de fijacion del compresor al soporte. Desconectar mangueras de succion y descarga, tapar inmediatamente las lineas para evitar contaminacion. Sacar el compresor.</p>
                  </li>
                  <li id="paso-4" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">04</span>
                      <h3 className="text-xl font-semibold text-gray-900">Flushing obligatorio del sistema</h3>
                      <span className="ml-auto text-sm text-gray-500">30 min</span>
                    </div>
                    <p className="text-gray-700">Cualquier fallo del compresor contamina el circuito con virutas metalicas y goma. Hacer flushing del condensador, mangueras, evaporador y filtro secador antes de instalar el nuevo compresor. Sin flushing, el compresor nuevo fallara en pocas semanas.</p>
                  </li>
                  <li id="paso-5" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">05</span>
                      <h3 className="text-xl font-semibold text-gray-900">Instalacion del compresor nuevo o reparado</h3>
                      <span className="ml-auto text-sm text-gray-500">30 min</span>
                    </div>
                    <p className="text-gray-700">Montar el compresor nuevo (o reparado con kit de embrague y valvulas) en su soporte, apretar pernos al par especificado. Conectar mangueras con juntas toricas nuevas. Reconectar conector electrico del embrague. Montar la correa y verificar tension.</p>
                  </li>
                  <li id="paso-6" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">06</span>
                      <h3 className="text-xl font-semibold text-gray-900">Reemplazo obligatorio del filtro secador</h3>
                      <span className="ml-auto text-sm text-gray-500">10 min</span>
                    </div>
                    <p className="text-gray-700">Instalar filtro secador nuevo. Es obligatorio tras la apertura del sistema: el filtro secador captura humedad que daña el compresor nuevo. Tambien cambiar la valvula deExpansion si el modelo lo requiere.</p>
                  </li>
                  <li id="paso-7" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">07</span>
                      <h3 className="text-xl font-semibold text-gray-900">Vacio profundo, carga y prueba final</h3>
                      <span className="ml-auto text-sm text-gray-500">50 min</span>
                    </div>
                    <p className="text-gray-700">Hacer vacio por 45 minutos (mas largo que una carga normal por la complejidad). Verificar hermeticidad, inyectar aceite PAG nuevo segun placa, cargar R134a por peso. Probar A/C 20 minutos verificando: embrague engrana, presiones correctas (baja 25-45, alta 150-250 psi), salida 5-10 grados C.</p>
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
                <a href="https://wa.me/56935075600?text=Hola%2C%20mi%20compresor%20esta%20fallando" className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium mb-3 transition-colors">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tu Compresor No Funciona?</h2>
          <p className="text-xl text-blue-100 mb-8">Diagnostico profesional y presupuesto sin compromiso. Compresores con garantia para todos los vehiculos.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/56935075600?text=Hola%2C%20mi%20compresor%20A%2FC%20no%20funciona" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
              <Phone className="w-5 h-5" />
              Solicitar Revision
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
            <p className="text-sm text-gray-600">Nuevo compresor requiere recarga de gas con refrigerante puro certificado.</p>
          </a>
          <a href="/servicios/deteccion-reparacion-fugas" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h4 className="font-semibold text-blue-600 mb-1">Deteccion y Reparacion de Fugas</h4>
            <p className="text-sm text-gray-600">El compresor puede estar fugando.</p>
          </a>
          <a href="/servicios/mantenimiento-preventivo" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h4 className="font-semibold text-blue-600 mb-1">Mantenimiento Preventivo</h4>
            <p className="text-sm text-gray-600">Mantencion que alarga la vida util del compresor.</p>
          </a>        </div>
      </div>
    </div>
    </>
  )
}
