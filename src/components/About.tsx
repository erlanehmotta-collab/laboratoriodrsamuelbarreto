import React from 'react';
import { Award, Microchip, Users, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Award className="w-6 h-6 text-sky-600" />,
      title: "Tradição e Confiança",
      desc: "Mais de duas décadas servindo à população com responsabilidade médica e ética."
    },
    {
      icon: <Microchip className="w-6 h-6 text-teal-600" />,
      title: "Automação e Tecnologia",
      desc: "Analisadores bioquímicos e hematológicos de última geração com controle rigoroso."
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      title: "Equipe Especializada",
      desc: "Biomédicos, farmacêuticos e técnicos dedicados à precisão dos seus resultados."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-rose-600" />,
      title: "Atendimento Humanizado",
      desc: "Cuidado especial em coletas infantis, idosos e pacientes com necessidades especiais."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80"
              alt="Atendimento acolhedor"
              className="rounded-2xl h-64 w-full object-cover shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80"
              alt="Análise laboratorial"
              className="rounded-2xl h-64 w-full object-cover shadow-md mt-6"
            />
          </div>

          {/* Text and Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-teal-100 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
              Nossa História & Compromisso
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
              Excelência e Rigor Científico a Serviço da Sua Vida
            </h2>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Fundado com o objetivo de oferecer serviços diagnósticos de alto padrão, o <strong>Laboratório Dr. Samuel Barreto</strong> consolidou-se como referência regional em análises clínicas.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Trabalhamos com processos padronizados e rígidos programas de controle de qualidade (interlaboratorial), garantindo que cada laudo emitido seja um instrumento confiável para a decisão médica.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {pillars.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 shadow-xs shrink-0 border border-slate-200/60 dark:border-slate-800">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
