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

const indoMenu = document.querySelector('.indonesia');
const engMenu = document.querySelector('.english');

if ( indoMenu.innerText === 'Indonesia' ) {
    indoMenu.addEventListener('click', function() {
        engMenu.classList.add('active');
    });
    engMenu.addEventListener('click', function() {
        if ( engMenu.innerText === 'English' ) {
            indoMenu.firstElementChild.src = './assets/icons/english.svg';
            indoMenu.lastElementChild.innerText = 'English';
            engMenu.firstElementChild.src = './assets/icons/indonesia.svg';
            engMenu.lastElementChild.innerText = 'Indonesia';
            engMenu.classList.remove('active');
        } else if ( engMenu.innerText === 'Indonesia' ) {
            indoMenu.firstElementChild.src = './assets/icons/indonesia.svg';
            indoMenu.lastElementChild.innerText = 'Indonesia';
            engMenu.firstElementChild.src = './assets/icons/english.svg';
            engMenu.lastElementChild.innerText = 'English';
            engMenu.classList.remove('active');
        }
    });

};

const sidebarMenu = document.querySelector('.sidebar-menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', function() {
    sidebarMenu.classList.add('active')
    
    const closeMenu = document.querySelector('.close');
    closeMenu.addEventListener('click', function() {
        sidebarMenu.classList.remove('active')
    });
});
