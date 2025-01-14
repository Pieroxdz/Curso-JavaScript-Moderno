const carrito = [];

const producto = {
    nombre: "Monitor de 40 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Iphone 15",
    precio: 400
}

const producto3 = {
    nombre: "Samsung S24",
    precio: 400
}

let resultado;

resultado = {...carrito, producto}
resultado = {...resultado, producto2}
resultado = {producto3, ...resultado}


console.table(resultado);
