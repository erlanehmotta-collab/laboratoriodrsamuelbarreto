import React from 'react';
import { useStore } from '../store/StoreContext';
import { Instagram, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  const { config } = useStore();

  const posts = [
    {
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
      title: "Jejum para exames de sangue: tudo o que você precisa saber antes da coleta.",
      likes: "142",
      comments: "18"
    },
    {
      img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80",
      title: "Check-up preventivo: cuidar da sua saúde é um ato de amor com você e sua família.",
      likes: "210",
      comments: "24"
    },
    {
      img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
      title: "Coleta Domiciliar: mais comodidade e segurança no conforto do seu lar.",
      likes: "189",
      comments: "15"
    },
    {
      img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80",
      title: "Conheça nossos equipamentos automatizados que garantem precisão máxima.",
      likes: "305",
      comments: "32"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 text-xs font-bold uppercase mb-2">
              <Instagram className="w-3.5 h-3.5" />
              Siga no Instagram
            </div>
            <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white">
              @{config.instagram}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Dicas de saúde, preparos de exames e novidades da nossa rotina laboratorial.
            </p>
          </div>

          <a
            href={`https://instagram.com/${config.instagram}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-sm shadow-md hover:opacity-95 transition-opacity"
          >
            <span>Seguir no Instagram</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href={`https://instagram.com/${config.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-sm aspect-square block"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <p className="text-xs line-clamp-3 font-medium mb-3">{post.title}</p>
                <div className="flex items-center gap-4 text-xs font-bold text-slate-200">
                  <span className="flex items-center gap-1"><Heart className="w-4 h-4 fill-white" /> {post.likes}</span>
                  <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> {post.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
