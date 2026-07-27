import { MapPin, CheckCircle, Phone, ArrowRight, Wrench, Truck } from 'lucide-react'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ScrollReveal'
import { generateStaticParams, generateMetadata, getComunaInfo } from '../comuna-data'

export { generateStaticParams, generateMetadata }
export const dynamicParams = true

export default async function CoberturaComunaPage({ params }: { params: Promise<{ comuna: string }> }) {
  const { comuna } = await params
  const info = getComunaInfo(comuna)

  return (
    <main className="pt-[72px]">
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <Breadcrumb crumbs={[
          { label: 'Cobertura', href: '/cobertura' },
          { label: info.nombre },
        ]} />
      </div>
      {/* Hero local */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center">
              <MapPin size={32} className="text-orange-400" />
            </div>
          </div>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            A/C Automotriz a Domicilio en {info.nombre}
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-6">{info.descripcion}</p>
          {info.fee > 0 && (
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm text-white">
              <Truck className="w-4 h-4 text-amber-400" />
              <span>Desplazamiento: ${info.fee.toLocaleString('es-CL')}</span>
            </div>
          )}
          {info.fee === 0 && (
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm text-white">
              <Truck className="w-4 h-4 text-green-400" />
              <span>Sin costo de desplazamiento</span>
            </div>
          )}
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-2xl text-gray-900 text-center mb-8">
              Servicios Disponibles en {info.nombre}
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {info.servicios.map((s) => (
              <ScrollReveal key={s}>
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-5">
                  <CheckCircle size={20} className="text-emerald-500 shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{s}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enlaces a servicios */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-2xl text-gray-900 text-center mb-8">
              Servicios más solicitados en {info.nombre}
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {info.enlacesServicios.map((link) => (
              <ScrollReveal key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between bg-white rounded-xl p-5 shadow-card hover:shadow-elevated transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-blue-900" />
                    </div>
                    <span className="font-semibold text-gray-900">{link.label}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      {info.testimonios.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-2xl text-gray-900 text-center mb-8">
                Lo que dicen nuestros clientes en {info.nombre}
              </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-6">
              {info.testimonios.map((t, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <p className="text-gray-700 italic mb-4">"{t.texto}"</p>
                    <p className="font-semibold text-gray-900 text-sm">— {t.nombre}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">¿Necesitas servicio de A/C en {info.nombre}?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Contacta por WhatsApp y te conectamos con el técnico disponible en tu zona. Diagnóstico gratis si contratas el servicio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/56935075600?text=Hola%2C%20necesito%20servicio%20de%20aire%20acondicionado%20en%20${encodeURIComponent(info.nombre)}`}
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                <Phone className="w-5 h-5" />Solicitar por WhatsApp
              </a>
              <Link
                href="/precios-referenciales"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Ver precios referenciales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
