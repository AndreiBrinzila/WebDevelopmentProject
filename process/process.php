<?php
include 'dataLoaderWriter.php';

$selection = $_POST["station"];

$stationURL = 'http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByNameXML?StationDesc=' . $selection;
$getAllStations = 'http://api.irishrail.ie/realtime/realtime.asmx/getAllStationsXML';

loadData($getAllStations, 'getAllStations');

loadData($stationURL, $selection);

echo "It worked!";

?>
