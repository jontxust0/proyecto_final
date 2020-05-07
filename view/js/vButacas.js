$(document).ready(function(){
	/*aqui cojemos el link del trailer almacenado en localstorage en "index.js" y lo insertamos en su respectivo elemento*/
	var trailer = localStorage.getItem("trailer");
	$('#trailer').attr("src", trailer);
});