import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sanitización Aire Acondicionado Auto Santiago | Autofixer',
  description: 'Sanitización profesional del sistema de aire acondicionado de tu auto. Eliminamos hongos, bacterias y malos olores en 60 minutos. Servicio a domicilio en Santiago.',
  alternates: { canonical: 'https://autofixer.cl/servicios/sanitizacion' },
  openGraph: {
    url: 'https://autofixer.cl/servicios/sanitizacion',
    title: 'Sanitización Aire Acondicionado Auto Santiago | Autofixer',
    description: 'Sanitización profesional del sistema de aire acondicionado de tu auto. Eliminamos hongos, bacterias y malos olores en 60 minutos. Servicio a domicilio en Santiago.',
  
    images: [
      {
        url: 'https://autofixer.cl/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sanitizacion Antibacterial de A/C Automotriz | Autofixer',
      },
    ],
},
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
