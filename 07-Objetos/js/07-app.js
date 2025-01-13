const producto = {
    nombre: "Monitor de 20\"",
    precio: 300,
    disponible: true
}

precio.disponible = false;
delete producto.precio;

console.log(producto);
