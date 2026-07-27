'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X, Calculator, ChevronRight, Lock, User, Mail, Phone } from 'lucide-react'

interface CTASectionProps {
  title?: string
  subtitle?: string
  showPrices?: boolean
  variant?: 'default' | 'prominent' | 'inline'
  className?: string
}

export function CTASection({ 
  title = "¿-listos-para-mejorar-tu-aire-acondicionado?",
  subtitle = "Solicita-tu-cotización-ahora-y-recibe-atención-en-menos-de-2-horas.",
  showPrices = true,
  variant = 'default',
  className = ''
}: CTASectionProps) {
  const prices = [
    { service: 'Diagnóstico', price: 'Desde $15.000', note: '+ desplazamiento' },
    { service: 'Carga Simple R134a', price: '$35.000', note: '+ desplazamiento' },
    { service: 'Carga Doble R134a', price: '$70.000', note: '+ desplazamiento' },
    { service: 'Sanitización Sedán', price: '$45.000', note: '+ desplazamiento' },
  ]

  if (variant === 'inline') {
    return (
      <div className={`bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 p-6 rounded-r-lg my-8 ${className}`}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <Calculator className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 mb-2">
              {title}
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/cotizar"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Cotizar Ahora
                <ChevronRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+56912345678"
                className="inline-flex items-center gap-2 border border-blue-300 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Llamar
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className={`py-16 ${variant === 'prominent' ? 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white' : 'bg-gray-50'} ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${variant === 'prominent' ? 'text-white' : 'text-gray-900'}`}>
              {title}
            </h2>
            <p className={`text-lg ${variant === 'prominent' ? 'text-blue-100' : 'text-gray-600'}`}>
              {subtitle}
            </p>
          </div>

          {showPrices && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {prices.map((item) => (
                <div
                  key={item.service}
                  className={`p-4 rounded-xl text-center ${variant === 'prominent' ? 'bg-white/10 backdrop-blur-sm' : 'bg-white border border-gray-200'}`}
                >
                  <p className={`text-sm mb-1 ${variant === 'prominent' ? 'text-blue-200' : 'text-gray-500'}`}>
                    {item.service}
                  </p>
                  <p className={`text-xl font-bold ${variant === 'prominent' ? 'text-white' : 'text-blue-600'}`}>
                    {item.price}
                  </p>
                  <p className={`text-xs ${variant === 'prominent' ? 'text-blue-300' : 'text-gray-400'}`}>
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cotizar"
              className={`inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl text-lg transition-colors ${
                variant === 'prominent'
                  ? 'bg-white text-blue-900 hover:bg-blue-50'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <Calculator className="w-5 h-5" />
              Cotizar Ahora
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl text-lg transition-colors ${
                variant === 'prominent'
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          <p className={`text-center text-sm mt-6 ${variant === 'prominent' ? 'text-blue-200' : 'text-gray-500'}`}>
            <Lock className="w-4 h-4 inline mr-1" />
            Para ver precios exactos con desplazamiento, regístrate gratis con tu correo y teléfono.
          </p>
        </div>
      </div>
    </section>
  )
}

interface CTAInlineProps {
  service: string
  serviceSlug: string
  price?: string
  className?: string
}

export function CTAInline({ service, serviceSlug, price, className = '' }: CTAInlineProps) {
  return (
    <div className={`bg-secondary/5 border-2 border-secondary/20 rounded-xl p-6 my-8 ${className}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-gray-900 mb-1">
            ¿Problemas con tu {service}?
          </h4>
          <p className="text-gray-600 text-sm">
            Solicita atención profesional a domicilio. Diagnóstico + servicio con garantía de 90 días.
            {price && <span className="font-semibold text-secondary ml-2">Desde {price}</span>}
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href={`/cotizar?service=${serviceSlug}`}
            className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
          >
            Cotizar {service}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

interface CTALoginPromptProps {
  currentPage: string
}

export function CTALoginPrompt({ currentPage }: CTALoginPromptProps) {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 my-12 shadow-xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
            <Calculator className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">
              ¿Quieres saber el precio exacto?
            </h3>
            <p className="text-blue-100 text-sm">
              Regístrate gratis para ver precios con desplazamiento incluido según tu comuna.
            </p>
          </div>
        </div>
        
        {!showForm ? (
          <div className="flex gap-3">
            <Link
              href="/auth/login"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              <User className="w-5 h-5" />
              Iniciar Sesión
            </Link>
            <Link
              href="/auth/register"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              Registrarse
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        ) : (
          <div className="w-full md:w-auto">
            <p className="text-sm text-blue-100 mb-2">
              Ingresa tu email y te enviamos los precios:
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 md:w-64 px-4 py-2 rounded-lg text-gray-900 placeholder:text-gray-500"
              />
              <button
                type="submit"
                className="bg-secondary hover:bg-secondary/90 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
