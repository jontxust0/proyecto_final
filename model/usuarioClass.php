<?php

class usuarioClass{
    protected $id;
    protected $usuario;
    protected $contrasenia;

    public function getId()
    {
        return $this->id;
    }


    public function getUsuario()
    {
        return $this->usuario;
    }


    public function getContrasenia()
    {
        return $this->contrasenia;
    }


    public function setId($id)
    {
        $this->id = $id;
    }


    public function setUsuario($usuario)
    {
        $this->usuario = $usuario;
    }


    public function setContrasenia($contrasenia)
    {
        $this->contrasenia = $contrasenia;
    }
    
}


?>