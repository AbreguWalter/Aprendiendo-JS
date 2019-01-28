<!DOCTYPE html>
<html>
	<head>
		<title>POO Avanzado I</title>
	</head>
	<body>
		<h1>POO Avanzado</h1>

		<?php

			//define('INC','/includes/');
		//Sirve para poder incluir un archivo php
			require_once __DIR__ . '/3-Clase.inc.php';
			//recomendable inc por un include.
			$curso1=new Curso('Poo en php','Walter','3 sesiones',10,true);
			$curso2=new Curso('Poo en JS','Walter','6 sesiones',0,true);


		?>
	</body>
</html>