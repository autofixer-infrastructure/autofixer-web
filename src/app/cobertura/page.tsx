'use client'
import { MapPin, Phone, Clock, CheckCircle, ChevronRight, Navigation } from 'lucide-react'

const zones = [
  {
    id: 1,
    name: 'Zona 1 - Centro',
    color: 'bg-emerald-500',
    borderColor: 'border-emerald-500/40',
    textColor: 'text-emerald-400',
    bgLight: 'bg-emerald-500/10',
    displacement: 0,
    description: 'Sin costo de desplazamiento',
    communes: ['Recoleta', 'Independencia', 'Santiago Centro'],
    includes: 'Parque O\'Higgins, Plaza de Armas, Bellas Artes, Patronato',
  },
  {
    id: 2,
    name: 'Zona 2 - Nororiente',
    color: 'bg-blue-500',
    borderColor: 'border-blue-500/40',
    textColor: 'text-blue-400',
    bgLight: 'bg-blue-500/10',
    displacement: 5000,
    description: '$5.000 de desplazamiento',
    communes: ['Providencia', 'Ñuñoa', 'Las Condes', 'Vitacura', 'La Reina', 'Macul'],
    includes: 'Pedro de Valdivia, Tobalaba, Manquehue, Sanhattan',
  },
  {
    id: 3,
    name: 'Zona 3 - Sur',
    color: 'bg-orange-500',
    borderColor: 'border-orange-500/40',
    textColor: 'text-orange-400',
    bgLight: 'bg-orange-500/10',
    displacement: 10000,
    description: '$10.000 de desplazamiento',
    communes: ['La Florida', 'Peñalolén', 'Puente Alto', 'San Bernardo'],
    includes: 'Vicuña Mackenna, La Gran Avenida, Camino a Pirque',
  },
  {
    id: 4,
    name: 'Zona 4 - Pudahuel',
    color: 'bg-purple-500',
    borderColor: 'border-purple-500/40',
    textColor: 'text-purple-400',
    bgLight: 'bg-purple-500/10',
    displacement: 15000,
    description: '$15.000 de desplazamiento',
    communes: ['Pudahuel', 'Quilicura', 'Lampa', 'Batuco'],
    includes: 'Aeropuerto Arturo Merino Benítez, Pudahuel Sur, Chicureo Oriente',
  },
  {
    id: 5,
    name: 'Zona 5 - Periferia',
    color: 'bg-red-500',
    borderColor: 'border-red-500/40',
    textColor: 'text-red-400',
    bgLight: 'bg-red-500/10',
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
    answer: 'Sí, el costo de desplazamiento varía según la zona y se suma al precio del servicio. La Zona 1 (Santiago Centro, Recoleta, Independencia) no tiene costo adicional.',
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
    <main className="min-h-screen bg-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 md:py-24">
        <div className="absolute inset-0 opacity-25" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(245,158,11,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59,130,246,0.1) 0%, transparent 50%)'}} />
        <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-5 py-2 mb-6">
              <Navigation className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold">Cobertura en toda la Región Metropolitana</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-white mb-6">
              Servicio de Aire Acondicionado Automotriz a Domicilio en Santiago
            </h1>
            <p className="text-white/50 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Llegamos a donde estés con técnicos certificados, equipos profesionales y precios transparentes.
              Sin mover tu auto, sin esperar en talleres.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/cotizar"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-8 py-4 rounded-xl shadow-2xl shadow-amber-500/20 transition-all hover:-translate-y-1"
              >
                Cotizar Ahora
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+56935075600"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all"
              >
                <Phone className="w-5 h-5" />
                +56 9 3507 5600
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent" />
      </section>

      {/* Benefits Bar */}
      <section className="bg-slate-800/60 border-y border-white/5 py-6 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-white/50">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Zonas de Cobertura y Precios
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Encuentra tu zona y conoce el costo de desplazamiento para nuestro servicio a domicilio.
              Todos los precios incluyen IVA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {zones.map((zone) => (
              <div
                key={zone.id}
                className={`${zone.bgLight} backdrop-blur-xl border ${zone.borderColor} rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${zone.color} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg`}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${zone.textColor}`}>{zone.name}</h3>
                    <p className="text-sm text-white/40">
                      {zone.displacement === 0 ? 'Sin costo' : `+${formatPrice(zone.displacement)}`}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-white/50 mb-4">{zone.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-white/70 text-sm mb-2">Comunas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {zone.communes.map((commune) => (
                      <span
                        key={commune}
                        className={`${zone.color} text-white text-xs px-2 py-1 rounded-full opacity-80`}
                      >
                        {commune}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs text-white/30">{zone.includes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-slate-800/60">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-white mb-8 text-center">
              Resumen de Precios por Zona
            </h2>

            <div className="overflow-x-auto">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-900/60 to-slate-900/60">
                      <th className="text-left p-4 font-semibold text-amber-400 border-b border-white/5">Zona</th>
                      <th className="text-left p-4 font-semibold text-amber-400 border-b border-white/5">Comunas</th>
                      <th className="text-right p-4 font-semibold text-amber-400 border-b border-white/5">Desplazamiento</th>
                    </tr>
                  </thead>
                  <tbody>
                    {zones.map((zone, index) => (
                      <tr key={zone.id} className={`border-t border-white/5 ${index % 2 === 0 ? 'bg-white/[0.02]' : 'bg-white/[0.01]'}`}>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <div className={`${zone.color} w-3 h-3 rounded-full opacity-70`} />
                            <span className="font-medium text-white/80">{zone.name}</span>
                          </div>
                        </td>
                        <td className="p-4 text-white/40">
                          {zone.communes.join(', ')}
                        </td>
                        <td className="p-4 text-right">
                          <span className={zone.displacement === 0 ? 'text-emerald-400 font-semibold' : 'text-amber-400 font-semibold'}>
                            {zone.displacement === 0 ? 'Gratis' : formatPrice(zone.displacement)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                ¿Cómo funciona?
              </h3>
              <ol className="space-y-3 text-white/50">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span>Selecciona el servicio que necesitas (diagnóstico, carga de gas, sanitización, etc.)</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span>Ingresa tu dirección y comuna para calcular el costo de desplazamiento</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span>Elige la fecha y hora que prefieras para la atención</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <span>Nuestro técnico llega a tu domicilio con todo el equipo necesario</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
              <MapPin className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Mapa de Cobertura</h3>
              <p className="text-white/40 mb-4">
                Estamos expandiendo nuestra cobertura constantemente.
                Si no encuentras tu comuna, contáctanos directamente.
              </p>
              <a
                href="https://maps.google.com/?q=Recoleta,Santiago,Chile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
              >
                Ver ubicación en Google Maps
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-800/60">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-white mb-8 text-center">
              Preguntas Frecuentes sobre Cobertura
            </h2>

            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <details key={index} className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none text-white/80 font-semibold">
                    <span>{item.question}</span>
                    <ChevronRight className="w-5 h-5 text-amber-400 shrink-0 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-5 pb-5 text-white/50 border-t border-white/5 pt-4">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.15) 0%, transparent 60%)'}} />
        <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            ¿Estás dentro de nuestra zona de cobertura?
          </h2>
          <p className="text-white/50 text-xl mb-10 max-w-2xl mx-auto">
            Solicita tu cotización ahora y agenda tu servicio.
            Respondemos en menos de 2 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/cotizar"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-2xl shadow-amber-500/20 transition-all hover:-translate-y-1 text-lg"
            >
              Cotizar Servicio
            </a>
            <a
              href="https://wa.me/56935075600"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-8 py-4 rounded-xl shadow-2xl shadow-green-500/20 transition-all hover:-translate-y-1 text-lg"
            >
              Escribir por WhatsApp
            </a>
          </div>
          <p className="mt-6 text-white/30 text-sm">
            También puedes llamarnos al <a href="tel:+56935075600" className="text-amber-400 underline">+56 9 3507 5600</a>
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Autofixer - Aire Acondicionado Automotriz a Domicilio',
            description: 'Servicio de aire acondicionado automotriz a domicilio en toda la Región Metropolitana de Santiago, Chile.',
            url: 'https://autofixer.cl',
            telephone: '+56935075600',
            email: 'contacto@autofixer.cl',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '',
              addressLocality: 'Santiago',
              addressRegion: 'Región Metropolitana',
              postalCode: '8420000',
              addressCountry: 'CL',
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
