//imagen
//Hacer un programa que al iniciarse pregunte mediante un prompt 
//por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) 
//y dependiendo de la opción elegida modifique el tamaño de una imagen 
//(cualquiera) en el documento html.
// Por ejemplo:

//Opción elegida	Ancho de imagen
//chica	    200px
//mediana	500px
//grande	800px


const tamaño = prompt (`elige el tamaño de la imagen: 1)chica 2)mediana 3)grande`);

const styles = {
    chica: 200,
    mediana: 500,
    grande: 800,
}; 


const img = document.querySelector(`img`);

if (tamaño in styles) {
    img.style = `width:${styles[tamaño]}px; height: ${styles[tamaño]}px;`;
};