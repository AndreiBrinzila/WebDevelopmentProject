// Load station names 
var stationsArray = [];

var loadTrainStations = function() {
	$.ajax({
		type: "GET",
		url: "_data/getAllStations.xml",
		dataType: "xml",
		success: function(xml) { 
			// Loop through each node in the xml stations file
			$(xml).find("objStation").each(function(index) {
				var stationName = $(this).find('StationDesc').text();
				
				stationsArray.push(stationName);
				
				//console.log(stationName);
			});
			console.log(stationsArray);
		}
	});
}

$(document).ready(function(){ 
	loadTrainStations();
	$("#trainStationSearch").autocomplete({
		source: stationsArray
	});
});

//var xml = "//_data/getAllStations.xml";

//var xmlDoc = $.parseXML(xml);

