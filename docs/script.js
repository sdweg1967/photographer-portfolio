// script.js - добавить эту функцию для анимации при скролле

// Анимация появления элементов при скролле
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .result-card, .step, .case-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    
    // Плавное появление страницы
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Остальной код из предыдущей версии остается без изменений
// script.js
// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    
    // Animate hamburger icon
    const spans = this.querySelectorAll('span');
    if (!isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
                // Reset hamburger icon
                const spans = document.querySelector('.mobile-menu-btn').querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    });
});

// Portfolio Filtering
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filter = this.dataset.filter;
        const items = document.querySelectorAll('.portfolio-item');
        
        items.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 50);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Image Modal
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.querySelector('.modal-close');

document.querySelectorAll('.btn-view').forEach(btn => {
    btn.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.dataset.image;
        document.body.style.overflow = 'hidden';
    });
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');
        
        // Close all items
        document.querySelectorAll('.faq-item').forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open current item if it was closed
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Contact Form Handling
document.getElementById('photographyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: this.name.value,
        phone: this.phone.value,
        service: this.service.value,
        message: this.message.value,
        date: new Date().toLocaleString('ru-RU'),
        source: 'Сайт ArtVision'
    };
    
    // Simulate form submission
    console.log('Заявка с сайта фотографа:', formData);
    
    // Show success message
    this.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
    
    // Clear form
    this.reset();
    
    // In a real project, you would send this data to your server
    // sendToTelegram(formData);
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .portfolio-item, .review-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Animated Statistics Counter
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.dataset.target === '100' ? '%' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.dataset.target === '100' ? '%' : '+');
        }
    }, 16);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const navLinks = document.querySelector('.nav-links');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (window.innerWidth <= 768 && 
            navLinks.style.display === 'flex' && 
            !e.target.closest('.nav-links') && 
            !e.target.closest('.mobile-menu-btn')) {
            navLinks.style.display = 'none';
            // Reset hamburger icon
            const spans = menuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Initialize statistics animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
});
// Добавь эту функцию в script.js для улучшенного взаимодействия

// Улучшенная обработка модального окна
document.querySelectorAll('.btn-view').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation(); // Предотвращаем всплытие события
        modal.style.display = 'block';
        modalImg.src = this.dataset.image;
        document.body.style.overflow = 'hidden';
    });
});

// Закрытие модального окна при клике вне изображения
modal.addEventListener('click', function(e) {
    if (e.target === modal || e.target.classList.contains('modal-close')) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Закрытие модального окна клавишей ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});