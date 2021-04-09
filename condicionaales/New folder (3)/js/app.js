/*
jugarPiedraPapelTijera(a, b)
Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)

jugarPiedraPapelTijera('tijera', 'piedra')  // ¡Ganó piedra!
jugarPiedraPapelTijera('piedra', 'tijera')  // ¡Ganó piedra!
jugarPiedraPapelTijera('papel', 'piedra')   // ¡Ganó papel!
jugarPiedraPapelTijera('piedra', 'papel')   // ¡Ganó papel!
jugarPiedraPapelTijera('papel', 'tijera')   // ¡Ganó tijera!
jugarPiedraPapelTijera('tijera', 'papel')   // ¡Ganó tijera!
jugarPiedraPapelTijera('piedra', 'piedra')  // ¡Empate!
jugarPiedraPapelTijera('papel', 'papel')    // ¡Empate!
jugarPiedraPapelTijera('tijera', 'tijera')  // ¡Empate



1-ingresa piedra
a-papel ->papael gana 
b-tijera-->piedra gana
c-piedra --> empate

2-ingresa papel
a-papael -->empate
b-tijera--> tijra gana
c-piedra -->papel gana

3-ingresa tijera
a-papel ->papel pierde
b-tijera--> empate
c-piedra --> piedra gana

empate---> cuando el jugador A == jugador B
tijera gana cuando el jugador A == "tijera" && jugador B == "papel" 
|| jugador A == "papel" && jugador B == "tijera"
*/

const jugarPiedraPapelTijera = (jugadorA,jugadorB)=>{
    if (jugadorA == jugadorB){
        return "¡empate!"
    }else if (jugadorA == "tijera" && jugadorB == "papel" 
    || jugadorA == "papel" && jugadorB == "tijera"){
        return "¡gana tijera!"
    }else if (jugadorA == "piedra" && jugadorB == "tijera" 
    || jugadorA == "tijera" && jugadorB == "piedra"){
        return "¡gana piedra!"
    }else if (jugadorA == "piedra" && jugadorB == "papel" 
    || jugadorA == "papel" && jugadorB == "piedra"){
        return "¡gana papel!"
    }
};

const jugador1 =  (prompt (`ingrese piedra,papel o tijera`));
const jugador2 =  (prompt (`ingrese piedra, papel o tijera`))
alert (jugarPiedraPapelTijera(jugador1,jugador2));

console.log(jugarPiedraPapelTijera('tijera', 'piedra'));
console.log(jugarPiedraPapelTijera('piedra', 'tijera'));
console.log(jugarPiedraPapelTijera('papel', 'piedra'));
console.log(jugarPiedraPapelTijera('piedra', 'papel') );
console.log(jugarPiedraPapelTijera('tijera', 'papel'));
console.log(jugarPiedraPapelTijera('piedra', 'piedra'));