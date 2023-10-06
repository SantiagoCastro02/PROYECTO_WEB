function goBack() {
    window.history.back();
}
function formatDecimal(input) {
    var value = input.value.replace(/[^\d]/g, ''); // Eliminar caracteres no numéricos
    var length = value.length;

    // Verificar si la longitud del valor es mayor o igual a 2
    if (length >= 3) {
        var decimalPart = value.slice(-3); // Obtener los dos últimos dígitos
        var integerPart = value.slice(0, length - 3); // Obtener la parte entera

        // Construir el nuevo valor con el punto decimal
        var formattedValue = integerPart + '.' + decimalPart;

        // Actualizar el valor del campo de entrada
        input.value = formattedValue;
    }
}



var numFilasPP = 0;
var totalM3 = 0;
var totalPulg = 0;
var totalCantidad = 0;
var cuerpoTabla = document.getElementById("cuerpoTablaPP"); // Mover la declaración de cuerpoTabla aquí

function agregarFilaPP() {
    var calibreInput = document.querySelector("input[name='calibrePP']");
    var anchoInput = document.querySelector("input[name='anchoPP']");
    var largoInput = document.querySelector("input[name='largoPP']");
    var cantidadInput = document.querySelector("input[name='cantidadPP']");

    if (calibreInput.value !== '' && anchoInput.value !== '' && largoInput.value !== '' && cantidadInput.value !== '') {
        numFilasPP++;

        var nuevaFila = document.createElement("tr");
        nuevaFila.setAttribute("id", "row" + numFilasPP);

        // Columna ID autoincrementable
        var columnaID = document.createElement("td");
        columnaID.textContent = numFilasPP;
        nuevaFila.appendChild(columnaID);

        // Columna Calibre
        var columnaCalibre = document.createElement("td");
        columnaCalibre.textContent = calibreInput.value;
        nuevaFila.appendChild(columnaCalibre);

        // Columna Ancho
        var columnaAncho = document.createElement("td");
        columnaAncho.textContent = anchoInput.value;
        nuevaFila.appendChild(columnaAncho);

        // Columna Largo
        var columnaLargo = document.createElement("td");
        columnaLargo.textContent = largoInput.value;
        nuevaFila.appendChild(columnaLargo);

        // Columna Cantidad
        var columnaCantidad = document.createElement("td");
        columnaCantidad.textContent = cantidadInput.value;
        nuevaFila.appendChild(columnaCantidad);

        // Calculate m3 for the current record
        var calcularm3 = (parseInt(calibreInput.value) / 100) * (parseInt(anchoInput.value) / 100) * (parseInt(largoInput.value) / 100);
        var m3 = parseInt(cantidadInput.value) * calcularm3;

        // Columna Eliminar
        var columnaEliminar = document.createElement("td");
        var botonEliminar = document.createElement("button");
        botonEliminar.type = "button";
        botonEliminar.innerHTML = "<i class='fa fa-trash'></i>";
        botonEliminar.classList.add("red-icon", "btn-delete"); // Agrega la clase "btn-delete"
        botonEliminar.addEventListener("click", function () {
            eliminarFilaPP(this);
        });
        columnaEliminar.appendChild(botonEliminar);
        nuevaFila.appendChild(columnaEliminar);


        cuerpoTabla.appendChild(nuevaFila);

        calibreInput.value = "";
        anchoInput.value = "";
        largoInput.value = "";
        cantidadInput.value = "";

        // Update the total m3 value
        totalM3 += m3;
        document.getElementById("m3PP").value = totalM3.toFixed(3);

        // Calculate pulgadas
        var pulgadas = totalM3 * 516;
        document.getElementById("pulgPP").value = pulgadas.toFixed(2);

        // Calculate Cantidad
        var cantidadColumn = document.querySelectorAll("#tablaPP tbody td:nth-child(5)");
        var sum = 0;
        for (var i = 0; i < cantidadColumn.length; i++) {
            sum += parseInt(cantidadColumn[i].textContent);
        }
        document.getElementById("cantidadtotalPP").value = sum;

    }
}

function eliminarFilaPP(boton) {
    var fila = boton.parentNode.parentNode; // Get the parent row of the delete button
    var cuerpoTabla = document.getElementById("cuerpoTablaPP");

    // Calculate m3 for the deleted record
    var calibre = parseInt(fila.cells[1].textContent);
    var ancho = parseInt(fila.cells[2].textContent);
    var largo = parseInt(fila.cells[3].textContent);
    var cantidad = parseInt(fila.cells[4].textContent);
    var calcularm3 = (calibre / 100) * (ancho / 100) * (largo / 100);
    var m3 = cantidad * calcularm3;

    cuerpoTabla.removeChild(fila); // Remove the selected row from the table

    // Update the total m3 value
    totalM3 -= m3;
    document.getElementById("m3PP").value = totalM3.toFixed(3);

    // Calculate pulgadas
    var pulgadas = totalM3 * 516;
    document.getElementById("pulgPP").value = pulgadas.toFixed(2);

    // Calculate Cantidad
    var cantidadColumn = document.querySelectorAll("#tablaPP tbody td:nth-child(5)");
    var sum = 0;
    for (var i = 0; i < cantidadColumn.length; i++) {
        sum += parseInt(cantidadColumn[i].textContent);
    }
    document.getElementById("cantidadtotalPP").value = sum;
}


window.onload = function () {
    alert("Ten en cuenta generar un informe de LOTE uno a la vez... 😉🌲");
};



var fechaActual = new Date();
var dia = ("0" + fechaActual.getDate()).slice(-2);
var mes = ("0" + (fechaActual.getMonth() + 1)).slice(-2);
var anio = fechaActual.getFullYear();
var fechaFormateada = anio + "-" + mes + "-" + dia;
document.getElementById("fecha_ingresoPP").value = fechaFormateada;


function submitForm() {
    // Muestra una ventana emergente de confirmación
    var userConfirmed = window.confirm("¿Desea continuar y enviar el formulario? Ten en cuenta que una vez enviado no se podra eliminar!!!.");

    // Si el usuario hace clic en "Aceptar" (true), procede a enviar el formulario
    if (userConfirmed) {
        var cuerpoTabla = document.getElementById("cuerpoTablaPP");
        var rows = cuerpoTabla.getElementsByTagName("tr");
        var infotablepp = [];

        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            var cal = row.querySelector("td:nth-child(2)").textContent;
            var anch = row.querySelector("td:nth-child(3)").textContent;
            var lar = row.querySelector("td:nth-child(4)").textContent;
            var cant = row.querySelector("td:nth-child(5)").textContent;
            infotablepp.push(cal + "x" + anch + "x" + lar + ":" + cant);
        }

        // Join the array elements with a "|" delimiter
        var infotableppString = infotablepp.join("|");

        // Store infotableppString in a hidden input field for form submission
        var infotableppInput = document.createElement("input");
        infotableppInput.type = "hidden";
        infotableppInput.name = "infotablepp";
        infotableppInput.value = infotableppString;
        document.getElementById("myForm").appendChild(infotableppInput);

        // Log infotablepp to the console
        console.log("infotablepp:", infotableppString);

        // Submit the form
        document.getElementById("myForm").submit();
    } else {
        // Si el usuario hace clic en "Cancelar" (false), no se envía el formulario
        alert("Envío de formulario cancelado.");
    }
}

