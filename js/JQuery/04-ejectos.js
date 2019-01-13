
$(document).ready(function(){
	//alert(" ");
	$("#mostrar").hide();

	$("#mostrar").click(function(){
		$(this).hide();
		$("#ocultar").show();
		//$("#caja").show('fast');//show('normal')
		//$("#caja").fadeIn('slow');
		$("#caja").fadeTo('slow',0.8);
	});

	$("#ocultar").click(function(){
		$(this).hide();
		$("#mostrar").show();
		//$("#caja").hide('fast');
		//$("#caja").fadeOut('slow');
		// slideUp o slideDown tambien don funciones que funcionan
		$("#caja").fadeTo('slow',0.2);
	});


	//Otra forma de hacerlo

	var td=$('#todoenuno');

	td.click(function(){
		//$('#caja').toggle('fast');
		//$('#caja').fadetoggle('fast');
		$('#caja').slidetoggle('fast');
	});

	$("#animar").click(function(){
		$('#caja').animate({marginLeft:'500px',
							fontSize:'40px',
							height:'110px'
							},'slow',function(){
								console.log("1");
							})//Se puede añadir una funcion.
				.animate({borderRadius:'90px',
						marginTop:'80px'
						},'slow')
				.animate({borderRadius:'0px',
						marginTop:'0px'
						},'slow')
				.animate({borderRadius:'100px',
						marginTop:'0px'
						},'slow')
				.animate({marginLeft:'500px',
							fontSize:'40px',
							height:'110px'
							},'slow')

	});


});