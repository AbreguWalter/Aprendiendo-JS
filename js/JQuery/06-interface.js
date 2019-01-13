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



});