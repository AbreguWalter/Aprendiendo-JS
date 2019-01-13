'use strict'

//BOM - Browser Object Model

function getBOM(){
	console.log(window.innerWidth); // altura
	console.log(window.innerHeight); //anchura
}

getBOM();

console.log(window.innerWidth); // altura
console.log(window.innerHeight); //anchura

console.log(window.screen.width); //anchura
console.log(window.screen.height); //anchura

console.log(window.location);
console.log(window.location.href);//url que tiene la pagina

function redirect(){
	window.location.href="https://www.google.com";
}

function redirect(url){ // redirigir a otro url
	window.location.href=url;
}

function abrirVentana(url){ // abrir la pagina en otra pestaña
	window.open(url);
}

function abrirVentana1(url){ // abrir una ventana con las medidas asignadas
	window.open(url,"","width=400","height=300");
}