<?php


class Curso{

	private $nombre;
	private $duracion;
	private $costo;
	private $moneda;
	private $profesor;
	private $disponible;

	//Constructures
	public function __construct($titutlo,$profesor,$duracion,$costo,$disponible){
		$this->titutlo=$titutlo;
		$this->profesor=$profesor;
		$this->duracion=$duracion;
		$this->costo=$costo;
		$this->disponible=$disponible;
	}



}