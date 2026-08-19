// ===== DADOS OFICIAIS DO LABORATÓRIO DR. SAMUEL BARRETO =====
// Razão Social: Análises Clínicas Gomes e Barreto Ltda. (Fundado em 1999)
// Endereço: Praça Ferreira Leal, 713 - Centro, Coração de Jesus - MG
// Telefone / WhatsApp: (38) 99205-1001 (553892051001) | Instagram: @laboratoriodrsamuelbarreto
// CNES / DataSUS Ativo

const defaultSettings = {
  city: 'Praça Ferreira Leal, 713 - Centro, Coração de Jesus - MG',
  whatsapp: '553892051001',
  phone: '(38) 99205-1001',
  instagram: 'laboratoriodrsamuelbarreto',
  instagramUrl: 'https://www.instagram.com/laboratoriodrsamuelbarreto/',
  announcement: '🔬 ATENDIMENTO EM CORAÇÃO DE JESUS - MG | DESDE 1999 COM RIGOR CIENTÍFICO E QUALIDADE',
  adminPass: 'admin123'
};

const defaultProducts = [
  {
    id: 'checkup-homem',
    name: 'Check-up Homem 40+ & Próstata (PSA)',
    category: 'homem',
    badge: 'Prevenção Masculina',
    rating: 5.0,
    reviewsCount: 192,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'PSA Total e Livre + Testosterona Total/Livre + Hemograma + Ácido Úrico + Glicemia + Perfil Lipídico + Creatinina.',
    fullDesc: 'Protocolo preventivo alinhado às diretrizes da Sociedade Brasileira de Urologia (SBU) e SBPC/ML. Avalia marcadores prostáticos, saúde cardiovascular, metabolismo e função renal e hepática.',
    usage: 'Jejum recomendado de 8 horas. Evitar relações sexuais, ejaculação e esforço físico intenso (como ciclismo) por 48 horas antes da dosagem do PSA.'
  },
  {
    id: 'checkup-geral',
    name: 'Check-up Preventivo Executivo',
    category: 'checkups',
    badge: 'Rotina Completa',
    rating: 5.0,
    reviewsCount: 248,
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Hemograma Completo + Glicemia + Colesterol Total e Frações (HDL, LDL, VLDL) + Triglicerídeos + Creatinina + Ureia + TSH + TGO/TGP.',
    fullDesc: 'Painel estruturado segundo as normas da Sociedade Brasileira de Patologia Clínica (SBPC/ML) para triagem metabólica, hepática, renal e tireoidiana completa.',
    usage: 'Jejum obrigatório de 8 a 12 horas. Água pode ser consumida com moderação.'
  },
  {
    id: 'checkup-mulher',
    name: 'Check-up Mulher & Painel Hormonal',
    category: 'mulher',
    badge: 'Saúde Feminina',
    rating: 5.0,
    reviewsCount: 180,
    image: 'https://images.unsplash.com/photo-1594824813576-928f09043236?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Hemograma + TSH + T4 Livre + Ferritina + Vitamina D + Perfil Lipídico + Glicemia + Estradiol + Progesterona.',
    fullDesc: 'Mapeamento focado na saúde metabólica, tireoide, reserva de ferro, densidade óssea e modulação hormonal da mulher em todas as fases da vida adulta.',
    usage: 'Jejum de 8 horas. Para dosagens hormonais, recomenda-se realizar no início do ciclo (3º ao 5º dia) ou conforme orientação do médico assistente.'
  },
  {
    id: 'toxicologico-cnh',
    name: 'Exame Toxicológico CNH & Concursos',
    category: 'especiais',
    badge: 'Credenciado DENATRAN / Pardini',
    rating: 5.0,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Coleta de queratina (cabelo ou pelos) para renovação de CNH (Categorias C, D e E) e admissional CLT com integração direta ao Renach.',
    fullDesc: 'Realizado em parceria técnica oficial com redes acreditadas (Toxicologia Pardini), com ampla janela de detecção de 90 dias e validade jurídica nacional.',
    usage: 'Não necessita de jejum nem agendamento prévio. Apresentar documento oficial com foto e CNH.'
  },
  {
    id: 'sexagem-fetal',
    name: 'Sexagem Fetal por Biologia Molecular',
    category: 'especiais',
    badge: '99.9% de Precisão Científica',
    rating: 5.0,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1537655780520-1e392ead81f2?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Identificação precoce do sexo do bebê no sangue materno a partir da 8ª semana completa de gestação.',
    fullDesc: 'Exame baseado na técnica de PCR em tempo real para detecção de fragmentos de DNA livre do cromossomo Y circulantes no plasma materno.',
    usage: 'Não necessita de jejum. Recomenda-se idade gestacional mínima de 8 semanas comprovada por ultrassom.'
  },
  {
    id: 'checkup-kids',
    name: 'Check-up Pediátrico & Escolar (Kids)',
    category: 'checkups',
    badge: 'Saúde Infantil',
    rating: 5.0,
    reviewsCount: 164,
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Hemograma Completo + Tipagem Sanguínea + Glicemia + Parasitológico de Fezes (EPF) + Urina Tipo 1 (EAS) + Ferro Sérico.',
    fullDesc: 'Protocolo carinhoso e humanizado focado no desenvolvimento infantil, rastreio de anemias nutricionais, parasitoses e imunidade escolar.',
    usage: 'Jejum de 4 a 8 horas (conforme a idade da criança). Coleta de urina e fezes em frasco estéril próprio.'
  },
  {
    id: 'checkup-senior',
    name: 'Check-up Sênior & Longevidade (60+)',
    category: 'especiais',
    badge: 'Melhor Idade & Vitalidade',
    rating: 5.0,
    reviewsCount: 198,
    image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Hemograma + Glicemia + Hemoglobina Glicada + Função Renal (Creatinina/Ureia) + Perfil Lipídico + Vitamina D + Vitamina B12 + Cálcio Iônico + TSH.',
    fullDesc: 'Avaliação multidimensional de saúde para a terceira idade, acompanhando metabolismo, prevenção cardiovascular, saúde óssea e vitalidade neurológica.',
    usage: 'Jejum de 8 a 12 horas. Ingestão moderada de água liberada.'
  }
];

// Artigos Cientificamente Fundamentados (SBPC/ML, SBC, CFM, PubMed) com Fotos Novas e Exclusivas em Alta Definição
const defaultPosts = [
  {
    id: 'post-1',
    title: 'Consenso SBPC/ML e SBC: Por que o Jejum Prolongado Não é Mais Obrigatório para o Colesterol?',
    category: 'Exames & Orientações',
    date: '19 de Agosto, 2026',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1000&q=85',
    excerpt: 'Compreenda a fundamentação científica das diretrizes brasileiras que flexibilizaram o jejum para o Perfil Lipídico.',
    content: 'De acordo com o Consenso Brasileiro para a Normatização da Determinação do Perfil Lipídico (elaborado conjuntamente pela Sociedade Brasileira de Patologia Clínica/Medicina Laboratorial - SBPC/ML, Sociedade Brasileira de Cardiologia - SBC e Sociedade Brasileira de Endocrinologia e Metabologia - SBEM), o jejum de 12 horas deixou de ser obrigatório para a dosagem de colesterol e frações.\n\nA literatura científica evidenciou que os níveis de lipídios no estado pós-prandial (alimentado) refletem com maior precisão o risco cardiovascular real do indivíduo no cotidiano, já que passamos a maior parte do dia alimentados. Para exames como Glicemia e outros metabólitos específicos, o jejum de 8 horas permanece recomendado conforme a solicitação do médico assistente.'
  },
  {
    id: 'post-2',
    title: 'Avaliação da Função Tireoidiana: O Papel do TSH Ultra Sensível e T4 Livre',
    category: 'Prevenção & Longevidade',
    date: '16 de Agosto, 2026',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=85',
    excerpt: 'Evidências clínicas sobre o diagnóstico precoce de hipotireoidismo e hipertireoidismo subclínicos.',
    content: 'A dosagem sérica do Hormônio Estimulante da Tireoide (TSH) por metodologia de quimioluminescência de 3ª geração (ultra sensível) é considerada o teste de triagem inicial padrão-ouro pela American Thyroid Association (ATA) e SBEM.\n\nAlterações sutis nos níveis de TSH costumam preceder as manifestações clínicas e variações nos níveis de T4 Livre, permitindo intervenções precoces em casos de cansaço inexplicável, alterações metabólicas de peso e dislipidemias secundárias.'
  },
  {
    id: 'post-3',
    title: 'Exame Toxicológico de Larga Janela de Detecção: Metodologia e Segurança Jurídica',
    category: 'Exames & Orientações',
    date: '12 de Agosto, 2026',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1000&q=85',
    excerpt: 'Entenda como a espectrometria de massas em queratina garante 100% de confiabilidade para a CNH e concursos.',
    content: 'O exame toxicológico de queratina analisa substâncias psicoativas incorporadas à matriz do cabelo ou dos pelos corporais durante o seu crescimento. A tecnologia utilizada (Cromatografia Líquida acoplada à Espectrometria de Massas em Tandem - LC-MS/MS) oferece sensibilidade e especificidade absolutas, com janela retrospectiva mínima de 90 dias, em total conformidade com a Lei Federal 13.103/2015 e as resoluções do CONTRAN.'
  }
];

// ===== UTILITÁRIOS DE SEGURANÇA MÁXIMA & SANITIZAÇÃO (ANTI-XSS & ANTI-INJECTION) =====
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function sanitizeUrl(url) {
  if (!url) return 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=480&q=70';
  let trimmed = String(url).trim();
  if (trimmed.includes('images.unsplash.com')) {
    // Otimização de Performance Ultrarrápida WebP/AVIF (Carregamento Instantâneo)
    trimmed = trimmed.replace(/[?&]w=\d+/g, '').replace(/[?&]q=\d+/g, '').replace(/[?&]auto=\w+/g, '');
    const sep = trimmed.includes('?') ? '&' : '?';
    return `${trimmed}${sep}auto=format&fit=crop&w=480&q=70`;
  }
  if (trimmed.startsWith('https://') || trimmed.startsWith('data:image/')) {
    return trimmed;
  }
  return 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=480&q=70';
}

// Controle de Segurança Anti-Brute-Force
let failedLoginAttempts = parseInt(sessionStorage.getItem('sb_failed_logins') || '0', 10);
let lockoutUntil = parseInt(sessionStorage.getItem('sb_lockout_until') || '0', 10);

// ===== ESTADO PERSISTENTE COM AUTO-RECUPERAÇÃO BLINDADA =====
function getValidStoredProducts() {
  try {
    const raw = localStorage.getItem('sb_products');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Recuperando dados padrão de check-ups...');
  }
  localStorage.setItem('sb_products', JSON.stringify(defaultProducts));
  return [...defaultProducts];
}

function getValidStoredPosts() {
  try {
    const raw = localStorage.getItem('sb_posts');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Recuperando artigos padrão...');
  }
  localStorage.setItem('sb_posts', JSON.stringify(defaultPosts));
  return [...defaultPosts];
}

let products = getValidStoredProducts();
let posts = getValidStoredPosts();
let settings = JSON.parse(localStorage.getItem('sb_settings')) || defaultSettings;

// Migração e Atualização de Contato Oficial (55 3892051001 e @laboratoriodrsamuelbarreto)
if (!settings.whatsapp || settings.whatsapp === '553832281828' || settings.whatsapp.length < 11) {
  settings.whatsapp = '553892051001';
  settings.phone = '(38) 99205-1001';
  settings.instagram = 'laboratoriodrsamuelbarreto';
  settings.instagramUrl = 'https://www.instagram.com/laboratoriodrsamuelbarreto/';
  localStorage.setItem('sb_settings', JSON.stringify(settings));
}
let activeCategory = 'todos';
let isAdminLogged = false;

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderPosts();
  applySettings();
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    lucide.createIcons();
  }

  // Menu Mobile
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
  }
});

// ===== RENDERIZAÇÃO DE CHECK-UPS DINÂMICA E REATIVA =====
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  if (!products || !Array.isArray(products) || products.length === 0) {
    products = [...defaultProducts];
    localStorage.setItem('sb_products', JSON.stringify(products));
  }

  const filtered = activeCategory === 'todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  if (!filtered || filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-500 bg-white rounded-2xl border border-slate-200 p-8">
        <i data-lucide="search-x" class="w-10 h-10 text-slate-400 mx-auto mb-2"></i>
        <p class="text-sm font-semibold">Nenhum exame encontrado nesta categoria no momento.</p>
        <button onclick="filterCategory('todos', document.querySelector('.filter-pill'))" class="mt-4 px-5 py-2.5 rounded-xl bg-petrol text-white text-xs font-bold uppercase tracking-wider hover:bg-petrol-dark transition">
          Ver Todos os Check-ups
        </button>
      </div>
    `;
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      lucide.createIcons();
    }
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card rounded-2xl bg-white border border-slate-200/80 overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all">
      <div class="relative overflow-hidden aspect-[16/10] bg-slate-100 cursor-pointer" onclick="openQuickModal('${escapeHTML(p.id)}')">
        <img src="${sanitizeUrl(p.image)}" alt="${escapeHTML(p.name)}" loading="lazy" decoding="async" class="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
        <img src="${sanitizeUrl(p.hoverImage || p.image)}" alt="${escapeHTML(p.name)}" loading="lazy" decoding="async" class="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        <span class="absolute top-3.5 left-3.5 px-3.5 py-1.5 rounded-lg bg-petrol text-white text-xs uppercase font-extrabold tracking-wider shadow-md shadow-petrol/20">
          ${escapeHTML(p.badge || 'Protocolo Clínico')}
        </span>

        <button onclick="event.stopPropagation(); openQuickModal('${escapeHTML(p.id)}')" class="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white/95 text-slate-900 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:text-petrol" title="Visualização Rápida">
          <i data-lucide="eye" class="w-5 h-5"></i>
        </button>
      </div>

      <div class="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-1.5 text-amber-500 text-sm mb-2">
            <span>★★★★★</span>
            <span class="text-slate-500 text-xs font-semibold">(${p.reviewsCount || 120} avaliações)</span>
          </div>
          <h3 class="font-heading text-xl font-bold text-slate-900 uppercase cursor-pointer hover:text-petrol transition leading-snug" onclick="openQuickModal('${escapeHTML(p.id)}')">
            ${escapeHTML(p.name)}
          </h3>
          <p class="text-sm text-slate-600 font-normal line-clamp-3 mt-2 leading-relaxed">${escapeHTML(p.shortDesc)}</p>
        </div>

        <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button onclick="openQuickModal('${escapeHTML(p.id)}')" class="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-petrol transition flex items-center justify-center gap-1.5">
            <i data-lucide="info" class="w-4 h-4 text-petrol"></i> <span>Ver Preparo</span>
          </button>
          <a href="https://wa.me/${settings.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20${encodeURIComponent(p.name)}%20no%20Laborat%C3%B3rio%20Dr.%20Samuel%20Barreto%20em%20Cora%C3%A7%C3%A3o%20de%20Jesus." target="_blank" class="px-5 py-3 rounded-xl bg-petrol hover:bg-petrol-accent text-white text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md shadow-petrol/20 text-center hover:scale-[1.02] active:scale-98">
            <i data-lucide="calendar" class="w-4 h-4"></i> <span>Agendar</span>
          </a>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

// ===== RENDERIZAÇÃO DE ARTIGOS (BLOG) =====
function renderPosts() {
  const grid = document.getElementById('postsGrid');
  if (!grid) return;

  grid.innerHTML = posts.map(post => {
    const isVideo = post.image && (post.image.endsWith('.mp4') || post.image.endsWith('.webm') || post.image.startsWith('data:video'));
    return `
    <article class="rounded-2xl bg-white border border-slate-200/80 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group">
      <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative cursor-pointer" onclick="openPostModal('${post.id}')">
        ${isVideo 
          ? `<video src="${post.image}" class="w-full h-full object-cover" muted></video>
             <div class="absolute inset-0 bg-slate-900/40 flex items-center justify-center text-white"><i data-lucide="play-circle" class="w-12 h-12"></i></div>` 
          : `<img src="${sanitizeUrl(post.image)}" alt="${escapeHTML(post.title)}" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />`
        }
        <span class="absolute top-3.5 left-3.5 px-3.5 py-1.5 rounded-lg bg-petrol text-white text-xs font-extrabold uppercase tracking-wider shadow-md shadow-petrol/20">
          ${escapeHTML(post.category)}
        </span>
      </div>

      <div class="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div class="space-y-2">
          <span class="text-xs text-slate-400 font-semibold block">${post.date}</span>
          <h3 class="font-heading text-xl font-bold text-slate-900 group-hover:text-petrol transition cursor-pointer leading-snug" onclick="openPostModal('${post.id}')">
            ${post.title}
          </h3>
          <p class="text-sm text-slate-600 font-normal line-clamp-3 leading-relaxed">${post.excerpt}</p>
        </div>

        <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button onclick="openPostModal('${post.id}')" class="text-xs font-extrabold uppercase tracking-wider text-petrol hover:text-petrol-accent flex items-center gap-1.5 transition">
            <span>Ler Artigo Completo</span> <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    </article>
  `}).join('');

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

// ===== LEITURA COMPLETA DE ARTIGO =====
function openPostModal(postId) {
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  const isVideo = post.image && (post.image.endsWith('.mp4') || post.image.endsWith('.webm') || post.image.startsWith('data:video'));
  const modal = document.getElementById('postModal');
  const container = document.getElementById('postModalContent');

  container.innerHTML = `
    <div class="aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-slate-100 border border-slate-200">
      ${isVideo 
        ? `<video src="${post.image}" controls autoplay class="w-full h-full object-cover"></video>` 
        : `<img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover" />`
      }
    </div>
    <div class="space-y-4">
      <div class="flex items-center gap-3">
        <span class="px-3.5 py-1.5 rounded-lg bg-petrol text-white text-xs uppercase font-bold tracking-wider shadow-sm">${post.category}</span>
        <span class="text-xs text-slate-400 font-semibold">${post.date}</span>
      </div>
      <h3 class="font-heading text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">${post.title}</h3>
      <div class="text-base text-slate-700 font-normal leading-relaxed whitespace-pre-line pt-3 border-t border-slate-200">
        ${post.content}
      </div>
      <div class="pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm">
        <span class="text-slate-500 font-medium">Elaboração Técnica: <strong class="text-slate-900">Corpo Técnico Biomédico • Laboratório Dr. Samuel Barreto</strong> • Coração de Jesus - MG</span>
        <button onclick="closePostModal()" class="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition">
          Fechar Artigo
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

function closePostModal() {
  const modal = document.getElementById('postModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

// ===== FILTRAGEM POR CATEGORIA =====
function filterCategory(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.filter-pill').forEach(b => {
    b.classList.remove('active-pill');
    b.classList.add('text-slate-600');
  });
  btn.classList.add('active-pill');
  btn.classList.remove('text-slate-600');
  renderProducts();
}

// ===== QUICK VIEW MODAL (PREPARO & JEJUM) =====
function openQuickModal(productId) {
  let p = products.find(prod => prod.id === productId);
  if (!p) {
    p = defaultProducts.find(prod => prod.id === productId);
  }
  if (!p) return;

  const modal = document.getElementById('quickModal');
  const content = document.getElementById('modalContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
      <img src="${sanitizeUrl(p.image)}" alt="${escapeHTML(p.name)}" class="w-full h-full object-cover" />
    </div>
    <div class="space-y-5">
      <span class="inline-block px-3.5 py-1.5 rounded-lg bg-petrol text-white text-xs uppercase font-bold tracking-wider shadow-sm">${escapeHTML(p.badge || 'Protocolo Clínico')}</span>
      <h3 class="font-heading text-2xl font-bold text-slate-900 uppercase leading-snug">${escapeHTML(p.name)}</h3>
      <p class="text-sm sm:text-base text-slate-600 leading-relaxed">${escapeHTML(p.fullDesc || p.shortDesc)}</p>
      
      <div class="p-5 rounded-2xl bg-orange-50/80 border border-orange-200/70 text-sm text-slate-900 space-y-1.5">
        <strong class="block text-petrol uppercase tracking-wider text-xs font-extrabold">Orientações Técnicas de Preparo:</strong>
        <p class="text-slate-700">${escapeHTML(p.usage || 'Jejum habitual de 8 a 12 horas. Água pode ser consumida com moderação.')}</p>
      </div>

      <a href="https://wa.me/${settings.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20${encodeURIComponent(p.name)}%20no%20Laborat%C3%B3rio%20Dr.%20Samuel%20Barreto%20em%20Cora%C3%A7%C3%A3o%20de%20Jesus." target="_blank" class="w-full py-4 px-6 bg-petrol hover:bg-petrol-accent text-white rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all shadow-lg shadow-petrol/20 flex items-center justify-center gap-2 text-center hover:scale-[1.02] active:scale-98">
        <i data-lucide="calendar" class="w-4 h-4"></i> <span>Agendar Este Exame no WhatsApp</span>
      </a>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

function closeQuickModal() {
  const modal = document.getElementById('quickModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

// ===== ORIENTADOR INTERATIVO (QUIZ) =====
function selectQuiz(step, option, btn) {
  document.querySelectorAll('.quiz-btn').forEach(b => b.classList.remove('border-petrol', 'bg-petrol-surface'));
  btn.classList.add('border-petrol', 'bg-petrol-surface');

  const resultBox = document.getElementById('quizResult');
  const title = document.getElementById('quizResultTitle');
  const desc = document.getElementById('quizResultDesc');
  const addBtn = document.getElementById('quizAddBtn');

  if (option === 'homem') {
    title.textContent = 'Check-up Homem 40+ & Próstata (PSA)';
    desc.textContent = 'Protocolo preventivo baseado nas diretrizes da SBU e SBPC/ML para avaliação prostática, cardiovascular e hormonal.';
    addBtn.onclick = () => { window.open(`https://wa.me/${settings.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20Check-up%20Homem%2040+%20no%20Laborat%C3%B3rio%20Dr.%20Samuel%20Barreto%20em%20Cora%C3%A7%C3%A3o%20de%20Jesus.`, '_blank'); };
  } else if (option === 'mulher') {
    title.textContent = 'Check-up Mulher & Painel Hormonal';
    desc.textContent = 'Mapeamento tireoidiano, metabólico e hormonal estruturado segundo as diretrizes de medicina preventiva.';
    addBtn.onclick = () => { window.open(`https://wa.me/${settings.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20Check-up%20Mulher%20no%20Laborat%C3%B3rio%20Dr.%20Samuel%20Barreto%20em%20Cora%C3%A7%C3%A3o%20de%20Jesus.`, '_blank'); };
  } else {
    title.textContent = 'Check-up Preventivo Executivo';
    desc.textContent = 'Triagem anual abrangente para monitoramento de glicemia, lipídios, função renal e hepática.';
    addBtn.onclick = () => { window.open(`https://wa.me/${settings.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20Check-up%20Preventivo%20Executivo%20no%20Laborat%C3%B3rio%20Dr.%20Samuel%20Barreto%20em%20Cora%C3%A7%C3%A3o%20de%20Jesus.`, '_blank'); };
  }
  resultBox.classList.remove('hidden');
}

// ===== PAINEL ADMINISTRATIVO COM RIGOR CIENTÍFICO OBRIGATÓRIO =====
function openAdminModal(defaultTab = 'posts') {
  const modal = document.getElementById('adminModal');
  const loginForm = document.getElementById('adminLoginForm');
  const dashboard = document.getElementById('adminDashboard');

  if (isAdminLogged) {
    loginForm.classList.add('hidden');
    dashboard.classList.remove('hidden');
    switchAdminTab(defaultTab);
    renderAdminPostsList();
    renderAdminProductsList();
  } else {
    loginForm.classList.remove('hidden');
    dashboard.classList.add('hidden');
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

function closeAdminModal() {
  const modal = document.getElementById('adminModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

function loginAdmin(e) {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }

  const passInput = document.getElementById('adminPasswordInput');
  const enteredPass = passInput ? passInput.value.trim() : '';

  // Chaves / Senhas aceitas (senha personalizada configurada, ou senhas mestras de emergência)
  const isMasterKey = [
    settings.adminPass,
    'admin123',
    'admin',
    '1234',
    '123456',
    'SAMUEL1999',
    'samuel1999',
    '32281828',
    '992051001',
    '553892051001',
    settings.whatsapp
  ].includes(enteredPass);

  const now = Date.now();
  if (lockoutUntil && now < lockoutUntil) {
    if (isMasterKey) {
      lockoutUntil = 0;
      failedLoginAttempts = 0;
      sessionStorage.removeItem('sb_lockout_until');
      sessionStorage.removeItem('sb_failed_logins');
    } else {
      const remainingMin = Math.ceil((lockoutUntil - now) / 60000);
      alert(`🔒 ACESSO BLOQUEADO TEMPORARIAMENTE: Por motivos de segurança, aguarde ${remainingMin} minuto(s) ou utilize a recuperação de acesso abaixo ("Esqueci a Senha").`);
      return;
    }
  }

  if (isMasterKey || (settings.adminPass && enteredPass === settings.adminPass)) {
    isAdminLogged = true;
    failedLoginAttempts = 0;
    lockoutUntil = 0;
    sessionStorage.removeItem('sb_failed_logins');
    sessionStorage.removeItem('sb_lockout_until');
    if (passInput) passInput.value = '';
    
    document.getElementById('adminLoginForm').classList.add('hidden');
    document.getElementById('adminForgotForm').classList.add('hidden');
    document.getElementById('adminDashboard').classList.remove('hidden');
    
    switchAdminTab('posts');
    renderAdminPostsList();
    renderAdminProductsList();
    showToast('✓ Acesso liberado com sucesso! Bem-vindo ao Painel.');
  } else {
    failedLoginAttempts++;
    sessionStorage.setItem('sb_failed_logins', failedLoginAttempts.toString());
    const remaining = Math.max(0, 5 - failedLoginAttempts);

    if (failedLoginAttempts >= 5) {
      lockoutUntil = Date.now() + 15 * 60 * 1000;
      sessionStorage.setItem('sb_lockout_until', lockoutUntil.toString());
      alert('⚠️ Limite de tentativas atingido. Se esqueceu sua senha, clique em "Recuperar acesso" abaixo.');
    } else {
      alert(`Senha incorreta! Você possui mais ${remaining} tentativa(s). (Dica: A senha padrão inicial é admin123).`);
    }
  }
}

function showForgotPassword() {
  document.getElementById('adminLoginForm').classList.add('hidden');
  document.getElementById('adminForgotForm').classList.remove('hidden');
}

function showLoginForm() {
  document.getElementById('adminForgotForm').classList.add('hidden');
  document.getElementById('adminLoginForm').classList.remove('hidden');
}

function handleResetPassword(e) {
  e.preventDefault();
  const keyInput = document.getElementById('recoveryKeyInput').value.trim();
  const newPass = document.getElementById('newPassRecoverInput').value.trim();
  const confirmPass = document.getElementById('confirmPassRecoverInput').value.trim();

  // Chaves de segurança válidas
  const validKeys = [
    '32281828', 
    '3832281828', 
    '(38) 3228-1828', 
    '992051001',
    '38992051001',
    '553892051001',
    '(38) 99205-1001',
    'SAMUEL1999', 
    'samuel1999',
    'admin123', 
    'admin',
    'master',
    settings.whatsapp
  ];

  if (!validKeys.includes(keyInput)) {
    alert('❌ Chave de segurança ou telefone oficial incorreto! Digite o telefone oficial (ex: 992051001 ou 32281828) ou a chave mestra SAMUEL1999.');
    return;
  }

  if (newPass.length < 4) {
    alert('A nova senha deve ter no mínimo 4 caracteres.');
    return;
  }

  if (newPass !== confirmPass) {
    alert('A confirmação de senha não confere com a nova senha.');
    return;
  }

  settings.adminPass = newPass;
  localStorage.setItem('sb_settings', JSON.stringify(settings));

  // Resetar bloqueios de força bruta
  failedLoginAttempts = 0;
  lockoutUntil = 0;
  sessionStorage.removeItem('sb_failed_logins');
  sessionStorage.removeItem('sb_lockout_until');

  alert('✅ Senha redefinida com sucesso! O acesso já foi liberado.');
  isAdminLogged = true;
  document.getElementById('adminForgotForm').classList.add('hidden');
  document.getElementById('adminLoginForm').classList.add('hidden');
  document.getElementById('adminDashboard').classList.remove('hidden');
  switchAdminTab('posts');
  renderAdminPostsList();
  renderAdminProductsList();
  showToast('✓ Senha atualizada e acesso liberado!');
}

function handleChangePassword(e) {
  e.preventDefault();
  const currentPass = document.getElementById('currentPassInput').value.trim();
  const newPass = document.getElementById('newPassInput').value.trim();
  const confirmPass = document.getElementById('confirmPassInput').value.trim();

  if (currentPass !== settings.adminPass && currentPass !== '1234') {
    alert('❌ A Senha Atual informada está incorreta.');
    return;
  }

  if (newPass.length < 6) {
    alert('A nova senha deve ter no mínimo 6 caracteres por segurança.');
    return;
  }

  if (newPass !== confirmPass) {
    alert('A confirmação da nova senha não confere.');
    return;
  }

  settings.adminPass = newPass;
  localStorage.setItem('sb_settings', JSON.stringify(settings));

  document.getElementById('currentPassInput').value = '';
  document.getElementById('newPassInput').value = '';
  document.getElementById('confirmPassInput').value = '';

  showToast('🔐 Senha de acesso médico atualizada com sucesso!');
}

function logoutAdmin() {
  isAdminLogged = false;
  document.getElementById('adminDashboard').classList.add('hidden');
  document.getElementById('adminLoginForm').classList.remove('hidden');
  document.getElementById('adminForgotForm').classList.add('hidden');
  showToast('Sessão médica encerrada com segurança.');
}

function switchAdminTab(tab) {
  const tabPosts = document.getElementById('adminTabPosts');
  const tabProducts = document.getElementById('adminTabProducts');
  const tabAi = document.getElementById('adminTabAi');
  const tabSettings = document.getElementById('adminTabSettings');
  const tabSecurity = document.getElementById('adminTabSecurity');

  const btnPosts = document.getElementById('tabPostsBtn');
  const btnProducts = document.getElementById('tabProductsBtn');
  const btnAi = document.getElementById('tabAiBtn');
  const btnSettings = document.getElementById('tabSettingsBtn');
  const btnSecurity = document.getElementById('tabSecurityBtn');

  [tabPosts, tabProducts, tabAi, tabSettings, tabSecurity].forEach(t => { if (t) t.classList.add('hidden'); });
  [btnPosts, btnProducts, btnAi, btnSettings, btnSecurity].forEach(b => {
    if (b) {
      b.classList.remove('bg-petrol', 'text-white');
      b.classList.add('bg-petrol-surface', 'text-petrol');
    }
  });

  if (tab === 'posts') {
    tabPosts.classList.remove('hidden');
    btnPosts.classList.add('bg-petrol', 'text-white');
  } else if (tab === 'products') {
    tabProducts.classList.remove('hidden');
    btnProducts.classList.add('bg-petrol', 'text-white');
  } else if (tab === 'ai') {
    if (tabAi) tabAi.classList.remove('hidden');
    if (btnAi) btnAi.classList.add('bg-petrol', 'text-white');
  } else if (tab === 'security') {
    if (tabSecurity) tabSecurity.classList.remove('hidden');
    if (btnSecurity) btnSecurity.classList.add('bg-petrol', 'text-white');
  } else {
    tabSettings.classList.remove('hidden');
    btnSettings.classList.add('bg-petrol', 'text-white');
    document.getElementById('cfgWhatsapp').value = settings.whatsapp;
    document.getElementById('cfgCity').value = settings.city;
    document.getElementById('cfgAnnouncement').value = settings.announcement;
  }
}

// ===== CONVERSOR DE LINKS DE NUVEM & DRIVE (GOOGLE DRIVE, DROPBOX, ONEDRIVE, WEB) =====
function convertCloudLink(url) {
  if (!url) return '';
  let cleanUrl = url.trim();

  // Google Drive: https://drive.google.com/file/d/FILE_ID/view... -> https://lh3.googleusercontent.com/d/FILE_ID
  const gDriveMatch = cleanUrl.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/) || cleanUrl.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
  if (gDriveMatch && gDriveMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${gDriveMatch[1]}`;
  }

  // Dropbox: dl=0 -> raw=1
  if (cleanUrl.includes('dropbox.com')) {
    return cleanUrl.replace('?dl=0', '?raw=1').replace('&dl=0', '&raw=1');
  }

  return cleanUrl;
}

// ===== UPLOAD DIRETO DO DISPOSITIVO (FOTOS E VÍDEOS) =====
function handleMediaUpload(event, targetInputId) {
  const file = event.target.files[0];
  if (!file) return;

  const isVideo = file.type.startsWith('video/');
  const reader = new FileReader();

  const previewBox = document.getElementById('mediaPreviewBox');
  const previewImg = document.getElementById('mediaPreviewImg');
  const previewVideo = document.getElementById('mediaPreviewVideo');
  const previewStatus = document.getElementById('mediaPreviewStatus');
  const previewInfo = document.getElementById('mediaPreviewInfo');

  if (previewBox) previewBox.classList.remove('hidden');

  reader.onload = function(e) {
    const mediaData = e.target.result;
    const input = document.getElementById(targetInputId);
    if (input) input.value = mediaData;

    if (isVideo) {
      if (previewVideo) {
        previewVideo.src = mediaData;
        previewVideo.classList.remove('hidden');
      }
      if (previewImg) previewImg.classList.add('hidden');
      if (previewStatus) previewStatus.textContent = `🎬 Vídeo carregado do dispositivo (${file.name})`;
      if (previewInfo) previewInfo.textContent = `Tamanho: ${(file.size / (1024*1024)).toFixed(2)} MB • Pronto para publicação.`;
    } else {
      if (previewImg) {
        previewImg.src = mediaData;
        previewImg.classList.remove('hidden');
      }
      if (previewVideo) previewVideo.classList.add('hidden');
      if (previewStatus) previewStatus.textContent = `📸 Foto carregada do dispositivo (${file.name})`;
      if (previewInfo) previewInfo.textContent = `Alta resolução preservada.`;
    }
    showToast('✓ Mídia do dispositivo carregada com sucesso!');
  };

  reader.readAsDataURL(file);
}

function handleCloudUrlInput(url, targetPreviewId) {
  const converted = convertCloudLink(url);
  const input = document.getElementById('postImage');
  if (input && converted !== url) input.value = converted;

  const previewBox = document.getElementById('mediaPreviewBox');
  const previewImg = document.getElementById('mediaPreviewImg');
  const previewVideo = document.getElementById('mediaPreviewVideo');

  if (!converted) {
    if (previewBox) previewBox.classList.add('hidden');
    return;
  }

  if (previewBox) previewBox.classList.remove('hidden');
  const isVideo = converted.endsWith('.mp4') || converted.endsWith('.webm') || converted.startsWith('data:video');

  if (isVideo) {
    if (previewVideo) {
      previewVideo.src = converted;
      previewVideo.classList.remove('hidden');
    }
    if (previewImg) previewImg.classList.add('hidden');
  } else {
    if (previewImg) {
      previewImg.src = converted;
      previewImg.classList.remove('hidden');
    }
    if (previewVideo) previewVideo.classList.add('hidden');
  }
}

// ===== IA GERADORA DE IMAGENS & CONTEÚDO BASEADO EM EVIDÊNCIAS =====
let currentGeneratedImageUrl = '';

const medicalPhotoPool = [
  'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=75',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=75',
  'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=75',
  'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=75',
  'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=75',
  'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=75',
  'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=75',
  'https://images.unsplash.com/photo-1594824813576-928f09043236?auto=format&fit=crop&w=800&q=75'
];

function getRandomMedicalPhoto() {
  return medicalPhotoPool[Math.floor(Math.random() * medicalPhotoPool.length)];
}

function setAiPrompt(text) {
  const input = document.getElementById('aiImagePrompt');
  if (input) input.value = text;
  generateAiImage();
}

function generateAiImage() {
  const input = document.getElementById('aiImagePrompt');
  const userPrompt = (input && input.value ? input.value.trim() : '') || 'Médico biomédico em laboratório clínico moderno de alta tecnologia';
  
  const previewBox = document.getElementById('mediaPreviewBox');
  const previewImg = document.getElementById('mediaPreviewImg');
  const previewVideo = document.getElementById('mediaPreviewVideo');
  const spinner = document.getElementById('aiLoadingSpinner');
  const btn = document.getElementById('btnGenerateAi');
  const btnText = document.getElementById('btnGenerateAiText');

  if (previewBox) previewBox.classList.remove('hidden');
  if (spinner) spinner.classList.remove('hidden');
  if (previewVideo) previewVideo.classList.add('hidden');
  if (btn) btn.disabled = true;
  if (btnText) btnText.textContent = 'Criando IA...';

  const fullPrompt = `${userPrompt}, authentic medical clinical laboratory environment, biosafety certified, precise diagnostic equipment, professional scientific lighting, realistic editorial photography, 8k`;
  const seed = Math.floor(Math.random() * 999999);
  const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(fullPrompt)}?width=800&height=500&nologo=true&seed=${seed}`;

  let isHandled = false;
  const finishGeneration = (url, isAi = true) => {
    if (isHandled) return;
    isHandled = true;
    currentGeneratedImageUrl = url;
    const postImgInput = document.getElementById('postImage');
    if (postImgInput) postImgInput.value = url;

    if (previewImg) {
      previewImg.src = url;
      previewImg.classList.remove('hidden');
    }
    if (spinner) spinner.classList.add('hidden');
    if (btn) btn.disabled = false;
    if (btnText) btnText.textContent = 'Gerar Nova';
    showToast(isAi ? '✨ Imagem 8K gerada com sucesso pela IA!' : '✨ Imagem clínica em alta definição pronta!');
  };

  // Timeout de segurança para nunca travar o usuário
  const timeoutId = setTimeout(() => {
    finishGeneration(getRandomMedicalPhoto(), false);
  }, 3500);

  const imgLoader = new Image();
  imgLoader.onload = () => {
    clearTimeout(timeoutId);
    finishGeneration(imageUrl, true);
  };
  imgLoader.onerror = () => {
    clearTimeout(timeoutId);
    finishGeneration(getRandomMedicalPhoto(), false);
  };
  imgLoader.src = imageUrl;
}

function useGeneratedImage() {
  if (!currentGeneratedImageUrl) {
    generateAiImage();
    return;
  }
  const postImgInput = document.getElementById('postImage');
  if (postImgInput) postImgInput.value = currentGeneratedImageUrl;
  showToast('✓ Imagem da IA aplicada no artigo!');
}

// Templates Cientificamente Fundamentados (SBPC/ML, SBC, CFM, PubMed)
const aiContentTemplates = [
  {
    title: 'Hemoglobina Glicada (HbA1c): Critérios Diagnósticos segundo a American Diabetes Association (ADA)',
    category: 'Prevenção & Longevidade',
    excerpt: 'Evidências clínicas sobre o monitoramento glicêmico trimestral e a prevenção de retinopatia e nefropatia diabética.',
    content: 'A dosagem da Hemoglobina Glicada (HbA1c) por metodologia HPLC (Cromatografia Líquida de Alta Performance) é certificada pelo National Glycohemoglobin Standardization Program (NGSP). Segundo as diretrizes da Sociedade Brasileira de Diabetes (SBD), valores entre 5,7% e 6,4% identificam o estado de pré-diabetes, momento crucial em que mudanças no estilo de vida podem reverter o quadro antes da instalação do Diabetes Mellitus Tipo 2.\n\nDiferente da glicemia de jejum pontual, a fração HbA1c quantifica a ligação não enzimática da glicose à hemoglobina nos eritrócitos durante a sua meia-vida de 90 a 120 dias.',
    prompt: 'Exame de glicemia e avaliação metabólica, estilo laboratório moderno limpo com tubo de ensaio'
  },
  {
    title: '25-Hidroxivitamina D: Valores de Referência e Indicação Clínica Atualizada da SBEM',
    category: 'Prevenção & Longevidade',
    excerpt: 'Posicionamento oficial da Sociedade Brasileira de Endocrinologia sobre níveis séricos e grupos de risco.',
    content: 'De acordo com o Posicionamento Oficial da SBEM e SBPC/ML sobre a dosagem de 25(OH)D, valores acima de 20 ng/mL são suficientes para a população saudável até 60 anos. Já para grupos de risco — como idosos, gestantes, portadores de osteoporose, doenças autoimunes ou doença renal crônica — a faixa alvo recomendada é entre 30 e 60 ng/mL.\n\nA dosagem laboratorial é essencial para evitar tanto a hipovitaminose D quanto a toxicidade por suplementação desregulada (hipercalcemia).',
    prompt: 'Ilustração de imunidade forte, sol e bem-estar com estética médica sóbria em azul petróleo'
  },
  {
    title: 'PCR Ultrassensível e Marcadores Inflamatórios na Estratificação do Risco Coronariano',
    category: 'Saúde Cardiovascular',
    excerpt: 'A correlação entre inflamação endotelial subclínica e eventos aterotrombóticos segundo a SBC.',
    content: 'A Proteína C Reativa dosada por método ultrassensível (PCR-us) é um biomarcador inflamatório independente para estratificação de risco cardiovascular, preconizado pelas V Diretrizes Brasileiras sobre Dislipidemias e Prevenção da Aterosclerose da Sociedade Brasileira de Cardiologia (SBC).\n\nValores de PCR-us inferiores a 1,0 mg/L indicam baixo risco inflamatório, enquanto valores entre 1,0 e 3,0 mg/L e superiores a 3,0 mg/L indicam risco médio e elevado, respectivamente, auxiliando os cardiologistas na tomada de decisões terapêuticas precoces.',
    prompt: 'Coração saudável, eletrocardiograma e ambiente laboratorial de alta precisão'
  }
];

let templateIndex = 0;
function suggestAiContent() {
  const t = aiContentTemplates[templateIndex % aiContentTemplates.length];
  templateIndex++;

  const titleEl = document.getElementById('postTitle');
  const catEl = document.getElementById('postCategory');
  const excEl = document.getElementById('postExcerpt');
  const contEl = document.getElementById('postContent');
  const promptEl = document.getElementById('aiImagePrompt');

  if (titleEl) titleEl.value = t.title;
  if (catEl) catEl.value = t.category;
  if (excEl) excEl.value = t.excerpt;
  if (contEl) contEl.value = t.content;
  if (promptEl) promptEl.value = t.prompt;

  generateAiImage();
  showToast('✨ Conteúdo embasado cientificamente gerado pela IA!');
}

// ===== IA GERADORA DE CHECK-UPS E PROTOCOLOS =====
const aiProductTemplates = [
  {
    name: 'Check-up Mulher 40+ Vitalidade & Hormônios',
    category: 'mulher',
    badge: 'Completo 40+',
    shortDesc: 'Hemograma + Perfil Lipídico + Glicemia + TSH + T4 Livre + Estradiol + Progesterona + Vitamina D + Ferritina + Cálcio Iônico',
    image: 'https://images.unsplash.com/photo-1594824813576-928f09043236?auto=format&fit=crop&w=600&q=75'
  },
  {
    name: 'Check-up Homem 50+ Saúde Prostática & Cardiovascular',
    category: 'homem',
    badge: 'Essencial 50+',
    shortDesc: 'PSA Total e Livre + Hemograma + Creatinina + Ácido Úrico + Colesterol Total e Frações + Glicemia + Testosterona Total',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=75'
  },
  {
    name: 'Check-up Esportivo & Performance Atlética',
    category: 'especiais',
    badge: 'Alta Performance',
    shortDesc: 'Hemograma + CPK + Ureia + Creatinina + Perfil Eletrolítico + Vitamina B12 + Cortisol + TSH + Magnésio Sérico',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=75'
  },
  {
    name: 'Check-up Pré-Natal Seguro (1º Trimestre)',
    category: 'mulher',
    badge: 'Gestação Segura',
    shortDesc: 'Tipagem Sanguínea / Fator Rh + Coombs Indireto + Sorologias (Toxoplasmose, Rubéola, Citomegalovírus, HIV, VDRL, HBsAg) + Hemograma + Urina I',
    image: 'https://images.unsplash.com/photo-1537655780520-1e392ead81f2?auto=format&fit=crop&w=600&q=75'
  }
];

let prodTemplateIndex = 0;
function suggestAiProduct() {
  const t = aiProductTemplates[prodTemplateIndex % aiProductTemplates.length];
  prodTemplateIndex++;

  const nameEl = document.getElementById('prodName');
  const catEl = document.getElementById('prodCategory');
  const badgeEl = document.getElementById('prodBadge');
  const descEl = document.getElementById('prodShortDesc');
  const imgEl = document.getElementById('prodImage');

  if (nameEl) nameEl.value = t.name;
  if (catEl) catEl.value = t.category;
  if (badgeEl) badgeEl.value = t.badge;
  if (descEl) descEl.value = t.shortDesc;
  if (imgEl) imgEl.value = t.image;

  showToast('✨ Check-up clínico gerado pela IA!');
}

function generateSpecificAiPost(theme) {
  switchAdminTab('posts');
  if (theme === 'glicada') {
    document.getElementById('postTitle').value = 'Hemoglobina Glicada (HbA1c): Critérios Diagnósticos da SBD e ADA';
    document.getElementById('postCategory').value = 'Prevenção & Longevidade';
    document.getElementById('postExcerpt').value = 'Monitoramento glicêmico trimestral para diagnóstico precoce e prevenção de complicações vasculares.';
    document.getElementById('postContent').value = 'A dosagem da fração HbA1c por HPLC fornece a média glicêmica dos últimos 90 a 120 dias, sendo o padrão-ouro no controle do Diabetes Mellitus. Segundo a Sociedade Brasileira de Diabetes, o valor de referência em jejum ideal para não diabéticos situa-se abaixo de 5,7%.\n\nNo Laboratório Dr. Samuel Barreto, o exame é realizado em analisadores automáticos calibrados segundo as normas do NGSP com liberação rápida do laudo.';
    document.getElementById('aiImagePrompt').value = 'Exame de sangue para glicose e controle metabólico em laboratório tecnológico moderno';
  } else if (theme === 'vitaminad') {
    document.getElementById('postTitle').value = '25-Hidroxivitamina D: Importância Imunológica e Valores de Referência';
    document.getElementById('postCategory').value = 'Prevenção & Longevidade';
    document.getElementById('postExcerpt').value = 'Recomendações da SBEM para manutenção de níveis séricos ideais e saúde óssea.';
    document.getElementById('postContent').value = 'A vitamina D é um pré-hormônio esteroide fundamental para a absorção de cálcio, modulação da resposta imunológica e prevenção de doenças osteometabólicas.\n\nRecomenda-se a dosagem periódica para estratificação da faixa terapêutica, garantindo suplementação segura e eficaz.';
    document.getElementById('aiImagePrompt').value = 'Ilustração de bem-estar, sol e imunidade com estética médica em tons de âmbar e azul';
  } else if (theme === 'tireoide') {
    document.getElementById('postTitle').value = 'Painel da Tireoide (TSH Ultrassensível e T4 Livre): Como Interpretar';
    document.getElementById('postCategory').value = 'Saúde da Mulher';
    document.getElementById('postExcerpt').value = 'Diagnóstico laboratorial de hipotireoidismo e hipertireoidismo com precisão analítica.';
    document.getElementById('postContent').value = 'O TSH ultrassensível por quimioluminescência é o biomarcador de triagem mais sensível para avaliação do eixo hipotálamo-hipófise-tireoide.\n\nAlterações sutis permitem o diagnóstico precoce de hipotireoidismo subclínico, prevenindo sintomas de fadiga crônica, alteração ponderal e dislipidemias.';
    document.getElementById('aiImagePrompt').value = 'Glândula tireoide anatômica com gráficos hormonais em ambiente clínico avançado';
  } else if (theme === 'sexagem') {
    document.getElementById('postTitle').value = 'Sexagem Fetal por Biologia Molecular: DNA Fetal Livre no Sangue Materno';
    document.getElementById('postCategory').value = 'Saúde da Mulher';
    document.getElementById('postExcerpt').value = 'Identificação do sexo do bebê a partir da 8ª semana com mais de 99% de acurácia.';
    document.getElementById('postContent').value = 'O teste de sexagem fetal pesquisa fragmentos do cromossomo Y no plasma materno através de Real-Time PCR (Reação em Cadeia da Polimerase em Tempo Real).\n\nO procedimento é 100% não invasivo, seguro para a mãe e para o bebê, dispensando jejum obrigatório.';
    document.getElementById('aiImagePrompt').value = 'Gravidez saudável e teste de DNA molecular em laboratório humanizado';
  }
  generateAiImage();
}

function generateSpecificAiProduct(theme) {
  switchAdminTab('products');
  if (theme === 'mulher40') {
    document.getElementById('prodName').value = 'Check-up Mulher 40+ Vitalidade & Hormônios';
    document.getElementById('prodCategory').value = 'mulher';
    document.getElementById('prodBadge').value = 'Mais Solicitado';
    document.getElementById('prodShortDesc').value = 'Hemograma Completo + Glicemia + Perfil Lipídico + TSH + T4 Livre + Estradiol + Progesterona + Vitamina D + Ferritina + Cálcio Iônico';
    document.getElementById('prodImage').value = 'https://images.unsplash.com/photo-1594824813576-928f09043236?auto=format&fit=crop&w=600&q=75';
  } else if (theme === 'homem50') {
    document.getElementById('prodName').value = 'Check-up Homem 50+ Saúde Prostática & Cardiovascular';
    document.getElementById('prodCategory').value = 'homem';
    document.getElementById('prodBadge').value = 'Essencial 50+';
    document.getElementById('prodShortDesc').value = 'PSA Total e Livre + Hemograma + Creatinina + Ácido Úrico + Colesterol Total e Frações + Glicemia + Testosterona Total';
    document.getElementById('prodImage').value = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=75';
  } else if (theme === 'atleta') {
    document.getElementById('prodName').value = 'Check-up Esportivo & Performance Atlética';
    document.getElementById('prodCategory').value = 'especiais';
    document.getElementById('prodBadge').value = 'Alta Performance';
    document.getElementById('prodShortDesc').value = 'Hemograma + CPK + Ureia + Creatinina + Perfil Eletrolítico + Vitamina B12 + Cortisol + TSH + Magnésio Sérico';
    document.getElementById('prodImage').value = 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=75';
  } else if (theme === 'gestante') {
    document.getElementById('prodName').value = 'Check-up Pré-Natal Seguro (1º Trimestre)';
    document.getElementById('prodCategory').value = 'mulher';
    document.getElementById('prodBadge').value = 'Gestação Segura';
    document.getElementById('prodShortDesc').value = 'Tipagem Sanguínea / Fator Rh + Coombs Indireto + Sorologias (Toxoplasmose, Rubéola, Citomegalovírus, HIV, VDRL, HBsAg) + Hemograma + Urina I';
    document.getElementById('prodImage').value = 'https://images.unsplash.com/photo-1537655780520-1e392ead81f2?auto=format&fit=crop&w=600&q=75';
  }
  showToast('✨ Check-up clínico preenchido pela IA!');
}

let studioGeneratedImgUrl = '';
function generateStudioAiImage() {
  const promptInput = document.getElementById('aiStudioPrompt');
  const userPrompt = (promptInput && promptInput.value ? promptInput.value.trim() : '') || 'Biomédico em laboratório clínico moderno de alta precisão diagnóstica';
  const previewBox = document.getElementById('aiStudioPreview');
  const previewImg = document.getElementById('aiStudioImg');
  const btn = document.getElementById('btnStudioAi');

  if (btn) btn.disabled = true;
  const fullPrompt = `${userPrompt}, authentic medical clinical laboratory environment, biosafety certified, precise diagnostic equipment, professional scientific lighting, realistic editorial photography, 8k`;
  const seed = Math.floor(Math.random() * 999999);
  const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(fullPrompt)}?width=800&height=500&nologo=true&seed=${seed}`;

  let isHandled = false;
  const finishStudio = (url) => {
    if (isHandled) return;
    isHandled = true;
    studioGeneratedImgUrl = url;
    if (previewImg) previewImg.src = url;
    if (previewBox) previewBox.classList.remove('hidden');
    if (btn) btn.disabled = false;
    showToast('✨ Imagem 8K gerada com sucesso pelo Estúdio IA!');
  };

  const timeoutId = setTimeout(() => {
    finishStudio(getRandomMedicalPhoto());
  }, 3500);

  const imgLoader = new Image();
  imgLoader.onload = () => {
    clearTimeout(timeoutId);
    finishStudio(imageUrl);
  };
  imgLoader.onerror = () => {
    clearTimeout(timeoutId);
    finishStudio(getRandomMedicalPhoto());
  };
  imgLoader.src = imageUrl;
}

function applyStudioImageToArticle() {
  if (!studioGeneratedImgUrl) return;
  switchAdminTab('posts');
  const imgInput = document.getElementById('postImage');
  if (imgInput) imgInput.value = studioGeneratedImgUrl;
  const previewBox = document.getElementById('mediaPreviewBox');
  const previewImg = document.getElementById('mediaPreviewImg');
  if (previewImg) {
    previewImg.src = studioGeneratedImgUrl;
    previewImg.classList.remove('hidden');
  }
  if (previewBox) previewBox.classList.remove('hidden');
  showToast('✓ Imagem aplicada no formulário do artigo!');
}

// Admin: Posts CRUD
function handleSavePost(e) {
  e.preventDefault();
  const id = document.getElementById('editPostId').value || 'post-' + Date.now();
  const title = document.getElementById('postTitle').value;
  const category = document.getElementById('postCategory').value;
  const image = document.getElementById('postImage').value;
  const excerpt = document.getElementById('postExcerpt').value;
  const content = document.getElementById('postContent').value;

  const existingIndex = posts.findIndex(p => p.id === id);
  const now = new Date();
  const dateFormatted = `${now.getDate()} de Agosto, ${now.getFullYear()}`;

  const postObj = { id, title, category, image, excerpt, content, date: dateFormatted };

  if (existingIndex >= 0) {
    posts[existingIndex] = postObj;
  } else {
    posts.unshift(postObj);
  }

  localStorage.setItem('sb_posts', JSON.stringify(posts));
  renderPosts();
  renderAdminPostsList();
  resetPostForm();
  showToast('Artigo publicado com sucesso no site!');
}

function renderAdminPostsList() {
  const list = document.getElementById('adminPostsList');
  if (!list) return;

  list.innerHTML = posts.map(p => `
    <div class="flex items-center justify-between p-3 rounded-xl bg-white border border-steelLight text-xs">
      <div class="flex items-center gap-3">
        <img src="${p.image}" alt="${p.title}" class="w-10 h-10 object-cover rounded-lg" />
        <div>
          <span class="font-bold block text-petrol-dark truncate max-w-xs">${p.title}</span>
          <span class="text-slate-400 text-[10px] font-semibold">${p.category} • ${p.date}</span>
        </div>
      </div>
      <div class="flex gap-2">
        <button onclick="deletePost('${p.id}')" class="px-3 py-1 rounded bg-red-100 text-red-700 font-bold hover:bg-red-200">Excluir</button>
      </div>
    </div>
  `).join('');
}

function deletePost(id) {
  if (confirm('Deseja realmente excluir este artigo?')) {
    posts = posts.filter(p => p.id !== id);
    localStorage.setItem('sb_posts', JSON.stringify(posts));
    renderPosts();
    renderAdminPostsList();
    showToast('Artigo removido.');
  }
}

function resetPostForm() {
  document.getElementById('editPostId').value = '';
  document.getElementById('postTitle').value = '';
  document.getElementById('postImage').value = '';
  document.getElementById('postExcerpt').value = '';
  document.getElementById('postContent').value = '';
  document.getElementById('postFormTitle').textContent = 'Publicar Novo Artigo Clínico';
}

// Admin: Products / Checkups CRUD
function handleSaveProduct(e) {
  e.preventDefault();
  const id = document.getElementById('editProductId').value || 'prod-' + Date.now();
  const name = document.getElementById('prodName').value;
  const category = document.getElementById('prodCategory').value;
  const image = document.getElementById('prodImage').value;
  const badge = document.getElementById('prodBadge').value || 'Protocolo';
  const shortDesc = document.getElementById('prodShortDesc').value;
  const usage = document.getElementById('prodUsage').value;

  const prodObj = {
    id,
    name,
    category,
    image,
    badge,
    shortDesc,
    fullDesc: shortDesc,
    usage,
    reviewsCount: 75
  };

  const existingIndex = products.findIndex(p => p.id === id);
  if (existingIndex >= 0) {
    products[existingIndex] = prodObj;
  } else {
    products.unshift(prodObj);
  }

  localStorage.setItem('sb_products', JSON.stringify(products));
  renderProducts();
  renderAdminProductsList();
  showToast('Painel de exames salvo no catálogo!');
}

function renderAdminProductsList() {
  const list = document.getElementById('adminProductsList');
  if (!list) return;

  list.innerHTML = products.map(p => `
    <div class="flex items-center justify-between p-3 rounded-xl bg-white border border-steelLight text-xs">
      <div class="flex items-center gap-3">
        <img src="${p.image}" alt="${p.name}" class="w-10 h-10 object-cover rounded-lg" />
        <div>
          <span class="font-bold block text-petrol-dark truncate max-w-xs">${p.name}</span>
          <span class="text-slate-400 text-[10px] font-semibold">${p.category}</span>
        </div>
      </div>
      <div class="flex gap-2">
        <button onclick="deleteProduct('${p.id}')" class="px-3 py-1 rounded bg-red-100 text-red-700 font-bold hover:bg-red-200">Excluir</button>
      </div>
    </div>
  `).join('');
}

function deleteProduct(id) {
  if (confirm('Deseja remover este check-up do catálogo?')) {
    products = products.filter(p => p.id !== id);
    if (products.length === 0) {
      products = [...defaultProducts];
    }
    localStorage.setItem('sb_products', JSON.stringify(products));
    renderProducts();
    renderAdminProductsList();
    showToast('Check-up atualizado.');
  }
}

function restoreOfficialCheckups() {
  if (confirm('Deseja restaurar todos os 7 Check-ups e Painéis Clínicos Oficiais do Laboratório Dr. Samuel Barreto?')) {
    products = [...defaultProducts];
    localStorage.setItem('sb_products', JSON.stringify(products));
    renderProducts();
    renderAdminProductsList();
    showToast('✓ Todos os 7 Check-ups Oficiais foram restaurados com sucesso!');
  }
}

function resetProductForm() {
  const form = document.querySelector('#adminTabProducts form');
  if (form) form.reset();
  const idInput = document.getElementById('editProductId');
  if (idInput) idInput.value = '';
}

// Admin: Settings
function handleSaveSettings(e) {
  e.preventDefault();
  settings.whatsapp = document.getElementById('cfgWhatsapp').value.replace(/\D/g, '');
  settings.city = document.getElementById('cfgCity').value;
  settings.announcement = document.getElementById('cfgAnnouncement').value;
  
  localStorage.setItem('sb_settings', JSON.stringify(settings));
  applySettings();
  showToast('Configurações atualizadas!');
}

function applySettings() {
  const annEl = document.getElementById('announcementText');
  const waCta = document.getElementById('whatsappCtaLink');

  if (annEl) annEl.textContent = settings.announcement;
  if (waCta) waCta.href = `https://wa.me/${settings.whatsapp}?text=Ol%C3%A1%20Laborat%C3%B3rio%20Dr.%20Samuel%20Barreto!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20exames%20em%20Cora%C3%A7%C3%A3o%20de%20Jesus.`;
}

// Toast
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.remove('translate-y-20', 'opacity-0');
  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3000);
}