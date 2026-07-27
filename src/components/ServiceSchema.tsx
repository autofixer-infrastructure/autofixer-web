export const servicesSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Carga de Gas Refrigerante',
    description:
      'Recarga de refrigerante R134a o R1234yf según especificación del fabricante. Incluye diagnóstico de presión y verificación de rendimiento.',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://autofixer.cl',
      name: 'Autofixer',
    },
    areaServed: {
      '@type': 'State',
      name: 'Región Metropolitana de Santiago',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Aire Acondicionado Automotriz',
      includes: [
        { '@type': 'Offer', name: 'Carga de gas R134a', price: '35000', priceCurrency: 'CLP' },
        { '@type': 'Offer', name: 'Carga de gas R1234yf', price: '55000', priceCurrency: 'CLP' },
      ],
    },
    serviceType: 'Carga de Gas Refrigerante',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Detección y Reparación de Fugas',
    description:
      'Localización electrónica de fugas de alta sensibilidad con lámpara UV. Sellado profesional con garantía escrita de 90 días.',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://autofixer.cl',
      name: 'Autofixer',
    },
    areaServed: {
      '@type': 'State',
      name: 'Región Metropolitana de Santiago',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      includes: [{ '@type': 'Offer', name: 'Detección y sellado de fugas', price: '45000', priceCurrency: 'CLP' }],
    },
    serviceType: 'Reparación de Fugas de A/C',
    warranty: { '@type': 'WarrantyPromise', duration: 'P90D', warrantyScope: { '@type': 'WarrantyScope', description: 'Mano de obra y sellado' } },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cambio de Compresor de A/C',
    description:
      'Diagnóstico completo más suministro e instalación de compresor nuevo o re-manufacturado. Incluye embrague, filtro secador, aceite PAG y carga de gas.',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://autofixer.cl',
      name: 'Autofixer',
    },
    areaServed: {
      '@type': 'State',
      name: 'Región Metropolitana de Santiago',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      includes: [{ '@type': 'Offer', name: 'Cambio de compresor completo', price: '180000', priceCurrency: 'CLP' }],
    },
    serviceType: 'Reparación de Compresor',
    warranty: { '@type': 'WarrantyPromise', duration: 'P90D' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Sanitización Antibacterial del Sistema de Ventilación',
    description:
      'Eliminación profunda de bacterias, hongos y ácaros. Elimina malos olores y mejora la calidad del aire interior del vehículo.',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://autofixer.cl',
      name: 'Autofixer',
    },
    areaServed: {
      '@type': 'State',
      name: 'Región Metropolitana de Santiago',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      includes: [{ '@type': 'Offer', name: 'Sanitización antibacterial', price: '25000', priceCurrency: 'CLP' }],
    },
    serviceType: 'Sanitización de A/C Automotriz',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Diagnóstico Computarizado OBD2 del Sistema de Climatización',
    description:
      'Escaneo de códigos de falla con scanner profesional. Identifica problemas eléctricos, de sensores y de control del sistema de climatización.',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://autofixer.cl',
      name: 'Autofixer',
    },
    areaServed: {
      '@type': 'State',
      name: 'Región Metropolitana de Santiago',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      includes: [{ '@type': 'Offer', name: 'Diagnóstico OBD2', price: '15000', priceCurrency: 'CLP' }],
    },
    serviceType: 'Diagnóstico de A/C Automotriz',
  },
]

export function ServiceSchemaMarkup({ serviceIndex }: { serviceIndex?: number }) {
  if (serviceIndex !== undefined && servicesSchema[serviceIndex]) {
    const schema = servicesSchema[serviceIndex]
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    )
  }
  // Todas los servicios
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
    />
  )
}
