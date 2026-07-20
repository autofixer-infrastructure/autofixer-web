'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { clsx } from 'clsx'

const servicios = [
  { name: 'Diagnóstico', href: '/servicios/diagnostico', price: 'Desde $25.000' },
  { name: 'Carga de Gas R134a', href: '/servicios/carga-r134a', price: 'Desde $35.000' },
  { name: 'Carga de Gas R1234yf', href: '/servicios/carga-r1234yf', price: 'Desde $90.000' },
  { name: 'Sanitización', href: '/servicios/sanitizacion', price: 'Desde $45.000' },
  { name: 'Reparación', href: '/servicios/reparacion', price: 'Cotizar' },
  { name: 'Mantenimiento', href: '/servicios/mantenimiento', price: 'Desde $25.000' },
]

const problemas = [
  { name: 'Aire no enfría', href: '/problemas/aire-no-enfria' },
  { name: 'Mal olor', href: '/problemas/mal-olor' },
  { name: 'Ruido extraño', href: '/problemas/ruido' },
  { name: 'Aire caliente', href: '/problemas/aire-caliente' },
  { name: 'No funciona', href: '/problemas/no-funciona' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AF</span>
            </div>
            <span className="text-xl font-bold text-primary">Autofixer</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            
            {/* Servicios Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('servicios')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors">
                Servicios <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'servicios' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-elevated border border-gray-100 p-4 animate-fade-in">
                  <div className="space-y-1">
                    {servicios.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <span className="text-gray-700 group-hover:text-primary font-medium">{item.name}</span>
                        <span className="text-sm text-secondary">{item.price}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Link href="/servicios" className="btn btn-secondary btn-sm w-full">
                      Ver todos los servicios
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Problemas Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('problemas')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors">
                Problemas <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'problemas' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-elevated border border-gray-100 p-4 animate-fade-in">
                  <div className="grid grid-cols-1 gap-1">
                    {problemas.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 hover:text-primary font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/precios" className="nav-link">
              Precios
            </Link>
            
            <Link href="/cobertura" className="nav-link">
              Cobertura
            </Link>
            
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            
            <Link href="/nosotros" className="nav-link">
              Nosotros
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+56900000000" className="text-gray-600 hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <Link href="/cotizar" className="btn btn-secondary">
              Cotizar Ahora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white animate-slide-up">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
            
            {/* Mobile Servicios */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Servicios</h3>
              <div className="space-y-1">
                {servicios.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Problemas */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Problemas</h3>
              <div className="space-y-1">
                {problemas.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Links */}
            <div className="space-y-1">
              <Link href="/precios" className="block px-4 py-2 text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                Precios
              </Link>
              <Link href="/cobertura" className="block px-4 py-2 text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                Cobertura
              </Link>
              <Link href="/blog" className="block px-4 py-2 text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/nosotros" className="block px-4 py-2 text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                Nosotros
              </Link>
            </div>

            {/* Mobile CTA */}
            <div className="pt-4 border-t">
              <Link href="/cotizar" className="btn btn-secondary w-full" onClick={() => setIsMenuOpen(false)}>
                Cotizar Ahora
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
