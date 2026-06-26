; Snippet de código: Variáveis no Assembly


default rel      ; garante o endereçamento relativo exigido pelo GCC no Windows x64

section .data
    ; db = Define Byte. alocamos as strings na memória RAM com semântica de mercado
    ; Caractere 10 pula linha (\n) e o caractere 0 encerra a string (\0)

    layout_mensagem_usuario db "Perfil do Engenheiro: %s", 10, 0
    nome_do_profissional    db "Paulo", 0

section .text
    global main
    extern printf  ; puxamos a função de formatação e escrita da biblioteca da linguagem C 

main:
    ; Alocamos 40 bytes de Shadow Space na pilha para as funções do Windows
    sub rsp, 40

    ; O printf exige que o 1° argumento (o formato do texto) entre no registrador RCX
    lea rcx, [layout_mensagem_usuario]

    ; O 2° argumento (o dado que vai substituir o '%s') entra obrigatoriamente no RDX
    lea rdx, [nome_do_profissional]

    ; Disparamos a função externa para processar a impressão dos dados na tela 
    call printf

    ; Limpamos o registrador de retorno sinalizando sucesso (return 0)
    xor eax, eax

    ; Devolvemos o espaço da pilha e fechamos o fluxo voltando ao sistema operacional
    add rsp, 40
    ret