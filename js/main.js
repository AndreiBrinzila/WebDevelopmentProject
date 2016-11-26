
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
		*/
		
			$(xml).find("StationDesc").each(function(index, stationName) {
				console.log(index + " : " + stationName);
			});
		
			//console.log($(xml).find("StationDesc"));
		}
	});
});

//var xml = "//_data/getAllStations.xml";

//var xmlDoc = $.parseXML(xml);

