<?php
include_once ('../model/peliculaModel.php');

$pelicula = new peliculaModel();

$titulo = $_POST['titulo'];
$duracion = $_POST['duracion'];
$anio = $_POST['anio'];
$imagen = $_POST['imagen'];
$trailer = $_POST['trailer'];
$clasificacion = $_POST['clasificacion'];


$pelicula->setTitulo($titulo);
$pelicula->setDuracion($duracion);
$pelicula->setAnio($anio);
$pelicula->setImagenCartelera($imagen);
$pelicula->setTrailer($trailer);
$pelicula->setClasificacion($clasificacion);


$resultado=$pelicula->insertarPelicula();
echo $resultado;

?>