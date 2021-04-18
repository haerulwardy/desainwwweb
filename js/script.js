const toggleBtn = document.getElementById('checkbox');
toggleBtn.addEventListener('click', function() {
    changeTheme();
});

function changeTheme() {
    const body = document.body;
    const navLink = document.querySelectorAll('.nav-items a');
    const headerNav = document.querySelector('.header-nav');
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
    headerNav.classList.toggle('dark-mode');
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
            indoMenu.firstElementChild.src = './equipment/icons/english.svg';
            indoMenu.lastElementChild.innerText = 'English';
            engMenu.firstElementChild.src = './equipment/icons/indonesia.svg';
            engMenu.lastElementChild.innerText = 'Indonesia';
            engMenu.classList.remove('active');
        } else if ( engMenu.innerText === 'Indonesia' ) {
            indoMenu.firstElementChild.src = './equipment/icons/indonesia.svg';
            indoMenu.lastElementChild.innerText = 'Indonesia';
            engMenu.firstElementChild.src = './equipment/icons/english.svg';
            engMenu.lastElementChild.innerText = 'English';
            engMenu.classList.remove('active');
        }
    });
    indoMenu.classList.toggle('dark-mode');
    engMenu.classList.toggle('dark-mode');

};

// nav items
// const navItems = document.querySelectorAll('.nav-items a');
// navItems.forEach( item => {
//     item.addEventListener('click', function() {
//         for ( let i = 0; i < navItems.length; i++ ) {
//             navItems[i].classList.remove('active');
//         };
//         this.classList.add('active');

//     });
// } );

// scroll animation
window.addEventListener('scroll', function() {
    const home = document.getElementById('hero');
    const about = document.getElementById('about');
    const services = document.getElementById('services');
    const contact = document.getElementById('contact');

    const homeLink = document.querySelector('a[href="#hero"]');
    const aboutLink = document.querySelector('a[href="#about"]');
    const servicesLink = document.querySelector('a[href="#services"]');
    const contactLink = document.querySelector('a[href="#contact"]');
    scrollMenuActive(home, homeLink);
    scrollMenuActive(about, aboutLink);
    scrollMenuActive(services, servicesLink);
    scrollMenuActive(contact, contactLink);
    
});

function scrollMenuActive(offset, link) {
    if ( window.scrollY >= offset.offsetTop - 200 ) {
        const navItems = document.querySelectorAll('.nav-items a');
        for ( let i = 0; i < navItems.length; i++ ) {
            navItems[i].classList.remove('active');
        };
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    };
};