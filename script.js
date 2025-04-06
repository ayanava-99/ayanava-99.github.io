// script.js

// Typed.js Animation
const typed = new Typed('.typing', {
    strings: ['Data Engineer', 'ML Engineer', 'Cloud & AI Enthusiast'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

// Toggle Dark Mode
const themeToggle = document.querySelector('.toggle-theme');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
