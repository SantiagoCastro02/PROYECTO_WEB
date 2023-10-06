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
    var talo_salvoconducto = params.get("talo_salvoconducto");
    var remi_salvoconducto = params.get("remi_salvoconducto");
    var nombre_razon = params.get("nombre_razon");
    var entidad = params.get("entidad");
    var no_registro = params.get("no_registro");
    var departamento = params.get("departamento");
    var municipio = params.get("municipio");
    var vereda = params.get("vereda");
    var transportador = params.get("transportador");
    var placa = params.get("placa");
    var comun = params.get("comun");
    var cientifico = params.get("cientifico");
    var presentacion = params.get("presentacion");
    var volm3TROZA = params.get("volm3TROZA");
    var M3ProvTROZA = params.get("M3ProvTROZA");
    var CantidadProvTROZA = params.get("CantidadProvTROZA");


        // Retrieve the 'infotabletroza' parameter from the URL
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

    

    M3ProvTROZA = parseFloat(M3ProvTROZA).toFixed(3);
    volm3TROZA = parseFloat(volm3TROZA).toFixed(3);

    // Llenar los campos de edición con los datos obtenidos
    document.getElementById("lote").value = lote;
    document.getElementById("fecha_ingreso").value = fecha_ingreso;
    document.getElementById("proveedor").value = proveedor;
    document.getElementById("receptor").value = receptor;
    document.getElementById("remision_prov").value = remision_prov;
    document.getElementById("talo_salvoconducto").value = talo_salvoconducto;
    document.getElementById("remi_salvoconducto").value = remi_salvoconducto;
    document.getElementById("nombre_razon").value = nombre_razon;
    document.getElementById("entidad").value = entidad;
    document.getElementById("no_registro").value = no_registro;
    document.getElementById("departamento").value = departamento;
    document.getElementById("municipio").value = municipio;
    document.getElementById("vereda").value = vereda;
    document.getElementById("transportador").value = transportador;
    document.getElementById("placa").value = placa;
    document.getElementById("comun").value = comun;
    document.getElementById("cientifico").value = cientifico;
    document.getElementById("presentacion").value = presentacion;
    document.getElementById("volm3TROZA").value = volm3TROZA;
    document.getElementById("M3ProvTROZA").value = M3ProvTROZA;
    document.getElementById("CantidadProvTROZA").value = CantidadProvTROZA;

}  