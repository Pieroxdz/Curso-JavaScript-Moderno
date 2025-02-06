//Variables y selectores
const formulario = document.querySelector("#agregar-gasto")
const gastoListado = document.querySelector("#gastos ul")

//EVENTOS
function eventListeners() {
    document.addEventListener("DOMContentLoaded", preguntarPresupuesto)
    formulario.addEventListener("submit", agregarGasto)
}

eventListeners()


//CLASES
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto)
        this.restante = presupuesto
        this.gastos = []
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto]
        this.calcularRestante()
    }

    calcularRestante(){
        //El total comienza en 0  y se le va ir sumando la cantidad de cada gasto
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0)
        this.restante = this.presupuesto - gastado
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id)
        this.calcularRestante()
    }
}

class UI{

    insertarPresupuesto(cantidad){
        //Extrayendo el valor
        const {presupuesto, restante} = cantidad

        //Agregar al HTML
        document.querySelector("#total").textContent = presupuesto
        document.querySelector("#restante").textContent = restante
    }

    imprimirAlerta(mensaje, tipo){
        //Crear al div
        const divMensaje = document.createElement("DIV")
        divMensaje.classList.add("text-center", "alert")

        if(tipo === "error"){
            divMensaje.classList.add("alert-danger")
        }else{
            divMensaje.classList.add("alert-success")
        }

        //Mensaje de error
        divMensaje.textContent = mensaje

        //Insertar en el HTML
        document.querySelector(".primario").insertBefore(divMensaje, formulario)

        //Quitar del HTML
        setTimeout(() => {
            divMensaje.remove()
        }, 3000);
    }

    mostrarGastos(gastos){

        this.limpiarHTML()//Para eliminar el cod previo

        //ITERAR SOBRE LOS GASTOS
        gastos.forEach(gasto => {
            const {cantidad, nombre, id} = gasto

            //CREAR UN LI
            const nuevoGasto = document.createElement("LI")
            nuevoGasto.className = "list-group-item d-flex justify-content-between align-items-center"
            // nuevoGasto.setAttribute("data-id", id)
            nuevoGasto.dataset.id = id

            //AGREGAR AL HTML EL GASTO
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">${cantidad}</span>`

            const btnBorrar = document.createElement("BUTTON")
            btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto")
            btnBorrar.innerHTML = "Borrar &times"
            btnBorrar.onclick = () => {
                eliminarGasto(id)
            }
            nuevoGasto.appendChild(btnBorrar)

            //AGREGAR AL HTML
            gastoListado.appendChild(nuevoGasto)

        });
    }

    limpiarHTML(){
        while (gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild)
        }
    }

    actualizarRestante(restante){
        document.querySelector("#restante").textContent = restante
    }

    comprobarPresupuesto(presupuestObj){
        const {presupuesto, restante} = presupuestObj
        const restanteDiv = document.querySelector(".restante")

        if( (presupuesto / 4) > restante ){
            restanteDiv.classList.remove("alert-success", "alert-warning")
            restanteDiv.classList.add("alert-danger")
        }else if((presupuesto / 2) > restante){
            restanteDiv.classList.remove("alert-success")
            restanteDiv.classList.add("alert-warning")
        }else{
            restanteDiv.classList.remove("alert-danger", "alert-warning")
            restanteDiv.classList.add("alert-success")
        }

        //Si el total es 0 o menor
        if(restante <= 0){
            ui.imprimirAlerta("El presupuesto se ha agotado", "error")
            formulario.querySelector("button[type='submit']").disabled = true
        }
    }
}

//INTANCIAMOS
let presupuesto
const ui = new UI()


//FUNCIONES
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt("Cúal es tu presupuesto?")

    if (presupuestoUsuario === "" || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload()
    }

    //Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario)

    ui.insertarPresupuesto(presupuesto)
}

function agregarGasto(e) {
    e.preventDefault()

    //Leer datos del formulario
    const nombre = document.querySelector("#gasto").value
    const cantidad = Number(document.querySelector("#cantidad").value)

    //Validar
    if(nombre === "" || cantidad === "" ){
        ui.imprimirAlerta("Ambos campos son obligatorios", "error")
        return
    } else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta("Cantidad no válida", "error")
        return
    }

    //Generar un objeto con el gasto
    const gasto = { 
                    nombre, 
                    cantidad, 
                    id: Date.now()
                }

    //Añade u nuevo gasto
    presupuesto.nuevoGasto(gasto)

    //Mensaje de todo bien
    ui.imprimirAlerta("Gasto agregado correctamente")

    //Imprimir los gastos
    const {gastos, restante} = presupuesto
    ui.mostrarGastos(gastos)
    ui.actualizarRestante(restante)
    ui.comprobarPresupuesto(presupuesto)

    //Reinicia el formulario
    formulario.reset()
}

function eliminarGasto(id){
    //Elimina del objeto
    presupuesto.eliminarGasto(id)

    //Elimina los gastos del HTML
    const { gastos, restante } = presupuesto
    ui.mostrarGastos(gastos)
    ui.actualizarRestante(restante)
    ui.comprobarPresupuesto(presupuesto)
}