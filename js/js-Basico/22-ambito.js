'use strict'

var texto="Hola mundo soy una variable global";
var numero=12;

function holamundo(texto){
	var hola_mundo="Texto dentro de la funcion";
	console.log(texto);
	console.log(numero.toString());
	console.log(typeof numero.toString());
	console.log(hola_mundo);
}
//.toString() es una funcion para convertir a un String.
//Lo puedes verificar con typeof
holamundo(texto);

//No se puede dar porque la variable hola_mundo solo esta en la funcion
//holamundo para hacerlo debe estar fuera de todo para que sea global

console.log(hola_mundo);



