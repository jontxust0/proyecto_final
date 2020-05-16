<?php

include_once ('../model/facturaModel.php');


$factura = new facturaModel();
$factura->listaFacturas();
$facturas = array();
$facturas['lista'] = $factura->getListaFacturasJsonString();
echo json_encode($facturas);
unset($factura);

?>