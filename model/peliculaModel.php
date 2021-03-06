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
    
    public function listaPeliculasPorTitulo($tituloPelicula)
    {
        $this->OpenConnect();
        
        $sql = "CALL spMostrarPeliculasPorTitulo($tituloPelicula)";
        
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
    
    public function listaPeliculasAdmin()
    {
        $this->OpenConnect();
        
        $sql = "CALL spMostrarPeliculas()";
        
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
    
    public function insertarPelicula()
    {
        $this->OpenConnect();
        
        $titulo=$this->getTitulo();
        $duracion=$this->getDuracion();
        $anio=$this->getAnio();
        $imagen=$this->getImagenCartelera();
        $trailer=$this->getTrailer();
        $clasificacion=$this->getClasificacion();
        
        $sql = "CALL spInsertPelicula('$titulo', $duracion, $anio, '$imagen', '$trailer', '$clasificacion')";
        
        
        if ($this->link->query($sql)>=1)
        {
            return "Se ha insertado nueva pelicula";
        } else {
            return "Fallo al insertar nueva pelicula: (" . $this->link->errno . ") " . $this->link->error;
        }
        
        $this->CloseConnect();
    }
    
    public function updatePelicula()
    {
        $this->OpenConnect();
        
        $id=$this->getId();
        $titulo=$this->getTitulo();
        $duracion= $this->getDuracion();
        $anio= $this->getAnio();
        $imagen= $this->getImagenCartelera();
        $trailer= $this->getTrailer();
        $clasificacion= $this->getClasificacion();
        
        $sql = "CALL spUpdatePelicula($id,'$titulo', $duracion, $anio, '$imagen', '$trailer', '$clasificacion')";
        
        
        if ($this->link->query($sql)>=1)
        {
            return "La pelicula se ha modificado con exito";
        } else {
            return "Falla la modificacion de la pelicula: (" . $this->link->errno . ") " . $this->link->error;
        }
        
        $this->CloseConnect();
    }
    
    public function deletePelicula()
    {
        $this->OpenConnect();
        
        $id=$this->getId();
        
        $sql = "CALL spDeletePelicula($id)";
        
        if ($this->link->query($sql)>=1)
        {
            return "La pelicula se ha sido borrado de la lista";
        } else {
            return "Fall� el borrado: (" . $this->link->errno . ") " . $this->link->error;
        }
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