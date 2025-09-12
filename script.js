// Portfolio Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle with improved functionality
    const burger = document.querySelector('.navbar-burger');
    const menu = document.getElementById('navbarMenu');
    
    if (burger && menu) {
        burger.addEventListener('click', function() {
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
            
            // Update aria-expanded attribute
            const isExpanded = menu.classList.contains('is-active');
            burger.setAttribute('aria-expanded', isExpanded);
            
            // Prevent body scroll when menu is open
            if (menu.classList.contains('is-active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on menu items
        const menuItems = menu.querySelectorAll('.navbar-item');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                burger.classList.remove('is-active');
                menu.classList.remove('is-active');
                burger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!burger.contains(e.target) && !menu.contains(e.target)) {
                burger.classList.remove('is-active');
                menu.classList.remove('is-active');
                burger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect - DISABLED
    // const navbar = document.querySelector('.navbar');
    // let lastScrollTop = 0;
    // 
    // window.addEventListener('scroll', function() {
    //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     
    //     if (scrollTop > lastScrollTop && scrollTop > 100) {
    //         // Scrolling down
    //         navbar.style.transform = 'translateY(-100%)';
    //     } else {
    //         // Scrolling up
    //         navbar.style.transform = 'translateY(0)';
    //     }
    //     
    //     lastScrollTop = scrollTop;
    // });
    // 
    // // Add transition to navbar
    // navbar.style.transition = 'transform 0.3s ease-in-out';
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.column, .content, .buttons');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Image lazy loading
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.95)';
        img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        imageObserver.observe(img);
    });
    
    // Typing effect for main title - DISABLED
    // const mainTitle = document.querySelector('.title.is-size-2');
    // if (mainTitle) {
    //     const text = mainTitle.textContent;
    //     mainTitle.textContent = '';
    //     mainTitle.style.borderRight = '2px solid #3273dc';
    //     
    //     let i = 0;
    //     const typeWriter = function() {
    //         if (i < text.length) {
    //             mainTitle.textContent += text.charAt(i);
    //             i++;
    //             setTimeout(typeWriter, 100);
    //         } else {
    //             setTimeout(() => {
    //                 mainTitle.style.borderRight = 'none';
    //             }, 1000);
    //         }
    //     };
    //     
    //     // Start typing effect after a short delay
    //     setTimeout(typeWriter, 500);
    // }
    
    // Parallax effect for hero image
    const heroImage = document.querySelector('.image img');
    if (heroImage) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            heroImage.style.transform = `translateY(${parallax}px)`;
        });
    }
    
    // Add click tracking for analytics (placeholder)
    const trackClick = function(element, action) {
        // This would integrate with your analytics service
        console.log(`Tracked: ${action} on ${element}`);
    };
    
    // Track social media clicks
    const socialLinks = document.querySelectorAll('a[href*="github"], a[href*="twitter"], a[href*="linkedin"]');
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.href.includes('github') ? 'GitHub' : 
                           this.href.includes('twitter') ? 'Twitter' : 'LinkedIn';
            trackClick(this, `Social Media Click - ${platform}`);
        });
    });
    
    // Track newsletter signup
    const newsletterButton = document.querySelector('a[href="#newsletter"]');
    if (newsletterButton) {
        newsletterButton.addEventListener('click', function() {
            trackClick(this, 'Newsletter Signup Click');
        });
    }
    
    // Add loading state
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Remove loading spinner if exists
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 300);
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && menu.classList.contains('is-active')) {
            burger.classList.remove('is-active');
            menu.classList.remove('is-active');
        }
        
        // Tab navigation enhancement
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    // Remove keyboard navigation class on mouse use
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Add focus styles for keyboard navigation
    const style = document.createElement('style');
    style.textContent = `
        .keyboard-navigation *:focus {
            outline: 2px solid #3273dc !important;
            outline-offset: 2px !important;
        }
    `;
    document.head.appendChild(style);
    
    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debouncing to scroll events
    const debouncedScrollHandler = debounce(function() {
        // Your scroll handling code here
    }, 10);
    
    window.addEventListener('scroll', debouncedScrollHandler);
    
    console.log('Portfolio website loaded successfully! 🚀');
});
