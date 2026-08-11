import type { Metadata } from 'next'
import ClientPage from './ClientPage'

export const metadata: Metadata = {
  title: 'Cotizar Servicio de Aire Acondicionado Auto | Autofixer Santiago',
  description: 'Cotiza gratis tu servicio de aire acondicionado automotriz a domicilio en Santiago. Precios transparentes, sin costos ocultos. Diagnóstico gratis si contratas.',
  alternates: { canonical: 'https://autofixer.cl/cotizar' },
  openGraph: {
    title: 'Cotizar Servicio de Aire Acondicionado Auto | Autofixer Santiago',
    description: 'Cotización online transparente. Aire acondicionado automotriz a domicilio en Santiago. Carga de gas R134a/R1234yf, fugas, compresor. 90 días de garantía.',
    url: 'https://autofixer.cl/cotizar',
    siteName: 'Autofixer',
    locale: 'es_CL',
    type: 'website',
  
    images: [
      {
        url: 'https://autofixer.cl/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cotizar Servicio de A/C Automotriz',
      },
    ],
  },
}

export default function Page() {
  return <ClientPage />
}
