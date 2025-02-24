const paises = []

const nuevoPais = pais => new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais)
        resolve(`Agregado - país ${pais}`)
    }, 3000);
}) 

nuevoPais("Alemania")
    .then(resultado => { // El resultado es el resolve de la promesa, se puede llamar como quieras
        console.log(resultado)
        console.log(paises)
        return nuevoPais("Francia") //Volvemos a llamar el promise
    })
    .then(resultado => {
        console.log(resultado)
        console.log(paises)
        return nuevoPais("Inglaterra")
    })
    .then(resultado => {
        console.log(resultado)
        console.log(paises)
        return nuevoPais("Holanda")
    })
    .then(resultado => {
        console.log(resultado)
        console.log(paises)
        return nuevoPais("Grecia")
    })
    .then(resultado => {
        console.log(resultado)
        console.log(paises)
    })