//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

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

const searchForm = document.querySelector('.search-bar form');
const searchInput = document.querySelector('#search-input');
const tableBody = document.querySelector('#table-body');
const filterSelect = document.querySelector('#filter-select');
const noResultsMessage = document.querySelector('#no-results-message'); // Obtener el elemento del mensaje de no resultados

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const searchQuery = searchInput.value.toLowerCase().trim();
    const selectedFilter = filterSelect.value;

    let resultsFound = false; // Variable para controlar si se encontraron resultados

    Array.from(tableBody.children).forEach(row => {
        const value = row.children[getIndex(selectedFilter)].textContent.toLowerCase().trim();
        if (value.includes(searchQuery)) {
            row.classList.remove('hide');
            resultsFound = true; // Se encontró al menos un resultado
        } else {
            row.classList.add('hide');
        }
    });

    if (!resultsFound) {
        noResultsMessage.style.display = 'block'; // Mostrar el mensaje de no resultados si no se encontraron
    } else {
        noResultsMessage.style.display = 'none'; // Ocultar el mensaje si se encontraron resultados
    }
});

function getIndex(filter) {
    switch (filter) {
        case 'nombre':
            return 1;
        case 'usuario':
            return 2;
        case 'rol':
            return 3;
        default:
            return -1;
    }
}


function verContrasena() {
    var input = document.getElementById("password");
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

// Check if the page is being reloaded
if (!performance.navigation.type || performance.navigation.type !== 1) {
    // Reload the page immediately
    window.location.reload();
}
