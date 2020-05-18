<?php
include_once ('../model/peliculasGeneroModel.php');

$peliculaGenero = new peliculasGeneroModel();

$idPelicula = $_POST['idPelicula'];
$idGenero = $_POST['idGenero'];

$peliculaGenero->setId_pelicula($idPelicula);
$peliculaGenero->setId_genero($idGenero);

$resultado=$peliculaGenero->insertarPeliculaGenero();
echo $resultado;

?>