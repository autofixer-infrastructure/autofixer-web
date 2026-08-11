'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'
import MapaCobertura from "@/components/MapaCobertura";
import { useTurnstile, TurnstileWidget } from "@/components/TurnstileProvider";

const contactMethods = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+56 9 3507 5600',
    href: 'https://wa.me/56935075600',
    highlight: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contacto@autofixer.cl',
    href: 'mailto:contacto@autofixer.cl',
  },
  {
    icon: MapPin,
    label: 'Cobertura',
    value: 'Santiago, Región Metropolitana',
    href: '/cobertura',
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lunes a Viernes: 8AM - 7PM',
    href: null,
  },
]

export default function ContactoPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [turnstileError, setTurnstileError] = useState('')
  const { tokenRef, containerRef } = useTurnstile()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTurnstileError('')
    if (!tokenRef.current) {
      setTurnstileError('Por favor completa la verificación de seguridad antes de enviar.')
      return
    }
    setSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, turnstileToken: tokenRef.current }),
      })
      if (res.ok) {
        setSent(true)
        setForm({ name: '', email: '', phone: '', service: '', message: '' })

        // Track: contacto (lead generado en pagina de contacto)
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'generate_lead', {
            event_category: 'engagement',
            event_label: 'contact_page',
            form_name: 'contacto_pagina',
            service: form.service || 'general',
            source: 'contacto_page',
          })
        }
      } else {
        const data = await res.json().catch(() => ({}))
        setTurnstileError(data?.error || 'Error al enviar el mensaje')
      }
    } catch {
      setTurnstileError('Error de red. Inténtalo nuevamente.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-white border-b'>
        <div className='max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>Contáctanos</h1>
          <p className='text-xl text-gray-600'>
            Estamos disponibles de Lunes a Viernes para atenderte.
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12'>

          {/* Contact Info */}
          <div>
            <ScrollReveal>
              <div className='bg-white rounded-2xl shadow-card p-8 mb-8'>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>Canales de atención</h2>
                <div className='space-y-6'>
                  {contactMethods.map((method) => {
                    const Icon = method.icon
                    return (
                      <div key={method.label} className='flex items-start gap-4'>
                        <div className={
                          'p-3 rounded-xl ' + (method.highlight ? 'bg-secondary/10' : 'bg-gray-100')
                        }>
                          <Icon className={'w-6 h-6 ' + (method.highlight ? 'text-secondary' : 'text-gray-600')} />
                        </div>
                        <div>
                          <p className='text-sm text-gray-500 mb-1'>{method.label}</p>
                          {method.href ? (
                            <a
                              href={method.href}
                              className={'font-semibold hover:underline ' + (method.highlight ? 'text-secondary' : 'text-gray-900')}
                            >
                              {method.value}
                            </a>
                          ) : (
                            <p className='font-semibold text-gray-900'>{method.value}</p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className='bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 text-white'>
                <h3 className='text-xl font-bold mb-4'>¿Por qué elegirnos?</h3>
                <ul className='space-y-3 text-blue-100'>
                  <li className='flex items-center gap-2'>
                    <span className='w-2 h-2 rounded-full bg-amber-400' />
                    Especialistas exclusivos en A/C automotriz
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='w-2 h-2 rounded-full bg-amber-400' />
                    Servicio 100% a domicilio en Santiago
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='w-2 h-2 rounded-full bg-amber-400' />
                    Diagnóstico gratis si contratas el servicio
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='w-2 h-2 rounded-full bg-amber-400' />
                    Garantía escrita de 90 días
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='w-2 h-2 rounded-full bg-amber-400' />
                    Técnicos certificados con experiencia
                  </li>
                </ul>
                <a
                  href='https://wa.me/56935075600?text=Hola%2C%20necesito%20información%20sobre%20servicio%20de%20aire%20acondicionado'
                  className='mt-6 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors w-fit'
                >
                  <Phone className='w-5 h-5' />
                  Escribir por WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal>
            <div className='bg-white rounded-2xl shadow-card p-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-2'>Envíanos un mensaje</h2>
              <p className='text-gray-600 mb-6'>
                Completa el formulario y te responderemos a la brevedad.
              </p>

              {sent ? (
                <div className='text-center py-12'>
                  <div className='w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4'>
                    <Send className='w-8 h-8 text-green-600' />
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>¡Mensaje enviado!</h3>
                  <p className='text-gray-600'>Te responderemos en las próximas horas.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-5'>
                  <div className='grid sm:grid-cols-2 gap-5'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>Nombre</label>
                      <input
                        type='text'
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder='Tu nombre'
                        className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>Teléfono</label>
                      <input
                        type='tel'
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder='+56 9 XXXX XXXX'
                        className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all'
                      />
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                    <input
                      type='email'
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder='tu@email.com'
                      className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>Servicio de interés</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white'
                    >
                      <option value=''>Selecciona un servicio</option>
                      <option value='carga-gas'>Carga de Gas</option>
                      <option value='diagnostico'>Diagnóstico</option>
                      <option value='fuga'>Detección de Fuga</option>
                      <option value='compresor'>Reparación de Compresor</option>
                      <option value='sanitizacion'>Sanitización</option>
                      <option value='otro'>Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>Mensaje</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder='Describe tu problema o consulta...'
                      className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none'
                    />
                  </div>

                  {/* Cloudflare Turnstile (invisible) */}
                  <TurnstileWidget containerRef={containerRef} />
                  {turnstileError && (
                    <p className='text-sm text-red-600'>{turnstileError}</p>
                  )}

                  <button
                    type='submit'
                    disabled={sending}
                    className='w-full bg-secondary hover:bg-secondary/90 disabled:bg-gray-300 text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2'
                  >
                    {sending ? (
                      <span>Enviando...</span>
                    ) : (
                      <>
                        <Send className='w-5 h-5' />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Mapa */}
      <MapaCobertura />

    </div>
  )
}
