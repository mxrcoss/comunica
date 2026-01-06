// Toggle menú móvil
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });

    // Toggle submenú en móvil
    const submenuParents = document.querySelectorAll(".submenu-parent > a");
    submenuParents.forEach(parent => {
      parent.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) { // solo en móvil
          e.preventDefault(); // evitar que navegue
          parent.nextElementSibling.classList.toggle("active");
        }
      });
    });

              // Animación al hacer scroll
              document.addEventListener("DOMContentLoaded", () => {
            // Detecta si es móvil
            const esMovil = window.innerWidth < 768;

            if (esMovil) {
              // Si es móvil, mostramos los elementos sin animación
              document.querySelectorAll(".animar-scroll").forEach((el) => {
                el.classList.add("visible");
              });
              return; // salir, no usar IntersectionObserver
            }

            // En escritorio, sí usamos animaciones
            const elementos = document.querySelectorAll(".animar-scroll");

            const observador = new IntersectionObserver((entradas) => {
              entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                  const animacion = entrada.target.getAttribute("data-animacion") || "animate__fadeInUp";
                  entrada.target.classList.add("animate__animated", animacion, "visible");
                  observador.unobserve(entrada.target);
                }
              });
            }, { threshold: 0.2 });

            elementos.forEach((el) => observador.observe(el)); //Activa el observador para todos los elementos .animar-scroll.
          });

    