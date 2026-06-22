function gravarVariavelDocs() {
  // // COMENTÁRIO: Variável de conteúdo.
  let texto = "Texto via variável.";
  DocumentApp.getActiveDocument().getBody().appendParagraph(texto);
}