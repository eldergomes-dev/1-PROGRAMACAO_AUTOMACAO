#include <stdio.h>
#include <locale.h> // 1. Adicione esta biblioteca para gerenciar acentuação


int main() {

// Defina a codificação para o idioma (Português)
    setlocale(LC_ALL, "Portuguese");

// declaramos as variáveis definindo explicitamente seu tipo
 
    char nome_do_colaborador[] = "João da Silva";
    int carga_horaria_semanal = 40;

// Usamos marcadores de formatação(%s para string e %d para inteiro) para exibir o conteúdo das variáveis na tela
   
    printf("Nome do colaborador: %s\n",nome_do_colaborador);
    printf("Carga horária semanal: %d horas\n",carga_horaria_semanal);

    return 0;
}