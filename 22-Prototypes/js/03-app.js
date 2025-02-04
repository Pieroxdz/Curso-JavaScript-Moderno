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

//Instanciarlo
const piero = new Cliente('Piero', 6000);
console.log(piero.tipoCliente());
console.log(piero.nombreClienteSaldo());
piero.retiraSaldo(1000);
console.log(piero.nombreClienteSaldo());

console.log(piero);
