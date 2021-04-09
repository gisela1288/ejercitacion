//Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre,
// y una vez ingresado muestre un saludo con el nombre dentro de un h1. 
//El h1 debe estar centrado y tener un tamaño de letra 
//y una tipografía distinta de la que viene por defecto.

// por clase
// por id
//por etiqueta o por tag "p"

const saludo = document.querySelector (`#saludo`);
//const saludo = document.querySelector (`.tituo`);
//const saludo = document.querySelector (`h1`);


//const saludo = document.getElementById(`saludo`);
const saludo1 = document.getElementById(`saludo1`);

const nombre = prompt (`ingrese su nombre`);

// textContent : escribo texto plano,
//innerHtml: cada vez que encuentre unaa etiqueta html lo reconoce y la aplica

saludo.textContent = `Hola ${nombre} como estas?`
saludo1.innerHTML = `Hola <strong>${nombre} </strong> como estas?`



// traen grupos
//const saludo = querySelectorAll ("h1");
//const saludo = document.getElementsByTagName(`h1`);
//const saludo = document.getElementsByClassName (`titulo`);





