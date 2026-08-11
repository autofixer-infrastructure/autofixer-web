'use client';
import { Activity, TrendingUp, AlertTriangle, Gauge } from 'lucide-react';

interface Props { data: any }

export function DashboardCards({ data }: Props) {
  const health = data?.health_score ?? 0;
  const uptime = data?.uptime?.uptime_24h ?? data?.uptime?.uptime_percent ?? 99.9;
  const sentryErrors = data?.sentry?.error_count_24h ?? 0;
  const lcp = data?.performance?.lcp?.p75 ?? data?.performance?.lcp?.value ?? 0;

  const healthColor = health >= 80 ? 'emerald' : health >= 60 ? 'amber' : 'red';
  const lcpColor = lcp > 0 && lcp < 2.5 ? 'emerald' : lcp < 4.0 ? 'amber' : 'red';

  const cards = [
    {
      icon: Gauge,
      label: 'Health Score',
      value: health,
      suffix: '/100',
      color: healthColor,
      sub: health >= 80 ? 'Sitio saludable' : health >= 60 ? 'Atención recomendada' : 'Requiere acción',
    },
    {
      icon: TrendingUp,
      label: 'LCP Mobile (p75)',
      value: lcp > 0 ? lcp.toFixed(1) : '—',
      suffix: lcp > 0 ? 's' : '',
      color: lcpColor,
      sub: lcp > 0 && lcp < 2.5 ? 'Excelente' : lcp < 4.0 ? 'Mejorable' : 'Lento',
    },
    {
      icon: Activity,
      label: 'Uptime 24h',
      value: typeof uptime === 'number' ? uptime.toFixed(2) : uptime,
      suffix: '%',
      color: uptime >= 99.5 ? 'emerald' : uptime >= 98 ? 'amber' : 'red',
      sub: 'Disponibilidad',
    },
    {
      icon: AlertTriangle,
      label: 'Errores Sentry (24h)',
      value: sentryErrors,
      suffix: '',
      color: sentryErrors === 0 ? 'emerald' : sentryErrors < 10 ? 'amber' : 'red',
      sub: sentryErrors === 0 ? 'Sin errores' : 'Revisar',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map(({ icon: Icon, label, value, suffix, color, sub }) => {
        const colorMap: Record<string, string> = {
          emerald: 'from-emerald-500/10 to-emerald-500/5 border-emerald-200/50 dark:border-emerald-800/50 text-emerald-600 dark:text-emerald-400',
          amber: 'from-amber-500/10 to-amber-500/5 border-amber-200/50 dark:border-amber-800/50 text-amber-600 dark:text-amber-400',
          red: 'from-red-500/10 to-red-500/5 border-red-200/50 dark:border-red-800/50 text-red-600 dark:text-red-400',
        };
        return (
          <div 
            key={label} 
            className={`bg-gradient-to-br ${colorMap[color]} bg-white dark:bg-slate-900 rounded-2xl p-6 border`}
          >
            <Icon className="w-8 h-8 mb-3" />
            <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">{label}</div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
              {value}{suffix}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{sub}</div>
          </div>
        );
      })}
    </div>
  );
}
