const usuario = false;
const puedePagar = false;

if (usuario && puedePagar) {
    console.log("Si puedes comprar");
} else if (!puedePagar && !usuario) {
    console.log("No se puede comprar");
}else if (!usuario) {
    console.log("Inicia sesión o saca una cuenta");
} else if (!puedePagar) {
    console.log("Fondos insuficientes");
}