const nombre = localStorage.getItem('nombre');
console.log(nombre);

const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON));

const meses = localStorage.getItem('meses');
console.log(JSON.parse(meses));


//JSON.stringify convierte un objeto en un string
//JSON.parse convierte un string en un objeto o array
