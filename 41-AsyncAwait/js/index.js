//El orden deberpia ser 1, 3 y 2 porque JS es sincrono

// console.log("SINCRONO");

// console.log("1");

// setTimeout(() => {
//     console.log("2");
// }, 2000);

// console.log("3");

//Pero no tiene sentido que el 3 se ejecute antes que el 2, debería habe runa forma de que el 3 espere a que el 2 termine su trabajo.
//Algo que podríamos hacer es poner el trozo de cod dentro del setTimeout después del log 2,
//  pero eso no es una buena práctica porque el código se vuelve difícil de leer y mantener ya que en ocasiones puede ser demasiado cod.


//Aquí ya se muestra el 1, luego el 2 y finalmente el 3, 
// pero ESTO NO es una buena práctica 

// console.log("1");

// setTimeout(() => {
//     console.log("2");
//     console.log("3");
// }, 2000);



// Para eso existen los callbacks, que son funciones que se ejecutan después de que otra función ha terminado su trabajo.
/* Un callback es una función que se pasa como argumento a otra función y que se ejecuta después de que la primera función termina su trabajo. */
// console.log("ASINCRONO");

// console.log("1");

// function imprimeNum2(callback){
//     setTimeout(() => { //Todo se ejecuta después de 2 segundos
//         console.log("2"); // Primero hace este trabajo antes de llamar al callback
//         callback(); // Llamamos al callback una vez que se ha completado el trabajo anterior
//     }, 2000);
// }

// function imprimeNum3(){
//     console.log("3");
// }

// // Aquí llamamos a la función imprimeNum2 y le pasamos imprimeNum3 como callback
// imprimeNum2(imprimeNum3);



// ========================================
// CALLBACK HELL - Código original problemático
// ========================================
function llegar() {
    console.log("LLEGAR")
}

function esperar(callback) {
    setTimeout(() => {
        console.log("ESPERAR")
        callback()
    }, 1000);
}

function irse() {
    console.log("IRSE")
}

// Usamos funciones anónimas como callbacks para que cada `esperar` llame al siguiente.
// Así aseguramos que uno ocurra después del otro, cada 1 segundo.
// Si solo pasamos `esperar` sin envolverlo, se rompe porque le falta su propio callback.

function main() {
    llegar()
    esperar(function() {
        esperar(function() {
            esperar(function() {
                esperar(function() {
                    esperar(function() {
                        esperar(irse)
                    })
                })
            })
        })
    })
}

main();