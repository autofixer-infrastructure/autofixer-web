'use client'

interface SchemaMarkupProps {
  schema: Record<string, unknown>
}

export function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Specialized Schema Components
export function ServiceSchema({ services }: { services: Array<{name: string, price: number}> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Servicios de Aire Acondicionado Automotriz',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Autofixer',
      'url': 'https://autofixer.cl'
    },
    'areaServed': {
      '@type': 'State',
      'name': 'Región Metropolitana de Santiago'
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Servicios de AC',
      'itemListElement': services.map((service, index) => ({
        '@type': 'Offer',
        'position': index + 1,
        'itemOffered': {
          '@type': 'Service',
          'name': service.name
        },
        'price': service.price.toString(),
        'priceCurrency': 'CLP'
      }))
    }
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: Array<{question: string, answer: string}> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://autofixer.cl/#business',
    'name': 'Autofixer',
    'image': 'https://autofixer.cl/logo.png',
    'logo': 'https://autofixer.cl/logo.png',
    'url': 'https://autofixer.cl',
    'telephone': '+56900000000',
    'email': 'contacto@autofixer.cl',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Fray Camilo Enrique 655',
      'addressLocality': 'Recoleta',
      'addressRegion': 'Región Metropolitana',
      'postalCode': '8420515',
      'addressCountry': 'CL'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': -33.4475,
      'longitude': -70.6546
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '08:00',
        'closes': '19:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Saturday'],
        'opens': '09:00',
        'closes': '14:00'
      }
    ],
    'areaServed': {
      '@type': 'State',
      'name': 'Región Metropolitana de Santiago'
    },
    'priceRange': '$$',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '150',
      'bestRating': '5'
    },
    'sameAs': [
      'https://www.facebook.com/autofixerchile',
      'https://www.instagram.com/autofixer.cl',
      'https://www.linkedin.com/company/autofixer'
    ]
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://autofixer.cl/#website',
    'url': 'https://autofixer.cl',
    'name': 'Autofixer - Aire Acondicionado Automotriz a Domicilio',
    'description': 'Servicio profesional de aire acondicionado automotriz a domicilio en Santiago, Chile.',
    'publisher': {
      '@type': 'Organization',
      '@id': 'https://autofixer.cl/#organization'
    },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': 'https://autofixer.cl/buscar?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
