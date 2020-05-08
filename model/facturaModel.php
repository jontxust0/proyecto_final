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
}

?>