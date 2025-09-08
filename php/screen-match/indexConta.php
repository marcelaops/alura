<?php

require __DIR__ . "/src/Modelo/Conta.php";
require __DIR__ . "/src/Modelo/ContaPoupanca.php";
require __DIR__ . "/src/Modelo/TipoConta.php";

echo "Bem-vindo(a) a Conta\n";

$conta = new Conta("Marcela", "1234", TipoConta::Universitaria );

// echo "Seu saldo inicial é " . $conta->getSaldo()  . "\n";
// $conta->depositar(100);
// echo "Seu saldo após deposíto é " . $conta->getSaldo()  . "\n";
// $conta->sacar(50);
// echo "Seu saldo após saque é " . $conta->getSaldo()  . "\n";



$contaP = new ContaPoupanca("Marcela Poupança", "1234", TipoConta::Poupanca);
// var_dump($contaP);
// $contaP->calcularJuros();
echo $contaP->calcularJuros() . "\n"; 