#include <iostream>
#include <string>
#include <iomanip> /*Adicione esta biblioteca 
para controlar a exibição dos números,
mesmo usando o FIXED DIRETO NO CÒDIGO*/   



int main() {

// ATIVA O FIXED DIRETO NO CÓDIGO (Igual configurar o terminal para sempre usar .toFixed)
    std::cout << std::fixed << std::setprecision(2);

//Intanciamos objetos de dados com nomenclatura corporativa limpa

    std::string nome_do_gestor = "João da Silva";
    double faturamento_meta_mensal = 250000.75;

// O fluxo std::cout concatena dinamicamente textos e variavies na saída do terminal.

    std::cout << "Nome do gestor: " << nome_do_gestor << std::endl;
    std::cout << "Faturamento meta mensal: R$ " << faturamento_meta_mensal << std::endl;

    return 0;
}