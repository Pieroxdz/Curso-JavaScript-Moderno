//VARIABLES
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const listaCursos = document.querySelector("#lista-cursos");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
let articulosCarrito = [];

cargarEventListeners()
function cargarEventListeners(p) {

    //Cuándo agregar un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener("click", agregarCurso)

    //Eliminar cursos del carrito
    carrito.addEventListener("click", eliminarCurso)

    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener("click", () => {
        articulosCarrito = [];
        limpiarHTML();
    })

    document.addEventListener("DOMContentLoaded", () => {
        articulosCarrito = JSON.parse(localStorage.getItem("productos")) || [];
        carritoHTML();
    })
}

//FUNCIONES
function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains("agregar-carrito")) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    } 
}

//Elimina un curso del carrito
function eliminarCurso(e) {
    if (e.target.classList.contains("borrar-curso")) {
        const cursoId = e.target.getAttribute("data-id");

        //Elimina del arreglo
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)

        carritoHTML();
    }
}

//LEE EL CONTENIDO DEL HTML AL QUE LE DIMOS CLICK Y EXTRAE LA INFO
function leerDatosCurso(curso) {
    // console.log(curso);

    //Crear un objeto con el cont del curso
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        nombre: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }

    //Revisamos si el elemento ya existe
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)

    if (existe) {

        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++
                return curso //Retorna el objeto actualizado
            } else {
                return curso; //Retorna los objetos que no son duplicados
            }
        })

        articulosCarrito = [...cursos];

    } else {
        //Agregamos el curso al carrito
        articulosCarrito = [...articulosCarrito, infoCurso]
    }


    console.log(articulosCarrito);

    carritoHTML();

}

//Muestra el carrito de compras en el HTML
function carritoHTML() {

    //Limpiar el HTML
    limpiarHTML();

    articulosCarrito.forEach(curso => {
        const { imagen, nombre, precio, cantidad, id } = curso;
        const row = document.createElement("TR");
        row.innerHTML = `
                <td>
                    <img src="${imagen}" width="100">
                </td>       
                <td>${nombre}</td>       
                <td>${precio}</td>       
                <td>${cantidad}</td>       
                <td>
                    <a href="#" class="borrar-curso" data-id="${id}" >X</a>
                </td>       
        `

        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.append(row)
    })

    sincronizarStorage();  
}

//Eliminar los cursos del HTML
function limpiarHTML() {
    //Forma lenta
    // contenedorCarrito.innerHTML = "";

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

function sincronizarStorage() {
    localStorage.setItem('productos', JSON.stringify(articulosCarrito));
}