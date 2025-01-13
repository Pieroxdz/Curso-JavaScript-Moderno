const producto = {
    nombre: "Monitor de 20\"",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1KG",
            medidas: "1M"
        },
        fabricacion: {
            pais: "China"
        }
    }
}

const { nombre, informacion, informacion: { fabricacion ,fabricacion: { pais } } } = producto;
console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);
