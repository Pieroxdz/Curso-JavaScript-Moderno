const navegacion = document.querySelector(".navegacion");
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
// console.log(navegacion.childNodes); //Los espacios en blanco son considerados elementos
// console.log(navegacion.children);

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector(".card");
// card.children[1].children[1].textContent = "Nuevo heading desde traversing the DOM"
//El hijo en el indice 0 es una etiqueta img
// card.children[0].src = "img/hacer3.jpg";
// console.log(card.children[1].children[1].textContent);


//TRAVERSING DE HIJO AL PADRE
// console.log(card.parentNode);
// console.log(card.parentElement.parentElement.parentElement); //usar este es más recomendado

// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector(".card:nth-child(4)")
console.log(ultimoCard.previousElementSibling);
