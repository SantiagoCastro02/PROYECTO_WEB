//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

// Función para recargar la página cuando se muestra de nuevo (cuando el usuario vuelve atrás)
function reloadOnPageShow() {
  window.addEventListener('pageshow', function (event) {
    // Verifica si la página se está mostrando de nuevo y no es una carga inicial
    if (event.persisted) {
      location.reload();
    }
  });
}

// Llama a la función para recargar cuando se muestra de nuevo
reloadOnPageShow();


//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar menú
function open_close_menu() {
  body.classList.toggle("body_move");
  side_menu.classList.toggle("menu__side_move");
}

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760) {

  body.classList.add("body_move");
  side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function () {

  if (window.innerWidth > 760) {

    body.classList.remove("body_move");
    side_menu.classList.remove("menu__side_move");
  }

  if (window.innerWidth < 760) {

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
  }

});

function goBack() {
  window.history.back();
}



document.getElementById("pp").addEventListener("click", function () {
  window.location.href = "/agregar_infoPP"; // Replace with the actual URL
});

document.getElementById("bloque").addEventListener("click", function () {
  window.location.href = "/agregar_infoBLOQUE"; // Replace with the actual URL
});

document.getElementById("troza").addEventListener("click", function () {
  window.location.href = "/agregar_infoTROZA"; // Replace with the actual URL
});
