<?php
include 'dataLoaderWriter.php';


// Reload all stations
loadData('http://api.irishrail.ie/realtime/realtime.asmx/getAllStationsXML', 'stops/AllStations');

// Checks if the train stationcode provided by ajax is a valid code returns if true or false.
function checkTrainStationCodes($stationCode) {
    $result = false;
    $stationsXML = simplexml_load_file("../_data/stops/AllStations.xml") or die("Cannot load stations file...");

    foreach ($stationsXML -> children() as $station) {
        if($station -> StationCode == $stationCode) {
            $result = true;
        }
    }
    return $result;
}



//$stationCodeArray.array_push()

// Checks if stationCode post data is set
if (isset($_POST["stationCode"])) {
    $stationCode = $_POST["stationCode"];

    if (checkTrainStationCodes($stationCode)) {
        $stationCodeURL = 'http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByCodeXML?StationCode=' . $stationCode;

        //loadData($stationCodeURL, ("stations/" . $stationCode));
    } else {
        echo "INVALID DATA";
    }
}
else {
    echo "INVALID DATA";
}

?>
