// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         console.log("CINCO");
//         continue;
//     }
//     console.log(`Número: ${i}`);
// }

const carrito = [
    { nombre: "Monitor 27  \"", precio: 450 },
    { nombre: "Teclado Mecánico", precio: 150 },
    { nombre: "Mouse Gamer", precio: 100, descuento:true },
    { nombre: "Silla Gamer", precio: 300 },
    { nombre: "Escritorio", precio: 200 },
    { nombre: "Auriculares", precio: 80 }
]

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}
