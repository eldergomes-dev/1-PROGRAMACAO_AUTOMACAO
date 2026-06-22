
// Envia um e-mail direto com um simples Hello World

function helloWorld() {
  GmailApp.sendEmail(
    "gomesdasilvasantoselder7@gmail.com", // 1. Quem recebe
    "mensagem automatica",                 // 2. O Assunto 
    "Hello World!"                        // 3. a mensagem
  );
}