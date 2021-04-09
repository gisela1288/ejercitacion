//.length me dice el largo de mi string


const texto = "hola, como estas"
console.log(texto.length);

//toUpperCase: pasa el texto a mayusculas
//toLowerCase: pasa el texto a miniscula
//se puede usar cuando necesito comparar dos strings y uno sea sencible a mayusculas.

console.log(texto.toUpperCase());
console.log(trexto.toLowerCase());
 // slice recibe dos paramtros, el primero indica donde empiezo a cortar y el segundo me dice hasta donde. 
 //el segundo es oopciona, no hace falta colocarlo
 //cuando el 2do parametro es un numer negativo cuneta de derecha a izquierda
const cadena1 = "la mañana se nos echa encima";
const cadena2 = cadena1.slice(3,10);

console.log(`ballena zul`.length);

//no es neceario guardar el string en una variable
`ballena azul`.includes(`ballena`);

//.includes me retorna un TRUE si el strign que busco esta dentro de otro
// el 2do parametro indica apartir de que caracter empieza a buscar
console.log(`azul ballena zul`.includes(`azul`,3));


//indexOf a diferencia del include, me dice en que posicon se encuentra la palabra que busco
// si me devuelve el -1 es porque no encuentra la palabra
`ballena azul`.indexOf(`Azul`); //returns -1
`ballena azul`.indexOf(`azul`); //returns 7


//replace recibe dos parametros.
//el primero es un string o regex(expresion regular) y
//elsegundo el texto por el cual quiero cambiar
const p = `the quick brown fox jumps over the lazy dog. If the dog reacted was it really lazy?`
console.log(p.replace(`dog`,`monkey`));

//reemplaza l
console.log(p.replace([ou]/gi),`i`);