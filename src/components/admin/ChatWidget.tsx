'use client';
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botón flotante */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg hover:scale-105 transition-transform flex items-center justify-center"
          aria-label="Abrir chat"
        >
          <MessageCircle size={22} />
        </button>
      )}

      {/* Panel de chat (placeholder) */}
      {open && (
        <div className="fixed bottom-6 right-6 z-40 w-80 max-w-[calc(100vw-3rem)] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
              <span className="font-medium text-sm">Asistente IA</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Cerrar chat">
              <X size={18} />
            </button>
          </div>
          <div className="p-6 text-center text-slate-500 dark:text-slate-400">
            <MessageCircle size={32} className="mx-auto mb-3 opacity-50" />
            <p className="text-sm">
              El chat inteligente estará disponible en el Sprint 37.
              <br />
              <span className="text-xs text-slate-400 mt-2 block">
                Por ahora, consultá la documentación o contactanos por WhatsApp.
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
