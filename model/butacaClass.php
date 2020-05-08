<?php

class butacaClass{
    protected $id;
    protected $numero;
    protected  $reservado;
    protected  $id_cine;

    public function getId()
    {
        return $this->id;
    }


    public function getNumero()
    {
        return $this->numero;
    }


    public function getReservado()
    {
        return $this->reservado;
    }


    public function getId_cine()
    {
        return $this->id_cine;
    }


    public function setId($id)
    {
        $this->id = $id;
    }


    public function setNumero($numero)
    {
        $this->numero = $numero;
    }


    public function setReservado($reservado)
    {
        $this->reservado = $reservado;
    }


    public function setId_cine($id_cine)
    {
        $this->id_cine = $id_cine;
    }

    
    
}

?>