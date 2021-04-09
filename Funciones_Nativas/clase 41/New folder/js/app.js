//tiene la misma longitud


 /*
13+14-->47
`a` + `b`-->ab
const sumafija = (a,b)=>a+b;

13>12 ---> true
*/
//forma 1
/*const tieneMismaLongitud = (a,b)=>{
    if (a.length == b.length){
        return true
    }else{
        return false
    }
};

 //forma 2

if(a.length == b.length){
    return true;
}
return false;

// forma 3

const tieneMismaLongitud = (a,b)=> a.length == b.length;
*/


/*
const esValida = (contraseña)=>{
    if (contraseña.length>= 8){
        return true
    }else{
        return false
    };
};

const esValida = (contraseña)=>contraseña.length>= 8;
         t
    

console.log(esValida (`contrseñaMuySegura`)); //true
console.log(esValida (`abc123`));//false

*/

/*
const esUltimoCaracter = (palabra,caracter)=>{
    return palabra.slice(-1)== caracter
}

console.log(`lovelece`.slice(-1));
console.log(`lovelece`.slice(-1))=="r";
console.log(`lovelece`.slice(-1))=="e";
console.log(esUltimoCaracter (`lovelace`, `e`));
console.log(esUltimoCaracter (`lovelace`, `h`));


console.log(`lovelace`.includes( `e`));
console.log(`lovelace`.includes( `f`-1));
console.log(`lovelace`.includes( `o`,-1));
console.log(`lovelace`.includes( `e`,-1));

const sonIguales =(a,b)=>{
    return a.toUpperCase() == b.toUpperCase();
}

*/

//incremento
let numero = Number(prompt(`ingrese el numero`));

const incremento = Number(prompt(`ingrese la cantidad que quiere incrementar`));


//"acumulador": rehusar la variable
//50 + 50 = 100
//numero = numero + increento 
numero = numero + incremento ; // equivale lo mismos numero += incremento;
alert (`incremento 1) Total: ${numero}`);
//100 + 50 = 150
numero = numero + incremento ;
alert (`incremento 2) Total: ${numero}`);

numero = numero + incremento ;
alert (`incremento 3) Total: ${numero}`);

numero = numero + incremento ;
alert (`incremento 4) Total: ${numero}`);

numero = numero + incremento ;
alert (`incremento 5) Total: ${numero}`);




