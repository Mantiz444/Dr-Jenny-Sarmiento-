document.addEventListener("DOMContentLoaded", function () {
    let testimonios = document.querySelectorAll('.testimonio');
    let indice = 0;
  
    function mostrarSiguienteTestimonio() {
      testimonios[indice].classList.remove('activo');
      indice = (indice + 1) % testimonios.length;
      testimonios[indice].classList.add('activo');
    }
  
    setInterval(mostrarSiguienteTestimonio, 6000); // cambia cada 4 segundos
  }); // ← AQUÍ va la llave de cierre de la función
// Carrusel de imágenes
const slides = document.querySelectorAll(".slide");
let indexImagen = 0;

function mostrarSlide(nuevoIndex) {
    slides.forEach(slide => slide.classList.remove("activo"));
    slides[nuevoIndex].classList.add("activo");
}

document.querySelector(".prev-button-imagen").addEventListener("click", () => {
    indexImagen = (indexImagen - 1 + slides.length) % slides.length;
    mostrarSlide(indexImagen);
});

document.querySelector(".next-button-imagen").addEventListener("click", () => {
    indexImagen = (indexImagen + 1) % slides.length;
    mostrarSlide(indexImagen);
});

mostrarSlide(indexImagen); // Mostrar la primera imagen al cargar
