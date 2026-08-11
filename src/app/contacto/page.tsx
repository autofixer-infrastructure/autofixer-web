import type { Metadata } from 'next'
import ClientPage from './ClientPage'

export const metadata: Metadata = {
  title: 'Contacto — Autofixer Santiago | WhatsApp +56 9 3507 5600',
  description: 'Contacta a Autofixer por WhatsApp o formulario. Servicio de aire acondicionado automotriz a domicilio en Santiago. Respuesta en menos de 2 horas.',
  alternates: { canonical: 'https://autofixer.cl/contacto' },
  openGraph: {
    title: 'Contacto — Autofixer Santiago | WhatsApp +56 9 3507 5600',
    description: 'Hablemos por WhatsApp +56 9 3507 5600. Servicio de A/C automotriz a domicilio en Santiago. Diagnóstico el mismo día.',
    url: 'https://autofixer.cl/contacto',
    siteName: 'Autofixer',
    locale: 'es_CL',
    type: 'website',
  
    images: [
      {
        url: 'https://autofixer.cl/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contacto Autofixer',
      },
    ],
  },
}

export default function Page() {
  return <ClientPage />
}
