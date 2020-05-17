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
    		var codigoHtml = '<tr class="indiceElemento"><td>Título</td><td>Duración</td><td>Año</td><td>Imagen</td><td>Trailer</td><td>Clasificacion</td></tr>'
       		var peliculas = result.lista;
    		
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
    		
    		var codigoHtml = '<tr class="indiceElemento"><td>Fecha</td><td>Pelicula</td></tr>'
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
	
	$.ajax({
       	type:"GET",
       	url: "../controller/cCines.php", 
    	dataType: "json",
       	
    	success: function(result){  
       		
    		console.log(result.lista);
    	
       		var cines = result.lista;
       		var codigoHtml = '<tr class="indiceElemento"><td>Nombre</td><td>Ubicación</td></tr>'
       			
			$.each(cines,function(index,info) { 
				codigoHtml +='<tr>'
				codigoHtml += '<td>' + info.nombre + '</td>'
				codigoHtml += '<td>' + info.ubicacion + '</td>'
				codigoHtml += '<td>' + '<button class="btn btn-success editarCine">Editar</button>' + '</td>'
				codigoHtml += '<td>' + '<button class="btn btn-danger borrarCine">Borrar</button>' + '</td>'
				codigoHtml += '</tr>'
				
			});
			$('#divAdminCines').css('display', 'none');
			$('#listaCinesAdmin').html(codigoHtml);
       		
		},
       	error : function(xhr) {
   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
   		}
	});
	
	$.ajax({
       	type:"GET",
       	url: "../controller/cSesiones.php", 
    	dataType: "json",
       	
    	success: function(result){  
       		
    		console.log(result.lista);
    	
       		var cines = result.lista;
       		var codigoHtml = '<tr class="indiceElemento"><td>Hora</td><td>Cine</td><td>Pelicula</td><td>Precio</td></tr>'
       			
			$.each(cines,function(index,info) { 
				codigoHtml +='<tr>'
				codigoHtml += '<td>' + info.hora + '</td>'
				codigoHtml += '<td>' + info.objCine.nombre + '</td>'
				codigoHtml += '<td>' + info.objPelicula.titulo + '</td>'
				codigoHtml += '<td>' + info.precio + '€</td>'
				codigoHtml += '<td>' + '<button class="btn btn-success editarSesion" data-id="'+info.id+'">Editar</button>' + '</td>'
				codigoHtml += '<td>' + '<button class="btn btn-danger borrarSesion" data-id="'+info.id+'">Borrar</button>' + '</td>'
				codigoHtml += '</tr>'
				
			});
			$('#divAdminSesiones').css('display', 'none');
			$('#listaSesionesAdmin').html(codigoHtml);
       		
			/*Delete sesion*/
			$('.borrarSesion').click(function(){
				var id = $(this).data('id');
				$.ajax({
			       	type:"POST",
			       	url: "../controller/cDeleteSesion.php", 
			    	data:{"id":id},
			    	success: function(result){  
			    		alert('Sesion de cine borrada');
			    		location.reload();
					},
				});
			});
			/*Delete sesion*/
			
			/*Insert sesion*/
			$('#insertarSesion').click(function(){
				$('#divAdminSesiones').css('display', 'block');
					$.ajax({
				       	type:"GET",
				       	url: "../controller/cCines.php",
				       	dataType:"json",
				    	success: function(result){
				    		console.log(result.lista);
				       		var cines = result.lista;
				       		var codigoHtml = "";
							codigoHtml += 'Hora: <input type="text" class="form-control" id="horaSesion" placeholder="El horario que tendra la sesion..">'
							codigoHtml += 'Cine: <select class="custom-select" id="idCineSesion">'
							codigoHtml += '<option selected>Elige el cine</option>'
				       			
							$.each(cines,function(index,info) { 
								codigoHtml += '<option value="'+info.id+'">' + info.nombre + '</option>'
							});
							codigoHtml += '</select>'
							codigoHtml += 'Pelicula: <select class="custom-select" id="idPeliculaSesion">'
							codigoHtml += '<option selected>Elige la pelicula</option>'
								$.ajax({
							       	type:"GET",
							       	url: "../controller/cPeliculas.php",
							       	dataType:"json",
							    	success: function(result){
							    		console.log(result.lista);
							       		var peliculas = result.lista;
										$.each(peliculas,function(index,info) { 
											codigoHtml += '<option value="'+info.id+'">' + info.titulo + '</option>'
										});
										codigoHtml += '</select>'
										codigoHtml += '<br>'
										codigoHtml += 'Precio: <input type="text" class="form-control" id="precioSesion" placeholder="El precio que tendra cada entrada..">'
										codigoHtml += '<br><button class="btn btn-primary" id="añadirSesion">Añadir Sesion</button>'
										$('#listaSesionesAdmin').html(codigoHtml);
										$('#añadirSesion').click(function(){
											var hora = $('#horaSesion').val();
											var cineId = $('#idCineSesion').val();
											var peliculaId = $('#idPeliculaSesion').val();
											var precio = $('#precioSesion').val();
											$.ajax({
										       	type:"POST",
										       	url: "../controller/cInsertSesion.php", 
										    	data:{hora:hora, cineId:cineId, peliculaId:peliculaId, precio:precio},
										    	success: function(result){  
										    		alert('Insertada nueva sesion');
										    		location.reload();
												},
											});
										});
									},
								});
						},
					});	
			});
			/*Insertar sesion*/
			
			/*Update sesion*/
			$('.editarSesion').click(function(){
				var id = $(this).data('id');
					$.ajax({
				       	type:"GET",
				       	url: "../controller/cCines.php",
				       	dataType:"json",
				    	success: function(result){
				    		console.log(result.lista);
				       		var cines = result.lista;
				       		var codigoHtml = "";
				       		
							codigoHtml += 'Hora: <input type="text" class="form-control" id="horaSesion" placeholder="El horario que tendra la sesion..">'
							codigoHtml += 'Cine: <select class="custom-select" id="idCineSesion">'
							codigoHtml += '<option selected>Elige el cine</option>'
				       			
							$.each(cines,function(index,info) { 
								codigoHtml += '<option value="'+info.id+'">' + info.nombre + '</option>'
							});
							codigoHtml += '</select>'
							codigoHtml += 'Pelicula: <select class="custom-select" id="idPeliculaSesion">'
							codigoHtml += '<option selected>Elige la pelicula</option>'
								$.ajax({
							       	type:"GET",
							       	url: "../controller/cPeliculas.php",
							       	dataType:"json",
							    	success: function(result){
							    		console.log(result.lista);
							       		var peliculas = result.lista;
										$.each(peliculas,function(index,info) { 
											codigoHtml += '<option value="'+info.id+'">' + info.titulo + '</option>'
										});
										codigoHtml += '</select>'
										codigoHtml += '<br>'
										codigoHtml += 'Precio: <input type="text" class="form-control" id="precioSesion" placeholder="El precio que tendra cada entrada..">'
										codigoHtml += '<br><button class="btn btn-success" id="editarSesion">Modificar Sesion</button>'
										$('#listaSesionesAdmin').html(codigoHtml);
										$('#editarSesion').click(function(){
											var hora = $('#horaSesion').val();
											var cineId = $('#idCineSesion').val();
											var peliculaId = $('#idPeliculaSesion').val();
											var precio = $('#precioSesion').val();
											$.ajax({
										       	type:"POST",
										       	url: "../controller/cUpdateSesion.php", 
										    	data:{id:id, hora:hora, cineId:cineId, peliculaId:peliculaId, precio:precio},
										    	success: function(result){  
										    		alert('Sesion modificada');
										    		location.reload();
												},
											});
										});
									},
								});
						},
					});	
			});
			/*Update sesion*/
		},
       	error : function(xhr) {
   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
   		}
	});
	
	$.ajax({
       	type:"GET",
       	url: "../controller/cFacturas.php", 
    	dataType: "json",
       	
    	success: function(result){  
       		
    		console.log(result.lista);
    	
       		var facturas = result.lista;
       		var codigoHtml = '<tr class="indiceElemento"><td>Ha comprado</td><td>Precio de cada entrada</td><td>Total a pagar</td><td>En el cine</td><td>Horario</td></tr>'
       			
			$.each(facturas,function(index,info) { 
				codigoHtml += '<tr>'
				codigoHtml += '<td>' + info.entradasCompradas + ' Entradas</td>'
				codigoHtml += '<td>' + info.precioEntrada + '€</td>'
				codigoHtml += '<td>' + info.precioTotal + '€</td>'
				codigoHtml += '<td>' + info.cine + '</td>'
				codigoHtml += '<td>' + info.hora_sesion + '</td>'
				codigoHtml += '<td><button class="btn btn-danger eliminarFactura" data-id="'+info.id+'">Eliminar</button></td>'
				codigoHtml += '<td><button class="btn btn-success editar" data-id="'+info.id+'">Modificar</button></td>'
			});
       		$('#divAdminFacturas').css('display', 'none');
			$('#listaFacturasAdmin').html(codigoHtml);
			/*Delete factura*/
       		$('.eliminarFactura').click(function(){
       			var id = $(this).data('id');
       			$.ajax({
			       	type:"POST",
			       	url: "../controller/cDeleteFactura.php", 
			    	data:{"id":id},
			    	success: function(result){  
			    		alert('Factura borrada');
			    		location.reload();
					},
				});
       		});
       		/*Delete factura*/
       		
       		/*Update factura*/
       		$('.editar').click(function(){
       			var id = $(this).data('id');
       			var codigoHtml = "";
       			codigoHtml += 'Entradas compradas: <input type="text" class="form-control" id="entradasCompradas">'
       			codigoHtml += 'Precio de cada entrada: <input type="text" class="form-control" id="precioEntrada"><br>'
       			codigoHtml += '<button class="btn btn-success" id="editarFactura">Modificar factura</button>'
       				$('#listaFacturasAdmin').html(codigoHtml);
       				$('#editarFactura').click(function(){
       					var entradasCompradas = $('#entradasCompradas').val();
       					var precioEntrada = $('#precioEntrada').val();
       					$.ajax({
        			       	type:"POST",
        			       	url: "../controller/cUpdateFactura.php", 
        			    	data:{id:id, entradasCompradas:entradasCompradas, precioEntrada:precioEntrada},
        			    	success: function(result){  
        			    		alert('Factura modificada');
        			    		location.reload();
        					},
        				});
       				});
       		});
       		/*Update factura*/
		},
       	error : function(xhr) {
   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
   		}
	});
	
	$.ajax({
       	type:"GET",
       	url: "../controller/cUsuarios.php", 
    	dataType: "json",
       	
    	success: function(result){  
       		
    		console.log(result.lista);
    	
       		var usuarios = result.lista;
       		var codigoHtml = '<tr class="indiceElemento"><td>Usuario</td><td>Contraseña (Su contraseña se encripta tras crear nuevo usuario)</td></tr>'
       			
			$.each(usuarios,function(index,info) { 
				codigoHtml +='<tr>'
				codigoHtml += '<td>' + info.usuario + '</td>'
				codigoHtml += '<td>' + info.contrasenia + '</td>'
				codigoHtml += '<td>' + '<button class="btn btn-success editarUsuario">Editar</button>' + '</td>'
				codigoHtml += '<td>' + '<button class="btn btn-danger borrarUsuario">Borrar</button>' + '</td>'
				codigoHtml += '</tr>'
				
			});
			$('#divAdminUsuarios').css('display', 'none');
			$('#listaUsuariosAdmin').html(codigoHtml);
			/*Insert usuario*/
       		$('#insertarUsuario').click(function(){
       			var codigoHtml = "";
				codigoHtml += 'Nombre de usuario: <input type="text" class="form-control" id="usuario" placeholder="Nombre del usuario..">'
				codigoHtml += 'Contraseña: <input type="password" class="form-control" id="contrasenia" placeholder="Su contraseña..">'
				codigoHtml += '<br><br>'
				codigoHtml += '<button class="btn btn-primary" id="añadirUsuario">Añadir usuario</button>'
				$('#divAdminUsuarios').css('display', 'block');
				$('#listaUsuariosAdmin').html(codigoHtml);
				$('#añadirUsuario').click(function(){
					var usuario = $('#usuario').val();
					var contrasenia = $('#contrasenia').val();
					$.ajax({
				       	type:"POST",
				       	url: "../controller/cInsertUsuario.php", 
				    	data:{usuario:usuario, contrasenia:contrasenia},
				    	success: function(result){  
				    		alert('Insertado nuevo usuario');
				    		location.reload();
						},
					});
				});
       		});
       		/*Insert usuario*/
		},
       	error : function(xhr) {
   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
   		}
	});
	
	
	/*Mostrara los elementos del que se elija, y ocultara los demas*/
	$('#adminPeliculas').click(function(){
		$('#divAdminPeliculas').css('display', 'block');
		$('#divAdminEstrenos').css('display', 'none');
		$('#divAdminSesiones').css('display', 'none');
		$('#divAdminCines').css('display', 'none');
		$('#divAdminFacturas').css('display', 'none');
		$('#divAdminUsuarios').css('display', 'none');
	});
	
	$('#adminEstrenos').click(function(){
		$('#divAdminEstrenos').css('display', 'block');
		$('#divAdminPeliculas').css('display', 'none');
		$('#divAdminSesiones').css('display', 'none');
		$('#divAdminCines').css('display', 'none');
		$('#divAdminFacturas').css('display', 'none');
		$('#divAdminUsuarios').css('display', 'none');
	});
	
	$('#adminCines').click(function(){
		$('#divAdminCines').css('display', 'block');
		$('#divAdminEstrenos').css('display', 'none');
		$('#divAdminPeliculas').css('display', 'none');
		$('#divAdminSesiones').css('display', 'none');
		$('#divAdminFacturas').css('display', 'none');
		$('#divAdminUsuarios').css('display', 'none');
	});
	
	$('#adminSesiones').click(function(){
		$('#divAdminSesiones').css('display', 'block');
		$('#divAdminEstrenos').css('display', 'none');
		$('#divAdminPeliculas').css('display', 'none');
		$('#divAdminCines').css('display', 'none');
		$('#divAdminFacturas').css('display', 'none');
		$('#divAdminUsuarios').css('display', 'none');
	});
	
	$('#adminFacturas').click(function(){
		$('#divAdminFacturas').css('display', 'block');
		$('#divAdminSesiones').css('display', 'none');
		$('#divAdminEstrenos').css('display', 'none');
		$('#divAdminPeliculas').css('display', 'none');
		$('#divAdminCines').css('display', 'none');
		$('#divAdminUsuarios').css('display', 'none');
	});
	
	$('#adminUsuarios').click(function(){
		$('#divAdminUsuarios').css('display', 'block');
		$('#divAdminFacturas').css('display', 'none');
		$('#divAdminSesiones').css('display', 'none');
		$('#divAdminEstrenos').css('display', 'none');
		$('#divAdminPeliculas').css('display', 'none');
		$('#divAdminCines').css('display', 'none');
	});
	/*Mostrara los elementos del que se elija, y ocultara los demas*/
	
	
});