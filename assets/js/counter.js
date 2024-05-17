document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.count');

    counters.forEach(counter => {
        const targetValue = parseInt(counter.getAttribute('data-target'), 10);
        // Usa o texto da descrição para determinar se deve mostrar o símbolo de porcentagem
        const isPercentage = counter.nextElementSibling.textContent.includes('%');
    
        startCounterWhenVisible(counter, 0, targetValue, isPercentage);
    });
    
    function startCounterWhenVisible(counter, startValue, targetValue, isPercentage) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter(counter, startValue, targetValue, isPercentage);
                    observer.unobserve(counter);
                }
            });
        });
    
        observer.observe(counter);
    }

    function updateCounter(counter, startValue, targetValue, isPercentage) {
        const interval = (targetValue - startValue) / 500; // Ajusta a velocidade da animação
        let count = startValue;
    
        const update = () => {
            count += interval;
            if (count < targetValue) {
                counter.innerText = isPercentage ? `${Math.round(count)}%` : formatLargeNumber(Math.round(count));
                requestAnimationFrame(update);
            } else {
                counter.innerText = isPercentage ? `${targetValue}%` : formatLargeNumber(targetValue);
            }
        };
    
        update();
    }

    function formatLargeNumber(number) {
        if (number >= 1000000000) {
            return `${(number / 1000000000).toFixed(1)} Bilhões de reais`;
        } else if (number >= 1000000) {
            // Especificamente para "Valor total recuperado", retorna a string desejada
            return '30 Milhões de reais';
        } else {
            return number.toString();
        }
    }
});
