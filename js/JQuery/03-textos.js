$(document).ready(function(){
	//alert("Funciona");

	//console.log($('a').length);
	reloadLinks();

	$('#add_button').click(function(){

		$('#menu').append('<li><a href="'+$("#add_link").val()+'"></a></li>');
		$("#add_link").val('');
		console.log("Entro a la funcion click");
		reloadLinks();
		//append despues de la lista
		//prepend antes de la lista
		//before es fuera de la lista pero antes
		//after fuera de la lista pero despues
	});


});

function reloadLinks(){
		$('a').each(function(){
		var that=$(this);
		var enlace= that.attr("href");
		//attr te añade un atributo
		that.attr('target','_black');
		//.removeattr() quita un atributo
		that.text(enlace);
	});
}