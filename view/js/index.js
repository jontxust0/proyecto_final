$(document).ready(function(){

	/*mostrar lista de cines en su <select>, al recargar la pagina*/
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
		/*mostrar lista de cines en su <select>, al recargar la pagina*/
		
		
		/*mostrar lista de generos de pelicula en su <select>, al recargar la pagina*/
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
		/*mostrar lista de generos de pelicula en su <select>, al recargar la pagina*/
		
		
		/*mostrar las peliculas que sean del genero que se eliga, al hacer click en su <select>*/
		$('#listaGeneros').change(function(){
			$('#divSesiones').css('display', 'none');
			$('#divPeliculas').css('display', 'block');
			$('#peliculas').addClass('row');
			$('#peliculas').html("");
			var generoPelicula = "'"+$(this).val()+"'";
			var codigoHtml = "";
			
			$.ajax({
		       	type:"POST",
		       	url: "controller/cPeliculasGenero.php", 
		    	dataType: "json",
		       	data:{"generoPelicula":generoPelicula},
		    	success: function(result){  
		    		
		    		console.log(result.lista);
		    		
		       		var peliculas = result.lista;
		       		
					$.each(peliculas,function(index,info) {
						codigoHtml +='<div class="col">'
						codigoHtml += '<div class="card pelicula" data-id="'+info.id+'"style="width:18rem;height:470px;margin:20px 0px 20px 0px;>';
						codigoHtml += '<a href="#divCines" style="width:100%;">'
						codigoHtml += '<img src='+info.imagenCartelera+' style="height:350px;width:100%">'
						codigoHtml += '<div class="card-body">'
						codigoHtml += '<h6 class="card-title" style="text-align:center">'+info.titulo+'</h6>'
						codigoHtml += '<p class="card-text">Duracion: '+info.duracion+' minutos</p>'
					    codigoHtml += '<p class="card-text">Recomendacion por edad: '+info.clasificacion+'</p>'
					    codigoHtml += '</div>'
					    codigoHtml += '</a>'
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
		/*mostrar las peliculas que sean del genero que se eliga, al hacer click en su <select>*/
		
		
		/*mostrar las peliculas nuevas que se van a estrenar, al recargar la pagina*/
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
		/*mostrar las peliculas nuevas que se van a estrenar, al recargar la pagina*/
		
		
		/*para mostrar las sesiones de sala que tenga el cine seleccionado*/
		$('#listaCines').change(function(){
				$('#divSesiones').css('display', 'block');
				$('#sesiones').html('');
				$('#divPeliculas').css('display', 'none');
				$('#aviso').css('display', 'none');
				var idCine = $(this).val();
				
				if(idCine != 'Elige el cine'){
					var codigoHtml = "";
					$.ajax({
				       	type:"POST",
				       	url: "controller/cSesionesCine.php", 
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
								codigoHtml += '<td><button><a href="view/vButacas.html" class="redirectVbutacas" data-trailer="'+info.objPelicula.trailer+'" data-idcine="'+info.objCine.id+'" data-horasesion="'+info.hora+'" data-nombrecine="'+info.objCine.nombre+'" data-idsesion="'+info.id+'" data-precio="'+info.precio+'" style="width:100%;color:white;text-decoration:none">Continuar</a></button></td>'
								codigoHtml += '</tr>'
							});
							$('#sesiones').append(codigoHtml);
							/*esto es para añadir eventos jquery a elementos html creados dinamicamente.
							En este caso a los botones que lleven a la otra pestaña*/
							$(document).on('click','.redirectVbutacas',function(){
								/*guardamos id del cine y el trailer de la pelicula escojida en localstorage*/
								var trailer = $(this).data('trailer');
								var idCine = $(this).data('idcine');
								var horaSesion = $(this).data('horasesion');
								var nombreCine = $(this).data('nombrecine');
								var idSesion = $(this).data('idsesion');
								var precio = $(this).data('precio');
								
								localStorage.clear();
								localStorage.setItem('trailer', trailer);
								localStorage.setItem('idCine', idCine);
								localStorage.setItem('horaSesion', horaSesion);
								localStorage.setItem('nombreCine', nombreCine);
								localStorage.setItem('idSesion', idSesion);
								localStorage.setItem('precio', precio);
							});
				       		
						},
				       	error : function(xhr) {
				   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
				   		}
					});
				}
		});
		/*para mostrar las sesiones de sala que tenga el cine seleccionado*/
		
		
		/*Esto es para mostrar las sesiones en las cuales se proyectara la pelicula seleccionada*/
		$(document).on('click','.pelicula',function(){
			$('#divSesiones').css('display', 'block');
			$('#divPeliculas').css('display', 'none');
			var idPelicula = $(this).data('id');
			$.ajax({
		       	type:"POST",
		       	url: "controller/cSesionesPelicula.php", 
		    	dataType: "json",
		       	data:{"idPelicula":idPelicula},
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
						codigoHtml += '<td><button><a href="view/vButacas.html" class="redirectVbutacas" data-trailer="'+info.objPelicula.trailer+'" data-idcine="'+info.objCine.id+'" data-horasesion="'+info.hora+'" data-nombrecine="'+info.objCine.nombre+'" data-idsesion="'+info.id+'" style="width:100%;color:white;text-decoration:none">Continuar</a></button></td>'
						codigoHtml += '</tr>'
					});
		       		if(result.lista == ""){
		       			var aviso = '<div class="alert alert-warning" role="alert">Hoy no se proyectara la pelicula selecccionada</div>';
		       			$('#sesiones').html('');
		       			$('#aviso').css('display', 'block');
		       			$('#aviso').html(aviso);
		       		} else {
		       			/*Primero los divs para que solo nos aparezcan las sesiones de la pelicula que hayamos elegido*/
			       		$('#sesiones').html('');
			       		$('#aviso').css('display', 'none');
						$('#sesiones').append(codigoHtml);
		       		}
					$(document).on('click','.redirectVbutacas',function(){
						
						var trailer = $(this).data('trailer');
						var idCine = $(this).data('idcine');
						var horaSesion = $(this).data('horasesion');
						var nombreCine = $(this).data('nombrecine');
						var idSesion = $(this).data('idsesion')
						
						localStorage.clear();
						localStorage.setItem('trailer', trailer);
						localStorage.setItem('idCine', idCine);
						localStorage.setItem('horaSesion', horaSesion);
						localStorage.setItem('nombreCine', nombreCine);
						localStorage.setItem('idSesion', idSesion);
					});
		       		
				},
		       	error : function(xhr) {
		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		   		}
			});
		});
		/*Esto es para mostrar las sesiones en las cuales se proyectara la pelicula seleccionada*/
		
		
		/*Esto para mostrar las peliculas cuyos titulos coincidan con la busqueda por titulo*/
		$('#buscar').click(function(){
			var tituloPelicula = "'"+$('#busqueda').val()+"'";
			$('#divSesiones').css('display', 'none');
			$('#aviso').css('display', 'none');
			$('#divPeliculas').css('display', 'block');
			$.ajax({
		       	type:"POST",
		       	url: "controller/cPeliculasTitulo.php", 
		    	dataType: "json",
		       	data:{"tituloPelicula":tituloPelicula},
		    	success: function(result){  
		    		
		    		console.log(result.lista);
		    		
		       		var peliculas = result.lista;
		       		var codigoHtml = "";
					$.each(peliculas,function(index,info) {
						codigoHtml +='<div class="col">'
						codigoHtml += '<div class="card pelicula" data-id="'+info.id+'"style="width:18rem;height:470px;margin:20px 0px 20px 0px;>';
						codigoHtml += '<a href="#divCines" style="width:100%;">'
						codigoHtml += '<img src='+info.imagenCartelera+' style="height:350px;width:100%">'
						codigoHtml += '<div class="card-body">'
						codigoHtml += '<h6 class="card-title" style="text-align:center">'+info.titulo+'</h6>'
						codigoHtml += '<p class="card-text">Duracion: '+info.duracion+' minutos</p>'
					    codigoHtml += '<p class="card-text">Recomendacion por edad: '+info.clasificacion+'</p>'
					    codigoHtml += '</div>'
					    codigoHtml += '</a>'
					    codigoHtml += '</div>'
					    codigoHtml += '</div>'
					});
					$('#peliculas').html('');
					$('#peliculas').append(codigoHtml);
				},
		       	error : function(xhr) {
		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		   		}
			});
		});
		/*Esto para mostrar las peliculas cuyos titulos coincidan con la busqueda por titulo*/
		
		
		/*Esto para el login al hacer click en el boton de "Iniciar sesión"*/
		$(document).on('click','#iniciarSesion',function(){
			var usuario = $('#usuario').val();
			var contrasenia = $('#contrasenia').val();
			$.ajax({
				type:"POST",
		       	url: "controller/cLogIn.php", 
		       	dataType:"json",
		       	data: { usuario: usuario, contrasenia: contrasenia },
		    	success: function(result){  

		    		console.log(result);
		    		
		    		if (result !=0){
		    			alert('Has iniciado sesion');
		    			window.location.href = 'view/vAdmin.html';
		    		
		    		} else {
		    			alert('Nombre de usuario o contraseña incorrectos')
		    		}
				},
		       	error : function(xhr) {
		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		   		}
			});
		});
		/*Esto para el login al hacer click en el boton de "Iniciar sesión"*/
});