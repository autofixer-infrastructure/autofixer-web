import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Nuestro Proceso de Servicio Técnico a Domicilio",
  description: "Asi funciona nuestro servicio de aire acondicionado automotriz a domicilio: diagnostico, presupuesto, reparacion y garantia en Santiago.",
  alternates: {
    canonical: "https://autofixer.cl/como-trabajamos",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
