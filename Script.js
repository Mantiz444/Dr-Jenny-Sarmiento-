document.addEventListener("DOMContentLoaded", function () {
  // Carrusel de testimonios
  const testimonios = document.querySelectorAll('.testimonio');
  const prevBtnTestimonio = document.querySelector('.prev-button-testimonio');
  const nextBtnTestimonio = document.querySelector('.next-button-testimonio');
  let indice = 0;

  function mostrarTestimonio(index) {
    testimonios.forEach(testimonio => testimonio.classList.remove('activo'));
    testimonios[index].classList.add('activo');
  }

  nextBtnTestimonio.addEventListener('click', function () {
    indice = (indice + 1) % testimonios.length;
    mostrarTestimonio(indice);
  });

  prevBtnTestimonio.addEventListener('click', function () {
    indice = (indice - 1 + testimonios.length) % testimonios.length;
    mostrarTestimonio(indice);
  });

  mostrarTestimonio(indice);

  // Carrusel de imágenes
  const slides = document.querySelectorAll(".slide");
  let indexImagen = 0;

  function mostrarSlide(nuevoIndex) {
      slides.forEach(slide => slide.classList.remove("activo"));
      slides[nuevoIndex].classList.add("activo");
  }

  const prevButton = document.querySelector(".prev-button-imagen");
  const nextButton = document.querySelector(".next-button-imagen");

  if (prevButton && nextButton) {
      prevButton.addEventListener("click", () => {
          indexImagen = (indexImagen - 1 + slides.length) % slides.length;
          mostrarSlide(indexImagen);
      });

      nextButton.addEventListener("click", () => {
          indexImagen = (indexImagen + 1) % slides.length;
          mostrarSlide(indexImagen);
      });
  }

  mostrarSlide(indexImagen); // Mostrar la primera imagen al cargar
});
