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


function copyText() {
  var input = document.getElementById("ultimo_lote");
  input.select();
  input.setSelectionRange(0, 99999); // Para dispositivos móviles
  document.execCommand("copy");
  alert("¡LOTE copiado!");
}

const buttons = document.querySelectorAll('.btn-presentacion button');
const tableRows = document.querySelectorAll('#table-body tr');
let activeButton = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    tableRows.forEach(row => {
      const presentacionCell = row.querySelector('td:nth-child(4)');
      if (presentacionCell.textContent.trim() !== button.textContent.trim()) {
        row.style.display = 'none';
      } else {
        row.style.display = 'table-row';
      }
    });

    if (activeButton === button) {
      // Remove filter and revert to original color
      tableRows.forEach(row => (row.style.display = 'table-row'));
      button.style.backgroundColor = '';
      activeButton = null;
    } else {
      // Apply filter and highlight button
      tableRows.forEach(row => {
        const presentacionCell = row.querySelector('td:nth-child(4)');
        if (presentacionCell.textContent.trim() !== button.textContent.trim()) {
          row.style.display = 'none';
        } else {
          row.style.display = 'table-row';
        }
      });

      buttons.forEach(btn => (btn.style.backgroundColor = '#f1c40f'));
      button.style.backgroundColor = '#23A167';
      activeButton = button;
    }

    button.classList.add('animate');
    setTimeout(() => {
      button.classList.remove('animate');
    }, 500);
  });
});

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const tableBody = document.querySelector('#table-body');
const filterSelect = document.querySelector('#filter-select');
const noResultsMessage = document.querySelector('#no-results-message');

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const searchQuery = searchInput.value.toLowerCase().trim();
  const selectedFilter = filterSelect.value;

  let resultsFound = false;

  Array.from(tableBody.children).forEach(row => {
    const value = row.children[getIndex(selectedFilter)].textContent.toLowerCase().trim();
    if (value.includes(searchQuery)) {
      row.style.display = '';
      resultsFound = true;
    } else {
      row.style.display = 'none';
    }
  });

  if (!resultsFound) {
    noResultsMessage.style.display = 'block';
  } else {
    noResultsMessage.style.display = 'none';
  }
});

function getIndex(filter) {
  switch (filter) {
    case 'lote':
      return 0;
    case 'fecha_ingreso':
      return 1;
    case 'proveedor':
      return 2;
    case 'verificado':
      return 6;
    default:
      return -1;
  }
}

document.addEventListener('click', e => {
  const clickedElement = e.target;
  if (clickedElement !== searchInput) {
    noResultsMessage.style.display = 'none';
  }
});

// Check if the page is being reloaded
if (!performance.navigation.type || performance.navigation.type !== 1) {
  // Reload the page immediately
  window.location.reload();
}