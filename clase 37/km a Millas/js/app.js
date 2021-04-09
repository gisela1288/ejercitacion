const text1 = document.getElementById(`text1`);
const text2 = document.getElementById(`text2`);



text1.addEventListener(`input`,()=>{
    text2.value = Number(text1.value)*0.62;

});

text2.addEventListener(`input`,()=>{
    text1.value = Number(text2.value)*1.62;

});


const inputImg = document.querySelector(`#srcImg`);
const buttomImg = document.querySelector(`#addImg`);
const img = document.querySelector(`#img`);

addImg.addEventListener(`click`, ()=>{
    //si el input no est avacio se agrega la imagen
    if (inputImg != ""){
        img.src = inputImg.value; 
        inputImg.value = "";
    }else {
        console.log(`ingreso una imagen vacia`)
    }
    

});

img.addEventListener(`click`, ()=>{
    img.src = ``;
});