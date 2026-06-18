default rel             ; Diz ao NASM para usar endereçamento relativo (RIP-relative).
                        ; Isso é obrigatório no Windows x64 para o GCC achar as variáveis na RAM.

section .data
    ; db = Define Byte (aloca espaço na memória para o texto)
    ; 10 = caractere '\n' (pula linha / Nova linha)
    ; 0  = caractere nulo '\0' (indica ao printf onde o texto termina obrigatoriamente)
    mensagem_hello_world db "Hello World", 10, 0

section .text
    global main
    extern printf       ; Avisa que vamos puxar a função printf da biblioteca do C

main:
    ; Reserva o espaço obrigatório da pilha no Windows (Shadow Space / 32 bytes + 8 de alinhamento)
    sub rsp, 40         

    ; lea = Load Effective Address (pega o endereço de memória da mensagem e joga no RCX)
    ; RCX = Registrador padrão no Windows x64 para passar o 1º argumento de uma função
    lea rcx, [mensagem_hello_world]
    call printf         ; Chama a função para imprimir na tela

    ; xor eax, eax = Zera o registrador EAX (é o mesmo que mover 0 para ele). 
    ; O valor em EAX/RAX se torna o retorno da função (return 0 do main)
    xor eax, eax
    
    ; Devolve os 40 bytes que pegamos da pilha (limpa a casa antes de sair)
    add rsp, 40         
    ret                 ; Finaliza o programa e volta para o Windows