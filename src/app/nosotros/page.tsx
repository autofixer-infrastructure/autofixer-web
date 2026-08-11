import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Award, MapPin, Wrench, Users, Shield, Clock, Star, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre Autofixer — 5+ Años de Experiencia en A/C Automotriz',
  description: 'Conocé Autofixer: 5+ años especializados en aire acondicionado automotriz, 500+ servicios realizados en Santiago, técnicos certificados y garantía escrita.',
  alternates: { canonical: 'https://autofixer.cl/nosotros' },
  openGraph: {
    title: 'Sobre Autofixer — 5+ Años de Experiencia',
    description: '5+ años, 500+ servicios, 100% cobertura RM. Conocé al equipo detrás de Autofixer.',
    url: 'https://autofixer.cl/nosotros',
    siteName: 'Autofixer',
    locale: 'es_CL',
    type: 'website',
  
    images: [
      {
        url: 'https://autofixer.cl/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sobre Autofixer',
      },
    ],
  },
}

const stats = [
  { value: '+5', label: 'Años de experiencia', icon: Award },
  { value: '500+', label: 'Servicios exitosos', icon: Wrench },
  { value: '100%', label: 'Cobertura RM', icon: MapPin },
  { value: '90 días', label: 'Garantía escrita', icon: Shield },
]

const values = [
  { icon: Star, title: 'Calidad certificada', desc: 'Técnicos certificados en climatización automotriz. Uso de equipos de última generación y repuestos originales.' },
  { icon: Clock, title: 'Puntualidad', desc: 'Llegamos a la hora acordada. Te avisamos 30 minutos antes con la ubicación del técnico en tiempo real.' },
  { icon: Shield, title: 'Garantía real', desc: '90 días de garantía escrita en todos nuestros servicios. Si algo no anda bien, volvemos sin costo.' },
  { icon: Users, title: 'Trato cercano', desc: 'Te explicamos el problema en lenguaje simple. Presupuesto cerrado antes de intervenir, sin sorpresas.' },
]

export default function NosotrosPage() {
  return (
    <main className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
        <section className='relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-amber/5' />
          <div className='max-w-5xl mx-auto text-center relative'>
            <span className='inline-block px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-6'>
              Sobre Autofixer
            </span>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6'>
              5 años haciendo <span className='text-brand-blue'>única y exclusivamente</span> aire acondicionado automotriz
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Nacimos en Santiago con una idea simple: el A/C del auto no puede esperar semanas
              en un taller. Por eso vamos a tu domicilio, diagnosticamos en el momento y reparamos
              en una sola visita siempre que sea posible.
            </p>
          </div>
        </section>

        <ScrollReveal>
          <section className='py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-6xl mx-auto'>
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
                {stats.map((s) => (
                  <div key={s.label} className='bg-white rounded-2xl shadow-card p-6 text-center'>
                    <s.icon className='w-10 h-10 mx-auto text-brand-amber mb-3' />
                    <div className='text-3xl sm:text-4xl font-extrabold text-gray-900'>{s.value}</div>
                    <div className='text-sm text-gray-600 mt-1'>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className='py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl font-bold text-gray-900 text-center mb-12'>
                Nuestros valores
              </h2>
              <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {values.map((v) => (
                  <div key={v.title} className='bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-card transition-shadow'>
                    <v.icon className='w-8 h-8 text-brand-blue mb-3' />
                    <h3 className='font-bold text-gray-900 mb-2'>{v.title}</h3>
                    <p className='text-sm text-gray-600'>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className='py-16 px-4 sm:px-6 lg:px-8 bg-brand-blue text-white'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl sm:text-4xl font-bold mb-4'>
                ¿Listo para reparar tu aire acondicionado?
              </h2>
              <p className='text-xl text-white/90 mb-8'>
                Cotiza gratis en menos de 1 minuto. Servicio el mismo día disponible.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  href='/cotizar'
                  className='px-8 py-4 bg-white text-brand-blue rounded-xl font-bold hover:bg-gray-100 transition-colors'
                >
                  Cotizar ahora
                </Link>
                <a
                  href='https://wa.me/56935075600?text=Hola%20Autofixer,%20quiero%20cotizar%20mi%20A/C'
                  className='px-8 py-4 bg-brand-amber text-white rounded-xl font-bold hover:bg-brand-amber/90 transition-colors'
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
  )
}
