const boton = document.getElementById('boton');
const content = document.getElementById('content');

boton.addEventListener('click', () => {

  //si tiene la clase "acordeon-boton--active"se la quita
  // si no la tiene agrega
  boton.classList.toggle('acordeon-boton--active');

  //pregunta la elemto si tiene esa clase
  //me retorns un booleano si tiene o no clase
  if (boton.classList.contains('acordeon-boton--active')) {
    content.style.maxHeight = '150px';
  } else {
    content.style.maxHeight = '0';
  }
});
