'use strict'

/*
1. Pida 6 numeros por pantalla y que los meta en un array
2. Mostrar el array completo en el cuerpo de la pagina y en la consola
3. Mostrar el array ordenado
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de 1 valor introducido por el usuario y que nos diga si
esta en el array y en que posicion esta 

*/

//array dinamico
var numeros=[];

//Pedir 6 arrays
for (var i = 0; i < 5; i++) {
	numeros.push(parseInt(prompt("Introduce un numero : ",0)));
}

//Funcion para ordenar numeros de menor a mayor (a-b)
//Si lo quieres de mayor a menor (b-a)
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros,'ordenado');

numeros.reverse();
mostrarArray(numeros,'revertido');

document.write(numeros.length);

var busqueda=parseInt(prompt("Busca un numero : ",0));
var posicion=numeros.findIndex(numero=>numero==busqueda);

if(posicion&& posicion!=-1){

	document.write(posicion);

}else{
	document.write("No encontrado");
}


