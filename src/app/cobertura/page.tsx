import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, CheckCircle, ChevronRight, Navigation } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cobertura de Servicio de Aire Acondicionado Automotriz a Domicilio en Santiago',
  description: 'Servicio de aire acondicionado automotriz a domicilio en Santiago. Cubrimos Providencia, Las Condes, Ñuñoa, Santiago Centro, La Florida y más. Precios por zona.',
  keywords: ['servicio aire acondicionado a domicilio Santiago', 'cobertura AC auto', 'taller movil aire acondicionado'],
  openGraph: {
    title: 'Cobertura Autofixer - Aire Acondicionado a Domicilio en Santiago',
    description: 'Revisa las zonas de cobertura y costos de desplazamiento de nuestro servicio a domicilio.',
    type: 'website',
  },
}

const zones = [
  {
    id: 1,
    name: 'Zona 1 - Centro',
    color: 'bg-green-500',
    borderColor: 'border-green-500',
    textColor: 'text-green-700',
    bgLight: 'bg-green-50',
    displacement: 0,
    description: 'Sin costo de desplazamiento',
    communes: ['Recoleta', 'Independencia', 'Santiago Centro'],
    includes: 'Parque O\'Higgins, Plaza de Armas, Bellas Artes, Patronato',
  },
  {
    id: 2,
    name: 'Zona 2 - Nororiente',
    color: 'bg-blue-500',
    borderColor: 'border-blue-500',
    textColor: 'text-blue-700',
    bgLight: 'bg-blue-50',
    displacement: 5000,
    description: '$5.000 de desplazamiento',
    communes: ['Providencia', 'Ñuñoa', 'Las Condes', 'Vitacura', 'La Reina', 'Macul'],
    includes: 'Pedro de Valdivia, Tobalaba, Manquehue, Sanhattan',
  },
  {
    id: 3,
    name: 'Zona 3 - Sur',
    color: 'bg-orange-500',
    borderColor: 'border-orange-500',
    textColor: 'text-orange-700',
    bgLight: 'bg-orange-50',
    displacement: 10000,
    description: '$10.000 de desplazamiento',
    communes: ['La Florida', 'Peñalolén', 'Puente Alto', 'San Bernardo'],
    includes: 'Vicuña Mackenna, La Gran Avenida, Camino a Pirque',
  },
  {
    id: 4,
    name: 'Zona 4 - Pudahuel',
    color: 'bg-purple-500',
    borderColor: 'border-purple-500',
    textColor: 'text-purple-700',
    bgLight: 'bg-purple-50',
    displacement: 15000,
    description: '$15.000 de desplazamiento',
    communes: ['Pudahuel', 'Quilicura', 'Lampa', 'Batuco'],
    includes: 'Aeropuerto Arturo Merino Benítez, Pudahuel Sur, Chicureo Oriente',
  },
  {
    id: 5,
    name: 'Zona 5 - Periferia',
    color: 'bg-red-500',
    borderColor: 'border-red-500',
    textColor: 'text-red-700',
    bgLight: 'bg-red-50',
    displacement: 25000,
    description: '$25.000 de desplazamiento',
    communes: ['Colina', 'Chicureo', 'Pirque', 'San José de Maipo'],
    includes: 'Chicureo Valley, Colina Centro, Montana',
  },
]

const faqItems = [
  {
    question: '¿Cuál es el radio máximo de cobertura?',
    answer: 'Cubrimos toda la Región Metropolitana hasta 40 km desde Recoleta. Para zonas más alejadas, contáctanos para evaluar si podemos atenderte.',
  },
  {
    question: '¿El costo de desplazamiento se suma al servicio?',
    answer: 'Sí, el costo de desplazamiento varía según la zona y se суммирует al precio del servicio. La Zona 1 (Santiago Centro, Recoleta, Independencia) no tiene costo adicional.',
  },
  {
    question: '¿Pueden atenderme en la noche o fines de semana?',
    answer: 'Sí, ofrecemos horarios extendidos de lunes a viernes de 9:00 a 19:00 y sábados de 9:00 a 14:00. Para horarios especiales, consulta disponibilidad.',
  },
  {
    question: '¿Qué pasa si estoy en una zona no listada?',
    answer: 'Contáctanos directamente y evaluaremos si podemos cubrir tu ubicación. En algunos casos podemos encontrar soluciones para zonas no listadas.',
  },
  {
    question: '¿Cómo sé en qué zona estoy?',
    answer: 'Si tu comuna aparece en la lista de una zona específica, ese es tu costo de desplazamiento. Si tienes dudas, puedes indicarnos tu dirección exacta al cotizar.',
  },
]

const benefits = [
  'Técnicos certificados con experiencia en todas las marcas',
  'Equipos de diagnóstico de última generación',
  'Gas refrigerante certificado y de alta calidad',
  'Garantía de 90 días en todos los servicios',
  'Precios transparentes sin costos ocultos',
  'Servicio a domicilio: no necesitas llevar el auto',
]

export default function CoberturaPage() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Navigation className="w-4 h-4" />
              <span className="text-sm font-medium">Cobertura en toda la Región Metropolitana</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Servicio de Aire Acondicionado Automotriz a Domicilio en Santiago
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Llegamos a donde estés con técnicos certificados, equipos profesionales y precios transparentes. 
              Sin mover tu auto, sin esperar en talleres.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cotizar"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Cotizar Ahora
                <ChevronRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+56912345678"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-500 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Zonas de Cobertura y Precios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Encuentra tu zona y conoce el costo de desplazamiento para nuestro servicio a domicilio.
              Todos los precios incluyen IVA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {zones.map((zone) => (
              <div
                key={zone.id}
                className={`${zone.bgLight} rounded-xl p-6 border-2 ${zone.borderColor} hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${zone.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${zone.textColor}`}>{zone.name}</h3>
                    <p className="text-sm text-gray-500">
                      {zone.displacement === 0 ? 'Sin costo' : `+${formatPrice(zone.displacement)}`}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">{zone.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">Comunas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {zone.communes.map((commune) => (
                      <span
                        key={commune}
                        className={`${zone.color} text-white text-xs px-2 py-1 rounded-full`}
                      >
                        {commune}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs text-gray-500">{zone.includes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Summary Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Resumen de Precios por Zona
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-700 border-b">Zona</th>
                    <th className="text-left p-4 font-semibold text-gray-700 border-b">Comunas</th>
                    <th className="text-right p-4 font-semibold text-gray-700 border-b">Desplazamiento</th>
                  </tr>
                </thead>
                <tbody>
                  {zones.map((zone, index) => (
                    <tr key={zone.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 border-b">
                        <div className="flex items-center gap-2">
                          <div className={`${zone.color} w-3 h-3 rounded-full`}></div>
                          <span className="font-medium">{zone.name}</span>
                        </div>
                      </td>
                      <td className="p-4 border-b text-gray-600">
                        {zone.communes.join(', ')}
                      </td>
                      <td className="p-4 border-b text-right font-semibold">
                        <span className={zone.displacement === 0 ? 'text-green-600' : 'text-gray-900'}>
                          {zone.displacement === 0 ? 'Gratis' : formatPrice(zone.displacement)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                ¿Cómo funciona?
              </h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span>Selecciona el servicio que necesitas (diagnóstico, carga de gas, sanitización, etc.)</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span>Ingresa tu dirección y comuna para calcular el costo de desplazamiento</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span>Elige la fecha y hora que prefieras para la atención</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <span>Nuestro técnico llega a tu domicilio con todo el equipo necesario</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mapa de Cobertura</h3>
              <p className="text-gray-600 mb-4">
                Estamos expandiendo nuestra cobertura constantemente. 
                Si no encuentras tu comuna, contáctanos directamente.
              </p>
              <a
                href="https://maps.google.com/?q=Recoleta,Santiago,Chile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                Ver ubicación en Google Maps
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Preguntas Frecuentes sobre Cobertura
            </h2>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details key={index} className="group bg-white rounded-lg border border-gray-200">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-semibold text-gray-900">{item.question}</span>
                    <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Estás dentro de nuestra zona de cobertura?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Solicita tu cotización ahora y agenda tu servicio. 
            Respondemos en menos de 2 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cotizar"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg"
            >
              Cotizar Servicio
            </Link>
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-600 transition-colors text-lg"
            >
              Escribir por WhatsApp
            </a>
          </div>
          <p className="mt-6 text-blue-300 text-sm">
            También puedes llamarnos al <a href="tel:+56912345678" className="underline">+56 9 1234 5678</a>
          </p>
        </div>
      </section>

      {/* Schema.org LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Autofixer - Aire Acondicionado Automotriz a Domicilio',
            description: 'Servicio de aire acondicionado automotriz a domicilio en toda la Región Metropolitana de Santiago, Chile.',
            url: 'https://autofixer.cl',
            telephone: '+56912345678',
            email: 'contacto@autofixer.cl',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Recoleta',
              addressLocality: 'Santiago',
              addressRegion: 'Región Metropolitana',
              postalCode: '8420000',
              addressCountry: 'CL',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: -33.4489,
              longitude: -70.6693,
            },
            areaServed: [
              { '@type': 'City', name: 'Santiago Centro' },
              { '@type': 'City', name: 'Providencia' },
              { '@type': 'City', name: 'Las Condes' },
              { '@type': 'City', name: 'Ñuñoa' },
              { '@type': 'City', name: 'La Florida' },
              { '@type': 'City', name: 'Vitacura' },
              { '@type': 'City', name: 'Recoleta' },
              { '@type': 'City', name: 'Independencia' },
            ],
            priceRange: '$$',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '19:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '09:00',
                closes: '14:00',
              },
            ],
          }),
        }}
      />
    </main>
  )
}
