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

    // Filtrado de productos en material didáctico
    function filtrar(categoria) {
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => {
        if (categoria === 'todos' || producto.dataset.categoria === categoria) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}
//-----------------datos de productos(JSON)-----------------
const productos = [
    {
    id: 1,
    nombre: "Chanchito Feliz",
    descripcion: "Juguete sensorial para estimulación temprana.",
    detalle: "El Chanchito Feliz es un juguete didáctico diseñado para estimular el desarrollo sensorial en niños pequeños."+ 
              "Ayuda a fortalecer la motricidad fina, la coordinación mano-ojo y el reconocimiento de colores y texturas. "+
              "Fabricado con materiales seguros y resistentes, ideal para el uso diario en casa o en terapia.",
    edad: "1 a 4 años",
    beneficios: [
        "Estimula los sentidos",
        "Mejora la motricidad fina",
        "Favorece la coordinación mano-ojo",
        "Desarrolla el aprendizaje temprano"
    ],
    material: "Plástico ABS no tóxico",
    advertencia: "Usar bajo la supervisión de un adulto.",
    precio: 60,
    descuento: 45,
    categoria: "sensorial",
    imagen: "../assets/img/juguete1.jpg",
    etiqueta: "Nuevo"
}

,
    {
        id: 2,
        nombre: "Bloques Didácticos",
        descripcion: "Bloques de encaje educativo.",
        detalle: "Favorecen la creatividad, el pensamiento lógico y el reconocimiento de formas y colores.",
        edad: "2 a 5 años",
        beneficios: [
            "Desarrolla creatividad",
            "Estimula pensamiento lógico",
            "Mejora coordinación"
        ],
        material: "Madera ecológica",
        advertencia: "No apto para menores de 2 años.",
        precio: 80,
        imagen: "../assets/img/juguete2.jpg"
    },
    {
    id: 3,
    nombre: "Chanchito Feliz",
    descripcion: "Juguete sensorial para estimulación temprana.",
    detalle: "El Chanchito Feliz es un juguete didáctico diseñado para estimular el desarrollo sensorial en niños pequeños."+ 
              "Ayuda a fortalecer la motricidad fina, la coordinación mano-ojo y el reconocimiento de colores y texturas. "+
              "Fabricado con materiales seguros y resistentes, ideal para el uso diario en casa o en terapia.",
    edad: "1 a 4 años",
    beneficios: [
        "Estimula los sentidos",
        "Mejora la motricidad fina",
        "Favorece la coordinación mano-ojo",
        "Desarrolla el aprendizaje temprano"
    ],
    material: "Plástico ABS no tóxico",
    advertencia: "Usar bajo la supervisión de un adulto.",
    precio: 60,
    descuento: 45,
    categoria: "sensorial",
    imagen: "../assets/img/juguete1.jpg",
    etiqueta: "Nuevo"
}
];
//-----------------Render automático de productos-----------------
const contenedor = document.getElementById("contenedor-productos");

function renderProductos(lista) {
    contenedor.innerHTML = "";

    lista.forEach(prod => {
        contenedor.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 producto fade-in" data-cat="${prod.categoria}">
            <div class="card h-100 producto-card position-relative">

                ${prod.etiqueta ? `<span class="badge bg-success position-absolute top-0 start-0 m-2">${prod.etiqueta}</span>` : ""}

                <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">

                <div class="card-body text-center">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text text-muted small">${prod.descripcion}</p>

                    ${
                        prod.descuento
                        ? `<p class="mb-0 text-decoration-line-through text-muted">S/ ${prod.precio}.00</p>
                           <p class="precio">S/ ${prod.descuento}.00</p>`
                        : `<p class="precio">S/ ${prod.precio}.00</p>`
                    }
                </div>

                <div class="card-footer bg-white border-0 text-center d-grid gap-2">
                    <button class="btn btn-outline-secondary"
                        onclick="abrirModal(${prod.id})">
                        Ver detalles
                    </button>

                    <a href="https://wa.me/51963917074?text=Hola,%20quiero%20comprar%20${encodeURIComponent(prod.nombre)}"
                       target="_blank"
                       class="btn btn-warning">
                        Comprar
                    </a>
                </div>
            </div>
        </div>`;
    });
}

renderProductos(productos);
//-----------------fín de Render automático de productos-----------------


//-----------------JS del modal de productos-----------------
function abrirModal(id) {
    const prod = productos.find(p => p.id === id);
    if (!prod) return;

    document.getElementById("modalTitulo").textContent = prod.nombre;
    document.getElementById("modalImagen").src = prod.imagen;

    document.getElementById("modalDescripcion").textContent = prod.descripcion;
    document.getElementById("modalDetalle").textContent = prod.detalle;
    document.getElementById("modalEdad").textContent = prod.edad;
    document.getElementById("modalMaterial").textContent = prod.material;
    document.getElementById("modalAdvertencia").textContent = prod.advertencia;

    // Beneficios
    const lista = document.getElementById("modalBeneficios");
    lista.innerHTML = "";
    prod.beneficios.forEach(b => {
        lista.innerHTML += `
            <li>
                <i class="bi bi-check-circle-fill text-success me-2"></i>${b}
            </li>`;
    });

    // Precio
    document.getElementById("modalPrecio").textContent =
        `S/ ${(prod.descuento ?? prod.precio)}.00`;

    // Botón comprar
    document.getElementById("modalComprar").href =
        `https://wa.me/51963917074?text=Hola,%20quiero%20comprar%20${encodeURIComponent(prod.nombre)}`;

    bootstrap.Modal
        .getOrCreateInstance(document.getElementById("modalProducto"))
        .show();
}



//-----------------fín del modal de productos-----------------
//-----------------filtro con animación-----------------
document.querySelectorAll(".filtro-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const cat = btn.dataset.cat;

        document.querySelectorAll(".producto").forEach(p => {
            p.style.display =
                cat === "todos" || p.dataset.cat === cat
                ? "block"
                : "none";
        });
    });
});
