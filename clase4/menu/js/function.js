/*hacer que el menu de rayas se abra y cierra desplazandos los menus */

window.onload=function(){
	var menu =  document.getElementsByTagName("nav")[0];
	var burger =document.getElementsByClassName("burger")[0];
	var close_nav =document.getElementsByClassName("close_nav")[0];


	console.log(menu);

	burger.onclick=function(evento){
		evento.preventDefault();
		menu.className="nav_visible nav_abrir";

	}

	close_nav.onclick=function(evento){
		evento.preventDefault();
		menu.className="nav_cerrar";
	}


}