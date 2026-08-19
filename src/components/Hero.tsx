import React, { useState } from 'react';
import { useStore } from '../store/StoreContext';
import { ShieldCheck, Clock, Award, ArrowRight, FileCheck, Search, Sparkles, CheckCircle2, UserCheck, Stethoscope } from 'lucide-react';

export const Hero: React.FC = () => {
  const { config } = useStore();
  const [searchQuery, setSearchQuery] = useState('');

  const quickSearchTags = [
    'Hemograma', 'Toxicológico CNH', 'Glicemia', 'TSH Tireoide', 'Vitamina D', 'Sexagem Fetal', 'DNA'
  ];

  return (
    <section id="inicio" className="relative pt-8 pb-20 lg:pt-16 lg:pb-32 overflow-hidden bg-slate-950 text-white">
      
      {/* Background Decorative Mesh & Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute -bottom-10 left-1/3 w-[600px] h-64 bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none -z-0" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Copy & Interactive Search) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-sky-500/30 text-sky-300 text-xs sm:text-sm font-semibold shadow-inner backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <Award className="w-4 h-4 text-amber-400" />
              <span>Referência em Medicina Diagnóstica & Toxicológico</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-[1.12]">
              Precisão Científica e{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
                Cuidado Humano
              </span>{' '}
              para a Sua Saúde.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Laudos com máxima assertividade, agilidade na entrega e tecnologia laboratorial de última geração. Atendimento humanizado no laboratório, na sua casa ou empresa.
            </p>

            {/* Interactive Exam Search Box */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-2 sm:p-2.5 shadow-2xl backdrop-blur-xl max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 px-3 py-1.5">
                <Search className="w-5 h-5 text-sky-400 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Qual exame você precisa realizar hoje?"
                  className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
                />
                <a
                  href={`https://wa.me/${config.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20valores%20e%20preparo%20para%20o%20exame:%20${encodeURIComponent(searchQuery || 'Exames Gerais')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs whitespace-nowrap transition-all shadow-md shrink-0 flex items-center gap-1.5"
                >
                  <span>Consultar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Quick Tags */}
              <div className="pt-2.5 pb-1 px-3 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-[11px] text-slate-400">
                <span className="font-semibold text-slate-500 shrink-0">Mais buscados:</span>
                {quickSearchTags.map((tag, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSearchQuery(tag)}
                    className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-sky-950 hover:text-sky-300 text-slate-300 transition-colors shrink-0 border border-slate-700/50"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <a
                href={`https://wa.me/${config.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20exame%20no%20Laborat%C3%B3rio%20Dr.%20Samuel%20Barreto.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 via-sky-600 to-sky-700 hover:opacity-95 text-white font-extrabold text-base shadow-xl shadow-sky-600/30 transition-all hover:scale-[1.02] group"
              >
                <span>Agendar Coleta no WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={config.portalUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700 font-bold text-base shadow-lg transition-all"
              >
                <FileCheck className="w-5 h-5 text-teal-400" />
                <span>Consultar Resultados Online</span>
              </a>
            </div>

            {/* Key Metrics / Trust Bar */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-slate-800/80 text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">
                  +20 Anos
                </div>
                <p className="text-xs text-slate-400 mt-0.5">De tradição e confiança médica</p>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400">
                  99.8%
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Precisão em laudos automatizados</p>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-300">
                  100%
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Coletas seguras e humanizadas</p>
              </div>
            </div>

          </div>

          {/* Right Column (Visual Layered Showcase) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-sky-500 via-teal-400 to-indigo-500 rounded-[32px] blur-xl opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
                  alt="Laboratório Dr. Samuel Barreto - Análises Clínicas"
                  className="w-full h-[480px] object-cover object-center"
                />

                {/* Subtle Gradient Shade on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Badge Top Right */}
                <div className="absolute top-5 right-5 px-3.5 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-xl flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-teal-400" />
                  <span className="text-xs font-bold text-slate-200">Equipe Especializada</span>
                </div>

                {/* Floating Card Bottom */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-teal-500 to-sky-600 text-white flex items-center justify-center shrink-0 shadow-md">
                      <ShieldCheck className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-sm font-display flex items-center gap-1.5">
                        Controle Rigoroso de Qualidade
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Certificação e calibração constante de todos os aparelhos diagnósticos.
                      </p>
                    </div>
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
