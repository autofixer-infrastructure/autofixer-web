'use client';
import { useEffect, useState } from 'react';
import { RefreshCw, Wifi, WifiOff } from 'lucide-react';
import { DashboardCards } from './DashboardCards';
import { TrendChart } from './TrendChart';
import { RecommendationsList } from './RecommendationsList';

export function DashboardContent() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [backendOnline, setBackendOnline] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const load = async () => {
    setRefreshing(true);
    setError(null);
    try {
      const token = document.cookie.match(/admin_token=([^;]+)/)?.[1];
      const res = await fetch('https://autofixer.cl/api/admin/observability/dashboard', {
        headers: { Authorization: `Bearer ${token}` },
        cache: 'no-store',
      });

      if (!res.ok) {
        if (res.status === 401) {
          window.location.href = '/admin/panel/login';
          return;
        }
        throw new Error(`Error ${res.status}`);
      }

      const json = await res.json();
      setData(json);
      setBackendOnline(true);
    } catch (e: any) {
      setError(e.message);
      setBackendOnline(false);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    load();
    const interval = setInterval(load, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Banner de backend offline
  if (!backendOnline && !data) {
    return (
      <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl p-8 text-center">
        <WifiOff className="w-12 h-12 text-red-500 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">Backend no responde</h3>
        <p className="text-sm text-red-700 dark:text-red-300 mb-4">
          No se pudo conectar con el servidor. Reintentá en unos segundos.
        </p>
        <button
          onClick={load}
          className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700"
        >
          <RefreshCw size={16} />
          Reintentar
        </button>
      </div>
    );
  }

  // Error genérico con retry
  if (error && !data) {
    return (
      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-8 text-center">
        <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-2">No se pudieron cargar los datos</h3>
        <p className="text-sm text-amber-700 dark:text-amber-300 mb-4">{error}</p>
        <button onClick={load} className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg text-sm">
          <RefreshCw size={16} /> Reintentar
        </button>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div>
      <div className="mb-4 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
          {backendOnline ? <Wifi size={14} className="text-emerald-500" /> : <WifiOff size={14} className="text-red-500" />}
          {backendOnline ? 'Conectado · auto-refresh 5min' : 'Reconectando...'}
        </div>
        <button onClick={load} disabled={refreshing} className="flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
          <RefreshCw size={12} className={refreshing ? 'animate-spin' : ''} />
          {refreshing ? 'Actualizando...' : 'Actualizar'}
        </button>
      </div>

      <DashboardCards data={data} />
      <div className="mt-6">
        <TrendChart data={data} />
      </div>
      <div className="mt-6">
        <RecommendationsList data={data} />
      </div>
    </div>
  );
}
