<?php

include_once ('../model/butacaModel.php');

$idCine = $_POST['idCine'];
$butaca = new butacaModel();
$butaca->listaButacas($idCine);
$butacas = array();
$butacas['lista'] = $butaca->getListaButacasJsonString();
echo json_encode($butacas);
unset($butaca);

?>