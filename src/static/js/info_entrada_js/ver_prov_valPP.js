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

// PP
document.addEventListener("mousemove", function () {
    // Get the required elements
    var m3PP = document.getElementById("m3PP");
    var m3_totalPP = document.getElementById("m3_totalPP");
    var diferenciam3PP = document.getElementById("diferenciam3PP");

    var pulgadasBLOQUE = document.getElementById("pulgPP");
    var pulg_totalBLOQUE = document.getElementById("pulg_totalPP");
    var diferenciapulgBLOQUE = document.getElementById("diferenciapulgPP");

    var cantidadtotalPP = document.getElementById("cantidadtotalPP");
    var unidades_totalPP = document.getElementById("unidades_totalPP");
    var diferenciacantidadPP = document.getElementById("diferenciacantidadPP");

    // Perform the subtraction for pulgPP
    var pulgadasBLOQUEValue = parseFloat(pulgadasBLOQUE.value);
    var pulg_totalBLOQUEValue = parseFloat(pulg_totalBLOQUE.value);

    // Perform the subtraction for pulgPP
    var differencePulg = pulg_totalBLOQUEValue - pulgadasBLOQUEValue;

    // Limit the value to two decimal places
    differencePulg = differencePulg.toFixed(2);

    // Update the value of diferenciapulgBLOQUE input field
    diferenciapulgBLOQUE.value = differencePulg;

    // Perform the comparison and set the background color
    if (differencePulg === "0.00") {
        diferenciapulgBLOQUE.style.backgroundColor = "#f1c40f";
    } else if (pulg_totalBLOQUEValue > pulgadasBLOQUEValue) {
        diferenciapulgBLOQUE.style.backgroundColor = "#72E25B";
    } else {
        diferenciapulgBLOQUE.style.backgroundColor = "#FF7373";
    }

    // Perform the subtraction for m3PP
    var m3PPValue = parseFloat(m3PP.value);
    var m3_totalPPValue = parseFloat(m3_totalPP.value);

    var differenceM3 = m3_totalPPValue - m3PPValue;
    differenceM3 = differenceM3.toFixed(3);

    diferenciam3PP.value = differenceM3;

    if (differenceM3 === "0.000") {
        diferenciam3PP.style.backgroundColor = "#f1c40f";
    } else if (m3_totalPPValue > m3PPValue) {
        diferenciam3PP.style.backgroundColor = "#72E25B";
    } else {
        diferenciam3PP.style.backgroundColor = "#FF7373";
    }

    // Perform the subtraction for Cantidad
    var cantidadtotalPPValue = parseFloat(cantidadtotalPP.value);
    var unidades_totalPPValue = parseFloat(unidades_totalPP.value);

    var differenceCantidad = unidades_totalPPValue - cantidadtotalPPValue;

    diferenciacantidadPP.value = differenceCantidad;

    if (differenceCantidad === 0) {
        diferenciacantidadPP.style.backgroundColor = "#f1c40f";
    } else if (unidades_totalPPValue > cantidadtotalPPValue) {
        diferenciacantidadPP.style.backgroundColor = "#72E25B";
    } else {
        diferenciacantidadPP.style.backgroundColor = "#FF7373";
    }
});
// Función para ajustar el tamaño del formulario
function ajustarFormulario() {
    // Obtener las tablas y el formulario
    var tablaPP = document.getElementById('tablaPP');
    var formulario = document.getElementById('miFormulario');

    // Calcular la altura necesaria
    var altura = Math.max(tablaPP.offsetHeight);

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
    var mp_validado_por = params.get("mp_validado_porPP");
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
    var cantidadesxlargoPP = params.get("cantidadesxlargoPP");
    
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

    var m3PP = params.get("m3PP");
    var pulgPP = params.get("pulgPP");
    var cantidadtotalPP = params.get("cantidadtotalPP");
    var unidades_totalPP = params.get("unidades_totalPP");
    var pulg_totalPP = params.get("pulg_totalPP");
    var m3_totalPP = params.get("m3_totalPP");

    var infotablepp = params.get("infotablepp");
    var dataArray = infotablepp.split('|');

    // Get a reference to the table element
    var table = document.getElementById("PPtablePROV");

    // Function to handle drag and drop
    function handleDragStart(e) {
        e.dataTransfer.setData("text/plain", e.target.id);
        e.target.classList.add("dragged");
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("text/plain");
        var sourceRow = document.getElementById(data);
        var targetRow = e.target.closest("tr");
        if (sourceRow && targetRow) {
            // Swap the rows in the table
            var temp = document.createElement("tr");
            targetRow.parentNode.insertBefore(temp, targetRow);
            sourceRow.parentNode.insertBefore(targetRow, sourceRow);
            temp.parentNode.insertBefore(sourceRow, temp);
            temp.parentNode.removeChild(temp);
        }
        sourceRow.classList.remove("dragged");
    }

    // Loop through the dataArray and create a row for each item
    for (var i = 0; i < dataArray.length; i++) {
        var rowData = dataArray[i].trim();
        var rowDataArray = rowData.split('x');
        var largUndsArray = rowDataArray[2].trim().split(':');

        // Convert the decimals to integers if they are zero or show the full value if non-zero
        rowDataArray = rowDataArray.map(function (item) {
            var parts = item.trim().split('.');
            if (parts.length === 2) {
                if (parts[1] === "0") {
                    return parts[0];
                } else {
                    return parts.join('.');
                }
            }
            return item.trim();
        });

        // Create a new row and cells
        var newRow = table.insertRow();
        newRow.draggable = true; // Make the row draggable
        newRow.id = "row" + (i + 1); // Assign a unique ID to each row
        var idCell = newRow.insertCell();
        var calCell = newRow.insertCell();
        var anchCell = newRow.insertCell();
        var largCell = newRow.insertCell();
        var undsCell = newRow.insertCell();

        // Set the cell values
        idCell.textContent = i + 1; // ID starts from 1
        calCell.textContent = rowDataArray[0];
        anchCell.textContent = rowDataArray[1];
        largCell.textContent = largUndsArray[0];
        undsCell.textContent = largUndsArray[1];

        // Add drag and drop event listeners
        newRow.addEventListener("dragstart", handleDragStart);
        newRow.addEventListener("dragover", handleDragOver);
        newRow.addEventListener("drop", handleDrop);

        // Add the hover effect using event listeners
        newRow.addEventListener("mouseover", function () {
            this.style.backgroundColor = "lightgray"; // Change background color on hover
        });

        newRow.addEventListener("mouseout", function () {
            this.style.backgroundColor = ""; // Reset background color on mouseout
        });
    }



    var cantidadesxlargoPP = params.get("cantidadesxlargoPP");
    var dataArray = cantidadesxlargoPP.split('/');

    // Get a reference to the table element
    var table = document.getElementById("PPtableVAL");

    // Loop through the dataArray and create a row for each item
    for (var i = 0; i < dataArray.length; i++) {
        var rowData = dataArray[i].trim(); // Remove leading/trailing spaces if any
        var rowDataArray = rowData.split('x');
        var largUndsArray = rowDataArray[2].trim().split(':');

        // Convert the decimals to integers if they are zero or show the full value if non-zero
        rowDataArray = rowDataArray.map(function (item) {
            var parts = item.trim().split('.');
            if (parts.length === 2) {
                if (parts[1] === "0") {
                    return parts[0];
                } else {
                    return parts.join('.');
                }
            }
            return item.trim();
        });

        // Create a new row and cells
        var newRow = table.insertRow();
        var idCell = newRow.insertCell();
        var calCell = newRow.insertCell();
        var anchCell = newRow.insertCell();
        var largCell = newRow.insertCell();
        var undsCell = newRow.insertCell();

        // Set the cell values
        idCell.textContent = i + 1; // ID starts from 1
        calCell.textContent = rowDataArray[0];
        anchCell.textContent = rowDataArray[1];
        largCell.textContent = largUndsArray[0];
        undsCell.textContent = largUndsArray[1];

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


    function calculateAndDisplayDifferences() {
        var difUndsTable = document.getElementById("dif_unds");
        var rowsPROV = document.getElementById("PPtablePROV").rows;
        var rowsVAL = document.getElementById("PPtableVAL").rows;

        // Clear existing rows in the dif_unds table
        while (difUndsTable.rows.length > 1) {
            difUndsTable.deleteRow(1);
        }

        // Calculate and display the differences
        for (var i = 1; i < rowsPROV.length && i < rowsVAL.length; i++) {
            var undsPROV = parseInt(rowsPROV[i].cells[4].textContent); // Get "Unds" value from PPtablePROV
            var undsVAL = parseInt(rowsVAL[i].cells[4].textContent);   // Get "Unds" value from PPtableVAL
            var difference = undsVAL - undsPROV; // Reverse the calculation

            // Create a new row for each difference
            var newRow = difUndsTable.insertRow();
            var cell = newRow.insertCell();
            cell.textContent = difference;
        }
    }



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
    document.getElementById("cantidadesxlargoPP").value = cantidadesxlargoPP;
    document.getElementById("m3PP").value = m3PP;
    document.getElementById("pulgPP").value = pulgPP;
    document.getElementById("cantidadtotalPP").value = cantidadtotalPP;
    document.getElementById("unidades_totalPP").value = unidades_totalPP;
    document.getElementById("pulg_totalPP").value = pulg_totalPP;
    document.getElementById("m3_totalPP").value = m3_totalPP;
    document.getElementById("PPtablePROV").addEventListener("drop", function () {
        calculateAndDisplayDifferences();
    });

    // Add an event listener for when a row in PPtableVAL is dropped
    document.getElementById("PPtableVAL").addEventListener("drop", function () {
        calculateAndDisplayDifferences();
    });



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
    xhr.open('POST', '/EliminarPPVal', true);
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
