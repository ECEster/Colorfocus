const LANG = {
  nl: {
    nav_home:       'Home',
    nav_gallery:    'Galerij',
    nav_favorites:  'Favorieten',
    nav_tips:       'Printtips',
    hero_badge:     'Gratis • Altijd nieuw',
    hero_title:     'Kleurplaten voor Volwassenen',
    hero_sub:       'Ontdek meer dan 18 prachtige kleurplaten — van mandala\'s tot historische kostuums. Gratis downloaden en printen.',
    hero_search_ph: 'Zoek een kleurplaat...',
    hero_btn:       'Zoeken',
    stat_pages:     'kleurplaten',
    stat_cats:      'categorieën',
    stat_free:      'gratis',
    new_week_tag:   'Wekelijks Nieuw',
    new_week_title: 'Nieuw deze week',
    see_all:        'Bekijk alle',
    cat_title:      'Verken per Categorie',
    cat_tag:        'Categorieën',
    featured_title: 'Uitgelichte Kleurplaten',
    featured_tag:   'Populair',
    btn_download:   'Download PDF',
    btn_print:      '🖨',
    btn_save:       '♡',
    btn_saved:      '♥',
    difficulty:     'Moeilijkheid',
    diff1:          'Eenvoudig',
    diff2:          'Gemiddeld',
    diff3:          'Gedetailleerd',
    gallery_title:  'Alle Kleurplaten',
    gallery_sub:    'Vind jouw perfecte kleurplaat',
    filter_all:     'Alle',
    search_ph:      'Zoek op naam of thema...',
    results:        'resultaat',
    results_pl:     'resultaten',
    no_results:     'Geen kleurplaten gevonden',
    no_results_sub: 'Probeer een andere zoekterm of categorie',
    fav_title:      'Mijn Favorieten',
    fav_sub:        'Jouw opgeslagen kleurplaten',
    fav_empty_title:'Nog geen favorieten',
    fav_empty_sub:  'Klik op het hartje op een kleurplaat om hem hier op te slaan.',
    fav_btn:        'Bekijk alle kleurplaten',
    toast_saved:    'Opgeslagen bij favorieten ♥',
    toast_removed:  'Verwijderd uit favorieten',
    tips_title:     'Printtips & Kleurtechnieken',
    tips_sub:       'Haal het beste uit je kleurplaten met deze handige tips.',
    footer_desc:    'Gratis kleurplaten voor volwassenen — wekelijks aangevuld met nieuwe ontwerpen.',
    footer_pages:   'Pagina\'s',
    footer_cats:    'Categorieën',
    new_badge:      'Nieuw',
    weekly_badge:   '🗓 Nieuw deze week',
    pages_count:    '18+',
    cats_count:     '9',
    free_label:     '100%',
  },
  en: {
    nav_home:       'Home',
    nav_gallery:    'Gallery',
    nav_favorites:  'Favorites',
    nav_tips:       'Print Tips',
    hero_badge:     'Free • Updated weekly',
    hero_title:     'Coloring Pages for Adults',
    hero_sub:       'Discover 18+ beautiful coloring pages — from mandalas to historical costumes. Free to download and print.',
    hero_search_ph: 'Search a coloring page...',
    hero_btn:       'Search',
    stat_pages:     'coloring pages',
    stat_cats:      'categories',
    stat_free:      'free',
    new_week_tag:   'Weekly New',
    new_week_title: 'New this week',
    see_all:        'View all',
    cat_title:      'Browse by Category',
    cat_tag:        'Categories',
    featured_title: 'Featured Coloring Pages',
    featured_tag:   'Popular',
    btn_download:   'Download PDF',
    btn_print:      '🖨',
    btn_save:       '♡',
    btn_saved:      '♥',
    difficulty:     'Difficulty',
    diff1:          'Easy',
    diff2:          'Medium',
    diff3:          'Detailed',
    gallery_title:  'All Coloring Pages',
    gallery_sub:    'Find your perfect coloring page',
    filter_all:     'All',
    search_ph:      'Search by name or theme...',
    results:        'result',
    results_pl:     'results',
    no_results:     'No coloring pages found',
    no_results_sub: 'Try a different search term or category',
    fav_title:      'My Favorites',
    fav_sub:        'Your saved coloring pages',
    fav_empty_title:'No favorites yet',
    fav_empty_sub:  'Click the heart on any coloring page to save it here.',
    fav_btn:        'Browse all coloring pages',
    toast_saved:    'Saved to favorites ♥',
    toast_removed:  'Removed from favorites',
    tips_title:     'Print Tips & Colouring Techniques',
    tips_sub:       'Get the most from your coloring pages with these handy tips.',
    footer_desc:    'Free adult coloring pages — updated weekly with new designs.',
    footer_pages:   'Pages',
    footer_cats:    'Categories',
    new_badge:      'New',
    weekly_badge:   '🗓 New this week',
    pages_count:    '18+',
    cats_count:     '9',
    free_label:     '100%',
  }
};

let currentLang = localStorage.getItem('lang') || 'nl';

function t(key) {
  return LANG[currentLang][key] || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    if (attr) el.setAttribute(attr, t(key));
    else el.textContent = t(key);
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
}

function initLang() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  setLang(currentLang);
}
