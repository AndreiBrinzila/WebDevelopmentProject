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
            console.log(xml);
			// Loop through each node in the xml stations file
			$(xml).find("objStation").each(function(index) {
				var stationName = $(this).find("StationDesc").text();
				var stationCode = $(this).find("StationCode").text();
				// Place each station code and name into an array
				stationsArray.push(stationName);
				stationCodeArray.push(stationCode);
				//console.log(stationName);
			});
		}
	});
}

var autoComplete = function(div) {
    $(div).autocomplete({
        source: stationsArray
    });
};

var sendTrainStation = function() {
	$("#trainSearch").submit(function(event){
		// Load text from search bar to variable
		var station = $("#trainStationSearch").val();
		// Variable to hold station code
		var stationCode;

        // Loop through selection and check if the station name corresponds if so select station code from next array
		$.each(stationsArray, function(index, value) {
			if(station == value) {
				stationCode = stationCodeArray[index];
				console.log(stationCode);
			}
		});

		console.log(station);

        // Send data to be processed
		$.ajax({
			type: "POST",
			url: "process/process.php",
			data: { stationCode: stationCode, station: station },
			dataType: "xml",
			success: function(data) {
                loadResults(stationCode);
			}
		});
		// Prevents process.php from reloading page
		event.preventDefault();
	});
};

var loadResults = function(station) {
    $.get(("_data/" + station + ".xml"), function(xmlData){
        showXMLresults(xmlData, "#results");
    });
};


var showXMLresults = function(xmlData, div)  {
    //console.log(xmlData);

    var tableStructure = '<table><tr><th>Origin</th><th>Destination</th><th>Expected Arrival</th><th>Due In</th><th>Train Type</th></tr>';
    var tableRows = '';
    var lastTime = 0;

    $(xmlData).find("objStationData").each(function(index) {
        console.log(index);
        var origin = $(this).find("Origin").text();
        var destination = $(this).find("Destination").text();
        var expectedArrival = $(this).find("Exparrival").text();
        var trainType = $(this).find("Traintype").text();
        var dueTime = $(this).find("Duein").text();

        var row = '<tr><td>' + origin + '</td>' + '<td>' + destination + '</td>' + '<td>' + expectedArrival + '</td>' + '<td>' + dueTime + ' Minutes' + '</td>' + '<td>' + trainType + '</td></tr>';

        // Set first iteration
        if(index == 0) {
            lastTime = dueTime;
            tableRows += row;
        } else {
            // Sort by Due Time
            if(Number(dueTime) < Number(lastTime)) {
                console.log(lastTime);
                tableRows = row + tableRows;
                lastTime = dueTime;
                console.log("Due Time: " + dueTime + " - Last Time:" + lastTime);
            } else {
                console.log("The other one");
                tableRows += row;
            }
        }

        //tableRows += '<tr><td>' + origin + '</td>' + '<td>' + destination + '</td>' + '<td>' + expectedArrival + '</td>' + '<td>' + dueTime + ' Minutes' + '</td>' + '<td>' + trainType + '</td></tr>';

    });

    tableStructure += tableRows + '</table>'
    $(div).html(tableStructure);
}

function loadXMLDoc(filename)
{
    if (window.ActiveXObject)
    {
        xhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    else
    {
        xhttp = new XMLHttpRequest();
    }
    xhttp.open("GET", filename, false);
    try {xhttp.responseType = "msxml-document"} catch(err) {} // Helping IE11
    xhttp.send("");
    return xhttp.responseXML;
}


function displayResult(xmlFile, div)
{
    //xml = loadXMLDoc("_data/" + xmlFile);
    xml = xmlFile;
    xsl = loadXMLDoc("process/TrainDisplay.xsl");
    console.log(typeof xsl);
// code for IE
    if (window.ActiveXObject || xhttp.responseType == "msxml-document")
    {
        ex = xml.transformNode(xsl);
        document.getElementById(div).innerHTML = ex;
    }
// code for Chrome, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument)
    {
        xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        resultDocument = xsltProcessor.transformToFragment(xml, document);
        document.getElementById(div).appendChild(resultDocument);
    }
}

$(document).ready(function(){ 
	loadTrainStations();
    autoComplete("#trainStationSearch");
	sendTrainStation();
});
