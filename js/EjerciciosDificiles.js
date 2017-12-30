/**
*EJERCICIO DIFICIL N°1
Dado un arreglo de números rotar sus elementos hacia la derecha n veces.
Ejemplo:   arr = [1, 2, 3, 4, 5, 6, 7]
		     n = 3
		     retorna [5, 6, 7, 1, 2, 3, 4]
*/

/*
 Declaracion de variables var arr con un arreglo con los datos numericos a rotar, y variable n 

*/

var arr = [1, 2, 3, 4, 5, 6, 7];

var n= 3;

for (var i = -9; i < arr.length; i++) {
  var item = arr.pop(números);
  arr.splice(i, 0, item);
}

console.log(arr);


/**
* EJERCICIO DIFICIL N°2
Dado un arreglo de números positivos, retornar true si este se encuentra ordenado de menor a mayor,en caso contrario false. 
No puede usar el método sort() de javascript.

*/



 var arr = [ 100,5,9,300,7,1,90]; // arreglo con numeros desordenados
 function ordenar(array){// Funcion para ordenar numeros de menor a mayor
  for ( var i = 0 ; i < arr.length ; i ++ ) { // ciclo for para  recorrer los numeros del arreglo
  var m= arr [ i ];//esta variable posiciona el primer numero de la variable arr
   var x= i - 1 ;// 
    while ( x>= 0 && arr [ x] > m) 
    { 
    arr [ x+1] = arr [ x]; x-- ; } 
    arr [ x+ 1 ] = m } 
    return arr ;
     } 
     console.log (ordenar(arr));// [1,5,7,9,90,100,300]

     

/*
**Problema difícil 4 (50 puntos):
Dado un arreglo de números positivos, encontrar el elemento más pequeño y retornar su índice.

Ejemplo:	arr = [1, 2, 3]
			retorna 0

			arr = [3, 2, 1]
			retorna 2
*/
// Arreglo con grupo de numeros para identificar la posicion del numero menos
var arr=[33,7,90,45];

function masPequeño (valor){
	

}



