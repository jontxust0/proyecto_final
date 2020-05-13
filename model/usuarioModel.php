<?php

include_once ('connect_data.php');
include_once ('usuarioClass.php');

class usuarioModel extends usuarioClass{
    private $link;
    private $lista = array();
    
    public function getLista()
    {
        return $this->lista;
    }
    
    public function findUsuario(){
        $this->OpenConnect();
        $nombreDeUsuario = $this->usuario;

        $sql = "CALL spComprobarUsuario('$nombreDeUsuario')";
        
        $result = $this->link->query($sql);
        $userExist = false;
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $contrasenia = $row['contrasenia'];
            
            if ($this->getContrasenia() == $contrasenia)
            {
                
                
                $this->setId($row['id']);
                $this->setUsuario($row['usuario']);
                $this->setContrasenia($row['contrasenia']);
                $userExist = true;
            }
        }
        return $userExist;
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
    
    function getListaUsuariosJsonString() {
        
        
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