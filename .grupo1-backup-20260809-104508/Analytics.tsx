"use client"

import { useEffect } from "react"
import Script from "next/script"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-BXNRLDSB2Y"

export function Analytics() {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Inicializar dataLayer + gtag stub ANTES de que cargue gtag.js
    // Esto permite que page_view se registre inmediatamente cuando se dispara gtag('config', ...)
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments)
    }
    window.gtag("js", new Date())

    // ⚠️ CONSENT MODE v2 — Sprint 18
    // Defaults: NO trackear nada hasta que user consienta.
    // El CookieBanner.tsx llama gtag('consent', 'update', {...}) al aceptar/rechazar.
    // wait_for_update: 500ms = tiempo que gtag espera el signal antes de aplicar defaults.
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    })

    // Si el user ya consintió (vino de sesión anterior), respetamos su decisión.
    // Si rechazó o nunca interactuó: NO configuramos GA4 (no se setea cookie, no se dispara page_view).
    const priorConsent = localStorage.getItem("cookie_consent")
    if (priorConsent === "accepted") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      })
      window.gtag("config", GA_ID, {
        page_path: window.location.pathname,
      })
    } else if (priorConsent === "rejected") {
      // User rechazó explícitamente. NO configurar GA4, NO cookies, NO page_view.
      console.log("[Analytics] Tracking denied by user (prior consent=rejected)")
    } else {
      // Sin decisión previa: GA4 en modo cookieless (pings sin identificar usuario)
      window.gtag("config", GA_ID, {
        page_path: window.location.pathname,
      })
    }

    // ---- Listeners de eventos custom ----
    const trackEvent = (eventName: string) => {
      if (typeof window.gtag === "function") {
        window.gtag("event", eventName, {
          event_category: "conversion",
          event_label: window.location.pathname,
        })
      }
    }

    // Click en WhatsApp (wa.me y whatsapp.com)
    const whatsappLinks = document.querySelectorAll<HTMLAnchorElement>(
      'a[href*="wa.me"], a[href*="whatsapp.com"]'
    )
    const whatsappHandlers: Array<{ el: HTMLAnchorElement; fn: (e: Event) => void }> = []
    whatsappLinks.forEach((link) => {
      const handler = (_e: Event) => {
        trackEvent("click_whatsapp")
      }
      link.addEventListener("click", handler)
      whatsappHandlers.push({ el: link, fn: handler })
    })

    // Click en telefono
    const phoneLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="tel:"]')
    const phoneHandlers: Array<{ el: HTMLAnchorElement; fn: (e: Event) => void }> = []
    phoneLinks.forEach((link) => {
      const handler = (_e: Event) => {
        trackEvent("click_phone")
      }
      link.addEventListener("click", handler)
      phoneHandlers.push({ el: link, fn: handler })
    })

    return () => {
      whatsappHandlers.forEach(({ el, fn }) => el.removeEventListener("click", fn))
      phoneHandlers.forEach(({ el, fn }) => el.removeEventListener("click", fn))
    }
  }, [])

  if (!GA_ID) return null

  return (
    <>
      {/* gtag.js inline async - carga inmediata, dispara pageview correcto */}
      <Script
        id="ga-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        async
      />
    </>
  )
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

