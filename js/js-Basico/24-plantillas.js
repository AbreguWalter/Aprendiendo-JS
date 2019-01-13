'use strict'

//Platillas de texto

var nombre=prompt("Mete el nombre ");
var apellidos=prompt("Mete el apelldio ");

//var texto="Mi nombre es : "+nombre+"<br> Mis apellidos son : "+apellidos;
var texto=`
		Hola que tal <br>
		Mi nombre es : ${nombre} <br>
		Mis apelldiso son : ${apellidos}
`;

document.write(texto);


