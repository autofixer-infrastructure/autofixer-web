import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Preguntas Frecuentes sobre Climatización Automotriz",
  description: "Resuelve tus dudas sobre carga de gas, diagnostico y reparacion de aire acondicionado automotriz. 90 dias de garantia en todos los servicios.",
  alternates: {
    canonical: "https://autofixer.cl/preguntas-frecuentes",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
