'use strinct'

//JSON javascript object notation




window.addEventListener('load', () =>{
	
	var pelicula={
	titulo: 'Batman',
	year: 2017,
	pais: 'Estados unidos'
	};

	var peliculas=[
		{titulo: 'Super Man',
		year: 2019,
		pais: 'Peru'},
		pelicula
	];
		

	console.log(peliculas);
	console.log(pelicula.titulo);


	var caja_peliculas=document.querySelector("#peliculas");
	var index;
	for (index in peliculas) {
		var p=document.createElement("p");
		p.append(peliculas[index].titulo+" -- "+ peliculas[index].year);
		caja_peliculas.append(p);
	}

	

});
