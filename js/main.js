// Load station names 
var stationsArray = [];
var stationCodeArray = [];

// Function that loads all train stations and places them in stationsArray
var loadTrainStations = function() {
	$.ajax({
		type: "POST",
		url: "_data/getAllStations.xml",
		dataType: "xml",
		success: function(xml) {
			// Loop through each node in the xml stations file
			$(xml).find("objStation").each(function(index) {
				var stationName = $(this).find("StationDesc").text();
				var stationCode = $(this).find("StationCode").text();
				
				stationsArray.push(stationName);
				stationCodeArray.push(stationCode);
				//console.log(stationName);
			});
		}
	});
}

var sendTrainStation = function() {
	$("#trainSearch").submit(function(event){
		// Load text from search bar to variable
		var station = $("#trainStationSearch").val();
		// Variable to hold station code
		var stationCode;

		$.each(stationsArray, function(index, value) {
			if(station == value) {
				stationCode = stationCodeArray[index];
				console.log(stationCode);
			}
		});

		console.log(station);

		$.ajax({
			type: "POST",
			url: "process/process.php",
			data: { stationCode: stationCode, station: station },
			dataType: "xml",
			success: function(data) {
				alert("success");
				console.log(data);
			}
		});
		// Prevents process.php from reloading page
		event.preventDefault();
	});
};


$(document).ready(function(){ 
	loadTrainStations();
	$("#trainStationSearch").autocomplete({
		source: stationsArray
	});
	sendTrainStation();
});
