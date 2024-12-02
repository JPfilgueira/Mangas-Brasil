let count = 1; // Começa com a primeira imagem
document.getElementById("radio12").checked = true; // Define o primeiro botão de rádio como selecionado

setInterval(function() {
    nextImage();
}, 4000); // Chama nextImage a cada 4 segundos

function nextImage(){
    count++;
    if(count > 5){
        count = 1; // Reseta para 1 se passar de 5
    }

    // Seleciona o botão de rádio correspondente
    document.getElementById("radio" + count + "2").checked = true;
}

// Obtém o elemento checkbox
const checkbox = document.getElementById('checkbox');

// Adiciona um evento de mudança ao checkbox
checkbox.addEventListener('change', () => {
    // Verifica se o checkbox está marcado
    if (checkbox.checked) {
        // Se estiver marcado, muda o fundo para preto
        document.body.style.backgroundColor = 'rgb(24, 24, 24)';
        document.body.style.color = 'white'; // Muda a cor do texto para branco para melhor contraste
    } else {
        // Se não estiver marcado, muda o fundo para branco
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'rgb(24, 24, 24)'; // Muda a cor do texto para preto
    }
});