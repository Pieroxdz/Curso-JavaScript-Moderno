localStorage.removeItem('nombre');


//Actualizar un registo
const mesesArray = JSON.parse(localStorage.getItem('meses'));
mesesArray.push('Nuevo Mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));

localStorage.clear(); //Limpiar todo el localStorage