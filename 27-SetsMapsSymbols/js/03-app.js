//MAP llave y valor
const cliente = new Map()
cliente.set("nombre", "Markin")
cliente.set("tipo", "Premium")
cliente.set("saldo", 3000)
cliente.set(true, true)

console.log(cliente);
console.log(cliente.size);
console.log(cliente.has("nombre"));
console.log(cliente.get("nombre"));
cliente.delete(true)
console.log(cliente.has(true));
console.log(cliente.get(true));

//limpiamos el objeto
cliente.clear()
console.log(cliente);

const paciente = new Map([
    ['nombre', 'paciente'],
    ['cuarto', 'no definido']
]);

paciente.set('dr', 'Dr Asignado');

//Reescribir el valor de paciente por Antonio
paciente.set('nombre', 'Antonio');

console.log(paciente);

paciente.forEach((datos, index) => {
    console.log(datos);
})

