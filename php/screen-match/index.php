<?php

require __DIR__ . "/src/Modelo/Titulo.php";
require __DIR__ . "/src/Modelo/Genero.php";
require __DIR__ . "/src/Modelo/Filme.php";
require __DIR__ . "/src/Modelo/Serie.php";
require __DIR__ . "/src/Calculos/CalculadoraDeMaratona.php";

echo "Bem-vindo(a) ao ScreenMatch\n";

$filme = new Filme('A vida de chuck', 2024, Genero::Drama, 150);

$filme->avalia(10);
$filme->avalia(6);
$filme->avalia(8.2);
$filme->avalia(7.8);

// $filme->notas = [];

// var_dump($filme);

// echo $filme->media() . "\n";

// echo $filme->anoLancamento . "\n";   

$serie = new Serie('Alien Earth', 2025, Genero::Terror, 1, 10, 40);

// echo $serie-> anoLancamento . "\n";

$serie-> avalia(9);
// echo $serie->media();

$calculadora = new CalculadoraDeMaratona();
$calculadora->inclui($filme);
$calculadora->inclui($serie);
$duracao = $calculadora->duracao();

echo "Para maratonar, você precisa de $duracao minutos";
