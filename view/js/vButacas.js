

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

				if(info.numero.substr(0, 1) == fila){
					codigoHtml += '<td>' + info.numero + '</td>'
				} else {
					codigoHtml += '</tr>'
					codigoHtml += '<tr>'
					codigoHtml += '<td>' + info.numero + '</numero>'
					fila = info.numero.substr(0, 1);
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
	$(document).on('click', 'td', function(){
		$(this).toggleClass('ocupar');
	});
	$(document).on('click', '#continuarCompra', function(){
		var entradasCompradas = $('.ocupar').length;
		var precioEntrada = 7.20;
		var precioTotal = (precioEntrada*entradasCompradas);
		var idSesion = localStorage.getItem('idSesion');
		var nombreCine = localStorage.getItem('nombreCine');
		var horaSesion = localStorage.getItem('horaSesion');
		
		$('#entradasCompradas').html('Numero de entradas: ' + entradasCompradas);
		$('#precioEntrada').html('Precio de cada entrada: ' + precioEntrada);
		$('#precioTotal').html('Importe neto: ' + precioTotal);
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
				},
		       	error : function(xhr) {
		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		   		}
			});
		});
	});
	
});