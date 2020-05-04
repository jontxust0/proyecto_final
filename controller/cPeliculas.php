<?php

include_once ('../model/peliculaModel.php');
$genero = $_POST['generoPelicula'];

$pelicula = new peliculaModel();
$pelicula->listaPeliculas($genero);
$peliculas = array();
$peliculas['lista'] = $pelicula->getListaPeliculasJsonString();
echo json_encode($peliculas);
unset($pelicula);

?>