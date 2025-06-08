function descargarClientes(){

    return new Promise((resolve, rejec) =>{
        
        const error = false;

        setTimeout(() => {
            if(!error){
                resolve('Los clientes fueron descargados correctamente');
            }else{
                rejec('Error en la conexion');
            }
        }, 3000);

    })

}

//Async await
const ejecutar = async () => {
    try {
        console.log(1 + 1);
        const respuesta = await descargarClientes()

        console.log(2 + 2);
        console.log(respuesta); 
    } catch (error) {
        console.log(error);
    }
}

ejecutar();