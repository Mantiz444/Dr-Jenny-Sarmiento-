document.addEventListener("DOMContentLoaded", function () {
  // Carrusel de testimonios
  let testimonios = document.querySelectorAll('.testimonio');
  let indice = 0;

  function mostrarSiguienteTestimonio() {
      testimonios[indice].classList.remove('activo');
      indice = (indice + 1) % testimonios.length;
      testimonios[indice].classList.add('activo');
  }

  setInterval(mostrarSiguienteTestimonio, 6000);

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
