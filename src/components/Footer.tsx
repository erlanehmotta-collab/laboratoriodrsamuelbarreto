import React from 'react';
import { useStore } from '../store/StoreContext';
import { MapPin, Phone, Clock, Instagram, FileText, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { config } = useStore();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-bold">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold font-display text-white tracking-tight">
                {config.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Análises Clínicas Gomes e Barreto Ltda. Tradição, ética científica e tecnologia diagnóstica a serviço da sua saúde.
            </p>
            <div className="pt-2">
              <a
                href={`https://instagram.com/${config.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                @{config.instagram}
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 font-display">Acesso Rápido</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#inicio" className="hover:text-sky-400 transition">Início</a></li>
              <li><a href="#servicos" className="hover:text-sky-400 transition">Serviços & Coleta</a></li>
              <li><a href="#exames" className="hover:text-sky-400 transition">Guia de Exames</a></li>
              <li><a href="#sobre" className="hover:text-sky-400 transition">Sobre o Laboratório</a></li>
              <li><a href="#convenios" className="hover:text-sky-400 transition">Planos & Convênios</a></li>
              <li><a href="#faq" className="hover:text-sky-400 transition">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Units */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 font-display">Unidade & Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span>{config.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{config.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{config.hours}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Online Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 font-display">Resultados Online</h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Consulte seu laudo com login e senha fornecidos no momento do atendimento.
            </p>
            <a
              href={config.portalUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition shadow-sm"
            >
              <FileText className="w-4 h-4" />
              Acessar Laudos
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {config.name}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <Link to="/admin" className="hover:text-slate-400 transition">Painel Administrativo</Link>
            <span>•</span>
            <span>Responsável Técnico Especializado</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
