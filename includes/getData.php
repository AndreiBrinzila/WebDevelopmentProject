<?php
/**
 * Created by PhpStorm.
 * User: Dan
 * Date: 22/11/2016
 * Time: 00:18
 */

// Function to load main train stops

function loadDataAndWrite($data, $file) {
    $writer = fopen($file, 'w') or die("Unable to write to file");
    fwrite($writer, $data);
    fclose($writer);
}

function loadData($url) {
    $file = file_get_contents($url);
    loadDataAndWrite($file, 'temp.xml');
}

//$xml = file_get_contents("http://api.irishrail.ie/realtime/realtime.asmx/getAllStationsXML");

//loadDataAndWrite($xml, "trainstations.xml");

//$parsedXML = simplexml_load_string($xml) or die("Cannot Create Object");

//print_r($parsedXML);

?>