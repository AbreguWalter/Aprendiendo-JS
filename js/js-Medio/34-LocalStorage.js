'use strinct'

//LocalStorage

window.addEventListener('load', () =>{
	
//Comprobar disponibilidad del localstorage	
if (typeof(Storage)!='undefined') {
	console.log("Disponible el LocalStorage");
}else{
	console.log("No disponible el LocalStorage");
}
	
//Guardar datos en el navegador
localStorage.setItem("titulo","Curso de JS");

//Recuperar un elemento
console.log(localStorage.getItem("titulo"));


document.querySelector("#peliculas").innerHTML=localStorage.getItem("titulo");

//Guardar Objetos
var usuario={
	nombre: "Walter Abregu",
	email: "abreguwalter0709@gmail.com",
	web: "www.google.com"
};
//JSON puro no acepta , tienes que convertirlo en un JSON String
localStorage.setItem("usuario",JSON.stringify(usuario));


//Recuperar Objeto
var userJS=JSON.parse(localStorage.getItem("usuario"));
console.log(userJS);


//Borrar memoria de localStorage
localStorage.removeItem("usuario");
localStorage.clear();

});