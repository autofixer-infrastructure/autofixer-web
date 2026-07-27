'use client'

import { useState } from 'react'
import { Phone, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { FAQSchemaMarkup } from '@/components/FAQSchema'

const faqCategories = [
  {
    category: 'Servicio y Proceso',
    questions: [
      {
        q: '¿Cuánto tiempo dura el servicio a domicilio?',
        a: 'La mayoría de los servicios se completan entre 45 minutos y 2 horas dependiendo de la complejidad. El diagnóstico inicial toma aproximadamente 20-30 minutos. Servicios como cambio de compresor pueden tomar 2-3 horas.',
      },
      {
        q: '¿Necesito estar presente durante el servicio?',
        a: 'Sí, recomendamos que estés presente durante el diagnóstico para que podamos explicarte el problema y la solución. Para el trabajo en sí, puedes estar en tu domicilio u oficina mientras realizamos el servicio.',
      },
      {
        q: '¿Qué pasa si llueve durante el servicio?',
        a: 'Nuestras unidades móviles están equipadas con toldos y protección para trabajar en condiciones climáticas normales. En caso de lluvia intensa, podemos reprogramar sin costo.',
      },
    ],
  },
  {
    category: 'Precios y Pagos',
    questions: [
      {
        q: '¿Cuál es el precio del diagnóstico a domicilio?',
        a: 'El diagnóstico completo a domicilio tiene un valor referencial de $15.000 a $25.000, pero es completamente gratuito si realizas el servicio con nosotros.',
      },
      {
        q: '¿Qué métodos de pago aceptan?',
        a: 'Aceptamos efectivo, transferencia bancaria y pago con tarjeta de débito/crédito a través de nuestro dispositivo móvil. También puedes pagar vía WebPay.',
      },
      {
        q: '¿El precio incluye todo o hay cargos adicionales?',
        a: 'Te entregamos un precio cerrado antes de comenzar cualquier trabajo. No hay cargos ocultos ni sorpresas. Si durante el servicio se detecta algo adicional, te consultamos antes de proceder.',
      },
    ],
  },
  {
    category: 'Garantía y Calidad',
    questions: [
      {
        q: '¿La garantía de 90 días cubre repuestos?',
        a: 'La garantía de 90 días cubre mano de obra y sellado de fugas. Los repuestos tienen garantía del fabricante que generalmente es de 6 meses a 1 año, independiente de nuestra garantía de servicio.',
      },
      {
        q: '¿Qué pasa si el problema persiste después del servicio?',
        a: 'Si el problema persiste durante el período de garantía, volvemos a tu ubicación sin costo adicional para revisar y corregir el inconveniente. Tu satisfacción es nuestra prioridad.',
      },
      {
        q: '¿Cómo hago válida la garantía?',
        a: 'Guarda tu comprobante de servicio. Si necesitas hacer válida la garantía, contáctanos por WhatsApp o teléfono con tu número de orden y coordinaremos una visita de seguimiento.',
      },
    ],
  },
  {
    category: 'Vehículos y Tecnología',
    questions: [
      {
        q: '¿Atienden vehículos híbridos o eléctricos?',
        a: 'Sí, nuestros técnicos están capacitados para trabajar con sistemas de A/C en vehículos híbridos y eléctricos, incluyendo el manejo de refrigerantes R1234yf que utilizan estos vehículos.',
      },
      {
        q: '¿Trabajan con todas las marcas de vehículos?',
        a: 'Sí, atendemos todas las marcas y modelos de vehículos que circulan en Chile: Chevrolet, Nissan, Toyota, Hyundai, Kia, Suzuki, Volkswagen, Ford, Renault, Peugeot, Citroën y más.',
      },
      {
        q: '¿Qué refrigerante usa mi vehículo?',
        a: 'La mayoría de los vehículos fabricados antes de 2017 usan R134a. Los vehículos más nuevos, especialmente premium y eléctricos/híbridos, usan R1234yf. Nuestro técnico verifica esto durante el diagnóstico.',
      },
    ],
  },
  {
    category: 'Cobertura y Ubicación',
    questions: [
      {
        q: '¿En qué comunas de Santiago atienden?',
        a: 'Atendemos en todo el Gran Santiago incluyendo Las Condes, Maipú, Providencia, La Florida, Puente Alto, Ñuñoa, San Bernardo, Vitacura, Lo Barnechea, Peñalolén y todas las comunas de la RM.',
      },
      {
        q: '¿Pueden atender en estacionamientos subterráneos?',
        a: 'Sí, siempre que la altura del estacionamiento sea de al menos 2.1 metros. Nuestras unidades móviles están diseñadas para operar en espacios reducidos.',
      },
      {
        q: '¿Atienden fuera de Santiago?',
        a: 'Actualmente nos enfocamos en el Gran Santiago y comunas aledañas. Para servicios fuera de esta zona, contáctanos y evaluaremos la viabilidad según la distancia.',
      },
    ],
  },
  {
    category: 'Repuestos y Materiales',
    questions: [
      {
        q: '¿Qué pasa si mi auto necesita un repuesto que no tienen?',
        a: 'Trabajamos con una red de proveedores en Santiago. Si el repuesto no está disponible, lo gestionamos y coordinamos una segunda visita sin costo adicional de traslado.',
      },
      {
        q: '¿Usan repuestos originales?',
        a: 'Sí, utilizamos repuestos originales o de calidad equivalente certificada. Siempre consultamos contigo antes de usar un repuesto alternativo.',
      },
      {
        q: '¿Puedo comprar el repuesto yo y ustedes lo instalan?',
        a: 'Recomendamos que nosotros gestionemos los repuestos para asegurar compatibilidad y garantía. Sin embargo, si ya tienes el repuesto, podemos evaluarlo e instalarlo.',
      },
    ],
  },
]

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left font-body font-semibold text-[15px] text-white/90 hover:text-amber-400 transition-colors"
      >
        <span>{question}</span>
        {open ? (
          <ChevronUp size={18} className="text-amber-400 shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-white/40 shrink-0" />
        )}
      </button>
      {open && (
        <div className="text-white/60 text-[15px] leading-relaxed pb-5">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <FAQSchemaMarkup />
      <div className="pt-[72px]">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          {/* Background texture */}
          <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(245,158,11,0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59,130,246,0.08) 0%, transparent 50%)'}} />
          <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
          <div className="container-autofixer text-center relative z-10">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-5 py-2 mb-6">
                <MessageCircle size={16} className="text-amber-400" />
                <span className="text-amber-400 font-body font-semibold text-xs tracking-wider uppercase">Resolvemos tus Dudas</span>
              </div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mt-4">
                Preguntas Frecuentes
              </h1>
              <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
                Todo lo que necesitas saber sobre nuestro servicio de climatización automotriz a domicilio.
              </p>
            </ScrollReveal>
          </div>
          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent" />
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-slate-900">
          <div className="container-autofixer max-w-[900px]">
            {faqCategories.map((category, catIndex) => (
              <div key={category.category} className="mb-10 last:mb-0">
                <ScrollReveal delay={catIndex * 50}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
                    <h2 className="font-heading font-bold text-lg sm:text-xl text-amber-400 whitespace-nowrap">
                      {category.category}
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={catIndex * 50 + 100}>
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-blue-900/20">
                    {category.questions.map((faq, qIndex) => (
                      <AccordionItem key={qIndex} question={faq.q} answer={faq.a} />
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.15) 0%, transparent 60%)'}} />
          <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
          <div className="container-autofixer text-center max-w-[600px] relative z-10">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-4">
                ¿Tienes Otra Pregunta?
              </h2>
              <p className="text-white/50 mb-10">
                Nuestro equipo está listo para ayudarte. Contáctanos directamente y te responderemos en menos de 10 minutos.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/56935075600?text=Hola%20Autofixer,%20tengo%20una%20pregunta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-body font-semibold px-8 py-4 rounded-xl shadow-2xl shadow-green-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Preguntar por WhatsApp</span>
                </a>
                <a
                  href="tel:+56935075600"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-body font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-2xl shadow-amber-500/20"
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
