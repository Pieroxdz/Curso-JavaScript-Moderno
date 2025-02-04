function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const markin = new Cliente('Markin', 500);

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

console.log(formatearCliente(markin));



function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Codigo con Juan', 1000, 'Cursos en línea');

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoría de ${categoria}`;
}

console.log(formatearEmpresa(CCJ));
