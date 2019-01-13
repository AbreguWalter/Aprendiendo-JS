'use strict'

//switch

var edad=18;
var imprime="";

switch(edad){
	case 18:
		imprime="Acabas de cumplir la mayoria de edad";
	break;
	
	case 25:
		imprime="Ya estas tio";
	break;	

	case 40:
		imprime="Ya estas por dejar de ser tio y seras super tio";
	break;

	default:
		imprime="No tienes ninguna edad dentro de las alternativas."
}
		
console.log(imprime);