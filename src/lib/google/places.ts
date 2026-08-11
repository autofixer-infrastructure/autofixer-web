/**
 * Google Places API (New) - Cliente con cache 24h
 *
 * Estrategia:
 * 1. Cache en memoria (24h TTL) - evita gastar quota en cada page load
 * 2. Búsqueda dinámica por nombre - auto-actualizable cuando la ficha se indexe
 * 3. Si la ficha no existe aún - devuelve { found: false } con reason
 *
 * IMPORTANTE: Este módulo es SERVER-ONLY. Importa solo en route handlers
 * o en componentes async (Server Components).
 */

const CACHE_TTL_MS = 24 * 60 * 60 * 1000 // 24 horas

interface Place {
  id: string
  displayName?: { text: string }
  rating?: number
  userRatingCount?: number
  reviews?: Array<{
    rating: number
    text?: { text: string }
    originalText?: { text: string }
    authorAttribution?: { displayName: string; uri?: string }
    relativePublishTimeDescription?: string
    publishTime?: string
  }>
  formattedAddress?: string
  nationalPhoneNumber?: string
  websiteUri?: string
  googleMapsUri?: string
}

export interface ReviewsResult {
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
  reviews?: Array<{
    rating: number
    text: string
    author: string
    time: string
  }>
  cachedAt?: string
  cacheExpiresAt?: string
}

let cache: { data: ReviewsResult; timestamp: number } | null = null

const SEARCH_QUERY = 'Autofixer Reparación Aire Acondicionado Automotriz Domicilio Santiago'

/**
 * Busca la ficha de Autofixer en Google Places API (New) y cachea por 24h.
 * Si la ficha no está verificada o no aparece en Places API, devuelve { found: false, reason }
 */
export async function fetchAutofixerReviews(): Promise<ReviewsResult> {
  // 1. Cache hit
  if (cache && Date.now() - cache.timestamp < CACHE_TTL_MS) {
    return { ...cache.data, cacheExpiresAt: new Date(cache.timestamp + CACHE_TTL_MS).toISOString() }
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY
  if (!apiKey) {
    return { found: false, reason: 'no-api-key' }
  }

  try {
    // 2. Search by name (no CID, no place_id hardcodeado - robusto a verificaciones futuras)
    const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        // FieldMask: solo pedimos lo que vamos a mostrar
        'X-Goog-FieldMask': [
          'places.id',
          'places.displayName',
          'places.rating',
          'places.userRatingCount',
          'places.formattedAddress',
          'places.nationalPhoneNumber',
          'places.websiteUri',
          'places.googleMapsUri',
          'places.reviews',
        ].join(','),
      },
      body: JSON.stringify({
        textQuery: SEARCH_QUERY,
        maxResultCount: 1,
        languageCode: 'es',
        regionCode: 'CL',
      }),
    })

    if (!res.ok) {
      const errText = await res.text().catch(() => '')
      console.error('[google-places] searchText failed:', res.status, errText.slice(0, 200))
      return { found: false, reason: 'api-error', ...(process.env.NODE_ENV !== 'production' && { status: res.status, hint: errText.slice(0, 200) }) }
    }

    const data = await res.json()
    const place: Place | undefined = data.places?.[0]

    if (!place) {
      return { found: false, reason: 'place-not-indexed' }
    }

    // 3. Transformar a estructura limpia
    const reviews = (place.reviews || []).map((r) => ({
      rating: r.rating,
      text: r.text?.text || r.originalText?.text || '',
      author: r.authorAttribution?.displayName || 'Cliente',
      time: r.relativePublishTimeDescription || r.publishTime || '',
    }))

    const result: ReviewsResult = {
      found: true,
      place: {
        id: place.id,
        name: place.displayName?.text || 'Autofixer',
        rating: place.rating,
        reviewCount: place.userRatingCount,
        address: place.formattedAddress,
        phone: place.nationalPhoneNumber,
        website: place.websiteUri,
        googleMapsUrl: place.googleMapsUri,
      },
      reviews,
      cachedAt: new Date().toISOString(),
      cacheExpiresAt: new Date(Date.now() + CACHE_TTL_MS).toISOString(),
    }

    // 4. Cachear
    cache = { data: result, timestamp: Date.now() }
    return result
  } catch (error) {
    console.error('[google-places] exception:', error)
    return { found: false, reason: 'exception' }
  }
}

/** Invalida el cache (útil para tests) */
export function clearReviewsCache() {
  cache = null
}
