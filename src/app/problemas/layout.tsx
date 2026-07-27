import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Diagnostico de Fallas en Aire Acondicionado de Autos | Soluciones",
  description: "Identifica y resuelve fallas comunes en el aire acondicionado de tu auto: perdida de gas, compresor danado, olor extrano y mas.",
  alternates: {
    canonical: "https://autofixer.cl/problemas",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
