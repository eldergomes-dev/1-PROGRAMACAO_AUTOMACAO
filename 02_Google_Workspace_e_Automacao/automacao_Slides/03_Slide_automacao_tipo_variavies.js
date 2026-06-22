function tipoVariaveis() {
// Injeção de variáveis em formas geométricas dentro de slides

  let nome = "Elder";
  let idade = 26;
  let altura = 1.75;
  let peso = 85.5;
  let ativo = true;

  let slide = SlidesApp.getActivePresentation().appendSlide();

  // SAÍDA 01 (EXIBIÇÃO HORIZONTAL EM CAIXA DE TEXTO)

  let textoSeguido = nome + " " + idade + " " + altura + " "+ peso + " " + ativo;
  
  slide.insertShape(SlidesApp.ShapeType.TEXT_BOX,50, 50, 500, 50).getText().setText(textoSeguido)


  // SAÍDA 02 (EXIBIÇÃO VERTICAL EM CAIXA DE TEXTO ISOLADA)

  let textoVertical = nome + "\n" + idade + "\n" + altura + "\n" + peso + "\n" + ativo;

  slide.insertShape(SlidesApp.ShapeType.TEXT_BOX,50, 150, 500, 200).getText().setText(textoVertical);
}

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