<?php


class Filme extends Titulo {
    private array $notas;

    public function __construct(
        string $nome, 
        int $anoLancamento, 
        Genero $genero,
        
        public readonly int $duracaoEmMin,
        ) {
            parent::__construct($nome, $anoLancamento, $genero); /* chama o cosntructor da classe base */
        }

        public function duracaoEmMin() : int {
            return $this->duracaoEmMin;
        }
    
}