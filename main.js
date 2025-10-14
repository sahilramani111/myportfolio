// ===== TYPING ANIMATION =====
var typed = new Typed(".text", {
    strings: ["Flutter Developer", "Mobile App Developer"],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 1000,
    loop: true
});

// ===== SMOOTH SCROLL & ACTIVE NAV =====
const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if(scrollY >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href').includes(current)) link.classList.add('active');
    });
});

document.querySelectorAll('.navbar a, .btn-box').forEach(link => {
    link.addEventListener('click', e => {
        if(link.hash !== ''){
            e.preventDefault();
            document.querySelector(link.hash).scrollIntoView({behavior:'smooth'});
        }
    });
});

// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');

     // Animate hamburger into cross
    menuToggle.classList.toggle('open');
});


