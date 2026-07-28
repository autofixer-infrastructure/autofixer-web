import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://autofixer.cl'
  const now = new Date().toISOString()

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/servicios`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/como-trabajamos`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/por-que-confiar`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/precios-referenciales`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/preguntas-frecuentes`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cobertura`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/problemas`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]

  const servicioPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/servicios/carga-gas`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/servicios/diagnostico`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/servicios/mantenimiento-preventivo`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/servicios/reparacion-compresor`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/servicios/sanitizacion`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/servicios/deteccion-reparacion-fugas`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/servicios/cambio-condensador`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/servicios/cambio-evaporador`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/servicios/flushing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/servicios/aire-electrico-hibrido`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]

  const coberturaPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/cobertura/las-condes`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/cobertura/maipu`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/cobertura/providencia`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/cobertura/la-florida`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/cobertura/vitacura`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/cobertura/santiago-centro`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/cobertura/puente-alto`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/cobertura/nunoa`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ]

  const blogPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/blog/como-saber-si-mi-ac-necesita-recarga`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]

  return [...staticPages, ...servicioPages, ...coberturaPages, ...blogPages]
}
