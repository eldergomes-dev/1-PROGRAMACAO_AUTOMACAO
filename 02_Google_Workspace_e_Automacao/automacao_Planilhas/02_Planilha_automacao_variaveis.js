function gravarVariavelPlanilha() {

    let valorCell = "Variável Planilha";
    SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A2").
    setValue(valorCell);
}
