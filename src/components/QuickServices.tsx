import React from 'react';
import { useStore } from '../store/StoreContext';
import { FileText, Home, Truck, HeartPulse, ArrowRight, ShieldAlert, Sparkles, Check } from 'lucide-react';

export const QuickServices: React.FC = () => {
  const { config } = useStore();

  const services = [
    {
      icon: <FileText className="w-6 h-6 text-sky-400" />,
      tag: "100% Digital",
      tagColor: "bg-sky-950 text-sky-300 border-sky-800/60",
      gradient: "from-sky-900/40 via-slate-900 to-slate-900",
      border: "hover:border-sky-500/50",
      title: 'Resultados de Laudos Online',
      desc: 'Acesse seus resultados pelo computador ou smartphone usando a chave e senha impressas no seu protocolo.',
      link: config.portalUrl,
      btnText: 'Consultar Laudos',
      external: true,
      features: ['Download em PDF', 'Histórico completo', 'Segurança total de dados'],
    },
    {
      icon: <Home className="w-6 h-6 text-teal-400" />,
      tag: "Conforto & Praticidade",
      tagColor: "bg-teal-950 text-teal-300 border-teal-800/60",
      gradient: "from-teal-900/40 via-slate-900 to-slate-900",
      border: "hover:border-teal-500/50",
      title: 'Coleta Domiciliar & Empresarial',
      desc: 'Nossa equipe técnica vai até a sua residência ou empresa com todos os materiais estéreis para a sua coleta.',
      link: `https://wa.me/${config.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20coleta%20domiciliar.`,
      btnText: 'Agendar em Casa',
      external: true,
      features: ['Horário marcado', 'Ideal para idosos e crianças', 'Atendimento corporativo'],
    },
    {
      icon: <Truck className="w-6 h-6 text-amber-400" />,
      tag: "Credenciado DETRAN",
      tagColor: "bg-amber-950 text-amber-300 border-amber-800/60",
      gradient: "from-amber-900/30 via-slate-900 to-slate-900",
      border: "hover:border-amber-500/50",
      title: 'Exame Toxicológico CNH & CLT',
      desc: 'Coleta rápida para renovação de CNH categorias C, D e E, processos admissionais e concursos públicos.',
      link: `https://wa.me/${config.whatsapp}?text=Ol%C3%A1!%20Preciso%20fazer%20o%20exame%20toxicol%C3%B3gico.`,
      btnText: 'Fazer Toxicológico',
      external: true,
      features: ['Sem agulhas (queratina)', 'Laudo aceito no RENACH', 'Entrega rápida'],
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-rose-400" />,
      tag: "Saúde Preventiva",
      tagColor: "bg-rose-950 text-rose-300 border-rose-800/60",
      gradient: "from-rose-900/30 via-slate-900 to-slate-900",
      border: "hover:border-rose-500/50",
      title: 'Check-ups de Rotina & Perfil',
      desc: 'Painéis laboratoriais completos desenvolvidos para acompanhar sua saúde de forma preventiva e personalizada.',
      link: '#exames',
      btnText: 'Conhecer Pacotes',
      external: false,
      features: ['Homem e Mulher 40+', 'Pediátrico e Pré-natal', 'Avaliação metabólica'],
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Nossos Principais Serviços
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            Soluções Completas para a Sua Saúde
          </h2>
          <p className="text-slate-400 mt-4 text-base leading-relaxed">
            Estrutura planejada para proporcionar conforto, agilidade nos laudos e a máxima precisão médica em cada etapa.
          </p>
        </div>

        {/* Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl bg-gradient-to-b ${item.gradient} border border-slate-800 ${item.border} flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-500/10 group`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 font-display">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-800/80">
                  {item.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={item.link}
                target={item.external ? '_blank' : '_self'}
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-slate-800 hover:bg-sky-600 text-white font-bold text-sm border border-slate-700 hover:border-sky-500 transition-all duration-300 group-hover:shadow-lg"
              >
                <span>{item.btnText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
