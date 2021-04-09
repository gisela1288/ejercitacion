//Hacer un programa que al iniciarse pida 
//mediante un prompt ingresar un color en sistema hexadecimal,
// y una vez ingresado ponga el color de fondo del body con dicho color.


// 1-pedir un color al usuario
// --mediante un promt
// 2-cambiar el color
//  a- obtener el body en el html
//  b- cambiar el color del background 

const color = prompt (`ingrese el color`);
const body = document.querySelector(`body`);
body.style = `background-color: ${color};`;


























