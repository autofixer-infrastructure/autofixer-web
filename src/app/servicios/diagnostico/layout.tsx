import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diagnóstico A/C Automotriz con Escáner en Santiago | Autofixer',
  description: 'Diagnóstico profesional del aire acondicionado de tu auto con escáner y manómetros. Detectamos la falla exacta en 20 minutos. Servicio a domicilio en Santiago. Cotización cerrada.',
  alternates: { canonical: 'https://autofixer.cl/servicios/diagnostico' },
  openGraph: {
    url: 'https://autofixer.cl/servicios/diagnostico',
    title: 'Diagnóstico A/C Automotriz con Escáner en Santiago | Autofixer',
    description: 'Diagnóstico profesional del aire acondicionado de tu auto con escáner y manómetros. Detectamos la falla exacta en 20 minutos. Servicio a domicilio en Santiago. Cotización cerrada.',
  
    images: [
      {
        url: 'https://autofixer.cl/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Diagnostico Profesional de A/C Automotriz | Autofixer',
      },
    ],
},
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
