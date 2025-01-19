// JavaScript for interactive features

// Contact form validation and submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all fields before submitting.');
        return;
    }

    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById('contact-form').reset();
});

// Gallery image hover effect
const galleryImages = document.querySelectorAll('.gallery-item img');
galleryImages.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.05)';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

// Surprise Pop-up message
window.addEventListener('load', () => {
    setTimeout(() => {
        alert('Surprise! Mariha Chan is amazing, isn\'t she? ❤️');
    }, 5000); // Show after 5 seconds
});