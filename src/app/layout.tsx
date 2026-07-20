import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Outfit } from 'next/font/google'
import { Toaster } from 'sonner'
import '@/styles/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SchemaMarkup } from '@/components/layout/SchemaMarkup'

// Font configuration
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const heading = Outfit({ 
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://autofixer.cl'),
  title: {
    default: 'Autofixer — Aire Acondicionado Automotriz a Domicilio en Santiago',
    template: '%s | Autofixer',
  },
  description: 'Servicio de aire acondicionado automotriz a domicilio en Santiago. Diagnóstico $25.000. Carga de gas desde $35.000. Técnicos certificados. Garantía 90 días.',
  keywords: [
    'aire acondicionado automotriz',
    'taller de aire acondicionado',
    'carga de gas refrigerante',
    'reparación de AC automotriz',
    'servicio a domicilio',
    'Santiago',
    'Chile',
  ],
  authors: [{ name: 'Autofixer SPA' }],
  creator: 'Autofixer',
  publisher: 'Autofixer SPA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://autofixer.cl',
    siteName: 'Autofixer',
    title: 'Autofixer — Aire Acondicionado Automotriz a Domicilio',
    description: 'Servicio de aire acondicionado automotriz a domicilio en Santiago. Técnicos certificados. Garantía 90 días.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Autofixer - Servicio de AC automotriz a domicilio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autofixer — AC Automotriz a Domicilio',
    description: 'Diagnóstico, carga de gas, reparación y sanitización a domicilio en Santiago.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    // Allow AI bots
  },
  verification: {
    google: 'google-verification-code',
  },
}

// Organization Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://autofixer.cl',
  name: 'Autofixer',
  image: 'https://autofixer.cl/logo.png',
  logo: 'https://autofixer.cl/logo.png',
  description: 'Servicio de aire acondicionado automotriz a domicilio en Santiago, Chile. Diagnóstico, carga de gas, reparación y sanitización.',
  url: 'https://autofixer.cl',
  telephone: '+56900000000',
  email: 'contacto@autofixer.cl',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Fray Camilo Enrique 655',
    addressLocality: 'Recoleta',
    addressRegion: 'Región Metropolitana',
    postalCode: '8420515',
    addressCountry: 'CL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.4475,
    longitude: -70.6546,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '14:00',
    },
  ],
  areaServed: {
    '@type': 'State',
    name: 'Región Metropolitana de Santiago',
  },
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.facebook.com/autofixerchile',
    'https://www.instagram.com/autofixer.cl',
    'https://www.linkedin.com/company/autofixer',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Aire Acondicionado Automotriz',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Diagnóstico de Aire Acondicionado',
        },
        price: '25000',
        priceCurrency: 'CLP',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Carga de Gas R134a',
        },
        price: '35000',
        priceCurrency: 'CLP',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${heading.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        
        {/* AI-friendly meta tags */}
        <meta name="AI-Access" content="public" />
        <meta name="robots" content="index, follow" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* JSON-LD Schema */}
        <SchemaMarkup schema={organizationSchema} />
        
        {/* Header */}
        <Header />
        
        {/* Main content */}
        <main className="flex-1">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <WhatsAppFloat />
        
        {/* Toast notifications */}
        <Toaster 
          position="bottom-right"
          toastOptions={{
            className: 'bg-white shadow-elevated rounded-xl',
          }}
        />
      </body>
    </html>
  )
}

// Floating WhatsApp Button Component
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/56900000000?text=Hola,%20quiero%20cotizar%20un%20servicio%20de%20AC"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  )
}
