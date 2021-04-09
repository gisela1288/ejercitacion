//Crear un programa que pida ingresar una cantidad de días 
//y muestre un mensaje con el resultado de la conversión en segundos.

const dias = Number(prompt (`ingrese una cantidad de dias`));

//1D--24hs---1440min---

const diasSegundos = (dias * 86400);
alert(`hay ${diasSegundos} segundos en ${dias} dias`);