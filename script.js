// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = mobileMenu.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = mobileMenu.classList.contains('active') ? 'x' : 'menu';
    menuToggle.innerHTML = `<i data-lucide="${icon}"></i>`;
    lucide.createIcons();
});

// Close mobile menu on clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        menuToggle.innerHTML = `<i data-lucide="menu"></i>`;
        lucide.createIcons();
    });
});

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});
