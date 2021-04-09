
/*

var nombre=prompt("decime tu nombre");
var apellido= prompt("tu apellido");
alert("Hola " + " " + nombre + " " + apellido + " bienvenida a Ada");
console.log("hola" + " "+ nombre+ " " + apellido + "bienvenida a Ada");


var nombre=prompt(" Decime tu nombre");
var apellido= prompt("tu apellido");
console.log(`Tu nombre es ${nombre}  ${apellido}`);

var numero1 = prompt ("ingresa un numero"),
    numero2 = 3;
const suma= numero1 + numero2;
//El typeof marca el tipo de dato
//    String
//    number
//    date
//    booleaan
console.log(numero1 +  numero2)
console.log ( `el resultado es ${suma}`);
console.log(typeof numero1);
console.log(typeof numero2);
console.log(`el resultado es `+ typeof number1)

*/

/*

let numero1= prompt ("Numero1"),
    numero2= prompt ("Numero2");

let resultado = Number (numero1)+ Number(numero2);
let resultado2= number1 + numero2;
*/
/*
console.log("Entro");

let gusto1 = prompt("ingrese el primer gusto de helado");
let gusto2 = prompt("ingrese el segundo gusto de helado");
let gusto3 = prompt("ingrese el tercer gusto de helado");
console.log (`Aqui tiene su helado de ${gusto1}, ${gusto2} y ${gusto3}`)
alert(`Aqui tiene su helado de ${gusto1}, ${gusto2} y ${gusto3}`);
*/

/*
let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let edad = prompt("ingrese su edad");
let nacionalidad = prompt("ingrese nacionalidad");
let DNI = prompt("ingrese su DNI");

console.log (`Nuevo usuario agregado al sistema: ${nombre}, ${apellido}, ${edad}, ${nacionalidad} y ${DNI}`);
alert(`Nuevo usuario agregado al sistema: ${nombre}, ${apellido}, de ${edad} años, ${nacionalidad} y ${DNI}`);
*/
/*
let años = prompt("ingrese una edad");
let años_perro = años * 7;
alert(`tu edad en años perro es: ${años_perro}`);
/*

let playlist = prompt("ingresa el nombre de tu playlist");
let cancion_1 = prompt ("ingrese el titulo de la primera cancion")
*/

/*
function saludo (nombre){
    console.log (`Hola ${nombre}`);
    console.log (`Chau ${nombre}`);
}

saludo(`juan`)
saludo(`ana`)
saludo(`moises`)

function presentacion (nombre,edad){
    alert(`Su nombre es: ${nombre} y su edad es: ${edad} `)
}
presentacion (`Moises`, `solo Dios sabe`)
*/
/*
const sumar = (parametro1, parametro2) =>{
    let suma = parametro1 + parametro2;
    return suma;
}

let valorsumado= sumar (2, 5);
console.log (valorsumado);
*/
/*
let nombre = prompt ("ingrse su nombre");
let apellido = prompt ("ingrse apellido");

const saludar = (name, surname)=>{
     alert (`Hola ${name} ${surname}, bienvenido a Ada`);

}

let lider = "lider";
let liderAp = "batman"

saludar (nombre, apellido);
saludar (`pepe`, `argento`);
saludar (apellido, nombre)
saludar (lider, liderAp);
*/

/*
let nombre = prompt ("ingrse su nombre");
let apellido = prompt ("ingrse apellido");

const saludar = (name, surname)=>{
     return (`Hola ${name} ${surname}, bienvenido a Ada`);

}

let lider = "lider";
let liderAp = "batman"

let textoConsola = saludar (nombre, apellido);
alert (textoConsola);

textoConsola = saludar (`pepe`, `argento`);
console.log (textoConsola),
saludar (apellido, nombre)
saludar (lider, liderAp);
*/



/*


const libros= 100;
const pizarra= 120;
const revista= 50;

const IMPUESTO = 1.3;
const DESCUENTO =0.9;

console.log (`el producto sale ${libros * DESCUENTO * IMPUESTO }`);
alert (`El producto sale ${libros * DESCUENTO * IMPUESTO }`)
console.log (`el producto sale ${pizarra* DESCUENTO * IMPUESTO }`);
alert (`El producto sale ${pizarra * DESCUENTO * IMPUESTO }`);

console.log (`el producto sale ${revista * DESCUENTO * IMPUESTO }`);
alert (`El producto sale ${revista  * DESCUENTO * IMPUESTO }`);
*/

/*
const IMPUESTO = 1.3;
const DESCUENTO =0.9;


const imprimirPrecio =(item,nombre) =>{
    let mensajePrecioFinal = `el producto ${nombre} cuesta ${(item * DESCUENTO) * IMPUESTO}`;
    console.log (mensajePrecioFinal);
    alert (mensajePrecioFinal)
}

imprimirPrecio (libros, `libros`);
imprimirPrecio (pizarra,`pizarra`);
imprimirPrecio (revista, `revista`);

*/



/*
const sumar = (num1, num2)=>{
    let resultado= num1+num2;
    return num1+num2;

}
console.log(sumar (2,3));
console.log(sumar (1.2, 3.4));
console.log(sumar (3,-5));
*/

/*
const calcularAreaDelTriangulo = (base,altura) =>{
    return ((base * altura)/2);
}

console.log(calcularAreaDelTriangulo (3,4));


let alturaTriangulo = prompt (`ingrese la altura del triangulo`);
let baseTriangulo = prompt (`ingrese la base del triangulo`);
let areaTriangulo = calcularAreaDelTriangulo (baseTriangulo,alturaTriangulo);
console.log(`el area del triangulo es ${areaDelTriangulo}`);
*/

/*
var articulo = prompt("ingrese el precio del articulo");
var articuloConDescuento = articulo*0.8;
console.log(articuloConDescuento);
var precioFinal = articuloConDescuento*1.15;
alert (precioFinal);
console.log( precioFinal);

*/

/*
function saludo (nombre, edad){
    return alert (`hola`);
}

saludo (`natalia`, 30);
saludo (`sandra`, 30)
*/

/*
//forma 1 de la funcion resta

function resta(num1,num2){
     
    let resultado = num1 - num2;
    return resultado
}

console.log (resta (prompt (`valor1`), prompt(`valor2`)));
*/

/*forma 2 de la funcion resta:
function resta(num1,num2){ 
    let resultado = num1 - num2;
    return resultado
}
let numero1 = Number(prompt(`ingrese valor1`));
let numero2 = Number(prompt(`ingrese valor2`));

console.log (resta(numero1,numero2));
*/




/*
forma 1:
function area(base, altura){
    let areaTriangulo = (base*altura)/2;
    return areaTriangulo;
}
console.log (area (prompt (`ingrese base`), prompt(`ingrese altura`)));

forma 2:
function area (base,altura){
    let areaDelTriangulo = (base*altura)/2;
    return areaDelTriangulo;
}
let valorBase = Number(prompt (`ingrese la base`));
let valorAltura = Number(prompt (`ingrese la altura`));
console.log (area (valorBase,valorAltura));

*/



/*
function compararNumeros (num1, num2 ){
  
    if (num1==num2){
        return (1);
    }
    else{
        return(-1)
    }
}

let numero1 = Number (prompt (`ingrese un numero`));
let numero2 = Number (prompt (`ingrese un numero`));
console.log (compararNumeros (numero1,numero2));
*/
/*
function comparar_numeros (valor1,valor2){
  
    if (valor1==valor2){
        return 1;
    }
    else{
        return(-1)
    }
}

let numero1 = 10;
let numero2 = 10;
let comparacion = comparar_numeros (numero1,numero2);
console.log (`el resultado es`+ comparacion);
*/



/*
function es_mayor (edad){
    if (edad>18){
        return 1;
    }
    else {
        return -1;
    }
}

let edad = Number (prompt (`ingrese una edad`));
console.log (es_mayor(edad));
*/

/*
ejercicio 5
function diaSemana (number){
    if (number==1){
        return "lunes";
    }
    else if (number==2){
        return "martes";
    }
    else if (number==3){
        return "miercoles";
    }
    else if (number==4){
        return "jueves";
    }
    else if (number==5){

        return "viernes";
    }
    else if (number==6){
        return "sabado";

    }
    else if(number==7){
        return "domingo";
    }
}

let numero = Number (prompt (`ingrese un numero`));
console.log (diaSemana(numero));
*/

/*
//ejercicio 7//

function menor_que (valor1, valor2){
    if (valor1 < valor2 ){
        return 1
    }
    else {
        return -1
    }

}
const resultado= menor_que(3, 9);
console.log(resultado);
console.log(menor_que(3, 9 ));
*/




/*
//ejercicio 7

function valor_contenido (valor1, valor2, valor3){
 if (valor1<valor2){
     //valor1:5  -- valor2:20
     //si el tercero se encuentra  entre  el primero y el segundo entooces retorna 1
     if (valor1<valor3){
         //valor1: 5 --- valor:15
        if (valor3<valor2){
            //valor3:15 -- valor2:20
            //si el valor3 se encuentra entonces, retorna 1
            return 1
        }
        else {
            return 0;
        }
     }
     else {
         return 0;
     }
 }

 else{
     return -1
 }
 
}

function menor_que(numero1,numero2){
  
    if (numero1<numero2){
        return 1;
    }
    else{
        return(-1)
    }
}
console.log(valor_contenido (20,5,1));
*/






//cajero automatico

/*
login (usuario,clave)-->devolver un true
opcionesCajero(opcion)--<alert
si estas logueado 
   "bienvenido (alert)"

*/


/*
const usuario = prompt("ingrese su usuario");
const password= prompt ("ingrese su password");

function login (usuario, password){
    if (usuario=="admin" && password==1234){
        return true;
    } 

    else {
        return false;
      }
}
function agregarSaldo(){
    let opcion= prompt ("a qué cuenta desea ingrsar $ 1)cuenta 567 2)cuenta 789");
    const monto1 = 10000;
    const monto2= 5000;

    if (opcion==1){
        let montoIngresar = Number(prompt("¿qué monto desea ingresar?"));
        let valorActual= monto1+ montoIngresar;
        alert (`su saldo es ${valorActual}`); } 
        
        else if (opcion==2) {
        let montoIngresar = Number(prompt("¿qué monto desea ingresar?"));
        let valorActual= monto2+ montoIngresar;
        alert (`su saldo es ${valorActual}`); 
    } 
    else {
        return alert("opción invalida");
    }
}


function retirarSaldo(){
    let opcion= prompt (`¿De qué cuenta se debitara 1)cuenta 567 2)cuenta 789?`);
    
    if (opcion==1){
        let montoRetirar= Number (prompt ("¿Qué monto quiere retirar?"));
        let valorActual= 10000 - montoRetirar;
        alert (`su saldo es ${valorActual}`); }

        else if (opcion==2) {
            let montoRetirar = Number(prompt("¿qué monto desea retirar?"));
            let valorActual= 5000 - montoRetirar;
            alert (`su saldo es ${valorActual}`); 
        } 
        
        else {
            return alert("opción invalida");
        }
    
    }


function verificarMonto(){







}



function menuCajero(){
    let  opcion= prompt ("ingrese qué opción elige: 1)Agregar Saldo 2)Retirar Saldo 3)Verificar Monto");
    if (opcion==1){
      agregarSaldo();
    } 
    else if (opcion==2){
        retirarSaldo();
    }
    else if (opcion==3){
        verificarMonto()
    }
    else {
        alert("Opción Incorrecta")
    }
}


let estaLogueado = login (usuario,password);
if (estaLogueado==true) {
   alert("bienvenida Admin");
   menuCajero();
} else{
    alert ("usuario/password incorrecta");
}

*/









/*
const edad =prompt(Number(`ingrese la edad`));
const tieneAutorizacion = prompt(`tiene autorizacion?`)

//funcion flecha: usa una const
//const puedeVerPelicula=(parametroEdad, parametroTieneAutorizacion)=>{
//    if (Number(parametroEdad>=15)) {
//        return true;
//   }
 //   if (parametroTieneAutorizacion===true){
//        return true;
//    } else{
//        return false;
//    }
//}
//
const puedeVerPelicula = (parametroEdad, parametroTieneAutorizacion)=>{

if (Number(parametroEdad)>=15 || parametroTieneAutorizacion== "si") {
    return true;

}
else {
    return false;
}
}

const miraPelicula = puedeVerPelicula(edad, tieneAutorizacion);
if (miraPelicula===true){
    console.log(`puede ver pelicula`);
} else {
    console.log( `No puede`)
}
*/






/*

let colorSemaforo= prompt (`que color?`);

const puedeAvanzar = (color)=> {

    if (color=="verde"){
        return true;
    } else if ( color == "amarrillo" || color == "rojo" ) {
        return false;
    } else {
        alert(`color invalido`)
    }

}

let avanzo = puedeAvanzar(colorSemaforo);
if (avanzo===true){
    console.log(`puede avanzar`);
} else if (avanzo === false) {
    console.log(`no puede`);
} else {
    
}
*/




/*
//sin funcion:
const letra = prompt(`ingrese una letra`);

if (letra=== "a"|| letra=== "e"|| letra === "i"|| letra === "o" || letra === "u"){
    alert (`es vocal`);

} else{
    alert(`no es vocal`);
}

//con funcion:


const letra = prompt (`ingrese una letra`);
const esVocal = (parametroLetra)=>{
    if (letra=== "a"|| letra=== "e"|| letra === "i"|| letra === "o" || letra === "u"){
        return true;

    } else{
        return false;
    }
}

let vocal = esVocal (letra);
if (vocal===true){
    alert(`es vocal`);
}else{
    alert(`no es vocal`);
}
*/

const temperatura = (Number(prompt(`ingrese la temperatura`)));

const sensacionTermica = (parametroTemperatura)=>{
    if (parametroTemperatura >=0 && parametroTemperatura <15){
        alert (`esta helado!`);

    } else if (parametroTemperatura>=15 && parametroTemperatura<25){
        alert (`Hace frio`);
    } else if (parametroTemperatura>=25 &&  parametroTemperatura<30){
        alert (`Hace calor`);
    } else {
        alert(`Hace mucho calor`)
    }
}


let clima = sensacionTermica(temperatura);

