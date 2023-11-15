document.addEventListener("DOMContentLoaded", function () {
    const carrosContainer = document.getElementById("carros-container");

    BDAuto.forEach(auto => {
        const carroDiv = document.createElement("div");
        carroDiv.classList.add("card", "mb-4");
        carroDiv.style.width = "18rem";

        const carouselDiv = document.createElement("div");
        carouselDiv.id = "carouselExampleIndicators" + auto.marca.replace(/\s+/g, '');
        carouselDiv.classList.add("carousel", "slide");

        const indicatorsDiv = document.createElement("div");
        indicatorsDiv.classList.add("carousel-indicators");

        const innerDiv = document.createElement("div");
        innerDiv.classList.add("carousel-inner");

        auto.galeria.forEach((imagen, index) => {
            const indicatorButton = document.createElement("button");
            indicatorButton.type = "button";
            indicatorButton.setAttribute("data-bs-target", `#${carouselDiv.id}`);
            indicatorButton.setAttribute("data-bs-slide-to", index.toString());
            if (index === 0) {
                indicatorButton.classList.add("active");
            }
            indicatorsDiv.appendChild(indicatorButton);

            const itemDiv = document.createElement("div");
            itemDiv.classList.add("carousel-item");
            if (index === 0) {
                itemDiv.classList.add("active");
            }

            const img = document.createElement("img");
            img.src = imagen;
            img.classList.add("d-block", "w-100");
            itemDiv.appendChild(img);

            innerDiv.appendChild(itemDiv);
        });

        const prevButton = createControlButton("prev", carouselDiv.id);
        const nextButton = createControlButton("next", carouselDiv.id);

        carouselDiv.appendChild(indicatorsDiv);
        carouselDiv.appendChild(innerDiv);
        carouselDiv.appendChild(prevButton);
        carouselDiv.appendChild(nextButton);

        const cardBodyDiv = document.createElement("div");
        cardBodyDiv.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = auto.marca + " " + auto.modelo;
        const description = document.createElement("p");
        description.classList.add("card-text");
        description.textContent = "Descripción breve";
        const verMasLink = document.createElement("a");
        verMasLink.href = "#";
        verMasLink.classList.add("btn", "btn-danger");
        verMasLink.textContent = "Ver más";

        // Agregar evento de clic al botón "Ver más"
        verMasLink.addEventListener("click", function () {
            mostrarDetallesAuto(auto);
        });

        cardBodyDiv.appendChild(title);
        cardBodyDiv.appendChild(description);
        cardBodyDiv.appendChild(verMasLink);

        carroDiv.appendChild(carouselDiv);
        carroDiv.appendChild(cardBodyDiv);

        carrosContainer.appendChild(carroDiv);
    });

    function createControlButton(type, target) {
        const button = document.createElement("button");
        button.classList.add(`carousel-control-${type}`);
        button.type = "button";
        button.setAttribute("data-bs-target", `#${target}`);
        button.setAttribute("data-bs-slide", type);
        
        const spanIcon = document.createElement("span");
        spanIcon.classList.add(`carousel-control-${type}-icon`);
        spanIcon.setAttribute("aria-hidden", "true");

        const spanText = document.createElement("span");
        spanText.classList.add("visually-hidden");
        spanText.textContent = type.charAt(0).toUpperCase() + type.slice(1);

        button.appendChild(spanIcon);
        button.appendChild(spanText);

        return button;
    }

    function mostrarDetallesAuto(auto) {
        const modalElement = document.createElement("div");
        modalElement.innerHTML = `
            <div class="modal fade" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${auto.marca} ${auto.modelo}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div id="carouselModal" class="carousel slide">
                                <div class="carousel-indicators">
                                    ${auto.galeria.map((_, index) => `<button type="button" data-target="#carousel${index}" data-slide-to="${index}" ${index === 0 ? 'class="active"' : ''}></button>`).join('')}
                                </div>
                                <div class="carousel-inner">
                                    ${auto.galeria.map((imagen, index) => `<div class="carousel-item ${index === 0 ? 'active' : ''}"><img src="${imagen}" class="d-block w-100" alt="..."></div>`).join('')}
                                </div>
                                <button class="carousel-control-prev" type="button" data-target="#carouselModal" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-target="#carouselModal" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <p><strong>Color:</strong> ${auto.color}</p>
                            <p><strong>Puertas:</strong> ${auto.cant_puertas}</p>
                            <p><strong>Año:</strong> ${auto.anio}</p>
                            <p><strong>Kilómetros:</strong> ${auto.km}</p>
                            <p><strong>Motor:</strong> ${auto.motor}</p>
                            <p><strong>Carrocería:</strong> ${auto.carroceria}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    
        // Agregamos el modal al documento
        document.body.appendChild(modalElement);
    
        // Inicializamos el modal usando Bootstrap
        const modal = new bootstrap.Modal(modalElement.querySelector(".modal"));
        modal.show();
    
        // Agregamos un evento para limpiar el modal después de cerrarlo
        modalElement.querySelector(".modal").addEventListener("hidden.bs.modal", function () {
            document.body.removeChild(modalElement);
        });
    }
    
    
    
});
