// script.js
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.single-image img');

    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.opacity = 0.1;
        });

        img.addEventListener('mouseout', () => {
            img.style.opacity = 1;
        });
    });
});