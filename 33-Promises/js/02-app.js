const paises = []

function nuevoPais(pais, callback){
    paises.push(pais)
    console.log(`Agregado - país ${pais}`);
    callback()
}

function mostrarPaís(){
    console.log(paises);
}

function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais("Alemania", mostrarPaís)
        setTimeout(() => {
            nuevoPais("Francia", mostrarPaís)
            setTimeout(() => {
                nuevoPais("Inglaterra", mostrarPaís)
                setTimeout(() => {
                    nuevoPais("Holanda", mostrarPaís)
                    setTimeout(() => {
                    nuevoPais("Grecia", mostrarPaís)
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
}

iniciarCallbackHell()