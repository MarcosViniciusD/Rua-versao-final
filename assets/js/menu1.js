document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.menu-button');
    const contents = document.querySelectorAll('.fase-content');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const target = button.getAttribute('data-target');

            contents.forEach(content => {
                content.classList.remove('active');
            });

       
            document.getElementById(target).classList.add('active');
        });
    });
});
