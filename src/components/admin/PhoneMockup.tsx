import React from 'react';
import { useStore } from '../../store/StoreContext';
import { Activity, Menu, MessageCircle, FileText } from 'lucide-react';

export const PhoneMockup: React.FC = () => {
  const { config } = useStore();

  return (
    <div className="w-[280px] h-[560px] bg-slate-900 rounded-[40px] p-3 shadow-2xl border-4 border-slate-800 flex flex-col relative overflow-hidden shrink-0">
      {/* Notch */}
      <div className="w-28 h-4 bg-slate-800 rounded-b-xl mx-auto mb-2 shrink-0" />

      {/* Screen Frame */}
      <div className="flex-1 bg-white dark:bg-slate-950 rounded-[28px] overflow-y-auto no-scrollbar text-left text-slate-800 dark:text-slate-200">
        
        {/* Mini Navbar */}
        <div className="p-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between sticky top-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xs z-10">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-md bg-sky-600 flex items-center justify-center text-white">
              <Activity className="w-3.5 h-3.5" />
            </div>
            <span className="text-[10px] font-bold">Dr. Samuel</span>
          </div>
          <Menu className="w-4 h-4 text-slate-500" />
        </div>

        {/* Mini Hero */}
        <div className="p-4 bg-gradient-to-b from-sky-50 dark:from-slate-900 to-transparent space-y-3">
          <span className="text-[8px] font-bold text-sky-600 uppercase tracking-wider bg-sky-100 dark:bg-sky-950 px-2 py-0.5 rounded-full">
            Laboratório
          </span>
          <h4 className="text-xs font-bold leading-snug">
            Cuidado e Precisão no Diagnóstico da Sua Saúde
          </h4>
          <p className="text-[9px] text-slate-500 line-clamp-3">
            {config.tagline}
          </p>
          <div className="flex flex-col gap-1.5">
            <div className="bg-sky-600 text-white rounded-lg py-1.5 text-center text-[9px] font-bold flex items-center justify-center gap-1">
              <MessageCircle className="w-3 h-3" /> WhatsApp
            </div>
            <div className="border border-slate-200 dark:border-slate-800 rounded-lg py-1.5 text-center text-[9px] font-bold flex items-center justify-center gap-1">
              <FileText className="w-3 h-3 text-sky-600" /> Laudos Online
            </div>
          </div>
        </div>

        {/* Mini Quick Cards */}
        <div className="p-3 grid grid-cols-2 gap-2">
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-[9px]">
            <p className="font-bold text-slate-800 dark:text-white">Coleta Domiciliar</p>
            <p className="text-[8px] text-slate-400">Atendimento em casa</p>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-[9px]">
            <p className="font-bold text-slate-800 dark:text-white">Toxicológico</p>
            <p className="text-[8px] text-slate-400">CNH & Concursos</p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto mt-2 shrink-0" />
    </div>
  );
};
