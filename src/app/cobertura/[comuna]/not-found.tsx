import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Comuna no disponible</h1>
        <p className="text-slate-600 mb-6">
          Aún no tenemos cobertura activa en esta comuna. Estamos expandiéndonos constantemente, 
          contáctanos para evaluar tu caso.
        </p>
        <Link
          href="/cobertura/"
          className="inline-block px-6 py-3 rounded-xl bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition-colors"
        >
          Ver todas las comunas
        </Link>
      </div>
    </main>
  )
}
