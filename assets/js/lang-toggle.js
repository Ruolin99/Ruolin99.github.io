(function() {
  const STORAGE_KEY = 'site_lang';
  const DEFAULT_LANG = 'cn';

  function getSavedLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem(STORAGE_KEY, lang);
    updateToggleUI(lang);
  }

  function updateToggleUI(lang) {
    const toggleBtn = document.getElementById('lang-toggle-btn');
    if (toggleBtn) {
      const label = toggleBtn.querySelector('.lang-label');
      if (label) {
        label.textContent = lang === 'cn' ? 'EN' : '中';
      }
      toggleBtn.setAttribute('title', lang === 'cn' ? 'Switch to English' : '切换为中文');
    }
  }

  // Initialize immediately to prevent flash
  const currentLang = getSavedLang();
  document.documentElement.setAttribute('data-lang', currentLang);

  document.addEventListener('DOMContentLoaded', function() {
    setLang(getSavedLang());

    const toggleBtn = document.getElementById('lang-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const activeLang = document.documentElement.getAttribute('data-lang') || DEFAULT_LANG;
        const newLang = activeLang === 'cn' ? 'en' : 'cn';
        setLang(newLang);
      });
    }
  });
})();
