const navToggle = document.querySelector('.nav-toggle');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.sidebar-overlay');

navToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#2c2c2c'; // Fondo sólido al hacer scroll
    } else {
        navbar.style.backgroundColor = 'transparent'; // Fondo inicial
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        window.scrollTo({
            top: target.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});



//SLIDER TIENDA

// Swiper Configuración
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        900: { slidesPerView: 3 },
        1200: { slidesPerView: 4 }
    }
});

// Base de datos de productos ejemplo
const productos = [
    // Categoría: Tornillos y Pernos
    {
        id: 1,
        nombre: 'Tornillo de acero inoxidable (30 mm)',
        precio: 0.80,
        imagen: '/assets/img/categorias/tornillo-acero-inoxidable.png',
        categoria: 'tornillos',
        tipo: 'venta'
    },
    {
        id: 2,
        nombre: 'Tornillo drywall 1"',
        precio: 0.60,
        imagen: '/assets/img/categorias/tornillo-drywall.png',
        categoria: 'tornillos',
        tipo: 'venta'
    },
    {
        id: 3,
        nombre: 'Perno galvanizado 12 mm x 100 mm',
        precio: 3.00,
        imagen: '/assets/img/categorias/perno-galvanizado.png',
        categoria: 'tornillos',
        tipo: 'venta'
    },
    {
        id: 4,
        nombre: 'Perno para carrocería 8 mm',
        precio: 2.00,
        imagen: '/assets/img/categorias/perno-carroceria.png',
        categoria: 'tornillos',
        tipo: 'venta'
    },
    {
        id: 5,
        nombre: 'Tornillo autoperforante 5 mm',
        precio: 0.50,
        imagen: '/assets/img/categorias/tornillo-autoperforante.png',
        categoria: 'tornillos',
        tipo: 'venta'
    },
    {
        id: 6,
        nombre: 'Tuerca hexagonal M8',
        precio: 0.40,
        imagen: '/assets/img/categorias/tuerca-hexagonal.png',
        categoria: 'tornillos',
        tipo: 'venta'
    },

    // Categoría: Cascos de Seguridad
    {
        id: 7,
        nombre: 'Casco ABS con matraca',
        precio: 25.00,
        imagen: '/assets/img/categorias/casco-abs.png',
        categoria: 'cascos',
        tipo: 'venta'
    },
    {
        id: 8,
        nombre: 'Casco ventilado con barboquejo',
        precio: 60.00,
        imagen: '/assets/img/categorias/casco-ventilado.png',
        categoria: 'cascos',
        tipo: 'venta'
    },
    {
        id: 9,
        nombre: 'Casco dieléctrico blanco',
        precio: 75.00,
        imagen: '/assets/img/categorias/casco-dielectrico-blanco.png',
        categoria: 'cascos',
        tipo: 'venta'
    },
    {
        id: 10,
        nombre: 'Casco económico amarillo (Bellsafe)',
        precio: 7.00,
        imagen: '/assets/img/categorias/casco-economico-amarillo.png',
        categoria: 'cascos',
        tipo: 'venta'
    },
    {
        id: 11,
        nombre: 'Casco SteelPro Almendra',
        precio: 37.00,
        imagen: '/assets/img/categorias/casco-steelpro-almendra.png',
        categoria: 'cascos',
        tipo: 'venta'
    },
    {
        id: 12,
        nombre: 'Casco 3M ventilado',
        precio: 60.90,
        imagen: '/assets/img/categorias/casco-3m-ventilado.png',
        categoria: 'cascos',
        tipo: 'venta'
    },

    // Categoría: Fierro Corrugado
    {
        id: 13,
        nombre: 'Varilla 3/8" corrugada x metro',
        precio: 25.00,
        imagen: '/assets/img/categorias/varilla-3-8-corrugada.png',
        categoria: 'fierro-corrugado',
        tipo: 'venta'
    },
    {
        id: 14,
        nombre: 'Varilla 1/2" corrugada x metro',
        precio: 35.00,
        imagen: '/assets/img/categorias/varilla-1-2-corrugada.png',
        categoria: 'fierro-corrugado',
        tipo: 'venta'
    },
    {
        id: 15,
        nombre: 'Malla electrosoldada 2x2 m x plancha',
        precio: 120.00,
        imagen: '/assets/img/categorias/malla-electrosoldada.png',
        categoria: 'fierro-corrugado',
        tipo: 'venta'
    },
    {
        id: 16,
        nombre: 'Fierro liso 3/8" x metro',
        precio: 23.00,
        imagen: '/assets/img/categorias/fierro-liso.png',
        categoria: 'fierro-corrugado',
        tipo: 'venta'
    },
    {
        id: 17,
        nombre: 'Estribo prearmado 15x15 cm',
        precio: 5.00,
        imagen: '/assets/img/categorias/estribo-prearmado.png',
        categoria: 'fierro-corrugado',
        tipo: 'venta'
    },
    {
        id: 18,
        nombre: 'Alambre recocido x kilo',
        precio: 10.00,
        imagen: '/assets/img/categorias/alambre-recocido.png',
        categoria: 'fierro-corrugado',
        tipo: 'venta'
    },

    // Categoría: Pinturas y Acabados
    {
        id: 19,
        nombre: 'Pintura látex blanca 20 L',
        precio: 150.00,
        imagen: '/assets/img/categorias/pintura-latex-blanca.png',
        categoria: 'pinturas',
        tipo: 'venta'
    },
    {
        id: 20,
        nombre: 'Pintura esmalte sintético x galón',
        precio: 80.00,
        imagen: '/assets/img/categorias/pintura-esmalte-sintetico.png',
        categoria: 'pinturas',
        tipo: 'venta'
    },
    {
        id: 21,
        nombre: 'Barniz para madera 1 L',
        precio: 45.00,
        imagen: '/assets/img/categorias/barniz-para-madera.png',
        categoria: 'pinturas',
        tipo: 'venta'
    },
    {
        id: 22,
        nombre: 'Sellador acrílico 1 galón',
        precio: 60.00,
        imagen: '/assets/img/categorias/sellador-acrilico.png',
        categoria: 'pinturas',
        tipo: 'venta'
    },
    {
        id: 23,
        nombre: 'Imprimante anticorrosivo 1 galón',
        precio: 55.00,
        imagen: '/assets/img/categorias/imprimante-anticorrosivo.png',
        categoria: 'pinturas',
        tipo: 'venta'
    },
    {
        id: 24,
        nombre: 'Rodillo de microfibra',
        precio: 12.00,
        imagen: '/assets/img/categorias/rodillo-de-microfibra.png',
        categoria: 'pinturas',
        tipo: 'venta'
    },

    // Categoría: Cemento y Ladrillos
    {
        id: 25,
        nombre: 'Cemento Andino Ultra 42.5 kg',
        precio: 31.70,
        imagen: '/assets/img/categorias/cemento-andino-ultra.png',
        categoria: 'cemento',
        tipo: 'venta'
    },
    {
        id: 26,
        nombre: 'Cemento Inka GU 42.5 kg',
        precio: 25.80,
        imagen: '/assets/img/categorias/cemento-inka-gu.png',
        categoria: 'cemento',
        tipo: 'venta'
    },
    {
        id: 27,
        nombre: 'Cemento Inka HS Antisalitre',
        precio: 29.00,
        imagen: '/assets/img/categorias/cemento-inka-hs-antisalitre.png',
        categoria: 'cemento',
        tipo: 'venta'
    },
    {
        id: 28,
        nombre: 'Bolsa cemento Sol 42.5 kg',
        precio: 30.00,
        imagen: '/assets/img/categorias/bolsa-cemento-sol.png',
        categoria: 'cemento',
        tipo: 'venta'
    },
    {
        id: 29,
        nombre: 'Ladrillo King Kong c/u',
        precio: 1.20,
        imagen: '/assets/img/categorias/ladrillo-king-kong.png',
        categoria: 'cemento',
        tipo: 'venta'
    },
    {
        id: 30,
        nombre: 'Ladrillo pandereta c/u',
        precio: 0.80,
        imagen: '/assets/img/categorias/ladrillo-pandereta.png',
        categoria: 'cemento',
        tipo: 'venta'
    },

    // Categoría: Herramientas Eléctricas
    {
        id: 31,
        nombre: 'Taladro percutor 600 W',
        precio: 220.00,
        imagen: '/assets/img/categorias/taladro-percutor.png',
        categoria: 'herramientas',
        tipo: 'venta'
    },
    {
        id: 32,
        nombre: 'Amoladora angular 4½"',
        precio: 180.00,
        imagen: '/assets/img/categorias/amoladora-angular.png',
        categoria: 'herramientas',
        tipo: 'venta'
    },
    {
        id: 33,
        nombre: 'Rotomartillo SDS Plus',
        precio: 450.00,
        imagen: '/assets/img/categorias/rotomartillo-sds-plus.png',
        categoria: 'herramientas',
        tipo: 'venta'
    },
    {
        id: 34,
        nombre: 'Sierra circular 7¼"',
        precio: 300.00,
        imagen: '/assets/img/categorias/sierra-circular.png',
        categoria: 'herramientas',
        tipo: 'venta'
    },
    {
        id: 35,
        nombre: 'Pistola de calor',
        precio: 220.00,
        imagen: '/assets/img/categorias/pistola-de-calor.png',
        categoria: 'herramientas',
        tipo: 'venta'
    },
    {
        id: 36,
        nombre: 'Lijadora orbital',
        precio: 200.00,
        imagen: '/assets/img/categorias/lijadora-orbital.png',
        categoria: 'herramientas',
        tipo: 'venta'
    },

    // Categoría: Escaleras Multiusos
    {
        id: 37,
        nombre: 'Escalera aluminio 4 pasos',
        precio: 250.00,
        imagen: '/assets/img/categorias/escalera-aluminio-4-pasos.png',
        categoria: 'escaleras',
        tipo: 'venta'
    },
    {
        id: 38,
        nombre: 'Escalera tijera 6 pasos',
        precio: 350.00,
        imagen: '/assets/img/categorias/escalera-tijera-6-pasos.png',
        categoria: 'escaleras',
        tipo: 'venta'
    },
    {
        id: 39,
        nombre: 'Escalera extensible 7 m',
        precio: 550.00,
        imagen: '/assets/img/categorias/escalera-extensible-7m.png',
        categoria: 'escaleras',
        tipo: 'venta'
    },
    {
        id: 40,
        nombre: 'Escalera articulada multiusos',
        precio: 400.00,
        imagen: '/assets/img/categorias/escalera-articulada-multiusos.png',
        categoria: 'escaleras',
        tipo: 'venta'
    },
    {
        id: 41,
        nombre: 'Escalera telescópica compacta',
        precio: 450.00,
        imagen: '/assets/img/categorias/escalera-telescopica-compacta.png',
        categoria: 'escaleras',
        tipo: 'venta'
    },
    {
        id: 42,
        nombre: 'Escalera con plataforma',
        precio: 550.00,
        imagen: '/assets/img/categorias/escalera-con-plataforma.png',
        categoria: 'escaleras',
        tipo: 'venta'
    },

    // Categoría: Plomería y Accesorios
    {
        id: 43,
        nombre: 'Llave mezcladora para lavadero',
        precio: 120.00,
        imagen: '/assets/img/categorias/llave-mezcladora.png',
        categoria: 'plomeria',
        tipo: 'venta'
    },
    {
        id: 44,
        nombre: 'Codo PVC 90° 2"',
        precio: 5.00,
        imagen: '/assets/img/categorias/codo-pvc-90-2.png',
        categoria: 'plomeria',
        tipo: 'venta'
    },
    {
        id: 45,
        nombre: 'Tubo PVC 2" x 3 m',
        precio: 20.00,
        imagen: '/assets/img/categorias/tubo-pvc-2x3m.png',
        categoria: 'plomeria',
        tipo: 'venta'
    },
    {
        id: 46,
        nombre: 'Tee PVC 4"',
        precio: 35.00,
        imagen: '/assets/img/categorias/tee-pvc-4.png',
        categoria: 'plomeria',
        tipo: 'venta'
    },
    {
        id: 47,
        nombre: 'Tanque Rotoplas 1100 L',
        precio: 1300.00,
        imagen: '/assets/img/categorias/tanque-rotoplas-1100l.png',
        categoria: 'plomeria',
        tipo: 'venta'
    },
    {
        id: 48,
        nombre: 'Llave esférica cromada ½"',
        precio: 12.00,
        imagen: '/assets/img/categorias/llave-esferica-cromada-12.png',
        categoria: 'plomeria',
        tipo: 'venta'
    },
////////////////////////////////////////////////////////////
    // Categoría: Alquiler de Herramientas

    {
        id: 49,
        nombre: 'Rotomartillo SDS Plus',
        precio: 60.00,
        imagen: '../assets/img/categorias/rotomartillo.png',
        categoria: 'alquiler',
        tipo: 'alquiler'
    },
    {
        id: 50,
        nombre: 'Taladro Percutor Profesional',
        precio: 40.00,
        imagen: '../assets/img/categorias/taladro-percutor.png',
        categoria: 'alquiler',
        tipo: 'alquiler'
    },
    {
        id: 51,
        nombre: 'Amoladora Angular 4½"',
        precio: 35.00,
        imagen: '../assets/img/categorias/amoladora-angular.png',
        categoria: 'alquiler',
        tipo: 'alquiler'
    },
    // Equipos de Construcción Pesada
    { 
        id: 52,
        nombre: 'Mezcladora de Concreto 120 L',
        precio: 100.00,
        imagen: '../assets/img/categorias/mezcladora.png',
        categoria: 'alquiler',
        tipo: 'alquiler'
    },
    {
        id: 53,
        nombre: 'Compactadora Tipo Rana',
        precio: 130.00,
        imagen: '../assets/img/categorias/compactadora.png',
        categoria: 'alquiler',
        tipo: 'alquiler'
    },
    {
        id: 54,
        nombre: 'Generador Eléctrico 5 kW',
        precio: 150.00,
        imagen: '../assets/img/categorias/generador.png',
        categoria: 'alquiler',
        tipo: 'alquiler'
    },
    // Escaleras y Andamios
    {
        id: 55,
        nombre: 'Escalera Tijera 6 Pasos',
        precio: 25.00,
        imagen: '../assets/img/categorias/escalera-tijera-6-pasos.png',
        categoria: 'alquiler',
        tipo: 'alquiler'
    },
    {
        id: 56,
        nombre: 'Escalera Extensible 7 m',
        precio: 40.00,
        imagen: '../assets/img/categorias/escalera-extensible-7m.png',
        categoria: 'alquiler',
        tipo: 'alquiler'
    },
    {
        id: 57,
        nombre: 'Andamio Multidireccional 2 m',
        precio: 80.00,
        imagen: '../assets/img/categorias/andamio-multidireccional-2m.png',
        categoria: 'alquiler',
        tipo: 'alquiler'
    },
    // Equipos de Corte y Demolición
    {
        id: 58,
        nombre: 'Cortadora de Concreto',
        precio: 120.00,
        imagen: '../assets/img/categorias/cortadora-concreto.png',
        categoria: 'alquiler',
        tipo: 'alquiler'
    },
    {
        id: 59,
        nombre: 'Demoledor Eléctrico 30 kg',
        precio: 150.00,
        imagen: '../assets/img/categorias/demoledor-electrico.png',
        categoria: 'alquiler',
        tipo: 'alquiler'
    },
    {
        id: 60,
        nombre: 'Sierra Circular Profesional',
        precio: 50.00,
        imagen: '../assets/img/categorias/sierra-circular.png',
        categoria: 'alquiler',
        tipo: 'alquiler'
    }
];


//aqui empieza lo de filtrar y buscar productos
const productosContainer = document.getElementById('productos-container');
const buscadorInput = document.getElementById('buscador');
const ordenSelect = document.getElementById('orden');

// Estado actual de los productos filtrados
let productosMostrados = [...productos]; // Siempre se trabaja sobre este array

// Renderizado
function renderizarProductos(productosFiltrados) {
    productosContainer.innerHTML = '';

    if (productosFiltrados.length === 0) {
        productosContainer.innerHTML = '<p>No se encontraron productos.</p>';
        return;
    }

    productosFiltrados.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('producto-card');
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>S/ ${producto.precio.toFixed(2)}</p>
            <p>Tipo: ${producto.tipo}</p>
            <button class="btn-agregar" data-id="${producto.id}">Agregar al Carrito</button>
        `;
        productosContainer.appendChild(card);
    });
}
// Render inicial
renderizarProductos(productosMostrados);

// Filtro por Categoría
const categorias = document.querySelectorAll('.filter-btn');

categorias.forEach(categoria => {
    categoria.addEventListener('click', () => {
        const categoriaSeleccionada = categoria.getAttribute('data-category');

        const productosFiltrados = categoriaSeleccionada === 'todos'
            ? productos
            : productos.filter(p => p.categoria === categoriaSeleccionada);

        renderizarProductos(productosFiltrados);
    });
});

// Búsqueda en tiempo real
buscadorInput.addEventListener('input', e => {
    const texto = e.target.value.toLowerCase();

    const filtrados = productosMostrados.length > 0 ? productosMostrados : productos;

    const productosFiltrados = filtrados.filter(producto => producto.nombre.toLowerCase().includes(texto));

    renderizarProductos(productosFiltrados);
});

// Ordenar productos
ordenSelect.addEventListener('change', () => {
    ordenarProductos(ordenSelect.value);
    renderizarProductos(productosMostrados);
});

function ordenarProductos(criterio) {
    if (criterio === 'precio-asc') {
        productosMostrados.sort((a, b) => a.precio - b.precio);
    } else if (criterio === 'precio-desc') {
        productosMostrados.sort((a, b) => b.precio - a.precio);
    } else if (criterio === 'nombre-asc') {
        productosMostrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (criterio === 'nombre-desc') {
        productosMostrados.sort((a, b) => b.nombre.localeCompare(a.nombre));
    }
}

// carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const cartIcon = document.getElementById('cart-icon');
const cartContainer = document.getElementById('cart-container');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const clearCartBtn = document.getElementById('clear-cart');
const cartCount = document.getElementById('cart-count');

// Mostrar/Ocultar carrito
if (cartIcon && cartContainer) {
    cartIcon.addEventListener('click', () => {
        cartContainer.classList.toggle('hidden');
    });
}

// Agregar productos al carrito
document.addEventListener('click', e => {
    if (e.target.classList.contains('btn-agregar')) {
        const id = parseInt(e.target.getAttribute('data-id'));
        const producto = productos.find(p => p.id === id);
        agregarAlCarrito(producto);
    }
});

// Agregar al carrito
function agregarAlCarrito(producto) {
    const itemExistente = carrito.find(item => item.id === producto.id);
    if (itemExistente) {
        itemExistente.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    actualizarCarrito();
}

// Renderizar carrito
function renderizarCarrito() {
    if (!cartItems || !cartTotal || !cartCount) return; // Protección por si no existen en esta página

    cartItems.innerHTML = '';
    let total = 0;

    carrito.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <p>${item.nombre} x ${item.cantidad} - S/ ${(item.precio * item.cantidad).toFixed(2)}</p>
            <button class="btn-restar" data-id="${item.id}">-</button>
        `;
        cartItems.appendChild(div);
        total += item.precio * item.cantidad;
    });

    cartTotal.textContent = `Total: S/ ${total.toFixed(2)}`;
    actualizarContador();
}

// Restar productos
if (cartItems) {
    cartItems.addEventListener('click', e => {
        if (e.target.classList.contains('btn-restar')) {
            const id = parseInt(e.target.getAttribute('data-id'));
            restarProducto(id);
        }
    });
}

function restarProducto(id) {
    const index = carrito.findIndex(item => item.id === id);
    if (index !== -1) {
        carrito[index].cantidad -= 1;

        if (carrito[index].cantidad === 0) {
            carrito.splice(index, 1);
        }
        actualizarCarrito();
    }
}

// Vaciar carrito
if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
        carrito = [];
        actualizarCarrito();
    });
}

// Actualizar almacenamiento y render
function actualizarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderizarCarrito();
}

// Actualizar contador de items
function actualizarContador() {
    if (!cartCount) return; // Protección
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    cartCount.textContent = totalItems;
}

// Cargar carrito al iniciar
actualizarCarrito();


