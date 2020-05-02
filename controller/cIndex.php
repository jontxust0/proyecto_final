<?php

include_once ('../model/cineModel.php');

$cine = new cineModel();
$cine->listaCines();
$cines = array();
$cines['list'] = $cine->getlistaCinesJsonString();
echo json_encode($cines);
unset($cine);

?>