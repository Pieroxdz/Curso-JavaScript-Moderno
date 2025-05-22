const criptoMonedasSelect = document.querySelector("#criptomonedas");
const monedaSelect = document.querySelector("#moneda");
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

const objBusqueda = {
    moneda: "",
    criptomoneda: "",
}

document.addEventListener("DOMContentLoaded", () => {
    consultarCriptomonedas();

    formulario.addEventListener("submit", submitFormulario);
    criptoMonedasSelect.addEventListener("change", leerValor);
    monedaSelect.addEventListener("change", leerValor);
});

//Crear un promise
const obtenerCriptomonedas = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas);
})

function consultarCriptomonedas() {
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => obtenerCriptomonedas(resultado.Data))
        .then(criptomonedas => selectCriptomonedas(criptomonedas))
        .catch((error) => console.log(error));
}

function selectCriptomonedas(criptomonedas) {
    criptomonedas.forEach(cripto => {
        const { FullName, Name } = cripto.CoinInfo;
        const option = document.createElement("OPTION");
        option.value = Name;
        option.textContent = FullName;
        criptoMonedasSelect.appendChild(option);
    });
}

function leerValor(e) {
    objBusqueda[e.target.name] = e.target.value;
}

function submitFormulario(e) {
    e.preventDefault();

    //Validar
    const { moneda, criptomoneda } = objBusqueda;

    if (moneda === "" || criptomoneda === "") {
        mostrarAlerta("Ambos campos son obligatorios");
        return;
    }

    consultarAPI();
}

function mostrarAlerta(mensaje) {
    const existeError = document.querySelector(".error");

    //Si no existe se crea el mensaje
    if (!existeError) {
        const divMensaje = document.createElement("DIV");
        divMensaje.classList.add("error");

        //Mensaje de error
        divMensaje.textContent = mensaje;
        formulario.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}

function consultarAPI() {
    const { moneda, criptomoneda } = objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(cotizacion => mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]))
        .catch((error) => console.log(error));
}

function mostrarCotizacionHTML(cotizacion) {
    limpiarHTML(resultado);

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

    const precio = document.createElement("P");
    precio.classList.add("precio"); //SE AGREGA ESTA CLASE PARA RESALTAR EL PRECIO O DARLE UN FORMATO ESPECIAL
    precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement("P");
    precioAlto.innerHTML = `<p>Precio más alto del día: <span>${HIGHDAY}</span></p>`;

    const precioBajo = document.createElement("P");
    precioBajo.innerHTML = `<p>Precio más bajo del día: <span>${LOWDAY}</span></p>`;

    const variacion = document.createElement("P");
    variacion.innerHTML = `<p>Variación últimas 24 horas: <span>${CHANGEPCT24HOUR}</span></p>`;

    const ultimaActualizacion = document.createElement("P");
    ultimaActualizacion.innerHTML = `<p>Última actualización: <span>${LASTUPDATE}</span></p>`;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(variacion);
    resultado.appendChild(ultimaActualizacion);
}

function limpiarHTML(referencia) {
    while (referencia.firstChild) {
        referencia.removeChild(referencia.firstChild);
    }
}

function mostrarSpinner() {
    limpiarHTML(resultado);

    const spinner = document.createElement("DIV");
    spinner.classList.add("spinner");

    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;

    resultado.appendChild(spinner);
}