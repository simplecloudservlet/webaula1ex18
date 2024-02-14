function ola() {
    /* Exbe mensagem em janela modal */
    alert('Olá mundo!');
    /* Exibe no console do navegador */
    console.log('Olá mundo!');
    /* Cria uma nova página HTML de resposta */
    document.write('<!DOCTYPE html>Olá mundo!<br>');
}

document.getElementById("botaoOla").addEventListener(
    "click", ola, false
)