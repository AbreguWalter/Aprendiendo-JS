'use strict'

//Alerta

alert();

//Confirmacion
confirm();

var resultado=confirm("¿Estas seguro de salir?");

console.log(resultado);

//Ingreso de datos
//prompt(cadena de pregunta,valor por defecto);
prompt("¿Que edad tienes?",18);

var result=prompt("¿Que edad tienes?",18);
console.log(result);
console.log(typeof result);
//El valor de prompt siempre te devolvera un String

/*
Cuando ingresas un valor que no es el que has solicitado 
aparece NaN
para esos caso puede usar isNaN() dentro de un if

*/