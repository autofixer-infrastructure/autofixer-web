// Service catalog data - This would eventually come from DB
// For now, hardcoded for static generation

import { Service } from '@/lib/types'

export const services: Service[] = [
  {
    id: '1',
    slug: 'diagnostico',
    name: 'Diagnóstico de AC',
    description: 'Revisión completa del sistema de aire acondicionado con equipamiento profesional. Incluye medición de presiones, revisión de compresor, condensador, evaporador y tuberías.',
    basePrice: 25000,
    duration: 60,
    icon: 'Search',
    featured: true,
  },
  {
    id: '2',
    slug: 'carga-r134a',
    name: 'Carga de Gas R134a',
    description: 'Carga de gas refrigerante R134a para vehículos anteriores a 2017. Incluye vacío del sistema, carga de gas y verificación de presiones.',
    basePrice: 35000,
    maxPrice: 70000,
    duration: 90,
    refrigerantType: 'R134A',
    icon: 'Wind',
    featured: true,
  },
  {
    id: '3',
    slug: 'carga-r1234yf',
    name: 'Carga de Gas R1234yf',
    description: 'Carga de gas refrigerante R1234yf para vehículos desde 2017 en adelante. Este gas es más amigable con el medio ambiente y requiere equipamiento especializado.',
    basePrice: 90000,
    duration: 90,
    refrigerantType: 'R1234YF',
    icon: 'Wind',
    featured: true,
  },
  {
    id: '4',
    slug: 'sanitizacion',
    name: 'Sanitización de Sistema',
    description: 'Eliminación de hongos, bacterias y malos olores del sistema de ventilación. Incluye limpieza de evaporador, conductos y tratamiento antibacteriano.',
    basePrice: 45000,
    maxPrice: 55000,
    duration: 45,
    icon: 'Sparkles',
    featured: true,
  },
  {
    id: '5',
    slug: 'reparacion',
    name: 'Reparación de Componentes',
    description: 'Reparación o reemplazo de compresores, condensadores, evaporadores, ventiladores y otros componentes del sistema de aire acondicionado.',
    basePrice: 0, // Quote only
    duration: 120,
    icon: 'Wrench',
    featured: false,
  },
  {
    id: '6',
    slug: 'mantenimiento',
    name: 'Mantenimiento Preventivo',
    description: 'Revisión y mantenimiento preventivo del sistema de AC para evitar futuras fallas. Incluye limpieza, verificación de presiones y lubricación.',
    basePrice: 25000,
    duration: 60,
    icon: 'Shield',
    featured: false,
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}

export function getFeaturedServices(): Service[] {
  return services.filter(s => s.featured)
}

export function getServicesByRefrigerant(type: 'R134A' | 'R1234YF'): Service[] {
  return services.filter(s => s.refrigerantType === type)
}
