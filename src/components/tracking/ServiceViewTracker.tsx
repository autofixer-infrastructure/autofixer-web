'use client'

import { useEffect } from 'react'
import { mapServiceToCategory } from '@/lib/gtag-helpers'

interface ServiceViewTrackerProps {
  slug: string
  serviceName?: string
  servicePrice?: number
}

export default function ServiceViewTracker({ slug, serviceName, servicePrice }: ServiceViewTrackerProps) {
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      const category = mapServiceToCategory(slug)
      window.gtag('event', 'view_item', {
        event_category: 'engagement',
        event_label: slug,
        service_slug: slug,
        service_category: category,
        items: [
          {
            item_id: slug,
            item_name: serviceName || slug,
            item_category: category,
            ...(servicePrice ? { price: servicePrice, item_variant: String(servicePrice) } : {}),
          },
        ],
      })
    }
  }, [slug, serviceName, servicePrice])

  return null
}
