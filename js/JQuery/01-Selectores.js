
//El dolar " $ " y el JQuery hace referencia a JQuery



$(document).ready(function(){
	console.log("Estamos listos !!");
	//Selectores
	// # hace referencia a los id
	var rojo= $("#rojo");
	rojo.css("background","red");
	rojo.css("color","white");

	var amarillo= $("#amarrillo");
	amarillo.css("background","yellow");
	amarillo.css("color","green");

	$("#verde").css("background","green");

	console.log(rojo);

	//Selectores de Clases
	// . hace referencia a las Clases
	//Una clase mas de usa para dar propiedades comunes
	//A diferencia de un id que son propiedades mas personalizadas
	var zebra= $('.zebra').css("padding","5px");;
	console.log(zebra.eq(1));

	$('.sin_borde').click(function(){
		//Cuando queremos implementar eventos con $()
		//El estilo CSS ya debe estar hecho en <style>
		console.log("Click dado");
		$(this).addClass('zebra');
	});


	//Seleccionar etiquetas
	var parrafos= $('p').css("cursor","pointer");;

	parrafos.click(function(){
		var thiss= $this;
		if (!thiss.hasClass('zebra')) {
			//$(this).removeClass("zebra"); remueve una clase
			thiss.addClass('grande'); //agrega una clase
		}else{
			thiss.removeClass('grande');
		}
		
	});


	//Selectores de atributos
	$('[title="Google"]').css('background','#ccc');
	$('[title="Facebook"]').css('background','red');

	//Otros
	// $('p,a').addClass('margen-superior');

	//var busqueda= $('#caja').find('.resaltado');
	var busqueda1= $('#caja .resaltado').eq(0).parent().find('[title="Google"]');
	var busqueda= $('#caja .resaltado');
	console.log(busqueda);

	/*
	.parent() te sirve para una busqueda fuera de la etiqueta
	la cantidad de .parent() que usas es debido 
	hasta donde quieres que llegue la busqueda 
	*/



});