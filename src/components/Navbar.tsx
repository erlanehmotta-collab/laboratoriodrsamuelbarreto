import React, { useState } from 'react';
import { useStore } from '../store/StoreContext';
import { Activity, FileText, MessageCircle, Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const { config } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-slate-200/80 dark:border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-600 to-teal-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold font-display tracking-tight text-slate-900 dark:text-white block leading-tight">
                Dr. Samuel Barreto
              </span>
              <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
                Laboratório de Análises
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600 dark:text-slate-300 text-sm">
            <a href="#inicio" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Início</a>
            <a href="#servicos" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Serviços</a>
            <a href="#exames" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Exames</a>
            <a href="#sobre" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Sobre Nós</a>
            <a href="#convenios" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Convênios</a>
            <a href="#faq" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Dúvidas</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={config.portalUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-sky-600/30 text-sky-700 dark:text-sky-300 font-semibold text-sm hover:bg-sky-50 dark:hover:bg-sky-950/40 transition-colors"
            >
              <FileText className="w-4 h-4 text-sky-600" />
              Resultados Online
            </a>
            <a
              href={`https://wa.me/${config.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20exames.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-md shadow-sky-600/20 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4" />
              Agendar no WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Abrir Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg px-6 py-5 space-y-4">
          <a href="#inicio" onClick={() => setIsOpen(false)} className="block font-medium text-slate-700 dark:text-slate-200 py-1">Início</a>
          <a href="#servicos" onClick={() => setIsOpen(false)} className="block font-medium text-slate-700 dark:text-slate-200 py-1">Serviços</a>
          <a href="#exames" onClick={() => setIsOpen(false)} className="block font-medium text-slate-700 dark:text-slate-200 py-1">Exames</a>
          <a href="#sobre" onClick={() => setIsOpen(false)} className="block font-medium text-slate-700 dark:text-slate-200 py-1">Sobre Nós</a>
          <a href="#convenios" onClick={() => setIsOpen(false)} className="block font-medium text-slate-700 dark:text-slate-200 py-1">Convênios</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="block font-medium text-slate-700 dark:text-slate-200 py-1">Dúvidas</a>
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
            <a
              href={config.portalUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-sky-600 text-sky-700 font-semibold text-sm"
            >
              <FileText className="w-4 h-4" /> Resultados Online
            </a>
            <a
              href={`https://wa.me/${config.whatsapp}?text=Ol%C3%A1!`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-sky-600 text-white font-semibold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
