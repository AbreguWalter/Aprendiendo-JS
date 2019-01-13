'use strinct'

//Eventos del raton

//El evento load te permite mandar al scritp al head y no al final del body
window.addEventListener('load', () =>{
		function cambiarColor(){
		console.log("Me has dado clic");
		var bg=boton.style.background;
		if (bg=="green") {

			boton.style.background="red";


		}else{
			boton.style.background="green";
		}

			boton.style.padding="10px";
			boton.style.border="1px solid #ccc"

		return true;
	}


	var boton=document.querySelector("#boton");

	//recomendable hacerlo asi 
	//Con addEventListener capturas eventos

	//Evento Click
	boton.addEventListener('click',function(){
		cambiarColor();
		//boton.style.border="10px solid black";
		this.style.border="10px solid black";
		//con this haces referecia a donde se a seleccionado el evento
	});


	//Mouse over

	boton.addEventListener('mouseover',function(){
		boton.style.background="#ccc";
	});

	//Mouseout

	boton.addEventListener('mouseout',function(){
		boton.style.background="black";
	});


	//Focus
	var input=document.querySelector("#campo_nombre");
	input.addEventListener('focus',function(){
		console.log("[focus] Estas dentro del input");
	});


	//Blur
	input.addEventListener('blur',function(){
		console.log("[blur] Estas fuera del input");
	});


	//Keydown
	input.addEventListener('keydown',function(event){
		console.log("[keydown] Pulsando esta tecla",String.fromCharCode(event.keyCode));
	});


	//Keypress
	input.addEventListener('keypress',function(event){
		console.log("[keypress] Tecla presionada",String.fromCharCode(event.keyCode));
	});


	//Keyup
	input.addEventListener('keyup',function(event){
		console.log("[keyup] Tecla soltado",String.fromCharCode(event.keyCode));
	});
});

