<?php

include_once ('../model/cineModel.php');
$id = $_POST['id'];
$butacas= new cineModel();
$butacas->setId($id);
$resultado = $butacas->librarButacasCine();

echo $resultado;
?>