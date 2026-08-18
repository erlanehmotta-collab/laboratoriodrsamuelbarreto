import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const questions = [
    {
      q: 'É obrigatório fazer jejum para todos os exames de sangue?',
      a: 'Não. Muitos exames atualmente não exigem jejum prolongado (como hemograma simples). No entanto, testes como Glicemia e Perfil Lipídico podem exigir entre 8 a 12 horas. Sempre consulte nossa equipe pelo WhatsApp para orientações exatas.'
    },
    {
      q: 'Como solicito o serviço de Coleta Domiciliar?',
      a: 'Basta entrar em contato pelo nosso WhatsApp com 24h de antecedência informando o endereço e o pedido médico. Nossa equipe agenda o melhor horário para o atendimento no seu lar ou empresa.'
    },
    {
      q: 'Como funciona o Exame Toxicológico para CNH e Concursos?',
      a: 'A coleta é feita através de uma pequena amostra de queratina (cabelos ou pelos do corpo). É indolor, rápido e totalmente credenciado junto ao DETRAN e órgãos públicos.'
    },
    {
      q: 'Como posso acessar meus resultados e laudos pela internet?',
      a: 'Ao realizar o exame, você recebe um comprovante de atendimento com Login (Chave) e Senha. Basta clicar em "Resultados Online" no topo do nosso site para baixar seu laudo em PDF.'
    },
    {
      q: 'Crianças precisam de preparo especial para coleta?',
      a: 'Recomendamos que a criança venha bem hidratada e tranquila. Nossa equipe possui profissionais especializados em coleta infantil para garantir um procedimento rápido, gentil e sem traumas.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white">
            Perguntas Frequentes (FAQ)
          </h2>
        </div>

        <div className="space-y-4">
          {questions.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white text-base focus:outline-none"
                >
                  <span>{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-sky-600' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
