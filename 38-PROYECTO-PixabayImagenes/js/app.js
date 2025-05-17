const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacionDiv = document.querySelector('#paginacion');

const registroPorPagina = 20; // Número de imágenes por página
let totalPaginas; // Variable para almacenar el total de páginas
let iterador; 
let paginaActual = 1; 

// Cuando la ventana se carga se añade el evento submit para validar el formulario
window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e) {
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    if (terminoBusqueda === '') {
        mostrarAlerta('Agrega un término de búsqueda');
        return; // Para que no se ejecute el resto del código
    }

    // Si el término de búsqueda no está vacío, se llama a la función buscarImagenes
    buscarImagenes();
}

function mostrarAlerta(mensaje) {
    const existeAlerta = document.querySelector('.bg-red-100');

    // Si no existe la alerta, se crea una nueva
    if (!existeAlerta) {
        const alerta = document.createElement('P');
        alerta.classList.add(
            'bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 
            'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center'
        );

        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;

        formulario.appendChild(alerta);

        // Eliminar la alerta después de 3 segundos
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

function buscarImagenes() {
    const termino = document.querySelector('#termino').value;
    const key = "50336770-aef1335f4426a5c5c872a67a7";
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registroPorPagina}&page=${paginaActual}`;

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            totalPaginas = calcularPaginas(datos.totalHits);
            mostrarImagenes(datos.hits);
        })
        .catch(error => {
            console.log(error);
        });
}

function calcularPaginas(total) {
    return parseInt(Math.ceil(total / registroPorPagina));
}

function mostrarImagenes(imagenes) {
    //Limpiamos las imagenes anteriores
    limpiarHTML(resultado);

    // Iterar sobre el arreglo de imágenes para mostrar cada una
    imagenes.forEach(imagen => {
        const { previewURL, likes, views, largeImageURL } = imagen;

        resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class="w-full" src="${previewURL}">
                    <div class="p-4">
                        <p class="font-bold">${likes} <span class="font-light">Me gusta</span></p>
                        <p class="font-bold">${views} <span class="font-light">Visualizaciones</span></p>
                        <a 
                            href="${largeImageURL}" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            class="block bg-blue-800 hover:bg-blue-600 text-white font-bold text-center rounded mt-5 p-1 uppercase">
                            Ver Imagen
                        </a>
                    </div>   
                </div>
            </div>
        `;
    });

    // Limpiar paginación anterior y generar la nueva
    limpiarHTML(paginacionDiv);
    imprimirPaginador();
}

function limpiarHTML(referencia) {
    while (referencia.firstChild) {
        referencia.removeChild(referencia.firstChild);
    }
}

function* crearPaginador(total) {
    for (let i = 1; i <= total; i++) {
        yield i;
    }
}

function imprimirPaginador(){
    iterador = crearPaginador(totalPaginas);

    while(true){
        const { value, done } = iterador.next();

        if(done){ return; }

        // Crear botón para cada página
        const boton = document.createElement('A');
        boton.href = '#';
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add(
            'siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 
            'font-bold', 'mb-4', 'rounded'
        );

        boton.onclick = () => {
            paginaActual = value;
            buscarImagenes();
        }

        paginacionDiv.appendChild(boton);
    }
}
