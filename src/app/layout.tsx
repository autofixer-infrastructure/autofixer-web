import type { Metadata } from 'next'
export const revalidate = 86400 // 24 hours for institutional pages
import { Inter, Outfit } from 'next/font/google'
import { Toaster } from 'sonner'
import '@/styles/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SchemaMarkup } from '@/components/layout/SchemaMarkup'
import FloatingCTAs from '@/components/FloatingCTAs'
import CookieBanner from '@/components/CookieBanner'
import { Analytics } from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const heading = Outfit({ subsets: ['latin'], variable: '--font-heading', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://autofixer.cl'),
  title: {
    default: 'Autofixer — Carga de Gas y Reparación de Aire Acondicionado Automotriz a Domicilio en Santiago',
    template: '%s | Autofixer',
  },
  description: 'Servicio de aire acondicionado automotriz a domicilio en Santiago. Diagnóstico gratis si contratas. Carga de gas R134a desde $35.000. Técnicos certificados. Garantía 90 días.',
  authors: [{ name: 'Autofixer SPA' }],
  creator: 'Autofixer',
  publisher: 'Autofixer SPA',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://autofixer.cl',
    siteName: 'Autofixer',
    title: 'Autofixer — Carga de Gas y Reparación de A/C Automotriz a Domicilio',
    description: 'Servicio de aire acondicionado automotriz a domicilio en Santiago. Carga de gas R134a desde $35.000. Técnicos certificados. Garantía 90 días.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Autofixer - Servicio de AC automotriz a domicilio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autofixer — AC Automotriz a Domicilio en Santiago',
    description: 'Carga de gas, diagnóstico y reparación de aire acondicionado automotriz a domicilio en Santiago.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': 'https://autofixer.cl/#business',
  name: 'Autofixer',
  image: [
    { '@type': 'ImageObject', 'url': 'https://autofixer.cl/og-image.png', 'width': 1200, 'height': 630 },
    { '@type': 'ImageObject', 'url': 'https://autofixer.cl/icon.svg', 'width': 512, 'height': 512 },
  ],
  logo: 'https://autofixer.cl/icon.svg',
  description: 'Servicio de aire acondicionado automotriz a domicilio en Santiago, Region Metropolitana, Chile. Especialistas en carga de gas R134a y R1234yf, deteccion de fugas, cambio de compresor y sanitizacion. Diagnostico gratis si contratas.',
  url: 'https://autofixer.cl',
  telephone: '+56935075600',
  email: 'contacto@autofixer.cl',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Santiago',
    addressRegion: 'Region Metropolitana',
    addressCountry: 'CL',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1'
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Carlos M.' },
      datePublished: '2026-06-15',
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: 'Excelente servicio de aire acondicionado a domicilio. Llegaron a mi oficina en Nunoa, diagnosticaron la fuga en 10 minutos y la repararon el mismo dia. La garantia de 90 dias se cumplio al 100 por ciento.'
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Andrea R.' },
      datePublished: '2026-05-20',
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: 'Muy profesionales. La carga de gas R1234yf de mi SUV la hicieron con equipos de ultima generacion. Precio justo y servicio impecable. Los recomiendo para cualquier comuna de Santiago.'
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Pedro S.' },
      datePublished: '2026-04-10',
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: 'Contrate la sanitizacion del sistema de aire por malos olores. El tecnico explico todo el proceso, uso productos certificados y el olor desaparecio completamente. Servicio a domicilio sin mover el auto.'
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Maria J.' },
      datePublished: '2026-03-22',
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: 'Mi compresor de aire acondicionado dejo de funcionar de la noche a la manana. Llame a Autofixer, llegaron a Las Condes en 30 minutos, cambiaron el embrague del compresor y quedo como nuevo. Precio cerrado sin sorpresas.'
    }
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.4489,
    longitude: -70.6693,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  areaServed: {
    '@type': 'State',
    name: 'Region Metropolitana de Santiago',
    containsPlace: [
      { '@type': 'City', name: 'Las Condes' },
      { '@type': 'City', name: 'Providencia' },
      { '@type': 'City', name: 'Nunoa' },
      { '@type': 'City', name: 'La Florida' },
      { '@type': 'City', name: 'Maipu' },
      { '@type': 'City', name: 'Santiago' },
      { '@type': 'City', name: 'Puente Alto' },
      { '@type': 'City', name: 'Vitacura' },
      { '@type': 'City', name: 'San Bernardo' },
      { '@type': 'City', name: 'La Reina' },
      { '@type': 'City', name: 'Estacion Central' },
      { '@type': 'City', name: 'Peñalolen' },
    ],
  },
  priceRange: '$$',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de aire acondicionado automotriz',
    url: 'https://autofixer.cl/servicios',
  },
  hasMap: 'https://www.google.com/maps/search/?api=1&query=Autofixer+aire+acondicionado+Santiago+Chile',
  sameAs: [
    'https://www.facebook.com/autofixerchile',
    'https://www.instagram.com/autofixer.cl',
    'https://www.tiktok.com/@autofixer.cl',
  ],
  potentialAction: {
    '@type': 'ReserveAction',
    target: { '@type': 'EntryPoint', 'urlTemplate': 'https://autofixer.cl/cotizar', 'actionPlatform': 'http://schema.org/DesktopWebPlatform' },
    result: { '@type': 'Reservation', 'name': 'Reserva de servicio de AC automotriz' },
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es' className={`${inter.variable} ${heading.variable}`}>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/icon.svg' type='image/svg+xml' />
        <meta name='AI-Accessibility' content='public' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
        <meta name='X-Frame-Options' content='DENY' />
        <meta name='X-Content-Type-Options' content='nosniff' />
        <meta name='Referrer-Policy' content='strict-origin-when-cross-origin' />
      </head>
      <body className='min-h-screen flex flex-col'>
        <SchemaMarkup schema={organizationSchema} />
        <Analytics />
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
        <FloatingCTAs />
        <CookieBanner />
        <Toaster position='bottom-right' toastOptions={{ className: 'bg-white shadow-elevated rounded-xl' }} />
      </body>
    </html>
  )
}
