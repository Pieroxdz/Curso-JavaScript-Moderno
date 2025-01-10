/* FORMAS DE CONCATENAR STRINGS */

/* Conel método CONCAT */
const producto = "Monitor de 20\" ";
const precio = "30 USD";
console.log(producto.concat(precio));
console.log(producto.concat("En descuento"));

/* Forma tradicional */
console.log(producto + "Con un precio de " + precio);

/* También se puede con comas -> , */
console.log("El producto ", producto, "tiene un precio de ", precio);

/* Con templates strings */
console.log(`El producto ${producto} tiene un precio de ${precio}`);

