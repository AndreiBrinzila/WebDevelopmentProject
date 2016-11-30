<?php
include 'dataLoaderWriter.php';
/*
$selection = $_POST["station"];


//loadDataAndWrite($selection, $selection)

$stationURL = 'http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByNameXML?StationDesc=' . $selection;

*/

$stationCode = $_POST["stationCode"];
$stationName = $_POST["station"];

$stationCodeURL = 'http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByCodeXML?StationCode=' . $stationCode;

$getAllStations = 'http://api.irishrail.ie/realtime/realtime.asmx/getAllStationsXML';

loadData($getAllStations, 'getAllStations');

loadData($stationCodeURL, $stationCode);

?>
