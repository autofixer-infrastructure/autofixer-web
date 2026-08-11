'use client';
import { Lightbulb, ArrowRight } from 'lucide-react';

interface Props { data: any }

export function RecommendationsList({ data }: Props) {
  const recs = [];
  
  const health = data?.health_score ?? 0;
  const lcp = data?.performance?.lcp?.p75 ?? data?.performance?.lcp?.value ?? 0;
  const sentryErrors = data?.sentry?.error_count_24h ?? 0;
  const uptime = data?.uptime?.uptime_24h ?? data?.uptime?.uptime_percent ?? 99.9;

  if (health < 80) {
    recs.push({
      title: 'Health Score bajo',
      desc: `Tu health score es ${health}/100. Hay oportunidades de mejora.`,
      priority: health < 60 ? 'high' : 'medium',
      action: 'Ver diagnóstico completo',
    });
  }
  if (lcp > 0 && lcp > 2.5) {
    recs.push({
      title: 'LCP Mobile por encima del umbral',
      desc: `LCP p75 es ${lcp.toFixed(2)}s. Google recomienda < 2.5s.`,
      priority: lcp > 4.0 ? 'high' : 'medium',
      action: 'Optimizar performance',
    });
  }
  if (sentryErrors > 0) {
    recs.push({
      title: `${sentryErrors} errores en Sentry (24h)`,
      desc: 'Revisá los errores reportados para identificar patrones.',
      priority: sentryErrors > 10 ? 'high' : 'low',
      action: 'Ver logs',
    });
  }
  if (uptime < 99.5) {
    recs.push({
      title: 'Uptime por debajo del SLA',
      desc: `Uptime 24h: ${typeof uptime === 'number' ? uptime.toFixed(2) : uptime}%`,
      priority: 'high',
      action: 'Investigar caídas',
    });
  }
  if (recs.length === 0) {
    recs.push({
      title: 'Todo en orden',
      desc: 'No hay acciones urgentes. Seguí monitoreando.',
      priority: 'low',
      action: 'Ver métricas detalladas',
    });
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="w-5 h-5 text-amber-500" />
        <h3 className="font-semibold text-slate-900 dark:text-white">Recomendaciones</h3>
      </div>
      <div className="space-y-3">
        {recs.map((r, i) => {
          const colorMap: Record<string, string> = {
            high: 'border-l-red-500 bg-red-50/50 dark:bg-red-950/20',
            medium: 'border-l-amber-500 bg-amber-50/50 dark:bg-amber-950/20',
            low: 'border-l-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20',
          };
          return (
            <div key={i} className={`p-4 rounded-lg border-l-4 ${colorMap[r.priority]}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="font-medium text-sm text-slate-900 dark:text-white">{r.title}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{r.desc}</div>
                </div>
                <button className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap">
                  {r.action} <ArrowRight size={12} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
