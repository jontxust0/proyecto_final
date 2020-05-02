$(document).ready(function(){

	
		$.ajax({
	       	type:"GET",
	       	url: "controller/cIndex.php", 
	    	dataType: "json",  //type of the result
	       	
	    	success: function(result){  
	       		
	    		console.log(result.list);
	    		
	       		var cines = result.list;
	       		
				$.each(cines,function(index,info) { 
					cines += '<option value='+info.nombre+'>'+info.nombre+'</option>';
					
					
				});
				$('#listaCines').append(cines);
	       		
			},
	       	error : function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}

		});

	
});