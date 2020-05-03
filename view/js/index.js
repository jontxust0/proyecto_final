$(document).ready(function(){

	
		$.ajax({
	       	type:"GET",
	       	url: "controller/cCines.php", 
	    	dataType: "json",  //type of the result
	       	
	    	success: function(result){  
	       		
	    		console.log(result.lista);
	    		
	       		var cines = result.lista;
	       		
				$.each(cines,function(index,info) { 
					cines += '<option value='+info.nombre+'>'+info.nombre+'</option>';
					
					
				});
				$('#listaCines').append(cines);
	       		
			},
	       	error : function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}

		});
		
		$.ajax({
	       	type:"GET",
	       	url: "controller/cGeneros.php", 
	    	dataType: "json",  //type of the result
	       	
	    	success: function(result){  
	       		
	    		console.log(result.lista);
	    		
	       		var generos = result.lista;
	       		
				$.each(generos,function(index,info) { 
					generos += '<option value='+info.nombre+'>'+info.nombre+'</option>';
					
					
				});
				$('#listaGeneros').append(generos);
	       		
			},
	       	error : function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}

		});

	
});