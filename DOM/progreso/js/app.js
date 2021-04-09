const porcentajeProgreso = prompt (`ingrese el porcentaje de progreso`);
const progreso = document.querySelector(".progreso");

progreso.style = `width: ${porcentajeProgreso*700/100}px;`;