// Initialize Lucide Icons
lucide.createIcons();

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-in-out'
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = menuToggle.querySelector('i');

let isMenuOpen = false;

menuToggle.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        mobileMenu.style.display = 'flex';
        menuToggle.innerHTML = '<i data-lucide="x"></i>';
    } else {
        mobileMenu.style.display = 'none';
        menuToggle.innerHTML = '<i data-lucide="menu"></i>';
    }
    
    // Re-initialize icons for the new button state
    lucide.createIcons();
});

// Close mobile menu when a link is clicked
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
        menuToggle.innerHTML = '<i data-lucide="menu"></i>';
        lucide.createIcons();
        isMenuOpen = false;
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(227, 220, 210, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
    } else {
        navbar.style.background = 'rgba(227, 220, 210, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
