function tipoVariaveis() {

// Geração e envio de e-mail imediato contendo a tabela de tipos estruturada

  let nome = "Elder";
  let idade = 26;
  let altura = 1.75;
  let peso = 85.5;
  let ativo = true;

 let emailDestino = "gomesdasilvasantoselder7@gmail.com";
 let assunto = "Aula 3 - Tipos de variáveis"


//Construção do corpo do e-mail com as duas visões solicitadas

  let htmlBody = "<h3>Saída 01(Seguidas na mesma linha):</h3>" +
  nome + " " + idade + " " + altura + " " + " " + peso + " " + ativo +
  "<br><br><h3>Saída 02 (Um embaixo do outro):</h3>" +
  nome + "<br>" + idade + "<br>" + altura + "<br>" + peso + "<br>" + ativo;


// Envio executado diretamente sem geração de rascunhos na conta
  GmailApp.sendEmail(emailDestino, assunto, "",{htmlBody: htmlBody});
}
