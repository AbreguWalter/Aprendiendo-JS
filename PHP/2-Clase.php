<?php  

class Curso{
	//Puedes acceder desde cualquier parte
	public $publico='Publico : POO Avanazado I';
	//Solo plo puedes usar en la funcion creado
	private $privado='Publico : POO Avanazado I';
	protected $protegido='Publico : POO Avanazado I';


	function obtenerMensajePrivado(){
		return $this->privado;
	}
}

$prueba= new Curso();
	echo "<p>".$prueba->publico."</p>";
	//echo "<p>".$prueba->privado."</p>";
	echo "<p>".$prueba->obtenerMensajePrivado()."</p>";
	//echo "<p>".$prueba->protegido."</p>";









?>