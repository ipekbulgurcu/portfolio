const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const langSelect = document.getElementById('langSelect');
const isDarkPreferred = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

function applyTheme(theme){
  if(theme === 'dark'){
    root.classList.add('dark');
  }else{
    root.classList.remove('dark');
  }
}

function initTheme(){
  const stored = localStorage.getItem('theme');
  const initial = stored || (isDarkPreferred ? 'dark' : 'light');
  applyTheme(initial);
}

themeToggle.addEventListener('click', ()=>{
  const next = root.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

document.getElementById('year').textContent = new Date().getFullYear();

initTheme();

// Initialize language select from storage in case i18n.js hasn't yet
try{
  const storedLang = localStorage.getItem('lang');
  if(storedLang && langSelect){
    langSelect.value = storedLang;
  }
}catch(_){/* noop */}

