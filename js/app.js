/* ── Favorites ── */
function getFavs() {
  return JSON.parse(localStorage.getItem('favs') || '[]');
}
function toggleFav(id) {
  let favs = getFavs();
  const idx = favs.indexOf(id);
  if (idx === -1) { favs.push(id); showToast(t('toast_saved')); }
  else { favs.splice(idx, 1); showToast(t('toast_removed')); }
  localStorage.setItem('favs', JSON.stringify(favs));
  updateFavCount();
  return idx === -1;
}
function isFav(id) { return getFavs().includes(id); }
function updateFavCount() {
  const n = getFavs().length;
  document.querySelectorAll('.fav-count').forEach(el => {
    el.textContent = n;
    el.classList.toggle('hidden', n === 0);
  });
}

/* ── Toast ── */
let toastTimer;
function showToast(msg) {
  let el = document.querySelector('.toast');
  if (!el) { el = document.createElement('div'); el.className='toast'; document.body.appendChild(el); }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

/* ── Build a card ── */
function buildCard(page) {
  const lang = currentLang;
  const fav = isFav(page.id);
  const cat = CATEGORIES.find(c => c.key === page.category) || {};
  const diffLabel = [t('diff1'), t('diff2'), t('diff3')][page.difficulty - 1] || '';

  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.id = page.id;
  card.innerHTML = `
    <div class="card-thumb">
      ${page.thumb}
      ${page.isNew ? `<span class="card-new-badge" data-i18n="new_badge">${t('new_badge')}</span>` : ''}
      <button class="card-fav-btn ${fav ? 'active' : ''}" data-id="${page.id}" aria-label="Opslaan als favoriet">
        <span>${fav ? '♥' : '♡'}</span>
      </button>
    </div>
    <div class="card-body">
      <span class="card-category cat-${page.category}">${cat[lang] || cat.nl || page.category}</span>
      <h3>${page.title[lang] || page.title.nl}</h3>
      <p class="card-desc">${page.desc[lang] || page.desc.nl}</p>
      <div class="card-difficulty">
        <div class="card-difficulty-dots">
          ${[1,2,3].map(n => `<div class="card-difficulty-dot ${n <= page.difficulty ? 'filled' : ''}"></div>`).join('')}
        </div>
        <span>${diffLabel}</span>
      </div>
      <div class="card-actions">
        <button class="btn-download" data-id="${page.id}">⬇ ${t('btn_download')}</button>
        <button class="btn-print" data-id="${page.id}" title="Afdrukken">🖨</button>
      </div>
    </div>
  `;

  card.querySelector('.card-fav-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    const added = toggleFav(page.id);
    const btn = card.querySelector('.card-fav-btn');
    btn.classList.toggle('active', added);
    btn.querySelector('span').textContent = added ? '♥' : '♡';
    if (typeof onFavChange === 'function') onFavChange();
  });

  card.querySelector('.btn-download').addEventListener('click', () => openPrint(page));
  card.querySelector('.btn-print').addEventListener('click', () => openPrint(page));

  return card;
}

/* ── Open print view ── */
function openPrint(page) {
  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html>
<html lang="${currentLang}">
<head>
  <meta charset="UTF-8">
  <title>${page.title[currentLang] || page.title.nl}</title>
  <style>
    body { margin: 0; background: white; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; font-family: Georgia, serif; }
    h1 { font-size: 1.3rem; color: #333; margin: 1.5rem 0 0.5rem; }
    p  { font-size: 0.85rem; color: #888; margin: 0 0 1.5rem; }
    svg { width: min(90vw, 600px); height: auto; border: 1px solid #eee; }
    button { margin-top: 1.5rem; padding: 0.6rem 1.5rem; background: #7C9A8F; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 0.95rem; }
    @media print { button, h1, p { display: none; } svg { width: 100vw; } }
  </style>
</head>
<body>
  ${page.thumb.replace('viewBox="0 0 300 380"', 'viewBox="0 0 300 380" width="600" height="760"')}
  <h1>${page.title[currentLang] || page.title.nl}</h1>
  <p>Colorfocus — Gratis kleurplaten voor volwassenen</p>
  <button onclick="window.print()">🖨 Afdrukken / Opslaan als PDF</button>
</body></html>`);
  win.document.close();
}

/* ── Gallery page logic ── */
function initGallery() {
  const grid      = document.getElementById('gallery-grid');
  const countEl   = document.getElementById('gallery-count');
  const searchEl  = document.getElementById('gallery-search');
  const chipsEl   = document.getElementById('filter-chips');
  if (!grid) return;

  let activeCategory = 'all';
  let searchQuery    = '';

  function render() {
    const lang = currentLang;
    let filtered = PAGES.filter(p => {
      const matchCat  = activeCategory === 'all' || p.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchSrch = !q ||
        p.title.nl.toLowerCase().includes(q) ||
        p.title.en.toLowerCase().includes(q) ||
        p.desc.nl.toLowerCase().includes(q) ||
        p.category.includes(q);
      return matchCat && matchSrch;
    });

    grid.innerHTML = '';
    if (filtered.length === 0) {
      grid.innerHTML = `<div class="no-results">
        <div class="no-results-icon">🎨</div>
        <h3>${t('no_results')}</h3>
        <p>${t('no_results_sub')}</p>
      </div>`;
    } else {
      filtered.forEach(p => grid.appendChild(buildCard(p)));
    }
    const word = filtered.length === 1 ? t('results') : t('results_pl');
    if (countEl) countEl.textContent = `${filtered.length} ${word}`;
  }

  /* Build chips */
  function buildChips() {
    chipsEl.innerHTML = `<button class="chip ${activeCategory==='all'?'active':''}" data-cat="all">${t('filter_all')}</button>`;
    CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `chip ${activeCategory===cat.key ? 'active' : ''}`;
      btn.dataset.cat = cat.key;
      btn.textContent = `${cat.icon} ${cat[currentLang] || cat.nl}`;
      chipsEl.appendChild(btn);
    });
    chipsEl.querySelectorAll('.chip').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.cat;
        buildChips(); render();
      });
    });
  }

  searchEl?.addEventListener('input', e => { searchQuery = e.target.value; render(); });

  document.addEventListener('langchange', () => { buildChips(); render(); });
  buildChips();
  render();
}

/* ── Home page ── */
function initHome() {
  const newGrid      = document.getElementById('new-grid');
  const featuredGrid = document.getElementById('featured-grid');
  const heroSearch   = document.getElementById('hero-search-input');
  const heroBtn      = document.getElementById('hero-search-btn');
  if (!newGrid && !featuredGrid) return;

  function renderHome() {
    if (newGrid) {
      newGrid.innerHTML = '';
      PAGES.filter(p => p.isNew).slice(0, 4).forEach(p => newGrid.appendChild(buildCard(p)));
    }
    if (featuredGrid) {
      featuredGrid.innerHTML = '';
      PAGES.filter(p => !p.isNew).slice(0, 4).forEach(p => featuredGrid.appendChild(buildCard(p)));
    }
  }

  if (heroSearch && heroBtn) {
    const go = () => {
      const q = heroSearch.value.trim();
      window.location.href = `galerij.html${q ? '?q='+encodeURIComponent(q) : ''}`;
    };
    heroBtn.addEventListener('click', go);
    heroSearch.addEventListener('keydown', e => e.key === 'Enter' && go());
  }

  document.addEventListener('langchange', renderHome);
  renderHome();
}

/* ── Favorites page ── */
let onFavChange;
function initFavorites() {
  const grid     = document.getElementById('fav-grid');
  const emptyEl  = document.getElementById('fav-empty');
  if (!grid) return;

  function renderFavs() {
    const favIds = getFavs();
    const pages  = PAGES.filter(p => favIds.includes(p.id));
    grid.innerHTML = '';

    if (pages.length === 0) {
      grid.style.display = 'none';
      if (emptyEl) emptyEl.style.display = 'block';
    } else {
      grid.style.display = '';
      if (emptyEl) emptyEl.style.display = 'none';
      pages.forEach(p => grid.appendChild(buildCard(p)));
    }
  }

  onFavChange = renderFavs;
  document.addEventListener('langchange', renderFavs);
  renderFavs();
}

/* ── Category cards (home) ── */
function initCategoryCards() {
  const grid = document.getElementById('cat-grid');
  if (!grid) return;

  function renderCats() {
    grid.innerHTML = '';
    CATEGORIES.forEach(cat => {
      const count = PAGES.filter(p => p.category === cat.key).length;
      const a = document.createElement('a');
      a.href = `galerij.html?cat=${cat.key}`;
      a.className = 'category-card';
      a.innerHTML = `
        <div class="category-icon">${cat.icon}</div>
        <h3>${cat[currentLang] || cat.nl}</h3>
        <p>${count} kleurplaten</p>
      `;
      grid.appendChild(a);
    });
  }

  document.addEventListener('langchange', renderCats);
  renderCats();
}

/* ── Hero art cards (home preview) ── */
function initHeroArt() {
  const art = document.getElementById('hero-art');
  if (!art) return;
  [0, 2, 5].forEach(i => {
    if (PAGES[i]) {
      const div = document.createElement('div');
      div.className = 'hero-art-card';
      div.innerHTML = PAGES[i].thumb;
      art.appendChild(div);
    }
  });
}

/* ── Pick up URL params (gallery) ── */
function readUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const q   = params.get('q');
  const cat = params.get('cat');
  if (q) {
    const el = document.getElementById('gallery-search');
    if (el) { el.value = q; el.dispatchEvent(new Event('input')); }
  }
  if (cat) {
    const btn = document.querySelector(`.chip[data-cat="${cat}"]`);
    if (btn) btn.click();
  }
}

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', () => {
  initLang();
  updateFavCount();
  initHeroArt();
  initCategoryCards();
  initHome();
  initGallery();
  initFavorites();
  setTimeout(readUrlParams, 50);

  /* Active nav link */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    a.classList.toggle('active', href.includes(path) || (path === 'index.html' && href.includes('index')));
  });
});
