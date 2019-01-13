'use strinct'


//Fetch (ajax) y peticiones a servicios / apis rest
//Peticiones asincronas a un servidor

var usuarios=[];
var div_usuarios=document.querySelector("#usuarios");
//Accede a unos datos remoto
//Los convierte a JSON
//Usamos funciones de calvan o function tbn se puede
//Usando promesas traemos los datos
fetch('https://reqres.in/api/users')
	.then(data => data.json())
	.then(users => {
		usuarios=users.data;
		console.log(usuarios);

		usuarios.map((users,i)=>{
			let nombre=document.createElement('h2');
			nombre.innerHTML=i+" "+users.first_name+" "+users.last_name;

			div_usuarios.append(nombre);

			document.querySelector(".loading").style.display='none';
		});

	});

