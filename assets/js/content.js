// Seleciona todas as abas e conteúdos
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

// Mostra a aba inicialmente ativa
tabContents[0].style.display = 'block';

// Adiciona um ouvinte de evento de clique a cada aba
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Esconde todos os conteúdos das abas
        tabContents.forEach(content => {
            content.style.display = 'none';
        });
        // Remove a classe 'active' de todas as abas
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        // Mostra o conteúdo da aba clicada
        tabContents[index].style.display = 'block';
        // Adiciona a classe 'active' à aba clicada
        tab.classList.add('active');
    });
});
