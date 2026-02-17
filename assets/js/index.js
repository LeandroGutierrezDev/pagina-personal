const navToggle = document.getElementById('navToggle');
const navLinksToggle = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

function toggleMenu(force) {
    const isOpen = force !== undefined ? force : !navLinksToggle.classList.contains('open');
    navToggle.classList.toggle('open', isOpen);
    navLinksToggle.classList.toggle('open', isOpen);
    navOverlay.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

navToggle.addEventListener('click', () => toggleMenu());
navOverlay.addEventListener('click', () => toggleMenu(false));

// Cerrar al hacer click en cualquier link
navLinksToggle.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
});

// Smooth active nav highlight on scroll
const sections = document.querySelectorAll('section[id], footer');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === '#' + entry.target.id) {
                    link.style.color = 'var(--text)';
                }
            });
        }
    });
}, { threshold: 0.4 });

document.querySelectorAll('section[id]').forEach(sec => observer.observe(sec));

// Entrance animations on scroll
const animItems = document.querySelectorAll('.project-card, .skill-card, .edu-item, .info-item, .social-link');
const animObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 80);
            animObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

animItems.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease, border-color .3s, box-shadow .3s';
    animObserver.observe(el);
});

// Form handler
// document.querySelector('#contactForm').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const subject = document.getElementById('subject').value || 'Contacto desde portfolio';
//     const msg = document.getElementById('msg').value;
//     const mailto = `mailto:leandrogutierrezdev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${msg}`)}`;
//     window.location.href = mailto;
// });

// Nav shadow on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 20) {
        nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
    } else {
        nav.style.boxShadow = 'none';
    }
});