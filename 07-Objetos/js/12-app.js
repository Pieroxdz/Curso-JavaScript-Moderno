//OBJECT LITERAL
const producto = {
    nombre: "Monitor de 20\"",
    precio: 300,
    disponible: true
}

console.log(producto);


//OBJECT CONSTRUCTOR
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Monitor de 24 pulgadas", 500);
console.log(producto2);

const producto3 = new Producto("TV", 1000);
console.log(producto3);
