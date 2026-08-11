/**
 * BreadcrumbJsonLd — server component que genera el JSON-LD
 * BreadcrumbList para SEO. Acepta el mismo array `crumbs` que
 * el componente visual Breadcrumb.tsx.
 *
 * Uso en una page.tsx:
 *   import { Breadcrumb } from '@/components/layout/Breadcrumb'
 *   import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
 *   <Breadcrumb crumbs={[...]} />
 *   <BreadcrumbJsonLd crumbs={[...]} />
 */

interface Crumb {
  label: string
  href?: string
}

interface BreadcrumbJsonLdProps {
  crumbs: Crumb[]
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://autofixer.cl'

export default function BreadcrumbJsonLd({ crumbs }: BreadcrumbJsonLdProps) {
  const itemListElement = crumbs.map((crumb, index) => {
    const isLast = !crumb.href
    const url = crumb.href
      ? crumb.href.startsWith('http')
        ? crumb.href
        : `${BASE_URL}${crumb.href}`
      : undefined
    return {
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      ...(url ? { item: url } : {}),
    }
  })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
