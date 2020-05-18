<?php

include_once ('butacaClass.php');
include_once ('connect_data.php');

class butacaModel extends butacaClass{
    private $link;
    private $lista= array();
    
    
    public function getLista()
    {
        return $this->lista;
    }
    
    
    public function listaButacas($idCine)
    {
        $this->OpenConnect();
        
        $sql = "CALL spMostrarButacasPorCine($idCine)";
        
        $result = $this->link->query($sql);
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $nuevo=new butacaClass();
            
            $nuevo->setId($row['id']);
            $nuevo->setNumero($row['numero']);
            $nuevo->setReservado($row['reservado']);
            $nuevo->setId_cine($row['id_cine']);
            
            array_push($this->lista, $nuevo);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    public function ocuparButaca(){
        $this->OpenConnect();
        $butacaOcupar = $this->getId();
        $sql = "CALL spOcuparButacas($butacaOcupar)";
        $result = $this->link->query($sql);
        
        if ($this->link->query($sql)>=1)
        {
            return "Se han reservador los asientos elegidos";
        } else {
            return "Fallo al reservar asientos: (" . $this->link->errno . ") " . $this->link->error;
        }
        
        $this->CloseConnect();
    }
    
    public function contarButacasLibres(){
        $this->OpenConnect();
        $idCine = $this->getId_cine();
        $sql = "CALL spContarButacasLibres($idCine)";
        $result = $this->link->query($sql);
        
        if ($this->link->query($sql)>=1)
        {
            return "El numero de butacas libres es";
        } else {
            return "Fallo al mostrar: (" . $this->link->errno . ") " . $this->link->error;
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
    
    function getListaButacasJsonString() {
        
        
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