/* ----------------------------- Modal ----------------------------- */

const cerrar = document.getElementById('close');
const abrir = document.getElementById('cta');
const modal = document.getElementById('modal');
const modalContainer = document.getElementById('modal-container');

abrir.addEventListener('click', (e) => {
  //evita que se redirija a otra pagina. Puede usarse un buttom y no seria necesario el preventDefault
  e.preventDefault();
  modalContainer.style.opacity = '1';
  modalContainer.style.visibility = 'visible';
  modal.classList.toggle('modal-close');
});

cerrar.addEventListener('click', () => {
  modal.classList.toggle('modal-close');
});

//tambien puede ir:
cerrar.addEventListener ('click'),() => {
 modal.classList.add (`modal-close`);
 modalContainer.style.opacity = `0`;
 modalContainer.style.visibility = `hidden`;

};
