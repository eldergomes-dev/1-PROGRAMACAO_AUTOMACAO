@echo off

:: ====================================================================
:: CONFIGURAÇÃO INICIAL DO TERMINAL
:: ====================================================================
cls

:: ====================================================================
:: CABEÇALHO VISUAL (O que vai aparecer escrito na tela do CMD)
:: ====================================================================
echo =========================================
echo PROCESSO: MOTOR DO POWER QUERY (M) - CMD
echo =========================================

:: ====================================================================
:: PASSO 1: SIMULAÇÃO DA LÓGICA (Nível 2 - Variável)
:: ====================================================================
:: Aqui o CMD cria uma variável chamada RESULTADO e guarda o texto nela.
:: Isso simula o "let" da Linguagem M do Power BI.
set "RESULTADO=Hello World"

:: Aqui o CMD exibe o valor que estava guardado dentro da variável.
echo Consulta: 01_hello_world - Resultado: %RESULTADO%
echo =========================================
echo.



:: ====================================================================
:: PASSO 2: EXECUTAR A AUTOMAÇÃO (Ação no Windows abre o PowerBI)
:: ====================================================================
echo [AUTOMACAO] Abrindo o arquivo original no Power BI Desktop...

:: Este comando abre o arquivo .pbix direto no programa do Power BI.
start "" "01_hello_world.pbix"

:: ====================================================================
:: FINALIZAÇÃO DO SCRIPT
:: ====================================================================
echo Processo concluido com sucesso!

:: O pause impede que a janela do terminal feche sozinha.
pause

