let temp = Number(prompt("ingrese la temperatura"));
const titulo = document.querySelector(`#titulo`);
titulo.textContent = `temperatura actual: ${temp}º`;

67


if (temp <=0 ){
titulo.style = `color:blue`;
}else if (temp >=0 && temp <15){
    titulo.style = `color: lightblue`;
}else if (temp>=15 && temp<25){
    titulo.style = `color: green`;
}else if (temp >=25 && temp<30){
    titulo.style =`color: yellow`;
}else if( temp >=30 && temp<35){
    titulo.style = `color: red`;
}else {
    titulo.style = `color: red`;
}