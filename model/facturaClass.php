<?php

class facturaClass{
    protected $id;
    protected $entradasCompradas;
    protected $precioEntrada;
    protected $precioTotal;
    protected $id_sesion;
    protected $cine;
    protected $hora_sesion;

    public function getId()
    {
        return $this->id;
    }


    public function getEntradasCompradas()
    {
        return $this->entradasCompradas;
    }


    public function getPrecioEntrada()
    {
        return $this->precioEntrada;
    }


    public function getPrecioTotal()
    {
        return $this->precioTotal;
    }


    public function getId_sesion()
    {
        return $this->id_sesion;
    }


    public function getCine()
    {
        return $this->cine;
    }


    public function getHora_sesion()
    {
        return $this->hora_sesion;
    }


    public function setId($id)
    {
        $this->id = $id;
    }


    public function setEntradasCompradas($entradasCompradas)
    {
        $this->entradasCompradas = $entradasCompradas;
    }


    public function setPrecioEntrada($precioEntrada)
    {
        $this->precioEntrada = $precioEntrada;
    }


    public function setPrecioTotal($precioTotal)
    {
        $this->precioTotal = $precioTotal;
    }


    public function setId_sesion($id_sesion)
    {
        $this->id_sesion = $id_sesion;
    }


    public function setCine($cine)
    {
        $this->cine = $cine;
    }


    public function setHora_sesion($hora_sesion)
    {
        $this->hora_sesion = $hora_sesion;
    }

    
    
}


?>