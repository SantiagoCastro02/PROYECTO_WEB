function goBack() {
    window.history.back();
}
window.onload = function () {
    // Obtener los datos pasados en la URL
    var params = new URLSearchParams(window.location.search);
    var lote = params.get("lote");
    var fecha_ingreso = params.get("fecha_ingreso");
    var proveedor = params.get("proveedor");
    var receptor = params.get("receptor");
    var remision_prov = params.get("remision_prov");
    var transportador = params.get("transportador");
    var placa = params.get("placa");
    var presentacion = params.get("presentacion");
    var m3PP = params.get("m3PP");
    var pulgPP = params.get("pulgPP");
    var cantidadtotalPP = params.get("cantidadtotalPP");

    var infotablepp = params.get("infotablepp");
    var dataArray = infotablepp.split('|');

    // Get a reference to the table element
    var table = document.getElementById("PPtablePROV");

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

    m3PP = parseFloat(m3PP).toFixed(3);

    // Llenar los campos de edición con los datos obtenidos
    document.getElementById("lote").value = lote;
    document.getElementById("fecha_ingreso").value = fecha_ingreso;
    document.getElementById("proveedor").value = proveedor;
    document.getElementById("receptor").value = receptor;
    document.getElementById("remision_prov").value = remision_prov;
    document.getElementById("transportador").value = transportador;
    document.getElementById("placa").value = placa;
    document.getElementById("presentacion").value = presentacion;
    document.getElementById("m3PP").value = m3PP;
    document.getElementById("pulgPP").value = pulgPP;
    document.getElementById("cantidadtotalPP").value = cantidadtotalPP;
}  