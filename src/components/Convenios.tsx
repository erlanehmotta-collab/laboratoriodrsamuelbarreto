import React from 'react';
import { useStore } from '../store/StoreContext';
import { CreditCard, CheckCircle, MessageCircle } from 'lucide-react';

export const Convenios: React.FC = () => {
  const { config } = useStore();

  const convenios = [
    'Unimed',
    'Bradesco Saúde',
    'Amil',
    'SulAmérica',
    'IPSEMG / Servidores',
    'Cassi / Banco do Brasil',
    'Postal Saúde',
    'Cartões de Desconto & Benefícios',
    'Particular (PIX, Débito e Crédito parcelado)'
  ];

  return (
    <section id="convenios" className="py-16 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase mb-2">
            <CreditCard className="w-3.5 h-3.5" />
            Facilidade no Pagamento
          </div>
          <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white">
            Planos de Saúde & Convênios Atendidos
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base">
            Atendemos aos principais convênios regionais e nacionais, além de condições especiais para exames particulares.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
          {convenios.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3 shadow-xs"
            >
              <CheckCircle className="w-5 h-5 text-teal-500 shrink-0" />
              <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{item}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={`https://wa.me/${config.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20verificar%20se%20meu%20plano%20de%20sa%C3%BAde%20cobre%20o%20exame.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-sm hover:underline"
          >
            <MessageCircle className="w-4 h-4" />
            Não encontrou o seu convênio? Consulte nossa equipe no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
