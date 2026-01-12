// Navigation Scroll Effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(11, 61, 46, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    } else {
        navbar.style.background = 'rgba(11, 61, 46, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Menu Toggle (Basic)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
        navLinks.style.position = 'static';
        navLinks.style.flexDirection = 'row';
        navLinks.style.width = 'auto';
        navLinks.style.background = 'transparent';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '60px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.flexDirection = 'column';
        navLinks.style.background = 'rgba(11, 61, 46, 0.98)';
        navLinks.style.padding = '20px';
        navLinks.style.alignItems = 'center';
    }
});

// Form Submission Handling
const regForm = document.getElementById('regForm');
regForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get basic values
    const name = document.getElementById('name').value;
    const destElements = document.querySelectorAll('input[name="dest"]:checked');
    const destinations = Array.from(destElements).map(el => el.value);

    if (destinations.length === 0) {
        alert('Harap pilih minimal satu destinasi.');
        return;
    }

    // Simulate sending data
    alert(`Terima kasih, ${name}!\n\nPendaftaran untuk ${destinations.join(', ')} telah diterima.\nTim kami akan segera menghubungi Anda via WhatsApp.`);

    regForm.reset();
});

// Custom Cursor Animation
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot follows immediately
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with slight delay/smoothing
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Hover effect for interactive elements
const interactives = document.querySelectorAll('a, button, .summit-card, input');
interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
    });
});

