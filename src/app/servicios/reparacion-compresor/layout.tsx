import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reparación y Cambio de Compresor A/C Auto Santiago | Autofixer',
  description: 'Reparación y reemplazo de compresor de aire acondicionado automotriz. Compresores originales y alternativos con garantía. Servicio a domicilio en Santiago con técnicos certificados.',
  alternates: { canonical: 'https://autofixer.cl/servicios/reparacion-compresor' },
  openGraph: {
    url: 'https://autofixer.cl/servicios/reparacion-compresor',
    title: 'Reparación y Cambio de Compresor A/C Auto Santiago | Autofixer',
    description: 'Reparación y reemplazo de compresor de aire acondicionado automotriz. Compresores originales y alternativos con garantía. Servicio a domicilio en Santiago con técnicos certificados.',
  
    images: [
      {
        url: 'https://autofixer.cl/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Reparacion de Compresor de A/C Automotriz | Autofixer',
      },
    ],
},
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
