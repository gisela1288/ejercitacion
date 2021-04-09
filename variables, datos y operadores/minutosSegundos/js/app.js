//Crear un programa que pida ingresar una cantidad en minutos mediante un y muestre un mensaje con el resultado de la conversión en segundos.

const minutos = Number (prompt (`ingrese una cantidad de minutos`));

// 1---60 seg

const minutosSegundos = (minutos*60);
alert (`el tiempo en segundos es ${minutosSegundos}`);
alert (`el tiempo en segundos es ${minutos*60}`);