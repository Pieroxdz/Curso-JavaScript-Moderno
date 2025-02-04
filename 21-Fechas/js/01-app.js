const diaHoy = new Date();
let valor;

valor = diaHoy;
valor = diaHoy.getFullYear(); // año
valor = diaHoy.getMonth(); // mes
valor = diaHoy.getHours(); // hora
valor = diaHoy.getMinutes(); // minutos
valor = diaHoy.getTime(); // milisegundos desde 1970
diaHoy.setFullYear(2019); // cambiar año 
console.log(diaHoy);
