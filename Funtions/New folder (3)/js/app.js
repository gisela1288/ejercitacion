const gritar = (palabra) => `¡${palabra}!`;
console.log(gritar(`hola`), gritar(`aaaa`));

const obtenerNombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;
console.log(obtenerNombreCompleto(`Ada`, `Lovelace`));

const saludar = (nombre) => {
  return`hola ${nombre}, un gusto conocerte.`;
};
console.log(saludar(`Ada`));

//Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), 
//crear una función saludarGritando que tome como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación.

//saludarGritando('Ada', 'Lovelace') // ¡Hola Ada Lovelace, un gusto conocerte!
//TIP: recordá que los resultados de funciones se pueden guardar en variables para usarlos más adelante

//const nombreCompleto = obtenerNombreCompleto('Ada', 'Lovelace')
//const saludo = saludar(nombreCompleto)
//const grito = gritar(saludo)
//console.log(grito) // ¡Hola Ada Lovelace, un gusto conocerte!

// ingresa a mi funcion
// despues de usar nombre commpleto
// despues de saludar
// despues de gritar

const saludarGritando = (nombre, apellido) => {
  const nombreCompleto = obtenerNombreCompleto(nombre, apellido);
  //"Ada lovelace"
  const saludo = saludar(nombreCompleto);
  //"hola, Ada Lovelace, un gusto conocerte"
  const grito = gritar(saludo);

  return grito;
};

console.log(saludarGritando( `pepe`, `El conejo`));