//Selectores

//CONSTRUCTORES
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function () {
    // 1 = Americano 1.15
    // 2 = Asiatico 1.05 
    // 3 = Europeo 1.35

    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case "1":
            cantidad = base * 1.15;
            break;
        case "2":
            cantidad = base * 1.05;
            break;
        case "3":
            cantidad = base * 1.35;
            break;
        default:
            break;
    }

    //Leer el año
    const diferencia = new Date().getFullYear() - this.year;

    //CADA AÑO QUE LA DIFERENCIA ES MAYOR EL COSTO VA A REDUCIR UN 3%
    cantidad -= ((diferencia * 3) * cantidad) / 100;


    // Si el seguro es básico se multiplica por un 30% más
    // Si el seguro es completo se multiplica por un 50% más

    if(this.tipo === "basico"){
        cantidad *= 1.30;
    }

    if(this.tipo === "completo"){
        cantidad *= 1.50;
    }

    return cantidad;
}

function UI() {

}

//COMO UI NO TIENE VALORES ES RECOMENDADO USAR ARROW FUNCTIONS
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear();
    const min = max - 20;

    //SELECCIONAMOS EL SELECT
    const selectYear = document.querySelector('#year');

    //CARGAMOS EL SELECT
    for (let i = max; i >= min; i--) {
        let option = document.createElement('OPTION');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('DIV');

    if (tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);
}

UI.prototype.mostrarResultado = (total, seguro) => {

    const {marca, year, tipo} = seguro;
    let textoMarca;

    switch (marca) {
        case "1":
            textoMarca =  "Americano";
            break;
        case "2":
            textoMarca = "Asiatico";
            break;
        case "3":
            textoMarca = "Europeo";
            break;
        default:
            break;
    }



    //CREAR EL RESULTADO
    const div = document.createElement("DIV");
    div.classList.add("mt-10");
    div.innerHTML = `
        <p class="header">Tu Resumen</p>
        <p class="font-bold">Marca: <span class="font-normal">${textoMarca}</span></p>
        <p class="font-bold">Año: <span class="font-normal">${year}</span></p>
        <p class="font-bold">Tipo: <span class="font-normal capitalize">${tipo}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$${total}</span></p>
    `;
    const resultadoDiv = document.querySelector('#resultado');
    
    //Mostrar el spinner
    const spinner = document.querySelector("#cargando");
    spinner.style.display = "block";
    
    setTimeout(() => {
        spinner.style.display = "none";
        resultadoDiv.appendChild(div);
    }, 3000);
}

//Instancias UI
const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); //Llenar el select con los años
});

function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

eventListeners();

function cotizarSeguro(e) {
    e.preventDefault();

    //Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;


    //Leer el año seleccionado
    const year = document.querySelector('#year').value;

    //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }

    ui.mostrarMensaje('Cotizando...', 'exito');

    //Ocultar cotizaciones previas
    const resultados = document.querySelector("#resultado div");
    if (resultados !== null) {
        resultados.remove();
    }

    //Instancia seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();

    ui.mostrarResultado(total, seguro)
}