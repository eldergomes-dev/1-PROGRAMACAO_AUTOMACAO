function gravarVariavelFormularios() {

  let desc = "Descrição via Variavel.";

  // COMENTÁRIO: Modifica a descrição do formulário.

  FormApp.getActiveForm().setDescription(desc);
}