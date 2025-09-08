<?php

enum TipoConta {
    case Corrente;
    case Poupanca;
    case Universitaria;
    case Investimento;

    public function possuiTaxa(): bool {
        return match($this) {
            TipoConta::Corrente, TipoConta::Investimento => true,
            TipoConta::Poupanca, TipoConta::Universitaria => false,
        };
    }
}