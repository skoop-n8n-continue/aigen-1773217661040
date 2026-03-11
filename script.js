// Digital signage logic
document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello World App Initialized');

    // Add a subtle pulse animation to the images
    const images = document.querySelectorAll('.top-image');
    images.forEach((img, index) => {
        img.style.animation = `pulse 3s ease-in-out ${index * 0.5}s infinite alternate`;
    });

    // Simple auto-refresh every hour to keep content fresh for signage
    setTimeout(() => {
        window.location.reload();
    }, 3600000);
});

// Keyframes for image pulse
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes pulse {
    from { transform: scale(1); }
    to { transform: scale(1.05); }
}
`;
document.head.appendChild(styleSheet);
