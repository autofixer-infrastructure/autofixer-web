'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

/* ─── Inline Icons ─── */
function StarIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
function ShieldIcon({ size = 28, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
function ClockIcon({ size = 28, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
function AwardIcon({ size = 28, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  )
}
function CheckCircleIcon({ size = 28, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

interface Review {
  rating: number
  text: string
  author: string
  time: string
}

interface ReviewsData {
  success: boolean
  found: boolean
  reason?: string
  place?: {
    id: string
    name: string
    rating?: number
    reviewCount?: number
    address?: string
    phone?: string
    website?: string
    googleMapsUrl?: string
  }
  reviews?: Review[]
}

type State =
  | { kind: 'loading' }
  | { kind: 'reviews'; data: ReviewsData }
  | { kind: 'fallback' }

export function GoogleReviewsSection() {
  const [state, setState] = useState<State>({ kind: 'loading' })

  useEffect(() => {
    let cancelled = false
    fetch('/api/reviews')
      .then((r) => r.json() as Promise<ReviewsData>)
      .then((data) => {
        if (cancelled) return
        if (data.found && data.reviews && data.reviews.length > 0 && data.place?.rating) {
          setState({ kind: 'reviews', data })
        } else {
          setState({ kind: 'fallback' })
        }
      })
      .catch(() => {
        if (!cancelled) setState({ kind: 'fallback' })
      })
    return () => {
      cancelled = true
    }
  }, [])

  // ── Loading: mostrar fallback honesto mientras carga (no skeletons con reseñas) ──
  if (state.kind === 'loading' || state.kind === 'fallback') {
    return <FallbackSection />
  }

  // ── Reviews reales ──
  const { data } = state
  const rating = data.place!.rating!
  const count = data.place!.reviewCount || 0
  const stars = Math.round(rating)

  return (
    <section className="py-16 md:py-24 bg-white" id="resenas">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
            <StarIcon size={16} className="text-yellow-500" />
            <span>Verificado por Google</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-black">
            Lo que Dicen Nuestros Clientes
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon
                  key={i}
                  size={22}
                  className={i <= stars ? 'text-yellow-400' : 'text-gray-600'}
                />
              ))}
            </div>
            <span className="font-heading font-bold text-xl text-brand-black">
              {rating.toFixed(1)}
            </span>
            <span className="text-brand-gray text-sm">
              ({count} {count === 1 ? 'reseña' : 'reseñas'} en Google)
            </span>
          </div>
          {data.place!.googleMapsUrl && (
            <a
              href={data.place!.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-brand-blue hover:underline"
            >
              Ver todas las reseñas en Google Maps →
            </a>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.reviews!.slice(0, 6).map((r, i) => (
            <article
              key={i}
              className="bg-brand-silver rounded-2xl p-6 border border-gray-100 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <StarIcon
                    key={s}
                    size={14}
                    className={s <= r.rating ? 'text-yellow-400' : 'text-gray-600'}
                  />
                ))}
              </div>
              <p className="text-brand-gray text-sm leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="font-semibold text-brand-black text-sm">{r.author}</p>
                {r.time && (
                  <p className="text-brand-gray text-xs mt-0.5">{r.time}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FallbackSection() {
  return (
    <section className="py-16 md:py-24 bg-white" id="resenas">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-black">
            Por Qué Confiar en Autofixer
          </h2>
          <p className="mt-3 text-brand-gray text-base max-w-2xl mx-auto">
            Estos son los compromisos reales que respaldan cada servicio que entregamos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TrustCard
            icon={<ShieldIcon className="text-brand-blue" />}
            title="Garantía Escrita 90 Días"
            desc="Cada servicio incluye garantía documentada. Si el problema vuelve dentro del plazo, volvemos sin costo."
          />
          <TrustCard
            icon={<ClockIcon className="text-brand-blue" />}
            title="Respuesta en Menos de 1 Hora"
            desc="Atendemos de lunes a sábado en todo Santiago. Te confirmamos hora exacta por WhatsApp."
          />
          <TrustCard
            icon={<AwardIcon className="text-brand-blue" />}
            title="Técnicos Certificados"
            desc="Especialistas en aire acondicionado automotriz. Manejo certificado de gases R134a y R1234yf."
          />
          <TrustCard
            icon={<CheckCircleIcon className="text-brand-blue" />}
            title="Diagnóstico Transparente"
            desc="Te explicamos el problema en lenguaje simple antes de cotizar. Sin sorpresas ni cargos ocultos."
          />
        </div>

        <div className="mt-12 bg-brand-silver rounded-2xl p-6 md:p-8 text-center">
          <h3 className="font-heading font-bold text-xl text-brand-black mb-2">
            ¿Ya Trabajaste con Nosotros?
          </h3>
          <p className="text-brand-gray text-sm max-w-xl mx-auto mb-5">
            Tu opinión nos ayuda a mejorar. Si realizaste un servicio, déjanos tu experiencia
            y ayúdanos a crecer.
          </p>
          <Link
            href="/contacto"
            className="btn-primary inline-flex items-center gap-2"
          >
            Dejar mi Opinión
          </Link>
        </div>
      </div>
    </section>
  )
}

function TrustCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="bg-brand-silver rounded-2xl p-6 border border-gray-100 text-center h-full flex flex-col items-center">
      <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-body font-semibold text-base text-brand-black mb-2">{title}</h3>
      <p className="text-brand-gray text-sm leading-relaxed">{desc}</p>
    </div>
  )
}
