import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Mariana Silva",
      role: "Paciente de Rotina",
      text: "Atendimento impecável! Fiz a coleta domiciliar para minha mãe idosa e a equipe foi extremamente cuidadosa e pontual. O resultado saiu no mesmo dia.",
      rating: 5,
    },
    {
      name: "Carlos Eduardo Santos",
      role: "Renovação CNH",
      text: "Fiz o exame toxicológico aqui. Processo super rápido, sem filas e laudo liberado dentro do prazo sem nenhuma complicação. Recomendo demais!",
      rating: 5,
    },
    {
      name: "Dra. Patrícia Mendes",
      role: "Médica da Região",
      text: "Confio nos laudos do Laboratório Dr. Samuel Barreto para direcionar os tratamentos dos meus pacientes. Precisão e seriedade incomparáveis.",
      rating: 5,
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            Avaliações de Clientes
          </div>
          <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white">
            O Que Diz Quem Confia no Nosso Trabalho
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 flex flex-col justify-between relative shadow-xs"
            >
              <Quote className="w-10 h-10 text-sky-200 dark:text-slate-700 absolute top-6 right-6 pointer-events-none" />
              
              <div className="space-y-4">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{rev.name}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
