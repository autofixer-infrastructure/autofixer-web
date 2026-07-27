'use client'
import Image from 'next/image'
import { AlertTriangle, Wind, Thermometer, VolumeX, Droplets, RefreshCw, Power, ArrowRight, Phone } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'

const urgenciaColor: Record<string, { bg: string; text: string; label: string }> = {
  critica: { bg: 'bg-red-500/10', text: 'text-red-400', label: 'Crítica' },
  alta: { bg: 'bg-orange-500/10', text: 'text-orange-400', label: 'Alta' },
  media: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', label: 'Media' },
}

const problemas = [
  {
    icono: Wind,
    titulo: 'Aire no sale frío',
    urgencia: 'critica',
    urgenciaLabel: 'Revisión inmediata',
    desc: 'El aire que sale de las rejillas no baja de temperatura ambiente, sin importar cuánto bajes la perilla del clima.',
    causas: ['Falta de gas refrigerante', 'Compresor fallando', 'Fuga en el sistema de refrigeración'],
    solucion: 'Carga de gas o diagnóstico completo del sistema de climatización.',
  },
  {
    icono: Thermometer,
    titulo: 'Aire sale tibio o templado',
    urgencia: 'alta',
    urgenciaLabel: 'Atención pronta',
    desc: 'El aire acondicionado enfría, pero no lo suficiente. Puede estar funcionando a media capacidad.',
    causas: ['Nivel bajo de gas R134a o R1234yf', 'Condensador sucio o obstruido', 'Filtro de habitáculo saturado'],
    solucion: 'Revisión de niveles de gas, limpieza de condensador y reemplazo de filtro de cabin.',
  },
  {
    icono: VolumeX,
    titulo: 'Ruido anormal al encender A/C',
    urgencia: 'alta',
    urgenciaLabel: 'Revisar pronto',
    desc: 'Zumbidos, chirridos o vibraciones al activar el aire acondicionado, especialmente al acelerar.',
    causas: ['Correa del compresor deteriorada', 'Compresor con rodamientos dañados', 'Embrague de compresor defectuoso'],
    solucion: 'Inspección del sistema de transmisión y embrague del compresor.',
  },
  {
    icono: Droplets,
    titulo: 'Mal olor al encender el aire',
    urgencia: 'media',
    urgenciaLabel: 'Mantenimiento recomendado',
    desc: 'Olor a humedad, hongos o descriptor cuando enciendes el A/C, especialmente en la primera utilización del día.',
    causas: ['Hongos y bacterias en el evaporador', 'Filtro de habitáculo contaminado', 'Acumulación de humedad en drenaje'],
    solucion: 'Sanitización del sistema de climatización y limpieza del evaporador.',
  },
  {
    icono: RefreshCw,
    titulo: 'Compresor se enciende y apaga constantemente',
    urgencia: 'alta',
    urgenciaLabel: 'Atención pronta',
    desc: 'El compresor hace ciclos muy cortos y frecuentes (cycling), lo que reduce la eficiencia y puede dañar el sistema.',
    causas: ['Sensor de temperatura defectuoso', 'Válvula de expansión tapada', 'Presión demasiado alta o baja en el sistema'],
    solucion: 'Diagnóstico de presiones del sistema y revisión de componentes eléctricos.',
  },
  {
    icono: Power,
    titulo: 'Aire acondicionado no enciende',
    urgencia: 'critica',
    urgenciaLabel: 'Revisión inmediata',
    desc: 'Al presionar el botón o perilla del A/C, no ocurre nada. No hay aire, no hay sonido, nada funciona.',
    causas: ['Fusible quemado', 'Fallo en el embrague del compresor', 'Problema en el módulo de climatización'],
    solucion: 'Revisión del sistema eléctrico y del embrague electromagnético.',
  },
  {
    icono: AlertTriangle,
    titulo: 'Fugas visibles de líquido bajo el vehículo',
    urgencia: 'critica',
    urgenciaLabel: 'Detener uso',
    desc: 'Charcos o gotas de líquido transparente debajo del auto cuando el motor está encendido y A/C funcionando.',
    causas: ['Mangueras deterioradas o rotas', 'Conexiones flojas', 'Evaporador o condensador dañado'],
    solucion: 'Detección de fuga con gas trazador y reparación o reemplazo del componente afectado.',
  },
]

export default function ProblemasPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 md:py-20">
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(245,158,11,0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59,130,246,0.08) 0%, transparent 50%)'}} />
        <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-5 py-2 mb-6">
              <AlertTriangle size={14} className="text-red-400" />
              <span className="text-red-400 font-body font-semibold text-xs tracking-wider uppercase">7 Problemas Comunes</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
              Problemas Comunes del A/C Automotriz
            </h1>
            <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
              Identifica los síntomas de tu vehículo. Aquí te explicamos qué puede estar pasando y qué tan urgente es atenderlo.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent" />
      </section>

      {/* Problem Cards */}
      <section className="py-16 md:py-20 bg-slate-900">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {problemas.map((prob, i) => {
              const urg = urgenciaColor[prob.urgencia as keyof typeof urgenciaColor]
              const IconComponent = prob.icono
              return (
                <ScrollReveal key={prob.titulo} delay={i * 80}>
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-7 hover:border-amber-500/20 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row gap-5">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/20 flex items-center justify-center shrink-0">
                        <IconComponent size={26} className="text-amber-400" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="font-heading font-bold text-lg text-white">{prob.titulo}</h3>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${urg.bg} ${urg.text} ${urg.text.replace('text-', 'border-')}/30`}>
                            {urg.label} — {prob.urgenciaLabel}
                          </span>
                        </div>
                        <p className="text-white/50 text-[15px] mb-4">{prob.desc}</p>
                        <div>
                          <p className="font-semibold text-white/70 text-sm mb-2">Posibles causas:</p>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {prob.causas.map((c) => (
                              <li key={c} className="flex items-start gap-2 text-white/40 text-sm">
                                <span className="text-amber-400 mt-0.5">•</span>
                                <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.15) 0%, transparent 60%)'}} />
        <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="max-w-[800px] mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-4">
            ¿No sabes qué tiene tu auto?
          </h2>
          <p className="text-white/50 text-lg">
            Lo más seguro es que un técnico profesional lo revise. El diagnóstico inicial es gratis si contratas el servicio.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="https://wa.me/56935075600?text=Hola%20Autofixer,%20mi%20auto%20tiene%20el%20siguiente%20problema%3A%20[DESCRÍBELO%20AQUÍ]" target="_blank" rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-8 py-4 rounded-xl shadow-2xl shadow-amber-500/20 transition-all hover:-translate-y-1 inline-flex items-center gap-2">
              Consultar por WhatsApp
              <ArrowRight size={18} />
            </a>
            <a href="tel:+56935075600" className="bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2">
              <Phone size={18} />
              +56 9 3507 5600
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
