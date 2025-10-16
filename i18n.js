const TRANSLATIONS = {
  tr: {
    nav: { about: 'Hakkımda', projects: 'Projeler', contact: 'İletişim' },
    hero: {
      title: 'Merhaba, ben İpek',
      subtitle: 'Python, görüntü işleme ve derin öğrenme odaklı projeler geliştiriyorum.'
    },
    cta: { github: 'GitHub', linkedin: 'LinkedIn' },
    experience: {
      title: 'Deneyim', subtitle: 'LinkedIn öne çıkan iş deneyimleri',
      placeholderTitle: 'Deneyim bilgileri LinkedIn\'den',
      placeholderDesc: 'Detaylar için profilime göz atın'
    },
    education: {
      title: 'Eğitim', subtitle: 'LinkedIn eğitim bilgileri',
      placeholderTitle: 'Eğitim bilgileri LinkedIn\'den',
      placeholderDesc: 'Detaylar için profilime göz atın'
    },
    skills: { title: 'Yetenekler', subtitle: 'LinkedIn onaylı yetenekler', viewAll: 'LinkedIn\'de Tümü', cv: 'Özgeçmiş (PDF)' },
    about: {
      title: 'Hakkımda', subtitle: 'Kısa profil',
      paragraph: 'Python ekosistemi ile makine öğrenmesi ve görüntü işleme projeleri geliştiriyorum. Çalışmalarım arasında veri ön işleme, modelleme ve deney tekrarlanabilirliğine odaklanan küçük-orta ölçekli uygulamalar yer alıyor. Açık kaynak dünyasını yakından takip ediyor, öğrendiklerimi projelerle pekiştiriyorum.',
      githubProfile: 'GitHub Profil', linkedin: 'LinkedIn'
    },
    projects: { title: 'Projeler', subtitle: 'Seçilmiş çalışmalar' },
    common: { repo: 'Repo', details: 'Detay', viewOnLinkedIn: 'LinkedIn\'de Gör' },
    contact: {
      title: 'İletişim', subtitle: 'Bana ulaşın',
      desc: 'İş birlikleri veya sorularınız için LinkedIn üzerinden mesaj gönderebilirsiniz.',
      cta: 'LinkedIn\'de Mesaj Gönder', githubProfile: 'GitHub Profil'
    },
    project: { openRepo: 'Repoyu Aç', back: '← Geri Dön' }
  },
  en: {
    nav: { about: 'About', projects: 'Projects', contact: 'Contact' },
    hero: {
      title: 'Hi, I\'m Ipek',
      subtitle: 'I build projects focused on Python, image processing, and deep learning.'
    },
    cta: { github: 'GitHub', linkedin: 'LinkedIn' },
    experience: {
      title: 'Experience', subtitle: 'Highlighted work experience from LinkedIn',
      placeholderTitle: 'Experience details from LinkedIn',
      placeholderDesc: 'See my profile for details'
    },
    education: {
      title: 'Education', subtitle: 'Education details from LinkedIn',
      placeholderTitle: 'Education details from LinkedIn',
      placeholderDesc: 'See my profile for details'
    },
    skills: { title: 'Skills', subtitle: 'LinkedIn endorsed skills', viewAll: 'See all on LinkedIn', cv: 'Resume (PDF)' },
    about: {
      title: 'About', subtitle: 'Short profile',
      paragraph: 'I develop machine learning and image processing projects in the Python ecosystem. My work includes data preprocessing, modeling, and small-to-medium applications focused on experiment reproducibility. I closely follow open-source and reinforce my learning through projects.',
      githubProfile: 'GitHub Profile', linkedin: 'LinkedIn'
    },
    projects: { title: 'Projects', subtitle: 'Selected work' },
    common: { repo: 'Repo', details: 'Details', viewOnLinkedIn: 'View on LinkedIn' },
    contact: {
      title: 'Contact', subtitle: 'Get in touch',
      desc: 'For collaborations or questions, you can message me on LinkedIn.',
      cta: 'Message on LinkedIn', githubProfile: 'GitHub Profile'
    },
    project: { openRepo: 'Open Repository', back: '← Back' }
  }
};

function applyTranslations(lang){
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.tr;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined) ? obj[k] : undefined, dict);
    if(typeof value === 'string'){
      el.textContent = value;
    }
  });
}

function initI18n(){
  const select = document.getElementById('langSelect');
  const stored = localStorage.getItem('lang') || 'tr';
  select.value = stored;
  try{ document.documentElement.setAttribute('lang', stored); }catch(_){ }
  applyTranslations(stored);
  select.addEventListener('change', ()=>{
    const next = select.value;
    localStorage.setItem('lang', next);
    try{ document.documentElement.setAttribute('lang', next); }catch(_){ }
    applyTranslations(next);
  });
}

document.addEventListener('DOMContentLoaded', initI18n);

