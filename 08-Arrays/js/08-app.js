const producto = {
    nombre: "Monitor de 20\"",
    precio: 300,
    disponible: true,
}

const { nombre } = producto;
console.log(nombre);

//DESTRUCTURIN CON ARREGLOS
const numeros = [10, 20, 30, 40]
// const [primero, , , cuarto]  = numeros
const [primero, ...tercero]  = numeros

console.log(primero);
console.log(cuarto);
