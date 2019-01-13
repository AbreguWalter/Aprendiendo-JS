'use strict'

//Transformacion de textos

var num1=444;
var texto1="Bienvenido al curso de JavaScript";
var texto2="Me gusta el curso";

var dato=num1.toString();
	dato=texto1.toUpperCase();
	dato=texto1.toLowerCase();

console.log(typeof dato);

//Calcular longitud de una cadena de texto

var nombre="Walter Abregu Tinoco";
var nombre=["hola","hola"];
//.length() en caso de un arreglo cuenta cuantos elementos tiene
console.log(nombre.length());

//Concatenar texto

var textototal=texto1+" "+texto2;
var textototal=texto1.concat(" "+texto2);

console.log(textototal);


//Busqueda dentro de una cadena

//Sino encuentra la busqueda dale el valor de -1
var busqueda=texto1.indexOf("curso");
console.log(busqueda);
var busqueda=texto1.search("curso");
//indexOf==search
console.log(busqueda);
var busqueda=texto1.lastindexOf("curso");
//.lastindexOf es para buscar la ultima palabra que te piden
console.log(busqueda);

var busqueda=texto1.match("curso");
console.log(busqueda);
var busqueda=texto1.match("/curso/g");
console.log(busqueda);
//Es una busqueda definida con un arreglo
//se usa cuando tenemos muchas coincidencias de la palabra


var busqueda=texto1.substr(14,5);
//.substr(a partir de este numero,extrae la cantidad que pongas);
console.log(busqueda);


var busqueda=texto1.charAt(44);
//Extrae la posicion que le pedimos empezando de 0
console.log(busqueda);

var busqueda=texto1.startsWith("Bienvenido");
//Busca al inicio del String
console.log(busqueda);

var busqueda=texto1.endsWith("JavaScript");
//Busca al final del String
console.log(busqueda);

var busqueda=texto1.includes("JavaScript");
//Busca en el  String
console.log(busqueda);


//Funciones para reemplazar textos


var busqueda=texto1.replace("JavaScript","PHP");
//Reemplaza un String
console.log(texto1);

var busqueda=texto1.slice(14,22);
//Corta el String desde la posicion que le asigne, tiene 2 parametros o 1
console.log(texto1);

var busqueda=texto1.split(" ");
//mete todo a un array
console.log(texto1);

var busqueda=texto1.trim();
//quita los espacios por delante y por detras del String
console.log(texto1);