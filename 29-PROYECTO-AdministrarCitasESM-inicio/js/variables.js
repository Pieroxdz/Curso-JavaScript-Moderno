import { generarId } from "./funciones.js"

let editando = {
    false: false
}

// Objeto de Cita
const citaObj = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

export{
    editando,
    citaObj
}