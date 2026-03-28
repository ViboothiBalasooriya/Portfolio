// Developer page — GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Hero animations timeline
const tl = gsap.timeline({ delay: 0.3 });

tl.to('.hero-eyebrow', {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out'
})
.to('.hero-title-line', {
    opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.15
}, '-=0.4')
.to('.hero-desc', {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out'
}, '-=0.5')
.to('.hero-actions', {
    opacity: 1, y: 0, duration: 0.7, ease: 'power3.out'
}, '-=0.4')
.to('.hero-socials', {
    opacity: 1, y: 0, duration: 0.7, ease: 'power3.out'
}, '-=0.4');

// Project cards scroll reveal
gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true
        },
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: i * 0.15,
        ease: 'power2.out'
    });
});

// Skills scroll reveal
gsap.utils.toArray('.skill-group').forEach((group, i) => {
    gsap.to(group, {
        scrollTrigger: {
            trigger: group,
            start: 'top 88%',
            once: true
        },
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: i * 0.12,
        ease: 'power2.out'
    });
});

// Contact cards scroll reveal
gsap.utils.toArray('.contact-card').forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            once: true
        },
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: i * 0.1,
        ease: 'power2.out'
    });
});

// Navbar scroll-shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0,0,0,0.9)';
    } else {
        navbar.style.background = 'rgba(0,0,0,0.6)';
    }
});