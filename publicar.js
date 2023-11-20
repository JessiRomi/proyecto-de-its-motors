// Función para crear un carrusel
function createCarousel(auto) {
    const carouselId = `carousel-${auto.marca}-${auto.modelo}`;
    const carouselIndicatorsId = `${carouselId}-indicators`;

    // Crea el elemento del carrusel
    const carousel = document.createElement('div');
    carousel.classList.add('carousel', 'slide', 'mb-3');
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
        img.classList.add('d-block', 'w-100', 'carousel-image');
        img.style.cursor = 'pointer';

        item.appendChild(img);

        inner.appendChild(item);

        // Agrega un evento click para mostrar la imagen ampliada al hacer clic en ella
        img.addEventListener('click', function () {
            showImageInPopup(imagen);
        });

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

    BDAuto.forEach((auto) => {
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

        const link = document.createElement('a');
        link.href = '#';
        link.classList.add('btn', 'btn-danger');
        link.textContent = 'Ver mas';

        // Agrega un evento de clic al enlace "Ver más"
        link.addEventListener('click', () => showCarDetails(auto));

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
// Función para mostrar los detalles del auto
function showCarDetails(auto) {
    const modalContent = `
        <div>
            <h2>${auto.marca} ${auto.modelo}</h2>
            <p><strong>Cantidad de puertas:</strong> ${auto.cant_puertas}</p>
            <p><strong>Color:</strong> ${auto.color}</p>
            <p><strong>Año:</strong> ${auto.anio}</p>
            <p><strong>Kilometraje:</strong> ${auto.km}</p>
            <p><strong>Motor:</strong> ${auto.motor}</p>
            <p><strong>Carrocería:</strong> ${auto.carroceria}</p>
        </div>
        <button onclick="window.close()" style="margin-top: 20px; padding: 10px; background-color: red; color: white; border: none; cursor: pointer;">Cerrar</button>
    `;

    const popupWindow = window.open('', '_blank', 'width=400,height=400');

    popupWindow.document.write(`
        <html>
            <head>
                <title>${auto.marca} ${auto.modelo}</title>
                <style>
                    body {
                        font-family: 'Quicksand', sans-serif;
                        padding: 20px;
                        background-color: #f8f9fa;
                    }

                    h2 {
                        text-decoration: underline;
                        font-size: 24px;
                    }

                    p {
                        margin-bottom: 10px;
                    }

                    button {
                        margin-top: 20px;
                        padding: 10px;
                        background-color: #dc3545;
                        color: white;
                        border: none;
                        cursor: pointer;
                    }

                    button:hover {
                        background-color: #c82333;
                    }
                </style>
            </head>
            <body>
                ${modalContent}
            </body>
        </html>
    `);
    popupWindow.focus();
}

// Función para mostrar la imagen actual del carrusel en una ventana
function showImageInPopup(imageSrc) {
    const imageContent = `
    <div style="text-align: center;">
    <img src="${imageSrc}" style="max-width: 100%; max-height: 100%; display: block; margin: auto;">
    <button onclick="window.close()" style="margin-top: 20px; padding: 10px; background-color: red; color: white; border: none; cursor: pointer;">Cerrar</button>
</div>
    `;

    const popupWindow = window.open('', '_blank', 'width=600,height=600');

    popupWindow.document.write(`
        <html>
            <head>
                <title>Imagen Ampliada</title>
                <style>
                    body {
                        margin: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background-color: #f8f9fa;
                    }

                    img {
                        max-width: 100%;
                        max-height: 100%;
                        display: block;
                        margin: auto;
                    }

                    button {
                        margin-top: 20px;
                        padding: 10px;
                        background-color: #dc3545;
                        color: white;
                        border: none;
                        cursor: pointer;
                    }

                    button:hover {
                        background-color: #c82333;
                    }
                </style>
            </head>
            <body>
                ${imageContent}
            </body>
        </html>
    `);

    popupWindow.focus();
}

// Llama a la función para generar los carruseles al cargar la página
window.addEventListener('DOMContentLoaded', generateCarousels);
