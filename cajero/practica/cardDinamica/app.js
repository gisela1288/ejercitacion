const inputImg = document.querySelector(`#inputImg`);
const inputTitulo = document.querySelector(`#inputTitulo`);
const inputDescripcion = document.querySelector(`#inputDescripcion`);
const inputUrl = document.querySelector(`#inputUrl`);
const inputCheck = document.querySelector(`#inputCheck`);



//card
const titulo = document.querySelector(`#titulo`);
const img = document.querySelector(`#img`);
const descripcion = document.querySelector(`#descripcion`);
const verMas = document.querySelector(`#url`);

inputTitulo.addEventListener(`input`,()=>{
  titulo.textContent = inputTitulo.value;
});

inputDescripcion.addEventListener(`input`,()=>{
  descripcion.textContent = inputDescripcion.value;
  
});

inputImg.addEventListener(`input`,()=>{
    img.src = inputImg.value;
  
});

inputUrl.addEventListener(`input`,()=>{
    verMas.href = inputUrl.value;
  
  });

inputCheck.addEventListener(`input`, ()=>{
    console.log(`hola`);
    if(inputCheck.checked){
        console.log(`checkeado`);

        verMas.style = "display:block;";
        inputUrl.disabled = false;

    }else{
        console.log(`sin checkear`);
        verMas.style = "displat:none;";
        inputUrl.disabled = true;
    }
})
