import React, { createContext, useContext, useState, useEffect } from 'react';

export interface SiteConfig {
  name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  address: string;
  instagram: string;
  hours: string;
  portalUrl: string;
  primaryColor: string;
  accentColor: string;
  themeMode: 'light' | 'dark';
}

const defaultConfig: SiteConfig = {
  name: 'Laboratório Dr. Samuel Barreto',
  tagline: 'Precisão diagnóstica, agilidade e cuidado com a sua saúde.',
  phone: '(38) 3228-1234',
  whatsapp: '5538999999999',
  address: 'Praça Ferreira Leal, 713 - Centro, Coração de Jesus - MG',
  instagram: 'laboratoriodrsamuelbarreto',
  hours: 'Seg a Sex: 06:30 às 17:00 | Sáb: 07:00 às 11:00',
  portalUrl: 'https://laboratoriodrsamuel.com.br',
  primaryColor: '#0284c7',
  accentColor: '#10b981',
  themeMode: 'light',
};

interface StoreContextType {
  config: SiteConfig;
  updateConfig: (newConfig: Partial<SiteConfig>) => void;
  resetConfig: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      const saved = typeof window !== 'undefined' ? localStorage.getItem('lab_dr_samuel_config') : null;
      return saved ? { ...defaultConfig, ...JSON.parse(saved) } : defaultConfig;
    } catch (e) {
      return defaultConfig;
    }
  });

  useEffect(() => {
    localStorage.setItem('lab_dr_samuel_config', JSON.stringify(config));
    if (config.themeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [config]);

  const updateConfig = (newConfig: Partial<SiteConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };

  const resetConfig = () => {
    setConfig(defaultConfig);
  };

  return (
    <StoreContext.Provider value={{ config, updateConfig, resetConfig }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within StoreProvider');
  return context;
};
