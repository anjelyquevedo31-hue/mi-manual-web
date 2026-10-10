
/* =========================
   MENÚ DE NAVEGACIÓN
========================= */

const enlaces = document.querySelectorAll(".menu a");
const secciones = document.querySelectorAll("main section[id]");

// Marcar la opción seleccionada
enlaces.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        enlaces.forEach(function(item) {
            item.classList.remove("activo");
        });

        enlace.classList.add("activo");
    });
});

// Identificar la sección visible
function actualizarMenu() {
    let seccionActual = "inicio";

    secciones.forEach(function(seccion) {
        const posicion = seccion.getBoundingClientRect();

        if (posicion.top <= 180 && posicion.bottom > 180) {
            seccionActual = seccion.id;
        }
    });

    enlaces.forEach(function(enlace) {
        enlace.classList.remove("activo");

        if (enlace.getAttribute("href") === "#" + seccionActual) {
            enlace.classList.add("activo");
        }
    });
}

// Actualizar el menú al desplazarse
window.addEventListener("scroll", actualizarMenu);

// Actualizar el menú al cargar la página
window.addEventListener("load", actualizarMenu);
