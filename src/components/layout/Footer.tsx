'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  servicios: [
    { label: 'Carga de Gas', href: '/servicios/carga-gas' },
    { label: 'Diagnóstico', href: '/servicios/diagnostico' },
    { label: 'Detección de Fugas', href: '/servicios/deteccion-reparacion-fugas' },
    { label: 'Reparación de Compresor', href: '/servicios/reparacion-compresor' },
    { label: 'Sanitización', href: '/servicios/sanitizacion' },
    { label: 'Cambio de Condensador', href: '/servicios/cambio-condensador' },
    { label: 'Cambio de Evaporador', href: '/servicios/cambio-evaporador' },
    { label: 'Mantención Preventiva', href: '/servicios/mantenimiento-preventivo' },
    { label: 'Aire Híbrido y Eléctrico', href: '/servicios/aire-electrico-hibrido' },
    { label: 'Flushing', href: '/servicios/flushing' },
  ],
  coverage: [
    { label: 'Las Condes', href: '/cobertura/las-condes' },
    { label: 'Providencia', href: '/cobertura/providencia' },
    { label: 'Nuñoa', href: '/cobertura/nunoa' },
    { label: 'La Florida', href: '/cobertura/la-florida' },
    { label: 'Maipú', href: '/cobertura/maipu' },
    { label: 'Santiago Centro', href: '/cobertura/santiago' },
    { label: 'Ver todas las zonas', href: '/cobertura' },
  ],
  company: [
    { label: 'Cómo Trabajamos', href: '/como-trabajamos' },
    { label: 'Por Qué Confiar', href: '/por-que-confiar' },
    { label: 'Problemas Comunes', href: '/problemas' },
    { label: 'Preguntas Frecuentes', href: '/preguntas-frecuentes' },
    { label: 'Precios Referenciales', href: '/precios-referenciales' },
    { label: 'Contacto', href: '/contacto' },
  ],
  legal: [
    { label: 'Políticas de Privacidad', href: '/politicas-de-privacidad' },
    { label: 'Términos y Condiciones', href: '/terminos-y-condiciones' },
  ],
}

export function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
          {/* Brand */}
          <div className='col-span-2 md:col-span-1'>
            <Link href='/' className='text-2xl font-bold text-white mb-4 block'>
              Autofixer
            </Link>
            <p className='text-sm text-gray-400 mb-4'>
              Especialistas en aire acondicionado automotriz a domicilio en Santiago.
              Servicio profesional, garantía escrita de 90 días.
            </p>
            <p className='text-xs text-gray-500'>
              Santiago, Región Metropolitana, Chile
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className='text-white font-semibold mb-4'>Servicios</h4>
            <ul className='space-y-2'>
              {footerLinks.servicios.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className='text-gray-400 hover:text-white text-sm transition-colors'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h4 className='text-white font-semibold mb-4'>Zonas</h4>
            <ul className='space-y-2'>
              {footerLinks.coverage.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className='text-gray-400 hover:text-white text-sm transition-colors'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className='text-white font-semibold mb-4'>Empresa</h4>
            <ul className='space-y-2'>
              {footerLinks.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className='text-gray-400 hover:text-white text-sm transition-colors'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact + Legal */}
        <div className='border-t border-gray-800 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
            <div className='flex flex-wrap gap-6 text-sm'>
              <a href='tel:+56935075600' className='flex items-center gap-2 text-gray-400 hover:text-white'>
                <Phone className='w-4 h-4' />
                +56 9 3507 5600
              </a>
              <a href='mailto:contacto@autofixer.cl' className='flex items-center gap-2 text-gray-400 hover:text-white'>
                <Mail className='w-4 h-4' />
                contacto@autofixer.cl
              </a>
              <span className='flex items-center gap-2 text-gray-400'>
                <MapPin className='w-4 h-4' />
                Santiago, Región Metropolitana
              </span>
            </div>
            <div className='flex gap-6 text-sm'>
              {footerLinks.legal.map((item) => (
                <Link key={item.href} href={item.href} className='text-gray-500 hover:text-white transition-colors'>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <p className='text-xs text-gray-600 mt-4'>
            © {new Date().getFullYear()} Autofixer SPA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
