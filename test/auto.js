class Auto {
    #marca;
    #modelo;
    #cant_puertas;
    #color;
    #galeria;
    #anio;
    #km;
    #motor;
    #carroceria;

    constructor(marca, modelo, cant_puertas, color, galeria, km, motor, carroceria, anio) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#cant_puertas = cant_puertas;
        this.#color = color;
        this.#galeria = galeria;
        this.#km = km;
        this.#motor = motor;
        this.#carroceria = carroceria;
        this.#anio = anio;
        this.currentIndex = 0;
    }

    get marca() {
        return this.#marca;
    }

    get modelo() {
        return this.#modelo;
    }

    get cant_puertas() {
        return this.#cant_puertas;
    }

    get color() {
        return this.#color;
    }

    get galeria() {
        return this.#galeria;
    }

    get km() {
        return this.#km;
    }

    get motor() {
        return this.#motor;
    }

    get carroceria() {
        return this.#carroceria;
    }

    get anio() {
        return this.#anio;
    }

    showImage(index) {
        const carImages = document.querySelectorAll('.car-image');

        if (index >= this.galeria.length) {
            index = 0;
        } else if (index < 0) {
            index = this.galeria.length - 1;
        }

        carImages.forEach((imagen, i) => {
            if (i === index) {
                imagen.style.display = 'block';
            } else {
                imagen.style.display = 'none';
            }
        });

        this.currentIndex = index;
    }
}
function updateAutoInfo(auto) {
    const infoElements = document.querySelectorAll('.car-info span');
    infoElements[0].textContent = auto.marca;
    infoElements[1].textContent = auto.modelo;
    infoElements[2].textContent = auto.cant_puertas;
    infoElements[3].textContent = auto.color;
    infoElements[4].textContent = auto.km;
    infoElements[5].textContent = auto.motor;
    infoElements[6].textContent = auto.carroceria;
    infoElements[7].textContent = auto.anio;
}

function updateCarouselImages(auto) {
    const carSlides = document.querySelector('.car-slides');
    carSlides.innerHTML = '';

    auto.galeria.forEach((imagenURL, index) => {
        const imagen = document.createElement('img');
        imagen.src = imagenURL;
        imagen.alt = auto.modelo;
        imagen.classList.add('car-image');
        carSlides.appendChild(imagen);

        if (index !== 0) {
            imagen.style.display = 'none';
        }
    });
}

function showAutoInfo(auto) {
    updateAutoInfo(auto);
    updateCarouselImages(auto);
}

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

prevButton.addEventListener('click', () => {
    auto1.showImage(auto1.currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    auto1.showImage(auto1.currentIndex + 1);
});

const imagenesAuto1 = [
    'ff01.webp',
    'ff02.webp',
    'ff03.webp',
];

const auto1 = new Auto('Ford', 'Fiesta', '5 puertas', 'Azul', imagenesAuto1, '65.000 km', '1.6', 'hatchback', '2018');

showAutoInfo(auto1);
auto1.showImage(0);