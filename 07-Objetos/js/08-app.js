"use strict"

const producto = {
    nombre: "Monitor de 20\"",
    precio: 300,
    disponible: true
}

//Esto congela el producto no puedes agregar o añadir propiedades
Object.freeze(producto);

// producto.disponible = false;
// producto.image = "imagen.jpg";
// delete producto.precio;

console.log(producto);
console.log(Object.isFrozen(producto));

