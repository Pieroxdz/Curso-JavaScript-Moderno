document.addEventListener("DOMContentLoaded", function () {

    const email = {
        email: "",
        cc: "",
        asunto: "",
        mensaje: "",
    }

    //Seleccionar elementos de la interfaz
    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const inputCC = document.querySelector("#cc");
    const formulario = document.querySelector("#formulario");
    const btnSubmit = document.querySelector("#formulario button[type='submit']");
    const btnReset = document.querySelector("#formulario button[type='reset']");
    const spinner = document.querySelector("#spinner");

    //Asignar eventos
    inputEmail.addEventListener("input", validar)
    inputAsunto.addEventListener("input", validar)
    inputMensaje.addEventListener("input", validar)
    inputCC.addEventListener("input", validar)
    formulario.addEventListener("submit", enviarEmail)

    btnReset.addEventListener("click", function (e) {
        e.preventDefault();
        resetFormulario();
    })

    function enviarEmail(e) {
        e.preventDefault();
        spinner.classList.add("flex");
        spinner.classList.remove("hidden");

        setTimeout(() => {
            spinner.classList.remove("flex");
            spinner.classList.add("hidden");

            resetFormulario();

            //Crear alerta
            const alertaExito = document.createElement("P");
            alertaExito.classList.add("bg-green-500", "text-white", "p-2", "text-center", "mt-10", "uppercase", "font-bold", "rounded-lg", "text-sm");
            alertaExito.textContent = "El email se envió correctamente";
            
            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);

        }, 3000);
    }

    function validar(e) {

        //COSAS A TENER EN CUENTA AL MOMENTO DE VALIDAR
        if (e.target.value.trim() === "") {
            if (e.target.id !== "cc") {
                mostrarAlerta(`El Campo ${e.target.id} es obligatorio`, e.target.parentElement);
                email[e.target.name] = "";
                comprobarEmail();
                return;
            } else {
                // Si el campo es cc y está vacío, limpiamos cualquier alerta y eliminamos su valor
                limpiarAlerta(e.target.parentElement);
                email[e.target.name] = "";
                comprobarEmail();
                return;
            }
        }

        if ((e.target.id === "email" || e.target.id === "cc") && !validarEmail(e.target.value)) {
            mostrarAlerta(`El email no es válido`, e.target.parentElement);
            email[e.target.name] = "";
            return
        }

        limpiarAlerta(e.target.parentElement);

        //Asignar valores al objeto
        email[e.target.name] = e.target.value.trim().toLowerCase();

        //Comprobar el objeto de email
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);

        //Generar alerta en HTML
        const error = document.createElement("P");
        error.textContent = mensaje;
        error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

        //Inyectar el error al formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        //Comprueba si ya existe una alerta
        const alerta = referencia.querySelector(".bg-red-600");
        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        //Expresion regular para validar email
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {

        //Usamos la destructuración
        const { email: correo, asunto, mensaje } = email;

        if ([correo, asunto, mensaje].includes("")) {
            btnSubmit.classList.add("opacity-50");
            btnSubmit.disabled = true;
            return;
        }

        btnSubmit.classList.remove("opacity-50");
        btnSubmit.disabled = false;
    }

    function resetFormulario() {
        email.email = "";
        email.cc = "";
        email.asunto = "";
        email.mensaje = "";
        formulario.reset();
        comprobarEmail();
    }
});