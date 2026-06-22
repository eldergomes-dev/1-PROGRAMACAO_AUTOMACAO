function enviarVariavelGmail() {

  let para = "gomesdasilvasantoselder7@gmail.com";
  let sub = "Aula 02_variaveis";
  let msg = "Mensagem processada via variável.";

  // Serviço de e-mail do Google enviando os dados.

  GmailApp.sendEmail(para,sub,msg);
}
