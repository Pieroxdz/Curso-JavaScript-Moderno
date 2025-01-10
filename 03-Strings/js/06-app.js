const producto = "Monitor de 20 pulgadas";

// .REPEAT Te va a permitir repetir una cadena de texto...
const texto = " En promoción".repeat(3); //El argumento debe ser entero
console.log(texto);
console.log(`${producto} ${texto} !!!`);

// .SPLIT para dividir una string
const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(' ')); //Le pasas el argumento por lo que quieres dividir

const hobbies = "Leer, caminar, escuchar música, escribir, aprender a programar";
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #JSModernoConJuan"
console.log(tweet.split('#'));
