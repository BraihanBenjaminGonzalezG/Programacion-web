let nombre = document.getElementById("nombre");
let nombreError = document.getElementById("nombreError");
let password = document.getElementById("password");
let passwordError = document.getElementById("passwordError");
let form = document.getElementById("myForm");

form.addEventListener("submit",function(evento){
    evento.preventDefault();
    validarFormulario();
})

function validarFormulario(){
    nombreError.textContent="";
    passwordError.textContent="";

    if(nombre.value=== null|| nombre.value.trim()===""){
        nombreError.textContent = "Por favor completar el campo nombre";
    };

    if(password.value=== null|| password.value.trim()===""){
     passwordError.textContent = "Por favor agrega una contraseña";
    };

    if(nombreError.textContent===""&& passwordError.textContent===""){
        alert("El formulario funciona bien")
    }
};