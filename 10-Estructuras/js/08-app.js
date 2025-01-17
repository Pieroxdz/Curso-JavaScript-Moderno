const autenticado = true;

if (autenticado) {
    console.log("El usuario está autenticado");
}

const puntaje = 450;


function revisarPuntaje(){
    if (puntaje > 400) {
        console.log("Excelente!!");
        return; //Hace que el código de abaojo deje de ejecutarse
    }
    
    if (puntaje > 300) {
        console.log("Buen puntaje...felicidades");
        return;
    }
}
revisarPuntaje()