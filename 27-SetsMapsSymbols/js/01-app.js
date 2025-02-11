const carrito = new Set()

//Agregar elementos
carrito.add("camisa")
carrito.add("pantalon")
//Aunque agregue 2 veces un mismo elemento solo se va a mostrar una vez
carrito.add("lentes")
carrito.add("lentes")

console.log(carrito);
console.log(carrito.size);
console.log(carrito.has("camisa"));
console.log(carrito.has("sneakers"))
carrito.delete("lentes");
console.log(carrito.size);

//Los sets son iterables
carrito.forEach(e => {
    console.log(e);
    
})

//Eliminar todo del carrito
carrito.clear()
console.log(carrito);

//Del sgte arreglo eliminar los duplicados
const numeros = [10, 20, 30, 40, 50, 10, 20]
const noDuplicados  = new Set(numeros)
console.log(noDuplicados);



