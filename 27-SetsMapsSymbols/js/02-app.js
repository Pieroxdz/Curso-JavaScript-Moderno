//WeakSet - solo se puede agregar objetos
//No se pueden iterar como un set normal
//No se puede saber su tamaño con .size

const weakset = new WeakSet()

const cliente  = {
    nombre: 'Juan',
    saldo: 100
}

const nombre = "Markin"

weakset.add(cliente)
// weakset.add(nombre) //No acepta este valor solo OBJ
console.log(weakset);
console.log(weakset.has(cliente));
weakset.delete(cliente)
console.log(weakset);

