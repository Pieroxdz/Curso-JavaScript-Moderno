const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//Te devuelve las llaves
console.log(Object.keys(producto));

//Te devuelve los valores
console.log(Object.values(producto));

//Te devuelve las llaves y los valores
console.log(Object.entries(producto));
