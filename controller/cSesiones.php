<?php

include_once ('../model/sesionModel.php');

$sesion = new sesionModel();
$sesion->listaSesiones();
$sesiones = array();
$sesiones['lista'] = $sesion->getListaSesionesJsonString();
echo json_encode($sesiones);
unset($sesion);

?>