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
    filterConfig: {
      ...base.filterConfig,
      ...(remote.filterConfig || {}),
      ...(overrides.filterConfig || {}),
    },
    builderSteps: mergeSteps(base.builderSteps || [], remote.builderSteps || [], overrides.builderSteps || []),
  };
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

function persistUser() {
  if (state.user) {
    localStorage.setItem('pcwebshop_user', JSON.stringify(state.user));
  }
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
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="card__header">
        <div>
          <div class="card__title">${product.name}</div>
          <div class="card__meta">${product.brand} · ${product.category}</div>
        </div>
        <div class="price">${formatCurrency(product.price)}</div>
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
    card.querySelector('.btn-primary').addEventListener('click', () => addToCart(product));
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
    state.cart.push({ ...product, qty: 1 });
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

function requireAuth(reason = 'deze actie') {
  if (state.user) return true;
  if (refs.authRequirement) {
    refs.authRequirement.textContent = `Login vereist voor ${reason}. Alleen email, gebruikersnaam en wachtwoord.`;
  }
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
  loadUser();
  updateUserUI();
  document.querySelectorAll('[data-requires-auth]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (!requireAuth(btn.dataset.requiresAuth)) {
        e.preventDefault();
      }
    });
  });
  document.querySelectorAll('[data-open-profile]').forEach((btn) => btn.addEventListener('click', () => openModal(refs.profileModal)));
  document.querySelectorAll('[data-close-profile]').forEach((btn) => btn.addEventListener('click', closeModals));
  document.querySelectorAll('[data-close-auth]').forEach((btn) => btn.addEventListener('click', closeModals));
  refs.modalBackdrop?.addEventListener('click', closeModals);

  refs.authForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(refs.authForm);
    state.user = {
      email: data.get('email'),
      username: data.get('username'),
      avatar: data.get('avatar') || '',
    };
    persistUser();
    updateUserUI();
    closeModals();
  });

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
  state.baseData = mergeData(defaultData, remoteData, {});
  state.data = mergeData(state.baseData, {}, state.adminOverrides);
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
