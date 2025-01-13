const producto = {
    nombre: "Monitor de 20\"",
    precio: 300,
    disponible: true,
}

// const nombre = producto.nombre;
// console.log(nombre);


//DESTRUCTURACIÓN DE OBJETOS
const { nombre, precio, disponible } = producto
console.log(nombre);
console.log(precio);
console.log(disponible);
