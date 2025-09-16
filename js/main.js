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