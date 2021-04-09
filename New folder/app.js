//const esPar = (numero)=>{
//    return numero %2 ==0;
//}


const esPar =(numero) =>{
    if (numero %2 == 0){
        return true;
    }else{
        return false;
    };
};

// la version mas comprimida
//const esPar = (numero)=> numero %2 == 0;
console.log(esPar(2)); //true
console.log(esPar(3));// false


const esImpar = (numero)=>{
    if (numero %2 == 1){
        return true;
    } else {
        return false
    };
};

//
//const esImpar = (numero)=> numero %2 ==1;


console.log(esImpar (3));
console.log(esImpar(2));
