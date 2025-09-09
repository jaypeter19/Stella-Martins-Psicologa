document.addEventListener('DOMContentLoaded', () => {
    emailjs.init("c4hFRHeVWjzZIB0wy");

    const form = document.getElementById('contactForm');

    form.addEventListener('submit', event => {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        const formData = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            message: form.message.value
        };

        emailjs.send('service_liw9mc1', 'template_8yjp8fo', formData)
            .then((response) => {
                console.log('E-mail enviado com sucesso!', response.status, response.text);
                form.reset();
                form.classList.remove('was-validated');


                // Redireciona para whatsapp
                window.location.href = "https://wa.me/5551982682331";
            })
            .catch((error) => {
                console.error('Erro ao enviar e-mail:', error);
            });
    });
});