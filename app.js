/* ELEGANCE — Silent Editorial Single Page Application Engine */

// Global State
const state = {
  cart: [
    {
      id: 'wool-coat',
      name: 'Structured Wool Coat',
      price: 1450,
      color: 'Charcoal Grey',
      size: 'M',
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTOp7on7YUMAwoZCiuURKgJP-BNPpbiiVDBOgZXjBnblYmDwzJ-1Oh9_AuX4IljsLIy-7xmxBAIirdvXCx8CyVrdmjJ42Ap1dqBCWpCjgl-BwO-kR-ympZgvejUn9QXCygZFA5DdZchObFIvCIEGCWFGmbm1MDC4evOOlYGnMK5Vk4H3a9SurgKQy3OMvfefHcqaqr_Wc-1nL8dbyCE_DN0wBJ4PO3KEiOq_6Lr90nk_l7u66uJqqy'
    }
  ],
  wishlist: [],
  currency: 'USD',
  currencyRate: 1.0,
  currencySymbol: '$',
  discountPercent: 0,
  currentPDP: {
    name: 'Structured Wool Coat',
    price: 1450,
    color: 'Charcoal Grey',
    size: 'M',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTOp7on7YUMAwoZCiuURKgJP-BNPpbiiVDBOgZXjBnblYmDwzJ-1Oh9_AuX4IljsLIy-7xmxBAIirdvXCx8CyVrdmjJ42Ap1dqBCWpCjgl-BwO-kR-ympZgvejUn9QXCygZFA5DdZchObFIvCIEGCWFGmbm1MDC4evOOlYGnMK5Vk4H3a9SurgKQy3OMvfefHcqaqr_Wc-1nL8dbyCE_DN0wBJ4PO3KEiOq_6Lr90nk_l7u66uJqqy'
  }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initRouter();
  initNavScroll();
  initGSAP();
  renderCartUI();
});

// 1. SPA Router
function navigateTo(viewId) {
  const views = document.querySelectorAll('.view-section');
  views.forEach(view => {
    view.classList.remove('active');
  });

  const targetView = document.getElementById(`${viewId}-view`);
  if (targetView) {
    targetView.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = viewId;
  }

  // Update active nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('data-view') === viewId) {
      link.classList.add('active', 'text-on-surface');
      link.classList.remove('text-secondary');
    } else {
      link.classList.remove('active', 'text-on-surface');
      link.classList.add('text-secondary');
    }
  });

  // Trigger GSAP animations for active view
  if (window.ScrollTrigger) {
    ScrollTrigger.refresh();
  }
}

function initRouter() {
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(`${hash}-view`)) {
    navigateTo(hash);
  } else {
    navigateTo('home');
  }
  
  window.addEventListener('hashchange', () => {
    const newHash = window.location.hash.replace('#', '');
    if (newHash && document.getElementById(`${newHash}-view`)) {
      navigateTo(newHash);
    }
  });
}

// 2. Navigation Bar Scroll Transition
function initNavScroll() {
  const topNav = document.getElementById('top-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      topNav.classList.add('bg-surface/90', 'backdrop-blur-md', 'shadow-sm', 'h-16');
      topNav.classList.remove('bg-transparent', 'h-20');
    } else {
      topNav.classList.remove('bg-surface/90', 'backdrop-blur-md', 'shadow-sm', 'h-16');
      topNav.classList.add('bg-transparent', 'h-20');
    }
  });
}

// 3. GSAP & ScrollTrigger Animations & Micro-Interactions
function initGSAP() {
  if (typeof gsap === 'undefined') return;

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-up reveals on scroll
    gsap.utils.toArray('.reveal-on-scroll').forEach(element => {
      gsap.fromTo(element, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Parallax background image scroll
    gsap.utils.toArray('.hero-bg-img').forEach(hero => {
      gsap.to(hero, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: hero.parentElement,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  }

  // 3D Card Tilt & Magnetic Hover Micro-Interactions
  initCard3DTilt();
}

function initCard3DTilt() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (y / (rect.height / 2)) * -6;
      const rotateY = (x / (rect.width / 2)) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      card.style.transition = 'transform 0.1s ease-out';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      card.style.transition = 'transform 0.5s ease-out';
    });
  });
}

// 4. Cart State & Drawer Logic
function renderCartUI() {
  const drawerList = document.getElementById('drawer-items-list');
  const fullBagList = document.getElementById('full-bag-items');
  const badgeCount = document.getElementById('cart-badge');
  const drawerCount = document.getElementById('drawer-count');
  
  let totalItems = 0;
  let subtotal = 0;

  let itemsHTML = '';
  
  if (state.cart.length === 0) {
    itemsHTML = `
      <div class="text-center py-12">
        <span class="material-symbols-outlined text-4xl text-secondary mb-2 block">shopping_bag</span>
        <p class="text-body-sm text-secondary uppercase tracking-widest">Your shopping bag is empty</p>
      </div>
    `;
  } else {
    state.cart.forEach((item, index) => {
      totalItems += item.quantity;
      subtotal += item.price * item.quantity;

      itemsHTML += `
        <div class="flex gap-4 items-center py-4">
          <img src="${item.image}" alt="${item.name}" class="w-16 h-20 object-cover bg-surface-container"/>
          <div class="flex-grow">
            <h4 class="text-body-sm font-semibold uppercase">${item.name}</h4>
            <p class="text-caption text-secondary mb-2">${item.color} / ${item.size}</p>
            <div class="flex items-center gap-3">
              <div class="flex items-center border border-on-surface/30">
                <button onclick="updateQuantity(${index}, -1)" class="px-2 py-0.5 text-xs font-bold hover:bg-on-surface/10">-</button>
                <span class="px-2 text-xs font-semibold">${item.quantity}</span>
                <button onclick="updateQuantity(${index}, 1)" class="px-2 py-0.5 text-xs font-bold hover:bg-on-surface/10">+</button>
              </div>
              <button onclick="removeFromCart(${index})" class="text-caption text-secondary hover:text-red-700 underline">Remove</button>
            </div>
          </div>
          <div class="text-right">
            <span class="text-body-sm font-bold">${state.currencySymbol}${(item.price * item.quantity * state.currencyRate).toFixed(2)}</span>
          </div>
        </div>
      `;
    });
  }

  if (drawerList) drawerList.innerHTML = itemsHTML;
  if (fullBagList) fullBagList.innerHTML = itemsHTML;

  if (badgeCount) badgeCount.textContent = totalItems;
  if (drawerCount) drawerCount.textContent = totalItems;

  // Calculate totals with promo discount
  const finalSubtotal = subtotal * state.currencyRate;
  const discountAmount = finalSubtotal * (state.discountPercent / 100);
  const finalTotal = finalSubtotal - discountAmount;

  const drawerSubtotal = document.getElementById('drawer-subtotal');
  const bagSubtotal = document.getElementById('bag-subtotal');
  const bagTotal = document.getElementById('bag-total');
  const checkoutTotalBtn = document.getElementById('checkout-total-btn');

  if (drawerSubtotal) drawerSubtotal.textContent = `${state.currencySymbol}${finalTotal.toFixed(2)}`;
  if (bagSubtotal) bagSubtotal.textContent = `${state.currencySymbol}${finalSubtotal.toFixed(2)}`;
  if (bagTotal) bagTotal.textContent = `${state.currencySymbol}${finalTotal.toFixed(2)}`;
  if (checkoutTotalBtn) checkoutTotalBtn.textContent = `${state.currencySymbol}${finalTotal.toFixed(2)}`;
}

function addToCart(name, price, color, size, image) {
  const existingIndex = state.cart.findIndex(i => i.name === name && i.color === color && i.size === size);
  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += 1;
  } else {
    state.cart.push({ id: Date.now().toString(), name, price, color, size, quantity: 1, image });
  }
  renderCartUI();
  openCartDrawer();
  showToast(`Added "${name}" to Bag`);
}

function updateQuantity(index, delta) {
  if (state.cart[index]) {
    state.cart[index].quantity += delta;
    if (state.cart[index].quantity <= 0) {
      state.cart.splice(index, 1);
    }
    renderCartUI();
  }
}

function removeFromCart(index) {
  if (state.cart[index]) {
    const item = state.cart[index];
    state.cart.splice(index, 1);
    renderCartUI();
    showToast(`Removed "${item.name}"`);
  }
}

function openCartDrawer() {
  document.getElementById('cart-backdrop').classList.add('open');
  document.getElementById('cart-drawer').classList.add('open');
}

function closeCartDrawer() {
  document.getElementById('cart-backdrop').classList.remove('open');
  document.getElementById('cart-drawer').classList.remove('open');
}

// 5. Product Detail Page (PDP) Controls
function openPDP(title, price, image) {
  state.currentPDP.name = title;
  state.currentPDP.price = price;
  state.currentPDP.image = image;

  document.getElementById('pdp-title').textContent = title;
  document.getElementById('pdp-price').textContent = `${state.currencySymbol}${price.toFixed(2)}`;
  document.getElementById('pdp-cta-price').textContent = `${state.currencySymbol}${price.toFixed(2)}`;
  document.getElementById('pdp-main-img').src = image;
  document.getElementById('pdp-breadcrumb').textContent = title.toUpperCase();

  navigateTo('product');
}

function switchPDPImage(src) {
  document.getElementById('pdp-main-img').src = src;
  document.querySelectorAll('.pdp-thumb').forEach(thumb => {
    if (thumb.src === src) {
      thumb.classList.add('border-on-surface');
      thumb.classList.remove('border-transparent');
    } else {
      thumb.classList.remove('border-on-surface');
      thumb.classList.add('border-transparent');
    }
  });
}

function selectColor(element, colorName) {
  state.currentPDP.color = colorName;
  document.getElementById('selected-color').textContent = colorName;
  document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.classList.remove('ring-2', 'ring-offset-2', 'ring-on-surface');
    swatch.classList.add('ring-1', 'ring-on-surface/30');
  });
  element.classList.add('ring-2', 'ring-offset-2', 'ring-on-surface');
}

function selectSize(element, sizeName) {
  state.currentPDP.size = sizeName;
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.classList.remove('bg-on-surface', 'text-surface', 'border-on-surface');
    btn.classList.add('border-on-surface/30');
  });
  element.classList.add('bg-on-surface', 'text-surface', 'border-on-surface');
}

function addCurrentPDPToCart() {
  addToCart(
    state.currentPDP.name,
    state.currentPDP.price,
    state.currentPDP.color,
    state.currentPDP.size,
    state.currentPDP.image
  );
}

// 6. Shop Filter & Sort
function filterShop(category, btnElement) {
  document.querySelectorAll('#shop-view button').forEach(b => b.classList.remove('border-b-2', 'border-on-surface'));
  if (btnElement) btnElement.classList.add('border-b-2', 'border-on-surface');

  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function sortShop(sortValue) {
  const grid = document.getElementById('shop-grid');
  const cards = Array.from(grid.querySelectorAll('.product-card'));

  cards.sort((a, b) => {
    const priceA = parseFloat(a.getAttribute('data-price'));
    const priceB = parseFloat(b.getAttribute('data-price'));

    if (sortValue === 'low-high') return priceA - priceB;
    if (sortValue === 'high-low') return priceB - priceA;
    return 0;
  });

  cards.forEach(card => grid.appendChild(card));
}

// 7. Wishlist & Promo Code
function toggleWishlist(button, productName) {
  const isWishlisted = button.textContent === 'favorite';
  if (isWishlisted) {
    button.textContent = 'favorite_border';
    button.classList.remove('text-red-600');
    showToast(`Removed "${productName}" from Wishlist`);
  } else {
    button.textContent = 'favorite';
    button.classList.add('text-red-600');
    showToast(`Saved "${productName}" to Wishlist`);
  }
}

function applyPromo() {
  const promoInput = document.getElementById('promo-input');
  const code = promoInput.value.trim().toUpperCase();
  if (code === 'SILENT10') {
    state.discountPercent = 10;
    renderCartUI();
    showToast('Promo SILENT10 Applied: 10% Discount!');
  } else {
    showToast('Invalid Promo Code. Try SILENT10');
  }
}

// 8. Checkout & Modals
function openCheckoutModal() {
  document.getElementById('checkout-backdrop').classList.add('open');
}

function closeCheckoutModal() {
  document.getElementById('checkout-backdrop').classList.remove('open');
  document.getElementById('checkout-form-step').classList.remove('hidden');
  document.getElementById('checkout-success-step').classList.add('hidden');
}

function processOrder(e) {
  e.preventDefault();
  document.getElementById('checkout-form-step').classList.add('hidden');
  document.getElementById('checkout-success-step').classList.remove('hidden');
  state.cart = [];
  renderCartUI();
}

function openJournalModal(title) {
  const modal = document.getElementById('general-modal');
  const content = document.getElementById('modal-body-content');
  content.innerHTML = `
    <span class="text-caption text-secondary uppercase block mb-2">MONOGRAPH ESSAY</span>
    <h2 class="text-headline-md font-display uppercase mb-6">${title}</h2>
    <p class="text-body-main leading-relaxed mb-6">
      In an age dominated by rapid trends and fleeting aesthetics, architectural tailoring offers a timeless sanctuary of visual silence. The silhouette does not compete with the environment; it harmonizes with structural forms.
    </p>
    <blockquote class="font-display italic text-xl border-l-2 border-on-surface pl-4 my-6">
      "Form follows restraint. High fashion is not about how much you can add, but how much you can strip away while retaining structural dignity."
    </blockquote>
    <p class="text-body-sm text-secondary leading-relaxed mb-8">
      Written by Elena Vance, Head of Design at ELEGANCE. Milan, Autumn 2026.
    </p>
    <button onclick="closeGeneralModal()" class="btn-primary py-3 px-6">Close Monograph</button>
  `;
  modal.classList.add('open');
}

function openSizeGuide() {
  const modal = document.getElementById('general-modal');
  const content = document.getElementById('modal-body-content');
  content.innerHTML = `
    <span class="text-caption text-secondary uppercase block mb-2">SIZING CHART</span>
    <h2 class="text-headline-md font-display uppercase mb-6">Garment Measurements (Inches)</h2>
    <table class="w-full text-left border-collapse text-body-sm mb-6">
      <thead>
        <tr class="border-b border-on-surface/20">
          <th class="py-2">SIZE</th>
          <th class="py-2">CHEST</th>
          <th class="py-2">SHOULDER</th>
          <th class="py-2">LENGTH</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-on-surface/10">
        <tr><td class="py-2 font-bold">XS</td><td>36"</td><td>17.5"</td><td>46"</td></tr>
        <tr><td class="py-2 font-bold">S</td><td>38"</td><td>18.0"</td><td>47"</td></tr>
        <tr><td class="py-2 font-bold">M</td><td>40"</td><td>18.5"</td><td>48"</td></tr>
        <tr><td class="py-2 font-bold">L</td><td>42"</td><td>19.0"</td><td>49"</td></tr>
      </tbody>
    </table>
    <button onclick="closeGeneralModal()" class="btn-primary py-3 px-6">Close Size Guide</button>
  `;
  modal.classList.add('open');
}

function openSearchModal() {
  const modal = document.getElementById('general-modal');
  const content = document.getElementById('modal-body-content');
  content.innerHTML = `
    <span class="text-caption text-secondary uppercase block mb-2">QUICK SEARCH</span>
    <input type="text" placeholder="Search Coats, Trench, Cashmere..." class="input-minimal text-xl mb-6" autofocus onkeyup="if(event.key === 'Enter'){ closeGeneralModal(); navigateTo('shop'); }"/>
    <div class="flex gap-3 text-caption text-secondary">
      <span>POPULAR:</span>
      <a href="#shop" onclick="closeGeneralModal(); navigateTo('shop');" class="underline">Wool Overcoat</a>
      <a href="#shop" onclick="closeGeneralModal(); navigateTo('shop');" class="underline">Cashmere Knit</a>
    </div>
  `;
  modal.classList.add('open');
}

function openLightbox() {
  const currentSrc = document.getElementById('pdp-main-img').src;
  const modal = document.getElementById('general-modal');
  const content = document.getElementById('modal-body-content');
  content.innerHTML = `
    <img src="${currentSrc}" class="w-full max-h-[80vh] object-contain mb-4"/>
    <button onclick="closeGeneralModal()" class="btn-outline w-full py-3">Close Lightbox</button>
  `;
  modal.classList.add('open');
}

function closeGeneralModal() {
  document.getElementById('general-modal').classList.remove('open');
}

// 9. Toast Notifications
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="material-symbols-outlined text-sm">info</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function toggleCurrency() {
  if (state.currency === 'USD') {
    state.currency = 'EUR';
    state.currencySymbol = '€';
    state.currencyRate = 0.92;
  } else if (state.currency === 'EUR') {
    state.currency = 'GBP';
    state.currencySymbol = '£';
    state.currencyRate = 0.78;
  } else {
    state.currency = 'USD';
    state.currencySymbol = '$';
    state.currencyRate = 1.0;
  }
  document.getElementById('currency-btn').textContent = `${state.currency} ${state.currencySymbol}`;
  renderCartUI();
  showToast(`Currency switched to ${state.currency}`);
}

function subscribeNewsletter(e) {
  e.preventDefault();
  showToast('Thank you for subscribing to The Editorial List.');
  e.target.reset();
}
