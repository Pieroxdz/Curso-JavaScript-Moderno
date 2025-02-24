const paises = ["Francia", "España", "Portugal", "Australia", "Inglaterra"]

//Mandamos una función como parametro
function nuevoPais(pais, callback){
    setTimeout(() => {
        paises.push(pais)
        callback() //Aquí la función que hemos pasado se ejecuta
    }, 2000);
}

function mostrarPaises(){
    setTimeout(() => {
        paises.forEach(país => {
            console.log(país);
        })
        console.log("------------------------------------");    
    }, 1000);
}

mostrarPaises()



nuevoPais("Perú", mostrarPaises)
