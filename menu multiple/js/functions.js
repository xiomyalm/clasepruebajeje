window.onload=function()
{

var botones = document.getElementsByClassName("boton");
var menu = document.getElementsByClassName("menu");
var estados = [];

for(var i = 0; i<botones.length ; i++){
	(function(indice){ 
               estados[indice]= 0;
               botones[indice].onclick=function(evento){
               	evento.preventDefault();
               	if( estados[indice]<1){
               		menu[indice].className= "menu";
               		estados[indice]=1;
               	}else{
               		menu[indice].className="menu oculto";
               		estados[indice]=0;
               	}
               }

	})(i);
}


}