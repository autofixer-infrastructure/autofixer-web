import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Cobertura de Servicio A/C a Domicilio | Santiago y Comunas",
  description: "Servicio de aire acondicionado automotriz a domicilio en Santiago y comunas: Las Condes, Vitacura, Providencia, Maipu, La Florida y mas.",
  alternates: {
    canonical: "https://autofixer.cl/cobertura",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
