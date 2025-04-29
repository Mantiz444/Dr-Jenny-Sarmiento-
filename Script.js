document.addEventListener("DOMContentLoaded", function () {
    const testimonios = document.querySelectorAll(".testimonio");
    const btnAnterior = document.querySelector(".prev-button"); // Ajuste en la selección
    const btnSiguiente = document.querySelector(".next-button"); // Ajuste en la selección

    let indiceActual = 0;

    function mostrarTestimonio(index) {
        testimonios.forEach((testimonio, i) => {
            testimonio.classList.toggle("activo", i === index);
        });
    }

    btnAnterior.addEventListener("click", function () {
        indiceActual = (indiceActual - 1 + testimonios.length) % testimonios.length;
        mostrarTestimonio(indiceActual);
    });

    btnSiguiente.addEventListener("click", function () {
        indiceActual = (indiceActual + 1) % testimonios.length;
        mostrarTestimonio(indiceActual);
    });

    // Mostrar el primer testimonio al cargar la página
    mostrarTestimonio(indiceActual);
});
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
