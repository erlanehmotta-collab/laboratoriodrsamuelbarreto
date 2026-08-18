import React from 'react';
import { useStore } from '../store/StoreContext';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const { config } = useStore();

  return (
    <a
      href={`https://wa.me/${config.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20exames%20e%20atendimento.`}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-xl shadow-emerald-500/30 hover:scale-105 transition-all group"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="hidden sm:inline-block pr-1">Falar no WhatsApp</span>
    </a>
  );
};
