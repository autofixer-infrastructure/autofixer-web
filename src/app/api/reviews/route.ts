import { NextResponse } from 'next/server'
import { fetchAutofixerReviews } from '@/lib/google/places'

/**
 * GET /api/reviews
 *
 * Devuelve las reseñas reales de Google Places si la ficha está indexada.
 * Si no, devuelve { found: false, reason } para que el cliente renderice
 * trust signals honestos (sin reseñas inventadas).
 *
 * Cache 24h (Next.js + en-memoria en lib/google-places.ts)
 */
export const revalidate = 86400 // 24h

export async function GET() {
  const result = await fetchAutofixerReviews()
  return NextResponse.json(
    { success: true, ...result },
    {
      headers: {
        // Permitir caching también en el edge/CDN por 24h
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
      },
    }
  )
}
