$(document).ready(function(){
	/*aqui cojemos el link del trailer almacenado en localstorage en "index.js" y lo insertamos en su respectivo elemento*/
	var trailer = localStorage.getItem('trailer');
	var idCine = localStorage.getItem('idCine');
	$('#trailer').attr('src', trailer);
	$.ajax({
       	type:"POST",
       	url: "../controller/cButacas.php", 
    	dataType: "json",
       	data:{"idCine":idCine},
    	success: function(result){  
       		var codigoHtml = "";
    		console.log(result.lista);
       		var butacas = result.lista;
       		var fila = 'A';
       		
       		codigoHtml += '<tr>'
			$.each(butacas,function(index,info) {
				if(info.reservado == true){
					if(info.numero.substr(0, 1) == fila){
						codigoHtml += '<td class="ocupado" data-id="'+info.id+'">' + info.numero + '</td>'
					} else {
						codigoHtml += '</tr>'
							codigoHtml += '<tr>'
								codigoHtml += '<td data-id="'+info.id+'">' + info.numero + '</numero>'
								fila = info.numero.substr(0, 1);
					}
				} else {
					if(info.numero.substr(0, 1) == fila){
						codigoHtml += '<td data-id="'+info.id+'">' + info.numero + '</td>'
					} else {
						codigoHtml += '</tr>'
							codigoHtml += '<tr>'
								codigoHtml += '<td data-id="'+info.id+'">' + info.numero + '</numero>'
								fila = info.numero.substr(0, 1);
					}
				}
			});
       		var botonContinuar = "";
       		botonContinuar += '<button data-toggle="modal" data-target="#datosCompra" id="continuarCompra">Continuar</button>'
			$('#butacas').append(codigoHtml);
			$('#divButacas').append(botonContinuar);
		},
       	error : function(xhr) {
   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
   		}
	});
	
	/*Si el asiento no esta ocupado, al hacer click lo estará*/
	$(document).on('click', 'td', function(){
		if(!$(this).hasClass('ocupado')) {
		  $(this).toggleClass('ocupar');
		}
	});
	/*Si el asiento no esta ocupado, al hacer click lo estará*/
	
	$(document).on('click', '#continuarCompra', function(){
		
		
		var entradasCompradas = $('.ocupar').length;
		var precioEntrada = localStorage.getItem('precio');
		var precioTotal = (precioEntrada*entradasCompradas);
		var idSesion = localStorage.getItem('idSesion');
		var nombreCine = localStorage.getItem('nombreCine');
		var horaSesion = localStorage.getItem('horaSesion');
		
		$('#entradasCompradas').html('Numero de entradas: ' + entradasCompradas);
		$('#precioEntrada').html('Precio de cada entrada: ' + precioEntrada + '€');
		$('#precioTotal').html('Importe neto: ' + precioTotal + '€');
		$('#cine').html('Para ver la pelicula en: ' + nombreCine);
		$('#horaSesion').html('Hora de la sesión: ' + horaSesion + '0');
		
		$('#comprarEntradas').click(function(){
			$.ajax({
		       	type:"POST",
		       	url: "../controller/cInsertFactura.php",
		       	data:{entradasCompradas:entradasCompradas, precioEntrada:precioEntrada, precioTotal:precioTotal, idSesion:idSesion,
		       		  nombreCine:nombreCine, horaSesion:horaSesion},
		    	success: function(result){  
		    		console.log(result);
		    		alert('Acabas de hacer la compra');
		    		window.location.href = '../index.html';
				},
		       	error : function(xhr) {
		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		   		}
			});
			/*Ocupar los asientos elegidos al hacer la compra*/
			var asientosOcupar = document.getElementsByClassName("ocupar");
			var idAsientoOcupar = 0;
			for (var i = 0; i < asientosOcupar.length; i++) {
				idAsientoOcupar = asientosOcupar[i].getAttribute('data-id');
				$.ajax({
			       	type:"POST",
			       	url: "../controller/cOcuparButacas.php",
			       	data:{idAsientoOcupar:idAsientoOcupar},
			    	success: function(result){  
			    		console.log(result);

					},
			       	error : function(xhr) {
			   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
			   		}
				});
			}
			/*Ocupar los asientos elegidos al hacer la compra*/
		});
	});
});

