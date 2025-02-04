//OBJECT LITERAL

const cliente = {
    nombre: 'Markin',
    saldo : 500,
    profesion: 'Desarrollador Web'
}

console.log(cliente);
console.log( typeof cliente);

//PBJECT CONSTRUCTOR
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const markin = new Cliente('Markin', 500);

console.log(markin);
