<?php
include_once ('../model/facturaModel.php');

$factura = new facturaModel();

$entradasCompradas = $_POST['entradasCompradas'];
$precioEntrada = $_POST['precioEntrada'];
$precioTotal = $_POST['precioTotal'];
$idSesion = $_POST['idSesion'];
$nombreCine = $_POST['nombreCine'];
$horarioSesion = $_POST['horaSesion'] . '0';

$factura->setEntradasCompradas($entradasCompradas);
$factura->setPrecioEntrada($precioEntrada);
$factura->setPrecioTotal($precioTotal);
$factura->setId_sesion($idSesion);
$factura->setCine($nombreCine);
$factura->setHora_sesion($horarioSesion);

$resultado=$factura->insertarFactura();
echo $resultado;

?>