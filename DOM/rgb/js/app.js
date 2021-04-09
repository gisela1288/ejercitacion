//Hacer un programa que al iniciarse pida mediante tres prompts ingresar 
//los valores correspondientes a un color en sistema rgb,
// y una vez ingresado ponga el color de fondo del body con dicho color. 
//Los valores van del 0 al 255 y corresponden a rojo, verde y azul.

const red = prompt ("ingrese un valor para rojo");
const green = prompt ("ingrese un valor para verde");
const blue = prompt ("ingrese un valor para azul");

const body = document.querySelector(`body`);
body.style = `background-color: rgb(${red},${green},${blue});`;

 










