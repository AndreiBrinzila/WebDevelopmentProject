<?php
/**
 * Created by PhpStorm.
 * User: Dan
 * Date: 22/11/2016
 * Time: 00:18
 */

// Function take a data from and write to a new file

function loadDataAndWrite($data, $file) {
    $writer = fopen($file, 'w') or die("Unable to write to file");
    fwrite($writer, $data);
    fclose($writer);
}

// Function to load data from provided url
function loadData($url, $fileName) {
	$dir = '../_data/';
    $file = file_get_contents($url);

    loadDataAndWrite($file, ($dir .= $fileName . '.xml'));
}
?>