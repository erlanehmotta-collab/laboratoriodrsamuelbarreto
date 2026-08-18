import React, { useState } from 'react';
import { useStore } from '../store/StoreContext';
import { Droplet, Dna, Activity, FileSpreadsheet, Search, Check, ArrowRight } from 'lucide-react';

export const Exames: React.FC = () => {
  const { config } = useStore();
  const [searchTerm, setSearchTerm] = useState('');

  const examCategories = [
    {
      category: 'Exames de Sangue e Bioquímica',
      icon: <Droplet className="w-5 h-5 text-rose-500" />,
      items: ['Hemograma Completo com Plaquetas', 'Glicemia de Jejum e Curva Glicêmica', 'Colesterol Total e Frações (HDL, LDL, VLDL)', 'Triglicerídeos, Ácido Úrico, Ureia e Creatinina', 'Hepatograma (TGO, TGP, Gama GT, Bilirrubinas)']
    },
    {
      category: 'Hormônios & Imunologia',
      icon: <Activity className="w-5 h-5 text-indigo-500" />,
      items: ['TSH e T4 Livre (Tireoide)', 'Vitamina D (25-Hidroxi) e Vitamina B12', 'PSA Livre e Total (Próstata)', 'Beta HCG Quantitativo (Gravidez)', 'Sorologias e Painéis Infecciosos']
    },
    {
      category: 'Genética, DNA & Toxicológico',
      icon: <Dna className="w-5 h-5 text-teal-500" />,
      items: ['Exame Toxicológico CNH & Concursos Públicos', 'Teste de Paternidade (DNA)', 'Sexagem Fetal a partir da 8ª semana', 'Marcadores Tumorais', 'Perfil Genético']
    },
    {
      category: 'Check-ups Preventivos Completos',
      icon: <FileSpreadsheet className="w-5 h-5 text-sky-500" />,
      items: ['Check-up Geral Básico', 'Check-up Homem 40+', 'Check-up Mulher 40+', 'Check-up Infantil / Pediátrico', 'Check-up Pré-operatório & Esportivo']
    }
  ];

  return (
    <section id="exames" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
            Guia de Exames
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white">
            Exames Realizados & Check-ups
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">
            Amplo portfólio de testes diagnósticos com equipamentos automatizados e laudos precisos.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {examCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-white dark:bg-slate-700 shadow-sm">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                    {cat.category}
                  </h3>
                </div>

                <ul className="space-y-3 mb-8">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/${config.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20valores%20e%20preparo%20para%20exames%20da%20categoria:%20${encodeURIComponent(cat.category)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white dark:bg-slate-700 hover:bg-sky-50 dark:hover:bg-slate-600 text-sky-600 dark:text-sky-300 border border-sky-200 dark:border-slate-600 font-semibold text-sm transition-all"
              >
                <span>Consultar Preparo e Valores</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
