'use strict'

//DOM - Document Object Model en JS

//Aplicar funciones para generar cambios
function cambiaColor(color){
	caja.style.background=color;
}

//conseguir un elemento con un id en concreto
var caja=document.querySelector("#micaja");

//Puedes modificar a tu gusto el html o los estilos
//Cambiar sus estilos desde JS
caja.style.background="red";
caja.style.padding="20px";
caja.style.color="while";
caja.className="hola1";
caja.innerHTML="Texto en la caja desde JS";



//Para seleccionar un id , forma alternativa y mejor
var cajar=document.querySelector("#micaja");
//lo mismo que var caja=document.getElemetById("micaja");


//Conseguir elemento por su etiqueta
var todoslosDivs=document.getElementsByTagName('div');
console.log(todoslosDivs);

//todoslosDivs[2] hace referencia al 3er div en el html sin id
var contenido=todoslosDivs[2].textContent;
var contenido1=todoslosDivs[2];
contenido1.innerHTML="Otro contenido para el otro elemento";
contenido1.style.background="red";
console.log(contenido);


var seccion=document.querySelector("#miseccion");
//Generando una etiqueta html 
var hr=document.createElement("hr");
seccion.prepend(hr);



var valor;
//Recorriendo un array de etiquetas se recomiento for in
for (valor in todoslosDivs) {
	if (typeof todoslosDivs[valor].textContent=='string') {
		var parrafo=document.createElement("p");
		var texto=document.createTextNode(todoslosDivs[valor].textContent);
		parrafo.append(texto);// append añade despues
		seccion.append(parrafo);
		//document.querySelector("#miseccion").prepend(parrafo);
		//preprend añade antes

	}
}

seccion.prepend(hr);


//Conseguir elemento por su clase CSS

var divsRojos=document.getElementsByClassName('rojo');
var divsVerdes=document.getElementsByClassName('verde');
console.log(divsRojos);
divsRojos[0].style.background="red";



if(divsVerdes[0].className=="verde"){
	divsVerdes[0].style.background="green";
}


//Query selector

var id = document.querySelector("#encabezado");
console.log(id);

//Query selector solo es recomendable para una etiqueta o un id
//Para muchas etiquetas es mas recomendable  document.getElementsByClassName('verde');
var classRojo=document.querySelector(".rojo");
console.log(classRojo);


