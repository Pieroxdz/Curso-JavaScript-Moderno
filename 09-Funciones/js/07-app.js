iniciarApp();

function iniciarApp() {
    console.log("Iniciando app....");

    segundaFuncion();
}

function segundaFuncion() {
    console.log("Desde la segunda función");

    usuarioAutenticado("Markin");
}

function usuarioAutenticado(usuario){
    console.log("Autenticado usuario...espere");
    console.log(`Usuario autenticado exitosámente: ${usuario}`);
}