'use client'

import {
  MessageCircle,
  Search,
  FileText,
  CheckCircle,
  Wrench,
  Thermometer,
  Heart,
  Check,
  Phone,
  Calendar,
} from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { FAQSchemaMarkup } from '@/components/FAQSchema'

const steps = [
  {
    number: '01',
    title: 'Solicitud Rápida',
    desc: 'Escríbenos por WhatsApp, llámanos al +56 9 3507 5600 o completa el formulario web. Nuestro equipo te responderá en menos de 10 minutos.',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'Diagnóstico en Terreno',
    desc: 'Nuestra unidad móvil llega a tu ubicación equipada con escáner electrónico, manómetros digitales y detector de fugas. El diagnóstico toma 20-30 minutos.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Cotización Clara y Detallada',
    desc: 'Te entregamos un precio cerrado in situ, sin letra pequeña ni costos ocultos. Aprobás antes de que iniciemos cualquier trabajo.',
    icon: FileText,
  },
  {
    number: '04',
    title: 'Aprobación del Cliente',
    desc: 'Sin presión. Tomás la decisión con toda la información. Si decidís no continuar, solo pagás el diagnóstico (que se bonifica si realizás el servicio).',
    icon: CheckCircle,
  },
  {
    number: '05',
    title: 'Reparación o Servicio',
    desc: 'Trabajo técnico limpio y profesional. Protegemos tu vehículo con coberturas. Usamos herramientas digitales y repuestos certificados.',
    icon: Wrench,
  },
  {
    number: '06',
    title: 'Pruebas Finales y Entrega',
    desc: 'Medición de temperatura en rejillas con termómetro digital. Verificación de presiones. Activación de garantía de 90 días por escrito.',
    icon: Thermometer,
  },
  {
    number: '07',
    title: 'Seguimiento Post-Servicio',
    desc: 'Control de calidad automatizado a los 7 días. Recordatorio de mantención a los 6 meses. Campaña de reactivación pre-verano.',
    icon: Heart,
  },
]

const checklist = [
  'Temperatura de salida en rejillas verificada',
  'Presiones de alta y baja correctas',
  'Fuga de gas 100% descartada',
  'Cliente informado de diagnóstico y rangos',
  'Registro multimedia subido a ficha',
]

const slas = [
  { channel: 'WhatsApp', time: '< 10 minutos', icon: MessageCircle },
  { channel: 'Formulario Web', time: '< 30 minutos', icon: FileText },
  { channel: 'Correo Corporativo', time: '< 4 horas', icon: FileText },
  { channel: 'Visita de Emergencia', time: '< 4 horas', icon: Wrench },
  { channel: 'Visita Programada', time: '< 24 horas', icon: Calendar },
]

export default function ComoTrabajamos() {
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
                <FileText size={14} className="text-amber-400" />
                <span className="text-amber-400 font-body font-semibold text-xs tracking-wider uppercase">Proceso Profesional</span>
              </div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mt-4">
                Cómo Trabajamos — Proceso Transparente y Profesional
              </h1>
              <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
                Un flujo de trabajo diseñado para tu comodidad y tranquilidad
              </p>
            </ScrollReveal>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent" />
        </section>

        {/* Timeline */}
        <section className="py-16 bg-slate-900">
          <div className="container-autofixer max-w-[900px]">
            <div className="relative">
              {/* Vertical line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-500/40 via-blue-500/20 to-transparent -translate-x-1/2" />

              <div className="space-y-12 lg:space-y-16">
                {steps.map((step, i) => {
                  const isLeft = i % 2 === 0
                  const Icon = step.icon

                  return (
                    <ScrollReveal key={step.number} delay={i * 100}>
                      <div className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-0 ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
                        {/* Content */}
                        <div className={`lg:w-[45%] ${isLeft ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                          <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-amber-500/20 transition-all ${isLeft ? 'lg:ml-auto' : ''}`}>
                            <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600/40 to-blue-800/40 border border-blue-500/30 text-amber-400 flex items-center justify-center shrink-0">
                                <Icon size={22} />
                              </div>
                              <div className={isLeft ? 'lg:text-right' : ''}>
                                <span className="text-amber-400 font-heading font-bold text-sm">Paso {step.number}</span>
                                <h3 className="font-body font-bold text-xl text-white">{step.title}</h3>
                              </div>
                            </div>
                            <p className="text-white/50 text-[15px] leading-relaxed">{step.desc}</p>
                          </div>
                        </div>

                        {/* Center node */}
                        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-slate-900 border-2 border-amber-500/40 items-center justify-center z-10">
                          <span className="font-heading font-bold text-lg text-amber-400">{step.number}</span>
                        </div>

                        {/* Spacer */}
                        <div className="lg:w-[45%]" />
                      </div>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="py-16 bg-slate-800/60">
          <div className="container-autofixer max-w-[800px]">
            <ScrollReveal>
              <div className="text-center mb-10">
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                  Checklist de Calidad Obligatorio
                </h2>
                <p className="mt-3 text-white/40">
                  Nuestro sistema no permite cerrar una orden sin completar estos puntos:
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  {checklist.map((item) => (
                    <div key={item} className="flex items-center gap-4 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                        <Check size={16} className="text-emerald-400" />
                      </div>
                      <span className="text-white/80 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SLAs */}
        <section className="py-16 bg-slate-900">
          <div className="container-autofixer max-w-[800px]">
            <ScrollReveal>
              <div className="text-center mb-10">
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                  Nuestros Tiempos de Respuesta
                </h2>
                <p className="mt-3 text-white/40">
                  Compromiso de atención garantizado
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {slas.map((sla, i) => {
                const Icon = sla.icon
                return (
                  <ScrollReveal key={sla.channel} delay={i * 100}>
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:border-amber-500/20 transition-all">
                      <Icon size={28} className="text-amber-400 mx-auto mb-3" />
                      <h4 className="font-body font-semibold text-white">{sla.channel}</h4>
                      <p className="text-amber-400 font-bold text-lg mt-1">{sla.time}</p>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.12) 0%, transparent 60%)'}} />
          <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
          <div className="container-autofixer text-center relative z-10">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                ¿Listo para Comenzar?
              </h2>
              <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
                Agenda tu servicio hoy mismo y descubre por qué somos los especialistas #1 en A/C automotriz a domicilio en Santiago.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <a
                  href="https://wa.me/56935075600?text=Hola%20Autofixer,%20quiero%20agendar%20un%20diagn%C3%B3stico%20a%20domicilio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-body font-semibold px-8 py-4 rounded-xl shadow-2xl shadow-amber-500/25 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
                  data-event="whatsapp_click"
                >
                  <Calendar size={18} />
                  <span>Solicitar Diagnóstico</span>
                </a>
                <a
                  href="tel:+56935075600"
                  className="bg-white/5 hover:bg-white/10 border border-white/20 text-white font-body font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-2"
                  data-event="call_click"
                >
                  <Phone size={18} />
                  <span>Llamar Ahora</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  )
}
