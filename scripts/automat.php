<?php

/**
 * Description of automat
 *
 * @author Vivtor
 */
class automat {

    /**
     * Символ конца строки
     */
    const END = "E";

    /**
     * Магазин автомата
     * @var array
     */
    private $stack;

    /**
     * Состояние автомата
     * @var int 
     */
    private $q;

    function __construct() {
        $q = 0;
        $stack = @array();
        array_push($stack, END);
    }

    function __destruct() {
        
    }

}
