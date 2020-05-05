<?php

include_once ('connect_data.php');
include_once ('estrenoClass.php');
include_once ('peliculaModel.php');

class estrenoModel extends estrenoClass{
    private $link;
    private $lista= array();
    private $objPelicula;
    
    public function getLista()
    {
        return $this->lista;
    }
    
    public function getObjPelicula()
    {
        return $this->objPelicula;
    }
    
    public function setObjPelicula($pelicula)
    {
        $this->objPelicula = $objPelicula;
    }
    
    
    public function listaEstrenos()
    {
        $this->OpenConnect();
        
        $sql = "CALL spMostrarEstrenos()";
        
        $result = $this->link->query($sql);
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $nuevo=new estrenoClass();
            $nuevo->setId($row['id']);
            $nuevo->setFechaDeEstreno($row['fechaDeEstreno']);
            $nuevo->setId_pelicula($row['id_pelicula']);
            
            $pelicula = new peliculaModel();
            $pelicula->setId($row['id_pelicula']);
            
            $nuevo->objPelicula= $pelicula->findIdPelicula();
            
            array_push($this->lista, $nuevo);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    public function findIdEstreno()
    {
        $idEstreno=$this->getId();
        
        $this->OpenConnect();
        $sql = "CALL spFindIdEstreno($idEstreno)";
        
        $result = $this->link->query($sql);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $this->setId($row['id']);
            $this->setFechaDeEstreno($row['fechaDeEstreno']);
            $this->setId_pelicula($row['id_pelicula']);
            
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
    
    function getListaEstrenosJsonString() {
        
        
        $arr=array();
        
        foreach ($this->lista as $object)
        {
            $vars = $object->getObjectVars();
            
            $objPelicula=$object->objPelicula->getObjectVars();
            $vars['objPelicula']=$objPelicula;
            array_push($arr, $vars);
        }
        return $arr;
    }
}
?>