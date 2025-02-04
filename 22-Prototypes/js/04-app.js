function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function(){
    let tipo;

    if(this.saldo > 10000){
        tipo = 'Gold';
    } else if(this.saldo > 5000){
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}

//Mantienne referencias de las funciones del objeto
Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
}

function Persona(nombre, saldo, telefono){
    //Heredar los atributos de Cliente
    Cliente.call(this, nombre, saldo);
    //Propiedad propia de Persona
    this.telefono = telefono;   
}

//Heredar los prototipos de Cliente
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

const markin = new Persona('Markin', 5000, 933445851);
console.log(markin);
console.log(markin.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function(){
    return `El telefono de esta persona es: ${this.telefono}`;
}

console.log(markin.mostrarTelefono());
