function gravarVariavelSlides() {
  let titulo = "Título via Variável";

  // // COMENTÁRIO: Adiciona slide e insere o título guardado na variável.
  
  SlidesApp.getActivePresentation().appendSlide().insertShape(SlidesApp.ShapeType.TEXT_BOX).getText().setText(titulo);
}