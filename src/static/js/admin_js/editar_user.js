function goBack() {
    window.history.back();
}

window.onload = function () {
    // Obtener los datos pasados en la URL
    var params = new URLSearchParams(window.location.search);
    var id = params.get("id"); // Get the id parameter
    var username = params.get("username");
    var fullname = params.get("fullname");

    // Llenar los campos de edición con los datos obtenidos
    document.getElementById("hidden-id").value = id; // Set the id field
    document.getElementById("username").value = username;
    document.getElementById("fullname").value = fullname;
}


function validateUsername() {
    var usernameInput = document.getElementById("username");
    var usernameMessage = document.getElementById("username-message");
    var editarButton = document.getElementById("editarButton"); // Nuevo ID del botón

    var enteredUsername = usernameInput.value.trim();

    if (enteredUsername.length < 4) {
        usernameMessage.style.color = "red";
        usernameMessage.textContent = "Debe haber mínimo 4 caracteres";
        usernameMessage.style.display = "block";
        editarButton.disabled = true; // Bloquear el botón
        return;
    }

    var params = new URLSearchParams(window.location.search);
    var userExistParam = params.get("UserExist");
    var existingUsernames = userExistParam.split(",").map(function (item) {
        return item.trim();
    });

    var isUsernameAvailable = !existingUsernames.includes(enteredUsername);

    if (enteredUsername === "") {
        usernameMessage.style.display = "none";
        editarButton.disabled = true; // Bloquear el botón
    } else if (isUsernameAvailable) {
        usernameMessage.style.color = "green";
        usernameMessage.textContent = "Usuario disponible";
        usernameMessage.style.display = "block";
        editarButton.disabled = false; // Desbloquear el botón
    } else {
        usernameMessage.style.color = "red";
        usernameMessage.textContent = "Usuario no disponible";
        usernameMessage.style.display = "block";
        editarButton.disabled = true; // Bloquear el botón
    }
}


function blockSpacebar(event) {
    if (event.keyCode === 32) {
        event.preventDefault();
        showError();
    }
}

function showError() {
    var errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block";
}

function hideError() {
    var errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "none";
}

function confirmUserDeletion() {
    var id = document.querySelector("input[name='id']").value; // Capture the value of the "id" input field

    if (id === "1") {
        alert("Este Usuario No puede ser ELIMINADO.");
    } else {
        var confirmed = confirm("¿Estás seguro que deseas eliminar este usuario?");
        if (confirmed) {
            disableUser(id);
        }
    }

    // Redirect the user to "admin_user.html"
    window.location.href = 'admin_user';
}



function disableUser(id) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/DeshabilitarUser', true);
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
            window.location.href = 'admin_user';
        } else {
            // Handle the error response
            console.error(xhr.responseText);
        }
    };
    xhr.send(JSON.stringify({ id: id })); // Send the "id" data as JSON in the request body
}




