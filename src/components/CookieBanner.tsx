'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-gray-900 text-white shadow-2xl border-t border-gray-700">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1 pr-4">
            <p className="text-sm text-gray-200 leading-relaxed">
              Utilizamos cookies propias y de terceros para mejorar la experiencia de navegacion,
              analizar el uso del sitio y mostrar publicidad personalizada.
              Al hacer clic en &quot;Aceptar&quot; consientes el uso de cookies.
              <a href="/politicas-de-privacidad" className="underline text-blue-300 hover:text-blue-200">
                Conoce nuestra politica de privacidad
              </a>.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={decline}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white border border-gray-600 rounded-lg transition-colors"
            >
              Rechazar
            </button>
            <button
              onClick={accept}
              className="px-5 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors shadow-md"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
