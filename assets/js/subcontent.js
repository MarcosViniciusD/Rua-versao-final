// Seleciona todas as abas e conteúdos
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');


tabContents[0].style.display = 'block';

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      
        tabContents.forEach(content => {
            content.style.display = 'none';
        });
        
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        tabContents[index].style.display = 'block';
      
        tab.classList.add('active');
    });
});
