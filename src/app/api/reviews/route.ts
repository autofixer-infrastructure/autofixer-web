import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN — Sustituir por tu clave real de Google Places API
// en el archivo .env.local como GOOGLE_PLACES_API_KEY
//
// PLACE_ID de Autofixer en Google Maps:
// Para obtenerlo: busca "Autofixer" en Google Maps → Comparte → Copiar enlace
// El place ID está en la URL: .../place/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/
// ─────────────────────────────────────────────────────────────────────────────
const PLACE_ID = process.env.GOOGLE_PLACES_PLACE_ID ?? 'YOUR_PLACE_ID'
const API_KEY = process.env.GOOGLE_PLACES_API_KEY ?? 'YOUR_API_KEY'

const CACHE_DURATION = 60 * 60 * 24 // 24 horas en segundos (86400s = ISR compatible)
const GOOGLE_PLACES_URL = `https://maps.googleapis.com/maps/api/place/details/json`

interface GooglePlaceResult {
  rating?: number
  user_ratings_total?: number
  reviews?: Array<{
    author_name: string
    rating: number
    text: string
    relative_time_description: string
    profile_photo_url?: string
  }>
}

interface CachedData {
  data: {
    rating: number
    reviewCount: number
    reviews: GooglePlaceResult['reviews']
    lastFetched: string
  }
  headers: {
    'Cache-Control': string
  }
}

// Caché en memoria del proceso Node.js (válido mientras PM2 no reinicie)
let cache: CachedData | null = null

export async function GET() {
  const now = Date.now()

  // ── HIT: devolver caché si es reciente ──
  if (cache && now - new Date(cache.data.lastFetched).getTime() < CACHE_DURATION * 1000) {
    return NextResponse.json(cache.data, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
        'Content-Type': 'application/json',
      },
    })
  }

  // ── MISS: pedir a Google Places ──
  try {
    const params = new URLSearchParams({
      place_id: PLACE_ID,
      fields: 'rating,user_ratings_total,reviews',
      key: API_KEY,
    })

    const res = await fetch(`${GOOGLE_PLACES_URL}?${params.toString()}`, {
      next: { revalidate: CACHE_DURATION }, // ISR de Next.js
    })

    if (!res.ok) {
      console.error(`Google Places API error: ${res.status}`)
      // Si falla la API, devolver datos en caché aunque estén vencidos
      if (cache) return NextResponse.json(cache.data, { status: 200 })
      return NextResponse.json({ error: 'No se pudo obtener las reseñas' }, { status: 502 })
    }

    const json = await res.json()
    const result: GooglePlaceResult = json.result ?? {}

    const reviewsData = {
      rating: result.rating ?? 0,
      reviewCount: result.user_ratings_total ?? 0,
      // Traemos máximo 5 reseñas más recientes y útiles
      reviews: (result.reviews ?? [])
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5)
        .map((r) => ({
          author_name: r.author_name,
          rating: r.rating,
          text: r.text,
          relative_time_description: r.relative_time_description,
          profile_photo_url: r.profile_photo_url,
        })),
      lastFetched: new Date().toISOString(),
    }

    // ── Guardar en caché local ──
    cache = {
      data: reviewsData,
      headers: {
        'Cache-Control': `public, s-maxage=${CACHE_DURATION}, stale-while-revalidate=43200`,
      },
    }

    // Revalidar la página de inicio donde se muestra el rating
    revalidatePath('/')

    return NextResponse.json(reviewsData, {
      headers: {
        'Cache-Control': `public, s-maxage=${CACHE_DURATION}, stale-while-revalidate=43200`,
        'Content-Type': 'application/json',
      },
    })
  } catch (err) {
    console.error('Reviews API error:', err)
    if (cache) return NextResponse.json(cache.data, { status: 200 })
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
