
document.addEventListener('DOMContentLoaded', function () {
    // Configuração do observer
    const observerOptions = {
        threshold: 0.3 // Quanto do elemento precisa estar visível (10%)
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ativa a animação ao aparecer
                entry.target.classList.add('animate__animated');

                // Remove do observer após animar (opcional)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleciona os elementos que têm alguma animação do animate.css
    const animatedElements = document.querySelectorAll('[class*="animate__"]');

    animatedElements.forEach(el => {
        // Remove 'animate__animated' para evitar animação imediata
        el.classList.remove('animate__animated');
        observer.observe(el);
    });
});