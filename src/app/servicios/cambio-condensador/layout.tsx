import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cambio de Condensador A/C Automotriz Santiago | Autofixer',
  description: 'Reemplazo de condensador de aire acondicionado automotriz. Condensadores originales para todas las marcas. Servicio a domicilio en Santiago con técnicos certificados.',
  alternates: { canonical: 'https://autofixer.cl/servicios/cambio-condensador' },
  openGraph: {
    url: 'https://autofixer.cl/servicios/cambio-condensador',
    title: 'Cambio de Condensador A/C Automotriz Santiago | Autofixer',
    description: 'Reemplazo de condensador de aire acondicionado automotriz. Condensadores originales para todas las marcas. Servicio a domicilio en Santiago con técnicos certificados.',
  
    images: [
      {
        url: 'https://autofixer.cl/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cambio de Condensador de A/C Automotriz | Autofixer',
      },
    ],
},
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
