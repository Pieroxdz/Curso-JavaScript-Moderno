const producto = {
    nombre: "Monitor de 20\"",
    precio: 300,
    disponible: true,
    informacion: {
        medidas : {
            peso: "1KG",
            medidas: "1M"
        },
        fabricacion : {
            pais : "China"
        }
    }
}

console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.fabricacion.pais);

