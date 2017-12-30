/*
Ejercicio Facil N°4
**Dado un arreglo de 10 números, retornar un nuevo arreglo solo con los números pares.
Ejemplo: input arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   output nuevoArr = [2, 4, 6, 8, 10]
*/
var arr=[1,2,3,4,5,6,7,8,9,10];
function par(valor){
return valor %2 == 0;
}
var arrPar=arr.filter(par);	
console.log(arrPar);



/*
**Problema fácil 11 (20 puntos):
Diseñar un programa que lea las calificaciones de un alumno (10 notas en total).
Debes calcular e imprimir su promedio, y decir a través de un alert si el ramo fue aprobado o no.
Las notas van de 1 a 7 y se aprueba con un promedio igual o mayor a 4.*/



var notas=(5+7+6+5+4+5+6+7+7+6);
var promedio=notas/10;
console.log(promedio);
if(promedio=>4){
alert('Aprueba');
}else if (Promedio<4){
alert('No Aprueba');}



/*
**Problema fácil 15 (20 puntos):
Dado un arreglo de 4 números positivos, devolver un nuevo arreglo con cada elemento multiplicado por 12.
Ejemplo: input arr = [1, 2, 3, 4]
		  output nuevoArr = [12, 24, 36, 48]*/

