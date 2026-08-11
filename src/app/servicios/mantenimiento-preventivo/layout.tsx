import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mantenimiento Preventivo Aire Acondicionado Auto | Autofixer',
  description: 'Mantenimiento preventivo completo del A/C de tu auto: revisión de filtros, presiones, compressor y sanitización. Evita fallas futuras. Servicio a domicilio en Santiago.',
  alternates: { canonical: 'https://autofixer.cl/servicios/mantenimiento-preventivo' },
  openGraph: {
    url: 'https://autofixer.cl/servicios/mantenimiento-preventivo',
    title: 'Mantenimiento Preventivo Aire Acondicionado Auto | Autofixer',
    description: 'Mantenimiento preventivo completo del A/C de tu auto: revisión de filtros, presiones, compressor y sanitización. Evita fallas futuras. Servicio a domicilio en Santiago.',
  
    images: [
      {
        url: 'https://autofixer.cl/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mantenimiento Preventivo de A/C Automotriz a Domicilio | Autofixer',
      },
    ],
},
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
