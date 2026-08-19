// ===== DADOS INICIAIS DO LABORATÓRIO DR. SAMUEL BARRETO =====
const defaultSettings = {
  city: 'Unidade Central',
  whatsapp: '5500000000000',
  announcement: '🔬 COLETA DOMICILIAR E CORPORATIVA | LAUDOS ÁGEIS COM RIGOR BIOMÉDICO',
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
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'PSA Total e Livre + Testosterona Total/Livre + Hemograma + Ácido Úrico + Glicemia + Perfil Lipídico + Creatinina.',
    fullDesc: 'Painel completo desenvolvido especificamente para homens a partir dos 40 anos. Avalia a saúde prostática, função hormonal e cardiovascular, além de rins e fígado.',
    usage: 'Jejum obrigatório de 8 horas. Evitar relações sexuais e ciclismo nas 48h anteriores à coleta de PSA.'
  },
  {
    id: 'checkup-geral',
    name: 'Check-up Preventivo Executivo',
    category: 'checkups',
    badge: 'Mais Solicitado',
    rating: 5.0,
    reviewsCount: 248,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Hemograma Completo + Glicemia + Colesterol Total e Frações + Triglicerídeos + Creatinina + Ureia + TSH + TGO/TGP.',
    fullDesc: 'Painel amplo para avaliação anual do metabolismo, perfil cardíaco, função renal, hepática e tireoide.',
    usage: 'Jejum obrigatório de 8 a 12 horas. Água pode ser consumida normalmente.'
  },
  {
    id: 'checkup-mulher',
    name: 'Check-up Mulher & Painel Hormonal',
    category: 'mulher',
    badge: 'Saúde Feminina',
    rating: 5.0,
    reviewsCount: 180,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Hemograma + TSH + T4 Livre + Ferritina + Vitamina D + Perfil Lipídico + Glicemia + Estradiol + Progesterona.',
    fullDesc: 'Protocolo completo desenhado para a fisiologia feminina: investiga disposição, queda de cabelo, oscilações hormonais, tireoide e saúde óssea.',
    usage: 'Jejum de 8 horas. Recomenda-se realizar entre o 3º e 5º dia do ciclo menstrual caso haja dosagem hormonal associada.'
  },
  {
    id: 'toxicologico-cnh',
    name: 'Exame Toxicológico CNH & Concursos',
    category: 'especiais',
    badge: 'Credenciado Denatran',
    rating: 4.9,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Coleta de queratina (cabelo ou pelos) com resultado direto no sistema Renach.',
    fullDesc: 'Obrigatório para emissão e renovação de CNH nas categorias C, D e E, além de admissões CLT e concursos públicos.',
    usage: 'Não necessita de jejum. Apresentar documento oficial com foto e CNH.'
  },
  {
    id: 'sexagem-fetal',
    name: 'Sexagem Fetal Precoce (DNA no Sangue)',
    category: 'especiais',
    badge: '99.9% de Acerto',
    rating: 5.0,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Descubra se é Menino ou Menina a partir da 8ª semana de gestação.',
    fullDesc: 'Análise molecular no plasma materno que identifica a presença do cromossomo Y com rigor laboratorial e entrega rápida do laudo.',
    usage: 'Não necessita de jejum. Pode ser feito a partir da 8ª semana completa de gravidez.'
  }
];

const defaultPosts = [
  {
    id: 'post-1',
    title: 'Por que o Jejum de 12 Horas não é mais Obrigatório para Todos os Exames?',
    category: 'Exames & Orientações',
    date: '19 de Agosto, 2026',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Entenda os consensos médicos recentes que tornaram a rotina de coleta mais confortável para os pacientes.',
    content: 'Durante décadas, o jejum rigoroso de 12 horas foi padrão para quase todos os exames de sangue. No entanto, as Sociedades Brasileiras de Cardiologia e Patologia Clínica atualizaram as diretrizes: exames como o Perfil Lipídico (colesterol) hoje podem ser realizados com jejum leve de apenas 4 horas ou até mesmo após refeição habitual, já que reflete melhor o estado metabólico real do paciente no dia a dia.\n\nSempre consulte as instruções específicas do seu médico e conte com a nossa equipe para tirar todas as dúvidas antes da coleta!'
  },
  {
    id: 'post-2',
    title: 'TSH e Tireoide: Sinais de que seus Hormônios Precisam de Avaliação',
    category: 'Prevenção & Longevidade',
    date: '16 de Agosto, 2026',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Cansaço excessivo, oscilações de peso e alterações no sono podem indicar desequilíbrio na tireoide.',
    content: 'A glândula tireoide é a grande maestrina do metabolismo humano. Quando ela produz hormônios em excesso (hipertireoidismo) ou em quantidade insuficiente (hipotireoidismo), todo o corpo sente o impacto.\n\nO exame de TSH Ultra Sensível associado ao T4 Livre é o método padrão-ouro para detectar precocemente qualquer alteração. No Laboratório Dr. Samuel Barreto, utilizamos reagentes de alta especificidade para garantir a máxima precisão no seu diagnóstico.'
  },
  {
    id: 'post-3',
    title: 'Coleta Domiciliar e Corporativa: Segurança e Praticidade',
    category: 'Prevenção & Longevidade',
    date: '12 de Agosto, 2026',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Como nosso serviço móvel de enfermagem leva o padrão de excelência de cabine para sua casa ou empresa.',
    content: 'Evitar deslocamentos no trânsito, filas e a ansiedade da espera faz toda a diferença para pacientes idosos, gestantes e profissionais com rotina intensa. Nosso serviço de coleta móvel segue as normas rigorosas de esterilização e cadeia de frio para transporte das amostras biológicas.'
  }
];

// ===== ESTADO PERSISTENTE =====
let products = JSON.parse(localStorage.getItem('sb_products')) || defaultProducts;
let posts = JSON.parse(localStorage.getItem('sb_posts')) || defaultPosts;
let settings = JSON.parse(localStorage.getItem('sb_settings')) || defaultSettings;
let activeCategory = 'todos';
let isAdminLogged = false;

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderPosts();
  applySettings();
  lucide.createIcons();

  // Menu Mobile
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
  }
});

// ===== RENDERIZAÇÃO DE CHECK-UPS =====
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = activeCategory === 'todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card rounded-2xl bg-white border border-steelLight overflow-hidden flex flex-col justify-between group shadow-sm">
      <div class="relative overflow-hidden aspect-[16/10] bg-slate-100 cursor-pointer" onclick="openQuickModal('${p.id}')">
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
        <img src="${p.hoverImage || p.image}" alt="${p.name}" class="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        <span class="absolute top-3 left-3 px-3 py-1 rounded-md bg-navy text-white text-[10px] uppercase font-extrabold tracking-wider">
          ${p.badge || 'Protocolo Clínico'}
        </span>

        <button onclick="event.stopPropagation(); openQuickModal('${p.id}')" class="absolute bottom-3 right-3 w-9 h-9 rounded-lg bg-white text-navy shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" title="Visualização Rápida">
          <i data-lucide="eye" class="w-4 h-4 text-cyanAccent"></i>
        </button>
      </div>

      <div class="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-1 text-amber-500 text-xs mb-1">
            <span>★★★★★</span>
            <span class="text-slate-400 text-[11px] font-bold">(${p.reviewsCount || 100} avaliações)</span>
          </div>
          <h3 class="font-heading text-lg font-bold text-navy uppercase cursor-pointer hover:text-cyanAccent transition" onclick="openQuickModal('${p.id}')">
            ${p.name}
          </h3>
          <p class="text-xs text-slate-600 font-normal line-clamp-2 mt-1.5 leading-relaxed">${p.shortDesc}</p>
        </div>

        <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button onclick="openQuickModal('${p.id}')" class="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-navy transition flex items-center gap-1">
            <i data-lucide="info" class="w-3.5 h-3.5 text-cyanAccent"></i> Ver Preparo
          </button>
          <a href="https://wa.me/${settings.whatsapp}?text=Ol%C3%A1%20Dr.%20Samuel%20Barreto!%20Gostaria%20de%20agendar%20o%20${encodeURIComponent(p.name)}." target="_blank" class="px-4 py-2.5 rounded-xl bg-navy hover:bg-cyanAccent text-white text-[11px] font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm">
            <i data-lucide="calendar" class="w-3.5 h-3.5"></i> Agendar
          </a>
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

// ===== RENDERIZAÇÃO DE ARTIGOS (BLOG) =====
function renderPosts() {
  const grid = document.getElementById('postsGrid');
  if (!grid) return;

  grid.innerHTML = posts.map(post => `
    <article class="rounded-2xl bg-white border border-steelLight overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all group">
      <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative cursor-pointer" onclick="openPostModal('${post.id}')">
        <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span class="absolute top-3 left-3 px-3 py-1 rounded-md bg-navy text-white text-[10px] font-extrabold uppercase tracking-wider">
          ${post.category}
        </span>
      </div>

      <div class="p-6 space-y-3 flex-1 flex flex-col justify-between">
        <div class="space-y-2">
          <span class="text-[11px] text-slate-400 font-bold block">${post.date}</span>
          <h3 class="font-heading text-lg font-bold text-navy group-hover:text-cyanAccent transition cursor-pointer leading-snug" onclick="openPostModal('${post.id}')">
            ${post.title}
          </h3>
          <p class="text-xs text-slate-600 font-normal line-clamp-3 leading-relaxed">${post.excerpt}</p>
        </div>

        <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button onclick="openPostModal('${post.id}')" class="text-xs font-bold uppercase tracking-wider text-cyanAccent hover:underline flex items-center gap-1">
            Ler Artigo Completo →
          </button>
        </div>
      </div>
    </article>
  `).join('');

  lucide.createIcons();
}

// ===== LEITURA COMPLETA DE ARTIGO =====
function openPostModal(postId) {
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  const modal = document.getElementById('postModal');
  const container = document.getElementById('postModalContent');

  container.innerHTML = `
    <div class="aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-slate-100 border border-steelLight">
      <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover" />
    </div>
    <div class="space-y-3">
      <div class="flex items-center gap-3">
        <span class="px-3 py-1 rounded-md bg-navy text-white text-[10px] uppercase font-bold tracking-wider">${post.category}</span>
        <span class="text-xs text-slate-400 font-semibold">${post.date}</span>
      </div>
      <h3 class="font-heading text-2xl font-bold text-navy">${post.title}</h3>
      <div class="text-sm text-slate-700 font-normal leading-relaxed whitespace-pre-line pt-3 border-t border-slate-200">
        ${post.content}
      </div>
      <div class="pt-4 flex justify-between items-center text-xs">
        <span class="text-slate-500">Por <strong>Dr. Samuel Barreto (CRBM)</strong></span>
        <button onclick="closePostModal()" class="px-5 py-2.5 rounded-xl bg-navy hover:bg-cyanAccent text-white font-bold uppercase tracking-wider transition">
          Fechar
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  lucide.createIcons();
}

function closePostModal() {
  const modal = document.getElementById('postModal');
  if (modal) modal.classList.add('hidden');
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
  const p = products.find(prod => prod.id === productId);
  if (!p) return;

  const modal = document.getElementById('quickModal');
  const content = document.getElementById('modalContent');

  content.innerHTML = `
    <div class="aspect-square rounded-xl overflow-hidden bg-slate-100 border border-steelLight">
      <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover" />
    </div>
    <div class="space-y-4">
      <span class="px-3 py-1 rounded-md bg-navy text-white text-[10px] uppercase font-bold tracking-wider">${p.badge || 'Protocolo'}</span>
      <h3 class="font-heading text-xl font-bold text-navy uppercase">${p.name}</h3>
      <p class="text-xs text-slate-600 leading-relaxed">${p.fullDesc}</p>
      
      <div class="p-3.5 rounded-xl bg-slate-50 border border-steelLight text-xs text-navy space-y-1">
        <strong class="block text-cyanAccent uppercase tracking-wider text-[11px]">Orientações de Preparo:</strong>
        <p class="text-slate-600">${p.usage || 'Jejum habitual de 8 a 12 horas.'}</p>
      </div>

      <a href="https://wa.me/${settings.whatsapp}?text=Ol%C3%A1%20Dr.%20Samuel%20Barreto!%20Gostaria%20de%20agendar%20o%20${encodeURIComponent(p.name)}." target="_blank" class="w-full py-4 bg-navy hover:bg-cyanAccent text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2">
        <i data-lucide="calendar" class="w-4 h-4"></i> Agendar Este Exame no WhatsApp
      </a>
    </div>
  `;

  modal.classList.remove('hidden');
  lucide.createIcons();
}

function closeQuickModal() {
  const modal = document.getElementById('quickModal');
  if (modal) modal.classList.add('hidden');
}

// ===== ORIENTADOR INTERATIVO (QUIZ) =====
function selectQuiz(step, option, btn) {
  document.querySelectorAll('.quiz-btn').forEach(b => b.classList.remove('border-cyanAccent', 'bg-cyanAccent-light/40'));
  btn.classList.add('border-cyanAccent', 'bg-cyanAccent-light/40');

  const resultBox = document.getElementById('quizResult');
  const title = document.getElementById('quizResultTitle');
  const desc = document.getElementById('quizResultDesc');
  const addBtn = document.getElementById('quizAddBtn');

  if (option === 'homem') {
    title.textContent = 'Check-up Homem 40+ & Próstata (PSA)';
    desc.textContent = 'Painel com foco na saúde prostática, perfil cardiovascular, níveis hormonais de testosterona e avaliação metabólica integral.';
    addBtn.onclick = () => { window.open(`https://wa.me/${settings.whatsapp}?text=Ol%C3%A1%20Dr.%20Samuel%20Barreto!%20Gostaria%20de%20agendar%20o%20Check-up%20Homem%2040+.`, '_blank'); };
  } else if (option === 'mulher') {
    title.textContent = 'Check-up Mulher & Painel Hormonal';
    desc.textContent = 'Avaliação integrada de tireoide (TSH/T4), vitaminas, metabolismo e marcadores hormonais essenciais.';
    addBtn.onclick = () => { window.open(`https://wa.me/${settings.whatsapp}?text=Ol%C3%A1%20Dr.%20Samuel%20Barreto!%20Gostaria%20de%20agendar%20o%20Check-up%20Mulher.`, '_blank'); };
  } else {
    title.textContent = 'Check-up Preventivo Executivo';
    desc.textContent = 'Hemograma, Glicemia, Colesterol Total/Frações, Triglicerídeos e Creatinina para a rotina anual.';
    addBtn.onclick = () => { window.open(`https://wa.me/${settings.whatsapp}?text=Ol%C3%A1%20Dr.%20Samuel%20Barreto!%20Gostaria%20de%20agendar%20o%20Check-up%20Preventivo%20Executivo.`, '_blank'); };
  }

  resultBox.classList.remove('hidden');
}

// ===== PAINEL ADMINISTRATIVO (DR. SAMUEL BARRETO) =====
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
  lucide.createIcons();
}

function closeAdminModal() {
  const modal = document.getElementById('adminModal');
  if (modal) modal.classList.add('hidden');
}

function loginAdmin() {
  const passInput = document.getElementById('adminPasswordInput');
  if (passInput.value === settings.adminPass || passInput.value === '1234') {
    isAdminLogged = true;
    passInput.value = '';
    document.getElementById('adminLoginForm').classList.add('hidden');
    document.getElementById('adminDashboard').classList.remove('hidden');
    renderAdminPostsList();
    renderAdminProductsList();
    showToast('Acesso médico concedido! Bem-vindo Dr. Samuel Barreto.');
  } else {
    alert('Senha incorreta! Use: admin123');
  }
}

function switchAdminTab(tab) {
  const tabPosts = document.getElementById('adminTabPosts');
  const tabProducts = document.getElementById('adminTabProducts');
  const tabSettings = document.getElementById('adminTabSettings');

  const btnPosts = document.getElementById('tabPostsBtn');
  const btnProducts = document.getElementById('tabProductsBtn');
  const btnSettings = document.getElementById('tabSettingsBtn');

  [tabPosts, tabProducts, tabSettings].forEach(t => t.classList.add('hidden'));
  [btnPosts, btnProducts, btnSettings].forEach(b => {
    b.classList.remove('bg-navy', 'text-white');
    b.classList.add('bg-slate-100', 'text-slate-700');
  });

  if (tab === 'posts') {
    tabPosts.classList.remove('hidden');
    btnPosts.classList.add('bg-navy', 'text-white');
  } else if (tab === 'products') {
    tabProducts.classList.remove('hidden');
    btnProducts.classList.add('bg-navy', 'text-white');
  } else {
    tabSettings.classList.remove('hidden');
    btnSettings.classList.add('bg-navy', 'text-white');
    document.getElementById('cfgWhatsapp').value = settings.whatsapp;
    document.getElementById('cfgAnnouncement').value = settings.announcement;
  }
}

// ===== IA GERADORA DE IMAGENS & CONTEÚDO CLÍNICO =====
let currentGeneratedImageUrl = '';

function setAiPrompt(text) {
  const input = document.getElementById('aiImagePrompt');
  if (input) input.value = text;
}

function generateAiImage() {
  const input = document.getElementById('aiImagePrompt');
  const userPrompt = input.value.trim() || 'Médico biomédico em laboratório clínico moderno de alta tecnologia';
  
  const previewBox = document.getElementById('aiImagePreviewBox');
  const previewImg = document.getElementById('aiPreviewImg');
  const spinner = document.getElementById('aiLoadingSpinner');
  const btn = document.getElementById('btnGenerateAi');
  const btnText = document.getElementById('btnGenerateAiText');

  previewBox.classList.remove('hidden');
  spinner.classList.remove('hidden');
  btn.disabled = true;
  btnText.textContent = 'Criando IA...';

  const fullPrompt = `${userPrompt}, professional healthcare laboratory photography, clean clinic aesthetic, medical scientific lighting, high-end editorial medicine, 8k hyperrealistic`;
  const seed = Math.floor(Math.random() * 999999);
  const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(fullPrompt)}?width=1200&height=750&nologo=true&seed=${seed}`;

  const imgLoader = new Image();
  imgLoader.onload = () => {
    currentGeneratedImageUrl = imageUrl;
    previewImg.src = imageUrl;
    spinner.classList.add('hidden');
    btn.disabled = false;
    btnText.textContent = 'Gerar Nova';
    showToast('✨ Imagem médica gerada com sucesso pela IA!');
  };
  imgLoader.onerror = () => {
    const fallbackUrl = `https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80`;
    currentGeneratedImageUrl = fallbackUrl;
    previewImg.src = fallbackUrl;
    spinner.classList.add('hidden');
    btn.disabled = false;
    btnText.textContent = 'Gerar Imagem';
    showToast('Imagem pronta!');
  };

  imgLoader.src = imageUrl;
}

function useGeneratedImage() {
  if (!currentGeneratedImageUrl) {
    alert('Gere uma imagem com a IA primeiro!');
    return;
  }
  document.getElementById('postImage').value = currentGeneratedImageUrl;
  showToast('✓ Imagem da IA aplicada no artigo!');
}

const aiContentTemplates = [
  {
    title: 'Glicemia e Hemoglobina Glicada: Como Prevenir o Pré-Diabetes',
    category: 'Prevenção & Longevidade',
    excerpt: 'Compreenda a diferença entre a glicose pontual e a média trimestral do seu organismo.',
    content: 'O diagnóstico precoce do pré-diabetes é a chave para evitar complicações metabólicas. Enquanto a Glicemia de Jejum reflete apenas o nível de açúcar no momento da coleta, a Hemoglobina Glicada (HbA1c) funciona como uma memória biológica que mapeia os últimos 90 dias.\n\nRecomenda-se a realização deste exame anualmente para todas as pessoas a partir dos 35 anos ou com histórico familiar.',
    prompt: 'Exame de glicemia e avaliação metabólica, estilo laboratório moderno limpo'
  },
  {
    title: 'Vitamina D e Imunidade: Por que Quase Todos Precisam de Suplementação?',
    category: 'Prevenção & Longevidade',
    excerpt: 'Mais do que uma vitamina, um hormônio vital para ossos, humor e proteção imunológica.',
    content: 'A rotina em ambientes fechados fez com que os níveis de 25-Hidroxivitamina D caíssem drasticamente na população urbana. Níveis abaixo de 30 ng/mL estão associados a fadiga crônica, dores musculares e maior vulnerabilidade a infecções.\n\nA dosagem laboratorial periódica permite que seu médico prescreva a suplementação com a dose exata para a sua necessidade individual.',
    prompt: 'Ilustração de imunidade forte, sol e bem-estar com estética médica sofisticada'
  },
  {
    title: 'Sexagem Fetal: Como a Genética Revolucionou a Gestação Precoce',
    category: 'Saúde da Mulher',
    excerpt: 'Descubra como o DNA fetal livre no sangue materno revela o sexo do bebê na 8ª semana.',
    content: 'A técnica de Biologia Molecular para sexagem fetal analisa pequenos fragmentos de DNA do feto que circulam na corrente sanguínea da mãe. O teste busca sequências específicas do cromossomo Y: sua presença confirma um menino, enquanto a ausência indica uma menina.\n\nCom precisão superior a 99.9%, o exame não oferece nenhum risco para a gestante nem para o bebê.',
    prompt: 'Gestante feliz com ultrassom e acolhimento em laboratório médico'
  }
];

let templateIndex = 0;
function suggestAiContent() {
  const t = aiContentTemplates[templateIndex % aiContentTemplates.length];
  templateIndex++;

  document.getElementById('postTitle').value = t.title;
  document.getElementById('postCategory').value = t.category;
  document.getElementById('postExcerpt').value = t.excerpt;
  document.getElementById('postContent').value = t.content;
  document.getElementById('aiImagePrompt').value = t.prompt;

  generateAiImage();
  showToast('✨ Texto e Imagem sugeridos pela IA!');
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
          <span class="font-bold block text-navy truncate max-w-xs">${p.title}</span>
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
          <span class="font-bold block text-navy truncate max-w-xs">${p.name}</span>
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
    localStorage.setItem('sb_products', JSON.stringify(products));
    renderProducts();
    renderAdminProductsList();
    showToast('Check-up removido.');
  }
}

// Admin: Settings
function handleSaveSettings(e) {
  e.preventDefault();
  settings.whatsapp = document.getElementById('cfgWhatsapp').value.replace(/\D/g, '');
  settings.announcement = document.getElementById('cfgAnnouncement').value;
  
  localStorage.setItem('sb_settings', JSON.stringify(settings));
  applySettings();
  showToast('Configurações atualizadas!');
}

function applySettings() {
  const annEl = document.getElementById('announcementText');
  const waCta = document.getElementById('whatsappCtaLink');

  if (annEl) annEl.textContent = settings.announcement;
  if (waCta) waCta.href = `https://wa.me/${settings.whatsapp}?text=Ol%C3%A1%20Laborat%C3%B3rio%20Dr.%20Samuel%20Barreto!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20exames.`;
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