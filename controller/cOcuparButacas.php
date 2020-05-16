<?php
include_once ('../model/butacaModel.php');
$butacas = new butacaModel();
$butacasOcupar = $_POST['idAsientosOcupar'];
$butacas = $butacasOcupar;
$butacas->ocuparButacas();
$resultado=$butacas->ocuparButacas();
echo $resultado;

?>