$(document).ready(function(){

var array_grafico = [];
var abrir= $('<div class="corchete corchete-izquerda"></div>');
var cerrar = $('<div class="corchete corchete-derecha"></div>');
	
	$(".insertar").submit(function(evento){
		evento.preventDefault();
		

		if ($("#entrada").val()!="")     /* val equivalente a value en java */
			{
				//console.log($(".seleccion")); 
				// seleccion me imprime los elementos que hay con este clase y en *checked* imprime true en el seleccionr y en el no seleccionado false
				var enviar = false;
				var posicion = 1; /* o también podriamos ponerle null */

					$(".seleccion").each(function(indice) // each recorre el array de seleccion
					{  

						if ($(".seleccion")[indice].checked) 
						{

							enviar=true;
							posicion=indice;
						}

			
					});

					console.log(array_grafico);
					if (enviar){
						if (posicion>0){
							array_grafico.push($("#entrada").val());

						}else{
							array_grafico.unshift($("#entrada").val());


						}
						dibujar();
					}
			} 


                        

	});





               $(".contenedor-array").on("click",".close",function(evento){
               	          evento.preventDefault();
               	          console.log($(this).data("indice"));
               	          array_grafico.splice($(this).data("indice"),1);
               	          dibujar();


               })


             function dibujar(){
             	$(".contenedor-array").empty();
							$(".contenedor-array").append(abrir);
							for(var i = 0; i<array_grafico.length; i++){
								var elemento = $("<p></p>").addClass("elemento");

								var add="";
								if (array_grafico.length>1 && i<array_grafico.length-1){

									add=",";

								}
								elemento.html(array_grafico[i]+add);
								var eliminar = $('<a href="#" data-indice="'+i+'">x</a>').addClass("close");
								elemento.prepend(eliminar);
								$(".contenedor-array").append(elemento);
							}
							$(".contenedor-array").append(cerrar);
             }






});