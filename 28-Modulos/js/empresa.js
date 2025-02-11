import {Cliente} from "./cliente.js"

export class Empresa extends Cliente{
    constructor(nombre, ahorro, categoría){
        super(nombre, ahorro)
        this.categoría = categoría
    }

    mostrarInfo() {
        return "Cliente " + this.nombre + " - Ahorro " + this.ahorro + " - Categoria " + this.categoría
    }
}