'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { 
  LayoutDashboard, Search, Zap, FileText, DollarSign, 
  Shield, Users, Activity, LogOut, Moon, Sun, X 
} from 'lucide-react';
import { useTheme } from './DarkModeProvider';

const sections = [
  { href: '/admin/panel', label: 'Resumen', icon: LayoutDashboard },
  { href: '/admin/panel/seo', label: 'SEO', icon: Search },
  { href: '/admin/panel/performance', label: 'Rendimiento', icon: Zap },
  { href: '/admin/panel/contenido', label: 'Contenido', icon: FileText },
  { href: '/admin/panel/conversiones', label: 'Conversiones', icon: DollarSign },
  { href: '/admin/panel/seguridad', label: 'Seguridad', icon: Shield },
  { href: '/admin/panel/ux', label: 'Experiencia', icon: Users },
  { href: '/admin/panel/salud', label: 'Salud Técnica', icon: Activity },
];

export function Sidebar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Listener para el evento del MobileHeader
  useEffect(() => {
    const handler = () => setMobileOpen(true);
    window.addEventListener('open-sidebar', handler);
    return () => window.removeEventListener('open-sidebar', handler);
  }, []);

  // Cerrar drawer al cambiar de ruta en mobile
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const content = (
    <>
      <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <Link href="/admin/panel" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
            A
          </div>
          <div>
            <div className="font-bold text-slate-900 dark:text-white">Autofixer</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Panel</div>
          </div>
        </Link>
        <button 
          onClick={() => setMobileOpen(false)}
          className="md:hidden text-slate-500 dark:text-slate-400"
          aria-label="Cerrar menú"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {sections.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 font-medium'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <Icon size={18} />
              <span className="text-sm">{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800 space-y-1">
        <button
          onClick={toggle}
          className="flex items-center gap-3 px-3 py-2 w-full text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-sm transition-colors"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          {theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
        </button>
        <button
          onClick={() => { 
            document.cookie = 'admin_token=; path=/; max-age=0'; 
            window.location.href = '/admin/panel/login'; 
          }}
          className="flex items-center gap-3 px-3 py-2 w-full text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-sm transition-colors"
        >
          <LogOut size={18} />
          Salir
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop: sidebar fijo */}
      <aside className="hidden md:flex w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-col flex-shrink-0 h-screen sticky top-0">
        {content}
      </aside>

      {/* Mobile: drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div 
            className="absolute inset-0 bg-black/50" 
            onClick={() => setMobileOpen(false)} 
            aria-hidden="true"
          />
          <aside className="relative w-72 bg-white dark:bg-slate-900 flex flex-col h-full">
            {content}
          </aside>
        </div>
      )}
    </>
  );
}
