'use client'

import { CheckCircle2, Award, Shield, Phone, Calendar, Users, Wrench, Star, ThumbsUp } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { FAQSchemaMarkup } from '@/components/FAQSchema'

const pillars = [
  { icon: Award, title: 'Técnicos Certificados y Especializados', desc: 'Solo trabajamos con técnicos que se dedican exclusivamente a climatización automotriz. No somos un taller general que juga con A/C. Somos especialistas.' },
  { icon: Shield, title: 'Garantía Real de 90 Días', desc: 'Si el problema vuelve, llegamos de nuevo sin costo adicional. Esa es nuestra garantía. No prometemos cosas que no cumplimos.' },
  { icon: Wrench, title: 'Repuestos Originales y Certificados', desc: 'Solo usamos repuestos OEM o de primera calidad. Nunca repuestosgenéricos de dudosa procedencia que puedan dañar el sistema.' },
  { icon: Users, title: 'Atención Personalizada y Sin Turnos', desc: 'No necesitas pedir hora. Nuestro equipo llega cuando tú lo necesites, incluyendo sábados, domingos y festivos.' },
  { icon: Star, title: 'Valoraciones Reales de Clientes', desc: 'Mira lo que nuestros clientes dicen de nosotros. No pagamos por reviews falsas. Cada valoración es de un cliente real.' },
  { icon: ThumbsUp, title: 'Trato Profesional y Transparente', desc: 'Te explicamos exactamente qué tiene tu auto, por qué lo necesita y cuánto cuesta antes de hacer nada. Sin sorpresas.' },
]

const badges = [
  { label: 'Servicios realizados', value: '2.000+', icon: Wrench },
  { label: 'Clientes satisfechos', value: '4.9/5', icon: Star },
  { label: 'Comunas cubiertas', value: '30+', icon: Shield },
  { label: 'Años de experiencia', value: '8+', icon: Award },
]

const faqs = [
  { q: '¿Realmente dan garantía de 90 días?', a: 'Sí. Si en ese periodo el problema reaparece, volvemos sin costo adicional. Así de simples son nuestras condiciones.' },
  { q: '¿Los repuestos son originales?', a: 'Sí. Trabajamos con repuestos OEM o de primera calidad. Nunca usamos repuestos genéricos o de baja calidad.' },
  { q: '¿Cómo agendo una visita?', a: 'Puedes escribirnos por WhatsApp, llamarnos directamente o completar el formulario de contacto. Nuestro equipo responde en menos de 30 minutos.' },
  { q: '¿Trabajan los sábados y domingos?', a: 'Sí. Entendemos que tu vehículo puede fallar en cualquier momento. Nuestro horario flexible es parte de nuestro compromiso.' },
  { q: '¿Cuánto cuesta el diagnóstico?', a: 'El diagnóstico a domicilio oscila entre $15.000 y $25.000, pero es gratis si contratas el servicio con nosotros.' },
  { q: '¿Manejan vehículos de alta gama?', a: 'Sí. Tenemos experiencia con marcas premium y vehículos híbridos/eléctricos que usan gases refrigerantes especiales como R1234yf.' },
]

export default function Page() {
  return (
    <>
      <FAQSchemaMarkup />
      <div className="pt-[72px]">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(245,158,11,0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59,130,246,0.08) 0%, transparent 50%)'}} />
          <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
          <div className="container-autofixer text-center relative z-10">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-5 py-2 mb-6">
                <Award size={14} className="text-amber-400" />
                <span className="text-amber-400 font-body font-semibold text-xs tracking-wider uppercase">Por Qué Elegirnos</span>
              </div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mt-4">
                ¿Por Qué Confiar en Autofixer?
              </h1>
              <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
                Razones concretas para confiarnos el aire acondicionado de tu vehículo
              </p>
            </ScrollReveal>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent" />
        </section>

        {/* Pillars */}
        <section className="py-16 bg-slate-900">
          <div className="container-autofixer">
            <div className="text-center mb-14">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white">6 Pilares de Nuestra Promesa</h2>
              <p className="mt-3 text-white/40 max-w-xl mx-auto">Lo que nos hace diferentes de un taller tradicional</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((p, i) => {
                const Icon = p.icon
                return (
                  <ScrollReveal key={p.title} delay={i * 100}>
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-300 h-full group">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/30 to-blue-800/30 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:border-amber-500/30 transition-colors">
                        <Icon size={28} className="text-amber-400" />
                      </div>
                      <h3 className="font-body font-bold text-xl text-white mb-3">{p.title}</h3>
                      <p className="text-white/40 text-[15px] leading-relaxed">{p.desc}</p>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-slate-800/60">
          <div className="container-autofixer">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">Resultados Que Hablan Solos</h2>
              <p className="mt-3 text-white/40">Números reales de nuestra operación</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {badges.map((b, i) => {
                const Icon = b.icon
                return (
                  <ScrollReveal key={b.label} delay={i * 100}>
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-amber-500/20 transition-all">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
                        <Icon size={24} className="text-amber-400" />
                      </div>
                      <p className="font-heading font-extrabold text-3xl text-amber-400">{b.value}</p>
                      <p className="text-white/40 text-sm mt-2">{b.label}</p>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-slate-900">
          <div className="container-autofixer max-w-[800px]">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">Preguntas Frecuentes</h2>
              <p className="mt-3 text-white/40">Las dudas más comunes de nuestros clientes</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                    <h3 className="font-body font-semibold text-white mb-2 flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
                      {faq.q}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed ml-[26px]">{faq.a}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.12) 0%, transparent 60%)'}} />
          <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
          <div className="container-autofixer text-center relative z-10">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">¿Listo Para Confiar en los Expertos?</h2>
            <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">Agenda tu servicio hoy y descubre por ti mismo la diferencia.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a href="https://wa.me/56935075600?text=Hola%20Autofixer,%20quiero%20agendar%20un%20servicio%20a%20domicilio" target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-body font-semibold px-8 py-4 rounded-xl shadow-2xl shadow-amber-500/25 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                <Calendar size={18} /><span>Agendar Ahora</span>
              </a>
              <a href="tel:+56935075600" className="bg-white/5 hover:bg-white/10 border border-white/20 text-white font-body font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-2">
                <Phone size={18} /><span>Llamar Ahora</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
