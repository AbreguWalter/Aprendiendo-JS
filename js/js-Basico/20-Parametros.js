'use strict'

//Parametros de REST Y SPREAD

//Parametros REST
function listadoFrutas(fruta1,fruta2, ...resto){

	console.log(fruta1);
	console.log(fruta2);
	console.log(resto);
}

//funciona cuando tienes mas parametros de los que crees que tendras
//Lo que hace REST es guardarlo en un arreglo
listadoFrutas("manzana","pera","mandarina","sandia");

//Parametros SPREAD
var frutas=["naranja","manzana"];

listadoFrutas(...frutas,"pera","mandarina","sandia");


