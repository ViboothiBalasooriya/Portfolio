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
});