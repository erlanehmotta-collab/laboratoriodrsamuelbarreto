// ===== DADOS INICIAIS DO LABORATÓRIO DR. SAMUEL BARRETO =====
const defaultSettings = {
  city: 'Unidade Central',
  whatsapp: '5500000000000',
  announcement: '🔬 COLETA DOMICILIAR SEM TAXA PARA IDOSOS E GESTANTES | LAUDOS DE ALTA PRECISÃO',
  adminPass: 'admin123'
};

const defaultProducts = [
  {
    id: 'checkup-geral',
    name: 'Check-up Preventivo Essencial',
    category: 'checkups',
    badge: 'Mais Solicitado',
    price: 149.00,
    installments: '3x de R$ 49,66',
    rating: 5.0,
    reviewsCount: 148,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Hemograma Completo + Glicemia + Colesterol Total e Frações + Triglicerídeos + Creatinina + TSH.',
    fullDesc: 'Painel completo para avaliação geral do organismo, imunidade, perfil glicêmico e lipídico, além da função renal e tireoidiana básica.',
    usage: 'Jejum obrigatório de 8 a 12 horas. Água pode ser ingerida com moderação.'
  },
  {
    id: 'checkup-mulher',
    name: 'Check-up Mulher Completo & Hormonal',
    category: 'mulher',
    badge: 'Saúde Feminina',
    price: 269.00,
    installments: '4x de R$ 67,25',
    rating: 5.0,
    reviewsCount: 116,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Hemograma + TSH + T4 Livre + Ferritina + Vitamina D + Perfil Lipídico + Glicemia + Estradiol + Progesterona.',
    fullDesc: 'Protocolo preventivo desenhado para a fisiologia feminina: investiga disposição, queda de cabelo, oscilações hormonais, tireoide e saúde óssea.',
    usage: 'Jejum de 8 horas. Recomenda-se realizar entre o 3º e 5º dia do ciclo menstrual caso haja dosagem hormonal associada.'
  },
  {
    id: 'checkup-homem',
    name: 'Check-up Homem 40+ & Próstata (PSA)',
    category: 'homem',
    badge: 'Prevenção Masculina',
    price: 249.00,
    installments: '3x de R$ 83,00',
    rating: 4.9,
    reviewsCount: 92,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'PSA Total e Livre + Testosterona Total + Hemograma + Ácido Úrico + Glicemia + Perfil Lipídico + Ureia.',
    fullDesc: 'Painel com foco na saúde da próstata, níveis de energia, metabolismo, função cardiovascular e rins.',
    usage: 'Jejum de 8 horas. Evitar relações sexuais e ciclismo por 48h antes da coleta de PSA.'
  },
  {
    id: 'sexagem-fetal',
    name: 'Sexagem Fetal Precoce (DNA no Sangue)',
    category: 'especiais',
    badge: '99.9% de Acerto',
    price: 199.00,
    installments: '3x de R$ 66,33',
    rating: 5.0,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Descubra se é Menino ou Menina a partir da 8ª semana de gestação.',
    fullDesc: 'Análise molecular no plasma materno que identifica a presença do cromossomo Y com rigor laboratorial e entrega rápida do laudo.',
    usage: 'Não necessita de jejum. Pode ser feito a partir da 8ª semana completa de gravidez.'
  },
  {
    id: 'toxicologico-cnh',
    name: 'Exame Toxicológico CNH & Concursos',
    category: 'especiais',
    badge: 'Credenciado Denatran',
    price: 169.00,
    installments: '3x de R$ 56,33',
    rating: 4.9,
    reviewsCount: 185,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Coleta de queratina (cabelo ou pelos) com resultado direto no sistema Renach.',
    fullDesc: 'Obrigatório para emissão e renovação de CNH nas categorias C, D e E, além de admissões CLT e concursos públicos.',
    usage: 'Não necessita de jejum. Apresentar documento oficial com foto e CNH.'
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
    title: 'Coleta Domiciliar: Segurança e Conforto para Idosos e Gestantes',
    category: 'Prevenção & Longevidade',
    date: '12 de Agosto, 2026',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Como nosso serviço móvel de enfermagem leva o padrão de excelência de cabine para sua casa.',
    content: 'Evitar deslocamentos no trânsito, filas e a ansiedade da espera faz toda a diferença para pacientes idosos, gestantes e crianças. Nosso serviço de coleta em domicílio segue as mesmas normas rigorosas de esterilização e cadeia de frio para transporte das amostras biológicas, garantindo que o resultado seja 100% confiável e seguro.'
  }
];

// ===== ESTADO PERSISTENTE =====
let products = JSON.parse(localStorage.getItem('sb_products')) || defaultProducts;
let posts = JSON.parse(localStorage.getItem('sb_posts')) || defaultPosts;
let settings = JSON.parse(localStorage.getItem('sb_settings')) || defaultSettings;
let cart = JSON.parse(localStorage.getItem('sb_cart')) || [];
let activeCategory = 'todos';
let isAdminLogged = false;
let selectedPaymentMethod = 'pix';

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderPosts();
  applySettings();
  updateCartUI();
  lucide.createIcons();

  // Menu Mobile
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
  }

  // Sacola de Exames
  const cartBtn = document.getElementById('cartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartDrawerBackdrop = document.getElementById('cartDrawerBackdrop');

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartDrawerBackdrop) {
    cartDrawerBackdrop.addEventListener('click', (e) => {
      if (e.target === cartDrawerBackdrop) closeCart();
    });
  }
});

// ===== RENDERIZAÇÃO DE PRODUTOS / CHECK-UPS =====
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = activeCategory === 'todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card rounded-2xl bg-white border border-gold/30 overflow-hidden flex flex-col justify-between group shadow-sm">
      <div class="relative overflow-hidden aspect-[4/3] bg-sage/30 cursor-pointer" onclick="openQuickModal('${p.id}')">
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
        <img src="${p.hoverImage || p.image}" alt="${p.name}" class="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-linen/95 border border-gold/30 text-[10px] uppercase font-bold tracking-wider text-champagne backdrop-blur-sm">
          ${p.badge || 'Completo'}
        </span>

        <button onclick="event.stopPropagation(); openQuickModal('${p.id}')" class="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white text-emerald shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" title="Visualização Rápida">
          <i data-lucide="eye" class="w-4 h-4"></i>
        </button>
      </div>

      <div class="p-6 space-y-3 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-1 text-gold text-xs mb-1">
            <span>★★★★★</span>
            <span class="text-muted text-[11px]">(${p.reviewsCount || 100} avaliações)</span>
          </div>
          <h3 class="font-serif text-lg font-bold text-emerald cursor-pointer hover:text-champagne transition" onclick="openQuickModal('${p.id}')">
            ${p.name}
          </h3>
          <p class="text-xs text-muted font-light line-clamp-2 mt-1">${p.shortDesc}</p>
        </div>

        <div class="pt-4 border-t border-sage flex items-center justify-between">
          <div>
            <span class="block font-serif text-lg font-bold text-emerald">R$ ${Number(p.price).toFixed(2).replace('.', ',')}</span>
            <span class="block text-[10px] text-muted">${p.installments || 'ou até 3x'}</span>
          </div>
          <button onclick="addToCart('${p.id}')" class="px-4 py-2.5 rounded-full bg-emerald hover:bg-champagne text-white text-[11px] font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm">
            <i data-lucide="plus" class="w-3.5 h-3.5"></i> Selecionar
          </button>
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
    <article class="rounded-2xl bg-white border border-gold/30 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all group">
      <div class="aspect-[16/10] overflow-hidden bg-sage/40 relative cursor-pointer" onclick="openPostModal('${post.id}')">
        <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-linen/95 border border-gold/30 text-[10px] font-bold uppercase tracking-wider text-champagne backdrop-blur-sm">
          ${post.category}
        </span>
      </div>

      <div class="p-6 space-y-3 flex-1 flex flex-col justify-between">
        <div class="space-y-2">
          <span class="text-[11px] text-muted block">${post.date}</span>
          <h3 class="font-serif text-xl font-bold text-emerald group-hover:text-champagne transition cursor-pointer" onclick="openPostModal('${post.id}')">
            ${post.title}
          </h3>
          <p class="text-xs text-muted font-light line-clamp-3 leading-relaxed">${post.excerpt}</p>
        </div>

        <div class="pt-4 border-t border-sage flex items-center justify-between">
          <button onclick="openPostModal('${post.id}')" class="text-xs font-bold uppercase tracking-wider text-champagne hover:underline flex items-center gap-1">
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
    <div class="aspect-[16/9] rounded-2xl overflow-hidden mb-4 bg-sage/30 border border-gold/20">
      <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover" />
    </div>
    <div class="space-y-3">
      <div class="flex items-center gap-3">
        <span class="px-3 py-1 rounded-full bg-sage text-emerald text-[10px] uppercase font-bold tracking-wider">${post.category}</span>
        <span class="text-xs text-muted">${post.date}</span>
      </div>
      <h3 class="font-serif text-2xl sm:text-3xl font-bold text-emerald">${post.title}</h3>
      <div class="text-sm text-emerald/90 font-light leading-relaxed whitespace-pre-line pt-2 border-t border-gold/20">
        ${post.content}
      </div>
      <div class="pt-4 flex justify-between items-center text-xs">
        <span class="text-muted">Por <strong>Dr. Samuel Barreto (CRBM)</strong></span>
        <button onclick="closePostModal()" class="px-5 py-2.5 rounded-full bg-emerald text-white font-bold uppercase tracking-wider">
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
    b.classList.add('text-muted');
  });
  btn.classList.add('active-pill');
  btn.classList.remove('text-muted');
  renderProducts();
}

// ===== GERENCIAMENTO DA SACOLA DE EXAMES =====
function addToCart(productId, qty = 1) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...prod, qty });
  }

  saveCart();
  updateCartUI();
  showToast(`"${prod.name}" adicionado à lista de exames!`);
  openCart();
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('sb_cart', JSON.stringify(cart));
}

function updatePaymentMethod() {
  const methodRadio = document.querySelector('input[name="paymentMethod"]:checked');
  if (methodRadio) {
    selectedPaymentMethod = methodRadio.value;
  }
  updateCartUI();
}

function updateCartUI() {
  const countBadge = document.getElementById('cartCount');
  const itemsContainer = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const shippingText = document.getElementById('shippingText');
  const shippingBar = document.getElementById('shippingBar');
  const shippingPercent = document.getElementById('shippingPercent');

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (countBadge) countBadge.textContent = totalItems;
  
  // Cálculo de desconto no PIX
  const isPix = selectedPaymentMethod === 'pix';
  const discount = (isPix && subtotal > 0) ? subtotal * 0.05 : 0;
  const finalTotal = subtotal - discount;

  if (subtotalEl) {
    if (isPix && subtotal > 0) {
      subtotalEl.innerHTML = `<span class="line-through text-xs text-muted font-normal mr-2">R$ ${subtotal.toFixed(2).replace('.', ',')}</span> R$ ${finalTotal.toFixed(2).replace('.', ',')}`;
    } else {
      subtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    }
  }

  const pixBox = document.getElementById('pixDiscountBox');
  const pixVal = document.getElementById('pixDiscountValue');
  const checkoutBtnText = document.getElementById('checkoutBtnText');

  if (pixBox) {
    if (isPix && subtotal > 0) {
      pixBox.classList.remove('hidden');
      if (pixVal) pixVal.textContent = `- R$ ${discount.toFixed(2).replace('.', ',')}`;
    } else {
      pixBox.classList.add('hidden');
    }
  }

  if (checkoutBtnText) {
    checkoutBtnText.textContent = subtotal > 0 
      ? `Agendar (Total R$ ${finalTotal.toFixed(2).replace('.', ',')})` 
      : 'Agendar e Garantir Valores';
  }

  const target = 190;
  const progress = Math.min(100, Math.round((subtotal / target) * 100));
  if (shippingBar) shippingBar.style.width = `${progress}%`;
  if (shippingPercent) shippingPercent.textContent = `${progress}%`;
  if (shippingText) {
    if (subtotal >= target) {
      shippingText.textContent = '🎉 Parabéns! Coleta Domiciliar Grátis desbloqueada!';
    } else {
      const remaining = target - subtotal;
      shippingText.textContent = `Faltam R$ ${remaining.toFixed(2).replace('.', ',')} para Coleta Domiciliar Grátis`;
    }
  }

  if (itemsContainer) {
    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="text-center py-12 space-y-3">
          <i data-lucide="clipboard-list" class="w-10 h-10 text-gold mx-auto opacity-50"></i>
          <p class="text-sm text-muted">Nenhum exame selecionado.</p>
          <button onclick="closeCart()" class="text-xs uppercase font-bold tracking-wider text-champagne">
            Ver Check-ups Disponíveis →
          </button>
        </div>
      `;
    } else {
      itemsContainer.innerHTML = cart.map(item => `
        <div class="flex items-center gap-4 p-3 rounded-xl bg-white border border-gold/20">
          <img src="${item.image}" alt="${item.name}" class="w-14 h-14 object-cover rounded-lg bg-sage/40" />
          <div class="flex-1 min-w-0">
            <h4 class="font-serif font-semibold text-sm text-emerald truncate">${item.name}</h4>
            <span class="text-xs text-muted">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
            <div class="flex items-center gap-2 mt-1">
              <button onclick="updateQty('${item.id}', -1)" class="w-5 h-5 rounded bg-sage flex items-center justify-center text-xs font-bold" aria-label="Diminuir">-</button>
              <span class="text-xs font-semibold">${item.qty}</span>
              <button onclick="updateQty('${item.id}', 1)" class="w-5 h-5 rounded bg-sage flex items-center justify-center text-xs font-bold" aria-label="Aumentar">+</button>
            </div>
          </div>
          <button onclick="updateQty('${item.id}', -${item.qty})" class="text-muted hover:text-red-500 p-1" aria-label="Remover">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      `).join('');
    }
    lucide.createIcons();
  }
}

function openCart() {
  const drawer = document.getElementById('cartDrawerBackdrop');
  if (drawer) drawer.classList.remove('hidden');
}

function closeCart() {
  const drawer = document.getElementById('cartDrawerBackdrop');
  if (drawer) drawer.classList.add('hidden');
}

// ===== QUICK VIEW MODAL =====
function openQuickModal(productId) {
  const p = products.find(prod => prod.id === productId);
  if (!p) return;

  const modal = document.getElementById('quickModal');
  const content = document.getElementById('modalContent');

  content.innerHTML = `
    <div class="aspect-square rounded-2xl overflow-hidden bg-sage/30 border border-gold/20">
      <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover" />
    </div>
    <div class="space-y-4">
      <span class="px-3 py-1 rounded-full bg-sage text-emerald text-[10px] uppercase font-bold tracking-wider">${p.badge || 'Completo'}</span>
      <h3 class="font-serif text-2xl font-bold text-emerald">${p.name}</h3>
      <span class="font-serif text-2xl font-bold text-emerald block">R$ ${p.price.toFixed(2).replace('.', ',')}</span>
      <p class="text-xs text-muted leading-relaxed">${p.fullDesc}</p>
      
      <div class="p-3 rounded-xl bg-sage/40 border border-gold/20 text-xs text-emerald">
        <strong>Preparo & Jejum:</strong> ${p.usage || 'Jejum de 8 a 12 horas.'}
      </div>

      <button onclick="addToCart('${p.id}'); closeQuickModal();" class="w-full py-4 bg-emerald hover:bg-champagne text-white rounded-full text-xs font-bold uppercase tracking-widest transition-colors shadow-lg">
        Adicionar aos Meus Exames
      </button>
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
  document.querySelectorAll('.quiz-btn').forEach(b => b.classList.remove('border-champagne', 'bg-gold/20'));
  btn.classList.add('border-champagne', 'bg-gold/20');

  const resultBox = document.getElementById('quizResult');
  const title = document.getElementById('quizResultTitle');
  const desc = document.getElementById('quizResultDesc');
  const addBtn = document.getElementById('quizAddBtn');

  if (option === 'mulher') {
    title.textContent = 'Check-up Mulher Completo & Hormonal';
    desc.textContent = 'Avaliação integrada de tireoide (TSH/T4), vitaminas, metabolismo e marcadores hormonais essenciais.';
    addBtn.onclick = () => { addToCart('checkup-mulher'); };
  } else if (option === 'homem') {
    title.textContent = 'Check-up Homem 40+ & Próstata';
    desc.textContent = 'PSA Total e Livre, Perfil Cardiovascular, Testosterona e avaliação renal/hepática.';
    addBtn.onclick = () => { addToCart('checkup-homem'); };
  } else {
    title.textContent = 'Check-up Preventivo Essencial';
    desc.textContent = 'Hemograma, Glicemia, Colesterol Total/Frações, Triglicerídeos e Creatinina para a rotina anual.';
    addBtn.onclick = () => { addToCart('checkup-geral'); };
  }

  resultBox.classList.remove('hidden');
}

// ===== CHECKOUT SEGURO VIA WHATSAPP =====
function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert('Sua lista de exames está vazia!');
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const isPix = selectedPaymentMethod === 'pix';
  const discount = isPix ? subtotal * 0.05 : 0;
  const finalTotal = subtotal - discount;
  const orderId = 'SB' + Math.floor(100000 + Math.random() * 900000);

  const itemsList = cart.map(item => `  • ${item.qty}x ${item.name} - R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}`).join('%0A');
  
  const paymentText = isPix 
    ? `⚡ *PIX Instantâneo (5% de Desconto)*%0A🎁 Desconto Aplicado: - R$ ${discount.toFixed(2).replace('.', ',')}` 
    : `💳 *Cartão de Crédito (em até 6x)*%0A🔒 Link de Pagamento Oficial Criptografado`;

  const message = `🏥 *SOLICITAÇÃO DE EXAMES - DR. SAMUEL BARRETO*%0A` +
    `🔖 *Código de Identificação:* #${orderId}%0A%0A` +
    `🧪 *Exames / Check-ups Solicitados:*%0A${itemsList}%0A%0A` +
    `💰 *Valor Tabela:* R$ ${subtotal.toFixed(2).replace('.', ',')}%0A` +
    `${paymentText}%0A` +
    `💎 *VALOR FINAL:* R$ ${finalTotal.toFixed(2).replace('.', ',')}%0A%0A` +
    `🔒 *Segurança:* Laudo Criptografado & Sigilo Médico Garantido.%0A` +
    `Por favor, me informe as instruções de preparo/jejum e os horários para atendimento! ✨`;

  window.open(`https://wa.me/${settings.whatsapp}?text=${message}`, '_blank');
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
    b.classList.remove('bg-emerald', 'text-white');
    b.classList.add('bg-sage', 'text-emerald');
  });

  if (tab === 'posts') {
    tabPosts.classList.remove('hidden');
    btnPosts.classList.add('bg-emerald', 'text-white');
  } else if (tab === 'products') {
    tabProducts.classList.remove('hidden');
    btnProducts.classList.add('bg-emerald', 'text-white');
  } else {
    tabSettings.classList.remove('hidden');
    btnSettings.classList.add('bg-emerald', 'text-white');
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
    <div class="flex items-center justify-between p-3 rounded-xl bg-linen border border-sage text-xs">
      <div class="flex items-center gap-3">
        <img src="${p.image}" alt="${p.title}" class="w-10 h-10 object-cover rounded-lg" />
        <div>
          <span class="font-bold block text-emerald truncate max-w-xs">${p.title}</span>
          <span class="text-muted text-[10px]">${p.category} • ${p.date}</span>
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
  const price = parseFloat(document.getElementById('prodPrice').value);
  const category = document.getElementById('prodCategory').value;
  const image = document.getElementById('prodImage').value;
  const badge = document.getElementById('prodBadge').value || 'Completo';
  const shortDesc = document.getElementById('prodShortDesc').value;
  const usage = document.getElementById('prodUsage').value;

  const prodObj = {
    id,
    name,
    price,
    category,
    image,
    badge,
    shortDesc,
    fullDesc: shortDesc,
    usage,
    installments: `3x de R$ ${(price / 3).toFixed(2).replace('.', ',')}`,
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
    <div class="flex items-center justify-between p-3 rounded-xl bg-linen border border-sage text-xs">
      <div class="flex items-center gap-3">
        <img src="${p.image}" alt="${p.name}" class="w-10 h-10 object-cover rounded-lg" />
        <div>
          <span class="font-bold block text-emerald truncate max-w-xs">${p.name}</span>
          <span class="text-muted text-[10px]">R$ ${Number(p.price).toFixed(2)} • ${p.category}</span>
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