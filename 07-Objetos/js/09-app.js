"use strict"

const producto = {
    nombre: "Monitor de 20\"",
    precio: 300,
    disponible: true
}

//No se puede agregar ni quitar propiedades pero si se pueden modificar las existentes
Object.seal(producto)

producto.disponible = false;

console.log(producto);
console.log(Object.isSealed(producto));
