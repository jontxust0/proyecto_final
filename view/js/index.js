$(document).ready(function(){

	
		$.ajax({
	       	type:"GET",
	       	url: "controller/cCines.php", 
	    	dataType: "json",
	       	
	    	success: function(result){  
	       		var codigoHtml = "";
	    		console.log(result.lista);
	    	
	       		var cines = result.lista;
	       		
				$.each(cines,function(index,info) { 
					codigoHtml += '<option value='+info.id+' class="cine">'+info.nombre+'</option>';
					
					
				});
				$('#listaCines').append(codigoHtml);
	       		
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
	       		var codigoHtml = "";
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
		       	type:"POST",
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
		
		$.ajax({
	       	type:"GET",
	       	url: "controller/cEstrenos.php", 
	    	dataType: "json",
	    	
	    	success: function(result){  
	    		var codigoHtml = "";
	    		var itemsCarrousel = 0;
	    		console.log(result.lista);
	    		
	       		var estrenos = result.lista;
	       		
				
				$.each(estrenos,function(index,info) {
					if(itemsCarrousel == 0){
						codigoHtml += '<div class="carousel-item active">'
      					codigoHtml += '<img src='+info.objPelicula.imagenCartelera+' class="d-block w-100" style="height:300px">'
      					codigoHtml += '<h5>'+info.fechaDeEstreno+'</h5>'
    					codigoHtml += '</div>'
    					itemsCarrousel = itemsCarrousel+1;
					} else {
						codigoHtml += '<div class="carousel-item">'
	      				codigoHtml += '<img src='+info.objPelicula.imagenCartelera+' class="d-block w-100" style="height:300px">'
	      				codigoHtml += '<h5>'+info.fechaDeEstreno+'</h5>'
	    				codigoHtml += '</div>'
					}
				});
	       		
				$('#estrenos').append(codigoHtml);
	       		
			},
	       	error : function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}
		});
		
		$('#listaCines').change(function(){
				$('#sesiones').html('');
				var idCine = $(this).val();
				if(idCine != 'Elige el cine'){
					var codigoHtml = "";
					$.ajax({
				       	type:"POST",
				       	url: "controller/cSesiones.php", 
				    	dataType: "json",
				       	data:{"idCine":idCine},
				    	success: function(result){  
				    		
				    		console.log(result.lista);
				    		
				       		var sesiones = result.lista;
				       		codigoHtml = '<tr style="background-color:#3BC878"><th>Hora</th><th>Lugar</th><th>Pelicula</th><th>Imagen</th><th>Duracion<th></tr>'
							$.each(sesiones,function(index,info) {
								codigoHtml += '<tr>'
								codigoHtml += '<td>'+info.hora+'0</td>'
								codigoHtml += '<td>'+info.objCine.ubicacion+'</td>'
								codigoHtml += '<td>'+info.objPelicula.titulo+'</td>'
								codigoHtml += '<td><img src="'+info.objPelicula.imagenCartelera+'" height="200px"></td>'
								codigoHtml += '<td>'+info.objPelicula.duracion+' min</td>'
								codigoHtml += '<td><button><a href="view/vButacas.html" class="redirectVbutacas" data-trailer="'+info.objPelicula.trailer+'" data-idCine="'+info.objCine.id+'"style="width:100%;color:white;text-decoration:none">Continuar</a></button></td>'
								codigoHtml += '</tr>'
							});
							$('#sesiones').append(codigoHtml);
							/*esto es para añadir eventos jquery a elementos html creados dinamicamente.
							En este caso a los botones que lleven a la otra pestaña*/
							$(document).on('click','.redirectVbutacas',function(){
								/*guardamos id del cine y el trailer de la pelicula escojida en localstorage*/
								var trailer = $(this).data('trailer');
								localStorage.clear();
								localStorage.setItem("trailer", trailer);
							});
				       		
						},
				       	error : function(xhr) {
				   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
				   		}
					});
					
				}
				
		});
		
		
		
		

	
});