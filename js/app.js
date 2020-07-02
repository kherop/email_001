/**
 * Variables
 */
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn')

/**
 * Listeners
 */

// Llamo a la funcion para controlar todos los event listeners
eventListeners();

// Función para controlar los event listeners
function eventListeners() {
    // Función que controla la carga inicial de la app
    document.addEventListener('DOMContentLoaded', inicioApp);

    // Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    // Dispara al darle enviar al formulario
    btnEnviar.addEventListener('click', enviarEmail)

    // Dispara al darle al boton de resetear
    resetBtn.addEventListener('click', resetFormulario)
}


/**
 * Funciones
 */

// Función que controla el estado inicial de la App
function inicioApp() {
    // Desabilitamos el botón enviar del formulario
    btnEnviar.disabled = true;
}

// Función para validar que los campos no esten vacios
function validarCampo() {
    // Validamos la longuitud y que no este vacio
    validarLonguitud(this);
    // Validamos solo el campo correo
    if (this.type === 'email') {
        validadEmail(this);
    }
    // Valida si los tres campos estan rellenos correctamente para habilitar el envio
    activarBtn();
}

// Función para validar que los campos no esten vacios
function validarLonguitud(campo) {
    if (campo.value.length > 0) {
        // Si es correcto cambia el borde a verde y quita la clase error si la tuviese
        campo.style.borderBottomColor = "green";
        campo.classList.remove('error');
    } else {
        // Si esta vacío pone el borde en rojo y añade la clase error
        campo.style.borderBottomColor = "red";
        campo.classList.add('error');
    }
}

// Función para comprobar si los tres campos tienen contenido para habilitar el boton activar
function activarBtn() {
    // Variable para controlar si hay errores en el formulario
    let errores;
    // Controla que existan campos con la clase .error
    errores = document.querySelectorAll('.error');
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if (errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }
}

// Funcion para validar el email
function validadEmail(campo) {
    // Captura el valor del campo
    const mensaje = campo.value;
    // Busca una arroba en la cadena de texto
    if (mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = "green";
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = "red";
        campo.classList.add('error');
    }
}

// Función para enviar el correo
function enviarEmail(e) {
    // Deshabilita la acción predeterminada
    e.preventDefault();

    // Muestra el spinner
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    // Muestra el correo de ok en el envio
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    // Cambia el spinner por el ok a los 2s
    setTimeout(function () {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);
        // Quita el ok de enviado
        setTimeout(function () {
          enviado.remove();
          formularioEnviar.reset();
        }, 3000);
    }, 2000);
    
}

// Función para resetear el formulario
function resetFormulario(e) {
    // Deshabilito la función predeterminada
    e.preventDefault();
    formularioEnviar.reset();
}



















