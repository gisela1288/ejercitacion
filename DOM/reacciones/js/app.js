/*
reacciones
En un documento html hacer un post de una red social que contenga:

un h3 con la usuaria
un p con un lorem ipsum
3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) 
más un número con la cantidad
Dar estilos para que

la tipografía sea distinta a la default
los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave 
y un border radius
Hacer un programa que al iniciarse pregunte mediante tres prompts
 por la cantidad de cada una de las reacciones 
 y actualice los valores de los spans correspondientes 
 */


const meGusta = Number(prompt("cuantos me gusta?"));
const meEncanta = Number(prompt("cuantos me encanta?"));
const meAsombra = Number(prompt("cuantos me asombra?"));

const gusta = document.querySelector(".numeroGusta");
const encanta = document.querySelector(".numeroEncanta");
const asombra = document.querySelector(".numeroAsombra");

gusta.textContent = ` ${meGusta}`;
encanta.textContent = `  ${meEncanta}`;
asombra.textContent = ` ${meAsombra}`;