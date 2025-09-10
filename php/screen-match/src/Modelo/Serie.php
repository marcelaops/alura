<?php

class Serie extends Titulo implements Avaliavel{
    // private array $notas;

    public function __construct(
        string $nome,
        int $anoLancamento,
        Genero $genero,
        public readonly int $temporadas,
        public readonly int $episodiosPorTemporadas,
        public readonly int $minutosPorEpisodio,
        ) {
        // $this->notas = [];
        parent::__construct($nome, $anoLancamento, $genero); 
    }


    // public function avalia(float $nota): void {
    //     $this->notas[] = $nota;
    // }

    // public function media(): float {
    //     // if (empty($this->notas)) {
    //     //     return 0.0;
    //     // }

    //     $somaNotas = array_sum($this->notas);
    //     $quantidadeNotas = count($this->notas);

    //     return $somaNotas / $quantidadeNotas;
    // }

    #[Override]
    public function duracaoEmMin() : int {
        return $this->temporadas * $this->minutosPorEpisodio * $this->episodiosPorTemporadas;
    }
}

