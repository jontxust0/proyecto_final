<?php
include_once ('../model/EstrenoModel.php');

$estreno = new estrenoModel();

$fecha = $_POST['fecha'];
$idPelicula = $_POST['idPelicula'];


$estreno->setFechaDeEstreno($fecha);
$estreno->setId_pelicula($idPelicula);


$resultado=$estreno->insertarEstreno();
echo $resultado;

?>