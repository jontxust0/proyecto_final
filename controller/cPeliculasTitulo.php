<?php

include_once ('../model/peliculaModel.php');

$tituloPelicula = $_POST['tituloPelicula'];

$pelicula = new peliculaModel();
$pelicula->listaPeliculasPorTitulo($tituloPelicula);
$peliculas = array();
$peliculas['lista'] = $pelicula->getListaPeliculasJsonString();
echo json_encode($peliculas);
unset($pelicula);

?>