'use strict'

//Funciones anonimas
//Es una funcion que no tiene nombre

var pelicula=function(nombre){
	return "La pelicula es :"+nombre;
}

//Funciones con parametros de funciones
function sumame(num1,num2,sumaYmuestra,sumapordos){
	var sumar=num1+num2;
	//Cuando se pasa una funcion por parametro se asigna dentro 
	//de la funcion principal
	sumaYmuestra(sumar);
	sumapordos(sumar);
	return sumar;
}

sumame(5,7,function(dato){
	console.log("La suma es "+dato);
},function(dato){
	console.log("La suma por dos es "+dato)
});

//console.log(sumame(4,5));

//Funciones de fecha , lo unico que hace es  reemplazar function con =>
//Ejemplo :
sumame(5,7,dato=>{
	console.log("La suma es "+dato);
},dato=>{
	console.log("La suma por dos es "+dato)
});