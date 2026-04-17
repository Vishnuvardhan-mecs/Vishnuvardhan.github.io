// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Mobile Navigation Toggle (Simple implementation)
const mobileBtn = document.querySelector('.nav-mobile-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(10, 10, 12, 0.95)';
        navLinks.style.padding = '2rem';
        navLinks.style.gap = '1rem';
        navLinks.style.textAlign = 'center';
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling (Preventing page reload)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Sending...';
        btn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            btn.innerText = 'Message Sent!';
            btn.style.background = '#10b981'; // Success Green
            contactForm.reset();
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });
}

// Mouse Follower for Desktop
const mouseFollower = document.createElement('div');
mouseFollower.className = 'mouse-follower';
document.body.appendChild(mouseFollower);

document.addEventListener('mousemove', (e) => {
    mouseFollower.style.left = e.clientX + 'px';
    mouseFollower.style.top = e.clientY + 'px';
    
    // Parallax effect for blobs
    const blobs = document.querySelectorAll('.blob');
    const moveX = (e.clientX - window.innerWidth / 2) * 0.05;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.05;
    
    blobs.forEach((blob, index) => {
        const factor = index === 0 ? 1 : -1;
        blob.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
    });
});

// To trigger reveal on load
window.onload = () => {
    reveal();
    
    // Add reveal class to sections
    document.querySelectorAll('section').forEach(section => {
        if(section.id !== 'home' && section.tagName !== 'NAV') {
            section.classList.add('reveal');
        }
    });

    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('reveal');
    });
};
