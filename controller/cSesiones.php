<?php

include_once ('../model/sesionModel.php');
$idCine = $_POST['idCine'];
$sesion = new sesionModel();
$sesion->listaSesiones($idCine);
$sesiones = array();
$sesiones['lista'] = $sesion->getListaSesionesJsonString();
echo json_encode($sesiones);
unset($sesion);

?>