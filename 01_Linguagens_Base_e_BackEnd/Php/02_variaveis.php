
<?php
// PHP puro
// Em PHP, as variáveis nascem com o caractere '$' adotando a semântica Snake Case

$nome_do_diretor = "José da Silva";
$taxa_conversao_automacao = 94.8;

// Usamos o comando echo combinado com o caractere de concatenação (ponto) para exibir na tela

echo "Diretor de Operações: " . $nome_do_diretor . "\n";
echo "Eficiência de processos: " . $taxa_conversao_automacao . "%\n";

?>





<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variáveis em PHP utilizando HTML</title>
</head>

<!--- Passsando PHP em HTML --->

<body>

    <?php
        $nome_do_diretor = "José da Silva";
        $taxa_conversao_automacao = 94.8;

    ?>


         <pre> 

        Diretor de Operações: <?php echo $nome_do_diretor; ?> 

        Eficiência de processos: <?php echo $taxa_conversao_automacao; ?>
    
        
        </pre>
    
</body>

</html>