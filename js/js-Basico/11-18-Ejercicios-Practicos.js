'use strict'
/*

Calculadora:
Pide dos numeros por pantalla
si metemos un valor no valido que nos vuelva a pedir
en el cuerpo de la pagina en una alerta y por consola el resultado 
suma,resta,multiplicacion,division 
*/

var num1=parseInt(prompt("Ingresa numero 1 : "));
var num2=parseInt(prompt("Ingresa numero 2 : "));

while(num1<0 || num2<0 || isNaN(num1) || isNaN(num2)){
	var num1=parseInt(prompt("Ingresa numero 1 : "));
	var num2=parseInt(prompt("Ingresa numero 2 : "));

}

var result="Suma : "+(num1+num2)+"<br>"+
			"Resta : "+(num1-num2)+"<br>"+
			"Multi : "+(num1*num2)+"<br>"+
			"Division : "+(num1/num2);

document.write(result);
			