document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.getElementById('animated-title');
    // Array of objects with text and retainScavhub flag
    const texts = [
        { text: "Welcome to the best script hub!", retainScavhub: false, special: true }, // Special case for initial load
        { text: "#1 Decaying Winter script", retainScavhub: true },
        { text: "Quality Scripts", retainScavhub: true },
        { text: "Active community", retainScavhub: false },
        { text: "Trusted script", retainScavhub: false }
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delayAfterComplete = false;

    function type() {
        const current = texts[textIndex];
        const next = texts[(textIndex + 1) % texts.length];

        if (isDeleting) {
            if (current.retainScavhub && !next.retainScavhub && charIndex > 7) {
                charIndex = Math.max(7, charIndex - 1); // Retain "Scavhub" during deletion
            } else {
                charIndex--;
            }

            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                delayAfterComplete = false;
            }
        } else {
            charIndex++;
            if (charIndex === current.text.length) {
                delayAfterComplete = true;
                setTimeout(() => {
                    isDeleting = true;
                }, 2000); // Wait 2 seconds before deleting
            }
        }

        titleElement.textContent = current.text.substring(0, charIndex);
        titleElement.classList.toggle('blinking', !isDeleting);

        setTimeout(type, isDeleting ? 75 : 100); // Faster typing
    }

    function startTyping() {
        // Start typing and deleting the special case text, then proceed with the rest
        type();
    }

    // Initialize the typing animation
    startTyping();
});

document.getElementById('faq-button').addEventListener('click', () => {
    window.location.href = 'faq.html';
     // Redirect to the FAQ page
     
});
document.getElementById('products-button').addEventListener('click', () => {
    window.location.href = 'products.html';
});

document.getElementById('offersss').addEventListener('click', () => {
    window.location.href = 'products.html';
});

const hoverBall = document.getElementById('hover-ball');

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', (e) => {
        const rect = e.target.getBoundingClientRect();
        hoverBall.style.left = `${rect.left + rect.width / 2 - 5}px`;
        hoverBall.style.top = `${rect.bottom + 5}px`;
        hoverBall.style.opacity = 1;
     });

    button.addEventListener('mouseleave', () => {
        hoverBall.style.opacity = 0;
    });
});

