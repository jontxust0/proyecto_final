<?php
include_once ('../model/butacaModel.php');
$butaca = new butacaModel();
$butacaOcupar = $_POST['idAsientoOcupar'];
$butaca->setId($butacaOcupar);
$resultado=$butaca->ocuparButaca();
echo $resultado;

?>