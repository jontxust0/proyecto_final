<?php
include_once ('../model/cineModel.php');

$cine = new cineModel();

$nombre = $_POST['cine'];
$ubicacion = $_POST['ubicacion'];

$cine->setNombre($nombre);
$cine->setUbicacion($ubicacion);
$resultado=$cine->insertarCine();
echo $resultado;

?>