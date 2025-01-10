const num1 = 20;
const num2 = "20";
const num3 = 30;


//Revisar si 2 números son iguales
console.log(num1 == num3); //false
console.log(num1 == num2); //Se fija en el valor de la varibale

//comparador estricto
console.log(num1 === num2); // Se fija en el valor y tipo de dato
console.log(num1 ===  parseInt(num2)); 
console.log(typeof num1);
console.log(typeof num2);


//Diferente
const password = "admin";
const password2 = "Admin";

console.log(password != password2);
console.log(num1 != num2);
console.log(num1 !== num2);
console.log(num1 !== parseInt(num2));
