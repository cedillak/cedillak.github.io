// confetti.js

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('confetti-button');
    button.addEventListener('click', function() {
        const confettiTarget = document.getElementById('confetti-target');
        // Initialize the confetti function here
        confetti(confettiTarget);
    });
});

function confetti(target) {
    // This function will generate the confetti effect
    // You can use a confetti library like Canvas Confetti (https://www.kirilv.com/canvas-confetti/) or any other
    console.log("Confetti triggered!");
    // Example confetti effect using Canvas Confetti library
    if (typeof confetti === 'function') {
        confetti({
            target: target,
            angle: 90,
            spread: 55,
            startVelocity: 45,
            elementCount: 50,
            decay: 0.9,
        });
    } else {
        console.warn('Confetti library not loaded');
    }
}
