$(document).ready(function(){
  var puntuacion = 0;
    var tiempo = 10 ; 

  int();
  $(".reset").click(function(evento){
    evento.preventDefault();
    int();

  });

function int(){

  $(".circulo").removeClass("invisible");
 /*empty : elimina todo lo que se ha puesto en el dom */
  $(".timer").empty();

    $(".fondo_modal").hide();
    puntuacion = 0;
    tiempo = 10 ; 
    
    console.log(puntuacion);
    $(".puntuacion").html(puntuacion);
    for(var i=0 ; i<tiempo; i++){
      var bloque = $("<div></div>").addClass("bloque_timer");
           bloque.css("width",100/tiempo-1+"%");
           $(".timer").append(bloque);
       }

    var timer = setInterval(function(){
             if(tiempo>0){
              //console.log(tiempo);
              $(".bloque_timer").eq(tiempo-1).fadeOut();
              tiempo--;

             }else{
              clearInterval(timer);
              $(".fondo_modal").show();
              console.log("game over");
              $(".modal h3").html("YOU LOSE");
             }

    },1000);   



       $(".circulo").click(function(){
            if(!$(this).hasClass("invisible")){
              $(this).addClass("invisible");
                puntuacion++; 
                if (puntuacion == $(".circulo").length){
                  clearInterval(timer);
                  $(".fondo_modal").show();

                  $(".modal h3").html("YOU WIN");
                }
                $(".puntuacion").html(puntuacion);
            }
       });


}


});
