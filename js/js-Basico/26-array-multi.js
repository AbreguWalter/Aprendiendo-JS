'use strict'

//Array multidimencional

var categoria=["accion","terror","comedia"];
var peliculas=["la verdad","la vida","gran mill"];

var cine=[categoria,peliculas];

console.log(cine);

console.log(cine[0][1]);
console.log(cine[1][2]);

//Como agregar elementos a un array
peliculas.push("Batman");

//elimina el ultimo elemento de un array
peliculas.pop();

//elimina una propiedad del arreglo
peliculas[0]=undefined;

//sacar de un array

var indice=peliculas.indexOf("gran mill");

if(indice>-1){
	peliculas.splice(indice,1);
}

console.log(peliculas);

//Convertir un array a texto
var text=peliculas.join();
console.log(text);

//Convertir de un String a un Array

var cadena="text1,text2,text3";

var cadena_array=cadena.split(", ");

console.log(cadena_array);

//Ordenar un array orden alfabetico
peliculas.sort();

//Ordenar un array orden del ultimo al primero
peliculas.reverse();


//Recorrer un array

var lenguajes=new Array("php","c++","java","js");

for (let lenguaje in lenguajes) {
	document.write(lenguajes[lenguaje]);
}

//Busquedas en arrays

var busqueda=lenguajes.find(function(lenguaje){

	return lenguaje=="php";
});
//son lo mismo pero mas pequeño
var busqueda=lenguajes.find(lenguaje=> lenguaje=="php");
console.log(busqueda);

//Para encontrar el indice
var busqueda=lenguajes.findIndex(lenguaje=> lenguaje=="php");
console.log(busqueda);


//Busca cumplir una condicion en el array
var precios=[10,20,30,40,50];
var busqueda=precios.some(precio => precio>20);
console.log(busqueda);



