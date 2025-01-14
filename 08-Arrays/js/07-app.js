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
    nombre: "Samsung S23",
    precio: 400
}

const producto4 = {
    nombre: "Samsung S24",
    precio: 400
}

carrito.push(producto)
carrito.push(producto2)
carrito.push(producto3)
carrito.push(producto4)

console.table(carrito);

//Eliminar último elemento de un arreglo
carrito.pop()
console.table(carrito);

//Eliminar del inicio del arreglo
carrito.shift()
console.table(carrito);

//Le indicar la posición desde donde va a empezar a eliminar y luego le pasas 
//la cantidad de elementos a eliminar
carrito.splice(1,1)