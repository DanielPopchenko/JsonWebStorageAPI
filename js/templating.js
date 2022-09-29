const tech = ['HTML', 'CSS', 'JS', 'React'];

const galleryRef = document.querySelector('.js-gallery');

const markup = tech.map(el => `<li><a href="">${el}</a></li>`).join('');

galleryRef.insertAdjacentHTML('beforeend', markup);
