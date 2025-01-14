const carrito = [
    { nombre: "Monitor 27  \"", precio: 450 },
    { nombre: "Teclado Mecánico", precio: 150 },
    { nombre: "Mouse Gamer", precio: 100 },
    { nombre: "Silla Gamer", precio: 300 },
    { nombre: "Escritorio", precio: 200 },
    { nombre: "Auriculares", precio: 80 }
]

const nuevoArray = carrito.forEach((producto) => {
    console.log(`${producto.nombre} - Precio: $${producto.precio}`);
})


const nuevoArray2 = carrito.map((producto) => {
    console.log(`${producto.nombre} - Precio: $${producto.precio}`);
})

console.log("-----FOR EACH-----");
console.log(nuevoArray);
console.log("-----MAP-----");
console.log(nuevoArray2);
