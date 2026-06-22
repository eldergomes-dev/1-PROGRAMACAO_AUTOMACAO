// cria um slide limpo e injeta o texto na caixa de título

function helloWorld() {

    SlidesApp.getActivePresentation().appendSlide().insertShape(SlidesApp.
    ShapeType.TEXT_BOX).getText().setText("Hello World");
}