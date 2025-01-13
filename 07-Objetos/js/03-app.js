const producto = {
    nombre: "Monitor de 20\"",
    precio: 300,
    disponible: true,
}

//AGREGAR NUEVAS PROPIEDADES AL OBJETO
producto.imagen = "imagen.jpg";

//ELMINAR UNA PROPIEDAD DEL OBJETO
delete producto.disponible;

console.log(producto);
