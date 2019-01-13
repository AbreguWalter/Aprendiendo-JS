'use strict'

//Otra forma de declaracion de variables (let y var)
//var es una variable global

let prueba="hola";

alert(prueba);


//Prueba con var
var numero=40;
console.log(numero);//valor sera 40
if(true){
	var numero=50;
	console.log(numero);// valor sera 50
}

console.log(numero);//valor sera 50


//Prueba con let
var numero1=40;
console.log(numero1);//valor sera 40
if(true){
	let numero1=50;
	console.log(numero1);// valor sera 50
}

console.log(numero1);//valor sera 40

