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