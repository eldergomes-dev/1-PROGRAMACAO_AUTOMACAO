// Automação no google Slides
function tipoVariaveis() {
  
// Configuração automática de perguntas baseada em variáveis semânticas
  let nome = "Elder";
  let idade = 26;

  let form = FormApp.getActiveForm();

// Atualiza o cabeçalho usando o valor descritivo

  form.setTitle("Ficha Cadastral do consultor - " + nome);

// Criação dos inputs validados por tipo

  form.addTextItem().setTitle("Insira seu nome completo (String)");
  
  form.addScaleItem().setTitle("Selecione sua idade limite de 1 a " + idade + " (Inteiro)");

  // CORREÇÃO: Trocado 'form.createChoice' por 'FormApp.getActiveForm().addCheckboxItem().createChoice'
  form.addCheckboxItem().setTitle("O consultor está ativo no sistema? (Boolean)").setChoices([FormApp.getActiveForm().addCheckboxItem().createChoice("Sim")]);
}

// Testando no Terminal
function tipoVariaveis2() {

  let nome = "Elder";
  let idade = 26;

  console.log(nome);
  console.log(idade);
}