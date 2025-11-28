// Se han actualizado los datos de ejemplo para que puedas ver el efecto completo
const tareas =  [
    { 
      descripcion: "Ampliar aro riego palmera Bismarck.",
      parcela: "Talud",
      estado: "pendiente",
      herramientas: ["mangueras goteo integrado, sacabocados, tijeras de mano"],
      fechaAlta: "25/11",
      fechaBaja: "N/A",
      prioridad: "alta"
    },
    { 
      descripcion: "Reposición tres (3) tajinastes.",
      parcela: "C.G.",
      estado: "pendiente",
      herramientas: ["sacho", "compost", "ortiga"],
      fechaAlta: "25/11",
      fechaBaja: "N/A",
      prioridad: "media"
    },
    { 
      descripcion: "Adornar y plantar fajina.",
      parcela: "Talud",
      estado: "pendiente",
      herramientas: ["sacho, martillo, fucha, pala de jardinería"],
      fechaAlta: "25/11",
      fechaBaja: "N/A",
      prioridad: "baja"
    },
    { 
      descripcion: "Instalar riego en la fajina.",
      parcela: "Talud",
      estado: "pendiente",
      herramientas: ["mangueras goteo integrado, sacabocados, tijeras de mano"],
      fechaAlta: "25/11",
      fechaBaja: "N/A",
      prioridad: "baja"
    },
    { 
      descripcion: "Instalar caseta y plato para los pájaros.",
      parcela: "Talud",
      estado: "finalizada",
      herramientas: ["martillo, alcayatas, pala"],
      fechaAlta: "25/11",
      fechaBaja: "25/11",
      prioridad: "baja"
    },
    { 
      descripcion: "Limpieza de hojas y restos de escombros.",
      parcela: "Explanada",
      estado: "pendiente",
      herramientas: ["rastrillo de abanico", "sopladora"],
      fechaAlta: "25/11",
      fechaBaja: "N/A",
      prioridad: "media"
    },
    { 
      descripcion: "Desbrozar adventicias bordillo.",
      parcela: "talud",
      estado: "pendiente",
      herramientas: ["fucha de mano"],
      fechaAlta: "25/11",
      fechaBaja: "N/A",
      prioridad: "baja"
    },
    { 
      descripcion: "Sustitución manguera picada.",
      parcela: "talud",
      estado: "finalizada",
      herramientas: ["mangueras goteo integrado, sacabocados, tijeras de mano"],
      fechaAlta: "25/11",
      fechaBaja: "25/11",
      prioridad: "alta"
    },
    { 
      descripcion: "Instalar comedero y bebedero de pájaros",
      parcela: "Talud",
      estado: "pendiente",
      herramientas: ["martillo, alcayatas, pala"],
      fechaAlta: "27/11",
      fechaBaja: "N/A",
      prioridad: "baja"
    },
    { 
      descripcion: "Limpiar canaleta de agua",
      parcela: "Talud",
      estado: "pendiente",
      herramientas: ["fucha, rastrillo de abanico, sacho"],
      fechaAlta: "27/11",
      fechaBaja: "N/A",
      prioridad: "alta"
    },
    { 
      descripcion: "Tratamiento trychoderma a los dragos",
      parcela: "Talud",
      estado: "pendiente",
      herramientas: ["mochila pulverizadora"],
      fechaAlta: "27/11",
      fechaBaja: "N/A",
      prioridad: "media"
    },
    { 
      descripcion: "Tratamiento trychoderma a los dragos",
      parcela: "Talud",
      estado: "pendiente",
      herramientas: ["mochila pulverizadora"],
      fechaAlta: "27/11",
      fechaBaja: "N/A",
      prioridad: "media"
    },
    { 
      descripcion: "Reposición de la magarza de la fagina.",
      parcela: "Talud",
      estado: "pendiente",
      herramientas: ["sacho, compost, oritga, pala de mano"],
      fechaAlta: "28/11",
      fechaBaja: "N/A",
      prioridad: "media"
    },
    { 
      descripcion: "Poda buganvilla.",
      parcela: "Talud",
      estado: "pendiente",
      herramientas: ["tijera de poda, pico de loco, tijera de mano"],
      fechaAlta: "28/11",
      fechaBaja: "N/A",
      prioridad: "media"
    },
    { 
      descripcion: "Podar gaura.",
      parcela: "Talud",
      estado: "pendiente",
      herramientas: ["tijera de poda, pico de loco, tijera de mano"],
      fechaAlta: "28/11",
      fechaBaja: "N/A",
      prioridad: "media"
    },
    { 
      descripcion: "Cambiar cintillo del entutorado de la plumeria.",
      parcela: "Talud",
      estado: "finalizada",
      herramientas: ["tijera de mano"],
      fechaAlta: "28/11",
      fechaBaja: "28/11",
      prioridad: "alta"
    },
    { 
      descripcion: "Desbrozar adventicias rspetando la camellera y suncho",
      parcela: "Talud",
      estado: "pendiente",
      herramientas: ["tijera de mano"],
      fechaAlta: "28/11",
      fechaBaja: "N/A",
      prioridad: "baja"
    },
    { 
      descripcion: "Aporte y redistribución de picón",
      parcela: "Talud",
      estado: "pendiente",
      herramientas: ["tijera de mano"],
      fechaAlta: "28/11",
      fechaBaja: "N/A",
      prioridad: "media"
    },

];

function TodasLasTareas(){

  var contenido = document.getElementById("content");
  contenido.innerHTML = "";

    tareas.forEach((element) => {
        // Crea el elemento principal (la tarjeta de tarea)
        var li = document.createElement("li");
        li.classList.add("task-item");
        li.setAttribute('data-estado', element.estado);
        // AÑADIDO: Atributo para la prioridad (para los estilos de borde)
        li.setAttribute('data-prioridad', element.prioridad); 

        // --- Encabezado de la tarjeta (siempre visible) ---
        var header = document.createElement("div");
        header.classList.add("task-header");

        var description = document.createElement("span");
        description.classList.add("task-description");
        description.textContent = element.descripcion;

        var date = document.createElement("span");
        date.classList.add("task-date");
        date.textContent = element.fechaAlta;
        
        header.appendChild(description);
        header.appendChild(date);

        // --- Contenedor de detalles (visible en hover) ---
        var details = document.createElement("div");
        details.classList.add("task-details");

        // Función auxiliar para crear un item de detalle
        const createDetailItem = (label, value) => {
            const div = document.createElement("div");
            div.classList.add("detail-item");
            div.innerHTML = `<strong>${label}:</strong> ${value}`;
            return div;
        };

        // PASO CLAVE: Se incluye la prioridad en los detalles
        details.appendChild(createDetailItem("Prioridad", element.prioridad.toUpperCase())); 
        details.appendChild(createDetailItem("Parcela", element.parcela));
        details.appendChild(createDetailItem("Estado", element.estado.toUpperCase()));
        details.appendChild(createDetailItem("Herramientas", element.herramientas.join(", ")));
        details.appendChild(createDetailItem("Fecha Baja", element.fechaBaja));

        // Ensambla el <li>
        li.appendChild(header);
        li.appendChild(details);
        
        contenido.appendChild(li);
      
    });
}

// La función EncontrarTarea() también debe ser actualizada de forma similar

function EncontrarTarea(){
    const busqueda = document.getElementById("tarea-input").value.toLowerCase();
    const contenido = document.getElementById("content");
    contenido.innerHTML = ""; 

    const tareasFiltradas = tareas.filter(tarea => 
        tarea.descripcion.toLowerCase().includes(busqueda) || 
        tarea.parcela.toLowerCase().includes(busqueda) ||
        tarea.prioridad.toLowerCase().includes(busqueda)
    );

    if (tareasFiltradas.length === 0) {
        contenido.innerHTML = "<p style='text-align: center; margin-top: 20px;'>❌ No se encontraron tareas con ese criterio.</p>";
        return;
    }
    
    tareasFiltradas.forEach((element) => {
        var li = document.createElement("li");
        li.classList.add("task-item");
        li.setAttribute('data-estado', element.estado);
        li.setAttribute('data-prioridad', element.prioridad); 

        var header = document.createElement("div");
        header.classList.add("task-header");

        var description = document.createElement("span");
        description.classList.add("task-description");
        description.textContent = element.descripcion;

        var date = document.createElement("span");
        date.classList.add("task-date");
        date.textContent = element.fechaAlta;
        
        header.appendChild(description);
        header.appendChild(date);

        var details = document.createElement("div");
        details.classList.add("task-details");

        const createDetailItem = (label, value) => {
            const div = document.createElement("div");
            div.classList.add("detail-item");
            div.innerHTML = `<strong>${label}:</strong> ${value}`;
            return div;
        };

        // PASO CLAVE: Se incluye la prioridad en los detalles
        details.appendChild(createDetailItem("Prioridad", element.prioridad.toUpperCase()));
        details.appendChild(createDetailItem("Parcela", element.parcela));
        details.appendChild(createDetailItem("Estado", element.estado.toUpperCase()));
        details.appendChild(createDetailItem("Herramientas", element.herramientas.join(", ")));
        details.appendChild(createDetailItem("Fecha Baja", element.fechaBaja));

        li.appendChild(header);
        li.appendChild(details);
        
        contenido.appendChild(li);
    });
}

TodasLasTareas();