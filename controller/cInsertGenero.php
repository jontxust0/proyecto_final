<?php
include_once ('../model/generoModel.php');

$genero = new generoModel();

$nombre = $_POST['nombre'];

$genero->setNombre($nombre);

$resultado=$genero->insertarGenero();
echo $resultado;

?>