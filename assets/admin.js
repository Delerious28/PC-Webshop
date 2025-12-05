// Admin Dashboard JavaScript

const adminState = {
  user: null,
  accounts: [],
  products: [],
  settings: {
    requireApproval: false,
    publicProfiles: true,
  },
};

const adminRefs = {
  error: document.getElementById('admin-error'),
  adminLogout: document.getElementById('admin-logout'),
  adminName: document.getElementById('admin-name-display'),
  adminAvatar: document.getElementById('admin-avatar'),
  
  // Tabs
  tabButtons: document.querySelectorAll('.admin-tab-btn'),
  tabContents: document.querySelectorAll('.admin-tab-content'),
  
  // Accounts
  searchAccounts: document.getElementById('search-accounts'),
  selectAllAccounts: document.getElementById('select-all-accounts'),
  accountsList: document.getElementById('accounts-list'),
  btnPromoteAdmin: document.getElementById('btn-promote-admin'),
  btnDeleteUser: document.getElementById('btn-delete-user'),
  
  // Products
  productForm: document.getElementById('admin-product-form'),
  searchProducts: document.getElementById('search-products'),
  selectAllProducts: document.getElementById('select-all-products'),
  productsList: document.getElementById('products-list'),
  btnDeleteProduct: document.getElementById('btn-delete-product'),
  
  // Settings
  settingRequireApproval: document.getElementById('setting-require-approval'),
  settingPublicProfiles: document.getElementById('setting-public-profiles'),
  btnSaveSettings: document.getElementById('btn-save-settings'),
  btnExportData: document.getElementById('btn-export-data'),
  btnImportData: document.getElementById('btn-import-data'),
  importFile: document.getElementById('import-file'),
  
  // Stats
  statTotalUsers: document.getElementById('stat-total-users'),
  statAdminUsers: document.getElementById('stat-admin-users'),
  statTotalProducts: document.getElementById('stat-total-products'),
  statTotalOrders: document.getElementById('stat-total-orders'),

  // Home content
  homeForm: document.getElementById('home-form'),
  homeHeroTitle: document.getElementById('home-hero-title'),
  homeHeroSubtitle: document.getElementById('home-hero-subtitle'),
  homeHeroCtaLabel: document.getElementById('home-hero-cta-label'),
  homeHeroCtaHref: document.getElementById('home-hero-cta-href'),
  homeHeroCta2Label: document.getElementById('home-hero-cta2-label'),
  homeHeroCta2Href: document.getElementById('home-hero-cta2-href'),
  homeShowcaseTitle: document.getElementById('home-showcase-title-input'),
  homeShowcaseSubtitle: document.getElementById('home-showcase-subtitle-input'),
  homeReviewsTitle: document.getElementById('home-reviews-title'),
  homeReviewsSubtitle: document.getElementById('home-reviews-subtitle'),
  homeHeroCardTitle: document.getElementById('home-hero-card-title-input'),
  homeHeroCardSubtitle: document.getElementById('home-hero-card-subtitle-input'),
  homeHeroCardPrice: document.getElementById('home-hero-card-price-input'),
  homeHeroCardCta: document.getElementById('home-hero-card-cta-input'),
  homeSave: document.getElementById('home-save'),
};

const defaultHomeContent = {
  heroTitle: 'Assemble your droomrig',
  heroSubtitle: 'Cyberpunk accenten, monospaced specs, en directe filters. Start met de builder of duik een categorie in.',
  heroCtaPrimaryLabel: 'Start PC builder',
  heroCtaPrimaryHref: 'builder.html',
  heroCtaSecondaryLabel: 'Shop hardware',
  heroCtaSecondaryHref: 'catalog.html',
  showcaseTitle: 'Deep-dive kaarten & deals',
  showcaseSubtitle: 'Benchmarks, hover specs, skeleton loaders en filterchips die blijven staan terwijl je doorscrolt.',
  reviewsTitle: 'Tweakers-achtige stroom van reviews & headlines',
  reviewsSubtitle: 'Kies je volgende upgrade met kritische reviews, benchmarks, deals en een neon ticker die continu doorloopt.',
  heroCardTitle: '4K Gaming ready',
  heroCardSubtitle: 'RTX 4090 + 7800X3D build',
  heroCardPrice: '€ 3.299',
  heroCardCta: 'Bekijk build',
};

function showError(message) {
  if (!adminRefs.error) return;
  adminRefs.error.textContent = message;
  adminRefs.error.style.display = 'block';
  setTimeout(() => {
    adminRefs.error.style.display = 'none';
  }, 5000);
}

function showSuccess(message) {
  if (!adminRefs.error) return;
  adminRefs.error.textContent = message;
  adminRefs.error.style.display = 'block';
  adminRefs.error.classList.add('success');
  setTimeout(() => {
    adminRefs.error.style.display = 'none';
    adminRefs.error.classList.remove('success');
  }, 3000);
}

function loadAccounts() {
  try {
    const stored = localStorage.getItem('pcwebshop_accounts');
    adminState.accounts = stored ? JSON.parse(stored) : [];
  } catch (e) {
    adminState.accounts = [];
  }
}

function saveAccounts() {
  localStorage.setItem('pcwebshop_accounts', JSON.stringify(adminState.accounts));
}

function loadProducts() {
  try {
    const stored = localStorage.getItem('pcwebshop_products');
    adminState.products = stored ? JSON.parse(stored) : [];
  } catch (e) {
    adminState.products = [];
  }
}

function saveProducts() {
  localStorage.setItem('pcwebshop_products', JSON.stringify(adminState.products));
  try {
    const overrides = JSON.parse(localStorage.getItem('pcwebshop_adminOverrides') || '{}');
    overrides.products = adminState.products;
    localStorage.setItem('pcwebshop_adminOverrides', JSON.stringify(overrides));
  } catch (e) {
    // ignore
  }
}

function loadSettings() {
  try {
    const stored = localStorage.getItem('pcwebshop_admin_settings');
    if (stored) {
      adminState.settings = JSON.parse(stored);
      adminRefs.settingRequireApproval.checked = adminState.settings.requireApproval;
      adminRefs.settingPublicProfiles.checked = adminState.settings.publicProfiles;
    }
  } catch (e) {
    console.warn('Instellingen laden mislukt');
  }
}

function saveSettings() {
  adminState.settings.requireApproval = adminRefs.settingRequireApproval.checked;
  adminState.settings.publicProfiles = adminRefs.settingPublicProfiles.checked;
  localStorage.setItem('pcwebshop_admin_settings', JSON.stringify(adminState.settings));
  showSuccess('Instellingen opgeslagen');
}

function loadHomeContent() {
  try {
    const overrides = JSON.parse(localStorage.getItem('pcwebshop_adminOverrides') || '{}');
    return { ...defaultHomeContent, ...(overrides.homeContent || {}) };
  } catch (e) {
    return defaultHomeContent;
  }
}

function saveHomeContent(content) {
  let overrides = {};
  try {
    overrides = JSON.parse(localStorage.getItem('pcwebshop_adminOverrides') || '{}');
  } catch (e) {
    overrides = {};
  }
  overrides.homeContent = content;
  localStorage.setItem('pcwebshop_adminOverrides', JSON.stringify(overrides));
  showSuccess('Homepage content opgeslagen');
}

function checkAdminAuth() {
  const user = localStorage.getItem('pcwebshop_user');
  if (!user) {
    window.location.href = 'index.html';
    return;
  }
  try {
    adminState.user = JSON.parse(user);
    if (adminState.user.role !== 'admin') {
      window.location.href = 'index.html';
      return;
    }
    adminRefs.adminName.textContent = adminState.user.username;
    adminRefs.adminAvatar.textContent = adminState.user.avatar || '👤';
  } catch (e) {
    window.location.href = 'index.html';
  }
}

function renderAccounts(filter = '') {
  if (!adminRefs.accountsList) return;
  adminRefs.accountsList.innerHTML = '';
  
  const all = localStorage.getItem('pcwebshop_all_accounts');
  const accounts = all ? JSON.parse(all) : [];
  
  const filtered = filter
    ? accounts.filter(acc => 
        acc.email.toLowerCase().includes(filter.toLowerCase()) ||
        acc.username.toLowerCase().includes(filter.toLowerCase())
      )
    : accounts;

  if (!filtered.length) {
    adminRefs.accountsList.innerHTML = '<tr class="no-data"><td colspan="6">Geen accounts gevonden</td></tr>';
    return;
  }

  filtered.forEach((account) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><input type="checkbox" class="account-checkbox" value="${account.id}" /></td>
      <td>${account.email}</td>
      <td>${account.username}</td>
      <td><span class="badge ${account.role === 'admin' ? 'badge--success' : ''}">${account.role || 'user'}</span></td>
      <td class="mono">${new Date(account.createdAt).toLocaleDateString()}</td>
      <td>
        <button class="btn-small" onclick="promoteUser('${account.id}')">Verhef</button>
        <button class="btn-small danger" onclick="deleteAccount('${account.id}')">Verwijder</button>
      </td>
    `;
    adminRefs.accountsList.appendChild(row);
  });
  
  updateStats();
}

function renderProducts(filter = '') {
  if (!adminRefs.productsList) return;
  adminRefs.productsList.innerHTML = '';
  
  loadProducts();
  
  const filtered = filter
    ? adminState.products.filter(p => 
        p.name.toLowerCase().includes(filter.toLowerCase()) ||
        p.id.toLowerCase().includes(filter.toLowerCase())
      )
    : adminState.products;

  if (!filtered.length) {
    adminRefs.productsList.innerHTML = '<tr class="no-data"><td colspan="7">Geen producten</td></tr>';
    return;
  }

  filtered.forEach((product) => {
    const finalPrice = product.discountPercent ? Math.max(0, product.price * (1 - product.discountPercent / 100)) : product.price;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><input type="checkbox" class="product-checkbox" value="${product.id}" /></td>
      <td class="mono">${product.id}</td>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td class="mono">€${product.price.toFixed(2)}</td>
      <td>${product.discountPercent ? `-${product.discountPercent}% → €${finalPrice.toFixed(2)}` : '—'}</td>
      <td>${product.stock || 0}</td>
      <td>
        <button class="btn-small" onclick="editProduct('${product.id}')">Bewerk</button>
        <button class="btn-small danger" onclick="deleteProduct('${product.id}')">Verwijder</button>
      </td>
    `;
    adminRefs.productsList.appendChild(row);
  });
  
  updateStats();
}

function updateStats() {
  const allAccounts = localStorage.getItem('pcwebshop_all_accounts');
  const accounts = allAccounts ? JSON.parse(allAccounts) : [];
  const adminCount = accounts.filter(a => a.role === 'admin').length;
  
  loadProducts();
  
  if (adminRefs.statTotalUsers) adminRefs.statTotalUsers.textContent = accounts.length;
  if (adminRefs.statAdminUsers) adminRefs.statAdminUsers.textContent = adminCount;
  if (adminRefs.statTotalProducts) adminRefs.statTotalProducts.textContent = adminState.products.length;
  if (adminRefs.statTotalOrders) adminRefs.statTotalOrders.textContent = '0';
}

function initTabSwitcher() {
  adminRefs.tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.dataset.tab;
      
      adminRefs.tabButtons.forEach(b => b.classList.remove('active'));
      adminRefs.tabContents.forEach(c => c.classList.remove('active'));
      
      btn.classList.add('active');
      document.getElementById(`tab-${tabName}`).classList.add('active');
      
      if (tabName === 'accounts') {
        renderAccounts();
      } else if (tabName === 'products') {
        renderProducts();
      }
    });
  });
}

function initAccountHandlers() {
  adminRefs.searchAccounts?.addEventListener('input', (e) => {
    renderAccounts(e.target.value);
  });
  
  adminRefs.btnPromoteAdmin?.addEventListener('click', () => {
    const selected = document.querySelectorAll('.account-checkbox:checked');
    if (!selected.length) {
      showError('Geen accounts geselecteerd');
      return;
    }
    selected.forEach(checkbox => {
      promoteUser(checkbox.value);
    });
  });
  
  adminRefs.btnDeleteUser?.addEventListener('click', () => {
    const selected = document.querySelectorAll('.account-checkbox:checked');
    if (!selected.length) {
      showError('Geen accounts geselecteerd');
      return;
    }
    selected.forEach(checkbox => {
      deleteAccount(checkbox.value);
    });
  });
  
  adminRefs.selectAllAccounts?.addEventListener('change', (e) => {
    document.querySelectorAll('.account-checkbox').forEach(checkbox => {
      checkbox.checked = e.target.checked;
    });
  });
}

function initProductHandlers() {
  adminRefs.productForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(adminRefs.productForm);
    
    const product = {
      id: data.get('product-id'),
      name: data.get('product-name'),
      category: data.get('product-category'),
      brand: data.get('product-brand'),
      price: parseFloat(data.get('product-price')),
      originalPrice: parseFloat(data.get('product-price')),
      discountPercent: parseFloat(data.get('product-discount')) || 0,
      stock: parseInt(data.get('product-stock')) || 0,
      topSpecs: (data.get('product-specs') || '').split(',').map(s => s.trim()).filter(Boolean),
    };
    
    loadProducts();
    const existing = adminState.products.findIndex(p => p.id === product.id);
    if (existing >= 0) {
      adminState.products[existing] = product;
      showSuccess('Product bijgewerkt');
    } else {
      adminState.products.push(product);
      showSuccess('Product toegevoegd');
    }
    
    saveProducts();
    adminRefs.productForm.reset();
    renderProducts();
  });
  
  adminRefs.searchProducts?.addEventListener('input', (e) => {
    renderProducts(e.target.value);
  });
  
  adminRefs.btnDeleteProduct?.addEventListener('click', () => {
    const selected = document.querySelectorAll('.product-checkbox:checked');
    if (!selected.length) {
      showError('Geen producten geselecteerd');
      return;
    }
    selected.forEach(checkbox => {
      deleteProduct(checkbox.value);
    });
  });
  
  adminRefs.selectAllProducts?.addEventListener('change', (e) => {
    document.querySelectorAll('.product-checkbox').forEach(checkbox => {
      checkbox.checked = e.target.checked;
    });
  });
}

function initSettingsHandlers() {
  adminRefs.btnSaveSettings?.addEventListener('click', saveSettings);
  
  adminRefs.btnExportData?.addEventListener('click', () => {
    const allData = {
      accounts: JSON.parse(localStorage.getItem('pcwebshop_all_accounts') || '[]'),
      products: adminState.products,
      settings: adminState.settings,
      exportDate: new Date().toISOString(),
    };
    
    const blob = new Blob([JSON.stringify(allData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `webshop-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showSuccess('Data geëxporteerd');
  });
  
  adminRefs.btnImportData?.addEventListener('click', () => {
    adminRefs.importFile?.click();
  });
  
  adminRefs.importFile?.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (data.accounts) localStorage.setItem('pcwebshop_all_accounts', JSON.stringify(data.accounts));
        if (data.products) {
          adminState.products = data.products;
          saveProducts();
        }
        if (data.settings) {
          adminState.settings = data.settings;
          saveSettings();
        }
        showSuccess('Data geïmporteerd');
        renderAccounts();
        renderProducts();
      } catch (err) {
        showError('Kon bestand niet laden: ' + err.message);
      }
    };
    reader.readAsText(file);
  });
}

function initHomeHandlers() {
  if (!adminRefs.homeSave) return;
  const content = loadHomeContent();
  if (adminRefs.homeHeroTitle) adminRefs.homeHeroTitle.value = content.heroTitle || '';
  if (adminRefs.homeHeroSubtitle) adminRefs.homeHeroSubtitle.value = content.heroSubtitle || '';
  if (adminRefs.homeHeroCtaLabel) adminRefs.homeHeroCtaLabel.value = content.heroCtaPrimaryLabel || '';
  if (adminRefs.homeHeroCtaHref) adminRefs.homeHeroCtaHref.value = content.heroCtaPrimaryHref || '';
  if (adminRefs.homeHeroCta2Label) adminRefs.homeHeroCta2Label.value = content.heroCtaSecondaryLabel || '';
  if (adminRefs.homeHeroCta2Href) adminRefs.homeHeroCta2Href.value = content.heroCtaSecondaryHref || '';
  if (adminRefs.homeShowcaseTitle) adminRefs.homeShowcaseTitle.value = content.showcaseTitle || '';
  if (adminRefs.homeShowcaseSubtitle) adminRefs.homeShowcaseSubtitle.value = content.showcaseSubtitle || '';
  if (adminRefs.homeReviewsTitle) adminRefs.homeReviewsTitle.value = content.reviewsTitle || '';
  if (adminRefs.homeReviewsSubtitle) adminRefs.homeReviewsSubtitle.value = content.reviewsSubtitle || '';
  if (adminRefs.homeHeroCardTitle) adminRefs.homeHeroCardTitle.value = content.heroCardTitle || '';
  if (adminRefs.homeHeroCardSubtitle) adminRefs.homeHeroCardSubtitle.value = content.heroCardSubtitle || '';
  if (adminRefs.homeHeroCardPrice) adminRefs.homeHeroCardPrice.value = content.heroCardPrice || '';
  if (adminRefs.homeHeroCardCta) adminRefs.homeHeroCardCta.value = content.heroCardCta || '';

  adminRefs.homeSave.addEventListener('click', (e) => {
    e.preventDefault();
    const updated = {
      heroTitle: adminRefs.homeHeroTitle?.value || '',
      heroSubtitle: adminRefs.homeHeroSubtitle?.value || '',
      heroCtaPrimaryLabel: adminRefs.homeHeroCtaLabel?.value || '',
      heroCtaPrimaryHref: adminRefs.homeHeroCtaHref?.value || '',
      heroCtaSecondaryLabel: adminRefs.homeHeroCta2Label?.value || '',
      heroCtaSecondaryHref: adminRefs.homeHeroCta2Href?.value || '',
      showcaseTitle: adminRefs.homeShowcaseTitle?.value || '',
      showcaseSubtitle: adminRefs.homeShowcaseSubtitle?.value || '',
      reviewsTitle: adminRefs.homeReviewsTitle?.value || '',
      reviewsSubtitle: adminRefs.homeReviewsSubtitle?.value || '',
      heroCardTitle: adminRefs.homeHeroCardTitle?.value || '',
      heroCardSubtitle: adminRefs.homeHeroCardSubtitle?.value || '',
      heroCardPrice: adminRefs.homeHeroCardPrice?.value || '',
      heroCardCta: adminRefs.homeHeroCardCta?.value || '',
    };
    saveHomeContent(updated);
  });
}

// Global functions for inline onclick handlers
window.promoteUser = function(userId) {
  const allAccounts = localStorage.getItem('pcwebshop_all_accounts');
  const accounts = allAccounts ? JSON.parse(allAccounts) : [];
  const account = accounts.find(a => a.id === userId);
  if (account) {
    account.role = account.role === 'admin' ? 'user' : 'admin';
    localStorage.setItem('pcwebshop_all_accounts', JSON.stringify(accounts));
    renderAccounts();
    showSuccess(`${account.username} is nu ${account.role}`);
  }
};

window.deleteAccount = function(userId) {
  if (!confirm('Account werkelijk verwijderen?')) return;
  const allAccounts = localStorage.getItem('pcwebshop_all_accounts');
  let accounts = allAccounts ? JSON.parse(allAccounts) : [];
  accounts = accounts.filter(a => a.id !== userId);
  localStorage.setItem('pcwebshop_all_accounts', JSON.stringify(accounts));
  renderAccounts();
  showSuccess('Account verwijderd');
};

window.deleteProduct = function(productId) {
  if (!confirm('Product werkelijk verwijderen?')) return;
  loadProducts();
  adminState.products = adminState.products.filter(p => p.id !== productId);
  saveProducts();
  renderProducts();
  showSuccess('Product verwijderd');
};

window.editProduct = function(productId) {
  loadProducts();
  const product = adminState.products.find(p => p.id === productId);
  if (!product) return;
  
  document.querySelector('input[name="product-id"]').value = product.id;
  document.querySelector('input[name="product-name"]').value = product.name;
  document.querySelector('select[name="product-category"]').value = product.category;
  document.querySelector('input[name="product-brand"]').value = product.brand || '';
  document.querySelector('input[name="product-price"]').value = product.price;
  document.querySelector('input[name="product-discount"]').value = product.discountPercent || 0;
  document.querySelector('input[name="product-stock"]').value = product.stock || 0;
  document.querySelector('textarea[name="product-specs"]').value = (product.topSpecs || []).join(', ');
  
  document.querySelector('.admin-tab-btn[data-tab="products"]').click();
  window.scrollTo(0, 0);
};

async function bootstrap() {
  checkAdminAuth();
  loadAccounts();
  loadProducts();
  loadSettings();
  
  initTabSwitcher();
  initAccountHandlers();
  initProductHandlers();
  initSettingsHandlers();
  initHomeHandlers();
  
  renderAccounts();
  updateStats();
  
  adminRefs.adminLogout?.addEventListener('click', () => {
    localStorage.removeItem('pcwebshop_user');
    window.location.href = 'index.html';
  });
}

bootstrap();
