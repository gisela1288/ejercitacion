//Crear una función esPar que tome como argumento un número
//y devuelva true si dicho números es par o false si no lo es

//TIP: un número es par si divido por 2 el resto
//(o módulo) de esa operación es 0


// = --> asignacion
// == --->comparacion 
// === ---> comparacion estricta 

const esPar = (numero) => {
  //if (numero % 2 == 0) {
   // return true;
  //} else {
    //return false;

    return (numero %2) == 0;
  };


  //la exresion mas comprimida:
//const esPar = (numero)=>  numero % 2 == 0;



console.log(esPar(2)), esPar(3);

//opcion 1:
//const esImpar = (numero) => numero % 2 == 1;
//opcion 2:
//const esImpar = (numero) => numero % 2 == 1;

// opcion 3: 
const esImpar = (numero)=>  !esPar (numero) ;
console.log(esImpar(2)), esImpar(3);