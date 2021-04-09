//puedeVerPelicula(edad, tieneAutorizacion)
//Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

//puedeVerPelicula(12, false) // false
//puedeVerPelicula(12, true)  // true
//puedeVerPelicula(16, false) // true
//puedeVerPelicula(18, true)  // true


/*
const puedeVerPelicula = (edad,tieneAutorizacion)=>{
    if (edad>=15 || tieneAutorizacion==true){
        return true;
    }else {
        return false;
    }
};
console.log(puedeVerPelicula(15, false)); //true
console.log(puedeVerPelicula(12, false));
console.log(puedeVerPelicula(18, false));
*/

/*
//optimizacion:
const puedeVerPelicula = (edad,tieneAutorizacion)=> edad>=15 || tieneAutorizacion;
    
       
    
console.log(puedeVerPelicula(15, false)); //true
console.log(puedeVerPelicula(12, false));
console.log(puedeVerPelicula(18, false));

*/

//estado == falso
// true == false --> false
//false == false --> true

//!estado 
//!true-->false
//!false -->true
const alertaServidor = (estaOnLine)=>{
    //if (estaOnLine)==false

    //!estaOnLine --> !false---> true
    if (!estaOnLine){
        console.log("el servidor esta caido");
    }
}