const imagenPerro = document.querySelector(".imagenPerro");
const imagenGato = document.querySelector(".imagenGato");
const imagenLoro = document.querySelector(".imagenLoro");

const seleccion = prompt ("elegi entre 1)gato 2)perro 3)loro")

if (seleccion == 1){
    imagenPerro.src = "https://cdn.aarp.net/content/dam/aarp/home-and-family/your-home/2019/05/1140-havanese-esp.web.jpg"
}else if (seleccion ==2){
  imagenGato.src = "https://www.elcomercio.com/files/article_main/uploads/2018/08/08/5b6b28ab0319d.jpeg"
}else if (seleccion == 3){
    imagenLoro ="https://upload.wikimedia.org/wikipedia/commons/a/ab/Yellow-headed_Amazon_%28Amazona_oratrix%29_pet_on_perch.jpg"
}else {
    alert("opcion incorrecta")
};