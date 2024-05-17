let userTexts = document.getElementsByClassName('user-text');
let currentIndex = 0;
let testimonialInterval = setInterval(showNextReview, 3000); // Ajuste o tempo conforme necessário.

function showNextReview() {
    userTexts[currentIndex].classList.remove('active-text'); // Esconde o depoimento atual.

    currentIndex = (currentIndex + 1) % userTexts.length;

    setTimeout(() => {
        userTexts[currentIndex].classList.add('active-text'); // Mostra o próximo depoimento após um atraso.
    }, 300); // Esse atraso deve ser menor ou igual ao tempo de transição do CSS para 'opacity' e 'visibility'.
}

function showPrevReview() {
    userTexts[currentIndex].classList.remove('active-text'); // Esconde o depoimento atual.

    currentIndex = (currentIndex - 1 + userTexts.length) % userTexts.length;

    setTimeout(() => {
        userTexts[currentIndex].classList.add('active-text'); // Mostra o próximo depoimento após um atraso.
    }, 300); // Esse atraso deve ser menor ou igual ao tempo de transição do CSS para 'opacity' e 'visibility'.
}
