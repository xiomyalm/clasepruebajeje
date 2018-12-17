window.onload= function(){
	var imagenes =[];
	var letras = ["A","B","C","D"];
	var colores = ["FF0000","00FF00","00000FF","FF00FF","FFFF00","00FFFF"];
      var cartas = [];
	for(var i=0; i<4 ; i++){
		imagenes[i]="http://placehold.it/200x300/"+colores[Math.floor(Math.random()*colores.length)]+"/FFFFFF?text="+letras[i];
	}

      var pre_seleccion = [];
      for(var i=0; i<6; i++) {

         var indice = Math.floor(Math.random()*imagenes.length);
            pre_seleccion [i] = {img:imagenes[indice], carta:indice}
      }
              

            
      for (var i=0;i<6;i++)
      {     
            if(i<3){
                  cartas[i]= pre_seleccion[i];
                  cartas[i+3]= pre_seleccion[i];

            }else{
                  cartas[i+3]=pre_seleccion[i];
                  cartas[i+6]=pre_seleccion[i];
            }

            
      }
      console.log(cartas);
       
      var cartasDom = [];

       var fase_juego = 0 ;
       var ultimo_click= cartas.length;
 
      for (var i = 0; i<cartas.length ; i++) 

      {  
            (function(indice){
                
                 addCarta(indice);
                 cartasDom[indice].onclick = function(){

                      if(indice!= ultimo_click){
                        if (fase_juego<1){
                            this.childNodes[1].className = "mascara mostrar";
                            ultimo_click= indice;
                            fase_juego= 1; 

                        }
                           else{
                              this.childNodes[1].className = "mascara mostrar";
                              setTimeout(function(){
                                    if(cartas[indice].carta==cartas[ultimo_click].carta){
                                          cartasDom[indice].className= "carta invisible";
                                          cartasDom[ultimo_click].className= "carta invisible";

                                    }  else{
                                          cartasDom[indice].childNodes[1].className= "mascara";
                                          cartasDom[ultimo_click].childNodes[1].className= "mascara";

                                       }

                                  fase_juego= 0;     

                              },500);

                           }
                      }
                  //console.log(this.childNodes[1]);
                  //this.childNodes[1].className = "mascara mostrar";
                 }

            })(i);


      }
            

      function addCarta(indice){
      	var carta = document.createElement("div");
      	carta.className= "carta" ;
      	var imagen = document.createElement("img");
      	imagen.src = cartas[indice].img;
      	var mascara = document.createElement("div");
      	mascara.className = "mascara";
      	carta.appendChild(imagen);
      	carta.appendChild(mascara);
      	document.getElementsByClassName("tablero")[0].appendChild(carta);
            cartasDom.push(carta);

        
      }


}      
