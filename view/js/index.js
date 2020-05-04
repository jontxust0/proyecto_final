$(document).ready(function(){

	
		$.ajax({
	       	type:"GET",
	       	url: "controller/cCines.php", 
	    	dataType: "json",
	       	
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
	    	dataType: "json",
	       	
	    	success: function(result){  
	       		
	    		console.log(result.lista);
	    		
	       		var generos = result.lista;
	       		var codigoHtml;
				$.each(generos,function(index,info) { 
					codigoHtml += '<option value='+info.nombre+'>'+info.nombre+'</option>';
					
					
				});
				$('#listaGeneros').append(codigoHtml);
				
			},
	       	error : function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}
		});
		
		$('#listaGeneros').change(function(){
			$('#peliculas').html("");
			var generoPelicula = "'"+$(this).val()+"'";
			var codigoHtml = "";
			
			$.ajax({
		       	type:"post",
		       	url: "controller/cPeliculas.php", 
		    	dataType: "json",
		       	data:{"generoPelicula":generoPelicula},
		    	success: function(result){  
		    		
		    		console.log(result.lista);
		    		
		       		var peliculas = result.lista;
		       		
					$.each(peliculas,function(index,info) {
						codigoHtml +='<div class="col">'
						codigoHtml += '<div class="card pelicula" style="width:18rem;height:470px;margin:20px 0px 20px 0px;>';
						codigoHtml += '<a href="">'
						codigoHtml += '<img src='+info.imagenCartelera+' style="height:350px;width:100%">'
						codigoHtml += '</a>'
						codigoHtml += '<div class="card-body">'
						codigoHtml += '<h6 class="card-title" style="text-align:center">'+info.titulo+'</h6>'
						codigoHtml += '<p class="card-text">Duracion: '+info.duracion+' minutos</p>'
					    codigoHtml += '<p class="card-text">Recomendacion por edad: '+info.clasificacion+'</p>'
					    codigoHtml += '</div>'
					    codigoHtml += '</div>'
					    codigoHtml += '</div>'
					});
					$('#peliculas').append(codigoHtml);
					
		       		
				},
		       	error : function(xhr) {
		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		   		}
			});
		});

	
});