document.addEventListener('DOMContentLoaded', function() {
    const newCounters = document.querySelectorAll('.new-count');

    function updateCounter(counter, startValue, targetValue, isPercentage) {
        const duration = 1000; // Duração da animação em milissegundos
        let startTimestamp = null;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = Math.round(progress * (targetValue - startValue) + startValue);

            counter.innerText = isPercentage ? `${currentValue}%` : formatLargeNumber(currentValue);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                // Assegura que o valor final seja exatamente o valor alvo
                counter.innerText = isPercentage ? `${targetValue}%` : formatLargeNumber(targetValue);
            }
        };

        window.requestAnimationFrame(step);
    }

    function formatLargeNumber(number) {
        let formattedNumber;

        if (number >= 1000000 && number < 1000000000) {
            formattedNumber = (number / 1000000).toFixed(1);
            // Verifica se a parte decimal é .0 e remove, se for o caso
            return formattedNumber.endsWith('.0') ? `${parseInt(formattedNumber)} Milhões de reais` : `${formattedNumber} Milhões de reais`;
        } else if (number >= 1000000000) {
            formattedNumber = (number / 1000000000).toFixed(1);
            // Verifica se a parte decimal é .0 e remove, se for o caso
            return formattedNumber.endsWith('.0') ? `${parseInt(formattedNumber)} Bilhões de reais` : `${formattedNumber} Bilhões de reais`;
        } else {
            return number.toString();
        }
    }

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

    newCounters.forEach(counter => {
        const targetValue = parseInt(counter.getAttribute('data-target'), 10);
        // Determina se o contador deve ser tratado como porcentagem baseado no conteúdo da descrição adjacente
        const isPercentage = counter.nextElementSibling && counter.nextElementSibling.textContent.includes('%');
        
        startCounterWhenVisible(counter, 0, targetValue, isPercentage);
    });
});
