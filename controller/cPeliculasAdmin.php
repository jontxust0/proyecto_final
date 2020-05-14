<?php

include_once ('../model/peliculaModel.php');


$pelicula = new peliculaModel();
$pelicula->listaPeliculasAdmin();
$peliculas = array();
$peliculas['lista'] = $pelicula->getListaPeliculasJsonString();
echo json_encode($peliculas);
unset($pelicula);

?>