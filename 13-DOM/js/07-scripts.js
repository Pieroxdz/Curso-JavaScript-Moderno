const encabezado = document.querySelector("h1");
// console.log(encabezado.style);

//NO ES RECOMENDABLE HACER ESTO EN JS, SOLO AÑADIR O QUITAR CLASES
//LOS ESTILOS DEJARSELOS A CSS
// encabezado.style.color = "red";
// encabezado.style.fontFamily = "Arial";
// encabezado.style.textTransform = "uppercase";

const card = document.querySelector(".card");
card.classList.add("nueva-clase", "segunda-clase");
card.classList.remove("segunda-clase");
console.log(card.classList);



