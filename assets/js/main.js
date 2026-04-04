/**
 * Main Interactions Scripts
 * Handles loader, split-screen reveals, and interactions
 */

document.addEventListener('DOMContentLoaded', () => {

    const loader = document.getElementById('loader');
    const container = document.getElementById('container');
    const splitLeft = document.getElementById('splitLeft');
    const splitRight = document.getElementById('splitRight');

    // Remove Loader after delay mimicking loading time
    setTimeout(() => {
        loader.classList.add('hidden');
        
        // Show container nicely with slight delay
        setTimeout(() => {
            container.classList.add('loaded');
        }, 300);

    }, 1800); // adjust time based on pref

    // Hover logic for Splits
    // Since the splits expand, we use mouseenter / mouseleave on the individual splits
    if (splitLeft && splitRight && container) {
        
        const contentLeft = splitLeft.querySelector('.split-content');
        const contentRight = splitRight.querySelector('.split-content');

        if (contentLeft && contentRight) {
            contentLeft.addEventListener('mouseenter', () => {
                container.classList.add('hover-left');
            });

            contentLeft.addEventListener('mouseleave', () => {
                 container.classList.remove('hover-left');
            });

            contentRight.addEventListener('mouseenter', () => {
                container.classList.add('hover-right');
            });

            contentRight.addEventListener('mouseleave', () => {
                container.classList.remove('hover-right');
            });
        }
    }

    // Optional: add slight mousemove parallax on the container if we want extra flair
    // for now sticking to the robust CSS driven split layout

    // =========================================
    // Scroll Animations GSAP
    // =========================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // ── About Me Animations ──
        const aboutSection = document.querySelector('.about-section');
        if (aboutSection) {
            gsap.from(".about-image-wrapper", {
                scrollTrigger: {
                    trigger: ".about-section",
                    start: "top 75%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
            gsap.from(".about-content-split > *", {
                scrollTrigger: {
                    trigger: ".about-section",
                    start: "top 75%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            });
        }

        // ── Education Roadmap Animations ──

        // Animate the vertical line drawing downwards
        gsap.to(".roadmap-line-progress", {
            scrollTrigger: {
                trigger: ".roadmap-container",
                start: "top center",
                end: "bottom center",
                scrub: 1
            },
            height: "100%",
            ease: "none"
        });

        // Loop through each roadmap item and trigger it when it comes into view
        const roadmapItems = document.querySelectorAll('.roadmap-item');
        roadmapItems.forEach((item, index) => {
            ScrollTrigger.create({
                trigger: item,
                start: "top 80%",
                onEnter: () => item.classList.add('active'),
            });
        });

        // ── Working Experience Animations ──

        // Animate the experience vertical line
        gsap.to(".experience-line-progress", {
            scrollTrigger: {
                trigger: ".experience-container",
                start: "top center",
                end: "bottom center",
                scrub: 1
            },
            height: "100%",
            ease: "none"
        });

        // Loop through each experience item and trigger it
        const expItems = document.querySelectorAll('.exp-item');
        expItems.forEach((item, index) => {
            ScrollTrigger.create({
                trigger: item,
                start: "top 80%",
                onEnter: () => item.classList.add('active'),
            });
        });
    }

    // Theme Toggle logic removed.
    
    // =========================================
});

// Fix for Browser Back Button (Back-Forward Cache)
window.addEventListener('pageshow', (event) => {
    // When returning to this page from another page via 'Back' button
    if (event.persisted) {
        const container = document.getElementById('container');
        if (container) {
            // Remove any stuck hover states
            container.classList.remove('hover-left');
            container.classList.remove('hover-right');
        }
        
        // Ensure loader is hidden in case it glitches
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('hidden');
        }
    }
});