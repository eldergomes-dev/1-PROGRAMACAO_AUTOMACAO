/* Essa Função roda apenas no google Appscript
pois é automação no Google Planilhas*/

function tipoVariaveis() {

// Inserção física de valores organizados por nome em células

  let nome = "Elder";
  let idade = 26;
  let altura = 1.75;
  let peso = 85.5;
  let ativo = true;

  let ss = SpreadsheetApp.getActiveSheet()

//  SAÍDA 01 (VALORES SEGUIDOS HORIZONTALMENTE NA PRIMEIRA LINHA)
  ss.getRange("A3:E3").setValues([[nome, idade, altura, peso, ativo]]);

// SAÍDA 02 (VALORES UM EMBAIXO DO OUTRO VERTICALMENTE NA COLUNA A)

  ss.getRange("A4:A8").setValues([[nome], [idade], [altura], [peso], [ativo]])

}


// testar a função no terminal .
function tipoVariaveis2() {

  let nome = "Elder";
  let idade = 26;
  let altura = 1.75;
  let peso = 85.5;
  let ativo = true;

  console.log(nome);
  console.log(idade);
  console.log(altura);
  console.log(peso);
  console.log(ativo);
}