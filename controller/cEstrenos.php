<?php

include_once ('../model/estrenoModel.php');

$estreno = new estrenoModel();
$estreno->listaEstrenos();
$estrenos = array();
$estrenos['lista'] = $estreno->getListaEstrenosJsonString();
echo json_encode($estrenos);
unset($estreno);

?>