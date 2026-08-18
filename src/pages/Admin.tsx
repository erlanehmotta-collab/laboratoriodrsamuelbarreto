import React, { useState } from 'react';
import { useStore } from '../store/StoreContext';
import { Link } from 'react-router-dom';
import { ArrowLeft, Save, RotateCcw, Lock, Moon, Sun, Building2, Phone, MapPin, Globe, Palette } from 'lucide-react';
import { PhoneMockup } from '../components/admin/PhoneMockup';
import { TypographyStudio } from '../components/admin/TypographyStudio';
import { ConfirmModal } from '../components/admin/ConfirmModal';

export const Admin: React.FC = () => {
  const { config, updateConfig, resetConfig } = useStore();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Senha incorreta. A senha padrão é admin123');
    }
  };

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-slate-800 border border-slate-700 rounded-3xl max-w-md w-full p-8 text-white shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-sky-600/20 text-sky-400 flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold font-display">Painel Administrativo</h1>
            <p className="text-sm text-slate-400">Laboratório Dr. Samuel Barreto</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Senha de Acesso
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite a senha (padrão: admin123)"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 text-sm"
              />
              {errorMsg && <p className="text-xs text-rose-400 mt-2">{errorMsg}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-500 font-bold text-sm text-white shadow-lg transition"
            >
              Entrar no Painel
            </button>
          </form>

          <div className="text-center">
            <Link to="/" className="text-xs text-slate-400 hover:text-white transition">
              ← Voltar para o Site Público
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-lg font-bold font-display">Painel de Edição do Site</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">Laboratório Dr. Samuel Barreto</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => updateConfig({ themeMode: config.themeMode === 'dark' ? 'light' : 'dark' })}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            title="Alternar Tema"
          >
            {config.themeMode === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>
          <button
            onClick={() => setShowConfirmReset(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-800 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Restaurar Padrão
          </button>
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md transition"
          >
            <Save className="w-3.5 h-3.5" /> Salvar Alterações
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {savedSuccess && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-semibold animate-in fade-in">
            ✓ Configurações salvas no navegador com sucesso!
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form (Editor) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Informações Gerais */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
              <div className="flex items-center gap-2 font-bold text-base pb-2 border-b border-slate-100 dark:border-slate-800">
                <Building2 className="w-5 h-5 text-sky-600" />
                <span>Dados Institucionais</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Nome da Empresa</label>
                  <input
                    type="text"
                    value={config.name}
                    onChange={(e) => updateConfig({ name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Telefone Fixo</label>
                  <input
                    type="text"
                    value={config.phone}
                    onChange={(e) => updateConfig({ phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Slogan / Frase de Destaque</label>
                <input
                  type="text"
                  value={config.tagline}
                  onChange={(e) => updateConfig({ tagline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Endereço Completo</label>
                <input
                  type="text"
                  value={config.address}
                  onChange={(e) => updateConfig({ address: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Horário de Funcionamento</label>
                <input
                  type="text"
                  value={config.hours}
                  onChange={(e) => updateConfig({ hours: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            {/* Redes & Integrações */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
              <div className="flex items-center gap-2 font-bold text-base pb-2 border-b border-slate-100 dark:border-slate-800">
                <Globe className="w-5 h-5 text-teal-600" />
                <span>Canais & Links Digitais</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">WhatsApp (apenas números)</label>
                  <input
                    type="text"
                    value={config.whatsapp}
                    onChange={(e) => updateConfig({ whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Usuário Instagram (@)</label>
                  <input
                    type="text"
                    value={config.instagram}
                    onChange={(e) => updateConfig({ instagram: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Link do Portal de Laudos / Resultados</label>
                <input
                  type="text"
                  value={config.portalUrl}
                  onChange={(e) => updateConfig({ portalUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <TypographyStudio />

          </div>

          {/* Right Column: Live Phone Mockup Preview */}
          <div className="lg:col-span-4 flex flex-col items-center sticky top-24">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Preview em Tempo Real
            </span>
            <PhoneMockup />
          </div>

        </div>
      </div>

      <ConfirmModal
        isOpen={showConfirmReset}
        title="Restaurar Configurações Padrão?"
        message="Isso irá resetar todas as personalizações para os valores iniciais do Laboratório Dr. Samuel Barreto."
        onConfirm={() => {
          resetConfig();
          setShowConfirmReset(false);
        }}
        onCancel={() => setShowConfirmReset(false)}
      />

    </div>
  );
};
