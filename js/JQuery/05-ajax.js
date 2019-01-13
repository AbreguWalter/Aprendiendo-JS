
$(document).ready(function(){
	//alert(" ");
	
	//Load
	//Poder meter un contenido de un URL
	//$("#datos").load("https://reqres.in/");

	//Get y Post

	$.get("https://reqres.in/api/users",{page:3},function(response){
		console.log(response);
		response.data.forEach((element,index)=>{
			$("#datos").append(element.first_name + "<br>");
		});
	});

	

	$("#formulario").submit(function(e){
		e.preventDefault();
		var usuarios={
			name:$("input[name='name']").val(),
			web:$("input[name='web']").val()
		};

		console.log(usuarios);

		/*	$.post($(this).attr("action"),usuarios,function(response){
				console.log(response);
				//document.write(response);
			}).done(function(){
					alert("Usuario añadido correctamente !!");
		});*/


		$.ajax({
			type:'POST',
			dataType:'json',
			contentType:'aplication/json',
			url:$(this).attr("action"),
			data:usuarios,
			beforeSend: function(){
				console.log("Enviando usuario ...");
			},
			success:function(response){
				console.log(response);
			},
			error:function(){
				console.log("A ocurrido un error");
			},
			timeout: 1000
		});	

			return false;
	});










});