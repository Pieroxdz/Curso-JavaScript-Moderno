const contenido = document.querySelector("#resumen .contenido");

let cliente = {
    mesa: "",
    hora: "",
    pedido: [] //Aquí se inserta la data de los platillos
}

const categorias = {
    1: "Comida",
    2: "Bebida",
    3: "Postres"
}

const btnGuardarCliente = document.querySelector("#guardar-cliente");
btnGuardarCliente.addEventListener("click", guardarCliente);

function guardarCliente() {
    const mesa = document.querySelector("#mesa").value;
    const hora = document.querySelector("#hora").value;

    //Revisar que los campos no esten vacios
    const camposVacios = [mesa, hora].some(campo => campo === "");

    if (camposVacios) {
        //Verificar si ya existe una alerta
        const existeAlerta = document.querySelector(".invalid-feedback");

        if (!existeAlerta) {
            const alerta = document.createElement("DIV");
            alerta.classList.add("invalid-feedback", "d-block", "text-center");
            alerta.textContent = "Todos los campos son obligatorios";
            document.querySelector(".modal-body form").appendChild(alerta);

            //Eliminar la alerta despues de 3 segundos
            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }

        return;
    }

    // Usar el spread operator para mantener el pedido actual al actualizar mesa y hora
    cliente = { ...cliente, mesa, hora };
    // console.log(cliente);


    //Ocultar el modal
    const modalFormulario = document.querySelector("#formulario");
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();

    //Mostrar la seccioones
    mostrarSecciones();

    //Obtener Platillos de la API de JSON-Server
    obtenerPlatillos();
}

function mostrarSecciones() {
    const seccionesOcultas = document.querySelectorAll(".d-none");

    seccionesOcultas.forEach(seccion => seccion.classList.remove("d-none"));

}

function obtenerPlatillos() {
    const url = "http://localhost:3000/platillos"

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarPlatillos(resultado))
        .catch(error => console.log(error));
}

function mostrarPlatillos(platillos) {
    const contenido = document.querySelector("#platillos .contenido");

    platillos.forEach(platillo => {


        const row = document.createElement("DIV");
        row.classList.add("row", "py-3", "border-top");

        const nombre = document.createElement("DIV");
        nombre.classList.add("col-md-4");
        nombre.textContent = platillo.nombre;

        const precio = document.createElement("DIV");
        precio.classList.add("col-md-3", "fw-bold");
        precio.textContent = `$${platillo.precio}`;

        const categoria = document.createElement("DIV");
        categoria.classList.add("col-md-3");
        categoria.textContent = categorias[platillo.categoria];


        const inputCantidad = document.createElement("INPUT");
        inputCantidad.type = "number";
        inputCantidad.min = 0
        inputCantidad.value = 0;
        inputCantidad.id = `producto-${platillo.id}`;
        inputCantidad.classList.add("form-control");

        //Función que detecta la cantidad y el platillo que está agregando
        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value);
            //Agregamos la cantidad al objeto platillo
            agregarPlatillo({ ...platillo, cantidad });
        };


        const agregar = document.createElement("DIV");
        agregar.classList.add("col-md-2");
        agregar.appendChild(inputCantidad);

        row.appendChild(nombre);
        row.appendChild(precio);
        row.appendChild(categoria);
        row.appendChild(agregar);

        contenido.appendChild(row);
    })
}

function agregarPlatillo(producto) {

    //Extraer el pedido actual
    let { pedido } = cliente;

    if (producto.cantidad > 0) {

        //Comprobar si el elemento ya existe en el pedido
        if (pedido.some(articulo => articulo.id === producto.id)) {
            //Actualizar la cantidad
            const pedidoActualizado = pedido.map(articulo => {
                if (articulo.id === producto.id) {
                    articulo.cantidad = producto.cantidad;
                }
                return articulo;
            })

            //Se asigna el nuevo array a cliente.pedido
            cliente.pedido = [...pedidoActualizado];
        } else {
            //Agregar el nuevo elemento al pedido
            ; cliente.pedido = [...pedido, producto];
        }

    } else {
        //Eliminar el elemento del pedido
        const resultado = pedido.filter(articulo => articulo.id !== producto.id);
        cliente.pedido = [...resultado];
    }

    //Limpiar el contenido previo
    limpiarHTML(contenido);

    if (cliente.pedido.length) {
        //Mostrar el Resumen
        actualizarResumen();
    } else {
        mensajePedidoVacio();
    }

}

function actualizarResumen() {

    const resumen = document.createElement("DIV");
    resumen.classList.add("col-md-6", "card", "py-2", "px-3", "shadow");

    //Info de la mesa
    const mesa = document.createElement("P");
    mesa.textContent = "Mesa: ";
    mesa.classList.add("fw-bold");

    const mesaSpan = document.createElement("SPAN");
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add("fw-normal");

    //Info de la hora
    const hora = document.createElement("P");
    hora.textContent = "Hora: ";
    hora.classList.add("fw-bold");

    const horaSpan = document.createElement("SPAN");
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add("fw-normal");

    //Agregar a los elemtos padre
    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);

    //Titulo de la seccion
    const heading = document.createElement("H3");
    heading.textContent = "Platillos Consumidos";
    heading.classList.add("my-4", "text-center");

    //Iterar sobre el array de pedidos
    const grupo = document.createElement("UL");
    grupo.classList.add("list-group");

    const { pedido } = cliente;
    pedido.forEach(articulo => {
        const { id, nombre, precio, cantidad } = articulo;

        const lista = document.createElement("LI");
        lista.classList.add("list-group-item");

        const nombreEl = document.createElement("H4");
        nombreEl.classList.add("my-4");
        nombreEl.textContent = nombre;

        //CANTIDAD
        const cantidadEl = document.createElement("P");
        cantidadEl.classList.add("fw-bold");
        cantidadEl.textContent = "Cantidad: ";

        const cantidaValor = document.createElement("SPAN");
        cantidaValor.classList.add("fw-normal");
        cantidaValor.textContent = cantidad;


        //PRECIO
        const precioEl = document.createElement("P");
        precioEl.classList.add("fw-bold");
        precioEl.textContent = "Precio: ";

        const precioValor = document.createElement("SPAN");
        precioValor.classList.add("fw-normal");
        precioValor.textContent = `$ ${precio}`;

        //SUBTOTAL DEL ARTICULO
        const subtotalEl = document.createElement("P");
        subtotalEl.classList.add("fw-bold");
        subtotalEl.textContent = "Precio: ";

        const subtotalValor = document.createElement("SPAN");
        subtotalValor.classList.add("fw-normal");
        subtotalValor.textContent = calcularSubtotal(precio, cantidad);

        //BTN PARA ELIMINAR
        const btnEliminar = document.createElement("BUTTON");
        btnEliminar.classList.add("btn", "btn-danger");
        btnEliminar.textContent = "Eliminar del pedido";

        //Funcion para eliminar el pedido
        btnEliminar.onclick = function () {
            eliminarProducto(id);
        }

        //Agregar valores a sus contenedores
        cantidadEl.appendChild(cantidaValor);
        precioEl.appendChild(precioValor);
        subtotalEl.appendChild(subtotalValor);

        //Agregar elemtos al li
        lista.appendChild(nombreEl);
        lista.appendChild(cantidadEl);
        lista.appendChild(precioEl);
        lista.appendChild(subtotalEl);
        lista.appendChild(btnEliminar);

        //Agregar lista al grupo principal
        grupo.appendChild(lista);
    })


    //Agregar al contenido
    resumen.appendChild(heading);
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(grupo);

    contenido.appendChild(resumen);

    //Mostrar Formulario de propinas
    formularioPropinas();

}

function calcularSubtotal(precio, cantidad) {
    return `$ ${precio * cantidad}`;
}

function limpiarHTML(referencia) {
    while (referencia.firstChild) {
        referencia.removeChild(referencia.firstChild);
    }
}

function eliminarProducto(id) {
    const { pedido } = cliente;
    const resultado = pedido.filter(articulo => articulo.id !== id);
    cliente.pedido = [...resultado];

    limpiarHTML(contenido)

    if (cliente.pedido.length) {
        //Mostrar el Resumen
        actualizarResumen();
    } else {
        mensajePedidoVacio();
    }

    //El producto se eliminó por lo tanto regresamos la cantidad a 0 en el form
    const productoEliminado = `#producto-${id}`;
    const inputEliminado = document.querySelector(productoEliminado);
    inputEliminado.value = 0;
}

function mensajePedidoVacio() {
    const contenido = document.querySelector("#resumen .contenido");
    const texto = document.createElement("P");
    texto.classList.add("text-center");
    texto.textContent = "Añade los elementos del pedido";

    contenido.appendChild(texto);
}

function formularioPropinas() {
    const contenido = document.querySelector("#resumen .contenido");

    const formulario = document.createElement("DIV");
    formulario.classList.add("col-md-6", "formulario");

    const divFormulario = document.createElement("DIV");
    divFormulario.classList.add("card", "py-2", "px-3", "shadow");

    const heading = document.createElement("H3");
    heading.classList.add("my-4", "text-center");
    heading.textContent = "Propina";

    //Radio Button 10%
    const radio10 = document.createElement("INPUT");
    radio10.type = "radio";
    radio10.name = "propina";
    radio10.value = "10";
    radio10.classList.add("form-check-input");
    radio10.onclick = calcularPropina;

    const radio10Label = document.createElement("LABEL");
    radio10Label.textContent = "10%";
    radio10Label.classList.add("form-check-label");

    const radio10Div = document.createElement("DIV");
    radio10Div.classList.add("form-check");

    radio10Div.appendChild(radio10);
    radio10Div.appendChild(radio10Label);

    //Radio Button 25%
    const radio25 = document.createElement("INPUT");
    radio25.type = "radio";
    radio25.name = "propina";
    radio25.value = "25";
    radio25.classList.add("form-check-input");
    radio25.onclick = calcularPropina;


    const radio25label = document.createElement("LABEL");
    radio25label.textContent = "25%";
    radio25label.classList.add("form-check-label");

    const radio25Div = document.createElement("DIV");
    radio25Div.classList.add("form-check");

    radio25Div.appendChild(radio25);
    radio25Div.appendChild(radio25label);

    //Radio Button 50%
    const radio50 = document.createElement("INPUT");
    radio50.type = "radio";
    radio50.name = "propina";
    radio50.value = "50";
    radio50.classList.add("form-check-input");
    radio50.onclick = calcularPropina;


    const radio50Label = document.createElement("LABEL");
    radio50Label.textContent = "50%";
    radio50Label.classList.add("form-check-label");

    const radio50Div = document.createElement("DIV");
    radio50Div.classList.add("form-check");

    radio50Div.appendChild(radio50);
    radio50Div.appendChild(radio50Label);

    //Agregar al Div principal
    divFormulario.appendChild(heading);
    divFormulario.appendChild(radio10Div);
    divFormulario.appendChild(radio25Div);
    divFormulario.appendChild(radio50Div);

    // Agregar el divFormulario dentro del formulario
    formulario.appendChild(divFormulario);

    //Agregar al formulario
    contenido.appendChild(formulario);
}

function calcularPropina() {
    const { pedido } = cliente;

    let subtotal = 0;

    //Calcular el subtotal
    pedido.forEach(articulo => {
        subtotal += articulo.cantidad * articulo.precio;
    })

    //Seleccionar el radio button con la propina del cliente
    const propinaSeleccionada = document.querySelector("[name='propina']:checked").value;

    //Calcular la propina - regla de tres
    const propina = ((subtotal * parseInt(propinaSeleccionada)) / 100);

    //Calcular el total
    const total = subtotal + propina;

    mostrarTotalHTML(subtotal, total, propina)
    
}

function mostrarTotalHTML(subtotal, total, propina) {

    const divTotales = document.createElement("DIV");
    divTotales.classList.add("total-pagar", "my-5");

    //Subtotal
    const subtotalparrafo = document.createElement("P");
    subtotalparrafo.classList.add("fs-4", "fw-bold", "mt-2");
    subtotalparrafo.textContent = "Subtotal Consumo: ";

    const subtotalSpan = document.createElement("SPAN");
    subtotalSpan.classList.add("fw-normal");
    subtotalSpan.textContent = `$ ${subtotal}`;

    subtotalparrafo.appendChild(subtotalSpan);

    //Propina
    const propinaparrafo = document.createElement("P");
    propinaparrafo.classList.add("fs-4", "fw-bold", "mt-2");
    propinaparrafo.textContent = "Propina: ";

    const propinaSpan = document.createElement("SPAN");
    propinaSpan.classList.add("fw-normal");
    propinaSpan.textContent = `$ ${propina}`;

    propinaparrafo.appendChild(propinaSpan);

    //Total
    const totalparrafo = document.createElement("P");
    totalparrafo.classList.add("fs-4", "fw-bold", "mt-2");
    totalparrafo.textContent = "Total a Pagar: ";

    const totalSpan = document.createElement("SPAN");
    totalSpan.classList.add("fw-normal");
    totalSpan.textContent = `$ ${total}`;

    totalparrafo.appendChild(totalSpan);

    //Eliminar el ultimo resultado
    const totalpagarDiv = document.querySelector(".total-pagar");
    if (totalpagarDiv) {
        totalpagarDiv.remove();
    }

    divTotales.appendChild(subtotalparrafo);
    divTotales.appendChild(propinaparrafo);
    divTotales.appendChild(totalparrafo);

    const formulario = document.querySelector(".formulario > div");
    formulario.appendChild(divTotales);
}