1
const color =  prompt ("ingrese un color");

const cuerpo = document.querySelector("body");

const estilos = `background-color: #${color};`

cuerpo.style = estilos;



const idSeleccionado = document.getElementById("medio");
idSeleccionado.innerHTML = "este es el elegido";
idSeleccionado.classList.remove("rojo");
idSeleccionado.classList.add("verde");

