const PROJECTS = {
  python_opp_kutuphane: {
    title: 'python_opp_kutuphane',
    subtitle: 'Python OOP kavramları ile basit kütüphane uygulaması',
    image: './projects/1.1.png',
    repo: 'https://github.com/ipekbulgurcu/python_opp_kutuphane'
  },
  image_processing_application: {
    title: 'Image-Processing-Application',
    subtitle: 'Jupyter üzerinde görüntü işleme deneyleri',
    image: './projects/2.png',
    repo: 'https://github.com/ipekbulgurcu/-Image-Processing-Application'
  },
  deep_learning_fashion: {
    title: 'Deep-Learning-with-Fashion-Dataset',
    subtitle: 'Fashion MNIST ile sınıflandırma denemeleri',
    image: './projects/3.png',
    repo: 'https://github.com/ipekbulgurcu/Deep-Learning-with-Fashion-Dataset'
  },
  uv_fork: {
    title: 'uv (fork)',
    subtitle: 'Rust tabanlı hızlı Python paket yöneticisi projesinden fork',
    image: './projects/4.png',
    repo: 'https://github.com/ipekbulgurcu/uv'
  }
};

function getParam(name){
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function render(){
  const id = getParam('id');
  const data = PROJECTS[id];
  if(!data){
    document.getElementById('project-title').textContent = 'Proje bulunamadı';
    document.getElementById('project-subtitle').textContent = 'Geçerli bir proje kimliği ile gelin.';
    return;
  }
  document.getElementById('project-title').textContent = data.title;
  document.getElementById('project-subtitle').textContent = data.subtitle;
  const img = document.getElementById('project-image');
  img.src = data.image;
  img.alt = data.title + ' görseli';
  const link = document.getElementById('project-repo');
  link.href = data.repo;
}

render();


