import React from 'react';
import { useStore } from '../store/StoreContext';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const { config } = useStore();

  const message = encodeURIComponent(
    'Olá! Gostaria de informações sobre exames, orçamentos e agendamento no Laboratório Dr. Samuel Barreto.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip / Badge */}
      <div className="hidden md:flex items-center gap-2 mr-3 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 shadow-lg border border-slate-200/80 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-all duration-300 group-hover:scale-105">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span>Agende seu exame</span>
      </div>

      <a
        href={`https://wa.me/${config.whatsapp}?text=${message}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 relative"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-600 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
};
