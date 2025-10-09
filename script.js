// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.background = 'transparent';
        }
    });

    // Menu Category Switching
    const categoryBtns = document.querySelectorAll('.category-btn');
    const menuCategories = document.querySelectorAll('.menu-category');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and categories
            categoryBtns.forEach(b => b.classList.remove('active'));
            menuCategories.forEach(cat => cat.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding category
            const category = btn.getAttribute('data-category');
            const targetCategory = document.querySelector(`.menu-category.${category}`);
            if (targetCategory) {
                targetCategory.classList.add('active');
            }
        });
    });

    // Smooth scroll to menu when clicking menu nav link
    document.querySelector('a[href="#menu"]')?.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#menu').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Order online button functionality
    document.querySelector('.order-online-btn')?.addEventListener('click', () => {
        window.open('https://snoonu.com/restaurants/inside-burger', '_blank');
    });
});