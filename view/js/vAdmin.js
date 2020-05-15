$(document).ready(function(){
	/*Log out*/
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
	/*Log out*/
	
	$.ajax({
       	type:"GET",
       	url: "../controller/cPeliculas.php", 
    	dataType: "json",
    	success: function(result){  
    		
    		console.log(result.lista);
    		var codigoHtml = '<tr><td>Título</td><td>Duración</td><td>Año</td><td>Imagen</td><td>Trailer</td><td>Clasificacion</td></tr>'
       		var peliculas = result.lista;
    		var codigoHtml = "";
			$.each(peliculas,function(index,info) {
				codigoHtml +='<tr>'
				codigoHtml += '<td>' + info.titulo + '</td>'
				codigoHtml += '<td>' + info.duracion + '</td>'
				codigoHtml += '<td>' + info.anio + '</td>'
				codigoHtml += '<td><img src='+info.imagenCartelera+'</td>'
				codigoHtml += '<td<iframe src='+info.trailer+'></iframe></td>'
				codigoHtml += '<td>' + info.clasificacion + '</td>'
				codigoHtml += '<td>' + '<button class="btn btn-success editarPelicula" data-id='+info.id+'>Editar</button>' + '</td>'
				codigoHtml += '<td>' + '<button class="btn btn-danger borrarPelicula" data-id='+info.id+'>Borrar</button>' + '</td>'
				codigoHtml += '</tr>'
			});
			$('#divAdminPeliculas').css('display', 'none');
			$('#listaPeliculasAdmin').html(codigoHtml);
			
			/*Insert pelicula*/
			$('#insertarPelicula').click(function(){
				var codigoHtml = "";
				codigoHtml += 'Titulo: <input type="text" class="form-control" id="titulo" placeholder="Titulo de la pelicula..">'
				codigoHtml += 'Duracion: <input type="text" class="form-control" id="duracion" placeholder="Su duracion en minutos..">'
				codigoHtml += 'Año: <input type="text" class="form-control" id="anio" placeholder="Año en el que salio..">'
				codigoHtml += 'Imagen: <input type="text" class="form-control" id="imagen" placeholder="La URL donde se encuentra la imagen..">'
				codigoHtml += 'Trailer: <input type="text" class="form-control" id="trailer" placeholder="La URL donde se encuentra el trailer..">'
				codigoHtml += 'Clasificacion: <input type="text" class="form-control" id="clasificacion" placeholder="Clasificacion por edad..">'
				codigoHtml += '<br><br>'
				codigoHtml += '<button class="btn btn-primary" id="añadirPelicula">Añadir pelicula</button>'
				$('#divAdminPeliculas').css('display', 'block');
				$('#listaPeliculasAdmin').html(codigoHtml);
				$('#añadirPelicula').click(function(){
					var titulo = $('#titulo').val();
					var duracion = $('#duracion').val();
					var anio = $('#anio').val();
					var imagen = $('#imagen').val();
					var trailer = $('#trailer').val();
					var clasificacion = $('#clasificacion').val();
					$.ajax({
				       	type:"POST",
				       	url: "../controller/cInsertPelicula.php", 
				    	data:{titulo:titulo, duracion:duracion, anio:anio, imagen:imagen, trailer:trailer, clasificacion:clasificacion},
				    	success: function(result){  
				    		alert('Insertada nueva pelicula');
				    		location.reload();
						},
					});
				});
			});
			/*Insert pelicula*/
			
			/*Update pelicula*/
			$('.editarPelicula').click(function(){
				var codigoHtml = "";
				codigoHtml += 'Titulo: <input type="text" class="form-control" id="titulo" placeholder="Titulo de la pelicula..">'
				codigoHtml += 'Duracion: <input type="text" class="form-control" id="duracion" placeholder="Su duracion en minutos..">'
				codigoHtml += 'Año: <input type="text" class="form-control" id="anio" placeholder="Año en el que salio..">'
				codigoHtml += 'Imagen: <input type="text" class="form-control" id="imagen" placeholder="La URL donde se encuentra la imagen..">'
				codigoHtml += 'Trailer: <input type="text" class="form-control" id="trailer" placeholder="La URL donde se encuentra el trailer..">'
				codigoHtml += 'Clasificacion: <input type="text" class="form-control" id="clasificacion" placeholder="Clasificacion por edad..">'
				codigoHtml += '<br><br>'
				codigoHtml += '<button class="btn btn-success" id="editarPelicula">Modificar pelicula</button>'
				$('#listaPeliculasAdmin').html(codigoHtml);
				var id = $(this).data('id');

				$('#editarPelicula').click(function(){
					
					var titulo = $('#titulo').val();
					var duracion = $('#duracion').val();
					var anio = $('#anio').val();
					var imagen = $('#imagen').val();
					var trailer = $('#trailer').val();
					var clasificacion = $('#clasificacion').val();
					$.ajax({
				       	type:"POST",
				       	url: "../controller/cUpdatePelicula.php", 
				    	data:{id:id, titulo:titulo, duracion:duracion, anio:anio, imagen:imagen, trailer:trailer, clasificacion:clasificacion},
				    	success: function(result){  
				    		alert('Pelicula actualizada');
				    		location.reload();
						},
					});
				});
			});
			/*Update pelicula*/
			
			/*Delete pelicula*/
			$('.borrarPelicula').click(function(){
				var id = $(this).data('id');
				
				$.ajax({
			       	type:"POST",
			       	url: "../controller/cDeletePelicula.php", 
			    	data:{"id":id},
			    	success: function(result){  
			    		console.log(result.lista);
			    		alert('Pelicula borrada');
			    		location.reload();
					},
				});
			});
			/*Delete pelicula*/
			
		},
       	error : function(xhr) {
   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
   		}
	});
	
	$.ajax({
       	type:"GET",
       	url: "../controller/cEstrenos.php", 
    	dataType: "json",
    	success: function(result){  
    		
    		console.log(result.lista);
    		var codigoHtml = "";
    		var codigoHtml = '<tr><td>Fecha</td><td>Pelicula</td></tr>'
       		var estrenos = result.lista;
    		
			$.each(estrenos,function(index,info) {
				codigoHtml +='<tr>'
				codigoHtml += '<td>' + info.fechaDeEstreno + '</td>'
				codigoHtml += '<td>' + info.objPelicula.titulo + '</td>'
				codigoHtml += '<td><button class="btn btn-success editarEstreno" data-id="'+info.id+'">Editar</button></td>'
				codigoHtml += '<td><button class="btn btn-danger borrarEstreno" data-id="'+info.id+'">Borrar</button></td>'
				codigoHtml += '</tr>'
			});
			$('#divAdminEstrenos').css('display', 'none');
			$('#listaEstrenosAdmin').html(codigoHtml);
			
			
			/*Delete estreno*/
			$('.borrarEstreno').click(function(){
				var id = $(this).data('id');
				$.ajax({
			       	type:"POST",
			       	url: "../controller/cDeleteEstreno.php", 
			    	data:{"id":id},
			    	success: function(result){  
			    		console.log(result.lista);
			    		alert('Borrado estreno');
			    		location.reload();
					},
				});
			});
			/*Delete estreno*/
			
			/*Insert estreno*/
			$('#insertarEstreno').click(function(peliculas){

				$.ajax({
			       	type:"GET",
			       	url: "../controller/cPeliculas.php", 
			    	dataType: "json",
			    	success: function(result){  
			    		console.log(result.lista);
			       		var peliculas = result.lista;
			       		var codigoHtml = "";
			       		codigoHtml += 'Fecha de estreno: <br><input class="form-control" placeholder="El dia y el mes.." id="fecha">'
			       		codigoHtml += 'Nombre de la pelicula: <br><select class="custom-select" id="idSelect">'
			       		codigoHtml += '<option selected>Elige nombre de la pelicula</option>'
						$.each(peliculas,function(index,info) {
							codigoHtml += '<option value='+info.id+'>' + info.titulo +'</option>'
						});
			       		codigoHtml += '</select>'
			       		codigoHtml += '<br><br>'
			       		codigoHtml += '<button class="btn btn-primary" id="añadirEstreno">Añadir estreno</button>'
			       		$('#divAdminEstrenos').css('display', 'block');
			       		$('#listaEstrenosAdmin').html(codigoHtml);
			       		$('#idSelect').change(function(){
			       			var idPelicula = $(this).val();
			       			$('#añadirEstreno').click(function(){
				       			var fecha = $('#fecha').val();
				       			
				       			$.ajax({
							       	type:"POST",
							       	url: "../controller/cInsertEstreno.php", 
							    	data:{fecha:fecha, idPelicula:idPelicula},
							    	success: function(result){  
							    		alert('Insertado estreno');
							    		location.reload();
									},
								});
							});
			       		});
			       		
			       		
					},
			       	error : function(xhr) {
			   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
			   		}
				});
			});
			/*Insert estreno*/
			
			/*Update estreno*/
			$('.editarEstreno').click(function(){
			
				var id = $(this).data('id');
				$.ajax({
			       	type:"GET",
			       	url: "../controller/cPeliculas.php", 
			    	dataType: "json",
			    	success: function(result){  
			    		console.log(result.lista);
			       		var peliculas = result.lista;
			       		var codigoHtml = "";
			       		codigoHtml += 'Fecha de estreno: <br><input class="form-control" placeholder="El dia y el mes.." id="fecha">'
			       		codigoHtml += 'Nombre de la pelicula: <br><select class="custom-select" id="idSelect">'
			       		codigoHtml += '<option selected>Elige nombre de la pelicula</option>'
						$.each(peliculas,function(index,info) {
							codigoHtml += '<option value='+info.id+'>' + info.titulo +'</option>'
						});
			       		codigoHtml += '</select>'
			       		codigoHtml += '<br><br>'
			       		codigoHtml += '<button class="btn btn-success" id="editarEstreno">Modificar estreno</button>'
			       		$('#divAdminEstrenos').css('display', 'block');
			       		$('#listaEstrenosAdmin').html(codigoHtml);
			       		$('#idSelect').change(function(){
			       			var idPelicula = $(this).val();
			       			$('#editarEstreno').click(function(){
				       			var fecha = $('#fecha').val();
				       			
				       			$.ajax({
							       	type:"POST",
							       	url: "../controller/cUpdateEstreno.php", 
							    	data:{id:id, fecha:fecha, idPelicula:idPelicula},
							    	success: function(result){  
							    		alert('actualizado estreno');
							    		location.reload();
									},
								});
							});
			       		});
			       		
			       		
					},
			       	error : function(xhr) {
			   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
			   		}
				});
			});
			/*Update estreno*/
	
		},
       	error : function(xhr) {
   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
   		}
	});
	
	$('#adminPeliculas').click(function(){
		$('#divAdminPeliculas').css('display', 'block');
	});
	
	$('#adminEstrenos').click(function(){
		$('#divAdminEstrenos').css('display', 'block');
		
	});
	
});