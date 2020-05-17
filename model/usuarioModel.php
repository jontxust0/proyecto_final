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
    
    public function listaUsuarios()
    {
        $this->OpenConnect();
        
        $sql = "CALL spMostrarUsuarios()";
        
        $result = $this->link->query($sql);
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $nuevo=new usuarioClass();
            
            $nuevo->setId($row['id']);
            $nuevo->setUsuario($row['usuario']);
            $nuevo->setContrasenia($row['contrasenia']);

            array_push($this->lista, $nuevo);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    public function findUsuario(){
        $this->OpenConnect();
        $nombreDeUsuario = $this->usuario;

        $sql = "CALL spComprobarUsuario('$nombreDeUsuario')";
        
        $result = $this->link->query($sql);
        $userExist = false;
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $contraseniaEncriptada = $row['contrasenia'];
            
            if (password_verify($this->getContrasenia(), $contraseniaEncriptada))
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
    
    public function insertarUsuario()
    {
        $this->OpenConnect();
        
        $usuario=$this->usuario;
        $contrasenia=$this->contrasenia;
        
        $options=['cost'=>10];
        $contraseniaEncriptada=password_hash($contrasenia, PASSWORD_BCRYPT, $options) ;
        
        $sql="call spInsertUsuario('$usuario', '$contraseniaEncriptada')";
        $result= $this->link->query($sql);
        
        return $this->link->affected_rows;
        
        $this->CloseConnect();
        
    }
    
    /*public function updateContrasenia(){
        
        $this->OpenConnect();
        
        $id->$this->getId();
        $contrasenia->$this->getContrasenia();
        
        $options=['cost'=>10];
        $contraseniaEncriptada=password_hash($contrasenia, PASSWORD_BCRYPT, $options) ;
        
        $sql="CALL spUpdateContrasenia($id,'$contraseniaEncriptada')";
        
        $numFilas=$this->link->query($sql);
        
        if ($numFilas>=1){
            return "cambiado";
        } else {
            return "Error al cambiar".$sql.print_r($numFilas,true);
        }
        
        $this->CloseConnect();
    }*/
    
    public function deleteUsuario()
    {
        $this->OpenConnect();
        
        $id=$this->getId();
        
        $sql = "CALL spDeleteUsuario($id)";
        
        if ($this->link->query($sql)>=1)
        {
            return "El usuario ha sido borrado";
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