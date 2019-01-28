$(document).ready(function(){

	//Mover elementos por la pagina
	$(".elemento").draggable();

	//Redimencionar elementos
	$(".elemento").resizable();

	//Lista elementos seleccionables
	//$(".lista-seleccionable").selectable();

	//Ordenar los elementos
	$(".lista-seleccionable").sortable({
		update:function(event,ui){
			console.log("A cambiado la lista !!");
		}
	});

	//Drop
	$("#lista-movido").draggable();
	$("#area").droppable({
		drop: function(){
			console.log("has soltado algo dentro el area");
		}
	});

	//Efectos
	$('#mostrar').click(function(){
		$('.caja-efectos').toggle("fade");// tambien se puede usar como faceToggle()
		// tambien tienes :
		/*
							.effect("explode");
							.effect("blind");
							.effect("slide");
							.effect("drop");
							.effect("fold");
							.effect("puff");
							.effect("scale");
							.effect("shake");
							.effect("propiedad",(tiempo));
							En la documentacion tenemos mas

		*/
	});

	$(document).tooltip();

	//Dialog
	$('#popup').dialog(); //No logro salir


	//Datapicker

	$(".calendario").datepicker(); // no me funco con id sino con class

	//Tabs
	$('#pestanas').tabs(); //tabs funciona mejor con id

});

