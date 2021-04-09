/*const sumar = (a,b) =>{
   // const resultado = a+b;
    //return resultado;
    // se puede optimizar lo de arriba con un return y la cuenta a + b:
    return a +b;
    //cuando hay 1 sola linea de codigo se puede obviar la llaves y el return
};*/

/*
//cuando hay 1 sola linea de codigo se puede obviar la llaves y el return
const sumar = (a,b) => a + b;

 const solucion = sumar ( 10,15);
 console.log(solucion );
 */


//multiplicar(a, b)
//Crear una función multiplicar que tome como argumentos dos números y devuelva la multiplicación de ellos

//multiplicar(2, 3) // 6
//multiplicar(4, 0.5) // 2



//paramtro opcional= siempre va desde el ultimo parametro al primero (de derecha a izquierda)
//parametros opcionales = son los que tienen por defecto los parametros de la funcion
//se escriben de derecha a izquierda
// sirven como configuracion inicial

const conversor = (temp,unidad = "F", presion = "mmhg", humedad="hPa")=>{
 return `la temperatura es ${temp} en ${unidad} presion ${presion} y humedad ${humedad}`
}



const multiplicar = (numeroA, numeroB)=>{
    //const operacion = numeroA*numeroB;
    //return operacion;
    return numeroA*numeroB;
};
// la expresion mas simplificada:
//const multiplicar = (numeroA,numeroB)=> numeroA*numeroB;

console.log("multiplicar",multiplicar (2, 3), multiplicar(4,0.5));


const esPar = (numero)=>{
 if numero ==
}