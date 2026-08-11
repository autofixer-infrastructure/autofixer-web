import Link from 'next/link'
import ServiceViewTracker from '@/components/tracking/ServiceViewTracker'
import { Zap, CheckCircle, Phone, ChevronDown } from 'lucide-react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A/C para Autos Hibridos y Electricos a Domicilio | Autofixer',
  description: 'Servicio especializado de aire acondicionado para vehiculos hibridos y electricos a domicilio en Santiago. Certificados en alto voltaje. Garantia 90 dias. WhatsApp +56 9 3507 5600.',
  alternates: { canonical: 'https://autofixer.cl/servicios/aire-electrico-hibrido' },
}

const faqs = [
  { question: 'Pueden trabajar en vehiculos electricos e hibridos?', answer: 'Si, estamos capacitados en sistemas de A/C de vehiculos electricos e hibridos. Trabajamos con los protocolos de seguridad para alta tension y conocemos las particularidades de estos sistemas.' },
  { question: 'Es seguro trabajar en el A/C de un vehiculo hibrido?', answer: 'Si, seguimos estrictamente los protocolos de seguridad para alta tension. Desconectamos la bateria de alto voltaje antes de trabajar y usamos herramientas aisladas. Tu seguridad y la de tu vehiculo estan garantizadas.' },
  { question: 'Que tipos de vehiculos hibridos manejan?', answer: 'Trabajamos con Toyota Prius, Toyota RAV4 Hibrido, Honda Accord Hibrido, Hyundai Ioniq, Kia Niro, y la mayoria de los vehiculos hibridos y electricos disponibles en Chile.' },
  { question: 'Cuanto cuesta el servicio para hibridos?', answer: 'Los precios son similares a los de vehiculos convencionales. La carga de gas desde $35.000, diagnostico desde $15.000. Los precios especificos dependen del modelo y el servicio requerido.' },
  { question: 'Los vehiculos electricos tienen garantia que se pueda perder?', answer: 'Siempre recomendamos verificar el manual del vehiculo. En general, trabajos realizados por profesionales certificados no afectan la garantia del fabricante si se usan repuestos apropiados y procedimientos correctos.' },
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
  "name": "Como diagnosticar y reparar el A/C electrico de vehiculos hibridos y electricos en 7 pasos",
  "description": "Procedimiento profesional de 7 pasos para diagnosticar y reparar el A/C electrico en vehiculos hibridos y electricos: verificacion de alto voltaje, lectura de codigos OBD, inspeccion del compresor electrico, prueba del modulo de control, recarga de refrigerante y verificacion de aislamiento electrico.",
  "totalTime": "PT100M",
  "estimatedCost": {"@type": "MonetaryAmount", "currency": "CLP", "value": "30000-50000"},
  "tool": [
    {"@type": "HowToTool", "name": "Multimetro de alto voltaje CAT III con sonda aislada"},
    {"@type": "HowToTool", "name": "Escaner OBD-II con capacidad para hibridos"},
    {"@type": "HowToTool", "name": "Equipo de seguridad para alto voltaje (guantes dielectricos, gafas, alfombrilla aislante)"},
    {"@type": "HowToTool", "name": "Manometro de A/C automotriz alta y baja presion"},
    {"@type": "HowToTool", "name": "Balanza digital para refrigerante"}
  ],
  "step": [
    {"@type": "HowToStep", "position": 1, "name": "Verificacion de seguridad y aislamiento electrico", "text": "Antes de cualquier intervencion, cortar el sistema de alto voltaje siguiendo el procedimiento del fabricante. Confirmar con multimetro CAT III que no haya tension en los cables del compresor electrico. Usar guantes dielectricos y alfombrilla aislante obligatoriamente.", "url": "https://autofixer.cl/servicios/aire-electrico-hibrido#paso-1", "tool": [{"@type": "HowToTool", "name": "Equipo de seguridad para alto voltaje (guantes dielectricos, gafas, alfombrilla aislante)"}, {"@type": "HowToTool", "name": "Multimetro de alto voltaje CAT III con sonda aislada"}]},
    {"@type": "HowToStep", "position": 2, "name": "Lectura de codigos OBD y codigos de fallo especificos", "text": "Conectar escaner OBD-II al puerto del vehiculo y leer codigos P0XXX, P1XXX y B0XXX (compresor electrico, modulo A/C, sistema hibrido). Anotar todos los codigos presentes para tener diagnostico completo antes de intervenir.", "url": "https://autofixer.cl/servicios/aire-electrico-hibrido#paso-2", "tool": [{"@type": "HowToTool", "name": "Escaner OBD-II con capacidad para hibridos"}]},
    {"@type": "HowToStep", "position": 3, "name": "Inspeccion del compresor electrico", "text": "El compresor electrico no tiene polea ni correa: se activa electricamente. Verificar conector de 3 fases, estado de los cables, sensor de presion del refrigerante y la resistencia de los devanados del motor electrico con multimetro. Compresor danado por temperatura o falta de refrigerante.", "url": "https://autofixer.cl/servicios/aire-electrico-hibrido#paso-3", "tool": [{"@type": "HowToTool", "name": "Multimetro de alto voltaje CAT III con sonda aislada"}]},
    {"@type": "HowToStep", "position": 4, "name": "Prueba del modulo de control del A/C electrico", "text": "Localizar el modulo o inverter que controla el compresor electrico. Verificar senales de control, alimentacion de la bateria auxiliar 12V y la senal de habilitacion del sistema hibrido. Fallo en el modulo impide la activacion del compresor.", "url": "https://autofixer.cl/servicios/aire-electrico-hibrido#paso-4", "tool": [{"@type": "HowToTool", "name": "Escaner OBD-II con capacidad para hibridos"}]},
    {"@type": "HowToStep", "position": 5, "name": "Recuperacion de gas y verificacion del sistema de refrigerante", "text": "Conectar maquina de recuperacion al sistema. Los vehiculos electricos usan R1234yf (mas comun en modelos nuevos) o R134a. Confirmar el tipo segun placa del vehiculo antes de recargar. Recargar R1234yf requiere maquina especifica por toxicidad y presion.", "url": "https://autofixer.cl/servicios/aire-electrico-hibrido#paso-5", "tool": [{"@type": "HowToTool", "name": "Manometro de A/C automotriz alta y baja presion"}]},
    {"@type": "HowToStep", "position": 6, "name": "Recarga por peso y verificacion de presion", "text": "Cargar el refrigerante correspondiente (R134a o R1234yf) por peso segun placa del vehiculo. Verificar presiones: baja 25-45 psi, alta 150-250 psi. En sistemas electricos, el compresor varia su velocidad segun demanda, no trabaja siempre a maxima potencia.", "url": "https://autofixer.cl/servicios/aire-electrico-hibrido#paso-6", "tool": [{"@type": "HowToTool", "name": "Balanza digital para refrigerante"}]},
    {"@type": "HowToStep", "position": 7, "name": "Prueba final y borrado de codigos", "text": "Borrar codigos OBD, hacer prueba de manejo simulada o estatica. Verificar: el compresor electrico enciende al activar A/C, el aire sale frio (5-10 grados C), no hay codigos nuevos, el sistema hibrido no reporta alertas. Documentar presion y temperatura final.", "url": "https://autofixer.cl/servicios/aire-electrico-hibrido#paso-7", "tool": [{"@type": "HowToTool", "name": "Escaner OBD-II con capacidad para hibridos"}]}
  ]
};

export default function AireElectricoPage() {
  return (
    <>
      <ServiceViewTracker slug="aire-electrico-hibrido" serviceName="Aire Electrico Hibrido" />
            <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://autofixer.cl/' },
            { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://autofixer.cl/servicios' },
            { '@type': 'ListItem', position: 3, name: 'A/C Eléctrico/Híbrido' }
          ]
        }) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Servicio de Aire Acondicionado para Vehiculos Hibridos y Electricos", "serviceType": "A/C automotriz para vehiculos hibridos y electricos", "description": "Servicio especializado de aire acondicionado para vehiculos hibridos y electricos. Carga de gas R1234yf, diagnostico con escaner y mantenimiento. Servicio a domicilio en Santiago.", "provider": {"@type": "Organization", "name": "Autofixer", "@id": "https://autofixer.cl/#organization"}, "areaServed": {"@type": "GeoCircle", "geoMidpoint": {"@type": "GeoCoordinates", "latitude": -33.4372, "longitude": -70.6506}, "geoRadius": "25000"}, "url": "https://autofixer.cl/servicios/aire-electrico-hibrido/", "image": "https://autofixer.cl/og-servicio-aire-electrico-hibrido.jpg", "offers": {"@type": "Offer", "priceCurrency": "CLP", "price": "35000", "priceSpecification": {"@type": "PriceSpecification", "priceCurrency": "CLP", "minPrice": "35000", "maxPrice": "110000", "eligibleQuantity": {"@type": "QuantitativeValue", "unitText": "servicio"}}}, "category": "Automotive", "inLanguage": "es-CL"}) }}
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
            <li><span className="text-blue-900 font-medium">Vehiculos Electricos e Hibridos</span></li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-emerald-800 to-teal-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-emerald-300" />
              <span className="text-emerald-300 font-medium">Especialistas en Hibridos</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Servicio de A/C para Vehiculos Electricos e Hibridos</h1>
            <p className="text-xl text-emerald-100 mb-8">
              Tecnicos capacitados en sistemas de alta tension de vehiculos hibridos y electricos.
              Diagnostico gratuito. Protocolos de seguridad certificados. Toyota Prius y mas.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/56935075600?text=Hola%2C%20necesito%20servicio%20de%20A%2FC%20para%20mi%20vehiculo%20hibrido" className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                <Phone className="w-5 h-5" />
                Solicitar Servicio
              </a>
              <a href="tel:+56935075600" className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-6 py-3 rounded-lg font-medium transition-colors">
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
            <div><div className="text-2xl font-bold text-emerald-800">Desde $35.000</div><div className="text-sm text-gray-600">Carga de gas</div></div>
            <div className="w-px bg-gray-300 hidden md:block"></div>
            <div><div className="text-2xl font-bold text-amber-600">Desde $15.000</div><div className="text-sm text-gray-600">Diagnostico</div></div>
            <div className="w-px bg-gray-300 hidden md:block"></div>
            <div><div className="text-2xl font-bold text-amber-600">Gratuito</div><div className="text-sm text-gray-600">Si contratas servicio</div></div>
            <div className="w-px bg-gray-300 hidden md:block"></div>
            <div><div className="text-2xl font-bold text-amber-600">Certificados</div><div className="text-sm text-gray-600">Seguridad alta tension</div></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Marcas y Modelos que Manejamos</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    ['Toyota', 'Prius, RAV4 Hibrido, Corolla Hibrido'],
                    ['Honda', 'Accord Hibrido, Insight'],
                    ['Hyundai', 'Ioniq, Sonata Hibrido'],
                    ['Kia', 'Niro, Optima Hibrido'],
                    ['Ford', 'Fusion Hibrido, Escape Hibrido'],
                    [' Otros', 'Consultar por tu modelo especifico'],
                  ].map(([brand, models], idx) => (
                    <div key={idx} className="bg-white rounded-xl p-5">
                      <h3 className="font-bold text-gray-900 mb-2">{brand}</h3>
                      <p className="text-gray-600 text-sm">{models}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Que Incluye el Servicio</h2>
                <div className="bg-white rounded-xl p-6">
                  <div className="space-y-4">
                    {[
                      'Desconexion segura de alta tension',
                      'Diagnostico segun protocolo hibrido',
                      'Carga de gas R134a o R1234yf segun espec',
                      'Revision de compresor electrico',
                      'Verificacion del sistema de climatizacion',
                      'Reconexion y prueba de seguridad',
                      'Prueba de funcionamiento completo',
                      'Diagnostico gratuito si contratas',
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
                <p className="text-gray-600 mb-8">7 pasos profesionales para diagnosticar y reparar el A/C electrico de vehiculos hibridos y electricos. Tiempo total estimado: 100 minutos. Si lo prefieres, agenda nuestro servicio a domicilio con tecnico certificado en alto voltaje e informe escrito.</p>
                <ol className="space-y-5">
                  <li id="paso-1" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">01</span>
                      <h3 className="text-xl font-semibold text-gray-900">Verificacion de seguridad y aislamiento electrico</h3>
                      <span className="ml-auto text-sm text-gray-500">10 min</span>
                    </div>
                    <p className="text-gray-700">Antes de cualquier intervencion, cortar el sistema de alto voltaje siguiendo el procedimiento del fabricante. Confirmar con multimetro CAT III que no haya tension en los cables del compresor electrico. Usar guantes dielectricos y alfombrilla aislante obligatoriamente.</p>
                  </li>
                  <li id="paso-2" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">02</span>
                      <h3 className="text-xl font-semibold text-gray-900">Lectura de codigos OBD y codigos de fallo especificos</h3>
                      <span className="ml-auto text-sm text-gray-500">10 min</span>
                    </div>
                    <p className="text-gray-700">Conectar escaner OBD-II al puerto del vehiculo y leer codigos P0XXX, P1XXX y B0XXX (compresor electrico, modulo A/C, sistema hibrido). Anotar todos los codigos presentes para tener diagnostico completo antes de intervenir.</p>
                  </li>
                  <li id="paso-3" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">03</span>
                      <h3 className="text-xl font-semibold text-gray-900">Inspeccion del compresor electrico</h3>
                      <span className="ml-auto text-sm text-gray-500">15 min</span>
                    </div>
                    <p className="text-gray-700">El compresor electrico no tiene polea ni correa: se activa electricamente. Verificar conector de 3 fases, estado de los cables, sensor de presion del refrigerante y la resistencia de los devanados del motor electrico con multimetro. Compresor danado por temperatura o falta de refrigerante.</p>
                  </li>
                  <li id="paso-4" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">04</span>
                      <h3 className="text-xl font-semibold text-gray-900">Prueba del modulo de control del A/C electrico</h3>
                      <span className="ml-auto text-sm text-gray-500">15 min</span>
                    </div>
                    <p className="text-gray-700">Localizar el modulo o inverter que controla el compresor electrico. Verificar senales de control, alimentacion de la bateria auxiliar 12V y la senal de habilitacion del sistema hibrido. Fallo en el modulo impide la activacion del compresor.</p>
                  </li>
                  <li id="paso-5" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">05</span>
                      <h3 className="text-xl font-semibold text-gray-900">Recuperacion de gas y verificacion del sistema de refrigerante</h3>
                      <span className="ml-auto text-sm text-gray-500">15 min</span>
                    </div>
                    <p className="text-gray-700">Conectar maquina de recuperacion al sistema. Los vehiculos electricos usan R1234yf (mas comun en modelos nuevos) o R134a. Confirmar el tipo segun placa del vehiculo antes de recargar. Recargar R1234yf requiere maquina especifica por toxicidad y presion.</p>
                  </li>
                  <li id="paso-6" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">06</span>
                      <h3 className="text-xl font-semibold text-gray-900">Recarga por peso y verificacion de presion</h3>
                      <span className="ml-auto text-sm text-gray-500">15 min</span>
                    </div>
                    <p className="text-gray-700">Cargar el refrigerante correspondiente (R134a o R1234yf) por peso segun placa del vehiculo. Verificar presiones: baja 25-45 psi, alta 150-250 psi. En sistemas electricos, el compresor varia su velocidad segun demanda, no trabaja siempre a maxima potencia.</p>
                  </li>
                  <li id="paso-7" className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">07</span>
                      <h3 className="text-xl font-semibold text-gray-900">Prueba final y borrado de codigos</h3>
                      <span className="ml-auto text-sm text-gray-500">20 min</span>
                    </div>
                    <p className="text-gray-700">Borrar codigos OBD, hacer prueba de manejo simulada o estatica. Verificar: el compresor electrico enciende al activar A/C, el aire sale frio (5-10 grados C), no hay codigos nuevos, el sistema hibrido no reporta alertas. Documentar presion y temperatura final.</p>
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
                      <span className="font-bold text-emerald-800">{zone.price === 0 ? 'Gratis' : '+' + zone.price.toLocaleString('es-CL') + ' CLP'}</span>
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/56935075600?text=Hola%2C%20necesito%20servicio%20A%2FC%20para%20mi%20hibrido" className="block w-full text-center bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium mb-3 transition-colors">
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

      <section className="py-16 bg-gradient-to-br from-emerald-800 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tu Hibrido Merece Atencion Especializada</h2>
          <p className="text-xl text-emerald-100 mb-8">Tecnicos certificados en sistemas de alta tension. Protocolos de seguridad para proteger tu vehiculo y a tu familia.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/56935075600?text=Hola%2C%20necesito%20servicio%20A%2FC%20para%20mi%20vehiculo%20hibrido" className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
              <Phone className="w-5 h-5" />
              Solicitar Servicio
            </a>
            <Link href="/cotizar" className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-lg font-medium text-lg transition-colors">
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
            <p className="text-sm text-gray-600">Autos electricos e hibridos requieren gases refrigerantes especificos.</p>
          </a>
          <a href="/servicios/diagnostico" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="font-semibold text-blue-600 mb-1">Diagnostico Especializado</h3>
            <p className="text-sm text-gray-600">Sistemas de AC de vehiculos electricos requieren diagnostico especializado.</p>
          </a>
          <a href="/servicios/mantenimiento-preventivo" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="font-semibold text-blue-600 mb-1">Mantenimiento Preventivo</h3>
            <p className="text-sm text-gray-600">Mantenimiento especifico para sistemas de climatizacion hibrida.</p>
          </a>        </div>
      </div>
    </div>
    </>
  )
}
