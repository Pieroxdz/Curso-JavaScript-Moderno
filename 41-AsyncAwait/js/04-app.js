function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando nuevos clientes...')
        setTimeout(() => {
            resolve('Clientes descargados')
        }, 5000);
    })

}

function descargarNuevosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando nuevos pedidos...')
        setTimeout(() => {
            resolve('Pedidos descargados')
        }, 5000);
    })

}

const app = async () => {
    try {

        // const clientes = await descargarNuevosClientes();
        // log(clientes);
        // const pedidos = await descargarNuevosPedidos();
        // console.log(pedidos);


        //Ya que son tareas independientes, podemos ejecutar ambas al mismo tiempo
        //No tiene sentido esperar a que se descarguen los clientes para descargar los pedidos
        //Por lo tanto, podemos usar Promise.all para ejecutar ambas promesas en paralelo
        const response = await Promise.all([
            descargarNuevosClientes(),
            descargarNuevosPedidos()
        ]);

        log(response);
    } catch (error) {
        console.error(`Error en la aplicación: ${error.message}`);
    }
}

app();