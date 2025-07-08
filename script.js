// Loader logic
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.transition = "opacity 0.5s ease";
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});

// Smooth scrolling fallback for older browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Social sidebar hover JS
const socialLinks = document.querySelectorAll('.social-sidebar a');

socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#ffffff';
    });

    link.addEventListener('mouseleave', () => {
        link.style.color = '#b0b0b0';
    });
});

// Header hide/show on scroll
let lastScrollY = window.scrollY;
const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Scrolling down
        header.style.top = "-100px";
    } else {
        // Scrolling up
        header.style.top = "0";
    }

    lastScrollY = currentScrollY;
});
