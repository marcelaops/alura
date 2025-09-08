<?php

class ContaPoupanca extends Conta
{
  private float $taxaDeJuros = 1.2;

  public function calcularJuros(): void
  {
    $juros = $this->saldoEmCentavos * $this->taxaDeJuros;
    echo "Juros atual: " . $juros. "\n";
  }
}