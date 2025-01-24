console.log(1); //Este carga primero


document.addEventListener("DOMContentLoaded", () => {
    console.log(2); //Este carga tercero
});

console.log(3); //Este carga segundo