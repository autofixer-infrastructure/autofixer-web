'use client';
import { Menu } from 'lucide-react';

export function MobileHeader() {
  const openSidebar = () => {
    window.dispatchEvent(new CustomEvent('open-sidebar'));
  };

  return (
    <header className="md:hidden sticky top-0 z-30 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center gap-3">
      <button 
        onClick={openSidebar} 
        className="p-1.5 -ml-1.5 text-slate-600 dark:text-slate-300"
        aria-label="Abrir menú"
      >
        <Menu size={20} />
      </button>
      <h1 className="font-semibold text-sm text-slate-900 dark:text-white">Panel · Autofixer</h1>
    </header>
  );
}
