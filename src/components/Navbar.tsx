import React, { useState } from 'react';
import { useStore } from '../store/StoreContext';
import { Activity, FileText, MessageCircle, Menu, X, Phone, Clock, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const { config } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-sky-900/40 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-sky-300 font-medium">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              {config.hours}
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              {config.address}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Unidade Aberta
            </span>
            <span className="text-slate-500">|</span>
            <a href={`tel:${config.phone.replace(/\D/g, '')}`} className="hover:text-white transition flex items-center gap-1">
              <Phone className="w-3 h-3 text-sky-400" />
              {config.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-600 via-sky-500 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-sky-500/25 group-hover:scale-105 transition-transform duration-300">
                <Activity className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black font-display tracking-tight text-slate-900 dark:text-white leading-tight">
                    Dr. Samuel Barreto
                  </span>
                  <Sparkles className="w-4 h-4 text-amber-400 hidden sm:inline" />
                </div>
                <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 tracking-wider uppercase flex items-center gap-1">
                  Laboratório de Análises Clínicas
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 font-semibold text-slate-600 dark:text-slate-300 text-sm">
              <a href="#inicio" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1 relative group">
                Início
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#servicos" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1 relative group">
                Serviços
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#exames" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1 relative group">
                Guia de Exames
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#sobre" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1 relative group">
                Sobre Nós
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#convenios" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1 relative group">
                Convênios
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#faq" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1 relative group">
                Dúvidas
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 transition-all duration-300 group-hover:w-full" />
              </a>
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={config.portalUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-sky-600/30 text-sky-700 dark:text-sky-300 font-bold text-xs uppercase tracking-wider hover:bg-sky-50 dark:hover:bg-sky-950/40 transition-colors"
              >
                <FileText className="w-4 h-4 text-sky-600" />
                <span>Resultados Online</span>
              </a>
              <a
                href={`https://wa.me/${config.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20exames%20e%20agendamento.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-sky-500/25 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                aria-label="Abrir Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
            <a href="#inicio" onClick={() => setIsOpen(false)} className="block font-bold text-slate-800 dark:text-slate-100 py-1.5">Início</a>
            <a href="#servicos" onClick={() => setIsOpen(false)} className="block font-bold text-slate-800 dark:text-slate-100 py-1.5">Serviços</a>
            <a href="#exames" onClick={() => setIsOpen(false)} className="block font-bold text-slate-800 dark:text-slate-100 py-1.5">Guia de Exames</a>
            <a href="#sobre" onClick={() => setIsOpen(false)} className="block font-bold text-slate-800 dark:text-slate-100 py-1.5">Sobre Nós</a>
            <a href="#convenios" onClick={() => setIsOpen(false)} className="block font-bold text-slate-800 dark:text-slate-100 py-1.5">Convênios</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="block font-bold text-slate-800 dark:text-slate-100 py-1.5">Dúvidas</a>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
              <a
                href={config.portalUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-sky-600 text-sky-700 dark:text-sky-300 font-bold text-sm"
              >
                <FileText className="w-4 h-4 text-sky-600" /> Resultados Online
              </a>
              <a
                href={`https://wa.me/${config.whatsapp}?text=Ol%C3%A1!`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-sky-600 to-teal-500 text-white font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp de Atendimento
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
