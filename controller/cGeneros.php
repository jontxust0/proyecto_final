<?php

include_once ('../model/generoModel.php');

$genero = new generoModel();
$genero->listaGeneros();
$generos = array();
$generos['lista'] = $genero->getListaGenerosJsonString();
echo json_encode($generos);
unset($genero);

?>