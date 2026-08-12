import type { Metadata } from 'next'
import { MapPin, CheckCircle, Phone, ArrowRight, Truck, Clock, Shield } from 'lucide-react'
import Link from 'next/link'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { ScrollReveal } from '@/components/ScrollReveal'

export const revalidate = 86400

export const metadata: Metadata = {
  title: 'Aire Acondicionado Auto a Domicilio en Santiago | Autofixer',
  description: 'Servicio tecnico de A/C automotriz a domicilio en Santiago. 22 comunas, tecnicos certificados. Carga gas R134a desde $35.000. Garantia 90 dias.',
  keywords: 'aire acondicionado automotriz Santiago, carga gas A/C Santiago, servicio a domicilio Santiago, técnico A/C comunas Santiago, cobertura Gran Santiago',
  alternates: { canonical: 'https://autofixer.cl/cobertura/santiago' },
  openGraph: {
    title: 'Servicio A/C Automotriz a Domicilio en Santiago | Autofixer',
    description: 'Cobertura completa en las 22 comunas principales de Santiago. Carga de gas R134a y R1234yf a domicilio. Técnicos certificados, garantía 90 días.',
    url: 'https://autofixer.cl/cobertura/santiago',
    siteName: 'Autofixer',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: 'https://autofixer.cl/og-cobertura-santiago.jpg',
        width: 1200,
        height: 630,
        alt: 'Servicio de aire acondicionado automotriz a domicilio en Santiago',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicio A/C Automotriz a Domicilio en Santiago | Autofixer',
    description: 'Cobertura completa en las 22 comunas principales de Santiago. Carga de gas R134a y R1234yf a domicilio.',
  },
}

const comunasDestacadas = [
  { slug: 'las-condes', nombre: 'Las Condes', fee: 5000 },
  { slug: 'maipu', nombre: 'Maipú', fee: 10000 },
  { slug: 'providencia', nombre: 'Providencia', fee: 0 },
  { slug: 'la-florida', nombre: 'La Florida', fee: 10000 },
  { slug: 'vitacura', nombre: 'Vitacura', fee: 5000 },
  { slug: 'santiago', nombre: 'Santiago Centro', fee: 0 },
  { slug: 'puente-alto', nombre: 'Puente Alto', fee: 15000 },
  { slug: 'nunoa', nombre: 'Ñuñoa', fee: 5000 },
]

const comunasAdicionales = [
  { slug: 'san-bernardo', nombre: 'San Bernardo', fee: 15000 },
  { slug: 'penalolen', nombre: 'Peñalolén', fee: 10000 },
  { slug: 'la-reina', nombre: 'La Reina', fee: 5000 },
  { slug: 'macul', nombre: 'Macul', fee: 5000 },
  { slug: 'pudahuel', nombre: 'Pudahuel', fee: 15000 },
  { slug: 'quilicura', nombre: 'Quilicura', fee: 15000 },
  { slug: 'colina', nombre: 'Colina', fee: 25000 },
  { slug: 'cerrillos', nombre: 'Cerrillos', fee: 5000 },
  { slug: 'estacion-central', nombre: 'Estación Central', fee: 5000 },
  { slug: 'lo-barnechea', nombre: 'Lo Barnechea', fee: 10000 },
  { slug: 'huechuraba', nombre: 'Huechuraba', fee: 10000 },
  { slug: 'peñaflor', nombre: 'Peñaflor', fee: 25000 },
  { slug: 'talagante', nombre: 'Talagante', fee: 25000 },
  { slug: 'melipilla', nombre: 'Melipilla', fee: 30000 },
]

const zonasCobertura = [
  {
    zona: 'Zona 1 — Centro',
    comunas: 'Santiago, Providencia, Ñuñoa, Recoleta, Independencia',
    fee: 0,
  },
  {
    zona: 'Zona 2 — Oriente',
    comunas: 'Las Condes, Vitacura, La Reina, Macul',
    fee: 5000,
  },
  {
    zona: 'Zona 3 — Sur',
    comunas: 'La Florida, Peñalolén, Puente Alto, San Bernardo',
    fee: 10000,
  },
  {
    zona: 'Zona 4 — Poniente',
    comunas: 'Pudahuel, Quilicura, Maipú, Cerrillos, Estación Central',
    fee: 15000,
  },
  {
    zona: 'Zona 5 — Cordillera y Periferia',
    comunas: 'Colina, Chicureo, Peñaflor, Talagante, Melipilla, Lo Barnechea, Huechuraba',
    fee: 25000,
  },
]

export default function CoberturaSantiagoPage() {
  return (
    <main className="pt-[72px]">
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <Breadcrumb crumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'Cobertura', href: '/cobertura' },
          { label: 'Santiago' },
        ]} />
        <BreadcrumbJsonLd crumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'Cobertura', href: '/cobertura' },
          { label: 'Santiago', href: '/cobertura/santiago' },
        ]} />
      </div>

      <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* Sprint 46 fix: badge + H1 + 2 primeros <p> fuera de ScrollReveal para LCP mobile <2.5s */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Cobertura Gran Santiago
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Servicio de Aire Acondicionado Automotriz a Domicilio en Santiago
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Somos la única empresa especializada en aire acondicionado automotriz con cobertura completa en la Gran Santiago. Atendemos tu vehículo en tu casa, oficina o estacionamiento, sin necesidad de dejarlo en un taller. Técnicos certificados, equipo profesional y respuesta en menos de 2 horas.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Cubrimos las 22 comunas principales de la Región Metropolitana, desde Providencia y Las Condes hasta Maipú, Puente Alto y la zona poniente. Si tu comuna no aparece en la lista, consúltanos: llegamos a toda el área metropolitana.
          </p>

          <ScrollReveal>
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
                <Clock className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-1">Menos de 2 horas</h3>
                <p className="text-sm text-slate-600">Tiempo de respuesta desde que confirmas tu cotización.</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
                <Truck className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-1">A domicilio</h3>
                <p className="text-sm text-slate-600">Vamos donde esté tu auto. No necesitas desplazarte.</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
                <Shield className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-1">Garantía 90 días</h3>
                <p className="text-sm text-slate-600">Por escrito en cada servicio. Si algo falla, volvemos.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
              Zonas de cobertura y tarifas de desplazamiento
            </h2>
            <p className="text-slate-700 mb-6">
              El costo del servicio es el mismo en toda la Gran Santiago. Solo se cobra un fee de desplazamiento según la zona, que va desde $0 en el centro hasta $30.000 en las comunas más alejadas. Te informamos el monto total antes de confirmar.
            </p>
            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Zona</th>
                    <th className="text-left px-4 py-3 font-semibold">Comunas</th>
                    <th className="text-right px-4 py-3 font-semibold">Desplazamiento</th>
                  </tr>
                </thead>
                <tbody>
                  {zonasCobertura.map((z, i) => (
                    <tr key={z.zona} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="px-4 py-3 font-medium text-slate-900">{z.zona}</td>
                      <td className="px-4 py-3 text-slate-700">{z.comunas}</td>
                      <td className="px-4 py-3 text-right font-semibold text-slate-900">
                        {z.fee === 0 ? 'Sin costo' : `$${z.fee.toLocaleString('es-CL')}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Comunas donde más atendemos
            </h2>
            <p className="text-slate-700 mb-6">
              Estas son las 8 comunas con mayor demanda de nuestros servicios. Cada una tiene una página dedicada con información específica de la zona.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {comunasDestacadas.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cobertura/${c.slug}`}
                  className="group block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-500 hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">{c.nombre}</h3>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition" />
                  </div>
                  <p className="text-sm text-slate-600">
                    {c.fee === 0 ? 'Sin costo de desplazamiento' : `+$${c.fee.toLocaleString('es-CL')} desplazamiento`}
                  </p>
                </Link>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Otras comunas atendidas
            </h2>
            <p className="text-slate-700 mb-6">
              También llegamos a estas comunas. Si la tuya no aparece, contáctanos: atendemos toda la Región Metropolitana.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
              {comunasAdicionales.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cobertura/${c.slug}`}
                  className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-4 py-3 hover:border-blue-500 hover:shadow-sm transition"
                >
                  <span className="font-medium text-slate-900">{c.nombre}</span>
                  <span className="text-sm text-slate-500">+${c.fee.toLocaleString('es-CL')}</span>
                </Link>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 sm:p-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                ¿Necesitas servicio de A/C en Santiago?
              </h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Cotiza en línea y recibe precio cerrado por escrito en menos de 2 horas. Atendemos en tu casa, oficina o donde esté tu auto.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/cotizar"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
                >
                  Cotizar ahora
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/56999681577?text=Hola%20Autofixer%2C%20necesito%20servicio%20de%20A%2FC%20en%20Santiago"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <CheckCircle className="w-6 h-6 text-green-600 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">¿Qué incluye el servicio?</h3>
                <p className="text-sm text-slate-700">
                  Diagnóstico profesional, presupuesto cerrado, trabajo con equipo certificado y garantía 90 días por escrito.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <CheckCircle className="w-6 h-6 text-green-600 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">¿Qué medios de pago aceptan?</h3>
                <p className="text-sm text-slate-700">
                  Efectivo, transferencia bancaria, tarjetas de débito y crédito. Pago al finalizar el servicio.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Cuánto cuesta el servicio de aire acondicionado automotriz a domicilio en Santiago?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'El costo del servicio es el mismo en toda la Gran Santiago: carga de gas R134a desde $35.000, R1234yf desde $90.000, diagnóstico GRATIS si contratas. Solo se cobra un fee de desplazamiento según la zona: $0 en Santiago Centro/Providencia/Ñuñoa, $5.000 en Las Condes/Vitacura, $10.000 en La Florida/Maipú, $15.000 en Puente Alto/Pudahuel, hasta $30.000 en comunas periféricas como Melipilla. Te informamos el total antes de confirmar.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuánto tardan en llegar a mi comuna en Santiago?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Nuestro tiempo de respuesta en la Gran Santiago es de menos de 2 horas desde que confirmas la cotización. Cubrimos las 22 comunas principales de la Región Metropolitana con técnicos móviles equipados. Si tu comuna no aparece en la lista, consúltanos: llegamos a toda el área metropolitana.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué zonas de Santiago tienen cobertura sin costo de desplazamiento?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'La Zona 1 (Centro) no tiene costo de desplazamiento e incluye: Santiago, Providencia, Ñuñoa, Recoleta e Independencia. Las demás zonas tienen un fee progresivo: Zona 2 Oriente $5.000 (Las Condes, Vitacura, La Reina, Macul), Zona 3 Sur $10.000 (La Florida, Peñalolén, Puente Alto, San Bernardo), Zona 4 Poniente $15.000 (Pudahuel, Quilicura, Maipú, Cerrillos, Estación Central), Zona 5 Periferia hasta $30.000 (Colina, Peñaflor, Talagante, Melipilla).',
                },
              },
              {
                '@type': 'Question',
                name: '¿Atienden a domicilio en todas las comunas de Santiago o debo ir al taller?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No contamos con taller físico abierto al público. Nuestra especialidad es servicio 100% a domicilio en toda la Región Metropolitana. Vamos donde esté tu auto: tu casa, oficina o estacionamiento, sin necesidad de dejarlo en un local. Técnicos certificados con equipo profesional y respuesta en menos de 2 horas.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué incluye la garantía de 90 días del servicio en Santiago?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'La garantía escrita cubre mano de obra y los repuestos instalados por nosotros durante 90 días corridos en toda la Gran Santiago. Si la misma falla se repite dentro del periodo, retornamos sin costo. Los repuestos mantienen la garantía del fabricante (6 a 12 meses según el componente).',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué medios de pago aceptan para el servicio en Santiago?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Efectivo, transferencia bancaria, tarjetas de débito y crédito (incluyendo cuotas). El pago se realiza una vez finalizado el servicio y verificado el funcionamiento del A/C. Emitimos boleta o factura según corresponda. Aplica para todas las comunas de la Gran Santiago sin recargos adicionales por forma de pago.',
                },
              },
            ],
          }),
        }}
      />
    </main>
  )
}
