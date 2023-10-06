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

// BLOQUE
document.addEventListener("DOMContentLoaded", function () {
    // Get the required elements
    var pulgadasBLOQUE = document.getElementById("pulgadasBLOQUE");
    var pulg_totalBLOQUE = document.getElementById("pulg_totalBLOQUE");
    var diferenciapulgBLOQUE = document.getElementById("diferenciapulgBLOQUE");

    // Function to execute when mousemove event occurs
    function executeScript() {
        // Parse the values as numbers
        var pulgadasBLOQUEValue = parseFloat(pulgadasBLOQUE.value);
        var pulg_totalBLOQUEValue = parseFloat(pulg_totalBLOQUE.value);
        var diferenciapulgBLOQUEValue = parseFloat(diferenciapulgBLOQUE.value);

        // Perform the subtraction
        var difference = pulg_totalBLOQUEValue - pulgadasBLOQUEValue;

        // Limit the value to two decimal places
        difference = difference.toFixed(2);

        // Update the value of diferenciapulgBLOQUE input field
        diferenciapulgBLOQUE.value = difference;

        // Perform the comparison and set the background color
        if (difference === "0.00") {
            diferenciapulgBLOQUE.style.backgroundColor = "#f1c40f";
        } else if (pulg_totalBLOQUEValue > pulgadasBLOQUEValue) {
            diferenciapulgBLOQUE.style.backgroundColor = "#72E25B";
        } else {
            diferenciapulgBLOQUE.style.backgroundColor = "#FF7373";
        }
    }

    // Add mousemove event listener to the body element
    document.body.addEventListener("mousemove", executeScript);
});

// Función para ajustar el tamaño del formulario
function ajustarFormulario() {
    // Obtener las tablas y el formulario
    var tablaBloque = document.getElementById('tablaBloque');
    var formulario = document.getElementById('miFormulario');

    // Calcular la altura necesaria
    var altura = Math.max(tablaBloque.offsetHeight);

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
    var cantidadesxlargoBLOQUE = params.get("cantidadesxlargoBLOQUE");

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

    var pulgadasBLOQUE = params.get("pulgadasBLOQUE");

    var pulg_totalBLOQUE = params.get("pulg_totalBLOQUE");
    var m3_totalBLOQUE = params.get("m3_totalBLOQUE");
    var unidades_totalBLOQUE = params.get("unidades_totalBLOQUE");



    var infotablebloque = params.get("infotablebloque");

    // Split the 'infotablebloque' parameter by the '|' separator to get individual rows
    var rows = infotablebloque.split('|');

    // Reference to the table
    var table = document.getElementById("BLOQUEtablePROV");

    // Loop through each row and populate the table
    for (var i = 0; i < rows.length; i++) {
        // Split each row by ':' to separate the values
        var values = rows[i].split(':');

        // Create a new row and cells for each value
        var newRow = table.insertRow(table.rows.length);
        var idCell = newRow.insertCell(0);
        var lengthCell = newRow.insertCell(1);
        var cantpulgCell = newRow.insertCell(2);

        // Populate the cells with the values
        idCell.innerHTML = i + 1;  // Assuming you want to start with 1 as the ID
        lengthCell.innerHTML = values[0];
        cantpulgCell.innerHTML = values[1];

        newRow.addEventListener("mouseover", function () {
            this.style.backgroundColor = "lightgray"; // Change background color on hover
        });

        newRow.addEventListener("mouseout", function () {
            this.style.backgroundColor = ""; // Reset background color on mouseout
        });
    }




    var lado1BLOQUE = params.get("lado1BLOQUE");
    var lado2BLOQUE = params.get("lado2BLOQUE");
    var lengthBLOQUE = params.get("lengthBLOQUE");

    // Eliminar comillas y corchetes y convertir los datos en arrays
    var lado1Array = lado1BLOQUE.replace(/['\[\]]/g, '').split(',');
    var lado2Array = lado2BLOQUE.replace(/['\[\]]/g, '').split(',');
    var lengthArray = lengthBLOQUE.replace(/['\[\]]/g, '').split(',');

    // Get a reference to the table element
    var table = document.getElementById("BLOQUEtableVAL");

    // Loop through the lado1Array and create a row for each item
    for (var i = 0; i < lado1Array.length; i++) {
        var lado1Item = lado1Array[i];
        var lado2Item = lado2Array[i];
        var lengthItem = lengthArray[i];

        // Create a new row and cells
        var newRow = table.insertRow();
        var idCell = newRow.insertCell();
        var lado1Cell = newRow.insertCell();
        var lado2Cell = newRow.insertCell();
        var largoCell = newRow.insertCell();

        // Set the cell values
        idCell.textContent = i + 1; // ID starts from 1
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

    m3_totalBLOQUE = parseFloat(m3_totalBLOQUE).toFixed(3);

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
    document.getElementById("cantidadesxlargoBLOQUE").value = cantidadesxlargoBLOQUE;
    document.getElementById("pulgadasBLOQUE").value = pulgadasBLOQUE;

    document.getElementById("pulg_totalBLOQUE").value = pulg_totalBLOQUE;
    document.getElementById("m3_totalBLOQUE").value = m3_totalBLOQUE;
    document.getElementById("unidades_totalBLOQUE").value = unidades_totalBLOQUE;



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
    xhr.open('POST', '/EliminarBloqueVal', true);
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