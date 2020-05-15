<?php

include_once ("../model/peliculaModel.php");

$pelicula =new peliculaModel();
 
$id = $_POST['id'];
$titulo = $_POST['titulo'];
$duracion = $_POST['duracion'];
$anio = $_POST['anio'];
$imagen = $_POST['imagen'];
$trailer = $_POST['trailer'];
$clasificacion = $_POST['clasificacion'];


 
 if ($id!=null)
 {
     $pelicula->setId($id);

     if ($titulo!=null)
     {
         $pelicula->setTitulo($titulo);    
     }
     
     if ($duracion!=null)
     {
         $pelicula->setDuracion($duracion);
     }
     if ($anio!=null)
     {
         $pelicula->setAnio($anio);
     }
     
     if ($imagen!=null)
     {
         $pelicula->setImagenCartelera($imagen);
     }
     if ($trailer!=null)
     {
         $pelicula->setTrailer($trailer);
     }
     
     if ($clasificacion!=null)
     {
         $pelicula->setClasificacion($clasificacion);
     }
     
     $resultado=$pelicula->updatePelicula();
} else{
    $resultado="No se ha pasado id";
}
 echo $resultado;

?>