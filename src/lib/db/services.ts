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
  {
    id: '7',
    slug: 'carga-gas',
    name: 'Carga de Gas Refrigerante',
    description: 'Carga de gas refrigerante R134a y R1234yf para vehículos. Incluye vacío del sistema, carga simple y doble, y verificación de presiones.',
    basePrice: 35000,
    maxPrice: 90000,
    duration: 90,
    icon: 'Wind',
    featured: true,
  },
  {
    id: '8',
    slug: 'deteccion-reparacion-fugas',
    name: 'Detección y Reparación de Fugas',
    description: 'Detección profesional de fugas con presurización de nitrógeno, trazador UV y soldadura TIG. Reparación garantizada con 90 días de cobertura.',
    basePrice: 70000,
    maxPrice: 500000,
    duration: 180,
    icon: 'Search',
    featured: false,
  },
  {
    id: '9',
    slug: 'reparacion-compresor',
    name: 'Reparación de Compresor',
    description: 'Diagnóstico, reparación y reemplazo de compresor de A/C. Utilizamos compresores nuevos y reconstruidos con garantía de fabricante.',
    basePrice: 350000,
    maxPrice: 900000,
    duration: 360,
    icon: 'Wrench',
    featured: false,
  },
  {
    id: '10',
    slug: 'cambio-condensador',
    name: 'Cambio de Condensador',
    description: 'Reemplazo profesional del condensador de A/C. Condensador nuevo con garantía. Incluye vacío del sistema y carga de gas refrigerante.',
    basePrice: 150000,
    maxPrice: 350000,
    duration: 180,
    icon: 'Wind',
    featured: false,
  },
  {
    id: '11',
    slug: 'cambio-evaporador',
    name: 'Cambio de Evaporador',
    description: 'Reemplazo profesional del evaporador de A/C. Incluye filtro de habitáculo, sanitización básica y carga de gas. Servicio a domicilio.',
    basePrice: 200000,
    maxPrice: 500000,
    duration: 360,
    icon: 'Wind',
    featured: false,
  },
  {
    id: '12',
    slug: 'flushing',
    name: 'Flushing y Barrido',
    description: 'Limpieza profunda del sistema de A/C con nitrógeno y refrigerante especial. Obligatorio antes de cambiar compresor o después de fuga con humedad.',
    basePrice: 60000,
    maxPrice: 120000,
    duration: 120,
    icon: 'Sparkles',
    featured: false,
  },
  {
    id: '13',
    slug: 'aire-electrico-hibrido',
    name: 'A/C para Vehículos Eléctricos e Híbridos',
    description: 'Servicio especializado para autos eléctricos e híbridos. Carga de gas, diagnóstico de sistema térmico y reparación. Técnicos certificados.',
    basePrice: 35000,
    maxPrice: 250000,
    duration: 120,
    icon: 'Zap',
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
