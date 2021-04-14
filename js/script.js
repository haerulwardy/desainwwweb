const toggleBtn = document.getElementById('checkbox');
toggleBtn.addEventListener('click', function() {
    changeTheme();
});

function changeTheme() {
    const body = document.body;
    const navLink = document.querySelectorAll('.nav-items a');
    const headerHero = document.querySelector('.header-hero');
    const heroBtn = document.querySelector('.hero--title-btn');
    const aboutCards = document.querySelectorAll('.about--cards-card');
    const serviceTitle = document.querySelector('.services h2');
    const titleService = document.querySelectorAll('.title-service-color');
    const contactTitle = document.querySelector('.contact h2')
    const contactInfo = document.querySelector('.contact-info-color')

    body.classList.toggle('dark-mode');
    navLink.forEach(link => {
        link.classList.toggle('dark-mode')
    });
    headerHero.classList.toggle('dark-mode');
    heroBtn.classList.toggle('dark-mode');
    aboutCards.forEach(card => {
        card.classList.toggle('dark-mode');
    });
    serviceTitle.classList.toggle('dark-mode');
    titleService.forEach(service => {
        service.classList.toggle('dark-mode');
    });
    contactTitle.classList.toggle('dark-mode');
    contactInfo.classList.toggle('dark-mode');
};