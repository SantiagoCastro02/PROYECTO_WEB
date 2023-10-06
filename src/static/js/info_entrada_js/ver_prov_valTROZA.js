function goBack() {
    window.history.back();
}
function scrollToTop(event) {
    event.preventDefault();

    function scroll() {
        const currentPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        const scrollStep = Math.max(-currentPosition, -500);
        window.scrollBy(0, scrollStep);

        if (currentPosition > 0) {
            requestAnimationFrame(scroll);
        }
    }

    scroll();
}

// TROZA
document.addEventListener("DOMContentLoaded", function () {
    // Get the required elements
    var volm3TROZA = document.getElementById("M3Prov");
    var vol_m3_totalTROZA = document.getElementById("vol_m3_totalTROZA");
    var diferenciam3TROZA = document.getElementById("diferenciam3TROZA");

    var cantidadtotalPP = document.getElementById("CantidadProvTROZA");
    var unidades_totalPP = document.getElementById("unidades_totalTROZA");
    var diferenciacantidadPP = document.getElementById("diferenciacantidadTROZA");

    // Function to perform the calculations
    function performCalculations() {
        // Parse the values as numbers
        var volm3TROZAValue = parseFloat(volm3TROZA.value);
        var vol_m3_totalTROZAValue = parseFloat(vol_m3_totalTROZA.value);
        var diferenciam3TROZAValue = parseFloat(diferenciam3TROZA.value);

        // Perform the subtraction
        var difference = vol_m3_totalTROZAValue - volm3TROZAValue;

        // Limit the value to two decimal places
        difference = difference.toFixed(3);

        // Update the value of diferenciam3TROZA input field
        diferenciam3TROZA.value = difference;

        // Perform the comparison and set the background color
        diferenciam3TROZA.style.backgroundColor = difference === "0.000" ? "#f1c40f" : vol_m3_totalTROZAValue > volm3TROZAValue ? "#72E25B" : "#FF7373";

        // Perform the subtraction for Cantidad
        var cantidadtotalPPValue = parseFloat(cantidadtotalPP.value);
        var unidades_totalPPValue = parseFloat(unidades_totalPP.value);

        var differenceCantidad = unidades_totalPPValue - cantidadtotalPPValue;

        diferenciacantidadPP.value = differenceCantidad;

        diferenciacantidadPP.style.backgroundColor = differenceCantidad === 0 ? "#f1c40f" : unidades_totalPPValue > cantidadtotalPPValue ? "#72E25B" : "#FF7373";
    }

    // Add event listener to the window object for mousemove event
    window.addEventListener("mousemove", function (event) {
        performCalculations();
    });
});

// Función para ajustar el tamaño del formulario
function ajustarFormulario() {
    // Obtener las tablas y el formulario
    var tablaTroza = document.getElementById('tablaTroza');
    var formulario = document.getElementById('miFormulario');

    // Calcular la altura necesaria
    var altura = Math.max(tablaTroza.offsetHeight);

    // Establecer la altura del formulario
    formulario.style.height = altura + 'px';
}

// Llamar a la función cuando se cargue la página
window.addEventListener('load', ajustarFormulario);


window.onload = function () {
    // Obtener los datos pasados en la URL
    var params = new URLSearchParams(window.location.search);
    var lote = params.get("lote");
    var fecha_ingreso = params.get("fecha_ingreso");
    var fecha = params.get("fecha");
    var proveedor = params.get("proveedor");
    var mp_validado_por = params.get("mp_validado_por");
    var mp_gorgojo = params.get("mp_gorgojo");
    var sino_gorgojo = params.get("sino_gorgojo");
    var mp_partida = params.get("mp_partida");
    var sino_partida = params.get("sino_partida");
    var mp_fisicos = params.get("mp_fisicos");
    var sino_fisicos = params.get("sino_fisicos");
    var mp_quimicos = params.get("mp_quimicos");
    var sino_quimicos = params.get("sino_quimicos");
    var mp_biologico = params.get("mp_biologico");
    var sino_biologico = params.get("sino_biologico");
    var cantidadesxlargoTROZA = params.get("cantidadesxlargoTROZA");
    var url_img = params.get("url_img");
    var imgElement = document.getElementById("imagen");
    var imageTextElement = document.getElementById("imageText");

    if (url_img) {
        // Add a cache-busting parameter to the image URL
        var timestamp = new Date().getTime();
        imgElement.src = url_img + "?timestamp=" + timestamp;
        imgElement.alt = "Imagen";
    } else {
        // If the "url_img" is empty or null, display "IMAGEN" text
        imgElement.style.display = "none"; // Hide the image element
        imageTextElement.style.display = "block"; // Show the text
    }

    var volm3TROZA = params.get("volm3TROZA");
    var M3Prov = params.get("M3Prov");
    var CantidadProvTROZA = params.get("CantidadProvTROZA");
    var vol_m3_totalTROZA = params.get("vol_m3_totalTROZA");
    var unidades_totalTROZA = params.get("unidades_totalTROZA");



    var infotabletroza = params.get("infotabletroza");

    // Split the 'infotabletroza' parameter by the '|' separator to get individual rows
    var rows = infotabletroza.split('|');

    // Reference to the table
    var table = document.getElementById("TROZAtablePROV");

    // Loop through each row and populate the table
    for (var i = 0; i < rows.length; i++) {
        // Split each row by ':' to separate the values
        var values = rows[i].split(':');

        // Create a new row and cells for each value
        var newRow = table.insertRow(table.rows.length);
        var idCell = newRow.insertCell(0);
        var diameterCell = newRow.insertCell(1);
        var lengthCell = newRow.insertCell(2);

        // Populate the cells with the values
        idCell.innerHTML = i + 1;  // Assuming you want to start with 1 as the ID
        diameterCell.innerHTML = values[0];
        lengthCell.innerHTML = values[1];


        newRow.addEventListener("mouseover", function () {
            this.style.backgroundColor = "lightgray"; // Change background color on hover
        });

        newRow.addEventListener("mouseout", function () {
            this.style.backgroundColor = ""; // Reset background color on mouseout
        });
    }


    var puntaTROZA = params.get("puntaTROZA");
    var lado1TROZA = params.get("lado1TROZA");
    var lado2TROZA = params.get("lado2TROZA");
    var lengthTROZA = params.get("lengthTROZA");

    // Eliminar comillas y corchetes y convertir los datos en arrays
    var puntaArray = puntaTROZA.replace(/['\[\]]/g, '').split(',');
    var lado1Array = lado1TROZA.replace(/['\[\]]/g, '').split(',');
    var lado2Array = lado2TROZA.replace(/['\[\]]/g, '').split(',');
    var lengthArray = lengthTROZA.replace(/['\[\]]/g, '').split(',');

    // Get a reference to the table element
    var table = document.getElementById("TROZAtableVAL");

    // Loop through the lado1Array and create a row for each item
    for (var i = 0; i < lado1Array.length; i++) {
        var puntaItem = puntaArray[i];
        var lado1Item = lado1Array[i];
        var lado2Item = lado2Array[i];
        var lengthItem = lengthArray[i];

        // Create a new row and cells
        var newRow = table.insertRow();
        var idCell = newRow.insertCell();
        var puntaCell = newRow.insertCell();
        var lado1Cell = newRow.insertCell();
        var lado2Cell = newRow.insertCell();
        var largoCell = newRow.insertCell();

        // Set the cell values
        idCell.textContent = i + 1; // ID starts from 1
        puntaCell.textContent = puntaItem;
        lado1Cell.textContent = lado1Item;
        lado2Cell.textContent = lado2Item;
        largoCell.textContent = lengthItem; // Set the value from lengthArray

        // Add the hover effect using event listeners
        newRow.addEventListener("mouseover", function () {
            this.style.backgroundColor = "lightgray"; // Change background color on hover
        });

        newRow.addEventListener("mouseout", function () {
            this.style.backgroundColor = ""; // Reset background color on mouseout
        });
    }


    var verificado = params.get("verificado");
    if (verificado === "1") {
        var aceptadoLink = document.querySelector("a[onclick='AceptadoPP()'] i");
        aceptadoLink.style.color = "#34c411";

        // Create and append the "ACEPTADO" text in green
        var aceptadoText = document.createElement("p");
        aceptadoText.textContent = "ACEPTADO";
        aceptadoText.style.color = "#34c411";
        var titleElement = document.querySelector(".title");
        titleElement.insertAdjacentElement("afterend", aceptadoText);
    } else if (verificado === "2") {
        var noAceptadoLink = document.querySelector("a[onclick='NoAceptadoPP()'] i");
        noAceptadoLink.style.color = "#c92929";

        // Create and append the "NO ACEPTADO" text in red
        var noAceptadoText = document.createElement("p");
        noAceptadoText.textContent = "NEGADO";
        noAceptadoText.style.color = "#c92929";
        var titleElement = document.querySelector(".title");
        titleElement.insertAdjacentElement("afterend", noAceptadoText);
    } else if (verificado === "0") {
        // Create and append the "PENDIENTE POR VERIFICAR" text in black
        var pendienteText = document.createElement("p");
        pendienteText.textContent = "PENDIENTE POR VERIFICAR";
        pendienteText.style.color = "grey";
        var titleElement = document.querySelector(".title");
        titleElement.insertAdjacentElement("afterend", pendienteText);
    }

    M3Prov = parseFloat(M3Prov).toFixed(3);
    vol_m3_totalTROZA = parseFloat(vol_m3_totalTROZA).toFixed(3);

    // Llenar los campos de edición con los datos obtenidos
    document.getElementById("lote").value = lote;
    document.getElementById("fecha_ingreso").value = fecha_ingreso;
    document.getElementById("fecha").value = fecha;
    document.getElementById("proveedor").value = proveedor;
    document.getElementById("mp_validado_por").value = mp_validado_por;
    document.getElementById("mp_gorgojo").value = mp_gorgojo;
    document.getElementById("mp_partida").value = mp_partida;
    document.getElementById("mp_fisicos").value = mp_fisicos;
    document.getElementById("mp_quimicos").value = mp_quimicos;
    document.getElementById("mp_biologico").value = mp_biologico;
    document.getElementById("cantidadesxlargoTROZA").value = cantidadesxlargoTROZA;


    document.getElementById("volm3TROZA").value = volm3TROZA;
    document.getElementById("M3Prov").value = M3Prov;
    document.getElementById("CantidadProvTROZA").value = CantidadProvTROZA;
    document.getElementById("vol_m3_totalTROZA").value = vol_m3_totalTROZA;
    document.getElementById("unidades_totalTROZA").value = unidades_totalTROZA;


    // Validar y marcar el checkbox según el valor de sino_medidas
    if (sino_gorgojo === "1") {
        document.getElementById("sino_gorgojo_si").checked = true;
    } else if (sino_gorgojo === "0") {
        document.getElementById("sino_gorgojo_no").checked = true;
    }

    if (sino_partida === "1") {
        document.getElementById("sino_partida_si").checked = true;
    } else if (sino_partida === "0") {
        document.getElementById("sino_partida_no").checked = true;
    }

    if (sino_fisicos === "1") {
        document.getElementById("sino_fisicos_si").checked = true;
    } else if (sino_fisicos === "0") {
        document.getElementById("sino_fisicos_no").checked = true;
    }

    if (sino_quimicos === "1") {
        document.getElementById("sino_quimicos_si").checked = true;
    } else if (sino_quimicos === "0") {
        document.getElementById("sino_quimicos_no").checked = true;
    }

    if (sino_biologico === "1") {
        document.getElementById("sino_biologico_si").checked = true;
    } else if (sino_biologico === "0") {
        document.getElementById("sino_biologico_no").checked = true;
    }
}

function confirmLoteDeletion() {
    var textoIngresado = prompt("Ingrese 'ELIMINAR' para confirmar la eliminación:", "");

    if (textoIngresado === "ELIMINAR") {
        var lote = document.getElementById("lote").value; // Obtener el valor del campo de entrada

        var confirmacion = confirm("¿Estás seguro de realizar este cambio?");

        if (confirmacion) {
            // Utiliza la variable "lote" como el ID de lote
            disableLOTE(lote);

            alert("Lote liberado eliminado con éxito.");
            console.log("Valor del lote: " + lote); // Muestra el valor en la consola
        } else {
            // El usuario canceló la operación.
            alert("Operación cancelada.");
        }
    } else if (textoIngresado !== null) {
        // El usuario ingresó algo diferente a 'ELIMINAR'.
        alert("Texto ingresado incorrecto. La operación ha sido cancelada.");
    } else {
        // El usuario canceló la operación al cerrar la ventana emergente.
        alert("Operación cancelada.");
    }
}

function disableLOTE(lote) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/EliminarTrozaVal', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Obtener el valor del token CSRF del campo oculto
    var csrfToken = document.querySelector('input[name="csrf_token"]').value;

    // Agregar el token CSRF al encabezado de la solicitud
    xhr.setRequestHeader('X-CSRFToken', csrfToken);
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Handle the success response
            console.log(xhr.responseText);
            // Redirect the user to "admin_user.html" after successfully disabling the user
            window.location.href = 'info_entrada_val';
        } else {
            // Handle the error response
            console.error(xhr.responseText);
        }
    };
    xhr.send(JSON.stringify({ lote: lote })); // Send the "lote" data as JSON in the request body
}