//                    KEY  -  VALUE
// localStorage.setItem('nombre', 'Piero');

//Local storage solo almacena strings
// localStorage.setItem('nombre', 1);

const producto = {
    nombre: 'Monitor 24 pulgadas',
    precio: 300
}
const productoString = JSON.stringify(producto);
console.log(productoString);
localStorage.setItem('producto', productoString);


// const meses = ['Enero', 'Febrero', 'Marzo'];
// localStorage.setItem('meses', JSON.stringify(meses));

