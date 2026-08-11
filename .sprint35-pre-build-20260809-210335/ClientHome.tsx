
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const HeroForm = dynamic(() => import('@/components/forms/HeroForm').then(m => ({ default: m.HeroForm })), {
  loading: () => <div className="bg-white rounded-2xl shadow-elevated p-6 min-h-[480px] animate-pulse" aria-label="Cargando formulario" />,
})
import { ServiceSchemaMarkup } from '@/components/ServiceSchema'
import { FAQSchemaMarkup } from '@/components/FAQSchema'

/* ─── Scroll Reveal (client component) ─── */
import { Reveal } from '@/components/Reveal'
import { FAQItem } from '@/components/home/FAQItem'
import { GoogleReviewsSection } from '@/components/google/GoogleReviewsSection'

/* ─── Icons ─── */
function Check({ size = 16, className = '' }: { size?: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"/></svg>
}
function Star({ size = 16, className = '' }: { size?: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
}
function HomeIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
}
function Calendar({ size = 16, className = '' }: { size?: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
}
function ArrowRight({ size = 14, className = '' }: { size?: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}
function Phone({ size = 16, className = '' }: { size?: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z"/></svg>
}
function Wrench({ size = 16, className = '' }: { size?: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
}
function Search({ size = 16, className = '' }: { size?: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
}
function UserCheck({ size = 16, className = '' }: { size?: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
}
function Monitor({ size = 16, className = '' }: { size?: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
}
function Shield({ size = 16, className = '' }: { size?: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
}
function FileText({ size = 16, className = '' }: { size?: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
}
function MapPin({ size = 16, className = '' }: { size?: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
}

/* ─── WhatsApp SVG ─── */
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════
   HERO SECTION (with HeroForm)
═══════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-silver via-white to-brand-silver" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 400 400" className="text-brand-blue">
          <defs>
            <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="20" height="20">
              <path d="M0 20L20 0" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>

      <div className="container-autofixer relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-brand-success-light text-brand-success font-medium text-xs px-3 py-1.5 rounded-full mb-5">
              <Check size={14} />
              <span>Especialistas Exclusivos en A/C Automotriz a Domicilio</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-black leading-tight">
              Aire Acondicionado Automotriz a Domicilio en{' '}
              <span className="text-brand-blue">Santiago</span>
            </h1>

            <p className="mt-3 text-lg text-brand-gray italic font-body">
              &quot;Todo para tu auto con la calidad que mereces, tu aliado en innovación y confianza en cada servicio.&quot;
            </p>

            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-xl">
              ¿Tu auto no enfría? ¡Olvídate de moverlo! En Autofixer llegamos hasta tu domicilio, oficina,
              estacionamiento o condominio en todo Santiago. Diagnóstico preciso, carga de gas, detección de fugas,
              reparación de compresor, condensador, evaporador y mantenciones preventivas. Especialistas exclusivos
              en climatización automotriz con garantía real de 90 días.
            </p>

                        <div className="mt-6 p-5 bg-blue-50 border border-blue-100 rounded-xl">
              <h2 className="font-heading font-bold text-lg text-brand-black mb-3">
                ¿Buscas recarga de gas R134a o R1234yf en Las Condes, Providencia, Ñuñoa o Santiago Centro?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                En <strong>Autofixer</strong> nos desplazamos a tu domicilio con equipo de vacío profesional y manómetros calibrados para diagnosticar fugas y recuperar el frío de tu vehículo el mismo día. Trabajamos con gas R134a (la mayoría de los autos anteriores a 2017) y R1234yf (vehículos post-2017/2018), incluyendo marcas como Toyota, Hyundai, Kia, Nissan, Ford, Volkswagen, BMW y Mercedes-Benz.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">R134a desde $35.000</span>
                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">R1234yf desde $90.000</span>
                <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">Diagnóstico GRATIS si contratas</span>
                <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">Garantía 90 días</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://wa.me/56935075600?text=Hola%20Autofixer,%20quiero%20agendar%20un%20diagn%C3%B3stico%20a%20domicilio"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Phone className="w-5 h-5" />
                <span>Contactar por WhatsApp</span>
              </a>
              <a href="/cotizar" className="btn-secondary">
                <Calendar className="w-5 h-5" />
                <span>Cotizar</span>
              </a>
              <a href="tel:+56935075600" className="btn-secondary">
                <Phone className="w-5 h-5" />
                <span>Llamar ahora</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-2 text-sm text-brand-gray">
                <Check size={16} className="text-brand-success" />
                <span>90 días garantía</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-brand-gray">
                <Check size={16} className="text-brand-success" />
                <span>Santiago completo</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-brand-gray">
                <Check size={16} className="text-brand-success" />
                <span>Precio cerrado</span>
              </div>
            </div>
          </Reveal>

          {/* Right: HeroForm */}
          <Reveal delay={200}>
            <HeroForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   BENEFITS SECTION
═══════════════════════════════════════════════════════ */
const benefits = [
  { icon: HomeIcon, title: 'Servicio 100% a Domicilio', desc: 'Llegamos a tu casa, oficina, estacionamiento o condominio. No muevas tu vehículo, nosotros vamos donde estés.' },
  { icon: UserCheck, title: 'Técnicos Especializados Solo en A/C', desc: 'Edinson y su equipo se dedican exclusivamente a climatización automotriz. No somos mecánicos generalistas.' },
  { icon: Monitor, title: 'Diagnóstico Profesional con Equipos de Última Generación', desc: 'Escáner electrónico, manómetros digitales, detector de fugas por UV. Tecnología de punta para un diagnóstico exacto.' },
  { icon: Shield, title: 'Garantía Escrita de 90 Días en Mano de Obra', desc: 'Nuestro compromiso es tu tranquilidad. Todo servicio incluye garantía real de 90 días corridos por escrito.' },
  { icon: FileText, title: 'Cotización Transparente Antes de Cualquier Trabajo', desc: 'Precio cerrado in situ. Sin sorpresas, sin costos ocultos. Apruebas antes de que iniciemos.' },
  { icon: MapPin, title: 'Cobertura Total en Gran Santiago', desc: 'Las Condes, Maipú, Providencia, La Florida, Puente Alto, Ñuñoa, San Bernardo y todas las comunas de la RM.' },
]

function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-black">
              ¿Por Qué Elegir Autofixer?
            </h2>
            <p className="mt-3 text-brand-gray text-base max-w-2xl mx-auto">
              La diferencia entre un taller tradicional y un servicio premium a domicilio
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 100}>
              <div className="bg-brand-silver rounded-2xl p-8 h-full group-hover:shadow-card-hover transition-all duration-300 cursor-pointer group border border-transparent hover:border-brand-orange/20">
                <div className="w-14 h-14 rounded-full bg-brand-blue-light flex items-center justify-center mb-5">
                  <b.icon size={24} className="text-brand-blue" />
                </div>
                <h3 className="font-body font-semibold text-lg text-brand-black mb-3">{b.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   SERVICES SECTION
═══════════════════════════════════════════════════════ */
const services = [
  { image: '/images/servicio-carga-gas.webp', title: 'Carga de Gas R134a y R1234yf', desc: 'Recarga con refrigerante puro certificado según la especificación de tu vehículo. Medición precisa por gramo.', link: '/servicios#carga-gas' },
  { image: '/images/servicio-detector-fugas.webp', title: 'Detección y Reparación de Fugas', desc: 'Localización electrónica de alta sensibilidad. Sellado profesional con garantía de hermeticidad.', link: '/servicios#fugas' },
  { image: '/images/servicio-compresor.webp', title: 'Reparación de Compresor', desc: 'Diagnóstico completo del compresor, cambio de embrague o reemplazo total con repuestos originales.', link: '/servicios#compresor' },
  { image: '/images/servicio-condensador.webp', title: 'Reparación de Condensador y Evaporador', desc: 'Limpieza profesional, reparación de aletas o cambio completo del radiador de A/C.', link: '/servicios#condensador' },
  { image: '/images/servicio-sanitizacion.webp', title: 'Sanitización contra Malos Olores', desc: 'Eliminación de bacterias, hongos y malos olores del sistema de ventilación con productos certificados.', link: '/servicios#sanitizacion' },
  { image: '/images/servicio-mantencion.webp', title: 'Mantención Preventiva', desc: 'Revisión completa del sistema antes del verano. Previne fallas costosas y alarga la vida útil.', link: '/servicios#mantencion' },
]

function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-silver">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-black">
              Nuestros Servicios de Climatización
            </h2>
            <p className="mt-3 text-brand-gray text-base max-w-2xl mx-auto">
              Soluciones completas para el sistema de aire acondicionado de tu vehículo
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="bg-white rounded-2xl overflow-hidden group border-b-[3px] border-transparent hover:border-brand-orange transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  {i === 0 ? (
                    <Image
                      src={s.image}
                      alt={s.title}
                      width={800}
                      height={450}
                      priority
                      fetchPriority="high"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>
                <div className="p-7">
                  <h3 className="font-body font-bold text-xl text-brand-black">{s.title}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed mt-2">{s.desc}</p>
                  <Link
                    href={s.link}
                    className="inline-flex items-center gap-1 text-brand-blue font-semibold text-sm mt-4 hover:gap-2 transition-all"
                  >
                    <span>Conocer más</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-8 py-3 rounded-[10px] transition-all duration-300"
          >
            <span>Ver Todos los Servicios</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   E-E-A-T SECTION
═══════════════════════════════════════════════════════ */
function EEATSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <Reveal className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-[300px] h-[380px] sm:w-[340px] sm:h-[420px] rounded-[50%_/_40%] p-[5px] bg-gradient-to-br from-brand-orange to-brand-blue">
                <Image
                  src="/images/edinson-portrait.webp"
                  alt="Edinson, especialista en climatización automotriz de Autofixer SpA"
                  width={340}
                  height={420}
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 340px"
                  className="w-full h-full rounded-[50%_/_40%] object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-3">
            <Reveal>
              <span className="text-brand-orange font-body font-semibold text-xs tracking-[0.2em] uppercase">
                Conoce a Nuestro Especialista
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-black mt-3">
                Edinson, Especialista en Climatización Automotriz
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mt-5">
                Edinson es un especialista con años de experiencia exclusiva en sistemas de climatización
                automotriz en el parque vehicular chileno. Atiende personalmente o supervisa cada caso,
                asegurando que cada vehículo reciba un servicio de la más alta calidad.
              </p>
            </Reveal>

            <div className="mt-7 space-y-4">
              {[
                'Refrigerantes puros R134a y R1234yf originales certificados',
                'Detectores electrónicos de fugas de alta sensibilidad',
                'Herramientas que cumplen estrictas normas ambientales',
                'Supervisión personalizada de cada servicio',
              ].map((item, i) => (
                <Reveal key={item} delay={i * 100}>
                  <div className="flex items-start gap-3">
                    <Check size={20} className="text-brand-success shrink-0 mt-0.5" />
                    <span className="text-brand-black font-medium text-[15px]">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={400}>
              <div className="mt-8 p-5 bg-brand-silver rounded-xl">
                <p className="text-sm text-brand-gray italic">
                  &quot;Atiendo personalmente o superviso cada caso. Para mí, cada vehículo es una responsabilidad
                  que asumo con el mayor compromiso profesional.&quot;
                </p>
                <p className="text-sm font-semibold text-brand-black mt-2">— Edinson, Autofixer SpA</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   PRICING SECTION
═══════════════════════════════════════════════════════ */
const prices = [
  { service: 'Diagnóstico Completo a Domicilio', desc: 'Revisión completa del sistema con equipos digitales', price: 'Desde $15.000–$25.000 (gratis si realizas el servicio)' },
  { service: 'Carga de Gas R134a', desc: 'Recarga con gas puro certificado', price: '$35.000–$70.000' },
  { service: 'Carga de Gas R1234yf', desc: 'Recarga con refrigerante ecológico', price: '$45.000–$70.000+' },
  { service: 'Detección y Reparación de Fuga', desc: 'Localización electrónica + sellado', price: '$45.000–$150.000+' },
  { service: 'Cambio de Compresor', desc: 'Diagnóstico + repuesto + instalación', price: '$180.000–$450.000+' },
  { service: 'Sanitización + Mantención', desc: 'Limpieza antibacterial + revisión completa', price: '$35.000–$65.000' },
]

function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-black">
              Precios Referenciales
            </h2>
            <p className="mt-3 text-brand-gray text-[15px]">
              Precios actualizados 2026. Cotización exacta en terreno.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-brand-blue text-white">
                    <th className="text-left px-6 py-4 text-sm font-semibold uppercase tracking-wider">Servicio</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold uppercase tracking-wider hidden sm:table-cell">Descripción</th>
                    <th className="text-right px-6 py-4 text-sm font-semibold uppercase tracking-wider">Precio Referencial</th>
                  </tr>
                </thead>
                <tbody>
                  {prices.map((row, i) => (
                    <tr key={row.service} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}>
                      <td className="px-6 py-5 text-sm font-medium text-brand-black">{row.service}</td>
                      <td className="px-6 py-5 text-sm text-brand-gray hidden sm:table-cell">{row.desc}</td>
                      <td className="px-6 py-5 text-sm font-bold text-brand-blue text-right whitespace-nowrap">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <p className="text-center text-brand-gray-light text-xs italic mt-5">
          *Precios referenciales actuales. La cotización exacta se define en terreno según el diagnóstico.
        </p>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   PROCESS SECTION
═══════════════════════════════════════════════════════ */
const steps = [
  { number: '01', title: 'Solicita', desc: 'Escríbenos por WhatsApp o llámanos al +56 9 3507 5600', icon: Calendar },
  { number: '02', title: 'Diagnostica', desc: 'Nuestro técnico llega a tu ubicación con equipos digitales', icon: Search },
  { number: '03', title: 'Repara', desc: 'Cotización transparente y trabajo profesional en el acto', icon: Wrench },
  { number: '04', title: 'Disfruta', desc: 'A/C funcionando perfecto con 90 días de garantía', icon: Check },
]

function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-silver">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-black">
              ¿Cómo Funciona?
            </h2>
            <p className="mt-3 text-brand-gray text-base">
              Cuatro pasos simples para recuperar el A/C de tu auto
            </p>
          </div>
        </Reveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-[28px] left-[12%] right-[12%] h-0.5 bg-brand-blue/20" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 150}>
                <div className="text-center relative">
                  <div className="w-14 h-14 rounded-full bg-brand-blue text-white flex items-center justify-center mx-auto mb-5 relative z-10">
                    <span className="font-heading font-bold text-lg">{step.number}</span>
                  </div>
                  <h3 className="font-body font-bold text-lg text-brand-black mb-2">{step.title}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   COVERAGE MARQUEE
═══════════════════════════════════════════════════════ */
const comunas = [
  'Las Condes', 'Maipú', 'Providencia', 'La Florida', 'Puente Alto', 'Ñuñoa',
  'San Bernardo', 'Vitacura', 'Lo Barnechea', 'Peñalolén', 'Santiago Centro',
  'Estación Central', 'Quilicura', 'Pudahuel', 'La Reina', 'Macul', 'La Granja',
  'San Miguel', 'Pedro Aguirre Cerda', 'Cerrillos', 'El Bosque', 'Recoleta',
  'Independencia', 'Conchalí', 'Huechuraba', 'Cerrillos', 'Cerro Navia', 'Lo Prado',
  'Quinta Normal', 'Lo Espejo', 'San Ramón', 'San Joaquín', 'La Pintana',
  'Padre Hurtado', 'Isla de Maipo', 'Talagante', 'Peñaflor', 'Melipilla',
]

function CoverageMarquee() {
  const comunasText = comunas.join(' • ')
  return (
    <section className="bg-brand-blue py-10 overflow-hidden">
      <Reveal>
        <p className="text-center text-white/90 font-body font-bold text-xs uppercase tracking-[0.2em] mb-5">
          Cobertura en Todo Santiago
        </p>
      </Reveal>
      <div className="relative group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          <span className="text-white font-body font-medium text-lg mx-4">{comunasText} • </span>
          <span className="text-white font-body font-medium text-lg mx-4">{comunasText} • </span>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   CASES SECTION
═══════════════════════════════════════════════════════ */
const cases = [
  { image: '/images/caso-compresor.webp', title: 'Compresor Reemplazado — Toyota Corolla 2019', problem: 'El A/C no enfriaba, ruido en el compresor', solution: 'Diagnóstico + cambio de compresor original', result: 'A/C Restaurado' },
  { image: '/images/caso-carga-gas.webp', title: 'Carga de Gas — Nissan Qashqai 2021', problem: 'Pérdida progresiva de refrigerante', solution: 'Detección de fuga + recarga R134a', result: 'A/C Restaurado' },
  { image: '/images/servicio-sanitizacion.webp', title: 'Sanitización — Hyundai Tucson 2020', problem: 'Malos olores al encender el A/C', solution: 'Sanitización antibacterial completa', result: 'Olor Eliminado' },
]

function CasesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-black">
              Casos Reales de Nuestros Clientes
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="bg-brand-silver rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-body font-semibold text-lg text-brand-black">{c.title}</h3>
                  <p className="text-brand-gray text-sm mt-2">
                    <span className="font-medium text-red-500">Problema:</span> {c.problem}
                  </p>
                  <p className="text-brand-gray text-sm mt-1">
                    <span className="font-medium text-brand-blue">Solución:</span> {c.solution}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 bg-brand-success-light text-brand-success text-xs font-semibold px-3 py-1 rounded-full">
                    <Check size={12} />
                    <span>{c.result}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/casos-reales" className="btn-primary inline-flex items-center gap-2">
            <span>Ver Todos los Casos</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   FAQ SECTION (simple accordion)
═══════════════════════════════════════════════════════ */
const faqs = [
  { q: '¿Cuánto tiempo dura el servicio a domicilio?', a: 'La mayoría de los servicios se completan entre 45 minutos y 2 horas dependiendo de la complejidad. El diagnóstico inicial toma aproximadamente 20-30 minutos.' },
  { q: '¿Qué pasa si mi auto necesita un repuesto que no tienen?', a: 'Trabajamos con una red de proveedores en Santiago. Si el repuesto no está disponible, lo gestionamos y coordinamos una segunda visita sin costo adicional de traslado.' },
  { q: '¿La garantía de 90 días cubre repuestos?', a: 'La garantía de 90 días cubre mano de obra y sellado de fugas. Los repuestos tienen garantía del fabricante que generalmente es de 6 meses a 1 año.' },
  { q: '¿Atienden vehículos híbridos o eléctricos?', a: 'Sí, nuestros técnicos están capacitados para trabajar con sistemas de A/C en vehículos híbridos y eléctricos, incluyendo el manejo de refrigerantes R1234yf.' },
]


function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-silver">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-black">
              Preguntas Frecuentes
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="text-center mt-8">
          <Link href="/preguntas-frecuentes" className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue-dark font-semibold text-sm transition-colors">
            <span>Ver Todas las Preguntas</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   FINAL CTA SECTION
═══════════════════════════════════════════════════════ */
function FinalCTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-blue-dark" />
      <div className="max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
            ¿Listo para Recuperar el A/C de tu Auto?
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Agenda tu diagnóstico a domicilio hoy mismo. Atendemos en todo Santiago.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="https://wa.me/56935075600?text=Hola%20Autofixer,%20quiero%20agendar%20un%20diagn%C3%B3stico%20a%20domicilio"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white font-body font-semibold px-8 py-4 rounded-[10px] shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Calendar size={18} />
              <span>Solicitar Diagnóstico</span>
            </a>
            <a
              href="tel:+56935075600"
              className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-body font-semibold px-8 py-4 rounded-[10px] transition-all duration-300 flex items-center gap-2"
            >
              <Phone size={18} />
              <span>Llamar Ahora +56 9 3507 5600</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <ServiceSchemaMarkup />
      <FAQSchemaMarkup />
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <EEATSection />
      <PricingSection />
      <ProcessSection />
      <CoverageMarquee />
      <CasesSection />
      <GoogleReviewsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}
