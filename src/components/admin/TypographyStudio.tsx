import React from 'react';
import { Type } from 'lucide-react';

export const TypographyStudio: React.FC = () => {
  return (
    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
      <div className="flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-200">
        <Type className="w-4 h-4 text-sky-600" />
        <span>Estúdio Tipográfico do Site</span>
      </div>

      <div className="space-y-3 text-xs">
        <div>
          <span className="text-slate-400 block text-[10px] uppercase font-bold">Fonte de Títulos</span>
          <p className="font-display font-bold text-sm text-slate-800 dark:text-slate-100">Plus Jakarta Sans / Inter</p>
        </div>
        <div>
          <span className="text-slate-400 block text-[10px] uppercase font-bold">Fonte de Texto / Parágrafos</span>
          <p className="font-sans text-xs text-slate-600 dark:text-slate-300">Inter / Roboto (Alta Legibilidade)</p>
        </div>
      </div>
    </div>
  );
};
