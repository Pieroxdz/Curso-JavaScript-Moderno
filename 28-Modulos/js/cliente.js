//IIFE 
// (function(){        
//  })()

export const nombreCliente = "Juan"
export const ahorro = 200

export function mostrarInfo(nombre, ahorro) {
    return "Cliente " + nombre + " - Ahorro " + ahorro
}
export function tieneSaldo(ahorro) {
    if (ahorro > 0) {
        console.log("Tiene saldo");
    } else {
        console.log("El cliente no tiene saldo");
    }
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre
        this.ahorro = ahorro
    }

    mostrarInfo() {
        return "Cliente " + this.nombre + " - Ahorro " + this.ahorro
    }
}

export default function nuevaFuncion(){
    console.log("Este es el export default");
}