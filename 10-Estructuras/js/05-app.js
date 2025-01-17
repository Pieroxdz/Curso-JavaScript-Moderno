//Switch case

const metodoPago = "efectivo"

switch (metodoPago) {
    case "efectivo":
        pagar();
        break;
    case "cheque":
        console.log(`Pagaste con ${metodoPago}`);
    case "tarjeta":
        console.log(`Pagaste con ${metodoPago}`);
    default:
        console.log("Aún no has seleccionado un método de pago o no esta soportado");

        break;
}

function pagar() {
    console.log("Pagando con efectivo");
    
}