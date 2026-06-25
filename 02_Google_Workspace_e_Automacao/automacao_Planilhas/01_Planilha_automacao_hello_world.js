
function helloWorld() {
    // localiza a aba ativa e joga o texto na célula A1 da planilha
    SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A1").setValue("Hello World");
}

