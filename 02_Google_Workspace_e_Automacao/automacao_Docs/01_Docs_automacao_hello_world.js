
// pega o corpo do documento e adiciona o parágrafo Hello World

function helloWorld() {

    DocumentApp.getActiveDocument().getBody().appendParagraph
    ("Hello World");
}