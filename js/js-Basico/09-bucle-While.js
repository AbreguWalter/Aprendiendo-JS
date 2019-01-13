'use strict'

//Bucle while

var year=2018;

//mientras la instruccion se cumpla
while(year<2026){
//se ejecuta este codigo
	console.log(year);
	if(year==2019){
		break;
	}
	year++;
}

// el bulce Do while

var years=20;
do{
	alert("Solo si es diferente de 20");
	years=20;
}while(years!=20);