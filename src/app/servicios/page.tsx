import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Truck, Shield, Phone } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Servicios A/C Automotriz Santiago',
  description: 'Diagnóstico, carga de gas, sanitización y reparación de aire acondicionado automotriz a domicilio en Santiago. Especialistas en R134a, R1234yf, compresor y más. Garantía 90 días.',
  keywords: ['servicio aire acondicionado automotriz Santiago', 'reparación A/C auto domicilio', 'mantenimiento aire acondicionado auto'],
  alternates: { canonical: 'https://autofixer.cl/servicios' },
}

const services = [
  { id: 'carga-gas', title: 'Carga de Gas Refrigerante', subtitle: 'R134a y R1234yf', desc: 'Recarga con gas puro certificado. Diagnóstico de presión y verificación completa del sistema.', price: 'R134a desde $35.000', href: '/servicios/carga-gas', popular: true },
  { id: 'diagnostico', title: 'Diagnóstico Profesional', subtitle: 'Con equipos digitales', desc: 'Escáner electrónico, manómetros digitales y detector de fugas UV. Exactamente identificamos el problema.', price: 'Desde $15.000', href: '/servicios/diagnostico', popular: true },
  { id: 'fugas', title: 'Detección y Reparación de Fugas', subtitle: 'Electrónica + profesional', desc: 'Localización de alta sensibilidad. Sellado de conexiones o reemplazo de componentes según sea necesario.', price: 'Desde $45.000', href: '/servicios/deteccion-reparacion-fugas', popular: false },
  { id: 'compresor', title: 'Reparación de Compresor', subtitle: 'Cambio de embrague o compresor', desc: 'Diagnóstico completo, cambio de embrague electromagnético o reemplazo total del compresor con repuesto.', price: 'Desde $180.000', href: '/servicios/reparacion-compresor', popular: false },
  { id: 'sanitizacion', title: 'Sanitización del Sistema', subtitle: 'Eliminación de hongos y olores', desc: 'Limpieza antibacterial profunda del evaporador y conductos. Elimina malos olores y mejora la calidad del aire.', price: 'Desde $35.000', href: '/servicios/sanitizacion', popular: false },
  { id: 'condensador', title: 'Cambio de Condensador', subtitle: 'Repuesto + instalación', desc: 'Reparación de aletas dañadas o reemplazo completo del condensador. Incluye carga de gas posterior.', price: 'Desde $120.000', href: '/servicios/cambio-condensador', popular: false },
  { id: 'evaporador', title: 'Cambio de Evaporador', subtitle: 'Repuesto original + instalación', desc: 'Reemplazo profesional del evaporador. Incluye diagnóstico, instalación y verificación del sistema completo.', price: 'Desde $120.000', href: '/servicios/cambio-evaporador', popular: false },
  { id: 'mantencion', title: 'Mantención Preventiva', subtitle: 'Revisión completa anual', desc: 'Inspección completa del sistema de climatización. Limpieza, verificación de mangueras, conexiones y gas.', price: 'Desde $25.000', href: '/servicios/mantenimiento-preventivo', popular: false },
  { id: 'flushing', title: 'Flushing del Sistema', subtitle: 'Limpieza interna profunda', desc: 'Eliminación de residuos, ácidos y humedad del sistema. Recomendado antes de una recarga después de una reparación.', price: 'Desde $25.000', href: '/servicios/flushing', popular: false },
  { id: 'hibrido', title: 'Aire Híbrido y Eléctrico', subtitle: 'Especialistas en EVs', desc: 'Servicio especializado para vehículos híbridos y eléctricos. Carga de gas R1234yf y diagnóstico de sistemas de climatización de alta tensión.', price: 'Desde $90.000', href: '/servicios/aire-electrico-hibrido', popular: false },
]

const faqs = [
  { q: '¿Qué servicios ofrecen?', a: 'Somos especialistas exclusivos en aire acondicionado automotriz: carga de gas (R134a y R1234yf), diagnóstico profesional, detección de fugas, reparación y cambio de compresor, sanitización, cambio de condensador y evaporador, mantención preventiva y flushing. Todo a domicilio en Santiago.' },
  { q: '¿Cubren todas las comunas de Santiago?', a: 'Sí. Trabajamos en todas las comunas de la Región Metropolitana, desde Las Condes y Vitacura en el nororiente hasta San Bernardo y Puente Alto en el sur. El desplazamiento tiene un costo según la zona.' },
  { q: '¿Cómo funciona el servicio a domicilio?', a: 'Contactas por WhatsApp o formulario, te entregamos un presupuesto cerrado, confirmamos la hora y el técnico llega a tu ubicación con todo el equipamiento. El trabajo se hace ahí mismo sin mover el vehículo.' },
  { q: '¿Qué garantía tienen?', a: 'Todos los servicios incluyen garantía escrita de 90 días por mano de obra. Si hay algún problema relacionado con nuestro trabajo, lo resolvemos sin costo adicional.' },
]

export default function ServiciosPage() {
  return (
    <div className='min-h-screen bg-gray-50'>

      {/* Hero */}
      <section className='bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            Servicios de Aire Acondicionado Automotriz a Domicilio en Santiago
          </h1>
          <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
            Diagnóstico, carga de gas, sanitización y reparación.
            Todos los servicios incluyen garantía de 90 días y atención a domicilio.
          </p>
          <div className='flex flex-wrap justify-center gap-4 text-sm'>
            <div className='flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg'><Truck className='w-4 h-4 text-amber-400' /><span>A domicilio en toda RM</span></div>
            <div className='flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg'><Shield className='w-4 h-4 text-amber-400' /><span>Garantía 90 días</span></div>
            <div className='flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg'><CheckCircle className='w-4 h-4 text-amber-400' /><span>Técnicos certificados</span></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service) => (
            <ScrollReveal key={service.id}>
              <Link
                id={service.id}
                href={service.href}
                className='group bg-white rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all border border-gray-100 h-full flex flex-col'
              >
                {service.popular && <div className='bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full w-fit mb-3'>Más solicitado</div>}
                <h3 className='text-xl font-bold text-gray-900 mb-1'>{service.title}</h3>
                <p className='text-sm text-secondary font-medium mb-3'>{service.subtitle}</p>
                <p className='text-gray-600 text-sm mb-4 flex-1'>{service.desc}</p>
                <div className='flex items-center justify-between'>
                  <span className='text-sm font-semibold text-blue-900'>{service.price}</span>
                  <ArrowRight className='w-5 h-5 text-gray-500 group-hover:text-secondary group-hover:translate-x-1 transition-all' />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Problemas CTA */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8'>
            <div className='flex-1 text-white'>
              <h2 className='text-3xl font-bold mb-4'>¿No sabes qué servicio necesitas?</h2>
              <p className='text-blue-100 mb-6'>Revisa los problemas más comunes del aire acondicionado automotriz y encuentra la solución que corresponde.</p>
              <Link href='/problemas' className='inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-amber-700 hover:text-white transition-colors'>
                Ver problemas comunes <ArrowRight className='w-5 h-5' />
              </Link>
            </div>
            <div className='flex gap-4 text-6xl'><span>❄️</span><span>🌡️</span><span>🔧</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-16'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
          <ScrollReveal><h2 className='text-3xl font-bold text-gray-900 text-center mb-8'>Preguntas frecuentes</h2></ScrollReveal>
          <div className='space-y-3'>
            {faqs.map((faq, idx) => (
              <details key={idx} className='bg-white rounded-xl group'>
                <summary className='flex items-center justify-between p-6 cursor-pointer list-none'>
                  <span className='font-bold text-gray-900'>{faq.q}</span>
                  <svg className='w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
                </summary>
                <div className='px-6 pb-6 pt-0 text-gray-600 border-t border-gray-100'>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 md:p-12 text-center'>
            <h2 className='text-3xl font-bold text-white mb-4'>¿Necesitas servicio de aire acondicionado?</h2>
            <p className='text-blue-100 mb-8 max-w-2xl mx-auto'>Contáctanos por WhatsApp y te ayudamos a identificar qué servicio necesitas. Diagnóstico gratis si contratas.</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a href='https://wa.me/56935075600?text=Hola%2C%20necesito%20información%20sobre%20servicios%20de%20aire%20acondicionado' className='inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors'>
                <Phone className='w-5 h-5' />Hablar por WhatsApp
              </a>
              <Link href='/precios-referenciales' className='inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-semibold transition-colors'>
                Ver precios referenciales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Servicios de Aire Acondicionado Automotriz a Domicilio en Santiago",
            "itemListElement": services.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "url": `https://autofixer.cl${service.href}/`,
              "name": service.title,
            })),
          }),
        }}
      />
    </div>
  )
}
