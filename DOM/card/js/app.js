const titulo = document.querySelector(".titulo");
const imagen = document.querySelector(".img");
const link = document.querySelector(".link");


const tituloUsuario = prompt("ingrese el titulo");
const imagenUsuario = prompt("ingrese el link a la imagen");
const texto = prompt("ingrese el link del texto");

titulo.textContent = tituloUsuario;
imagen.src = imagenUsuario;
link.href = texto;
