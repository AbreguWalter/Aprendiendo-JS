'use strict'

//Operadores que se dan en JS
var numero1=7;
var numero2=12;
var operacion=numero1+numero2;
//Operadores : +  -  /  *  %(resto de)
alert("Resultado de la operacion es "+operacion);

//Tipos de datos

//entero , string , float , boolean ;
//js te asigna que tipo de variable es dependiendo como lo declares

var numero_entero=33;
var cadena_texto="Hola mundo ";
var true_false=false;

//Funciones de conversion:
var numero_falso="33";

Number(numero_falso);//convierte una cadena de texto a numero 
parseInt();
parseFloat();
String();//una variable a texto

//Para saber el tipo de dato de nuestras variables se usa.
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof true_false);

