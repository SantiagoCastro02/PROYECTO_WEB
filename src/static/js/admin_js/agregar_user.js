function goBack() {
  window.history.back();
}

function blockSpacebar(event) {
    if (event.keyCode === 32) {
        event.preventDefault();
        showError();
    }
}

function validateInput() {
  var usernameInput = document.getElementById("username");
  var errorLengthMessage = document.getElementById("error-length");
  var errorSpaceMessage = document.getElementById("error-space");

  if (usernameInput.value.length < 4) {
      errorLengthMessage.style.display = "block";
      errorSpaceMessage.style.display = "none"; // Oculta el mensaje de espacio si está visible
  } else if (usernameInput.value.includes(" ")) {
      errorSpaceMessage.style.display = "block";
      errorLengthMessage.style.display = "none"; // Oculta el mensaje de longitud si está visible
  } else {
      errorLengthMessage.style.display = "none";
      errorSpaceMessage.style.display = "none";
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

document.addEventListener('DOMContentLoaded', function() {
    var submitBtn = document.getElementById('submitBtn');
    
    submitBtn.addEventListener('click', function() {
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'ENVIANDO...'; // Optionally, change the button text
      
      // You may also want to display a loading spinner or perform other actions here
      
      // This submits the form once the button is disabled
      submitBtn.closest('form').submit();
    });
  });
  



