<?php

include_once ('../model/peliculasGeneroModel.php');

$peliculaGenero = new peliculasGeneroModel();
$peliculaGenero->listaPeliculasGeneros();
$peliculaGeneros = array();
$peliculaGeneros['lista'] = $peliculaGenero->getListaPeliculasGenerosJsonString();
echo json_encode($peliculaGeneros);
unset($peliculaGenero);

?>