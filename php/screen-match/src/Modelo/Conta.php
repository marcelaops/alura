<?php

class Conta
{
    // public int $saldoEmCentavos;
    // private int $saldoEmCentavos;
    protected int $saldoEmCentavos;

    public function __construct(
        public readonly string $nomeTitular,
        public readonly string $numeroConta,
        public readonly TipoConta $tipoConta) {
        $this->saldoEmCentavos = 100;
    }

    public function getSaldo(): float{
        return $this->saldoEmCentavos;
    }

    public function depositar(int $valorADepositar): void
    {
        if ($valorADepositar > 0) {
            $this->saldoEmCentavos += $valorADepositar;
        }
    }

    public function sacar(int $valorASacar): void
    {
        if ($valorASacar > 0 && $valorASacar <= $this->saldoEmCentavos) {
            $this->saldoEmCentavos -= $valorASacar;
        }
    }
    
}
