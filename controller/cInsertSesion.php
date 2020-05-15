<?php
include_once ('../model/sesionModel.php');

$sesion = new sesionModel();

$hora = $_POST['hora'];
$cineId = $_POST['cineId'];
$peliculaId = $_POST['peliculaId'];
$precio = $_POST['precio'];


$sesion->setHora($hora);
$sesion->setId_cine($cineId);
$sesion->setId_pelicula($peliculaId);
$sesion->setPrecio($precio);



$resultado=$sesion->insertarSesion();
echo $resultado;

?>