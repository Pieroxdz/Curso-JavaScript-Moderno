const cargarJsonBtn = document.querySelector('#cargarJSON');
cargarJsonBtn.addEventListener('click', obtenerData);

function obtenerData() {
    fetch('data/empleado.json')
        // .then(respuesta => {
        //     console.log(respuesta); //Si da estado 200 es que encontró la url
        // })
        .then(respuesta => {
            return respuesta.json();
        })
        .then(resultado => {
            console.log(resultado); //El resultado es un objeto de JS
        })
}

function mostrarHTML(empresa, id, nombre, trabajo){
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `;
}