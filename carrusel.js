// carrusel.js
(function(){
  // Para cada uno de los cuatro carruseles:
  document.querySelectorAll('.carrusel').forEach(c => {
    const imgs = JSON.parse(c.dataset.images);
    let idx = 0;
    const imgEl = c.querySelector('img');
    const prev = c.querySelector('.anterior');
    const next = c.querySelector('.siguiente');

    prev.addEventListener('click', () => {
      idx = (idx - 1 + imgs.length) % imgs.length;
      imgEl.src = encodeURI(imgs[idx]);
    });
    next.addEventListener('click', () => {
      idx = (idx + 1) % imgs.length;
      imgEl.src = encodeURI(imgs[idx]);
    });
  });
})();
