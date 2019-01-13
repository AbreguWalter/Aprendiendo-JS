'use strinct'

window.addEventListener('load', () =>{
	
	//Timers
	//setTimeout solo se ejecuta una vez
	function intervalo(){
		var tiempo=setInterval(function(){
				console.log("Set Interval ejecutado");

				var encabezado=document.querySelector("h1");
				
				if (encabezado.style.fontSize=="50px") {
					encabezado.style.fontSize="30px";
				}else{
					encabezado.style.fontSize="50px";
				}
			},2000);
			//3000 = 3 segundos
		return tiempo;
	}

	var tiempo=intervalo();

	var stop=document.querySelector("#stop");


	stop.addEventListener("click",function(){
		alert("Haz parado el setInterval");
		clearInterval(tiempo);
	});

	var iniciar=document.querySelector("#iniciar");

	iniciar.addEventListener("click",function(){
		alert("Haz iniciado el setInterval");
		intervalo();
	});


});



