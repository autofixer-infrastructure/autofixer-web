import type { Metadata } from 'next'
import { Phone, CheckCircle, MapPin, Clock, Shield, Truck, Wrench, ArrowRight, AlertTriangle, Thermometer, RefreshCw, Award, Leaf, Zap } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'
import Link from 'next/link'
import ServiceViewTracker from '@/components/tracking/ServiceViewTracker'

export const metadata: Metadata = {
  title: 'Recarga Gas R1234yf Aire Acondicionado Auto Santiago | $90.000 | Autofixer',
  description: 'Recarga de gas R1234yf para aire acondicionado automotriz a domicilio en Santiago. Desde $90.000. Servicio para vehículos 2017+. Técnicos certificados. Garantía 90 días. Agenda por WhatsApp.',
  keywords: ['recarga gas r1234yf santiago', 'carga r1234yf aire acondicionado auto', 'r1234yf aire acondicionado automotriz', 'gas r1234yf precio chile', 'recarga refrigerante r1234yf vehiculo'],
  alternates: { canonical: 'https://autofixer.cl/servicios/recarga-r1234yf' },
  openGraph: {
    url: 'https://autofixer.cl/servicios/recarga-r1234yf',
    title: 'Recarga Gas R1234yf Aire Acondicionado Auto | Desde $90.000 | Autofixer',
    description: 'Servicio a domicilio en Santiago. R1234yf, el gas de nueva generación para vehículos 2017+. Técnicos certificados.',
    images: [
      {
        url: 'https://autofixer.cl/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Recarga Gas R1234yf Aire Acondicionado Automotriz a Domicilio en Santiago',
      },
    ],
  },
}

const faqs = [
  { question: '¿Qué es el gas R1234yf y por qué es diferente?', answer: 'El R1234yf es el refrigerante de nueva generación que reemplaza al R134a en vehículos fabricados desde 2017. Tiene un índice GWP (potencial de calentamiento global) 99.7% menor que el R134a, lo que lo hace obligatorio por regulación europea y presente en la mayoría de autos nuevos en Chile. Requiere equipos, mangueras y aceite PAG especiales — no es compatible con sistemas R134a.' },
  { question: '¿Cuánto cuesta la recarga de R1234yf en Santiago?', answer: 'La recarga de gas R1234yf parte desde $90.000 en Autofixer, incluyendo vacío del sistema, prueba de presiones, verificación de fugas y carga certificada. Es el precio más bajo del mercado formal en Santiago. AACON cobra desde $120.000 por el mismo servicio. Entregamos presupuesto cerrado antes de intervenir.' },
  { question: '¿Mi auto usa R134a o R1234yf?', answer: 'Si tu vehículo es del 2017 en adelante, lo más probable es que use R1234yf. Para estar 100% seguro, revisa la etiqueta bajo el capó (en el compartimento del motor) o el manual del propietario. También lo confirmamos en el diagnóstico inicial sin costo.' },
  { question: '¿Puedo mezclar R1234yf con R134a?', answer: 'NO. Mezclar R1234yf con R134a contamina ambos gases, daña el compresor y deja el sistema inservible. Es una de las fallas más costosas que vemos. Si el sistema fue recargado por error con el gas equivocado, requiere flushing completo + nuevo filtro secador antes de recargar correctamente.' },
  { question: '¿Cuánto dura una carga de R1234yf?', answer: 'Una carga correcta de R1234yf dura entre 2 y 5 años en condiciones normales, siempre que el sistema no tenga fugas. Si el gas se acaba antes de 1 año, hay una fuga activa que debe repararse antes de recargar. Por eso nuestro servicio incluye prueba de fugas con detector electrónico y tinte UV.' },
  { question: '¿El servicio incluye el desplazamiento a domicilio?', answer: 'El precio de la carga de R1234yf ($90.000) NO incluye el desplazamiento, que varía según tu comuna ($0 a $25.000). Te entregamos el costo total cerrado antes de confirmar la visita. Atendemos toda la Región Metropolitana.' },
  { question: '¿Qué garantía tiene la recarga de R1234yf?', answer: 'Todas nuestras recargas tienen 90 días de garantía sobre el servicio. Si dentro de ese período el gas se escapa y no hay una reparación intermedia, recargamos sin costo. Además, trabajamos con equipos certificados y gases de primera línea.' },
  { question: '¿Cuánto tiempo toma la recarga?', answer: 'El servicio completo toma entre 60 y 90 minutos. Incluye: recuperación del gas residual, vacío del sistema (30 min), prueba de fugas, carga certificada y verificación final de temperatura de salida.' },
]

const signs = [
  { icon: Thermometer, title: 'Aire no enfría', desc: 'Sale tibio o caliente después de varios minutos de funcionamiento' },
  { icon: Clock, title: 'Enfriamiento lento', desc: 'Tarda mucho en bajar la temperatura interior' },
  { icon: RefreshCw, title: 'Compresor oscila', desc: 'El embrague magnético se enciende y apaga constantemente' },
  { icon: AlertTriangle, title: 'Olor extraño', desc: 'Olor dulzón o a humedad cuando enciendes el A/C' },
]

const steps = [
  { num: '01', title: 'Diagnóstico del sistema', desc: 'Verificamos tipo de refrigerante, presiones de alta/baja, temperatura de salida y buscamos fugas con detector electrónico + tinte UV.' },
  { num: '02', title: 'Recuperación del gas residual', desc: 'Recuperamos el R1234yf que queda en el sistema con máquina certificada (no lo liberamos a la atmósfera por regulación ambiental).' },
  { num: '03', title: 'Vacío del sistema', desc: 'Aplicamos vacío profundo por 30 minutos para eliminar humedad y aire. Sin este paso, la carga falla en semanas.' },
  { num: '04', title: 'Prueba de fugas', desc: 'Antes de cargar, confirmamos que el sistema mantiene vacío (no baja presión). Si hay fuga, la ubicamos y presupuestamos reparación.' },
  { num: '05', title: 'Carga certificada de R1234yf', desc: 'Cargamos la cantidad exacta según especificación del fabricante (450g-650g típico). Usamos equipos específicos para R1234yf — no se puede recargar con mangueras de R134a.' },
  { num: '06', title: 'Verificación final', desc: 'Medimos temperatura de salida (debe ser 3-8°C en ducto central con 30°C exterior), presiones de trabajo y ciclo del compresor. Entrega con reporte.' },
]

const comparison = [
  { feature: 'Precio desde', r134a: '$35.000', r1234yf: '$90.000' },
  { feature: 'Capacidad típica', r134a: '500-700g', r1234yf: '450-650g' },
  { feature: 'Vehículos', r134a: 'Antes de 2017', r1234yf: '2017 en adelante' },
  { feature: 'Impacto ambiental (GWP)', r134a: '1.430', r1234yf: '4' },
  { feature: 'Equipos necesarios', r134a: 'Estándar', r1234yf: 'Certificados HFO' },
  { feature: 'Aceite lubricante', r134a: 'PAG o POE', r1234yf: 'PAG YF específico' },
  { feature: 'Compatibilidad', r134a: 'Solo R134a', r1234yf: 'Solo R1234yf' },
]

export default function RecargaR1234yfPage() {
  return (
    <>
      <ServiceViewTracker slug="recarga-r1234yf" serviceName="Recarga Gas R1234yf" servicePrice={90000} />
            {/* Schema: Breadcrumb */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://autofixer.cl/' },
            { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://autofixer.cl/servicios' },
            { '@type': 'ListItem', position: 3, name: 'Carga de Gas', item: 'https://autofixer.cl/servicios/carga-gas' },
            { '@type': 'ListItem', position: 4, name: 'Recarga R1234yf' }
          ]
        }) }}
      />
      {/* Schema: Service */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Recarga de Gas R1234yf para Aire Acondicionado Automotriz",
          "serviceType": "Recarga de refrigerante R1234yf",
          "description": "Recarga certificada de gas R1234yf (HFO) para aire acondicionado automotriz a domicilio en Santiago. Desde $90.000. Servicio para vehículos 2017+. Incluye vacío, prueba de fugas y verificación final.",
          "provider": {"@type": "Organization", "name": "Autofixer", "@id": "https://autofixer.cl/#organization", "url": "https://autofixer.cl", "logo": "https://autofixer.cl/logo-autofixer.png", "telephone": "+569-XXXX-XXXX"},
          "areaServed": {"@type": "GeoCircle", "geoMidpoint": {"@type": "GeoCoordinates", "latitude": -33.4372, "longitude": -70.6506}, "geoRadius": "25000"},
          "url": "https://autofixer.cl/servicios/recarga-r1234yf",
          "image": "https://autofixer.cl/og-image.png",
          "offers": {"@type": "Offer", "priceCurrency": "CLP", "price": "90000", "priceSpecification": {"@type": "PriceSpecification", "priceCurrency": "CLP", "minPrice": "90000", "maxPrice": "130000", "eligibleQuantity": {"@type": "QuantitativeValue", "unitText": "servicio"}}, "availability": "https://schema.org/InStock", "validFrom": "2026-01-01"},
          "category": "Automotive",
          "inLanguage": "es-CL"
        }) }}
      />
      {/* Schema: HowTo - 6 pasos del proceso de recarga */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Cómo recargar gas R1234yf en el aire acondicionado del auto",
          "description": "Proceso profesional paso a paso para recargar refrigerante R1234yf en un vehículo, con equipos certificados y prueba de fugas.",
          "totalTime": "PT75M",
          "estimatedCost": {"@type": "MonetaryAmount", "currency": "CLP", "value": "90000"},
          "tool": [
            {"@type": "HowToTool", "name": "Máquina de recuperación y carga de R1234yf certificada"},
            {"@type": "HowToTool", "name": "Detector electrónico de fugas"},
            {"@type": "HowToTool", "name": "Tinte UV para sistema A/C"},
            {"@type": "HowToTool", "name": "Manómetros de alta y baja presión"},
            {"@type": "HowToTool", "name": "Bomba de vacío"}
          ],
          "step": [
            {"@type": "HowToStep", "position": 1, "name": "Diagnóstico del sistema", "text": "Verificar el tipo de refrigerante, medir presiones de alta y baja, leer temperatura de salida en ducto central, y buscar fugas con detector electrónico y tinte UV. Confirmar que el sistema usa R1234yf antes de intervenir."},
            {"@type": "HowToStep", "position": 2, "name": "Recuperación del gas residual", "text": "Conectar la máquina de recuperación a las válvulas de servicio y extraer el R1234yf que queda en el sistema. Almacenar en cilindro certificado. Nunca liberar a la atmósfera por regulación ambiental SAG."},
            {"@type": "HowToStep", "position": 3, "name": "Vacío profundo del sistema", "text": "Conectar la bomba de vacío y evacuar por 30 minutos. Esto elimina humedad (que daña el compresor) y aire (que reduce eficiencia). El sistema debe mantener vacío estable por 10 minutos adicionales."},
            {"@type": "HowToStep", "position": 4, "name": "Prueba de fugas", "text": "Antes de cargar, confirmar que el vacío se mantiene. Si baja presión, hay fuga. Buscar con detector en mangueras, conexiones, condensador, evaporador y válvulas de servicio. Si hay fuga, reparar y repetir el vacío."},
            {"@type": "HowToStep", "position": 5, "name": "Carga de R1234yf", "text": "Cargar la cantidad exacta según especificación del fabricante (típico: 450-650g). Usar mangueras certificadas para HFO. Iniciar carga por línea de baja con el motor a 1500 RPM y A/C en máximo. Monitorear presión de baja."},
            {"@type": "HowToStep", "position": 6, "name": "Verificación final y entrega", "text": "Medir temperatura de salida (debe ser 3-8°C en ducto central con 30°C exterior). Verificar presiones de trabajo: baja 25-45 psi, alta 150-250 psi según RPM y temperatura. Confirmar ciclo del compresor. Entregar reporte con valores y recomendaciones."}
          ]
        }) }}
      />
      {/* Schema: FAQ */}
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
      <div className='min-h-screen bg-gray-50'>

      {/* Hero */}
      <section className='bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl'>
            <div className='inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-1 mb-6'>
              <Leaf className='w-4 h-4 text-amber-300' />
              <span className='text-amber-100 text-sm font-medium'>Refrigerante de nueva generación</span>
            </div>
            <h1 className='font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-6'>
              Recarga de Gas R1234yf para Aire Acondicionado Automotriz a Domicilio
            </h1>
            <p className='text-xl text-blue-100 mb-8'>
              ¿Tu auto es del 2017 en adelante? El gas correcto es R1234yf. Recarga certificada a domicilio
              en Santiago desde <strong className='text-amber-300'>$90.000</strong>. Equipos específicos para HFO, técnicos certificados, garantía 90 días.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <a
                href='https://wa.me/569XXXXXXX?text=Hola%20Autofixer%2C%20necesito%20recarga%20de%20R1234yf%20para%20mi%20auto'
                className='inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors'
              >
                <Phone className='w-5 h-5' />
                Cotizar por WhatsApp
              </a>
              <Link
                href='/cotizar'
                className='inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/20 transition-colors'
              >
                Cotizar Online
                <ArrowRight className='w-5 h-5' />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className='py-8 bg-white border-b'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            <div className='flex items-center gap-3'>
              <Shield className='w-8 h-8 text-blue-600' />
              <div>
                <p className='font-semibold text-gray-900'>Garantía 90 días</p>
                <p className='text-sm text-gray-600'>Sobre el servicio</p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <Truck className='w-8 h-8 text-blue-600' />
              <div>
                <p className='font-semibold text-gray-900'>A domicilio</p>
                <p className='text-sm text-gray-600'>Toda la RM</p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <Award className='w-8 h-8 text-blue-600' />
              <div>
                <p className='font-semibold text-gray-900'>Equipos HFO</p>
                <p className='text-sm text-gray-600'>Certificados</p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <Clock className='w-8 h-8 text-blue-600' />
              <div>
                <p className='font-semibold text-gray-900'>Mismo día</p>
                <p className='text-sm text-gray-600'>Slots disponibles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué es R1234yf? */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <ScrollReveal>
            <h2 className='font-heading font-bold text-3xl text-gray-900 mb-6'>
              ¿Qué es el gas R1234yf?
            </h2>
            <div className='prose prose-lg text-gray-700 space-y-4'>
              <p>
                El <strong>R1234yf</strong> (también llamado HFO-1234yf) es el refrigerante de cuarta generación que reemplazó al R134a
                en vehículos fabricados desde 2017. Su principal ventaja: un <strong>potencial de calentamiento global (GWP) 99.7% menor</strong>
                que el R134a (GWP=4 vs GWP=1.430), lo que lo hace obligatorio por regulación europea y cada vez más presente en Chile.
              </p>
              <p>
                Por su composición química, el R1234yf requiere <strong>equipos, mangueras, aceite PAG YF y procedimientos diferentes</strong>
                al R134a. No se puede recargar un sistema R1234yf con herramientas de R134a, ni mezclar ambos gases — la mezcla
                destruye el compresor y obliga a hacer flushing completo.
              </p>
              <p>
                En Autofixer tenemos <strong>máquinas de recuperación y carga certificadas específicamente para HFO</strong>,
                y todo nuestro equipo técnico está entrenado en el manejo seguro de este refrigerante.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparativa R134a vs R1234yf */}
      <section className='py-16 bg-white'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
          <ScrollReveal>
            <h2 className='font-heading font-bold text-3xl text-gray-900 mb-4 text-center'>
              R134a vs R1234yf: ¿Cuál usa tu auto?
            </h2>
            <p className='text-center text-gray-600 mb-8'>
              Tabla comparativa para identificar el gas correcto de tu vehículo.
            </p>
            <div className='overflow-x-auto'>
              <table className='w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden'>
                <thead className='bg-gradient-to-r from-blue-900 to-indigo-900 text-white'>
                  <tr>
                    <th className='px-4 py-3 text-left font-semibold'>Característica</th>
                    <th className='px-4 py-3 text-center font-semibold'>R134a</th>
                    <th className='px-4 py-3 text-center font-semibold bg-amber-500/20'>R1234yf</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className='px-4 py-3 font-medium text-gray-900'>{row.feature}</td>
                      <td className='px-4 py-3 text-center text-gray-700'>{row.r134a}</td>
                      <td className='px-4 py-3 text-center text-gray-700 font-semibold'>{row.r1234yf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Signos de que necesitas recarga */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <ScrollReveal>
            <h2 className='font-heading font-bold text-3xl text-gray-900 mb-4 text-center'>
              ¿Tu auto necesita recarga de R1234yf?
            </h2>
            <p className='text-center text-gray-600 mb-12'>
              Estas son las señales más comunes de falta de refrigerante o sistema con problemas.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {signs.map((s, i) => (
                <div key={i} className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow'>
                  <s.icon className='w-10 h-10 text-blue-600 mb-4' />
                  <h3 className='font-semibold text-lg text-gray-900 mb-2'>{s.title}</h3>
                  <p className='text-gray-600 text-sm'>{s.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Proceso / HowTo */}
      <section className='py-16 bg-gradient-to-br from-gray-50 to-blue-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <ScrollReveal>
            <h2 className='font-heading font-bold text-3xl text-gray-900 mb-4 text-center'>
              Cómo recargamos el gas R1234yf de tu auto
            </h2>
            <p className='text-center text-gray-600 mb-12'>
              Proceso profesional en 6 pasos, con equipos certificados y verificación final.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {steps.map((s) => (
                <div key={s.num} className='bg-white p-6 rounded-xl shadow-md relative'>
                  <div className='absolute -top-4 -left-4 bg-gradient-to-br from-amber-400 to-amber-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg'>
                    {s.num}
                  </div>
                  <h3 className='font-semibold text-lg text-gray-900 mb-2 mt-2'>{s.title}</h3>
                  <p className='text-gray-600 text-sm'>{s.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <ScrollReveal>
            <h2 className='font-heading font-bold text-3xl text-gray-900 mb-12 text-center'>
              Preguntas Frecuentes sobre R1234yf
            </h2>
            <div className='space-y-4'>
              {faqs.map((f, i) => (
                <details key={i} className='bg-gray-50 rounded-lg p-5 group'>
                  <summary className='font-semibold text-gray-900 cursor-pointer flex items-center justify-between'>
                    {f.question}
                    <ArrowRight className='w-5 h-5 text-blue-600 group-open:rotate-90 transition-transform' />
                  </summary>
                  <p className='text-gray-700 mt-3 leading-relaxed'>{f.answer}</p>
                </details>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Final */}
      <section className='py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <Zap className='w-12 h-12 text-amber-400 mx-auto mb-4' />
          <h2 className='font-heading font-bold text-3xl mb-4'>
            Agenda tu recarga de R1234yf hoy
          </h2>
          <p className='text-xl text-blue-100 mb-8'>
            Slots disponibles para el mismo día. Servicio en toda la Región Metropolitana.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='https://wa.me/569XXXXXXX?text=Hola%20Autofixer%2C%20necesito%20recarga%20de%20R1234yf'
              className='inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors'
            >
              <Phone className='w-5 h-5' />
              WhatsApp
            </a>
            <Link
              href='/cotizar'
              className='inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors'
            >
              Cotizar Online
              <ArrowRight className='w-5 h-5' />
            </Link>
          </div>
        </div>
      </section>

      </div>
    </>
  )
}
