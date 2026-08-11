'use client';
interface Props { data: any }

export function TrendChart({ data }: Props) {
  const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  // Placeholder: simulamos 7 días de visitas
  const values = [12, 18, 8, 24, 32, 15, 22];
  const max = Math.max(...values);
  const W = 600, H = 140, padX = 30, padY = 20;
  const stepX = (W - padX * 2) / (values.length - 1);
  
  const points = values.map((v, i) => {
    const x = padX + i * stepX;
    const y = padY + (H - padY * 2) * (1 - v / max);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-slate-900 dark:text-white">Tendencia semanal</h3>
        <span className="text-xs text-slate-500 dark:text-slate-400">Visitas por día (placeholder)</span>
      </div>
      
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-32" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="fillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Fill area */}
        <polygon 
          points={`${padX},${H - padY} ${points} ${W - padX},${H - padY}`} 
          fill="url(#fillGrad)" 
        />
        {/* Line */}
        <polyline 
          points={points} 
          fill="none" 
          stroke="url(#lineGrad)" 
          strokeWidth="2.5" 
          strokeLinejoin="round" 
          strokeLinecap="round" 
        />
        {/* Dots */}
        {values.map((v, i) => {
          const x = padX + i * stepX;
          const y = padY + (H - padY * 2) * (1 - v / max);
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
              <text x={x} y={y - 10} textAnchor="middle" className="fill-slate-600 dark:fill-slate-300" fontSize="10">{v}</text>
              <text x={x} y={H - 4} textAnchor="middle" className="fill-slate-400" fontSize="10">{days[i]}</text>
            </g>
          );
        })}
      </svg>
      
      <p className="text-xs text-slate-400 mt-4">
        Datos placeholder. En Sprint 38 conectaremos con datos reales de GA4.
      </p>
    </div>
  );
}
