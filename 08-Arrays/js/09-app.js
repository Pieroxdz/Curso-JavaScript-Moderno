const carrito = [
    { nombre: "Monitor 27  \"", precio: 450 },
    { nombre: "Teclado Mecánico", precio: 150 },
    { nombre: "Mouse Gamer", precio: 100 },
    { nombre: "Silla Gamer", precio: 300 },
    { nombre: "Escritorio", precio: 200 },
    { nombre: "Auriculares", precio: 80 }
]

//AMBOS TIENE EL MISMO PERFORMANCE

for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - Precio: $${carrito[i].precio}`);
}

carrito.forEach((producto) => {
    console.log(`${producto.nombre} - Precio: $${producto.precio}`);
})