<?php

include_once ('../model/sesionModel.php');

$idPelicula = $_POST['idPelicula'];
$sesion = new sesionModel();
$sesion->listaSesionesPelicula($idPelicula);
$sesiones = array();
$sesiones['lista'] = $sesion->getListaSesionesJsonString();
echo json_encode($sesiones);
unset($sesion);

?>