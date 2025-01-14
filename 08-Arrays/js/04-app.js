const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

meses[0] = "Nuevo Mes"
meses[7] = "Último mes"
//JS no crea el indice 8 o 9 simplemente se salta
meses[10] = "Mes random"

console.table(meses);
