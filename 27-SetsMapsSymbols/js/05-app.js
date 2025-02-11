//LOS SYMBOS NUNCA SON IGUALES
const sym = Symbol("1")
const sym2 = Symbol("1")

// if(sym === sym2){
//     console.log("Son iguales");
// }else{
//     console.log("Son diferentes");
// }

// console.log(Symbol() === Symbol());

const nombre = Symbol()
const apellido = Symbol()

const persona = {}

//Agregar los symbols nombre y apellido como keys del object
persona[nombre] = "Markin"
persona[apellido] = "Guarniz"
persona.tipoCliente = "Premiun"
persona.saldo = 500

console.log(persona);
console.log(persona[nombre]);

// Las propiedades que utilizan un symbol no son iterables
for (let i in persona) {
    console.log(i);
}

// Definir una descripción del symbol
const nombreCliente = Symbol('Nombre del Cliente');

const cliente = {};

cliente[nombreCliente] = 'Pedro';

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);