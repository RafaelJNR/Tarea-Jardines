// Se han actualizado los datos de ejemplo para que puedas ver el efecto completo
const tareas =  [
    { 
      descripcion: "Ampliar aro riego palmera Bismarck.",
      parcela: "Talud",
      estado: "pendiente",
      herramientas: ["mangueras goteo integrado, sacabocados, tijeras de mano"],
      fechaAlta: "25/11",
      fechaBaja: "N/A"
    },
    { 
      descripcion: "Reposición tres (3) tajinastes.",
      parcela: "C.G.",
      estado: "pendiente",
      herramientas: ["sacho", "compost", "ortiga"],
      fechaAlta: "25/11",
      fechaBaja: "N/A"
    },
    { 
      descripcion: "Adornar y plantar fajina.",
      parcela: "Talud",
      estado: "pendiente",
      herramientas: ["sacho, martillo, fucha, pala de jardinería"],
      fechaAlta: "25/11",
      fechaBaja: "N/A"
    },
    { 
      descripcion: "Instalar riego en la fajina.",
      parcela: "Talud",
      estado: "pendiente",
      herramientas: ["mangueras goteo integrado, sacabocados, tijeras de mano"],
      fechaAlta: "25/11",
      fechaBaja: "N/A"
    },
    { 
      descripcion: "Instalar caseta y plato para los pájaros.",
      parcela: "Talud",
      estado: "finalizada",
      herramientas: ["martillo, alcayatas, pala"],
      fechaAlta: "25/11",
      fechaBaja: "2025-11-25"
    },
    { 
      descripcion: "Limpieza de hojas y restos de escombros.",
      parcela: "Explanada",
      estado: "pendiente",
      herramientas: ["rastrillo de abanico", "sopladora"],
      fechaAlta: "25/11",
      fechaBaja: "N/A"
    },
    { 
      descripcion: "Desbrozar adventicias bordillo.",
      parcela: "talud",
      estado: "pendiente",
      herramientas: ["fucha de mano"],
      fechaAlta: "25/11",
      fechaBaja: "N/A"
    },
];

function TodasLasTareas(){

  var contenido = document.getElementById("content");
  contenido.innerHTML = "";

    tareas.forEach((element) => {
        // Crea el elemento principal (la tarjeta de tarea)
        var li = document.createElement("li");
        li.classList.add("task-item");
        li.setAttribute('data-estado', element.estado); // Usado para estilos condicionales

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

        // Añade los campos de detalle
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

function EncontrarTarea(){
    const busqueda = document.getElementById("tarea-input").value.toLowerCase();
    const contenido = document.getElementById("content");
    contenido.innerHTML = ""; // Limpiar antes de mostrar resultados

    // Filtra las tareas basadas en la descripción o parcela
    const tareasFiltradas = tareas.filter(tarea => 
        tarea.descripcion.toLowerCase().includes(busqueda) || 
        tarea.parcela.toLowerCase().includes(busqueda)
    );

    if (tareasFiltradas.length === 0) {
        contenido.innerHTML = "<p style='text-align: center; margin-top: 20px;'>❌ No se encontraron tareas con ese criterio.</p>";
        return;
    }
    
    // Función de renderizado para reutilizar la lógica de TodasLasTareas
    tareasFiltradas.forEach((element) => {
        // Reutilizar la lógica de creación de la tarjeta
        var li = document.createElement("li");
        li.classList.add("task-item");
        li.setAttribute('data-estado', element.estado); 

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

        details.appendChild(createDetailItem("Parcela", element.parcela));
        details.appendChild(createDetailItem("Estado", element.estado.toUpperCase()));
        details.appendChild(createDetailItem("Herramientas", element.herramientas.join(", ")));
        details.appendChild(createDetailItem("Fecha Baja", element.fechaBaja));

        li.appendChild(header);
        li.appendChild(details);
        
        contenido.appendChild(li);
    });
}

// Inicializa la visualización de todas las tareas al cargar la página
TodasLasTareas();