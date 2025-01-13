const producto = {
    nombre: "Monitor de 20\"",
    precio: 300,
    disponible: true
}

const medidas = {
    peso : "1KG",
    medida : "1KG",
}
console.log(producto);
console.log(medidas);


const resultado = Object.assign(producto, medidas)

//Spread Operator o Rest Operator
const resultado2 = {...producto, ...medidas }

console.log(resultado);
console.log(resultado2);
