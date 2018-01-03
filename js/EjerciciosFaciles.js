/*
Ejercicio Facil N°14
**Dado un arreglo de 10 números, retornar un nuevo arreglo solo con los números pares.
Ejemplo: input arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   output nuevoArr = [2, 4, 6, 8, 10]
*/
var arr=[1,2,3,4,5,6,7,8,9,10]; // array con numeros del 1 al 10
function par(valor){// Funcion para sacar los numeros pares del array
return valor %2 == 0;// el valor de cada numero de multiplica por 2 si el residuo es igual que cero  es numero par.
}
var arrPar=arr.filter(par);// con el metodo filter se crea una nueva matriz con todos los elementos que pasan la prueba
                           // por la funcion implementada es decir la  funcion que determina que numero es par.	
console.log(arrPar);// Resultado  devueleve solo los numeros pares del array .



/*
**Problema fácil 11 (20 puntos):
Diseñar un programa que lea las calificaciones de un alumno (10 notas en total).
Debes calcular e imprimir su promedio, y decir a través de un alert si el ramo fue aprobado o no.
Las notas van de 1 a 7 y se aprueba con un promedio igual o mayor a 4.*/



var notas=(5+7+6+5+4+5+6+7+7+6);// Primero se suman los numeros
var promedio=notas/10;// luego se crea una variable para hacer la formula de las notas dividido por 10;
console.log(promedio);
if(promedio=>4){ // con el if se crea la opcion  si el promedio es igual o mayor a 4 
alert('Aprueba');// la alerta dara Aprueba 
}else if (Promedio<4){//  si el promedio es menor a 4 
alert('No Aprueba');}// la alerta dara No Aprueba.



/*
**Problema fácil 15 (20 puntos):
Dado un arreglo de 4 números positivos, devolver un nuevo arreglo con cada elemento multiplicado por 12.
Ejemplo: input arr = [1, 2, 3, 4]
		  output nuevoArr = [12, 24, 36, 48]*/


/*Problema fácil 15 (20 puntos):
Dado un arreglo de 4 números positivos, devolver un nuevo arreglo con cada elemento multiplicado por 12.
Ejemplo: input arr = [1, 2, 3, 4]
		  output nuevoArr = [12, 24, 36, 48]*/

var  arreglo =[1,2,3,4]; // Se crea un arreglo con 4 numeros a multiplicar
var numero=12;// se crea una variable con el numero que multiplicara cada uno de los  4 numeros del arreglo
function ArrMultiplicar (numeros) {// se crea la funcion multiplicar
	return numeros*numero;// se retorna la operacion multiplicando el valor numeros con la variable numero que representa al 12
} 
console.log(arreglo.map(ArrMultiplicar));//En console.log se usa El método map() el que crea un nuevo array con los resultados de la llamada 
                                      //a la función indicada aplicados a cada uno de sus elementos.	se llama al arreglose uasa la funcion map	  

