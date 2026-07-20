'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Loader2, CheckCircle } from 'lucide-react'

export default function ContactoPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+56 9 0000 0000',
      href: 'tel:+56900000000',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+56 9 0000 0000',
      href: 'https://wa.me/56900000000',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contacto@autofixer.cl',
      href: 'mailto:contacto@autofixer.cl',
    },
    {
      icon: MapPin,
      label: 'Dirección Base',
      value: 'Fray Camilo Enrique 655, Recoleta',
      href: null,
    },
    {
      icon: Clock,
      label: 'Horario',
      value: 'Lunes a Viernes: 8AM - 7PM',
      href: null,
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="badge bg-white/10 text-white mb-4">Contacto</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-white/80">
              ¿Tienes dudas o necesitas ayuda? Estamos aquí para asistirte. 
              Contáctanos por teléfono, WhatsApp o email.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {contactInfo.map((info) => (
              <div key={info.label} className="card p-6 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                {info.href ? (
                  <a 
                    href={info.href}
                    className="font-medium text-gray-900 hover:text-secondary transition-colors"
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="font-medium text-gray-900">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envíanos un mensaje
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Te responderemos dentro de las próximas 24 horas.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-outline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Nombre *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="form-input"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="form-input"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Teléfono</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input"
                        placeholder="+56 9 1234 5678"
                      />
                    </div>
                    <div>
                      <label className="form-label">Asunto *</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="form-input"
                      >
                        <option value="">Selecciona un tema</option>
                        <option value="cotizacion">Solicitar cotización</option>
                        <option value="soporte">Soporte post-venta</option>
                        <option value="quejas">Reclamo o sugerencia</option>
                        <option value="alianza">Alianzas comerciales</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="form-label">Mensaje *</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="form-input"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn btn-secondary btn-lg w-full"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map / Info */}
            <div className="space-y-8">
              <div className="bg-gray-100 rounded-2xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.1234567890!2d-70.6400000!3d-33.4400000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI2JzI0LjQiUyA3MMKwMzgnMjQuNCJX!5e0!3m2!1sen!2scl!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Autofixer Location"
                />
              </div>
              
              <div className="card p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  ¿Prefieres una respuesta más rápida?
                </h3>
                <p className="text-gray-600 mb-4">
                  Contáctanos directamente por WhatsApp para una respuesta inmediata.
                </p>
                <a 
                  href="https://wa.me/56900000000"
                  className="btn btn-whatsapp w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chatear por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
