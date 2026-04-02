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
        
        splitLeft.addEventListener('mouseenter', () => {
            container.classList.add('hover-left');
        });

        splitLeft.addEventListener('mouseleave', () => {
             container.classList.remove('hover-left');
        });

        splitRight.addEventListener('mouseenter', () => {
            container.classList.add('hover-right');
        });

        splitRight.addEventListener('mouseleave', () => {
            container.classList.remove('hover-right');
        });
    }

    // Optional: add slight mousemove parallax on the container if we want extra flair
    // for now sticking to the robust CSS driven split layout

    // =========================================
    // Roadmap Animations GSAP
    // =========================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

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
                start: "top 75%", // Triggers when the top of the item hits 75% down the viewport
                onEnter: () => item.classList.add('active'),
                // Optional: remove if you want them to undisplay when scrolling back up
                // onLeaveBack: () => item.classList.remove('active') 
            });
        });
    }

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