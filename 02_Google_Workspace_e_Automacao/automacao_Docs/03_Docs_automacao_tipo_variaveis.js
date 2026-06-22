function tipoVariaveis() {

// Escrita de variáveis significativas em documentos de texto

  let nome = "Elder"; 
  let idade = 26;
  let altura = 1.75;
  let peso  = 85.5;
  let ativo = true;

  let body = DocumentApp.getActiveDocument().getBody();

  body.appendParagraph(nome);
  body.appendParagraph(String(idade));
  body.appendParagraph(String(altura));
  body.appendParagraph(String(peso))
  body.appendParagraph(String(ativo));

}
