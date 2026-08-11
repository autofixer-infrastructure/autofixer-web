'use client'

import { useEffect } from 'react'

interface ServiceViewTrackerProps {
  slug: string
  serviceName?: string
  servicePrice?: number
}

export default function ServiceViewTracker({ slug, serviceName, servicePrice }: ServiceViewTrackerProps) {
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'view_item', {
        event_category: 'engagement',
        event_label: slug,
        items: [
          {
            item_id: slug,
            item_name: serviceName || slug,
            item_category: 'servicio_ac',
            ...(servicePrice ? { price: servicePrice, item_variant: String(servicePrice) } : {}),
          },
        ],
      })
    }
  }, [slug, serviceName, servicePrice])

  return null
}
