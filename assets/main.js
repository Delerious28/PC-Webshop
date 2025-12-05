const defaultData = {
  products: [
    { id: 'cpu-13900k', name: 'Intel Core i9-13900K', category: 'CPU', brand: 'Intel', price: 589, socket: 'LGA1700', cores: 24, threads: 32, clock: '3.0 / 5.8GHz', ramType: 'DDR5', tdp: 253, topSpecs: ['24 cores', '5.8GHz boost', 'LGA1700'], badges: ['flagship'] },
    { id: 'cpu-7800x3d', name: 'AMD Ryzen 7 7800X3D', category: 'CPU', brand: 'AMD', price: 449, socket: 'AM5', cores: 8, threads: 16, clock: '4.2 / 5.0GHz', ramType: 'DDR5', tdp: 120, topSpecs: ['8 cores', '3D V-Cache', 'AM5'], badges: ['gaming'] },
    { id: 'cpu-5800x', name: 'AMD Ryzen 7 5800X', category: 'CPU', brand: 'AMD', price: 329, socket: 'AM4', cores: 8, threads: 16, clock: '3.8 / 4.7GHz', ramType: 'DDR4', tdp: 105, topSpecs: ['8 cores', '4.7GHz boost', 'AM4'], badges: ['value'] },

    { id: 'mb-z790', name: 'ASUS ROG Strix Z790-E', category: 'Motherboard', brand: 'ASUS', price: 429, socket: 'LGA1700', ramType: 'DDR5', formFactor: 'ATX', chipset: 'Z790', topSpecs: ['LGA1700', 'DDR5', 'PCIe 5.0'], badges: ['wifi'] },
    { id: 'mb-b650', name: 'MSI MPG B650 Carbon', category: 'Motherboard', brand: 'MSI', price: 299, socket: 'AM5', ramType: 'DDR5', formFactor: 'ATX', chipset: 'B650', topSpecs: ['AM5', 'DDR5', 'PCIe 5.0'], badges: ['wifi'] },
    { id: 'mb-x570', name: 'Gigabyte X570 Aorus Elite', category: 'Motherboard', brand: 'Gigabyte', price: 219, socket: 'AM4', ramType: 'DDR4', formFactor: 'ATX', chipset: 'X570', topSpecs: ['AM4', 'DDR4', 'PCIe 4.0'], badges: [] },

    { id: 'gpu-4090', name: 'NVIDIA RTX 4090 Founders', category: 'GPU', brand: 'NVIDIA', price: 1599, chipset: 'RTX 4090', vram: 24, length: 304, outputs: 'HDMI 2.1, 3x DP 1.4a', tdp: 450, topSpecs: ['24GB GDDR6X', '304mm length', 'HDMI 2.1'], badges: ['4k', 'raytracing'] },
    { id: 'gpu-4080', name: 'MSI RTX 4080 Gaming X Trio', category: 'GPU', brand: 'MSI', price: 1199, chipset: 'RTX 4080', vram: 16, length: 337, outputs: 'HDMI 2.1, 3x DP 1.4a', tdp: 320, topSpecs: ['16GB GDDR6X', '337mm length', 'Tri-fan'], badges: ['4k'] },
    { id: 'gpu-7900xtx', name: 'Sapphire Nitro+ RX 7900 XTX', category: 'GPU', brand: 'AMD', price: 999, chipset: 'RX 7900 XTX', vram: 24, length: 320, outputs: 'HDMI 2.1, 3x DP 2.1', tdp: 355, topSpecs: ['24GB GDDR6', '320mm length', 'DP 2.1'], badges: ['4k'] },

    { id: 'ram-lexar', name: 'Lexar Ares RGB 32GB', category: 'RAM', brand: 'Lexar', price: 129, ramType: 'DDR5', speed: 6000, latency: 'CL32', capacity: 32, rgb: true, topSpecs: ['DDR5-6000', 'CL32', 'RGB'], badges: [] },
    { id: 'ram-corsair', name: 'Corsair Vengeance 32GB', category: 'RAM', brand: 'Corsair', price: 109, ramType: 'DDR4', speed: 3600, latency: 'CL18', capacity: 32, rgb: false, topSpecs: ['DDR4-3600', 'CL18', 'Low-profile'], badges: ['value'] },
    { id: 'ram-gskill', name: 'G.Skill Trident Z5 RGB 32GB', category: 'RAM', brand: 'G.Skill', price: 179, ramType: 'DDR5', speed: 6400, latency: 'CL32', capacity: 32, rgb: true, topSpecs: ['DDR5-6400', 'CL32', 'RGB'], badges: ['oc'] },

    { id: 'case-h510', name: 'NZXT H5 Flow RGB', category: 'Case', brand: 'NZXT', price: 139, maxGpuLength: 365, formFactor: 'ATX', topSpecs: ['365mm GPU', 'High airflow', 'RGB'], badges: [] },
    { id: 'case-fractal', name: 'Fractal North', category: 'Case', brand: 'Fractal', price: 149, maxGpuLength: 355, formFactor: 'ATX', topSpecs: ['355mm GPU', 'Wood front', 'Airflow'], badges: [] },
    { id: 'case-lianli', name: 'Lian Li O11D Evo', category: 'Case', brand: 'Lian Li', price: 169, maxGpuLength: 422, formFactor: 'ATX', topSpecs: ['422mm GPU', 'Dual-chamber', 'Glass'], badges: ['premium'] },

    { id: 'psu-850', name: 'Seasonic Focus GX-850', category: 'PSU', brand: 'Seasonic', price: 169, wattage: 850, rating: '80+ Gold', topSpecs: ['850W', 'Gold', 'Fully modular'], badges: [] },
    { id: 'psu-1000', name: 'Corsair RM1000e', category: 'PSU', brand: 'Corsair', price: 179, wattage: 1000, rating: '80+ Gold', topSpecs: ['1000W', 'Gold', 'Silent fan'], badges: [] },
    { id: 'psu-1200', name: 'ASUS ROG Thor 1200P2', category: 'PSU', brand: 'ASUS', price: 299, wattage: 1200, rating: '80+ Platinum', topSpecs: ['1200W', 'Platinum', 'OLED'], badges: ['premium'] },

    { id: 'storage-980pro', name: 'Samsung 980 Pro 2TB', category: 'Storage', brand: 'Samsung', price: 189, type: 'NVMe', speed: 'PCIe 4.0', topSpecs: ['2TB NVMe', 'PCIe 4.0', '7000MB/s'], badges: [] },
    { id: 'cooler-lc', name: 'NZXT Kraken 360 RGB', category: 'Cooling', brand: 'NZXT', price: 199, type: 'AIO', size: '360mm', topSpecs: ['360mm AIO', 'RGB', 'Silent'], badges: [] },
    { id: 'cooler-air', name: 'Noctua NH-D15', category: 'Cooling', brand: 'Noctua', price: 109, type: 'Air', size: 'Dual tower', topSpecs: ['Air cooling', 'Silent', 'Dual tower'], badges: ['quiet'] },
  ],
  newsItems: [
    { id: 'news-5090', name: 'RTX 5090 leaks', type: 'news', href: 'news.html', tags: ['GPU', 'leak', 'GDDR7'] },
    { id: 'news-ddr5', name: 'DDR5-6400 CL32 deals', type: 'news', href: 'news.html', tags: ['RAM', 'deal'] },
    { id: 'news-psu', name: 'ATX 3.1 cable updates', type: 'news', href: 'news.html', tags: ['PSU', 'safety'] },
  ],
  forumThreads: [
    { id: 'forum-silent', name: 'Silent airflow megathread', type: 'forum', href: 'forms.html', tags: ['silence', 'fans'] },
    { id: 'forum-4k', name: '4K build met 7800X3D', type: 'forum', href: 'forms.html', tags: ['AM5', '4K'] },
    { id: 'forum-clearance', name: 'GPU clearance twijfel', type: 'forum', href: 'forms.html', tags: ['clearance', 'cases'] },
  ],
  filterConfig: {
    GPU: [
      { key: 'chipset', label: 'Chipset', type: 'multi', options: ['RTX 4090', 'RTX 4080', 'RX 7900 XTX'] },
      { key: 'vram', label: 'VRAM (GB)', type: 'range', min: 8, max: 24, step: 1 },
      { key: 'length', label: 'Max length (mm)', type: 'range', min: 250, max: 360, step: 5 },
      { key: 'brand', label: 'Brand', type: 'multi', options: ['NVIDIA', 'MSI', 'AMD'] },
    ],
    CPU: [
      { key: 'brand', label: 'Brand', type: 'multi', options: ['Intel', 'AMD'] },
      { key: 'cores', label: 'Cores', type: 'range', min: 6, max: 24, step: 2 },
      { key: 'socket', label: 'Socket', type: 'multi', options: ['LGA1700', 'AM5', 'AM4'] },
    ],
    Motherboard: [
      { key: 'brand', label: 'Brand', type: 'multi', options: ['ASUS', 'MSI', 'Gigabyte'] },
      { key: 'socket', label: 'Socket', type: 'multi', options: ['LGA1700', 'AM5', 'AM4'] },
      { key: 'ramType', label: 'RAM', type: 'multi', options: ['DDR4', 'DDR5'] },
    ],
    RAM: [
      { key: 'ramType', label: 'Memory Type', type: 'multi', options: ['DDR4', 'DDR5'] },
      { key: 'speed', label: 'Speed (MHz)', type: 'range', min: 3000, max: 7000, step: 200 },
      { key: 'rgb', label: 'RGB', type: 'multi', options: ['Yes', 'No'] },
    ],
    Case: [
      { key: 'brand', label: 'Brand', type: 'multi', options: ['NZXT', 'Fractal', 'Lian Li'] },
      { key: 'maxGpuLength', label: 'GPU length (mm)', type: 'range', min: 300, max: 430, step: 5 },
    ],
    PSU: [
      { key: 'brand', label: 'Brand', type: 'multi', options: ['Seasonic', 'Corsair', 'ASUS'] },
      { key: 'wattage', label: 'Wattage', type: 'range', min: 650, max: 1300, step: 50 },
    ],
    Storage: [
      { key: 'brand', label: 'Brand', type: 'multi', options: ['Samsung'] },
    ],
    Cooling: [
      { key: 'type', label: 'Type', type: 'multi', options: ['AIO', 'Air'] },
    ],
  },
  builderSteps: [
    { key: 'CPU', label: 'CPU', required: true },
    { key: 'GPU', label: 'GPU', required: true },
    { key: 'Motherboard', label: 'Motherboard', required: true },
    { key: 'RAM', label: 'Memory', required: true },
    { key: 'Storage', label: 'Storage', required: false },
    { key: 'Cooling', label: 'Cooling', required: false },
    { key: 'Case', label: 'Case', required: true },
    { key: 'PSU', label: 'Power Supply', required: true },
  ],
  prebuiltPcs: [
    {
      id: 'neon-4k',
      name: 'Neon 4K rig',
      price: '€ 3.299',
      useCase: '4K Ultra / RT on',
      specs: ['RTX 4090', 'Ryzen 7 7800X3D', '64GB DDR5-6000', '2TB Gen4 NVMe'],
      badges: ['4K', 'Raytracing'],
      image: 'https://images.unsplash.com/photo-1587202372775-98973a62c11a?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'creator-pro',
      name: 'Creator Pro',
      price: '€ 2.499',
      useCase: 'Productie / AI assist',
      specs: ['RTX 4080', 'Core i9 14900K', '128GB DDR5', '4TB NVMe'],
      badges: ['AI ready', 'Studio'],
      image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'esports-falcon',
      name: 'eSports Falcon',
      price: '€ 1.499',
      useCase: '360Hz / competitive',
      specs: ['RTX 4070 Super', 'Ryzen 5 7600X', '32GB DDR5', '1TB NVMe'],
      badges: ['1440p', 'Low-latency'],
      image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1200&q=80',
    },
  ],
  homeContent: {
    heroTitle: 'Assemble your droomrig',
    heroSubtitle: 'Cyberpunk accenten, monospaced specs, en directe filters. Start met de builder of duik een categorie in.',
    heroCtaPrimaryLabel: 'Start PC builder',
    heroCtaPrimaryHref: 'builder.html',
    heroCtaSecondaryLabel: 'Shop hardware',
    heroCtaSecondaryHref: 'catalog.html',
    featuredPcId: 'neon-4k',
    heroImage: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
    showcaseTitle: 'Deep-dive kaarten & deals',
    showcaseSubtitle: 'Benchmarks, hover specs, skeleton loaders en filterchips die blijven staan terwijl je doorscrolt.',
    reviewsTitle: 'Tweakers-achtige stroom van reviews & headlines',
    reviewsSubtitle: 'Kies je volgende upgrade met kritische reviews, benchmarks, deals en een neon ticker die continu doorloopt.',
    heroCardTitle: '4K Gaming ready',
    heroCardSubtitle: 'RTX 4090 + 7800X3D build',
    heroCardPrice: '€ 3.299',
    heroCardCta: 'Bekijk build',
    heroCardImage: 'https://images.unsplash.com/photo-1587202372775-98973a62c11a?auto=format&fit=crop&w=1200&q=80',
    heroCardBadge: 'Nieuw',
  },
};

const state = {
  category: 'GPU',
  filters: {},
  cart: [],
  builderSelections: {},
  user: null,
  data: defaultData,
  baseData: defaultData,
  adminOverrides: {},
};

function getLocalProducts() {
  try {
    return JSON.parse(localStorage.getItem('pcwebshop_products') || '[]');
  } catch (e) {
    return [];
  }
}

const refs = {
  shopSection: document.getElementById('shop-section'),
  builderSection: document.getElementById('builder-section'),
  categorySelect: document.getElementById('category-select'),
  filterGroups: document.getElementById('filter-groups'),
  productGrid: document.getElementById('product-grid'),
  skeletonGrid: document.getElementById('skeletons'),
  activeFilters: document.getElementById('active-filters'),
  builderStepsContainer: document.getElementById('builder-steps'),
  progressBar: document.getElementById('progress-bar'),
  progressCount: document.getElementById('progress-count'),
  progressText: document.getElementById('progress-text'),
  totals: document.getElementById('totals'),
  addBuildBtn: document.getElementById('add-build'),
  cartDrawer: document.getElementById('cart-drawer'),
  cartBackdrop: document.getElementById('cart-backdrop'),
  cartItems: document.getElementById('cart-items'),
  cartTotal: document.getElementById('cart-total'),
  cartCount: document.getElementById('cart-count'),
  navSearch: document.getElementById('nav-search'),
  navSearchBtn: document.getElementById('nav-search-btn'),
  overlaySearch: document.getElementById('overlay-search'),
  searchOverlay: document.getElementById('search-overlay'),
  searchResults: document.getElementById('search-results'),
  closeSearch: document.getElementById('close-search'),
  authModal: document.getElementById('auth-modal'),
  profileModal: document.getElementById('profile-modal'),
  modalBackdrop: document.getElementById('modal-backdrop'),
  authForm: document.getElementById('auth-form'),
  authRequirement: document.getElementById('auth-requirement'),
  profileName: document.getElementById('profile-name'),
  profileEmail: document.getElementById('profile-email'),
  profileAvatar: document.getElementById('profile-avatar'),
  profilePageName: document.getElementById('profile-page-name'),
  profilePageEmail: document.getElementById('profile-page-email'),
  profilePageAvatar: document.getElementById('profile-page-avatar'),
  profileInline: document.getElementById('profile-inline'),
  profileForm: document.getElementById('profile-form'),
  adminJson: document.getElementById('admin-json'),
  adminSave: document.getElementById('admin-save'),
  adminReset: document.getElementById('admin-reset'),
  adminStatus: document.getElementById('admin-status'),
  adminQuickForm: document.getElementById('admin-quick-form'),
};

function formatCurrency(amount) {
  return `$${amount.toFixed(0)}`;
}

function getEffectivePrice(product) {
  const base = Number(product.originalPrice ?? product.price ?? 0);
  const discount = Number(product.discountPercent || 0);
  const final = discount > 0 ? Math.max(0, Math.round(base * (1 - discount / 100))) : base;
  return { base, final, discount };
}

function mergeUniqueById(base = [], extra = []) {
  const seen = new Set(base.map((item) => item.id));
  const merged = [...base];
  extra.forEach((item) => {
    if (item?.id && !seen.has(item.id)) {
      merged.push(item);
      seen.add(item.id);
    }
  });
  return merged;
}

function mergeSteps(...lists) {
  const merged = [];
  const seen = new Set();
  lists.flat().forEach((step) => {
    if (step?.key && !seen.has(step.key)) {
      merged.push(step);
      seen.add(step.key);
    }
  });
  return merged;
}

function mergeData(base = defaultData, remote = {}, overrides = {}) {
  return {
    products: mergeUniqueById(base.products, remote.products || []).concat(overrides.products || []),
    newsItems: mergeUniqueById(base.newsItems, remote.newsItems || []).concat(overrides.newsItems || []),
    forumThreads: mergeUniqueById(base.forumThreads, remote.forumThreads || []).concat(overrides.forumThreads || []),
    prebuiltPcs: mergeUniqueById(base.prebuiltPcs, remote.prebuiltPcs || []).concat(overrides.prebuiltPcs || []),
    filterConfig: {
      ...base.filterConfig,
      ...(remote.filterConfig || {}),
      ...(overrides.filterConfig || {}),
    },
    builderSteps: mergeSteps(base.builderSteps || [], remote.builderSteps || [], overrides.builderSteps || []),
    homeContent: {
      ...(base.homeContent || {}),
      ...(remote.homeContent || {}),
      ...(overrides.homeContent || {}),
    },
  };
}

function getAllAccounts() {
  try {
    return JSON.parse(localStorage.getItem('pcwebshop_all_accounts') || '[]');
  } catch (e) {
    return [];
  }
}

function saveAllAccounts(accounts = []) {
  localStorage.setItem('pcwebshop_all_accounts', JSON.stringify(accounts));
}

function ensureDefaultAdmin() {
  const accounts = getAllAccounts();
  const hasAdmin = accounts.some((a) => a.username === 'admin');
  if (!hasAdmin) {
    accounts.push({
      id: 'admin-seed',
      email: 'admin@webshop.local',
      username: 'admin',
      password: 'admin123',
      role: 'admin',
      avatar: '',
      createdAt: new Date().toISOString(),
    });
    saveAllAccounts(accounts);
  }
}

function loadUser() {
  const stored = localStorage.getItem('pcwebshop_user');
  if (stored) {
    try {
      state.user = JSON.parse(stored);
    } catch (e) {
      state.user = null;
    }
  }
}

function persistUser(accountForStorage = null) {
  if (!state.user) return;
  localStorage.setItem('pcwebshop_user', JSON.stringify(state.user));

  const accounts = getAllAccounts();
  const idx = accounts.findIndex(
    (a) => a.id === state.user.id || a.username === state.user.username || a.email === state.user.email
  );
  const existing = idx >= 0 ? accounts[idx] : {};
  const merged = {
    ...existing,
    ...accountForStorage,
    id: state.user.id || existing.id || `user_${Date.now()}`,
    email: state.user.email || existing.email,
    username: state.user.username || existing.username,
    role: accountForStorage?.role || existing.role || state.user.role || 'user',
    avatar: state.user.avatar || existing.avatar || '',
    createdAt: existing.createdAt || new Date().toISOString(),
  };
  if (idx >= 0) {
    accounts[idx] = merged;
  } else {
    accounts.push(merged);
  }
  saveAllAccounts(accounts);
}

function setUserFromAccount(account) {
  state.user = {
    id: account.id,
    email: account.email,
    username: account.username,
    avatar: account.avatar,
    role: account.role || 'user',
  };
  persistUser(account);
}

function loadAdminOverrides() {
  try {
    const stored = localStorage.getItem('pcwebshop_adminOverrides');
    return stored ? JSON.parse(stored) : {};
  } catch (e) {
    return {};
  }
}

function persistAdminOverrides(overrides) {
  localStorage.setItem('pcwebshop_adminOverrides', JSON.stringify(overrides));
  state.adminOverrides = overrides;
}

function getProducts() {
  return state.data?.products || [];
}

function getFilterConfig() {
  return state.data?.filterConfig || {};
}

function getBuilderSteps() {
  return state.data?.builderSteps || [];
}

function initCategorySelect() {
  if (!refs.categorySelect) return;
  refs.categorySelect.innerHTML = '';
  Object.keys(getFilterConfig()).forEach((cat) => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    refs.categorySelect.appendChild(option);
  });
  refs.categorySelect.value = state.category;
  refs.categorySelect.addEventListener('change', () => {
    state.category = refs.categorySelect.value;
    state.filters = {};
    renderFilters();
    renderActiveFilters();
    renderProducts(true);
  });
}

function renderFilters() {
  if (!refs.filterGroups || !refs.categorySelect) return;
  refs.filterGroups.innerHTML = '';
  const groups = getFilterConfig()[state.category] || [];
  groups.forEach((group) => {
    const wrap = document.createElement('div');
    wrap.className = 'filter-group';
    const title = document.createElement('h3');
    title.textContent = group.label;
    wrap.appendChild(title);

    if (group.type === 'multi') {
      const row = document.createElement('div');
      row.className = 'chip-row';
      group.options.forEach((opt) => {
        const chip = document.createElement('button');
        chip.className = `chip ${state.filters[group.key]?.includes(opt) ? 'active' : ''}`;
        chip.textContent = opt;
        chip.addEventListener('click', () => {
          toggleMultiFilter(group.key, opt);
        });
        row.appendChild(chip);
      });
      wrap.appendChild(row);
    } else if (group.type === 'range') {
      const row = document.createElement('div');
      row.className = 'range';
      const currentValue = state.filters[group.key] ?? group.max;
      const range = document.createElement('input');
      range.type = 'range';
      range.min = group.min;
      range.max = group.max;
      range.step = group.step;
      range.value = currentValue;
      const label = document.createElement('span');
      label.textContent = `${group.label}: ${currentValue}`;
      range.addEventListener('input', () => {
        state.filters[group.key] = Number(range.value);
        label.textContent = `${group.label}: ${range.value}`;
        renderActiveFilters();
        renderProducts();
      });
      row.appendChild(range);
      row.appendChild(label);
      wrap.appendChild(row);
    }

    refs.filterGroups.appendChild(wrap);
  });
}

function toggleMultiFilter(key, value) {
  const existing = new Set(state.filters[key] || []);
  existing.has(value) ? existing.delete(value) : existing.add(value);
  state.filters[key] = Array.from(existing);
  if (!state.filters[key].length) delete state.filters[key];
  renderFilters();
  renderActiveFilters();
  renderProducts();
}

function productPassesFilters(product) {
  const filters = state.filters;
  return Object.entries(filters).every(([key, val]) => {
    if (Array.isArray(val)) {
      if (!val.length) return true;
      if (key === 'rgb') {
        const boolVal = val.includes('Yes');
        const noVal = val.includes('No');
        if (boolVal && noVal) return true;
        if (boolVal) return product.rgb === true;
        if (noVal) return product.rgb === false;
      }
      return val.includes(product[key]);
    }
    if (typeof val === 'number') {
      return product[key] >= val;
    }
    return true;
  });
}

function renderSkeletons() {
  if (!refs.skeletonGrid) return;
  refs.skeletonGrid.innerHTML = '';
  refs.skeletonGrid.classList.remove('hidden');
  for (let i = 0; i < 6; i += 1) {
    const skeleton = document.createElement('div');
    skeleton.className = 'skeleton';
    refs.skeletonGrid.appendChild(skeleton);
  }
}

function renderProducts(showSkeleton = false) {
  if (!refs.productGrid || !refs.skeletonGrid) return;
  if (showSkeleton) {
    renderSkeletons();
    refs.productGrid.innerHTML = '';
    setTimeout(() => renderProducts(false), 420);
    return;
  }
  refs.skeletonGrid.classList.add('hidden');
  refs.productGrid.innerHTML = '';
  const list = getProducts().filter((p) => p.category === state.category && productPassesFilters(p));
  list.forEach((product) => {
    const priceInfo = getEffectivePrice(product);
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="card__header">
        <div>
          <div class="card__title">${product.name}</div>
          <div class="card__meta">${product.brand} · ${product.category}</div>
        </div>
        <div class="price">
          ${priceInfo.discount > 0 ? `<span class="old-price">${formatCurrency(priceInfo.base)}</span>` : ''}
          <span>${formatCurrency(priceInfo.final)}</span>
          ${priceInfo.discount > 0 ? `<span class="badge badge--warn">-${priceInfo.discount}%</span>` : ''}
        </div>
      </div>
      <div class="card__specs">
        ${(product.topSpecs || []).map((s) => `<span>${s}</span>`).join('')}
      </div>
      <div class="card__actions">
        <div class="badge badge--success">Hover for specs</div>
        <button class="btn btn-primary" aria-label="Add ${product.name} to cart">Add to cart</button>
      </div>
      <div class="card__hover-specs">
        ${(product.topSpecs || []).slice(0, 3).map((s) => `<strong>${s}</strong>`).join('')}
      </div>
    `;
    card.querySelector('.btn-primary').addEventListener('click', () => addToCart({ ...product, price: priceInfo.final }));
    refs.productGrid.appendChild(card);
  });
}

function renderActiveFilters() {
  if (!refs.activeFilters) return;
  refs.activeFilters.innerHTML = '';
  Object.entries(state.filters).forEach(([key, val]) => {
    if (Array.isArray(val)) {
      val.forEach((v) => refs.activeFilters.appendChild(activeChip(key, v)));
    } else if (typeof val === 'number') {
      refs.activeFilters.appendChild(activeChip(key, `${val}+`));
    }
  });
}

function activeChip(key, value) {
  const chip = document.createElement('span');
  chip.className = 'active-chip';
  chip.innerHTML = `${key}: ${value} <button aria-label="Remove filter">×</button>`;
  chip.querySelector('button').addEventListener('click', () => {
    if (Array.isArray(state.filters[key])) {
      state.filters[key] = state.filters[key].filter((v) => v !== value);
      if (!state.filters[key].length) delete state.filters[key];
    } else {
      delete state.filters[key];
    }
    renderFilters();
    renderActiveFilters();
    renderProducts();
  });
  return chip;
}

function openCart() {
  if (!refs.cartDrawer || !refs.cartBackdrop) return;
  refs.cartDrawer.classList.add('open');
  refs.cartBackdrop.classList.add('visible');
}
function closeCart() {
  if (!refs.cartDrawer || !refs.cartBackdrop) return;
  refs.cartDrawer.classList.remove('open');
  refs.cartBackdrop.classList.remove('visible');
}

document.getElementById('close-cart')?.addEventListener('click', closeCart);
refs.cartBackdrop?.addEventListener('click', closeCart);

function addToCart(product) {
  const existing = state.cart.find((item) => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    const priceInfo = getEffectivePrice(product);
    state.cart.push({ ...product, price: priceInfo.final, qty: 1, originalPrice: priceInfo.base, discountPercent: priceInfo.discount });
  }
  renderCart();
  openCart();
}

function renderCart() {
  if (!refs.cartItems || !refs.cartTotal) return;
  refs.cartItems.innerHTML = '';
  let subtotal = 0;
  state.cart.forEach((item) => {
    subtotal += item.price * item.qty;
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `<div><strong>${item.name}</strong><div class="card__meta">${item.qty} × ${formatCurrency(item.price)}</div></div><span>${formatCurrency(item.price * item.qty)}</span>`;
    refs.cartItems.appendChild(row);
  });
  refs.cartTotal.textContent = formatCurrency(subtotal);
  if (refs.cartCount) {
    const count = state.cart.reduce((acc, i) => acc + i.qty, 0);
    refs.cartCount.textContent = count;
  }
}

function openSearch() {
  if (!refs.searchOverlay) return;
  refs.searchOverlay.classList.add('open');
  refs.modalBackdrop?.classList.add('visible');
  refs.overlaySearch?.focus();
}

function closeSearch() {
  if (!refs.searchOverlay) return;
  refs.searchOverlay.classList.remove('open');
  refs.modalBackdrop?.classList.remove('visible');
}

function renderSearchResults(results = []) {
  if (!refs.searchResults) return;
  refs.searchResults.innerHTML = '';
  if (!results.length) {
    refs.searchResults.innerHTML = '<p class="mono">Geen resultaten</p>';
    return;
  }
  results.slice(0, 6).forEach((item) => {
    const row = document.createElement('a');
    row.className = 'search-result';
    row.href = item.href;
    row.innerHTML = `<span class="badge">${item.type}</span><div><strong>${item.name}</strong><div class="mono">${item.tags.join(', ')}</div></div>`;
    refs.searchResults.appendChild(row);
  });
}

function performSearch(term) {
  if (!term) {
    renderSearchResults([]);
    return;
  }
  const q = term.toLowerCase();
  const index = [
    ...getProducts().map((p) => ({ id: p.id, name: p.name, type: p.category, href: 'catalog.html', tags: p.topSpecs || [] })),
    ...(state.data.newsItems || []),
    ...(state.data.forumThreads || []),
  ];
  const results = index.filter((item) => item.name.toLowerCase().includes(q) || item.tags.some((t) => `${t}`.toLowerCase().includes(q)));
  renderSearchResults(results);
}

function openModal(modal) {
  if (!modal) return;
  modal.classList.add('open');
  refs.modalBackdrop?.classList.add('visible');
}

function closeModals() {
  refs.modalBackdrop?.classList.remove('visible');
  refs.authModal?.classList.remove('open');
  refs.profileModal?.classList.remove('open');
  closeSearch();
}

function refreshAuthRefs() {
  refs.authModal = document.getElementById('auth-modal');
  refs.profileModal = document.getElementById('profile-modal');
  refs.modalBackdrop = document.getElementById('modal-backdrop');
  refs.authRequirement = document.getElementById('auth-requirement');
}

function buildAuthModal() {
  if (!refs.authModal) return;
  refs.authModal.innerHTML = `
    <div class="modal__content modal__content--wide auth-layout">
      <div class="auth-visual">
        <p class="eyebrow">Account center</p>
        <h3>Gelaagde login-ervaring</h3>
        <p class="lede">Tabs voor login, reset en registratie. Gradient achtergrond, trust badges en direct admin demo-gegevens.</p>
        <div class="pill-row">
          <span class="chip">2FA ready</span>
          <span class="chip">Avatar sync</span>
          <span class="chip">CMS toegang</span>
        </div>
        <div class="auth-demo">
          <div>Admin demo</div>
          <code>admin / admin123</code>
        </div>
      </div>
      <div>
        <div class="modal__header">
          <h3>Account toegang</h3>
          <button class="icon-btn" data-close-auth aria-label="Sluiten">×</button>
        </div>
        <div class="auth-tabs">
          <button class="auth-tab active" data-tab="login">Inloggen</button>
          <button class="auth-tab" data-tab="forgot">Wachtwoord vergeten</button>
          <button class="auth-tab" data-tab="create">Account maken</button>
        </div>
        <div class="auth-tab-content active" id="auth-tab-login">
          <form id="auth-login-form" class="stack">
            <div id="auth-login-error" class="form-error" style="display:none;"></div>
            <label> Email of gebruikersnaam<input type="text" name="identifier" required placeholder="email of username" /></label>
            <label> Wachtwoord<input type="password" name="password" required placeholder="••••••••" /></label>
            <button class="btn btn-primary" type="submit">Inloggen</button>
            <p class="mono">Demo admin: admin / admin123</p>
          </form>
          <p class="mono" id="auth-requirement"></p>
        </div>
        <div class="auth-tab-content" id="auth-tab-forgot">
          <form id="auth-forgot-form" class="stack">
            <div id="auth-forgot-error" class="form-error" style="display:none;"></div>
            <div id="auth-forgot-success" class="form-success" style="display:none;"></div>
            <label> Email<input type="email" name="identifier" required placeholder="you@example.com" /></label>
            <button class="btn btn-primary" type="submit">Stuur reset-link</button>
            <p class="mono">We mailen een reset-link. Deze demo past geen wachtwoord aan.</p>
          </form>
        </div>
        <div class="auth-tab-content" id="auth-tab-create">
          <div class="stack">
            <p class="lede">Je gaat naar de registratiepagina om een account aan te maken.</p>
            <a class="btn btn-primary" href="profile.html#register">Naar registratie</a>
            <p class="mono">Heb je al een account? Gebruik het tabblad Inloggen.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getFeaturedPc() {
  const pcs = state.data?.prebuiltPcs || [];
  const featuredId = state.data?.homeContent?.featuredPcId;
  return pcs.find((pc) => pc.id === featuredId) || pcs[0];
}

function applyHomeContent() {
  const content = state.data?.homeContent || {};
  const featuredPc = getFeaturedPc();
  const heroTitle = document.getElementById('home-hero-title');
  const heroSubtitle = document.getElementById('home-hero-subtitle');
  const heroCtaPrimary = document.getElementById('home-hero-cta-primary');
  const heroCtaSecondary = document.getElementById('home-hero-cta-secondary');
  const heroVisual = document.getElementById('home-hero-visual');
  const showcaseTitle = document.getElementById('home-showcase-title');
  const showcaseSubtitle = document.getElementById('home-showcase-subtitle');
  const reviewsTitle = document.getElementById('home-reviews-title');
  const reviewsSubtitle = document.getElementById('home-reviews-subtitle');
  const heroCardTitle = document.getElementById('home-hero-card-title');
  const heroCardSubtitle = document.getElementById('home-hero-card-subtitle');
  const heroCardPrice = document.getElementById('home-hero-card-price');
  const heroCardCta = document.getElementById('home-hero-card-cta');
  const heroCardImage = document.getElementById('home-hero-card-image');
  const heroCardBadge = document.getElementById('home-hero-card-badge');
  const heroCardTags = document.getElementById('home-hero-card-tags');

  if (heroTitle && content.heroTitle) heroTitle.textContent = content.heroTitle;
  if (heroSubtitle && content.heroSubtitle) heroSubtitle.textContent = content.heroSubtitle;
  if (heroCtaPrimary) {
    if (content.heroCtaPrimaryLabel) heroCtaPrimary.textContent = content.heroCtaPrimaryLabel;
    if (content.heroCtaPrimaryHref) heroCtaPrimary.href = content.heroCtaPrimaryHref;
  }
  if (heroCtaSecondary) {
    if (content.heroCtaSecondaryLabel) heroCtaSecondary.textContent = content.heroCtaSecondaryLabel;
    if (content.heroCtaSecondaryHref) heroCtaSecondary.href = content.heroCtaSecondaryHref;
  }
  if (heroVisual && content.heroImage) {
    heroVisual.style.backgroundImage = `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 50%), url(${content.heroImage})`;
  }
  if (showcaseTitle && content.showcaseTitle) showcaseTitle.textContent = content.showcaseTitle;
  if (showcaseSubtitle && content.showcaseSubtitle) showcaseSubtitle.textContent = content.showcaseSubtitle;
  if (reviewsTitle && content.reviewsTitle) reviewsTitle.textContent = content.reviewsTitle;
  if (reviewsSubtitle && content.reviewsSubtitle) reviewsSubtitle.textContent = content.reviewsSubtitle;

  const cardTitle = content.heroCardTitle || featuredPc?.name;
  const cardSubtitle = content.heroCardSubtitle || featuredPc?.useCase;
  const cardPrice = content.heroCardPrice || featuredPc?.price;
  const cardCta = content.heroCardCta || 'Bekijk build';
  const cardImage = content.heroCardImage || featuredPc?.image || content.heroImage;
  const cardBadge = content.heroCardBadge || featuredPc?.badges?.[0] || 'Nieuw';

  if (heroCardTitle && cardTitle) heroCardTitle.textContent = cardTitle;
  if (heroCardSubtitle && cardSubtitle) heroCardSubtitle.textContent = cardSubtitle;
  if (heroCardPrice && cardPrice) heroCardPrice.textContent = cardPrice;
  if (heroCardCta) {
    heroCardCta.textContent = cardCta;
    heroCardCta.href = featuredPc ? `pcs.html#${featuredPc.id}` : 'pcs.html';
  }
  if (heroCardImage && cardImage) {
    heroCardImage.style.backgroundImage = `url(${cardImage})`;
  }
  if (heroCardBadge) heroCardBadge.textContent = cardBadge;
  if (heroCardTags) {
    heroCardTags.innerHTML = '';
    (featuredPc?.specs || []).slice(0, 3).forEach((spec) => {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = spec;
      heroCardTags.appendChild(chip);
    });
  }
}

function buildPrebuiltCard(pc, isFeatured = false) {
  const card = document.createElement('article');
  card.className = 'prebuilt-card';
  if (isFeatured) card.classList.add('prebuilt-card--featured');
  card.id = pc.id;
  card.innerHTML = `
    <div class="prebuilt-card__image" style="background-image:url(${pc.image || ''})"></div>
    <div class="prebuilt-card__body">
      <div class="prebuilt-card__title-row">
        <h3>${pc.name}</h3>
        ${isFeatured ? '<span class="badge badge--success">Homepage</span>' : ''}
      </div>
      <p class="mono">${pc.useCase || ''}</p>
      <div class="pill-row">${(pc.badges || []).map((b) => `<span class="chip">${b}</span>`).join('')}</div>
      <ul class="spec-line">${(pc.specs || []).slice(0, 4).map((s) => `<li>${s}</li>`).join('')}</ul>
      <div class="price-row">
        <span class="price">${pc.price || ''}</span>
        <a class="btn btn-ghost" href="pcs.html#${pc.id}">Bekijk</a>
      </div>
    </div>
  `;
  return card;
}

function renderHomePrebuilts() {
  const container = document.getElementById('home-prebuilt-cards');
  if (!container) return;
  container.innerHTML = '';
  const pcs = (state.data?.prebuiltPcs || []).slice(0, 3);
  const featured = getFeaturedPc();
  pcs.forEach((pc) => container.appendChild(buildPrebuiltCard(pc, pc.id === featured?.id)));
}

function renderPrebuiltPage() {
  const grid = document.getElementById('prebuilt-grid');
  const spotlightImage = document.getElementById('prebuilt-feature-image');
  const spotlightTitle = document.getElementById('prebuilt-feature-title');
  const spotlightSubtitle = document.getElementById('prebuilt-feature-subtitle');
  const spotlightBadges = document.getElementById('prebuilt-feature-badges');
  const spotlightPrice = document.getElementById('prebuilt-feature-price');
  if (!grid) return;

  grid.innerHTML = '';
  const pcs = state.data?.prebuiltPcs || [];
  const featured = getFeaturedPc();
  pcs.forEach((pc) => grid.appendChild(buildPrebuiltCard(pc, pc.id === featured?.id)));

  if (featured) {
    if (spotlightImage) spotlightImage.style.backgroundImage = `url(${featured.image || ''})`;
    if (spotlightTitle) spotlightTitle.textContent = featured.name;
    if (spotlightSubtitle) spotlightSubtitle.textContent = featured.useCase || '';
    if (spotlightPrice) spotlightPrice.textContent = featured.price || '';
    if (spotlightBadges) {
      spotlightBadges.innerHTML = '';
      (featured.badges || []).forEach((b) => {
        const chip = document.createElement('span');
        chip.className = 'chip';
        chip.textContent = b;
        spotlightBadges.appendChild(chip);
      });
    }
  }
}

function requireAuth(reason = 'deze actie') {
  if (state.user) return true;
  if (refs.authRequirement) {
    refs.authRequirement.textContent = `Login vereist voor ${reason}. Alleen email, gebruikersnaam en wachtwoord.`;
  }
  document.querySelectorAll('.auth-tab').forEach((btn) => {
    const isLogin = btn.dataset.tab === 'login';
    btn.classList.toggle('active', isLogin);
  });
  document.querySelectorAll('.auth-tab-content').forEach((section) => {
    const isLogin = section.id === 'auth-tab-login';
    section.classList.toggle('active', isLogin);
  });
  openModal(refs.authModal);
  return false;
}

function updateUserUI() {
  const avatar = state.user?.avatar || '👤';
  if (refs.profileName) refs.profileName.textContent = state.user?.username || 'Gast';
  if (refs.profileEmail) refs.profileEmail.textContent = state.user?.email || 'Geen login';
  if (refs.profileAvatar) refs.profileAvatar.textContent = avatar;
  if (refs.profileInline && state.user?.avatar?.startsWith('http')) {
    refs.profileInline.style.backgroundImage = `url(${state.user.avatar})`;
  }
  if (refs.profilePageName) refs.profilePageName.textContent = state.user?.username || 'Gast';
  if (refs.profilePageEmail) refs.profilePageEmail.textContent = state.user?.email || 'Nog niet ingelogd';
  if (refs.profilePageAvatar) refs.profilePageAvatar.textContent = avatar;
  if (refs.profileForm && state.user) {
    refs.profileForm.username.value = state.user.username;
    if (state.user.avatar) refs.profileForm.avatar.value = state.user.avatar;
  }
  
  // Show/hide logout button
  const logoutBtn = document.getElementById('profile-logout');
  if (logoutBtn) {
    logoutBtn.style.display = state.user ? 'block' : 'none';
  }
}

function builderCompatibility(product, stepKey) {
  const selections = state.builderSelections;
  if (stepKey === 'Motherboard' && selections.CPU) {
    return product.socket === selections.CPU.socket
      ? { ok: true, message: 'Socket match' }
      : { ok: false, message: 'Socket mismatch' };
  }
  if (stepKey === 'RAM' && selections.Motherboard) {
    return product.ramType === selections.Motherboard.ramType
      ? { ok: true, message: 'RAM type match' }
      : { ok: false, message: 'RAM type mismatch' };
  }
  if (stepKey === 'PSU' && selections.CPU && selections.GPU) {
    const required = Math.round((selections.CPU.tdp + selections.GPU.tdp) * 1.5);
    return product.wattage >= required
      ? { ok: true, message: `Meets ${required}W` }
      : { ok: false, message: `Needs ${required}W` };
  }
  if (stepKey === 'Case' && selections.GPU) {
    return product.maxGpuLength >= selections.GPU.length
      ? { ok: true, message: 'GPU fits' }
      : { ok: false, message: 'GPU too long' };
  }
  return { ok: true, message: 'Compatible' };
}

function builderOptionsFor(stepKey) {
  return getProducts().filter((p) => p.category === stepKey);
}

function renderBuilder() {
  if (!refs.builderStepsContainer) return;
  refs.builderStepsContainer.innerHTML = '';
  getBuilderSteps().forEach((step) => {
    const stepEl = document.createElement('div');
    stepEl.className = 'builder-step';
    const header = document.createElement('div');
    header.className = 'builder-step__header';
    header.innerHTML = `<div><p class="eyebrow">${step.label}</p><h3>${step.label}</h3></div>`;

    const current = state.builderSelections[step.key];
    if (current) {
      const badge = document.createElement('span');
      badge.className = 'badge badge--success';
      badge.textContent = `${current.name}`;
      header.appendChild(badge);
    }

    const optionsWrap = document.createElement('div');
    optionsWrap.className = 'builder-options';
    builderOptionsFor(step.key).forEach((option) => {
      const comp = builderCompatibility(option, step.key);
      const opt = document.createElement('button');
      opt.className = `builder-option ${comp.ok ? '' : 'is-blocked'}`;
      opt.innerHTML = `
        <div class="card__header">
          <div>
            <div class="card__title">${option.name}</div>
            <div class="card__meta">${option.brand || ''}</div>
          </div>
          <div class="price">${formatCurrency(option.price)}</div>
        </div>
        <div class="card__specs">${(option.topSpecs || []).map((s) => `<span>${s}</span>`).join('')}</div>
        <div class="badge ${comp.ok ? 'badge--success' : 'badge--danger'}">${comp.message}</div>
      `;
      opt.addEventListener('click', () => {
        if (!comp.ok) return;
        state.builderSelections[step.key] = option;
        renderBuilder();
        renderBuilderProgress();
      });
      optionsWrap.appendChild(opt);
    });

    stepEl.appendChild(header);
    stepEl.appendChild(optionsWrap);
    refs.builderStepsContainer.appendChild(stepEl);
  });
  renderBuilderProgress();
  renderTotals();
}

function renderBuilderProgress() {
  if (!refs.progressBar || !refs.progressCount) return;
  const steps = getBuilderSteps();
  const requiredSteps = steps.filter((s) => s.required);
  const completed = requiredSteps.filter((s) => state.builderSelections[s.key]).length;
  const percent = Math.round((completed / requiredSteps.length) * 100);
  refs.progressBar.style.width = `${percent}%`;
  refs.progressCount.textContent = `${percent}%`;
  if (refs.progressText) refs.progressText.textContent = `${completed}/${requiredSteps.length} verplicht`;
}

function renderTotals() {
  if (!refs.totals) return;
  refs.totals.innerHTML = '';
  const selections = state.builderSelections;
  let sum = 0;
  Object.keys(selections).forEach((key) => {
    const item = selections[key];
    if (!item) return;
    sum += item.price;
    const row = document.createElement('div');
    row.className = 'builder-total';
    row.innerHTML = `<span>${item.name}</span><span>${formatCurrency(item.price)}</span>`;
    refs.totals.appendChild(row);
  });
  const totalRow = document.createElement('div');
  totalRow.innerHTML = `<strong>Total: ${formatCurrency(sum)}</strong>`;
  refs.totals.appendChild(totalRow);
}

function initBuilder() {
  if (!refs.builderSection) return;
  renderBuilder();
  refs.addBuildBtn?.addEventListener('click', () => {
    const requiredMissing = getBuilderSteps().filter((s) => s.required && !state.builderSelections[s.key]);
    if (requiredMissing.length) {
      alert(`Missing required parts: ${requiredMissing.map((s) => s.label).join(', ')}`);
      return;
    }
    Object.values(state.builderSelections).forEach((item) => addToCart(item));
    openCart();
  });
}

function initScrollLinks() {
  document.getElementById('cta-shop')?.addEventListener('click', () => {
    document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('cta-builder')?.addEventListener('click', () => {
    document.getElementById('builder-section')?.scrollIntoView({ behavior: 'smooth' });
  });
}

function initCatalog() {
  if (!refs.shopSection) return;
  initCategorySelect();
  renderFilters();
  renderActiveFilters();
  renderProducts(true);
}

function initAnimations() {
  const animated = document.querySelectorAll('[data-animate]');
  if (!animated.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  animated.forEach((node) => observer.observe(node));
}

function initAuth() {
  ensureDefaultAdmin();
  buildAuthModal();
  refreshAuthRefs();

  const adminLink = document.getElementById('admin-link');

  const switchAuthTab = (tab) => {
    document.querySelectorAll('.auth-tab').forEach((btn) => btn.classList.remove('active'));
    document.querySelectorAll('.auth-tab-content').forEach((section) => section.classList.remove('active'));
    document.querySelector(`.auth-tab[data-tab="${tab}"]`)?.classList.add('active');
    document.getElementById(`auth-tab-${tab}`)?.classList.add('active');
  };

  loadUser();
  updateUserUI();
  if (state.user?.role === 'admin' && adminLink) adminLink.style.display = 'inline';

  document.querySelectorAll('.auth-tab').forEach((btn) => {
    btn.addEventListener('click', () => switchAuthTab(btn.dataset.tab));
  });

  const loginForm = document.getElementById('auth-login-form');
  loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(loginForm);
    const identifier = `${data.get('identifier')}`.trim();
    const password = `${data.get('password')}`;
    const error = document.getElementById('auth-login-error');
    if (!identifier || !password) return;
    const account = getAllAccounts().find(
      (a) => a.email === identifier || a.username === identifier
    );
    if (!account) {
      if (error) {
        error.textContent = 'Account niet gevonden';
        error.style.display = 'block';
      }
      return;
    }
    if (!account.password) {
      account.password = password;
      saveAllAccounts(getAllAccounts().map((a) => (a.username === account.username ? account : a)));
    } else if (account.password !== password) {
      if (error) {
        error.textContent = 'Wachtwoord onjuist';
        error.style.display = 'block';
      }
      return;
    }
    if (error) error.style.display = 'none';
    setUserFromAccount(account);
    updateUserUI();
    if (adminLink) adminLink.style.display = state.user?.role === 'admin' ? 'inline' : 'none';
    closeModals();
  });

  const forgotForm = document.getElementById('auth-forgot-form');
  forgotForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(forgotForm);
    const identifier = `${data.get('identifier')}`.trim();
    const error = document.getElementById('auth-forgot-error');
    const success = document.getElementById('auth-forgot-success');
    if (error) error.style.display = 'none';
    if (success) success.style.display = 'none';
    const accounts = getAllAccounts();
    const exists = accounts.some((a) => a.email === identifier);
    if (!exists) {
      if (error) {
        error.textContent = 'Email niet gevonden';
        error.style.display = 'block';
      }
      return;
    }
    if (success) {
      success.textContent = 'Reset-link aangevraagd. Controleer je email (demo verstuurt niet echt).';
      success.style.display = 'block';
    }
    switchAuthTab('login');
  });

  document.querySelectorAll('[data-requires-auth]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (!requireAuth(btn.dataset.requiresAuth)) {
        e.preventDefault();
      }
    });
  });

  document.querySelectorAll('[data-open-profile]').forEach((btn) =>
    btn.addEventListener('click', () => {
      if (state.user) {
        openModal(refs.profileModal);
      } else {
        switchAuthTab('login');
        openModal(refs.authModal);
      }
    })
  );
  document.querySelectorAll('[data-close-profile]').forEach((btn) => btn.addEventListener('click', closeModals));
  document.querySelectorAll('[data-close-auth]').forEach((btn) => btn.addEventListener('click', closeModals));
  refs.modalBackdrop?.addEventListener('click', closeModals);

  refs.profileForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!state.user && !requireAuth('profiel bijwerken')) return;
    const data = new FormData(refs.profileForm);
    state.user = {
      ...(state.user || {}),
      username: data.get('username'),
      avatar: data.get('avatar'),
    };
    persistUser();
    updateUserUI();
    closeModals();
  });

  document.querySelectorAll('[data-open-cart]').forEach((btn) => btn.addEventListener('click', openCart));
  const checkoutBtn = document.querySelector('.cart-drawer__footer .btn.btn-primary');
  checkoutBtn?.addEventListener('click', (e) => {
    if (!requireAuth('checkout')) {
      e.preventDefault();
    }
  });

  const logoutBtn = document.getElementById('profile-logout');
  logoutBtn?.addEventListener('click', () => {
    if (confirm('Weet je zeker dat je uit wilt loggen?')) {
      state.user = null;
      localStorage.removeItem('pcwebshop_user');
      updateUserUI();
      if (adminLink) adminLink.style.display = 'none';
      closeModals();
    }
  });
}

function initSearch() {
  refs.navSearchBtn?.addEventListener('click', () => {
    openSearch();
    if (refs.overlaySearch && refs.navSearch) {
      refs.overlaySearch.value = refs.navSearch.value;
      performSearch(refs.overlaySearch.value);
    }
  });
  refs.navSearch?.addEventListener('focus', openSearch);
  refs.overlaySearch?.addEventListener('input', (e) => performSearch(e.target.value));
  refs.closeSearch?.addEventListener('click', closeSearch);
}

function showAdminStatus(message, tone = 'neutral') {
  if (!refs.adminStatus) return;
  refs.adminStatus.textContent = message;
  refs.adminStatus.dataset.tone = tone;
}

function refreshDataFromOverrides() {
  state.data = mergeData(state.baseData || defaultData, {}, state.adminOverrides);
  initCategorySelect();
  renderFilters();
  renderActiveFilters();
  renderProducts(true);
  renderBuilder();
  applyHomeContent();
  renderHomePrebuilts();
  renderPrebuiltPage();
  showAdminStatus('Data bijgewerkt met admin content', 'success');
}

function initAdminConsole() {
  if (!refs.adminSave && !refs.adminQuickForm) return;
  state.adminOverrides = loadAdminOverrides();
  if (refs.adminJson) refs.adminJson.value = JSON.stringify(state.adminOverrides, null, 2) || '';

  refs.adminSave?.addEventListener('click', () => {
    if (!refs.adminJson) return;
    try {
      const parsed = JSON.parse(refs.adminJson.value || '{}');
      persistAdminOverrides(parsed);
      refreshDataFromOverrides();
    } catch (e) {
      showAdminStatus('JSON kon niet geladen worden', 'danger');
    }
  });

  refs.adminReset?.addEventListener('click', () => {
    persistAdminOverrides({});
    if (refs.adminJson) refs.adminJson.value = '';
    refreshDataFromOverrides();
    showAdminStatus('Admin overrides verwijderd', 'neutral');
  });

  refs.adminQuickForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(refs.adminQuickForm);
    const type = data.get('type');
    const entry = {
      id: data.get('id'),
      name: data.get('name'),
      type: type === 'product' ? undefined : type,
      category: type === 'product' ? data.get('category') : undefined,
      brand: data.get('brand') || undefined,
      price: type === 'product' ? Number(data.get('price') || 0) : undefined,
      href: type === 'news' ? 'news.html' : type === 'forum' ? 'forms.html' : undefined,
      tags: (data.get('tags') || '').split(',').map((t) => t.trim()).filter(Boolean),
      topSpecs: (data.get('specs') || '').split(',').map((t) => t.trim()).filter(Boolean),
    };
    const overrides = loadAdminOverrides();
    if (type === 'product') {
      overrides.products = mergeUniqueById(overrides.products || [], [entry]);
    } else if (type === 'news') {
      overrides.newsItems = mergeUniqueById(overrides.newsItems || [], [{ ...entry, type: 'news' }]);
    } else if (type === 'forum') {
      overrides.forumThreads = mergeUniqueById(overrides.forumThreads || [], [{ ...entry, type: 'forum' }]);
    }
    persistAdminOverrides(overrides);
    if (refs.adminJson) refs.adminJson.value = JSON.stringify(overrides, null, 2);
    refreshDataFromOverrides();
    refs.adminQuickForm.reset();
  });
}

async function initData() {
  state.adminOverrides = loadAdminOverrides();
  let remoteData = {};
  try {
    const res = await fetch('assets/data.json');
    if (res.ok) {
      remoteData = await res.json();
    }
  } catch (e) {
    console.warn('Kon assets/data.json niet laden, fallback naar default data');
  }
  const localProducts = { products: getLocalProducts() };
  state.baseData = mergeData(defaultData, remoteData, localProducts);
  state.data = mergeData(state.baseData, {}, state.adminOverrides);
  applyHomeContent();
  renderHomePrebuilts();
  renderPrebuiltPage();
  const urlCategory = new URLSearchParams(window.location.search).get('category');
  const filterKeys = Object.keys(getFilterConfig());
  state.category = urlCategory || document.body?.dataset?.defaultCategory || filterKeys[0] || 'GPU';
}

async function bootstrap() {
  await initData();
  initCatalog();
  initBuilder();
  initScrollLinks();
  initAnimations();
  initAuth();
  initSearch();
  initAdminConsole();
}

bootstrap();
