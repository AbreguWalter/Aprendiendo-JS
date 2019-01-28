<?php

/*

	Class NombreDeMiClase {
		Aqui van las propiedades
		Despues van los metodos
	}

	Es una buena practica que la primera
	letra de la clase sea con Mayoscula

	creacion de clase en singular

*/ 

//Creacion de una clase
class Curso
{
	public $nombre;
	public $duracion;
	public $costo;
	public $moneda;
	public $profesor;
	public $disponible;
	/*
	Creacion de una funcion con estructura 
	camelcase
	Para llamar a una funcion es $this->(atributo)
	Para concatenar es con un punto (.)
	*/
		
	public function imprimirInfo(){
		return "El nombre del curso es ".$this->nombre." ."
	}

	public function validaDisponibilidad(){
		if($this->disponible==true){			
			return "El curso si esta disponible";
		}
		else{
			return "El curso no esta disponible";
		}
	}
}

//instanciar una clase
	$php=new Curso();

	$php->nombre='POO en PHP';
	$php->duracion='3 sesiones';
	$php->costo=10;
	$php->moneda='USD';
	$php->profesor='Walter';
	$php->disponible=true;
	//Hecho para imprimir en el html
	echo $php->imprimirInfo();
	echo $php->validaDisponibilidad();

	//Funcion para mostrarlo en la pantalla
	//var_dump($php);

	$javascript=new Curso();

	$javascript->nombre='javascript desde cero';
	$javascript->duracion='6 sesiones';
	$javascript->costo=0;
	$javascript->moneda='USD';
	$javascript->profesor='Walter';
	$javascript->disponible=true;
	echo $javascript->imprimirInfo();

	//var_dump($javascrip);






?>