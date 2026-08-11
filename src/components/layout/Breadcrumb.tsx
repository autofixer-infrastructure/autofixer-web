'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface Crumb {
  label: string
  href?: string
}

interface BreadcrumbProps {
  crumbs: Crumb[]
}

export function Breadcrumb({ crumbs }: BreadcrumbProps) {
  return (
    <nav aria-label='Breadcrumb' className='flex items-center gap-1 text-sm text-gray-500 mb-4'>
      <Link href='/' aria-label='Inicio' className='hover:text-amber-600 transition-colors'>
        <Home className='w-4 h-4' />
      </Link>
      {crumbs.map((crumb, i) => (
        <span key={i} className='flex items-center gap-1'>
          <ChevronRight className='w-3 h-3' />
          {crumb.href ? (
            <Link href={crumb.href} className='hover:text-amber-600 transition-colors'>
              {crumb.label}
            </Link>
          ) : (
            <span className='text-gray-700 font-medium'>{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
