/**
*Dado un arreglo de números rotar sus elementos hacia la derecha n veces.
Ejemplo:   arr = [1, 2, 3, 4, 5, 6, 7]
		     n = 3
		     retorna [5, 6, 7, 1, 2, 3, 4]
*/

/*
** Declaracion de Variable con un arreglo con los datos numericos a rotar
**
*/

var arr = [1, 2, 3, 4, 5, 6, 7];

var n= 3;

for (var i = -9; i < arr.length; i++) {
  var item = arr.pop(números);
  arr.splice(i, 0, item);
}

console.log(arr);