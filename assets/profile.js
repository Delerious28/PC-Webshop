// Profile page authentication and user management

// Simple password hashing for demo (NOT production-ready)
function hashPassword(password) {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(16);
}

// Initialize accounts database with default admin account
function initializeDatabase() {
  if (!localStorage.getItem('pcwebshop_all_accounts')) {
    const defaultAccounts = [
      {
        email: 'admin@webshop.local',
        username: 'admin',
        passwordHash: hashPassword('admin123'),
        role: 'admin',
        createdAt: new Date().toISOString()
      }
    ];
    localStorage.setItem('pcwebshop_all_accounts', JSON.stringify(defaultAccounts));
  }
  
  // Initialize products if not exists
  if (!localStorage.getItem('pcwebshop_products')) {
    localStorage.setItem('pcwebshop_products', JSON.stringify([]));
  }
}

// Check if user is logged in
function getCurrentUser() {
  const userStr = localStorage.getItem('pcwebshop_user');
  return userStr ? JSON.parse(userStr) : null;
}

// Set current logged-in user
function setCurrentUser(user) {
  if (user) {
    localStorage.setItem('pcwebshop_user', JSON.stringify(user));
  } else {
    localStorage.removeItem('pcwebshop_user');
  }
}

// Get all accounts
function getAllAccounts() {
  const accountsStr = localStorage.getItem('pcwebshop_all_accounts');
  return accountsStr ? JSON.parse(accountsStr) : [];
}

// Save all accounts
function saveAllAccounts(accounts) {
  localStorage.setItem('pcwebshop_all_accounts', JSON.stringify(accounts));
}

// Find account by username or email
function findAccount(usernameOrEmail) {
  const accounts = getAllAccounts();
  return accounts.find(acc => acc.username === usernameOrEmail || acc.email === usernameOrEmail);
}

// Login user
function loginUser(usernameOrEmail, password) {
  const account = findAccount(usernameOrEmail);
  if (!account) {
    return { success: false, message: 'Account niet gevonden' };
  }

  const passwordHash = hashPassword(password);
  if (passwordHash !== account.passwordHash) {
    return { success: false, message: 'Wachtwoord onjuist' };
  }

  const user = {
    email: account.email,
    username: account.username,
    role: account.role,
    loginTime: new Date().toISOString()
  };
  setCurrentUser(user);
  return { success: true, user };
}

// Register new user
function registerUser(email, username, password) {
  const accounts = getAllAccounts();

  // Check if username or email already exists
  if (accounts.some(acc => acc.username === username)) {
    return { success: false, message: 'Gebruikersnaam al in gebruik' };
  }
  if (accounts.some(acc => acc.email === email)) {
    return { success: false, message: 'Email al in gebruik' };
  }

  // Validate inputs
  if (!email || !username || !password) {
    return { success: false, message: 'Alle velden zijn verplicht' };
  }
  if (username.length < 3) {
    return { success: false, message: 'Gebruikersnaam moet minimaal 3 tekens zijn' };
  }
  if (password.length < 6) {
    return { success: false, message: 'Wachtwoord moet minimaal 6 tekens zijn' };
  }

  // Create new account
  const newAccount = {
    email,
    username,
    passwordHash: hashPassword(password),
    role: 'user',
    createdAt: new Date().toISOString()
  };

  accounts.push(newAccount);
  saveAllAccounts(accounts);

  // Auto-login after registration
  const user = {
    email: newAccount.email,
    username: newAccount.username,
    role: newAccount.role,
    loginTime: new Date().toISOString()
  };
  setCurrentUser(user);
  return { success: true, user };
}

// Logout user
function logoutUser() {
  setCurrentUser(null);
}

// Promote user to admin
function promoteUserToAdmin(username) {
  const accounts = getAllAccounts();
  const account = accounts.find(acc => acc.username === username);
  if (account) {
    account.role = 'admin';
    saveAllAccounts(accounts);
    
    // Update current user if it's the logged-in user
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.username === username) {
      currentUser.role = 'admin';
      setCurrentUser(currentUser);
    }
    return true;
  }
  return false;
}

// Delete account
function deleteAccount(username) {
  const accounts = getAllAccounts();
  const index = accounts.findIndex(acc => acc.username === username);
  if (index > -1) {
    accounts.splice(index, 1);
    saveAllAccounts(accounts);
    
    // Logout if it's the current user
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.username === username) {
      logoutUser();
    }
    return true;
  }
  return false;
}

// Get all products
function getAllProducts() {
  const productsStr = localStorage.getItem('pcwebshop_products');
  return productsStr ? JSON.parse(productsStr) : [];
}

// Save products
function saveAllProducts(products) {
  localStorage.setItem('pcwebshop_products', JSON.stringify(products));
}

// Add product
function addProduct(product) {
  const products = getAllProducts();
  products.push({
    ...product,
    createdAt: new Date().toISOString()
  });
  saveAllProducts(products);
  return product;
}

// Delete product
function deleteProduct(productId) {
  const products = getAllProducts();
  const index = products.findIndex(p => p.id === productId);
  if (index > -1) {
    products.splice(index, 1);
    saveAllProducts(products);
    return true;
  }
  return false;
}

// UI Functions

function showLoginContainer() {
  const loginContainer = document.getElementById('login-container');
  const profileContainer = document.getElementById('profile-container');
  const adminSection = document.getElementById('admin-section');
  
  if (loginContainer) loginContainer.style.display = 'block';
  if (profileContainer) profileContainer.style.display = 'none';
  if (adminSection) adminSection.style.display = 'none';
}

function showProfileContainer() {
  const loginContainer = document.getElementById('login-container');
  const profileContainer = document.getElementById('profile-container');
  const adminSection = document.getElementById('admin-section');
  
  if (loginContainer) loginContainer.style.display = 'none';
  if (profileContainer) profileContainer.style.display = 'block';
  
  const user = getCurrentUser();
  if (user && user.role === 'admin') {
    if (adminSection) adminSection.style.display = 'block';
    renderAccountsList();
    renderProductsList();
  } else {
    if (adminSection) adminSection.style.display = 'none';
  }
}

function updateUI() {
  const user = getCurrentUser();
  const logoutBtn = document.getElementById('logout-btn');
  const profileLogoutBtn = document.getElementById('profile-logout');
  const welcomeUsername = document.getElementById('welcome-username');
  const profilePageName = document.getElementById('profile-page-name');
  const profilePageEmail = document.getElementById('profile-page-email');
  const profilePageRole = document.getElementById('profile-page-role');
  const adminLink = document.getElementById('admin-link');
  
  if (user) {
    showProfileContainer();
    if (logoutBtn) {
      logoutBtn.style.display = 'inline-block';
    }
    if (welcomeUsername) welcomeUsername.textContent = user.username;
    if (profilePageName) profilePageName.textContent = user.username;
    if (profilePageEmail) profilePageEmail.textContent = user.email;
    if (profilePageRole) profilePageRole.textContent = user.role === 'admin' ? '👑 Admin' : '👤 User';
    
    // Show admin link if admin
    if (adminLink) {
      adminLink.style.display = user.role === 'admin' ? 'inline-block' : 'none';
    }
  } else {
    showLoginContainer();
    if (logoutBtn) {
      logoutBtn.style.display = 'none';
    }
    if (adminLink) {
      adminLink.style.display = 'none';
    }
  }
}

function renderAccountsList() {
  const usersList = document.getElementById('users-list');
  if (!usersList) return;
  
  const accounts = getAllAccounts();
  const currentUser = getCurrentUser();
  
  usersList.innerHTML = accounts.map(account => `
    <tr>
      <td>${account.email}</td>
      <td>${account.username}</td>
      <td><span class="chip">${account.role === 'admin' ? '👑 Admin' : '👤 User'}</span></td>
      <td>
        ${account.role !== 'admin' ? `<button class="btn btn-small" onclick="promoteAccountToAdmin('${account.username}')">Maak Admin</button>` : ''}
        ${account.username !== currentUser?.username ? `<button class="btn btn-ghost btn-small" onclick="deleteAccountUI('${account.username}')">Verwijder</button>` : ''}
      </td>
    </tr>
  `).join('');
}

function renderProductsList() {
  const productsList = document.getElementById('products-list');
  if (!productsList) return;
  
  const products = getAllProducts();
  
  productsList.innerHTML = products.map(product => `
    <tr>
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>€${product.price}</td>
      <td><button class="btn btn-ghost btn-small" onclick="deleteProductUI('${product.id}')">Verwijder</button></td>
    </tr>
  `).join('');
}

function promoteAccountToAdmin(username) {
  promoteUserToAdmin(username);
  renderAccountsList();
  alert(`${username} is nu admin`);
}

function deleteAccountUI(username) {
  if (confirm(`Weet je zeker dat je ${username} wilt verwijderen?`)) {
    deleteAccount(username);
    renderAccountsList();
    alert(`${username} is verwijderd`);
  }
}

function deleteProductUI(productId) {
  if (confirm(`Weet je zeker dat je dit product wilt verwijderen?`)) {
    deleteProduct(productId);
    renderProductsList();
    alert('Product verwijderd');
  }
}

// Initialize and set up event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Initialize database
  initializeDatabase();

  // Update UI based on login state
  updateUI();

  // Tab switching for login/register
  const loginTabs = document.querySelectorAll('.login-tab');
  if (loginTabs.length) {
    loginTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        loginTabs.forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.login-tab-content').forEach(tc => tc.classList.remove('active'));
        
        this.classList.add('active');
        const tabName = this.dataset.tab;
        const tabContent = document.getElementById(`${tabName}-tab`);
        if (tabContent) tabContent.classList.add('active');
      });
    });

    if (window.location.hash === '#register') {
      document.querySelector('.login-tab[data-tab="register"]')?.click();
    }
  }

  // Admin tabs switching
  const adminTabBtns = document.querySelectorAll('.admin-tab-btn');
  if (adminTabBtns.length) {
    adminTabBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        adminTabBtns.forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.admin-tab-content').forEach(tc => tc.style.display = 'none');
        
        this.classList.add('active');
        const tabName = this.dataset.tab;
        const tabContent = document.getElementById(`${tabName}-tab`);
        if (tabContent) tabContent.style.display = 'block';
      });
    });
  }

  // Login form submission
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;
      const errorDiv = document.getElementById('login-error');
      
      const result = loginUser(username, password);
      
      if (result.success) {
        errorDiv.style.display = 'none';
        updateUI();
        loginForm.reset();
      } else {
        errorDiv.textContent = result.message;
        errorDiv.style.display = 'block';
      }
    });
  }

  // Register form submission
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('register-email').value;
      const username = document.getElementById('register-username').value;
      const password = document.getElementById('register-password').value;
      const passwordConfirm = document.getElementById('register-password-confirm').value;
      const errorDiv = document.getElementById('register-error');
      
      if (password !== passwordConfirm) {
        errorDiv.textContent = 'Wachtwoorden komen niet overeen';
        errorDiv.style.display = 'block';
        return;
      }
      
      const result = registerUser(email, username, password);
      
      if (result.success) {
        errorDiv.style.display = 'none';
        updateUI();
        registerForm.reset();
      } else {
        errorDiv.textContent = result.message;
        errorDiv.style.display = 'block';
      }
    });
  }

  // Logout button
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      logoutUser();
      updateUI();
    });
  }

  // Profile logout button
  const profileLogoutBtn = document.getElementById('profile-logout');
  if (profileLogoutBtn) {
    profileLogoutBtn.addEventListener('click', function() {
      logoutUser();
      updateUI();
    });
  }

  // Admin product form
  const adminProductForm = document.getElementById('admin-product-form');
  if (adminProductForm) {
    adminProductForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const product = {
        id: document.getElementById('product-id').value,
        name: document.getElementById('product-name').value,
        category: document.getElementById('product-category').value,
        price: parseFloat(document.getElementById('product-price').value)
      };
      
      addProduct(product);
      adminProductForm.reset();
      renderProductsList();
      alert('Product toegevoegd');
    });
  }
});

// Make functions available globally
window.promoteAccountToAdmin = promoteAccountToAdmin;
window.deleteAccountUI = deleteAccountUI;
window.deleteProductUI = deleteProductUI;
