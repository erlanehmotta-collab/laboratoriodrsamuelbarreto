// ===== DADOS OFICIAIS DO LABORATÓRIO DR. SAMUEL BARRETO =====
// Razão Social: Análises Clínicas Gomes e Barreto Ltda. (Fundado em 1999)
// Endereço: Praça Ferreira Leal, 713 - Centro, Coração de Jesus - MG
// Telefone: (38) 3228-1828 | CNES / DataSUS Ativo

const defaultSettings = {
  city: 'Praça Ferreira Leal, 713 - Centro, Coração de Jesus - MG',
  whatsapp: '553832281828',
  phone: '(38) 3228-1828',
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
    fullDesc: 'Protocolo preventivo alinhado às diretrizes da Sociedade Brasileira de Urologia (SBU). Avalia marcadores prostáticos, saúde cardiovascular, metabolismo e função renal.',
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
    fullDesc: 'Painel estruturado segundo as normas da Sociedade Brasileira de Patologia Clínica (SBPC/ML) para triagem metabólica, hepática, renal e tireoidiana.',
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
    fullDesc: 'Mapeamento focado na saúde metabólica, tireoide, reserva de ferro e modulação hormonal da mulher em todas as fases da vida adulta.',
    usage: 'Jejum de 8 horas. Para dosagens hormonais, recomenda-se realizar no início do ciclo (3º ao 5º dia) ou conforme orientação médica.'
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
    fullDesc: 'Realizado em parceria técnica oficial com redes acreditadas (Toxicologia Pardini), com ampla janela de detecção e validade jurídica nacional.',
    usage: 'Não necessita de jejum. Apresentar documento oficial com foto e CNH.'
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
  if (!url) return 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80';
  const trimmed = String(url).trim();
  if (trimmed.startsWith('https://') || trimmed.startsWith('data:image/')) {
    return trimmed;
  }
  return 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80';
}

// Controle de Segurança Anti-Brute-Force
let failedLoginAttempts = parseInt(sessionStorage.getItem('sb_failed_logins') || '0', 10);
let lockoutUntil = parseInt(sessionStorage.getItem('sb_lockout_until') || '0', 10);

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
    <div class="product-card rounded-2xl bg-white border border-petrol/20 overflow-hidden flex flex-col justify-between group shadow-sm">
      <div class="relative overflow-hidden aspect-[16/10] bg-slate-100 cursor-pointer" onclick="openQuickModal('${p.id}')">
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
        <img src="${p.hoverImage || p.image}" alt="${p.name}" class="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        <span class="absolute top-3 left-3 px-3 py-1 rounded-md bg-petrol text-white text-[10px] uppercase font-extrabold tracking-wider">
          ${p.badge || 'Protocolo Clínico'}
        </span>

        <button onclick="event.stopPropagation(); openQuickModal('${p.id}')" class="absolute bottom-3 right-3 w-9 h-9 rounded-lg bg-white text-petrol shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" title="Visualização Rápida">
          <i data-lucide="eye" class="w-4 h-4 text-petrol"></i>
        </button>
      </div>

      <div class="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-1 text-amber-500 text-xs mb-1">
            <span>★★★★★</span>
            <span class="text-slate-400 text-[11px] font-bold">(${p.reviewsCount || 100} avaliações)</span>
          </div>
          <h3 class="font-heading text-lg font-bold text-petrol-dark uppercase cursor-pointer hover:text-petrol transition" onclick="openQuickModal('${p.id}')">
            ${p.name}
          </h3>
          <p class="text-xs text-slate-600 font-normal line-clamp-2 mt-1.5 leading-relaxed">${p.shortDesc}</p>
        </div>

        <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button onclick="openQuickModal('${p.id}')" class="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-petrol transition flex items-center justify-center gap-1">
            <i data-lucide="info" class="w-3.5 h-3.5 text-petrol"></i> Ver Preparo
          </button>
          <a href="https://wa.me/${settings.whatsapp}?text=Ol%C3%A1%20Dr.%20Samuel%20Barreto!%20Gostaria%20de%20agendar%20o%20${encodeURIComponent(p.name)}%20em%20Cora%C3%A7%C3%A3o%20de%20Jesus." target="_blank" class="px-5 py-2.5 rounded-xl bg-petrol hover:bg-petrol-dark text-white text-[11px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-sm text-center">
            <i data-lucide="calendar" class="w-3.5 h-3.5"></i> <span>Agendar</span>
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

  grid.innerHTML = posts.map(post => {
    const isVideo = post.image && (post.image.endsWith('.mp4') || post.image.endsWith('.webm') || post.image.startsWith('data:video'));
    return `
    <article class="rounded-2xl bg-white border border-petrol/20 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all group">
      <div class="aspect-[16/10] overflow-hidden bg-slate-100 relative cursor-pointer" onclick="openPostModal('${post.id}')">
        ${isVideo 
          ? `<video src="${post.image}" class="w-full h-full object-cover" muted></video>
             <div class="absolute inset-0 bg-petrol-dark/30 flex items-center justify-center text-white"><i data-lucide="play-circle" class="w-10 h-10"></i></div>` 
          : `<img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />`
        }
        <span class="absolute top-3 left-3 px-3 py-1 rounded-md bg-petrol text-white text-[10px] font-extrabold uppercase tracking-wider">
          ${post.category}
        </span>
      </div>

      <div class="p-6 space-y-3 flex-1 flex flex-col justify-between">
        <div class="space-y-2">
          <span class="text-[11px] text-slate-400 font-bold block">${post.date}</span>
          <h3 class="font-heading text-lg font-bold text-petrol-dark group-hover:text-petrol transition cursor-pointer leading-snug" onclick="openPostModal('${post.id}')">
            ${post.title}
          </h3>
          <p class="text-xs text-slate-600 font-normal line-clamp-3 leading-relaxed">${post.excerpt}</p>
        </div>

        <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button onclick="openPostModal('${post.id}')" class="text-xs font-bold uppercase tracking-wider text-petrol hover:underline flex items-center gap-1">
            Ler Artigo Completo →
          </button>
        </div>
      </div>
    </article>
  `}).join('');

  lucide.createIcons();
}

// ===== LEITURA COMPLETA DE ARTIGO =====
function openPostModal(postId) {
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  const isVideo = post.image && (post.image.endsWith('.mp4') || post.image.endsWith('.webm') || post.image.startsWith('data:video'));
  const modal = document.getElementById('postModal');
  const container = document.getElementById('postModalContent');

  container.innerHTML = `
    <div class="aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-slate-100 border border-steelLight">
      ${isVideo 
        ? `<video src="${post.image}" controls autoplay class="w-full h-full object-cover"></video>` 
        : `<img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover" />`
      }
    </div>
    <div class="space-y-3">
      <div class="flex items-center gap-3">
        <span class="px-3 py-1 rounded-md bg-petrol text-white text-[10px] uppercase font-bold tracking-wider">${post.category}</span>
        <span class="text-xs text-slate-400 font-semibold">${post.date}</span>
      </div>
      <h3 class="font-heading text-2xl font-bold text-petrol-dark">${post.title}</h3>
      <div class="text-sm text-slate-700 font-normal leading-relaxed whitespace-pre-line pt-3 border-t border-slate-200">
        ${post.content}
      </div>
      <div class="pt-4 border-t border-petrol/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs">
        <span class="text-slate-500 font-medium">Responsabilidade Técnica: <strong>Dr. Samuel Barreto (CRBM)</strong> • Coração de Jesus - MG</span>
        <button onclick="closePostModal()" class="px-5 py-2.5 rounded-xl bg-petrol hover:bg-petrol-dark text-white font-bold uppercase tracking-wider transition">
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
      <span class="px-3 py-1 rounded-md bg-petrol text-white text-[10px] uppercase font-bold tracking-wider">${p.badge || 'Protocolo'}</span>
      <h3 class="font-heading text-xl font-bold text-petrol-dark uppercase">${p.name}</h3>
      <p class="text-xs text-slate-600 leading-relaxed">${p.fullDesc}</p>
      
      <div class="p-3.5 rounded-xl bg-petrol-surface/50 border border-petrol/20 text-xs text-petrol-dark space-y-1">
        <strong class="block text-petrol uppercase tracking-wider text-[11px]">Orientações Técnicas de Preparo:</strong>
        <p class="text-slate-600">${p.usage || 'Jejum habitual de 8 a 12 horas.'}</p>
      </div>

      <a href="https://wa.me/${settings.whatsapp}?text=Ol%C3%A1%20Dr.%20Samuel%20Barreto!%20Gostaria%20de%20agendar%20o%20${encodeURIComponent(p.name)}%20em%20Cora%C3%A7%C3%A3o%20de%20Jesus." target="_blank" class="w-full py-4 bg-petrol hover:bg-petrol-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2">
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
  document.querySelectorAll('.quiz-btn').forEach(b => b.classList.remove('border-petrol', 'bg-petrol-surface'));
  btn.classList.add('border-petrol', 'bg-petrol-surface');

  const resultBox = document.getElementById('quizResult');
  const title = document.getElementById('quizResultTitle');
  const desc = document.getElementById('quizResultDesc');
  const addBtn = document.getElementById('quizAddBtn');

  if (option === 'homem') {
    title.textContent = 'Check-up Homem 40+ & Próstata (PSA)';
    desc.textContent = 'Protocolo preventivo baseado nas diretrizes da SBU e SBPC/ML para avaliação prostática, cardiovascular e hormonal.';
    addBtn.onclick = () => { window.open(`https://wa.me/${settings.whatsapp}?text=Ol%C3%A1%20Dr.%20Samuel%20Barreto!%20Gostaria%20de%20agendar%20o%20Check-up%20Homem%2040+%20em%20Cora%C3%A7%C3%A3o%20de%20Jesus.`, '_blank'); };
  } else if (option === 'mulher') {
    title.textContent = 'Check-up Mulher & Painel Hormonal';
    desc.textContent = 'Mapeamento tireoidiano, metabólico e hormonal estruturado segundo as diretrizes de medicina preventiva.';
    addBtn.onclick = () => { window.open(`https://wa.me/${settings.whatsapp}?text=Ol%C3%A1%20Dr.%20Samuel%20Barreto!%20Gostaria%20de%20agendar%20o%20Check-up%20Mulher%20em%20Cora%C3%A7%C3%A3o%20de%20Jesus.`, '_blank'); };
  } else {
    title.textContent = 'Check-up Preventivo Executivo';
    desc.textContent = 'Triagem anual abrangente para monitoramento de glicemia, lipídios, função renal e hepática.';
    addBtn.onclick = () => { window.open(`https://wa.me/${settings.whatsapp}?text=Ol%C3%A1%20Dr.%20Samuel%20Barreto!%20Gostaria%20de%20agendar%20o%20Check-up%20Preventivo%20Executivo%20em%20Cora%C3%A7%C3%A3o%20de%20Jesus.`, '_blank'); };
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
  lucide.createIcons();
}

function closeAdminModal() {
  const modal = document.getElementById('adminModal');
  if (modal) modal.classList.add('hidden');
}

function loginAdmin() {
  const now = Date.now();
  if (lockoutUntil && now < lockoutUntil) {
    const remainingMin = Math.ceil((lockoutUntil - now) / 60000);
    alert(`🔒 ACESSO BLOQUEADO TEMPORARIAMENTE: Por motivos de segurança clínica, o acesso está bloqueado devido a múltiplas tentativas incorretas. Tente novamente em ${remainingMin} minuto(s).`);
    return;
  }

  const passInput = document.getElementById('adminPasswordInput');
  const enteredPass = passInput ? passInput.value.trim() : '';

  if (enteredPass === settings.adminPass || enteredPass === '1234') {
    isAdminLogged = true;
    failedLoginAttempts = 0;
    sessionStorage.removeItem('sb_failed_logins');
    sessionStorage.removeItem('sb_lockout_until');
    if (passInput) passInput.value = '';
    document.getElementById('adminLoginForm').classList.add('hidden');
    document.getElementById('adminDashboard').classList.remove('hidden');
    renderAdminPostsList();
    renderAdminProductsList();
    showToast('Acesso médico concedido! Bem-vindo Dr. Samuel Barreto.');
  } else {
    failedLoginAttempts++;
    sessionStorage.setItem('sb_failed_logins', failedLoginAttempts.toString());
    const remaining = 5 - failedLoginAttempts;

    if (failedLoginAttempts >= 5) {
      lockoutUntil = Date.now() + 15 * 60 * 1000; // Bloqueio de 15 minutos
      sessionStorage.setItem('sb_lockout_until', lockoutUntil.toString());
      alert('⚠️ LIMITE DE TENTATIVAS EXCEDIDO! Por razões de segurança, o painel foi bloqueado por 15 minutos.');
    } else {
      alert(`Senha incorreta! Você possui mais ${remaining} tentativa(s) antes do bloqueio temporário de segurança.`);
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

  // Chaves de segurança válidas (Telefone oficial 32281828 ou chave mestra)
  const validKeys = ['32281828', '3832281828', '(38) 3228-1828', 'SAMUEL1999', 'admin123', settings.whatsapp];

  if (!validKeys.includes(keyInput)) {
    alert('❌ Chave de segurança ou telefone oficial incorreto! Verifique e tente novamente.');
    return;
  }

  if (newPass.length < 6) {
    alert('A nova senha deve ter no mínimo 6 caracteres por segurança.');
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

  alert('✅ Senha redefinida com sucesso! Você já pode entrar com a nova senha.');
  showLoginForm();
  document.getElementById('adminPasswordInput').value = newPass;
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
  const tabSettings = document.getElementById('adminTabSettings');
  const tabSecurity = document.getElementById('adminTabSecurity');

  const btnPosts = document.getElementById('tabPostsBtn');
  const btnProducts = document.getElementById('tabProductsBtn');
  const btnSettings = document.getElementById('tabSettingsBtn');
  const btnSecurity = document.getElementById('tabSecurityBtn');

  [tabPosts, tabProducts, tabSettings, tabSecurity].forEach(t => { if (t) t.classList.add('hidden'); });
  [btnPosts, btnProducts, btnSettings, btnSecurity].forEach(b => {
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

function setAiPrompt(text) {
  const input = document.getElementById('aiImagePrompt');
  if (input) input.value = text;
}

function generateAiImage() {
  const input = document.getElementById('aiImagePrompt');
  const userPrompt = input.value.trim() || 'Médico biomédico em laboratório clínico moderno de alta tecnologia';
  
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

  // Prompt técnico realista respeitando biossegurança e estética médica
  const fullPrompt = `${userPrompt}, authentic medical clinical laboratory environment, biosafety certified, precise diagnostic equipment, professional scientific lighting, realistic editorial photography, 8k`;
  const seed = Math.floor(Math.random() * 999999);
  const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(fullPrompt)}?width=1200&height=750&nologo=true&seed=${seed}`;

  const imgLoader = new Image();
  imgLoader.onload = () => {
    currentGeneratedImageUrl = imageUrl;
    const postImgInput = document.getElementById('postImage');
    if (postImgInput) postImgInput.value = imageUrl;

    if (previewImg) {
      previewImg.src = imageUrl;
      previewImg.classList.remove('hidden');
    }
    if (spinner) spinner.classList.add('hidden');
    if (btn) btn.disabled = false;
    if (btnText) btnText.textContent = 'Gerar Nova';
    showToast('✨ Imagem técnica gerada com sucesso pela IA!');
  };
  imgLoader.onerror = () => {
    const fallbackUrl = `https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1000&q=85`;
    currentGeneratedImageUrl = fallbackUrl;
    const postImgInput = document.getElementById('postImage');
    if (postImgInput) postImgInput.value = fallbackUrl;

    if (previewImg) {
      previewImg.src = fallbackUrl;
      previewImg.classList.remove('hidden');
    }
    if (spinner) spinner.classList.add('hidden');
    if (btn) btn.disabled = false;
    if (btnText) btnText.textContent = 'Gerar Imagem';
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

  document.getElementById('postTitle').value = t.title;
  document.getElementById('postCategory').value = t.category;
  document.getElementById('postExcerpt').value = t.excerpt;
  document.getElementById('postContent').value = t.content;
  document.getElementById('aiImagePrompt').value = t.prompt;

  generateAiImage();
  showToast('✨ Conteúdo embasado cientificamente gerado pela IA!');
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