<?php

include_once ('connect_data.php');
include_once ('peliculaClass.php');

class peliculaModel extends peliculaClass{
    private $link;
    private $lista= array();
    private $listaEstrenos=array();
    
    public function getLista()
    {
        return $this->lista;
    }
    
    public function getListaEstrenos()
    {
        return $this->listaEstrenos;
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
    
    public function findIdPelicula()
    {
        $idPelicula=$this->id;
        
        $this->OpenConnect();
        $sql = "CALL spFindIdPelicula($idPelicula)";
        
        $result = $this->link->query($sql);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $this->setId($row['id']);
            $this->setTitulo($row['titulo']);
            $this->setDuracion($row['duracion']);
            $this->setAnio($row['anio']);
            $this->setImagenCartelera($row['imagenCartelera']);
            $this->setTrailer($row['trailer']);
            $this->setClasificacion($row['clasificacion']);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
        return $this;
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