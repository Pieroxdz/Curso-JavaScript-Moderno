const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Con un foreach
let resultado = "";
carrito.forEach((producto, indice) => {
    if(producto.nombre === "Tablet"){
        resultado = carrito[indice];
    }
} )

console.log(resultado);

//Con un .find
const resultado2 = carrito.find( producto => producto.precio === 100);
console.log(resultado2);

