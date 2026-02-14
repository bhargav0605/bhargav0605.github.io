// Bhargav Parmar Portfolio - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {

  // Smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Icon hover effect: grayscale by default, show brand colors on hover
  // This applies to all devicon icons and local images in tool-pills
  const toolPills = document.querySelectorAll('.tool-pill');

  toolPills.forEach(pill => {
    const icon = pill.querySelector('i, img.tool-icon');
    if (icon) {
      // Set grayscale filter by default
      icon.style.filter = 'grayscale(1)';
      icon.style.transition = 'filter 0.3s ease';

      // On hover: remove grayscale to show brand colors
      pill.addEventListener('mouseenter', function() {
        icon.style.filter = 'grayscale(0)';
      });

      // On mouse leave: return to grayscale
      pill.addEventListener('mouseleave', function() {
        icon.style.filter = 'grayscale(1)';
      });
    }
  });

  // Intersection Observer for fade-up animations
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

  // Observe sections for scroll animations
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  // Experience card expand/collapse functionality
  const expCards = document.querySelectorAll('.exp-card');

  expCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Prevent expansion if clicking on a link
      if (e.target.tagName === 'A') {
        return;
      }

      this.classList.toggle('expanded');
    });
  });

  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoading = submitBtn.querySelector('.btn-loading');
  const formMessage = document.getElementById('form-message');

  let lastSubmitTime = 0;
  const COOLDOWN_PERIOD = 60000; // 60 seconds

  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Check cooldown period
      const now = Date.now();
      if (now - lastSubmitTime < COOLDOWN_PERIOD) {
        const remainingSeconds = Math.ceil((COOLDOWN_PERIOD - (now - lastSubmitTime)) / 1000);
        showMessage(`Please wait ${remainingSeconds} seconds before submitting again.`, 'error');
        return;
      }

      // Get form data
      const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value.trim(),
        website: contactForm.querySelector('input[name="website"]').value // Honeypot
      };

      // Honeypot check
      if (formData.website) {
        showMessage('Invalid submission detected.', 'error');
        return;
      }

      // Basic validation
      if (!formData.name || !formData.email || !formData.message) {
        showMessage('Please fill in all required fields.', 'error');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
      }

      // Disable button and show loading
      submitBtn.disabled = true;
      btnText.style.display = 'none';
      btnLoading.style.display = 'inline';
      formMessage.style.display = 'none';

      try {
        // TODO: Replace with actual API Gateway URL after deployment
        const API_ENDPOINT = 'YOUR_API_GATEWAY_URL_HERE';

        // For now, simulate success (will be replaced with actual API call)
        // const response = await fetch(API_ENDPOINT, {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(formData)
        // });

        // Simulate API call for now
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Simulate success
        // const data = await response.json();
        // if (response.ok) {
          showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
          contactForm.reset();
          lastSubmitTime = Date.now();
        // } else {
        //   throw new Error(data.error || 'Failed to send message');
        // }

      } catch (error) {
        console.error('Form submission error:', error);
        showMessage('Failed to send message. Please try again or email me directly.', 'error');
      } finally {
        // Re-enable button
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
      }
    });
  }

  function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';

    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 5000);
    }
  }

  // Mobile menu toggle (if needed in future)
  const navBurger = document.querySelector('.nav-burger');
  const navMenu = document.querySelector('.nav-menu');

  if (navBurger && navMenu) {
    navBurger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      navBurger.classList.toggle('active');
    });
  }

  console.log('Portfolio loaded successfully!');
});
