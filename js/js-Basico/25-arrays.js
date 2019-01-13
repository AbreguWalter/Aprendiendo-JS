'use strict'

//Array,Arreglos,Matrices

var nombre="Walter";

//Los arreglos siempre empiezan de 0
var nombres=["Walter","Hugo","Ashly","Karen"];

//declaracion como objeto
var lenguajes=new Array("php","c++","java","js");

console.log(nombres);
console.log(nombres[2]);
console.log(lenguajes);

//Pedir un elemento del array
var elemento=parseInt(prompt("Elemento que seas ver del array ",0));

if(elemento>=nombres.length){
	alert("Introduce el numero correcto que es mejor a "+nombres.length);
}else{
	alert("El usuario seleccionado es : "+ nombres[elemento]);
}

//Como recorrer un array

document.write("<h1> Lenguajes de programacion del 2018 </h1>");

document.write("<lu>");

for (var i = 0; i < lenguajes.length; i++) {
	document.write("<li>"+lenguajes[i]+"</li>");
}

document.write("</lu>");

//Una forma de recorrer un arreglo mas limpia y facil
lenguajes.forEach((elemeto,index,data)=>{
	console.log(data);
	document.write("<li>"+index+"-"+elemento+"</li>");
}

