import React from 'react';
import { useStore } from '../store/StoreContext';
import { ShieldCheck, Clock, Award, ArrowRight, FileCheck, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const { config } = useStore();

  return (
    <section id="inicio" className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Copy & CTAs) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs sm:text-sm font-semibold shadow-xs">
              <Award className="w-4 h-4 text-sky-600" />
              <span>Tradição & Excelência em Medicina Diagnóstica</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Cuidado, Precisão e Rapidez no{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-500">
                Diagnóstico da Sua Saúde
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              No <strong>Laboratório Dr. Samuel Barreto</strong>, aliamos tecnologia laboratorial de ponta a um atendimento humanizado para garantir laudos rápidos e seguros para você e sua família.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={`https://wa.me/${config.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20exame.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-base shadow-lg shadow-sky-600/25 transition-all hover:scale-[1.02] group"
              >
                <span>Agendar Coleta no WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={config.portalUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 font-bold text-base shadow-sm transition-all"
              >
                <FileCheck className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                <span>Consultar Laudo Online</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">Controle Rigoroso</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-sky-500 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">Resultados Ágeis</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">Coleta Domiciliar</span>
              </div>
            </div>
          </div>

          {/* Right Column (Hero Visual / Photo Card) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Blur */}
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl -z-10 pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl -z-10 pointer-events-none" />

              {/* Main Image Frame */}
              <div className="rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl relative bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
                  alt="Profissional do Laboratório Dr. Samuel Barreto"
                  className="w-full h-[460px] object-cover object-center"
                />

                {/* Floating Card Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/40 dark:border-slate-700 shadow-lg flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Qualidade Comprovada</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Equipamentos calibrados e equipe altamente qualificada.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
