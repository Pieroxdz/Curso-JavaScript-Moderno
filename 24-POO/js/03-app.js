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

//HERENCIA -- Empresa es hijo de Cliente 
class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria){
        //Con esto heredamos los atributos de la clase padre
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    //Sobe escribe el método que hereda de la clase Clientea
    static bienvenida(){
        return `Bienvenido al cajero de la empresa`;
    }
}


const markin = new Cliente("Markin", 500)
console.log(markin);
console.log(markin.mostrarInformacion());
console.log(Cliente.bienvenida());



const adidas = new Empresa("Adidas", 100000, 923056184, "Ropa deportiva")
console.log(adidas);
console.log(adidas.mostrarInformacion());
console.log(Empresa.bienvenida());

