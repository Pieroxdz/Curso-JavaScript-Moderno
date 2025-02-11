import nuevaFuncion, { nombreCliente, ahorro, mostrarInfo, tieneSaldo, Cliente } from "./cliente.js";
import {Empresa} from "./empresa.js"

nuevaFuncion()

console.log(nombreCliente);
console.log(ahorro);
console.log(mostrarInfo(nombreCliente, ahorro));
tieneSaldo(ahorro)

const cliente = new Cliente(nombreCliente, ahorro)
console.log(cliente);
console.log(cliente.mostrarInfo());

const empresa = new Empresa("Avella", 10000, "Postres")
console.log(empresa);
