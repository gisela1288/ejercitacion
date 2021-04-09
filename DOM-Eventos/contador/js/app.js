//contador
//Crear un documento html que muestre un número (empezando en 0)
 //y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. 
 //Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, 
//y actualizar el número mostrado.


let resultado = 0;

const resultadoDom = document.getElementById("resultado");
const masUno = document.getElementById("masuno");
const menosUno = document.getElementById("menosUno");

masUno.addEventListener("click",()=>{
    resultado = resultado + 1;
    resultadoDom.textContent = resultado;
});

menosUno.addEventListener("click",()=>{
    resultado =resultado -1;
    resultadoDom.textContent = resultado;
});