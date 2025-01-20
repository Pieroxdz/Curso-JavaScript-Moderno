// for(let i = 0; i <= 10; i++){
//     console.log(`Numero: ${i}`);
// }


// for(let i = 1; i<=20; i++){
//     if (i % 2 === 0){
//         console.log(`El número: ${i} es PAR`);
//     }else{
//         console.log(`El número: ${i} es IMPAR`);
//     }
// }

const carrito = [
    { nombre: "Monitor 27  \"", precio: 450 },
    { nombre: "Teclado Mecánico", precio: 150 },
    { nombre: "Mouse Gamer", precio: 100 },
    { nombre: "Silla Gamer", precio: 300 },
    { nombre: "Escritorio", precio: 200 },
    { nombre: "Auriculares", precio: 80 }
]

console.log(carrito.length);

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}

