// publicar.js

// Función para crear un carrusel
function createCarousel(auto) {
    const carouselId = `carousel-${auto.marca}-${auto.modelo}`;
    const carouselIndicatorsId = `${carouselId}-indicators`;

    // Crea el elemento del carrusel
    const carousel = document.createElement('div');
    carousel.classList.add('carousel', 'slide', 'mb-3'); // Añadida clase 'mb-3' para margen inferior
    carousel.id = carouselId;

    // Crea los indicadores del carrusel
    const indicators = document.createElement('div');
    indicators.classList.add('carousel-indicators');
    indicators.id = carouselIndicatorsId;

    // Crea los elementos de las imágenes del carrusel
    const inner = document.createElement('div');
    inner.classList.add('carousel-inner');

    auto.galeria.forEach((imagen, index) => {
        const indicator = document.createElement('button');
        indicator.setAttribute('type', 'button');
        indicator.setAttribute('data-bs-target', `#${carouselId}`);
        indicator.setAttribute('data-bs-slide-to', index.toString());
        if (index === 0) {
            indicator.classList.add('active');
        }

        indicators.appendChild(indicator);

        const item = document.createElement('div');
        item.classList.add('carousel-item');
        if (index === 0) {
            item.classList.add('active');
        }

        const img = document.createElement('img');
        img.src = imagen;
        img.classList.add('d-block', 'w-100');
        item.appendChild(img);

        inner.appendChild(item);
    });

    // Agrega los botones de control del carrusel
    const prevButton = document.createElement('button');
    prevButton.classList.add('carousel-control-prev');
    prevButton.setAttribute('type', 'button');
    prevButton.setAttribute('data-bs-target', `#${carouselId}`);
    prevButton.setAttribute('data-bs-slide', 'prev');

    const prevIcon = document.createElement('span');
    prevIcon.classList.add('carousel-control-prev-icon');
    prevIcon.setAttribute('aria-hidden', 'true');

    prevButton.appendChild(prevIcon);

    const prevText = document.createElement('span');
    prevText.classList.add('visually-hidden');
    prevText.textContent = 'Previous';

    prevButton.appendChild(prevText);

    const nextButton = document.createElement('button');
    nextButton.classList.add('carousel-control-next');
    nextButton.setAttribute('type', 'button');
    nextButton.setAttribute('data-bs-target', `#${carouselId}`);
    nextButton.setAttribute('data-bs-slide', 'next');

    const nextIcon = document.createElement('span');
    nextIcon.classList.add('carousel-control-next-icon');
    nextIcon.setAttribute('aria-hidden', 'true');

    nextButton.appendChild(nextIcon);

    const nextText = document.createElement('span');
    nextText.classList.add('visually-hidden');
    nextText.textContent = 'Next';

    nextButton.appendChild(nextText);

    // Agrega todos los elementos al carrusel
    carousel.appendChild(indicators);
    carousel.appendChild(inner);
    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);

    return carousel;
}

// Función principal para generar los carruseles
function generateCarousels() {
    const productosContainer = document.querySelector('.productos-container .productos-cards');

    BDAuto.forEach((auto, index) => {
        // Ajusta la clase 'col-md-4' a 'col-md-3' o 'col-md-2' según tus preferencias
        const colClass = 'col-md-3';

        // Crea la tarjeta del producto
        const card = document.createElement('div');
        card.classList.add('card', colClass, 'mb-3');

        // Crea el carrusel y agrega la información del auto
        const carousel = createCarousel(auto);

        // Crea el cuerpo de la tarjeta
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = `${auto.marca} ${auto.modelo}`;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = 'Descripcion breve';

        const link = document.createElement('a');
        link.href = '#'; // Usaremos "#" como un marcador de posición
        link.classList.add('btn', 'btn-danger');
        link.textContent = 'Ver mas';

        // Asigna un identificador único al botón "Ver más" usando el índice
        link.id = `verMasBtn${index}`;

        // Añade un evento de clic al botón "Ver más" para abrir el modal
        link.addEventListener('click', () => openModal(auto, index));

        // Agrega todos los elementos a la tarjeta
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(link);

        card.appendChild(carousel);
        card.appendChild(cardBody);

        // Agrega la tarjeta al contenedor de productos
        productosContainer.appendChild(card);
    });
}

function openModal(auto, index) {
    // Identificador único del modal
    const modalId = `modalAuto${index}`;

    // Crea el modal
    const modalElement = new bootstrap.Modal(document.getElementById(modalId), {
        keyboard: false,
        backdrop: 'static' // Evita que el modal se cierre al hacer clic fuera de él
    });

    // Muestra el modal
    modalElement.show();
}

// Llama a la función para generar los carruseles al cargar la página
window.addEventListener('DOMContentLoaded', generateCarousels);
