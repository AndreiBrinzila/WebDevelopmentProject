
$(document).ready(function(){ 
	$.ajax({ 
		type: "GET",
		url: "/_data/getAllStations.xml",
		dataType: "xml",
		success: function(xml) { 
			$(xml).each()
		};
	});
}