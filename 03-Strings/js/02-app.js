const producto = "Monitor de 20 \"";

console.log(producto);

//Conocer la cantidad de caracteres del String
console.log(producto.length);

//Te dice donde empieza la palabra que le pasas como argumento
//Si no está en tu String de devuelve -1
console.log(producto.indexOf("20"));

//Te dice si el valor está en tu string con true or false
console.log(producto.includes("Tablet")); //False
console.log(producto.includes("Monitor"));//True


