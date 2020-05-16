<?php

include_once ('facturaClass.php');
include_once ('connect_data.php');

class facturaModel extends facturaClass{
    private $link;
    private $lista= array();
    
    
    public function getLista()
    {
        return $this->lista;
    }
    
    public function listaFacturas(){
        $this->OpenConnect();
        
        $sql = "CALL spMostrarFacturas()";
        
        $result = $this->link->query($sql);
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $nuevo=new facturaClass();
            
            $nuevo->setId($row['id']);
            $nuevo->setEntradasCompradas($row['entradasCompradas']);
            $nuevo->setPrecioEntrada($row['precioEntrada']);
            $nuevo->setPrecioTotal($row['precioTotal']);
            $nuevo->setId_sesion($row['id_sesion']);
            $nuevo->setCine($row['cine']);
            $nuevo->setHora_sesion($row['hora_sesion']);
            
            
            
            array_push($this->lista, $nuevo);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    public function insertarFactura()
    {
        $this->OpenConnect();
        
        $entradasCompradas=$this->getEntradasCompradas();
        $precioEntrada=$this->getPrecioEntrada();
        $precioTotal=$this->getPrecioTotal();
        $idsesion=$this->getId_sesion();
        $nombreCine=$this->getCine();
        $horario=$this->getHora_sesion();
        
        $sql = "CALL spInsertFactura($entradasCompradas, $precioEntrada, $precioTotal, $idsesion, '$nombreCine', '$horario')";

        
        if ($this->link->query($sql)>=1)
        {
            return "Se ha insertado nueva factura";
        } else {
            return "Fallo al insertar nueva factura: (" . $this->link->errno . ") " . $this->link->error;
        }
        
        $this->CloseConnect();
    }
    
    public function deleteFactura()
    {
        $this->OpenConnect();
        
        $id=$this->getId();
        
        $sql = "CALL spDeleteFactura($id)";
        
        if ($this->link->query($sql)>=1)
        {
            return "La factura ha sido borrada de la lista";
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
    
    function getListaFacturasJsonString() {
        
        
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