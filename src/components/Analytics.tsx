'use client'

import { useEffect } from 'react'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export function Analytics() {
  useEffect(() => {
    if (!GA_ID) return

    // Load Google Analytics 4
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    script.async = true
    document.head.appendChild(script)

    // gtag config
    const gtagConfig = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}', {
        page_path: window.location.pathname,
      });
    `
    const gtagScript = document.createElement('script')
    gtagScript.text = gtagConfig
    document.head.appendChild(gtagScript)

    // Track WhatsApp clicks
    const trackWhatsApp = () => {
      window.gtag?.('event', 'click_whatsapp', {
        event_category: 'conversion',
        event_label: 'whatsapp_floating_cta',
      })
    }

    // Track phone clicks
    const trackPhone = () => {
      window.gtag?.('event', 'click_phone', {
        event_category: 'conversion',
        event_label: 'phone_floating_cta',
      })
    }

    document.querySelectorAll('a[href*="wa.me"]').forEach((el) => {
      el.addEventListener('click', trackWhatsApp)
    })
    document.querySelectorAll('a[href^="tel:"]').forEach((el) => {
      el.addEventListener('click', trackPhone)
    })
  }, [])

  return null
}

// Extend window for gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}
