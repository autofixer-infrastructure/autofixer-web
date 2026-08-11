import { Suspense } from 'react';
import { DashboardContent } from '@/components/admin/DashboardContent';
import { DashboardSkeleton } from '@/components/admin/DashboardSkeleton';

export const metadata = {
  title: 'Resumen · Panel Autofixer',
};

export default function PanelPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Resumen</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">Estado general del sitio en tiempo real</p>
      </div>

      <Suspense fallback={<DashboardSkeleton />}>
        <DashboardContent />
      </Suspense>
    </div>
  );
}
