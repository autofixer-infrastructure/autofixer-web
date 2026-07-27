import { Metadata } from 'next'
export const revalidate = 3600 // 1 hour for pricing pages

export const metadata: Metadata = {
  title: "Precios de Carga de Aire Acondicionado Auto | Tarifas Transparentes",
  description: "Precios referenciales de carga de gas, diagnostico y reparacion de aire acondicionado automotriz en Santiago. Tarifas claras sin letra pequena.",
  alternates: {
    canonical: "https://autofixer.cl/precios-referenciales",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
