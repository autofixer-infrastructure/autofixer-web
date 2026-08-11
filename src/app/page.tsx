import type { Metadata } from 'next'
import ClientHome from './ClientHome'

export const metadata: Metadata = {
  title: 'Aire Acondicionado Auto a Domicilio Santiago | desde $35.000',
  description: 'Recarga de gas, diagnostico y reparacion de A/C automotriz a domicilio en Santiago. R134a desde $35.000. Garantia 90 dias. WhatsApp +56 9 3507 5600.',
  alternates: { canonical: 'https://autofixer.cl/' },
  openGraph: {
    title: 'Aire Acondicionado Auto a Domicilio Santiago | desde $35.000 | Autofixer',
    description: 'Recarga de gas y reparacion de A/C automotriz a domicilio en Santiago. R134a desde $35.000. Garantia 90 dias.',
    url: 'https://autofixer.cl/',
    siteName: 'Autofixer',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: 'https://autofixer.cl/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aire Acondicionado Auto a Domicilio Santiago | Autofixer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aire Acondicionado Auto a Domicilio Santiago | desde $35.000',
    description: 'Recarga de gas desde $35.000 en Santiago. Diagnostico GRATIS. Garantia 90 dias. Servicio a domicilio.',
  },
}

export default function Page() {
  return <ClientHome />
}

