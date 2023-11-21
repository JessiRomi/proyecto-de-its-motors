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

//construimos Ford Fiesta Kinetic
const imagenesAuto1 = [
    './Imagenes/ff/ff01.webp',
    './Imagenes/ff/ff02.webp',
    './Imagenes/ff/ff03.webp',
    './Imagenes/ff/ff04.webp'
];

const auto1 = new Auto('Ford', 'Fiesta', '5 puertas', 'Azul', imagenesAuto1, '65.000 km', '1.6', 'hatchback', '2018');

//Construimos Citroen C5 Aircross
const imagenesAuto2 = [
    './Imagenes/cc5/cc501.webp',
    './Imagenes/cc5/cc502.webp',
    './Imagenes/cc5/cc503.webp',
    './Imagenes/cc5/cc504.webp',
];

const auto2 = new Auto('Citroen', 'C5_Aircross', '5 puertas', 'blanco', imagenesAuto2, '50.000 km', '1.6', 'hatchback', '2018');

//Construimos Chevrolet S10
const imagenesAuto3 = [
    './Imagenes/cs10/cs1001.webp',
    './Imagenes/cs10/cs1002.webp',
    './Imagenes/cs10/cs1003.webp',
    './Imagenes/cs10/cs1004.webp',
    './Imagenes/cs10/cs1005.webp',
];
const auto3 = new Auto('Chevrolet', 'S10', '4 puertas', 'verde', imagenesAuto3, '90.000 km', '1.6', 'hatchback', '2018');

//Construimos Fiat 500
const imagenesAuto4 = [
    './Imagenes/f500/f50001.webp',
    './Imagenes/f500/f50002.webp',
    './Imagenes/f500/f50003.webp',
    './Imagenes/f500/f50004.webp',
];
const auto4 = new Auto('Fiat', '500', '5 puertas', 'rojo', imagenesAuto4, '90.000 km', '1.6', 'hatchback', '2018');

//Construimos jeep patriot
const imagenesAuto5 = [
    './Imagenes/jp/jp01.webp',
    './Imagenes/jp/jp02.jpg',
    './Imagenes/jp/jp03.jpg',
    './Imagenes/jp/jp04.jpg',
];
const auto5 = new Auto('Jeep', 'Patriot', '5 puertas', 'gris', imagenesAuto5, '90.000 km', '1.6', 'hatchback', '2018');

//Construimos Peugeot Partner
const imagenesAuto6 = [
    './Imagenes/pp/pp01.webp',
    './Imagenes/pp/pp02.webp',
];
const auto6 = new Auto('Peugeot', 'Partner', '3 puertas', 'gris', imagenesAuto6, '90.000 km', '1.6', 'hatchback', '2018');

//Constrimos Renault Sandero
const imagenesAuto7 = [
    './Imagenes/rs/rs01.jpg',
    './Imagenes/rs/rs02.jpg',
    './Imagenes/rs/rs03.jpg',
    './Imagenes/rs/rs04.jpg',
    './Imagenes/rs/rs05.jpg',
];
const auto7 = new Auto('Renault', 'Sandero', '5 puertas', 'azul', imagenesAuto7, '90.000 km', '1.6', 'hatchback', '2018');

//Construimos Toyota Yaris
const imagenesAuto8 = [
    './Imagenes/ty/ty01.png',
    './Imagenes/ty/ty02.jpeg',
    './Imagenes/ty/ty03.jpeg',
    './Imagenes/ty/ty04.jpeg',
    './Imagenes/ty/ty05.jpeg',
    './Imagenes/ty/ty06.jpeg',
    './Imagenes/ty/ty07.jpeg',
];
const auto8 = new Auto('Toyota', 'Yaris', '5 puertas', 'rojo', imagenesAuto8, '90.000 km', '1.6', 'hatchback', '2018');

//Construimos volkswagen Gold Trend
const imagenesAuto9 = [
    './Imagenes/vg/vg01.webp',
    './Imagenes/vg/vg02.webp',
    './Imagenes/vg/vg03.webp',
    './Imagenes/vg/vg04.webp',
];
const auto9 = new Auto('volkswagen', 'Gold_Trend', '5 puertas', 'rojo', imagenesAuto9, '90.000 km', '1.6', 'hatchback', '2018');

//Construimos volkswagen Suran
const imagenesAuto10 = [
    './Imagenes/vs/vs01.webp',
    './Imagenes/vs/vs02.webp',
    './Imagenes/vs/vs03.webp',
    './Imagenes/vs/vs04.webp',
];
const auto10 = new Auto('volkswagen', 'Suran', '5 puertas', 'gris', imagenesAuto10, '90.000 km', '1.6', 'hatchback', '2018');

const BDAuto = [
    auto1,auto2,auto3,auto4,auto5,auto6,auto7,auto8,auto9,auto10
]