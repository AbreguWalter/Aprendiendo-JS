'use strict'

//Funciones

//una funcion es una agrupacion reutilizable de un conjunto de instrucciones

//Definicion de una funcion
function calculadora(){

	return "Hola soy la calculadora";
}

//llamar a la funcion

console.log(calculadora(),calculadora());

//Invocar a una funcion
calculadora();

//una funcion con retorno puedes almacenarla en una variable

/*+++++++++++++++++++++++++++++++++++*/

//Puedes usar funciones con paso de parametros

function calculadora1(num1,num2){

	console.log(num1+num2);
}

calculadora1(1,4);


//Puedes dar un parametro opcional en las funciones

 function calculadora1(num1,num2,mostrar=true){

 	if (mostrar) {
 		console.log(num1+num2);
 	}else{
 		document.write(num1-num2);
 	}
	
}

calculadora1(1,4,true);

//Puedes tener funciones detro de otras funciones


