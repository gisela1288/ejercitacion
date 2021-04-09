/*

const temperaturaIngresada = Number(prompt('Ingrese la temperatura'));
//const temperaturaDom = document.getElementById("#temperatura");
const temperaturaDom = document.querySelector('#temperatura');
let color = '';
//temperaturaDom.classList.add.apply(`azul`)==>busca y reemplaza por "color"
if (temperaturaIngresada < 0) {
  color = 'azul';
} else if (temperaturaIngresada >= 0 && temperaturaIngresada < 15) {
  color = 'celeste';
} else if (temperaturaIngresada >= 15 && temperaturaIngresada < 25) {
  color = 'verde';
} else if (temperaturaIngresada >= 25 && temperaturaIngresada < 30) {
  color = 'amarillo';
} else if (temperaturaIngresada >= 30 && temperaturaIngresada < 35) {
  color = 'naranja';
} else {
  color = 'rojo';
}

temperaturaDom.classList.add(color);
//en lugar de agregar temperaturaDom.textContent = `temperatura $ {temperaturaIngresada} color `en todso los casos, basta con ponerlo una vez al final del codigo mas la variable indefinida let color= "". De esa forma se aplica a todos los casos.
temperaturaDom.textContent = `Temperatura: ${temperaturaIngresada} ${color}`;
*/

/*
let titulo = prompt (`ingrese un titulo`);

//let ingresarClase1 =  prompt (`ingrese primera clase`);
//let ingresarClase2 =  prompt (`ingrese segunda clase`);
//let ingresarClase3 =  prompt (`ingrese tercera clase`);


const tituloDOM = document.getElementById(`#titulo`);


//paso 3:Modificando el texto al que ingresa el usuario
//puede usarse innerHtml 
tituloDOM.innerHTML = titulo;

//paso 4 - modificar los estilos que ingreso el usuario
//classlist: usar con cuidado
//className es para cuando no me importa 

titiloDOM.classList.add (clase1);
titiloDOM.classList.add (clase2);
titiloDOM.classList.add (clase3);

*/







//CLASE 38


//OBTENGO MI ELEMENTO DEL HTML
//const miBoton = document.querySelector(`#miBoton`);

// AL ELEMENTO DE MI HTML LE AGREGO UN "ESCUCHADOR DE ELEMENTOS": addEventListener
// El evento recibe 2 parametros:
// el primero es un STRING, que me dice ante qué accion va a actuar.
// el segundo es una FUNCION, que me dice que va hacer cuando pase el primer parametro
//miBoton.addEventListener(`click`, ()=>{
//    alert (`hola, como estas?`);

//});

//const miInput = document.querySelector(`#miInput`);
// los eventos con "key" debem tener un focus
//keypress-->cuando se aprieta la tecla
//keyup -->cuando la tecla sube. cuando suelto el boton
//keydown --> cuando la tecla baja, cuando queda presionada
//miInput.addEventListener(`keyup`,() => {
//    alert ("hola, como estas?")

//});

/*
const miBoton1 = document.querySelector(`#myButton1`);
const miBoton2 = document.querySelector(`#myButton2`);
const miBoton3 = document.querySelector(`#myButton3`);


miBoton1.addEventListener(`click`, ()=>{
    alert (`boton1`);
});
miBoton2.addEventListener(`click`, ()=>{
    alert (`boton2`);
});
miBoton3.addEventListener(`click`, ()=>{
    alert (`boton3`);
});
*/


/*
//el event da la informacion sobre el evento
miInput.addEventListener(`keypress`, (event)=>{
    console.log(event);
    if (event.key == `s`){ //
        alert (`hola`);
    }
});
*/
















// EJERCICIO
//crear un input en el HTML
//en el js guardar el input obtenido del HTML
//usando el querySelector y el id guardar el input, guardar en una const con el nombre sugerido de miInput
//agregar un evento con addEventListener,  ese evento debe ser keypress
//hacer el input miInput
//



/*
const miInput1 = document.querySelector(`#miInput1`);
//Una funcion anonima es:

()=>{
    aca va mi codigo
}



// guardando una funcion anonima en una const 
const saludas = ()=> {
    alert (`como esats?`)
};

miInput1.addEventListener(`keyup`, saludas);


 miInput1.addEventListener(`keypress`, (Event)=>{
     if (Event.key == `s`){
         alert(`saliste del programa`);
     } else if (Event.key == `m`){
         alert(`te quedas dentro`);
     } else {
         alert("pulsar `s`o `n`");
     }
 });

*/





/*
const buttom = document.querySelector(`#button`);
//event.preventDefault: cancela la accion por defecto
//stopPropagation del evento: si hay otro evento no lo ejecuta

button.addEventListener (`click`,(event)=>{
    event.preventDefault(); //evita que el evento se dispare
    event.stopPropagation ();
    alert(`hola,como estas?`);
})

*/

const titulo = document.querySelector(`#titulo`);

const input = document.querySelector(`#input`);

const button = document.querySelector(`#button`);

button.addEventListener(`click`,(event)=>{
    event.preventDefault();
    console.log(input.value);
    titulo.textContent = input.value;
})