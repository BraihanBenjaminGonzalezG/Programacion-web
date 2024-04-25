function validarFormulario() {
    var nombre = document.getElementById('nombre').value.trim();
    var rut = document.getElementById('rut').value.trim();
    var genero = document.getElementById('genero').value;
    var email = document.getElementById('email').value.trim();

    var nombreError = document.getElementById('nombreError');
    var rutError = document.getElementById('rutError');
    var generoError = document.getElementById('generoError');
    var emailError = document.getElementById('emailError');

    nombreError.textContent = "";
    rutError.textContent = "";
    generoError.textContent = "";
    emailError.textContent = "";

    if (nombre === "") {
        nombreError.textContent = "Por favor, completa tu nombre.";
    }

    // Validar RUT
    var rutRegex = /^\d{1,2}\.\d{3}\.\d{3}-[\d|kK]{1}$/;
    if (!rutRegex.test(rut)) {
        rutError.textContent = "Por favor, ingresa un RUT válido en el formato 12.345.678-9.";
    }

    if (genero === "") {
        generoError.textContent = "Por favor, selecciona tu género.";
    }

    // Validar correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Por favor, ingresa un correo electrónico válido.";
    }

    // Verificar si hay algún error
    if (nombreError.textContent === "" && rutError.textContent === "" && generoError.textContent === "" && emailError.textContent === "") {
        alert("El formulario se ha enviado correctamente.");
        return true; // Permitir el envío del formulario
    } else {
        return false; // Evitar el envío del formulario
    }
}
