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

}


const imagenesAuto1 = [
    './Imagenes/Ford Fiesta Kinetic/ff01.webp',
    './Imagenes/Ford Fiesta Kinetic/ff02.webp',
    './Imagenes/Ford Fiesta Kinetic/ff03.webp',
    './Imagenes/Ford Fiesta Kinetic/ff04.webp'
];

const auto1 = new Auto('Ford', 'Fiesta', '5 puertas', 'Azul', imagenesAuto1, '65.000 km', '1.6', 'hatchback', '2018');

const imagenesAuto2 = [
    './Imagenes/Citroen C5 Aicross/cc501.webp',
    './Imagenes/Citroen C5 Aicross/cc502.webp',
    './Imagenes/Citroen C5 Aicross/cc503.webp',
    './Imagenes/Citroen C5 Aicross/cc504.webp',
];

const auto2 = new Auto('Citroen', 'C5 Aircross', '5 puertas', 'Blanco', imagenesAuto2, '50.000 km', '1.6', 'hatchback', '2018');
