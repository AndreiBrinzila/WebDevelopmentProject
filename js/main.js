// Load station names 
$(document).ready(function(){ 
	$.ajax({ 
		type: "GET",
		url: "_data/getAllStations.xml",
		dataType: "xml",
		success: function(xml) { 
		/*
			$.each(xml.find("StationDesc"), function(){
				console.log(this.index + " : " + this.stationName);
			});
		
			$.parseXML(xml).find('objStation').each(function(index){
				var stationName = $(this).find('StationDesc').text();
				console.log(stationName);
			});
			
			// SORTA WORKING ONE HERE -->
			$(xml).find("StationDesc").each(function(index, stationName) {
				console.log(index + " : " + stationName);
			});
		*/	
			var stations = [];
			$(xml).find("objStation").each(function(index) {
				var stationName = $(this).find('StationDesc').text();
				
				console.log(stationName);
				
				//console.log(index + " : " + stationName);
			});
		}
	});
});

//var xml = "//_data/getAllStations.xml";

//var xmlDoc = $.parseXML(xml);

