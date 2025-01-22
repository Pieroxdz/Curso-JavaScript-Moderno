const enlace = document.createElement("A");

//Agregando el texto
enlace.textContent = "Nuevo enlace";

//Añadiendo el href
enlace.href = "/nuevo-enlace";

//Añadiendo el target
enlace.target = "_blank";

enlace.classList.add("nuevo-enlace")

enlace.onclick = miFuncion;

function miFuncion(){
    alert("Diste click");
}

const navegacion = document.querySelector(".navegacion");
// navegacion.appendChild(enlace);

//Y si lo quiero insertar en otro lugar distinto al final?
console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]);

//Crear un CARD
const parrafo1 = document.createElement("P");
parrafo1.textContent = "Concierto"
parrafo1.classList.add("categoria", "concierto")

const parrafo2 = document.createElement("P");
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement("P");
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add("precio");

//Crear div con la clase de info
const info = document.createElement("DIV");
info.classList.add("info")

info.append(parrafo1, parrafo2, parrafo3);
//Creamos la iamgen
const imagen = document.createElement("IMG");
imagen.src = "img/hacer2.jpg";
imagen.alt = "Texto alternativo";

//Crear el card
const card = document.createElement("DIV");
card.classList.add(".card");

//Asignar la imagen
card.appendChild(imagen)
card.appendChild(info)

console.log(card);

//Insertar en el HTML
const contenedor = document.querySelector(".hacer .contenedor-cards");

contenedor.appendChild(card);
