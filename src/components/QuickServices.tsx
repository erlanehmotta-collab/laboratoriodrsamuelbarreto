import React from 'react';
import { useStore } from '../store/StoreContext';
import { FileText, Home, Truck, HeartPulse, ArrowRight } from 'lucide-react';

export const QuickServices: React.FC = () => {
  const { config } = useStore();

  const services = [
    {
      icon: <FileText className="w-6 h-6 text-sky-600" />,
      bg: 'bg-sky-50 dark:bg-sky-950/50',
      border: 'border-sky-200 dark:border-sky-800/60',
      title: 'Resultados Online',
      desc: 'Consulte seus laudos laboratoriais com agilidade e total segurança via protocolo.',
      link: config.portalUrl,
      btnText: 'Acessar Laudos',
      external: true,
    },
    {
      icon: <Home className="w-6 h-6 text-teal-600" />,
      bg: 'bg-teal-50 dark:bg-teal-950/50',
      border: 'border-teal-200 dark:border-teal-800/60',
      title: 'Coleta Domiciliar',
      desc: 'Levamos nosso padrão de excelência até sua casa ou empresa com horário agendado.',
      link: `https://wa.me/${config.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20coleta%20domiciliar.`,
      btnText: 'Agendar Coleta',
      external: true,
    },
    {
      icon: <Truck className="w-6 h-6 text-indigo-600" />,
      bg: 'bg-indigo-50 dark:bg-indigo-950/50',
      border: 'border-indigo-200 dark:border-indigo-800/60',
      title: 'Toxicológico CNH & CLT',
      desc: 'Exame toxicológico credenciado para renovação de CNH (C, D, E), concursos e admissão.',
      link: `https://wa.me/${config.whatsapp}?text=Ol%C3%A1!%20Preciso%20fazer%20o%20exame%20toxicol%C3%B3gico.`,
      btnText: 'Tirar Dúvidas',
      external: true,
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-rose-600" />,
      bg: 'bg-rose-50 dark:bg-rose-950/50',
      border: 'border-rose-200 dark:border-rose-800/60',
      title: 'Check-ups de Rotina',
      desc: 'Pacotes preventivos completos para saúde do homem, mulher, infantil e melhor idade.',
      link: '#exames',
      btnText: 'Ver Pacotes',
      external: false,
    },
  ];

  return (
    <section id="servicos" className="py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white">
            Facilidades Pensadas Para Você
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">
            Serviços modernos para tornar o acompanhamento da sua saúde mais prático, rápido e confortável.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border ${item.border} ${item.bg} flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-md`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <a
                href={item.link}
                target={item.external ? '_blank' : '_self'}
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-sm text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 group"
              >
                <span>{item.btnText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-sky-600" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
