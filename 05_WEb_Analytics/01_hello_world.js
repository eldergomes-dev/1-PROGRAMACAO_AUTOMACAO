// Criamos um objeto de evento estruturado com chaves semânticas para o Analytics

const eventoHelloWorld = {
    'event': 'disparo_hello_world', // Nome da ação/ evento que será enviado.
    'mensagem_configurada': 'Hello World', // Mensagem que será enviada.
};

// Inicializa a camada de dados do Google Tag Manager se ela não existir e injeta o objeto

window.dataLayer = window.dataLayer || []; // Se a camada de dados não existir, inicializa com um array vazio
window.dataLayer.push(eventoHelloWorld); // entregando o bilhete/conteudo da variavel.