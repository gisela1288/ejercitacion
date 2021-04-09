/*  
playlist

Crear un documento html con un título que diga Mis canciones favoritas 
y una lista desordenada. 
Pedir mediante prompts por cinco canciones 
(una a la vez), y agregar esas canciones como ítems
 de la lista desordenada 
*/
const cancion1 = prompt("qué cancion quieres agregar?");
const cancion2 = prompt("qué cancion quieres agregar?");
const cancion3 = prompt("qué cancion quieres agregar?");
const cancion4 = prompt("qué cancion quieres agregar?");
const cancion5 = prompt("qué cancion quieres agregar?");


const  primerCancion = document.querySelector(".cancion1");
const  segundaCancion = document.querySelector(".cancion2");
const  terceraCancion = document.querySelector(".cancion3");
const  cuartaCancion = document.querySelector(".cancion4");
const  quintaCancion = document.querySelector(".cancion5");

primerCancion.textContent = cancion1;
segundaCancion.textContent = cancion2;
terceraCancion.textContent = cancion3;
cuartaCancion.textContent = cancion4;
quintaCancion.textContent = cancion5;