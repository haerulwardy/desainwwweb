// change language
let language = {
    indo: {
        navLinkLang: ['Beranda', 'Kenapa Harus Kami?', 'Layanan', 'Kontak Kami' ],
        heroLang: ['Diskon 50%', 'Kreasikan Website impian anda', 'Layanan kami'],
        cardLang: {
            titleCardHeading: ['Akurat', 'Unlimited Revisi','Mudah Dan Modern'],
            titleCardParagraph: ['Proses membangun website langkah demi langkah.', 'Kami akan membantu menyelesaikan permasalahan mu!', 'Dikemas dengan mudah dan produk yang modern.']
        },
        servicesLang: {
            titleLang: 'Layanan Kami',
            titleServicesHeading: ['Konversi Desain UI', 'UI/UX Desain', 'Bangun Website Dari 0'],
            titleServicesParagraph: ['Kami akan membantu mengkonversi UI desain kamu.', 'Kami akan mendesainkan ide websitemu menjadi desain yang menarik.', 'Kami akan membantu membangun website dari awal.']
        },
        contactTitle: 'Kontak' 
    },
    eng: {
        navLinkLang: ['Home', 'Why Should we?', 'Our Services', 'Our Contact' ],
        heroLang: ['Discount 50%', 'Create your dream website', 'See Our Services'],
        cardLang: {
            titleCardHeading: ['Be accurate', 'Unlimited Revisions','Easy And Modern'],
            titleCardParagraph: ['The process of building a website step by step.', 'We will help solve your problem!', 'Packed with ease and a modern product.']
        },
        servicesLang: {
            titleLang: 'Our Services',
            titleServicesHeading: ['UI Design Conversion', 'UI/UX Design', 'Build a Website From 0'],
            titleServicesParagraph: ['We will help convert your UI design.', 'We will design your website idea into an attractive design.', 'We will help build the website from scratch.']
        },
        contactTitle: 'Our Contact' 
    }
}

// english
function englishLang() {
    const navItems = document.querySelectorAll('.nav-items a');
    const hashtagHero = document.querySelector('.hero--title-hashtag');
    const h1Hero = document.querySelector('.hero-title h1');
    const btnHero = document.querySelector('.hero--title-btn');
    const cardTitle = document.querySelectorAll('.cards--card-title');
    const servicesTitle = document.querySelector('.services h2');
    const titleServices = document.querySelectorAll('.content--title-service');
    const contactTitle = document.querySelector('.contact h2');
    const footerLink = document.querySelectorAll('.footer-menu-link a');

    function changeInnerText(el, toEl) {
        el.innerHTML = toEl;
    };
    // nav link
    navItems.forEach((item, i) => {
        item = changeInnerText(item, language.eng.navLinkLang[i]);
    });
    // hero
    changeInnerText(hashtagHero, language.eng.heroLang[0]);
    changeInnerText(h1Hero, language.eng.heroLang[1]);
    changeInnerText(btnHero, language.eng.heroLang[2]);
    // about us
    cardTitle.forEach((card, i) => {
        card.firstElementChild = changeInnerText(card.firstElementChild, language.eng.cardLang.titleCardHeading[i]);
        card.lastElementChild = changeInnerText(card.lastElementChild, language.eng.cardLang.titleCardParagraph[i]);
    });
    // services
    changeInnerText(servicesTitle, language.eng.servicesLang.titleLang);
    titleServices.forEach((service, i) => {
        service.firstElementChild = changeInnerText(service.firstElementChild, language.eng.servicesLang.titleServicesHeading[i]);
        service.lastElementChild = changeInnerText(service.lastElementChild, language.eng.servicesLang.titleServicesParagraph[i]);
    });
    // contact
    changeInnerText(contactTitle, language.eng.contactTitle);
    // footer link
    footerLink.forEach((item, i) => {
        item = changeInnerText(item, language.eng.navLinkLang[i]);
    });
};
// indo
function indoLang() {
    const navItems = document.querySelectorAll('.nav-items a');
    const hashtagHero = document.querySelector('.hero--title-hashtag');
    const h1Hero = document.querySelector('.hero-title h1');
    const btnHero = document.querySelector('.hero--title-btn');
    const cardTitle = document.querySelectorAll('.cards--card-title');
    const servicesTitle = document.querySelector('.services h2');
    const titleServices = document.querySelectorAll('.content--title-service');
    const contactTitle = document.querySelector('.contact h2');
    const footerLink = document.querySelectorAll('.footer-menu-link a');

    function changeInnerText(el, toEl) {
        el.innerText = toEl;
    };
    // nav
    navItems.forEach((item, i) => {
        item = changeInnerText(item, language.eng.navLinkLang[i]);
    });
    // hero
    changeInnerText(hashtagHero, language.indo.heroLang[0]);
    changeInnerText(h1Hero, language.indo.heroLang[1]);
    changeInnerText(btnHero, language.indo.heroLang[2]);
    // about us
    cardTitle.forEach((card, i) => {
        card.firstElementChild = changeInnerText(card.firstElementChild, language.indo.cardLang.titleCardHeading[i]);
        card.lastElementChild = changeInnerText(card.lastElementChild, language.indo.cardLang.titleCardParagraph[i]);
    });
    // services
    changeInnerText(servicesTitle, language.indo.servicesLang.titleLang);
    titleServices.forEach((service, i) => {
        service.firstElementChild = changeInnerText(service.firstElementChild, language.indo.servicesLang.titleServicesHeading[i]);
        service.lastElementChild = changeInnerText(service.lastElementChild, language.indo.servicesLang.titleServicesParagraph[i]);
    });
    // contact
    changeInnerText(contactTitle, language.indo.contactTitle);
    // footer link
    footerLink.forEach((item, i) => {
        item = changeInnerText(item, language.eng.navLinkLang[i]);
    });
};

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
            englishLang();
        } else if ( engMenu.innerText === 'Indonesia' ) {
            indoMenu.firstElementChild.src = './equipment/icons/indonesia.svg';
            indoMenu.lastElementChild.innerText = 'Indonesia';
            engMenu.firstElementChild.src = './equipment/icons/english.svg';
            engMenu.lastElementChild.innerText = 'English';
            engMenu.classList.remove('active');
            indoLang();
        };
    });
    indoMenu.classList.toggle('dark-mode');
    engMenu.classList.toggle('dark-mode');

};


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

// checkLocation hash
