const argentina = document.getElementById("argentina");
const bolivia = document.getElementById("bolivia");
const sudafrica = document.getElementById("sudafrica");
const etiopia = document.getElementById("etiopia");
const china = document.getElementById("china");
const india = document.getElementById("india");
const grecia = document.getElementById("grecia");
const francia = document.getElementById("francia");
const australia = document.getElementById("australia");
const nuevaZelanda = document.getElementById("nuevaZelanda");

const seleccion = prompt ("ingrese un continente: 1)Ameria 2)Europa 3)Oceania 4) Africa 5)Asia");
if (seleccion == 1){
    argentina.classList.add ("negrita");
    bolivia.classList.add ("negrita");
}else if (seleccion == 2){
    grecia.classList.add ("negrita");
    francia.classList.add ("negrita");
}else if (seleccion == 3){
    australia.classList.add ("negrita");
    nuevaZelanda.classList.add ("negrita");
}else if (seleccion == 4){
    sudafrica.classList.add ("negrita");
    etiopia.classList.add ("negrita");
}else if ( seleccion == 5){
    china.classList.add ("negrita");
    india.classList.add ("negrita");
}else{
    alert("opcion invalida")
}
    