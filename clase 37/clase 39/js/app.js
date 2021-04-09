const buttom = document.getElementById("buttom");
const inputText = document.getElementById(`inputText`);
const checkbox = document.getElementById (`checkbox`);
const title = document.getElementById(`title`);
const form = document.getElementById (`form`);
const options = document.getElementById (`options`);
buttom.addEventListener(`click`,()=>{
    alert(inputText.value);//el value es todo lo que tiene el input, el valor que el usuario le ingresa al input
});

//inputText.value ->lo utilo para obtener el texto, es un string
//checkbox.checked, lo utilizo para obtener el estado del texo. es un boolean
//event --> me da info del evento, ademas tiene su propias funciones como preventDefault
//preventDefault --> evita quye se ejecute la accion por defecto

buttom.addEventListener(`click`,(event)=>{
    event.preventDefault();
    console.log(event);
        //para ver los valores de datos son:options.value

    console.log(inputText.value, checkbox.checked, options.value);
    //para ver los valores de datos son:
    if (checkbox.checked){
        alert(`checked`)
    }
    //se puede cambiar el valor del input con:
    inputText.value = `Ada`
});

//focus para cuando el input tiene la atencion, titila el cursor
inputText.addEventListener(`focus`, ()=>{
    console.log(`focus,Hola como estas?`);
})

// es cuando se pierde el focus
inputText.addEventListener(`blur`, ()=>{
    console.log(`blur,Hola como estas?`);
});

//input: cuando se dispara/ejecuta la accion. cuando se cmabia el valor del input. Ej: toco una tecla
inputText.addEventListener(`input`,()=>{
    console.log(`input`,inputText.value);
    title.textContent = inputText.value;
});

//change: se dispara/ejecuta la accion cuando se cambia el valor del input pero el usuario debe confirmar con un ENTER o el TAB
inputText.addEventListener(`input`,()=>{
    console.log(`change`,inputText.value);
});

form.addEventListener(`submit`, ()=>{
    alert(`el formulario ha sido enviado`);
});
