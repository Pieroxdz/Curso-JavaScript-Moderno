const cargarJSONArrayBtn = document.querySelector("#cargarJSONArray");
cargarJSONArrayBtn.addEventListener("click", obtenerDatos);

// document.addEventListener("DOMContentLoaded", obtenerDatos)

function obtenerDatos() {
    const url = "data/empleados.json";

    fetch(url) //HACEMOS FETCH A LA URL
        .then(response => response.json()) //CONVERTIMOS A JSON
        // .then(resultado => console.log(resultado)) //IMPRIMIMOS EN CONSOLA LOS DATOS
        .then(resultado => mostrarHTML(resultado)) //LLAMAMOS A LA FUNCION QUE MUESTRA LOS DATOS EN HTML
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector("#contenido");
    let html = "";

    empleados.forEach(empleado => {
        const { id, nombre, empresa, trabajo } = empleado; //DESESTRUCTURAMOS EL OBJETO EMPLEADO
        html += `
            <p>Empleado: ${nombre}</p>
            <p>ID: ${id}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
        `;
    })

    contenido.innerHTML = html; //AGREGAMOS EL HTML AL CONTENIDO
}