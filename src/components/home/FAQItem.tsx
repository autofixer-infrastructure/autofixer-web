"use client"

import { useState } from 'react'

export function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200">
      <button onClick={() => setOpen(!open)} className="w-full text-left py-5 font-semibold text-base text-brand-black hover:text-brand-blue flex items-center justify-between gap-4">
        {q}
        <span className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
        </span>
      </button>
      {open && <div className="text-brand-gray text-[15px] leading-relaxed pb-5">{a}</div>}
    </div>
  )
}

