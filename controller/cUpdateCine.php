<?php

include_once ("../model/cineModel.php");

$cine=new cineModel();

$id= $_POST['id'];
$nombre = $_POST['cine'];
$ubicacion = $_POST['ubicacion'];

if (isset($id))
{
    $cine->setId($id);
}
if (isset($nombre))
{
    $cine->setNombre($nombre);
}

if (isset($ubicacion))
{
    $cine->setUbicacion($ubicacion);
}

$resultado=$cine->updateCine();

echo $resultado;

?>