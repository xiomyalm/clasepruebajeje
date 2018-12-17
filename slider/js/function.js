window.onload =function (){

var slider = document.getElementsByClassName("slider")[0];
var imagenes = document.getElementsByClassName("imagen");

var proporciones = imagenes[0].naturalHeight / imagenes[0].naturalWidth;

var activa =0;

imagenes[activa].className ="imagen activa";
imagenes[(activa==0)?imagenes.length -1 : activa -1 ].className ="imagen left";
imagenes[(activa==imagenes.length -1)? 0 : activa +1].className = "imagen rigth"

 
 slider.style.height= window.innerWidth*proporciones+"px";


var flechas = document.getElementsByClassName("nav");
for (var i = 0; i<flechas.length; i++) {
	 (function(indice){

	 		

	 	flechas[indice].onclick = function(evento){
	 			evento.preventDefault();
	 				avanzar(indice);


	 	}


	 })(i);
}

var dots = document.getElementsByClassName("dot");
 for(var i =0; i<dots.length; i ++){
 	(function(indice){
				dots[indice].onclick = function(evento){
	 			evento.preventDefault();
	 			
	 			for(var j= 0 ; j<dots.length; j++){
	 				dots[j].className= "dot";
	 				imagenes[j].className= "imagen";
	 			
	 			}

	 		dots[indice].className ="dot activo";
	 		activa = indice;

         imagenes[activa].className ="imagen activa";
		 imagenes[(activa==0)?imagenes.length -1 : activa -1 ].className ="imagen left";
		 imagenes[(activa==imagenes.length -1)? 0 : activa +1].className = "imagen rigth"; 
	 	}


 	}(i));
 }

 function avanzar (direccion){
 	if(direccion < 1){
 		if(activa > 0){
 			activa--;
 		}else{
 			activa = imagenes.length - 1;
 		}
 	}else{
 		if(activa < imagenes.length - 1){
 			activa++;
 		}else{
 			activa = 0;
 		}
 	}
         console.log(activa);  

         imagenes[activa].className ="imagen activa";
		 imagenes[(activa==0)?imagenes.length -1 : activa -1 ].className ="imagen left";
		  imagenes[(activa==imagenes.length -1)? 0 : activa +1].className = "imagen rigth"   		   
}
    
 window.onresize=function(){
			 proporciones = imagenes[0].naturalHeight / imagenes[0].naturalWidth;
			 
			 slider.style.height= window.innerWidth*proporciones+"px";
 }



}