import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Garantía y Especialización en Climatización Automotriz",
  description: "Por que elegir Autofixer: tecnicos especializados, garantia de 90 dias, repuestos originales y anos de experiencia en climatizacion automotriz.",
  alternates: {
    canonical: "https://autofixer.cl/por-que-confiar",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
