<?php

include_once ('connect_data.php');
include_once ('peliculaClass.php');

class peliculaModel extends peliculaClass{
    private $link;
    private $lista= array();
    
    
    public function getLista()
    {
        return $this->lista;
    }
    
    
    public function listaPeliculas($genero)
    {
        $this->OpenConnect();
        
        $sql = "CALL spMostrarPeliculasPorGeneros($genero)";
        
        $result = $this->link->query($sql);
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $nuevo=new peliculaClass();
            
            $nuevo->setId($row['id']);
            $nuevo->setTitulo($row['titulo']);
            $nuevo->setDuracion($row['duracion']);
            $nuevo->setAnio($row['anio']);
            $nuevo->setImagenCartelera($row['imagenCartelera']);
            $nuevo->setTrailer($row['trailer']);
            $nuevo->setClasificacion($row['clasificacion']);

            
            
            array_push($this->lista, $nuevo);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    
    public function OpenConnect()
    {
        $konDat=new connect_data();
        try
        {
            $this->link=new mysqli($konDat->host,$konDat->user,$konDat->password,$konDat->bbdd);
            
        }
        catch(Exception $e)
        {
            echo $e->getMessage();
        }
        $this->link->set_charset("utf8");
        
    }
    
    public function CloseConnect()
    {
        mysqli_close ($this->link);
    }
    
    function getListaPeliculasJsonString() {
        
        
        $arr=array();
        
        foreach ($this->lista as $object)
        {
            $vars = get_object_vars($object);
            
            array_push($arr, $vars);
        }
        return $arr;
    }
}
?>