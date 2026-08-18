import React from 'react';
import { Image as ImageIcon, Check } from 'lucide-react';

interface ImageGalleryProps {
  currentImage?: string;
  onSelect: (url: string) => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ currentImage, onSelect }) => {
  const stockImages = [
    {
      label: 'Profissional / Jaleco',
      url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    },
    {
      label: 'Atendimento / Acolhimento',
      url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    },
    {
      label: 'Microscópio / Análise',
      url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    },
    {
      label: 'Saúde da Família',
      url: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
        <ImageIcon className="w-4 h-4" />
        <span>Galeria de Imagens Sugeridas</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {stockImages.map((img, idx) => (
          <div
            key={idx}
            onClick={() => onSelect(img.url)}
            className={`group relative rounded-xl overflow-hidden cursor-pointer border-2 transition ${
              currentImage === img.url ? 'border-sky-600 ring-2 ring-sky-600/30' : 'border-transparent hover:border-slate-300'
            }`}
          >
            <img src={img.url} alt={img.label} className="w-full h-24 object-cover" />
            <div className="absolute inset-0 bg-slate-950/40 p-2 flex items-end justify-between">
              <span className="text-[10px] text-white font-medium truncate">{img.label}</span>
              {currentImage === img.url && (
                <div className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center">
                  <Check className="w-3 h-3" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
