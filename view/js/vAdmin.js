$(document).ready(function(){
	$('#cerrarSesion').click(function(){
		$.ajax({
	       	url: "../controller/cLogOut.php", 
	    	success: function(result){  
	    		console.log(result);
	    		
	    		alert('Has cerrado sesion, volviendo a la pagina inicial..')
	    		window.location.href = '../index.html';
			},
	       	error : function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}
		});
	});
	
});