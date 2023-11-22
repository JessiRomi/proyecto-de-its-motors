//algunos datos de prueba
var autos = [
    { marca: "Ford", modelo: "Focus", anio: "2022", precio: 2500000 },
    { marca: "Chevrolet", modelo: "Cruze", anio: "2021", precio: 2200000 },
    { marca: "Toyota", modelo: "Corolla", anio: "2023", precio: 2800000 },
    { marca: "Fiat", modelo: "Tipo", anio: "2020", precio: 2000000 },
    { marca: "Renault", modelo: "Clio", anio: "2022", precio: 2400000 },
    { marca: "Volkswagen", modelo: "Golf", anio: "2022", precio: 2400000 },
    { marca: "Peugeot", modelo: "208", anio: "2021", precio: 2100000 },
    { marca: "Citroen", modelo: "C3", anio: "2023", precio: 2600000 },
    { marca: "Jeep", modelo: "Renegade", anio: "2020", precio: 2300000 },  
    { marca: "Ford", modelo: "Focus", anio: "2021", precio: 2400000 },
    { marca: "Chevrolet", modelo: "Cruze", anio: "2020", precio: 2100000 },
    { marca: "Toyota", modelo: "Corolla", anio: "2022", precio: 2600000 },
    { marca: "Fiat", modelo: "Tipo", anio: "2023", precio: 2800000 },
    { marca: "Renault", modelo: "Clio", anio: "2021", precio: 2000000 },
    { marca: "Volkswagen", modelo: "Golf", anio: "2023", precio: 2700000 },
    { marca: "Peugeot", modelo: "208", anio: "2020", precio: 1800000 },
    { marca: "Citroen", modelo: "C3", anio: "2022", precio: 2500000 },
    { marca: "Jeep", modelo: "Renegade", anio: "2021", precio: 2300000 },  
    { marca: "Ford", modelo: "Focus", anio: "2023", precio: 2600000 },
    { marca: "Chevrolet", modelo: "Cruze", anio: "2020", precio: 2200000 },
    { marca: "Toyota", modelo: "Corolla", anio: "2022", precio: 2400000 },
    { marca: "Fiat", modelo: "Tipo", anio: "2023", precio: 2800000 },
    { marca: "Renault", modelo: "Clio", anio: "2021", precio: 2000000 },
    { marca: "Volkswagen", modelo: "Golf", anio: "2023", precio: 2700000 },
    { marca: "Peugeot", modelo: "208", anio: "2020", precio: 1800000 },
    { marca: "Citroen", modelo: "C3", anio: "2022", precio: 2500000 },
    { marca: "Jeep", modelo: "Renegade", anio: "2021", precio: 2300000 },
  ];
  
  
// Obtiene todas las marcas del arreglo
var marcasUnicas = [...new Set(autos.map(auto => auto.marca))];

// Llena el menu de seleccion de marcas
var marcaSelect = document.getElementById("marca");
marcasUnicas.forEach(function(marca) {
  var option = document.createElement("option");
  option.value = marca.toLowerCase();
  option.text = marca;
  marcaSelect.appendChild(option);
});

// Llena dinámicamente el menu de años
var aniosUnicos = [...new Set(autos.map(auto => auto.anio))];
var anioSelect = document.getElementById("anio");
aniosUnicos.forEach(function(anio) {
  var option = document.createElement("option");
  option.value = anio;
  option.text = anio;
  anioSelect.appendChild(option);
});

function updateModelos() {
    var marcaSeleccionada = document.getElementById("marca").value;
    var modelosSelect = document.getElementById("modelo");
  
    modelosSelect.innerHTML = '<option value="">Seleccione un modelo</option>';
  
    // Filtra modelos segun la marca seleccionada
    var modelosFiltrados = [...new Set(autos
      .filter(function (auto) {
        return auto.marca.toLowerCase() === marcaSeleccionada.toLowerCase();
      })
      .map(function (auto) {
        return auto.modelo;
      }))];
  
    // Agrega opciones de modelos filtrados al select
    modelosFiltrados.forEach(function (modelo) {
      var option = document.createElement("option");
      option.value = modelo.toLowerCase();
      option.text = modelo;
      modelosSelect.appendChild(option);
    });
  }

function updateAnios() {
    var marcaSeleccionada = document.getElementById("marca").value;
    var modeloSeleccionado = document.getElementById("modelo").value;
    var aniosSelect = document.getElementById("anio");
 
    aniosSelect.innerHTML = '<option value="">Seleccione un año</option>';
  
    // Filtra años según la marca y modelo seleccionados
    var aniosFiltrados = autos
      .filter(function (auto) {
        return (
          auto.marca.toLowerCase() === marcaSeleccionada.toLowerCase() &&
          auto.modelo.toLowerCase() === modeloSeleccionado.toLowerCase()
        );
      })
      .map(function (auto) {
        return auto.anio;
      });
  
    // Agrega opciones de años filtrados al select
    aniosFiltrados.forEach(function (anio) {
      var option = document.createElement("option");
      option.value = anio;
      option.text = anio;
      aniosSelect.appendChild(option);
    });
  }

function showPrecio() {
  var marcaSeleccionada = document.getElementById("marca").value;
  var modeloSeleccionado = document.getElementById("modelo").value;
  var anioSeleccionado = document.getElementById("anio").value;

  // Busca el auto correspondiente en el arreglo
  var autoSeleccionado = autos.find(function(auto) {
    return auto.marca.toLowerCase() === marcaSeleccionada.toLowerCase() &&
           auto.modelo.toLowerCase() === modeloSeleccionado.toLowerCase() &&
           auto.anio === anioSeleccionado;
  });

  // Muestra el precio en el resultado
  var resultadoDiv = document.getElementById("resultado");
  if (autoSeleccionado) {
    resultadoDiv.innerHTML = "<p>Precio: $" + autoSeleccionado.precio + "</p>";
  } else {
    resultadoDiv.innerHTML = "<p>No se encontró información para el auto seleccionado.</p>";
  }
}