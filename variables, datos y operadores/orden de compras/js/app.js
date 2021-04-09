//Orden de compras

//Crear un programa que tome la orden de compra de un local. 
//Pedir al usuario que ingrese la cantidad que desea comprar de tres productos distintos, uno por uno, 
//mostrar el valor total de la compra y preguntar en cuántas cuotas desea realizar el pago. 
//Mostrar un mensaje final con el detalle y el valor total la compra, cantidad de cuotas y valor de cada una de las cuotas. 
//Los precios de los productos deben estar definidos de antemano en variables.


const producto1 = (prompt(`qué producto desea comprar primero?`));
const producto2 = (prompt(`qué producto desea comprar segundo?`));
const producto3 = (prompt(`qué producto desea comprar tercero?`));


const cantidad = Number(prompt(`qué cantidad de ${producto1}desea comprar?`))