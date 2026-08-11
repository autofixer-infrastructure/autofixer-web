export const metadata = {
  title: 'seguridad · Panel Autofixer',
};

export default function SeguridadPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white capitalize">seguridad</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">Próximamente · Sprint 38</p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl p-12 border border-slate-200 dark:border-slate-800 text-center">
        <div className="text-5xl mb-4">🚧</div>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Sección en construcción</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          Esta sección estará disponible en el Sprint 38 con diagnósticos automatizados de seguridad.
          Mientras tanto, podés preguntarle a la IA desde el chat.
        </p>
      </div>
    </div>
  );
}
