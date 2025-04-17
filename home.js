document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    
    const slideContainer = document.querySelector('.slide-container');
    
    const slidesContent = [
        `
        <h1>Sobre nós</h1>
        <p class="introducao-txt">Na TechFit, acreditamos que cuidar do corpo é cuidar da vida. Fundada por apaixonados por fitness, nossa academia nasceu com o propósito de transformar vidas através de um ambiente acolhedor, equipamentos modernos e programas personalizados</p>
        <img class="introducao-img" src="css/fotos/introducao.jpg" alt="img">
        `,
        `
        <!-- Conteúdo do segundo slide -->
        <h1>Nossa equipe</h1>
        <p class="introducao-txt">Nossa equipe é formada por profissionais dedicados, com formação na área de educação física e nutrição. Eles estão prontos para oferecer suporte, orientação e motivação em cada etapa da sua jornada saudável. Trabalhamos com empatia, respeito e foco nos objetivos de cada aluno.</p>
        <img src="css/fotos/foto6.jpg" alt="img" class="introducao-img">
        `,
        `
        <!-- Conteúdo do terceiro slide -->
        <h1>Equipamentos de qualidade</h1>
        <p class="introducao-txt">Contamos com aparelhos modernos e de alta performance, garantindo segurança e eficiência nos treinos. Tudo é pensado para oferecer a melhor experiência possível aos nossos alunos. Renovamos constantemente nossos equipamentos para acompanhar as tendências do mercado fitness.</p>
        <img src="css/fotos/foto8.jpg" alt="img" class="introducao-img">
        `,
        `
        <!-- conteúdo do quarto slide -->
        <h1>Aproveite nosso 1º dia gratuito</h1>
        <p class="introducao-txt">Quer conhecer nossa estrutura e metodologia? Venha fazer um treino grátis! É a chance perfeita para experimentar nossos serviços sem compromisso e começar a cuidar da sua saúde. Temos certeza de que você vai se surpreender com o nosso ambiente e atendimento</p>
        <img src="css/fotos/foto9.jpg" alt="img" class="introducao-img">
        `
    ];

    function showSlide(index) {
        slideContainer.innerHTML = slidesContent[index];
    }

    function moveSlide(direction) {
        currentSlide += direction;
        
        if (currentSlide >= slidesContent.length) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = slidesContent.length - 1;
        }
        
        showSlide(currentSlide);
    }

    showSlide(0);

    document.querySelector('.slide-buttom-prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.slide-buttom-next').addEventListener('click', () => moveSlide(1));
});