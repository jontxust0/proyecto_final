<?php

include_once ('../model/butacaModel.php');
$idCine = $_POST['idCine'];
$butacas = new  butacaModel();
$butacas->setId_cine($idCine);
$butacas->contarButacasLibres();

?>