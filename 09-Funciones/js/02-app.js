//Función Declarada
sumar(); //- aquí si funciona
function sumar() {
    console.log(2 + 2);
}


//Función Expresada
sumar2(); //- aquí no funciona
const sumar2 = function () {
    console.log(3 + 3);
}
