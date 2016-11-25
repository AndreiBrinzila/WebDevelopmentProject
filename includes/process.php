<?php
include 'getData.php';

$selection = $_POST["station"];

//$url = 'http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByNameXML?StationDesc=' + $selection;
$url = 'http://api.irishrail.ie/realtime/realtime.asmx/getAllStationsXML';

loadData($url);

echo "It worked!";

?>
