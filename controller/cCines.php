<?php

include_once ('../model/cineModel.php');

$cine = new cineModel();
$cine->listaCines();
$cines = array();
$cines['lista'] = $cine->getListaCinesJsonString();
echo json_encode($cines);
unset($cine);

?>