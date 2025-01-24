// Seleccionamos los elementos del DOM a los que queremos añadir los event listeners
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

// Añadimos un event listener al elemento 'cardDiv' para escuchar el evento 'click'
cardDiv.addEventListener('click', (e) => {
    // Detenemos la propagación del evento para que no se disparen los listeners de los elementos padres
    e.stopPropagation();
    console.log('click en card');
});

// Añadimos un event listener al elemento 'infoDiv' para escuchar el evento 'click'
infoDiv.addEventListener('click', (e) => {
    // Detenemos la propagación del evento para que no se disparen los listeners de los elementos padres
    e.stopPropagation();
    console.log('click en info');
});

// Añadimos un event listener al elemento 'titulo' para escuchar el evento 'click'
titulo.addEventListener('click', (e) => {
    // Detenemos la propagación del evento para que no se disparen los listeners de los elementos padres
    e.stopPropagation();
    console.log('click en titulo');
});