<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Front-End: Variáveis em PHP utilizando HTML</title>
</head>
<body>

    <?php
        $nome_do_diretor = "José da Silva";
        $taxa_conversao_automacao = 94.8;
    ?>

    <h1>Painel de Controle e Automação</h1>

    <p>
        Diretor de Operações: <?php echo $nome_do_diretor; ?><br>
        Eficiência de processos: <?php echo $taxa_conversao_automacao; ?>%
    </p>
    
</body>
</html>