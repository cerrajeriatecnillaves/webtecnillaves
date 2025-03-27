// Script para manejar el comportamiento de la navegación y otros elementos interactivos

document.addEventListener('DOMContentLoaded', function() {
    // Base de datos de productos (simulada)
    const productDatabase = {
        herramientas: [
            { id: 1, name: '', category: 'herramientas', image: 'images/productos/h1.jpeg' },
            { id: 2, name: '', category: 'herramientas', image: 'images/productos/h2.jpeg' },
            //{ id: 9, name: 'Sierra Circular', category: 'herramientas', image: 'https://via.placeholder.com/300x300?text=Sierra+Circular' },
            //{ id: 11, name: 'Llave Inglesa', category: 'herramientas', image: 'https://via.placeholder.com/300x300?text=Llave+Inglesa' },
            //{ id: 13, name: 'Martillo', category: 'herramientas', image: 'https://via.placeholder.com/300x300?text=Martillo' },
            //{ id: 14, name: 'Alicates', category: 'herramientas', image: 'https://via.placeholder.com/300x300?text=Alicates' },
            //{ id: 15, name: 'Nivel', category: 'herramientas', image: 'https://via.placeholder.com/300x300?text=Nivel' },
            //{ id: 16, name: 'Cinta Métrica', category: 'herramientas', image: 'https://via.placeholder.com/300x300?text=Cinta+Métrica' },
            //{ id: 17, name: 'Serrucho', category: 'herramientas', image: 'https://via.placeholder.com/300x300?text=Serrucho' },
            //{ id: 18, name: 'Lijadora', category: 'herramientas', image: 'https://via.placeholder.com/300x300?text=Lijadora' }
        ],
        electricidad: [
            { id: 4, name: 'Bombillo de luz blanca y luz cálida', category: 'electricidad', image: "images/productos/e1.jpeg" },
            { id: 10, name: 'Panel de incrustar y de sobreponer en luz cálida y blanca', category: 'electricidad', image: 'images/productos/e2.jpeg' },
            { id: 19, name: 'Línea de tomas e interruptores conmutables', category: 'electricidad', image: 'images/productos/e3.jpeg' },
            { id: 20, name: 'Cajetillas y tapas', category: 'electricidad', image: 'images/productos/e4.jpeg' },
            { id: 21, name: 'Cable encauchetado', category: 'electricidad', image: 'images/productos/e5.jpeg' },
            //{ id: 22, name: 'Lámpara de Techo', category: 'electricidad', image: 'https://via.placeholder.com/300x300?text=Lámpara+Techo' },
            //{ id: 23, name: 'Regleta', category: 'electricidad', image: 'https://via.placeholder.com/300x300?text=Regleta' },
            //{ id: 24, name: 'Canaleta', category: 'electricidad', image: 'https://via.placeholder.com/300x300?text=Canaleta' },
            //{ id: 25, name: 'Detector de Cables', category: 'electricidad', image: 'https://via.placeholder.com/300x300?text=Detector+Cables' },
            //{ id: 26, name: 'Transformador', category: 'electricidad', image: 'https://via.placeholder.com/300x300?text=Transformador' }
        ],
        fontaneria: [
            { id: 6, name: '', category: 'fontaneria', image: 'images/productos/t1.jpeg' },
            { id: 12, name: '', category: 'fontaneria', image: 'images/productos/t2.jpeg' },
            //{ id: 27, name: 'Sifón', category: 'fontaneria', image: 'https://via.placeholder.com/300x300?text=Sifón' },
            //{ id: 28, name: 'Llave de Paso', category: 'fontaneria', image: 'https://via.placeholder.com/300x300?text=Llave+Paso' },
            //{ id: 29, name: 'Flexo de Ducha', category: 'fontaneria', image: 'https://via.placeholder.com/300x300?text=Flexo+Ducha' },
            //{ id: 30, name: 'Codo PVC', category: 'fontaneria', image: 'https://via.placeholder.com/300x300?text=Codo+PVC' },
            //{ id: 31, name: 'Junta de Goma', category: 'fontaneria', image: 'https://via.placeholder.com/300x300?text=Junta+Goma' },
            //{ id: 32, name: 'Desatascador', category: 'fontaneria', image: 'https://via.placeholder.com/300x300?text=Desatascador' },
            //{ id: 33, name: 'Válvula', category: 'fontaneria', image: 'https://via.placeholder.com/300x300?text=Válvula' },
            //{ id: 34, name: 'Manguera', category: 'fontaneria', image: 'https://via.placeholder.com/300x300?text=Manguera' }
        ],
        pinturas: [
            //{ id: 5, name: 'Pintura Acrílica', category: 'pinturas', image: 'https://via.placeholder.com/300x300?text=Pintura+Acrílica' },
            //{ id: 35, name: 'Pintura Plástica', category: 'pinturas', image: 'https://via.placeholder.com/300x300?text=Pintura+Plástica' },
            //{ id: 36, name: 'Esmalte Sintético', category: 'pinturas', image: 'https://via.placeholder.com/300x300?text=Esmalte+Sintético' },
            //{ id: 37, name: 'Rodillo', category: 'pinturas', image: 'https://via.placeholder.com/300x300?text=Rodillo' },
            //{ id: 38, name: 'Brocha', category: 'pinturas', image: 'https://via.placeholder.com/300x300?text=Brocha' },
            //{ id: 39, name: 'Cubeta', category: 'pinturas', image: 'https://via.placeholder.com/300x300?text=Cubeta' },
            //{ id: 40, name: 'Cinta de Pintor', category: 'pinturas', image: 'https://via.placeholder.com/300x300?text=Cinta+Pintor' },
            //{ id: 41, name: 'Disolvente', category: 'pinturas', image: 'https://via.placeholder.com/300x300?text=Disolvente' },
            //{ id: 42, name: 'Imprimación', category: 'pinturas', image: 'https://via.placeholder.com/300x300?text=Imprimación' },
            //{ id: 43, name: 'Barniz', category: 'pinturas', image: 'https://via.placeholder.com/300x300?text=Barniz' }
        ],
        cerrajeria: [
            //{ id: 3, name: 'Cerradura de Seguridad', category: 'cerrajeria', image: 'https://via.placeholder.com/300x300?text=Cerradura' },
            //{ id: 44, name: 'Bombín', category: 'cerrajeria', image: 'https://via.placeholder.com/300x300?text=Bombín' },
            //{ id: 45, name: 'Candado', category: 'cerrajeria', image: 'https://via.placeholder.com/300x300?text=Candado' },
            //{ id: 46, name: 'Caja Fuerte', category: 'cerrajeria', image: 'https://via.placeholder.com/300x300?text=Caja+Fuerte' },
            //{ id: 47, name: 'Manilla', category: 'cerrajeria', image: 'https://via.placeholder.com/300x300?text=Manilla' },
            //{ id: 48, name: 'Bisagra', category: 'cerrajeria', image: 'https://via.placeholder.com/300x300?text=Bisagra' },
            //{ id: 49, name: 'Copia de Llave', category: 'cerrajeria', image: 'https://via.placeholder.com/300x300?text=Copia+Llave' },
            //{ id: 50, name: 'Cierre de Seguridad', category: 'cerrajeria', image: 'https://via.placeholder.com/300x300?text=Cierre+Seguridad' },
            //{ id: 51, name: 'Mirilla', category: 'cerrajeria', image: 'https://via.placeholder.com/300x300?text=Mirilla' },
            //{ id: 52, name: 'Tope de Puerta', category: 'cerrajeria', image: 'https://via.placeholder.com/300x300?text=Tope+Puerta' }
        ],
        
        construccion: [
            //{ id: 8, name: 'Cemento', category: 'construccion', image: 'https://via.placeholder.com/300x300?text=Cemento' },
            //{ id: 62, name: 'Yeso', category: 'construccion', image: 'https://via.placeholder.com/300x300?text=Yeso' },
            //{ id: 63, name: 'Ladrillo', category: 'construccion', image: 'https://via.placeholder.com/300x300?text=Ladrillo' },
            //{ id: 64, name: 'Azulejo', category: 'construccion', image: 'https://via.placeholder.com/300x300?text=Azulejo' },
            //{ id: 65, name: 'Tornillo', category: 'construccion', image: 'https://via.placeholder.com/300x300?text=Tornillo' },
            //{ id: 66, name: 'Taco', category: 'construccion', image: 'https://via.placeholder.com/300x300?text=Taco' },
            //{ id: 67, name: 'Espátula', category: 'construccion', image: 'https://via.placeholder.com/300x300?text=Espátula' },
            //{ id: 68, name: 'Llana', category: 'construccion', image: 'https://via.placeholder.com/300x300?text=Llana' },
            //{ id: 69, name: 'Carretilla', category: 'construccion', image: 'https://via.placeholder.com/300x300?text=Carretilla' },
            //{ id: 70, name: 'Hormigonera', category: 'construccion', image: 'https://via.placeholder.com/300x300?text=Hormigonera' }
        ]
    };
        // Mapeo de nombres de categoría para mostrar al usuario
    const categoryNames = {
        herramientas: 'Herramientas',
        electricidad: 'Electricidad',
        fontaneria: 'Tierras y Derivados',
        pinturas: 'Pinturas',
        cerrajeria: 'Cerrajería',
        
        construccion: 'Construcción'
    };


    // Elementos del DOM
    const categoryItems = document.querySelectorAll('.category-item');
    const productsContainer = document.getElementById('products-container');
    const currentCategoryText = document.getElementById('current-category');
    const previewModal = document.getElementById('product-preview-modal');
    const closePreviewModal = document.querySelector('.close-preview-modal');
    const previewImage = document.getElementById('preview-image');
    const previewTitle = document.getElementById('preview-title');
    const previewCategory = document.getElementById('preview-category');

    // Función para cargar productos por categoría
    function loadProducts(category) {
        // Mostrar spinner de carga
        productsContainer.innerHTML = `
            <div class="loading-spinner">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Cargando productos...</p>
            </div>
        `;

        // Actualizar el texto de la categoría actual
        let categoryDisplayName = categoryNames[category] || category;

        currentCategoryText.textContent = categoryDisplayName;

        // Simular una carga con retraso (para demostración)
        setTimeout(() => {
            // Obtener productos de la categoría seleccionada
            const products = productDatabase[category] || [];
            
            // Si no hay productos, mostrar mensaje
            if (products.length === 0) {
                productsContainer.innerHTML = `
                    <div class="no-products">
                        <p>No hay productos disponibles en esta categoría.</p>
                    </div>
                `;
                return;
            }
            
            // Generar HTML para los productos
            let productsHTML = '';
            products.forEach(product => {
                productsHTML += `
                    <div class="product-item" data-id="${product.id}" data-name="${product.name}" data-category="${product.category}">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="product-overlay">
                            <h4>${product.name}</h4>
                            <p>${categoryDisplayName}</p>
                        </div>
                    </div>
                `;
            });
            
            // Actualizar el contenedor de productos
            productsContainer.innerHTML = productsHTML;
            
            // Añadir eventos de clic a los productos
            document.querySelectorAll('.product-item').forEach(item => {
                item.addEventListener('click', function() {
                    const productId = this.getAttribute('data-id');
                    const productName = this.getAttribute('data-name');
                    const productCategory = this.getAttribute('data-category');
                    const productImage = this.querySelector('img').src;
                    
                    // Actualizar modal con la información del producto
                    previewImage.src = productImage;
                    previewTitle.textContent = productName;
                    previewCategory.textContent = productCategory.charAt(0).toUpperCase() + productCategory.slice(1);
                    
                    // Mostrar modal
                    previewModal.style.display = 'block';
                });
            });
        }, 800); // Retraso simulado de 800ms
    }

    // Evento para cambiar de categoría
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Quitar clase activa de todos los items
            categoryItems.forEach(i => i.classList.remove('active'));
            
            // Añadir clase activa al item clickeado
            this.classList.add('active');
            
            // Obtener categoría seleccionada
            const category = this.getAttribute('data-category');
            
            // Cargar productos de esa categoría
            loadProducts(category);
            
            // Scroll suave hasta la sección de productos
            const productsSection = document.getElementById('productos');
            if (productsSection) {
                window.scrollTo({
                    top: productsSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Cerrar modal de vista previa
    closePreviewModal.addEventListener('click', function() {
        previewModal.style.display = 'none';
    });

    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', function(e) {
        if (e.target === previewModal) {
            previewModal.style.display = 'none';
        }
    });

    // Cargar productos iniciales (herramientas)
    loadProducts('herramientas');

    // Scroll suave para los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Botones de llamada y contacto
    const contactButtons = document.querySelectorAll('.btn-blue, .btn-yellow');
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.trim() === 'Llamar ahora' || this.textContent.trim() === 'Contactar ahora') {
                window.location.href = 'tel:+34123456789';
            } else if (this.textContent.trim() === 'Enviar mensaje') {
                // Aquí se manejaría el envío del formulario
                const form = this.closest('form');
                if (form) {
                    // Simulación de envío de formulario
                    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
                    form.reset();
                }
            }
        });
    });
    
    // Formulario de contacto
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí iría la lógica para enviar el formulario
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
            this.reset();
        });
    }
});