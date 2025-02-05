class Cliente{

    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion (){
        return `Cliente: ${this.nombre}, tú saldo es de: ${this.saldo}`;
    }
    
    //LE PERTENECE A LA CLASE NO A LA INSTANCIA DE LA CLASE
    static bienvenida(){
        return `Bienvenido al cajero`;
    }

}

const markin = new Cliente("Markin", 500)
console.log(markin);
//SE LLAMA DIRECTAMENTE DESDE LA CLASE
console.log(Cliente.bienvenida());
console.log(markin.mostrarInformacion());


// CLASS EXPRESSION

const Cliente2  = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion (){
        return `Cliente: ${this.nombre}, tú saldo es de: ${this.saldo}`;
    }

    //LE PERTENECE A LA CLASE NO A LA INSTANCIA DE LA CLASE
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

const piero = new Cliente2("Piero", 400)
console.log(piero);
console.log(Cliente2.bienvenida());

console.log(piero.mostrarInformacion());
