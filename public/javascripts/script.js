document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenuBtn.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.navbar-menu li a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navbarMenu.classList.remove('active');
        });
    });
    
    // Dropdown toggle for mobile
    document.querySelectorAll('.dropdown > a').forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.parentElement.classList.toggle('active');
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Animate stats counter
    const animateCounters = () => {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const suffix = stat.getAttribute('data-suffix') || '';
            let count = 0;
            const duration = 2000; // Animation duration in ms
            const increment = target / (duration / 16); // 60fps
            
            const updateCount = () => {
                count += increment;
                if (count < target) {
                    stat.textContent = Math.floor(count) + suffix;
                    requestAnimationFrame(updateCount);
                } else {
                    stat.textContent = target + suffix;
                }
            };
       
            
            updateCount();
   
        });
    };
    
    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero animation
    gsap.from('.hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-subtitle', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.3
    });
    
    gsap.from('.hero-buttons', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.6
    });
    
    gsap.from('.hero-image', {
        duration: 1,
        x: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.9
    });
    
    // Animate sections on scroll
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });
    
    // Animate cards on scroll
    gsap.utils.toArray('.course-card, .testimonial-card, .student-card, .cert-card, .gallery-item, .team-card, .workshop-card, .past-workshop-card, .webinar-card, .past-webinar-card, .project-card, .reason-card, .position-card, .info-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
    
    // Project category filter
    const filterButtons = document.querySelectorAll('.tab-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            
            projectCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    gsap.from(card, {
                        y: 30,
                        opacity: 0,
                        duration: 0.5,
                        ease: 'power3.out'
                    });
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Certificate verification form
    const certificateForm = document.getElementById('certificateForm');
    const verificationResult = document.getElementById('verificationResult');
    const invalidResult = document.getElementById('invalidResult');
    
    if (certificateForm) {
        certificateForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const certificateId = document.getElementById('certificateId').value;
            
            // Simple validation logic (in a real app, this would be an API call)
            if (certificateId.trim() !== '' && certificateId.length >= 5) {
                // Mock data for demonstration
                document.getElementById('resultId').textContent = 'INFY-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
                document.getElementById('resultName').textContent = 'Aman Sharma';
                document.getElementById('resultCourse').textContent = 'Full Stack Web Development';
                document.getElementById('resultDate').textContent = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
                
                verificationResult.style.display = 'block';
                invalidResult.style.display = 'none';
                
                // Scroll to result
                verificationResult.scrollIntoView({ behavior: 'smooth' });
            } else {
                verificationResult.style.display = 'none';
                invalidResult.style.display = 'block';
                
                // Scroll to result
                invalidResult.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Career application form
    const careerForm = document.getElementById('careerForm');
    const applicationSuccess = document.getElementById('applicationSuccess');
    
    if (careerForm) {
        careerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real app, this would submit to a server
            careerForm.style.display = 'none';
            applicationSuccess.style.display = 'block';
        });
    }
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    const contactSuccess = document.getElementById('contactSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real app, this would submit to a server
            contactForm.style.display = 'none';
            contactSuccess.style.display = 'block';
        });
    }
    
    // FAQ accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');
            
            // Close all other FAQs
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.classList.remove('active');
                    q.nextElementSibling.classList.remove('active');
                }
            });
            
            // Toggle current FAQ
            question.classList.toggle('active');
            answer.classList.toggle('active');
        });
    });
    
    // Initialize animations when stats come into view
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        ScrollTrigger.create({
            trigger: statsSection,
            start: 'top 80%',
            onEnter: animateCounters
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});