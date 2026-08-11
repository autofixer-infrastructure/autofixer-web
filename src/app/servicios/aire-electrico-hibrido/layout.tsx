import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicio A/C para Autos Eléctricos e Híbridos Santiago | Autofixer',
  description: 'Servicio especializado de aire acondicionado para autos eléctricos e híbridos. Técnicos certificados en sistemas de alta tensión. Servicio a domicilio en Santiago.',
  alternates: { canonical: 'https://autofixer.cl/servicios/aire-electrico-hibrido' },
  openGraph: {
    url: 'https://autofixer.cl/servicios/aire-electrico-hibrido',
    title: 'Servicio A/C para Autos Eléctricos e Híbridos Santiago | Autofixer',
    description: 'Servicio especializado de aire acondicionado para autos eléctricos e híbridos. Técnicos certificados en sistemas de alta tensión. Servicio a domicilio en Santiago.',
  
    images: [
      {
        url: 'https://autofixer.cl/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Servicio de A/C para Vehiculos Hibridos y Electricos | Autofixer',
      },
    ],
},
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
