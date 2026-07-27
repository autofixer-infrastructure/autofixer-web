import { Metadata } from 'next'
export const revalidate = 3600 // 1 hour for service pages

export const metadata: Metadata = {
  title: 'Servicios de Aire Acondicionado Automotriz | Carga, Diagnostico y Reparacion | Autofixer',
  description: 'Carga de gas, diagnostico con escaner, deteccion de fugas, cambio de compresor y sanitizacion. Servicio a domicilio en toda Santiago.',
  alternates: { canonical: 'https://autofixer.cl/servicios' },
  openGraph: {
    title: 'Servicios de Aire Acondicionado Automotriz | Autofixer',
    description: 'Carga de gas, diagnostico, deteccion de fugas, cambio de compresor y sanitizacion a domicilio en Santiago.',
    url: 'https://autofixer.cl/servicios',
    siteName: 'Autofixer',
    locale: 'es_CL',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Autofixer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios de A/C Automotriz | Autofixer',
    description: 'Carga de gas, diagnostico, deteccion de fugas, cambio de compresor y sanitizacion a domicilio.',
    images: ['/og-image.png'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
