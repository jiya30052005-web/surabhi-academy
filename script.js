/* ==========================================================================
   Surabhi Academy Script Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initThemeToggle();
    initCounters();
    initTestimonialSlider();
    initFaqs();
    initScrollToTop();
});

// Mobile Nav Toggle
function initNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Light / Dark Mode Core
function initThemeToggle() {
    const toggleBtn = document.getElementById('themeToggleBtn');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateToggleIcon(toggleBtn, savedTheme);

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateToggleIcon(toggleBtn, newTheme);
        });
    }
}

function updateToggleIcon(btn, theme) {
    if(!btn) return;
    btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
}

// Stats Counter Animation
function initCounters() {
    const counters = document.querySelectorAll('.counter-value');
    if (counters.length === 0) return;

    const countUp = (item) => {
        const target = +item.getAttribute('data-target');
        const count = +item.innerText;
        const speed = target / 50;

        if (count < target) {
            item.innerText = Math.ceil(count + speed);
            setTimeout(() => countUp(item), 30);
        } else {
            item.innerText = target + "+";
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUp(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// Testimonials Slider Loop
function initTestimonialSlider() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;

    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 4000);
}

// FAQ Accordion Engine
function initFaqs() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.maxHeight = '0px';
                ans.style.paddingTop = '0px';
                ans.style.paddingBottom = '0px';
            });

            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 40 + 'px';
                answer.style.paddingTop = '20px';
                answer.style.paddingBottom = '20px';
            }
        });
    });
}

// Scroll to Top UI Trigger
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Filter Engine for Courses View Window
function filterCourses(category) {
    const cards = document.querySelectorAll('.course-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}